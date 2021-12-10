<template>
  <div class="container">
    <navbar />
    <div class="row">
      <FlashMessage />
      <div class="col-12 col-md-9">
        <hr />
        <div class="row">
          <div class="col"><h3 class="mx-5">{{$t("general.PRODUCT_DETAILS")}}</h3></div>
          <div class="col">
            <div class="row desktop">
              <h3 class="mx-5">{{$t("general.Quantity")}}</h3>
              <h3 class="mx-5">{{$t("general.price")}}</h3>
              <h3 class="mx-5">{{$t("general.Total")}}</h3>
            </div>
          </div>
        </div>
        <hr />
        <div class="row my-4" v-if="loading">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <b-spinner
              style="width: 3rem; height: 3rem;"
              label="Loading"
            ></b-spinner>
          </div>
        </div>
        <div v-if="!loading">
          <div v-for="(cart_item, i) in orderForCurrentPage" :key="i">
            <div class="row ">
              <div class="col-4 col-md-3">
                <splide :options="{ rewind: true }" class="r-img">
                  <splide-slide>
                    <img
                      :src="
                        'https://edson.maxinemoffett.com' +
                          cart_item.product_picture
                      "
                      class="r-img"
                    />
                  </splide-slide>
                </splide>
              </div>

              <div class="col-8 col-md-4 text-end text-start bold ">
                <div class="row">
                  <div class="col-5 p-0"><h3>{{$t("general.Name_of_item")}} :</h3></div>
                  <div class="col">
                    <h3
                      class="h3 cursor"
                      v-b-tooltip.hover.top="cart_item.product_name"
                    >
                      {{ cart_item.product_name.substring(0, 12) + "..." }}
                    </h3>
                  </div>
                </div>

                <div class="row">
                  <div class="col-5 p-0"><h3>{{$t("general.product_ID")}} :</h3></div>
                  <div class="col">
                    <h3 class="h3">{{ cart_item.product_id }}</h3>
                  </div>
                </div>

                <div class="row">
                  <div class="col-5 p-0">
                    <h3 class="">{{$t("general.description")}}:</h3>
                  </div>
                  <div class="col">
                    <h3
                      class="h3 cursor"
                      v-b-tooltip.hover.top="cart_item.product_description"
                    >
                      {{
                        cart_item.product_description.substring(0, 118) + ".."
                      }}
                    </h3>
                  </div>
                </div>
              </div>
              <div class="row line"></div>
              <div class="col marg5">
                <div class="row ">
                  <div class="col-4 p-0 bg-y ">
                    <input
                      type="number"
                      value="2"
                      @change="changeQuantity($event, i)"
                      v-model="cart_item.quantity"
                      class="numbersize marg1"
                    />
                  </div>
                  <div class="col text-success p-0 ">
                    <h3 class="marg2">{{ cart_item.product_price }} XAF</h3>
                  </div>
                  <div class="col p-0 text-success  text-center">
                    <h3 class="marg3">
                      {{ cart_item.product_price * cart_item.quantity + 1000 }}
                      XAF
                    </h3>
                  </div>
                  <div class="col-1 p-0  ">
                    <fas-icon
                      @click="removeIconFromCart(cart_item.product_id)"
                      class="couleur search  marg4 cursor"
                      :icon="['fas', 'trash-alt']"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <div class="d-flex justify-content-center">
            <b-pagination
              v-model="currentPage"
              pills
              aria-controls="orderList"
              :per-page="per_page"
              :total-rows="rowsOrder"
            ></b-pagination>
          </div>
        </div>
      </div>
      <div class=" line"></div>
      <div class="col-12 col-md-3 color">
        <h3 class="my-2">{{$t("general.ORDER_SUMMARY")}}</h3>
        <hr />
        <div class="row">
          <div class="col">
            <h3>{{$t("general.ITEMS")}} {{ rowsOrder }}</h3>
          </div>
          <div class="col">
            <h3>{{ getTotalPrice }} XAF</h3>
          </div>
        </div>
        <br />
        <form action="">
          {{$t("general.SHIPPING")}}
          <input type="text" class="form-control" />
          {{$t("general.PROMO_CODE")}}
          <input type="text" class="form-control" />
          <button class="btn btncolor shadow"><h3>{{$t("general.Apply")}}</h3></button>
        </form>
        <br />
        <hr />
        <br />

        <div class="row">
          <div class="col"><h3>{{$t("general.TOTAL_COST")}}</h3></div>
          <div class="col"><h3>22000 XAF</h3></div>
        </div>
        <button class="btn btn1 form-control shadow" @click="gotoCheckout">
          <h3>{{$t("general.CHECKOUT")}}</h3>
        </button>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
