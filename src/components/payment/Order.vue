<template>
          <div>
            <hr class="dotted-hr" />
            <div>
              <OrderProductsList
                ref="checkoutorderr"
                @customEvent="handleCustomEvent"
              />
            </div>
          </div>
</template>

<script>
// import ProductCaroussel from "./ProductCaroussel";
import OrderProductsList from "./OrderProductsList.vue";
export default {
  name: "Order",
  components: {
    OrderProductsList
  },
  data() {
    return {
      loading: false,
      isDestinationAvailable: false,
      cart: []
    };
  },
  computed: {

    order() {
      return '';
    },

    // cart() {
    //   return this.$store.state.checkout.cart;
    // },
    allShipping() {
      return this.$store.state.checkout.allShipping;
    }
  },
  methods: {
    RefreshSipping() {
      this.$refs.checkoutorderr.RefreshSipping();
    },

    showOperator() {
      this.prepareOrder();
      this.$emit("showoperator");
    },
    handleCreateOrder() {
      if (this.cartLenght) {
        if (this.isDestinationAvailable) {
          alert(
            "One or more items in your cart cannot be shipped to the selected destination."
          );
          return;
        }
        this.loading = true;
        let order_data = {};

        let order_items = this.cart.data;

        const productlength = this.cartLenght;

        this.$store
          .dispatch("checkout/createOrder", {
            isLogin: this.$store.getters["auth/isLogged"]
          })
          .then(({ data }) => {
            this.$emit(
              "showoperator",
              data.data.total_orders_amount,
              data.data.order_ids
            );
            this.loading = false;

            // this.$store
            // .dispatch("checkout/getorder", data)
            // .then(({ data }) => {

            // })
          })
          .catch(() => {
            this.loading = false;
          });
      } else {
        this.flashMessage.show({
          status: "error",

          message: "no product in your shopping cart",
          blockClass: "custom-block-class"
        });
      }
    },
    handleCustomEvent(payload) {
      this.cart = payload;
      if (this.cart.data && this.cart.data.length > 0) {
        this.isDestinationAvailable = this.cart.data.some(
          obj => obj.isDestinationAvailable === false
        );
      }
    }
  },
  mounted() {}
};
</script>

<style scoped>
.text-14 {
  font-size: 14px;
}
.btn-custom {
  height: 38px;
  min-width: 123px;
}

.dotted-hr {
  border: 0;
  border-top: 2px dotted black;
  height: 0;
  position: relative;
  margin-top: 0px !important;
  margin-bottom: 30px !important;
}


@media only screen and (max-width: 576px) {
  .btn-custom {
    display: block;
    height: 38px;
    width: 100%;
    min-width: 100% !important;
  }
}
</style>
