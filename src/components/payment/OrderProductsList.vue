<template>
  <div id="orderList">
    {{ cart.business_items }}
    <div v-for="(business, i) in cart" :key="i">
      <div class="d-block d-md-flex">
        <div>
          <div
            class=" order-item mb-4"
            v-for="(cart_item, i) in business.business_items"
            :key="i"
          >
            <div class="d-inline-flex">
              <div class="">
                <!-- <ProductCaroussel :productImages="images(cart_item.product_picture)" /> -->
                <img :src="cart_item.product_picture" class="r-image" alt="" />
              </div>
              <div class=" flex-fill order-info body-font-size m-auto ">
                <b-tr>
                  <b-td class="capitalized b-none">
                    {{ $t("general.Name") }}
                  </b-td>
                  <b-th>
                    {{ cart_item.product_name }}
                  </b-th>
                </b-tr>
                <b-tr>
                  <b-td class="b-none"> {{ $t("general.Amount") }} : </b-td>
                  <b-th>
                    {{ formatMoney(Number(cart_item.product_price)) }}
                  </b-th>
                </b-tr>

                <b-tr>
                  <b-td class="b-none"> {{ $t("general.Quantity") }} : </b-td>
                  <b-th>
                    {{ cart_item.quantity }}
                    <!-- <input
									class="quantity-input"
									type="number"
									min="1"
									@change="changeQuantity($event, i)"
									v-model="cart_item.quantity"
								/> -->
                  </b-th>
                </b-tr>
                <b-tr> </b-tr>
                <b-tr>
                  <b-td class="b-none"> {{ $t("general.Total") }}: </b-td>
                  <b-th>
                    {{ formatMoney(Number(cart_item.sub_total)) }}
                  </b-th>
                </b-tr>
              </div>
            </div>
          </div>
        </div>

        <div class="m-auto">
          <h6>
            Business name:
            <span class="shipping-t"> {{ business.business_name }} </span>
          </h6>
          <h6>
            Shipping Fee:
            <span class="shipping-t">
              {{ formatMoney(Number(business.business_shipping_cost)) }}
            </span>
          </h6>
        </div>
      </div>
      <hr class="dotted-hr" />
    </div>

    <div class="row my-4" v-if="loading">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <b-spinner
          variant="primary"
          style="width: 3rem; height: 3rem;"
          label="Loading"
        ></b-spinner>
      </div>
    </div>
    <div class="row" v-if="error">
      <div class="col-12">
        <b-alert dismissible show variant="secondary"
          >{{ $t("general.Your_cart_is_empty") }}!</b-alert
        >
      </div>
    </div>
    <div class="row my-4">
      <div class="col-12 d-flex justify-content-center"></div>
    </div>

    <infinite-loading
      :identifier="infiniteId"
      @infinite="infiniteHandler"
      ref="infiniteLoading"
    ></infinite-loading>
  </div>
</template>

<script>
// import ProductCaroussel from "./ProductCaroussel.vue";
import axios from "axios";
import { getGuestIdentifier } from "../../helpers";
import { mapGetters } from "vuex";