import axios from "axios";
export default {
  components: { navbar },
  data() {
    return {
      currentPage: 1,
      per_page: 5,
      loading: false,
      error: false,
      formatObject: new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XAF",
        minimumFractionDigits: 2,
      }),
      orderForCurrentPage: [],
      img: ["http://urlr.me/YMQXD", "https://placekitten.com/400/300"],
    };
  },
  created() {
    this.getCartItems();
  },
  watch: {
    currentPage: function(val) {
      this.orderForCurrentPage = this.cart["data"].slice(
        (val - 1) * this.per_page,
        val * this.per_page
      );
    },
  },
  computed: {
    rowsOrder() {
      let rows = 1;
      if (this.cart["data"]) {
        rows = this.cart.total;
      }

      return rows;
      // return this.order_items.length;
    },
    cart() {
      return this.$store.state.checkout.cart;
    },
    getTotalPrice() {
      let totalItems = this.cart.total;
      return 0;
    },
  },
  methods: {
    async getCartItems() {
      this.loading = true;
      await this.$store
        .dispatch("checkout/getCart")
        .then(() => {
          this.loading = false;
          this.error = false;
          this.orderForCurrentPage = this.makeOrderforCurrentPage(
            this.cart,
            this.currentPage
          );
        })
        .catch(() => {
          this.loading = false;
          this.error = true;
        });
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
    gotoCheckout() {
      this.$router.push("/checkout");
    },
    async removeIconFromCart(id) {
      this.loading = true;
      await axios
        .delete(`cart/item/${id}/delete`)
        .then((result) => {
          console.log(result);
          this.getCartItems();
          this.flashMessage.show({
            status: "success",
            blockClass: "custom-block-class",
            message: "Item Removed Successfully",
          });
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.flashMessage.show({
            status: "error",
            blockClass: "custom-block-class",
            message: "Unable to remove item at this moment",
          });
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1201px) {
  .desktop {
    display: none;
  }
  .color {
    background-color: #c5c5c546;
    margin-top: 15px;
    /* height: 500px; */
  }

  .marg1 {
    margin-left: 180px;
  }
  .marg2 {
    margin-left: 90px;
    /* padding-left: 2px; */
  }

  .marg5 {
    margin-top: -20px;
  }
  h3 {
    font-size: 12px;
    font-weight: bold;
  }
  .h3 {
    font-weight: normal;
  }
  .cursor {
    cursor: pointer;
  }
  .numbersize {
    width: 40px;
    height: 20px;
  }
  .line {
    width: 100%;
  }

  .btncolor {
    background-color: #e75c18;
    /* margin-top: 10px;
  height: 30px;
  width: 120px; */
    color: white;
    line-height: 10px;
  }
  .btn1 {
    background-color: #e75c18;
    /* margin-top: 10px;
  height: 30px; */

    color: white;
    line-height: 10px;
  }
  .couleur {
    color: red;
  }

  .r-img {
    border-radius: 5px;
    height: 150px;
  }
}

/* style for desktop ------------------------------------ */
@media only screen and (min-width: 1200px) {
  h3 {
    font-size: 14px;
    font-weight: bold;
  }
  .h3 {
    font-weight: normal;
  }
  .color {
    background-color: #c5c5c546;
    margin-top: 15px;
    height: 500px;
  }
  .btncolor {
    background-color: #e75c18;
    margin-top: 10px;
    height: 30px;
    width: 120px;
    color: white;
    line-height: 10px;
  }
  .btn1 {
    background-color: #e75c18;
    margin-top: 10px;
    height: 30px;

    color: white;
    line-height: 10px;
  }
  .couleur {
    color: red;
  }
  .r-img {
    border-radius: 5px;
    height: 150px;
    width: 190px;
  }
  .numbersize {
    width: 40px;
    height: 20px;
  }
}
</style>
