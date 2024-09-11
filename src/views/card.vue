<template>
  <!-- <div class="container-fluid">
    <navbar />
    <div class="row">
      <div class="col-12 col-md-12 col-lg-9 ">
        <hr />
        <div class="row">
          <div class="col d-none d-md-block">
            <h3 class="mx-5">{{ $t("general.PRODUCT_DETAILS") }}</h3>
          </div>
          <div class="col">
            <div class="row desktop">
              <div class="col-2">
                <h3 class="text-center">{{ $t("general.Quantity") }}</h3>
              </div>
              <div class="col-4">
                <h3 class="text-center">{{ $t("general.price") }}</h3>
              </div>
              <div class="col-5">
                <h3 class="text-center">{{ $t("general.Total") }}</h3>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row my-4" v-if="loading">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <b-spinner
              variant="primary"
              style="width: 3rem; height: 3rem;"
              label="Loading"
            ></b-spinner>
          </div>
        </div>
        <div v-if="!loading">
          <div v-for="(cart_item, i) in cart.data" :key="i">
            <div class="row ">
              <div class="">
                <splide :options="{ rewind: true }" class="r-image">
                  <splide-slide>
                    <img :src="cart_item.product_picture" class="r-image" />
                  </splide-slide>
                </splide>
              </div>

              <div class="col-8 col-md-4 text-end text-start bold m-auto ">
                <div>
                  <h3 class="username">{{ cart_item.product_name }}</h3>
                </div>

                <div class="text">
                  <p>
                    <read-more
                      more-str="read more"
                      class="readmore"
                      :text="cart_item.product_description"
                      link="#"
                      less-str="read less"
                      :max-chars="50"
                    >
                    </read-more>
                  </p>
                </div>
              </div>

              <div class="col mt-2 d-none d-md-block m-auto">
                <div class="row ">
                  <div class="col-2  bg-y ">
                    <input
                      type="number"
                      @change="changeQuantity($event, cart_item.item_id)"
                      v-model="cart_item.quantity"
                      class="numbersize  form-control m-auto"
                    />
                  </div>
                  <div class="col-4 text-center  p-0 ">
                    <h3 class="marg2">
                      {{ formatMoney(cart_item.product_price) }}
                    </h3>
                  </div>
                  <div class="col-5 p-0   text-center">
                    <h3 class="marg3">
                      {{
                        formatMoney(
                          cart_item.product_price * cart_item.quantity
                        )
                      }}
                    </h3>
                  </div>
                  <div class="col-1 p-0  ">
                    <span style="margin-left:-2rem">
                      <fas-icon
                        @click="removeIconFromCart(cart_item.product_id)"
                        class="couleur search   cursor "
                        :icon="['fas', 'trash-alt']"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <br />
              <div class="row"></div>

              <div class="col-3 d-block d-md-none mt-2 ">
                <input
                  type="number"
                  @change="changeQuantity($event, cart_item.item_id)"
                  v-model="cart_item.quantity"
                  class="numbersize  form-control"
                />
              </div>

              <div class="col-3  p-0  mt-2 d-block d-md-none">
                <h3 class="">{{ formatMoney(cart_item.product_price) }}</h3>
              </div>
              <div class="col-3 p-0  text-center d-block d-md-none  mt-2">
                <h3 class="">
                  {{
                    formatMoney(cart_item.product_price * cart_item.quantity)
                  }}
                </h3>
              </div>
              <div class=" d-block d-md-none col-3   text-center  mt-2 ">
                <fas-icon
                  @click="removeIconFromCart(cart_item.product_id)"
                  class="couleur search   cursor"
                  style="margin-top:-10px"
                  :icon="['fas', 'trash-alt']"
                />
              </div>
            </div>

            <hr />
          </div>

          <div class="d-flex justify-content-center">
            <b-pagination
              v-if="cart.next || cart.previous"
              v-model="currentPage"
              pills
              :total-rows="cart.total"
              :per-page="cart.per_page"
              aria-controls="my-table"
              @change="changePage"
              align="center"
            ></b-pagination>
          </div>
        </div>
      </div>
      <OrderSummary></OrderSummary>
      <!-- <div class="col-12 col-md-12 col-lg-3  color">
        <h3 class="my-2">{{ $t("general.cart_totals") }}</h3>
        <hr />
        <div class="row">
          <div class="col">
            <h3>{{ $t("general.ITEMS") }} {{ cart_total.total_items }}</h3>
          </div>
          <div class="col">
            <h3>{{ $t("general.sub_totals") }} {{ cart_total.sub_total }}</h3>
          </div>
        </div>
        <br />
        <form action="">
          {{ $t("general.PROMO_CODE") }}
          <input type="text" class="form-control" />
          <button class="btn btncolor shadow">
            <h3>{{ $t("general.Apply") }}</h3>
          </button>
        </form>
        <br />
        <hr />
        <br />

        <div class="row">
          <div class="col">
            <h3>{{ $t("general.TOTAL_COST") }}</h3>
          </div>
          <div class="col">
            <h3>{{ formatMoney(cart_total.total_cost) }}</h3>
          </div>
        </div>
        <button class="btn btn1 form-control shadow" @click="gotoCheckout">
          <h3>{{ $t("general.CHECKOUT") }}</h3>
        </button>
        <br />
        <br />
      </div> -->
    </div>
  </div> -->
  <div>
    <navbar />
    <div class="container" style="width: 90%; margin-bottom: 300px;">
      <h1 class="mt-5 my-bag">My Cart (1)</h1>
      <div class="row pt-5">
        <div class="col-12 col-md-9 col-lg-9">
          <div v-if="!loading" >
            <div class="d-flex justify-content-between card-top-content">
              <h4>Supplier 1</h4>
              <a href="" class="clear">Clear</a>
            </div>
            <div v-for="(cart_item, i) in cart.data" :key="i">
              <div class="d-flex mt-4">
                <img :src="cart_item.product_picture" class="product-image" />
                <div class="pl-4">
                  <h6 class="product-name">{{ cart_item.product_name }}</h6>
                  <p class="product-details">Color: Black</p>
                  <p class="product-details">Size: 6.5</p>
                  <p class="product-details">Width: Medium</p>

                  <div class="d-flex align-items-center justify-content-between mt-3">
                    <p class="mt-3">
                      <img class="heart" src="assets/images/heart.png" alt="">
                      <a href="" class="save">Save</a>
                    </p>
                    <select class="product-quantity">
                      <option v-for="number in 10" :key="number" :value="number">{{ number }}</option>
                    </select>
                  </div>
                </div>
                <div class="product-prices d-flex">
                  <div class="pr-5">
                    <h6 class="discount-price">{{ formatMoney(cart_item.product_price) }}</h6>
                    <h6 class="actual-price">{{ formatMoney(cart_item.product_price) }}</h6>
                  </div>
                  <img class="cross" src="assets/images/cross.png" @click="removeIconFromCart(cart_item.product_id)" alt="cross">
                </div>
              </div>
            </div>
          </div>

          <hr class="dotted-hr">

          <h1 class="recommended-for-you">Recommended for You</h1>

          <splide :options="options" class="r-image">
            <splide-slide id="recomend-slide">
              <div class="crtv-bans">
                <img src="assets/images/product-dumy.png" alt="Image 1" class="slide-img">
                <h3 class="mt-2">JULIA SLINGBACK PUMP</h3>
                <p>$210.00</p>
                <a href="">Add to Cart</a>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="crtv-bans">
                <img src="assets/images/product-dumy.png" alt="Image 1" class="slide-img">
                <h3 class="mt-2">JULIA SLINGBACK PUMP</h3>
                <p>$210.00</p>
                <a href="">Add to Cart</a>
              </div>
            </splide-slide>
            <splide-slide>
               <div class="crtv-bans">
                <img src="assets/images/product-dumy.png" alt="Image 1" class="slide-img">
                <h3 class="mt-2">JULIA SLINGBACK PUMP</h3>
                <p>$210.00</p>
                <a href="">Add to Cart</a>
              </div>
            </splide-slide>
            <splide-slide>
               <div class="crtv-bans">
                <img src="assets/images/product-dumy.png" alt="Image 1" class="slide-img">
                <h3 class="mt-2">JULIA SLINGBACK PUMP</h3>
                <p>$210.00</p>
                <a href="">Add to Cart</a>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="crtv-bans">
                <img src="assets/images/product-dumy.png" alt="Image 1" class="slide-img">
                <h3 class="mt-2">JULIA SLINGBACK PUMP</h3>
                <p>$210.00</p>
                <a href="">Add to Cart</a>
              </div>
            </splide-slide>
          </splide>

        </div>
        <div class="col-12 col-md-3 col-lg-3" style="background-color: #F7F7F7; height: 500px;">
          Oder Summary
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
import OrderSummary from "../components/order-summary/OrderSummary.vue";
import axios from "axios";
import { getGuestIdentifier } from "../helpers";
export default {
  components: { navbar, OrderSummary },
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
      options: {
        perPage: 3,
        height: '200px',
        gap: '10px', 
        pagination: false, 
        arrows: true,
        type: "loop",
        perMove: 1,
      },
    };
  },
  created() {
    this.getCartItems();
    this.getCartSummary();
    console.log("loading cart items");
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

    cart_total() {
      return this.$store.state.checkout.cart_summary;
    },

    getTotalPrice() {
      let totalItems = this.cart.total;
      return 0;
    },

    islogin() {
      return this.$store.getters["auth/isLogged"];
    },
  },
  methods: {
    changePage(value) {
      this.currentPage = value;
      let url = this.islogin
        ? "cart?page=" + value
        : `guest/cart?page=${value}&guest_identifier=${getGuestIdentifier()}`;

      this.$store
        .dispatch("checkout/next", url)
        .then((res) => {
          this.loader = false;
        })

        .catch((err) => {
          console.error(err);
        });
    },

    async getCartSummary() {
      await this.$store
        .dispatch("checkout/getCartSummary")
        .then(() => {})
        .catch((err) => {
          console.log({ err: err });
        });
    },

    async getCartItems() {
      this.loading = true;
      await this.$store
        .dispatch("checkout/getCart", this.islogin)
        .then(() => {
          this.loading = false;
          this.error = false;
          this.orderForCurrentPage = this.makeOrderforCurrentPage(
            this.cart,
            this.currentPage
          );
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
          this.error = true;
        });
    },

    async changeQuantity(event, index) {
      let quantity = event.target.value;
      if (quantity > 1) {
        await this.$store
          .dispatch("checkout/updateCart", { quantity: quantity, index: index })
          .then((response) => {
            this.getCartSummary();
          })
          .catch((err) => {
            if (err) {
              this.getCartSummary();
              this.flashMessage.show({
                status: "error",

                message: "Quantity unavailable",
              });
            }
          });
      }
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
      const url = this.islogin
        ? `cart/item/${id}/delete`
        : `guest/cart/item/${id}/delete?guest_identifier=${getGuestIdentifier()}`;
      await axios
        .delete(url)
        .then((result) => {
          this.getCartSummary();
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
/* @media only screen and (max-width: 1201px) {
  .color {
    background-color: #c5c5c546;
    margin-top: 15px;
  }

  .marg1 {
    margin-left: 180px;
  }
  .marg2 {
    margin-left: 90px;
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
    padding: 0px;
    padding-left: 8px !important;
    height: 20px;
  }
  .line {
    width: 100%;
  }

  .btncolor {
    background-color: #e75c18;
    color: white;
    line-height: 10px;
  }

  .btn1 {
    background-color: #e75c18;
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
} */

/* style for desktop ------------------------------------ */
/* @media only screen and (min-width: 1200px) {
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
    padding: 0px;
    padding-left: 8px !important;
    height: 20px;
  }
}

.text {
  font-weight: 400;
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

.btn1:hover {
  color: white !important;
  background-color: #e75c;
}

.btncolor:hover {
  color: white !important;
  background-color: #e75c;
} */

.my-bag {
  font-size: 26px;
  font-weight: 700;
  color: #000
}

.card-top-content {
  margin-right: 150px;
}

.card-top-content h4 {
  font-size: 20px;
  font-weight: 700;
  color: #000
}

.clear {
  font-size: 16px;
  font-weight: 600;
  color: #000
}

.product-image {
  height: 165px;
  width: 140px;
  object-fit: contain; 
  object-position: center; 
  border: 1px solid #ccc;
}

.product-name {
  font-size: 16px;
  font-weight: 700;
  color: #000;
}

.product-details {
  font-size: 14px;
  font-weight: 400;
  color: #575757;
  margin-bottom: 0 !important;
}

.heart {
  width: 30px;
}

.save {
  margin-left: 12px;
  font-size: 15px;
  color: #000;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.product-quantity {
  width: 87px;  
  height: 39px; 
  padding: 0 10px; 
  font-size: 16px; 
  border: 2px solid #ACACAC !important;
  border-radius: 5px;
  background-color: #fff !important;
  margin-left: 50px;
  font-weight: 800;
}

.product-prices {
  margin-right: 150px;
  margin-left: auto
}

.discount-price {
  font-size: 16px;
  font-weight: 700;
  color: #000;
}

.actual-price {
  text-decoration: line-through;
  color: #575757;
}

.cross {
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.dotted-hr {
  border: 0;
  border-top: 2px dotted black; 
  height: 0;
  margin: 30px 0;
  position: relative;
  margin-right: 150px;
}

.recommended-for-you {
  font-size: 26px;
  font-weight: 700;
  color: #000;
}

.r-image {
  margin-right: 150px;
}

.splide__slide {
  height: auto !important;
}

.crtv-bans {
  height: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  text-align: center; 
  padding: 15px; 
}

.crtv-bans h3 {
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin-top: 15px !important;
}

.crtv-bans p {
  font-size: 14px;
  color: black;
}

.crtv-bans a {
  font-size: 14px;
  color: #000;
  text-decoration: underline;
  text-underline-offset: 4px;
}


.slide-img {
  width: 200px; 
  height: 250px; 
  object-fit: cover; 
}

.splide__arrow--prev {
  background-color: unset !important;
}

 .splide__arrow--next {
  background: grey !important;
  background-color: grey !important;
  margin-right: -25px !important;
}

</style>