export default {
  name: "OrderProductsList",
  components: {
    // ProductCaroussel,
  },
  async created() {
    this.loading = true;
    await this.$store
      .dispatch(
        "checkout/getshippingsummary",
        this.$store.getters["auth/isLogged"]
      )
      .then(() => {
        this.loading = false;
        this.error = false;
      })
      .catch(() => {
        this.loading = false;
        this.error = true;
      });
  },
  methods: {
    RefreshSipping() {
      this.page = 1;
      this.cart = [];
      this.infiniteId += 1;
      this.$refs.infiniteLoading.attemptLoad();
    },

    infiniteHandler($state) {
      if (!this.goNextPage && $state) {
        $state.complete();
        // return;
      }
      let url = this.$store.getters["auth/isLogged"]
        ? "cart/shippingSummary/" + this.page
        : `guest/cart/shippingSummary/${
            this.page
          }?guest_identifier=${getGuestIdentifier()}`;
      axios
        .get(url)
        .then(({ data }) => {
          if (data.total <= data.data.length) this.goNextPage = false;
          if (data.data.length > 0) {
            this.page += 1;
            if (data.data.length > 0) {
              data.data.forEach(dat => {
                if (dat.business_items.length > 0) {
                  this.cart.push(dat);
                  this.notifyParent();
                }
              });
            } else {
              $state.complete();
            }
            if ($state) $state.loaded();
          } else {
            if ($state) $state.complete();
          }
        })
        .catch(err => {});
    },

    changePage(value) {
      this.loading = true;
      this.currentPage = value;
      let url = "ckeckout-cart&page=" + value;

      this.$store
        .dispatch("checkout/next", url)
        .then(res => {
          console.log(res);
          this.loading = false;
        })

        .catch(err => {
          console.error(err);
        });
    },

    images(img1) {
      let image = [];
      if (img1.length) {
        image = img1;
      } else {
        image.push({
          img: img1
        });
      }
      return image;
    },

    shippingCost(item) {
      let data = {};

      for (let val in item) {
        // console.log(key + " -- " + value);
        data = {
          adress: val,
          price: item[val]
        };
      }

      return data;
    },

    changeQuantity(event, index) {
      let quantity = event.target.value;
      if (quantity < 1) {
        quantity = 1;
      }
      this.cart.data[index].quantity = quantity;
      // this.order_items[index].quantity = quantity;
    },
    formatMoney(money) {
      return this.formatObject.format(money);
    },
    makeOrderforCurrentPage(cart, currentPage) {
      return cart["data"].slice(
        (currentPage - 1) * this.per_page,
        currentPage * this.per_page
      );
    },
    notifyParent() {
      this.$emit("customEvent", { data: this.cart });
    }
  },
  data() {
    return {
      currentPage: 1,
      per_page: 3,
      loading: false,
      error: false,
      cart: [],
      infiniteId: +new Date(),
      page: 1,
      formatObject: new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XAF",
        minimumFractionDigits: 2
      }),
      orderForCurrentPage: [],
      productImages: [
        {
          img: require("@/assets/img/payment/headset.jpg")
        },
        {
          img: require("@/assets/img/payment/headset1.jpg")
        },
        {
          img: require("@/assets/img/payment/headset2.jpg")
        },
        {
          img: require("@/assets/img/payment/headset3.jpg")
        }
      ],
      goNextPage: true
    };
  },
  computed: {
    ...mapGetters({
      shippingAddressChanges: "checkout/shippingAddressChanges"
    }),
    rowsOrder() {
      let rows = 1;
      if (this.cart["data"]) {
        rows = this.cart["data"].length;
      }
      return rows;
      // return this.order_items.length;
    },
    cartt() {
      return this.$store.state.checkout.shippingsummary;
    }
  },
  watch: {
    currentPage: function(val) {
      this.orderForCurrentPage = this.cart["data"].slice(
        (val - 1) * this.per_page,
        val * this.per_page
      );
    },
    shippingAddressChanges: val => {
      console.log(val, "addres cahnged");
      // this.infiniteHandler()
    }
  }
};
</script>

<style scoped>
.shipping-t {
  font-weight: 600;
  text-transform: capitalize;
}
.capitalized {
  text-transform: capitalize;
}

.dotted-hr {
  border: 0;
  border-top: 2px dotted black;
  height: 0;
  margin: 20px 0;
  position: relative;
}

@media only screen and (min-width: 768px) {
  .title {
    font-size: 20px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: 60px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .r-image {
    border-radius: 8px;

    height: 160px;
    width: 160px;
  }
}

@media only screen and (max-width: 768px) {
  .a-flex {
    margin-right: -15px;
  }

  .s-button {
    padding: 15px;
    margin-top: -15px;
  }

  .title {
    font-size: 16px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 12px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .btn {
    padding-top: 6px;
    font-size: 10px;

    height: 28px;
    width: 85px;
  }

  .r-image {
    border-radius: 8px;

    height: 100px;
    width: 100px;
  }
}

.cimage {
  height: 200px;
  width: 100%;
  object-fit: cover;
}
.quantity-input {
  width: 2rem !important;
  border: none !important;
  outline: none !important;
}

.order-info td,
.order-info th {
  padding: 2px 12px !important;
}
.quantity-input::-webkit-inner-spin-button {
  opacity: 1;
}

.order-item-caroussel {
  max-width: 200px;
}

@media only screen and (max-width: 548px) {
  .order-item-caroussel {
    max-width: 100%;
  }
}
</style>
