<template>
  <base-layout :top="30">
    <template v-slot:main>
      <div class="bg-white">
        <navbar />

        <div class="cart-wrapper container" style="margin-bottom: 300px;">
          <h1 class="mt-5 my-bag">{{ $t("general.My_Cart") }} ({{ (cart?.data[0]?.cartItems) ? cart?.data[0]?.cartItems : 0 }})</h1>
          <div class="row pt-5">
            <div class="col-lg-8">
              <div v-for="(business, i) in cart?.data[0]?.businesses" :key="i">
                <div style="margin-right: 150px;">
                  <Skeleton :loading="loading" />
                </div>
                <div v-if="!loading" class="mb-5">
                  <div class="d-flex justify-content-between card-top-content">
                    <h4>{{ business.business_name }}</h4>
                    <a href="" class="clear" @click.prevent="clearBusinessItems(business?.items)">{{ $t("general.Clear") }}</a>
                  </div>
                  <div v-for="(cart_item, i) in business.items" :key="i">
                    <div class="mt-4 d-flex cart-item-wrapper">
                      <div class="row" style="flex-grow: 1;">
                        <img :src="cart_item.product_picture" class="product-image col-lg-3" />
                        <!-- <img src="../assets/img/coach2.png" class="product-image col-lg-3" alt=""> -->
                        <div class="col-lg-9 col-md-6 mt-3">
                          <h6 class="product-name">{{ cart_item.product_name }}</h6>
                          <div>
                            <label for="" class="text-black">{{ $t("general.availability") }}:</label>
                            <span class="ml-2">{{ $t("general.only") }} {{ cart_item.stock_available }}
                              <span class="" v-if="cart_item.product_in_stock">{{
                                $t("general.in_stock")
                                }}</span>
                              <span class="text-danger" v-else>{{
                                $t("general.out_of_stock")
                                }}</span></span>
                            <!-- {{ cart_item }} -->
                          </div>
                          <div class="">
                            {{
                              cart_item.product_description.length > 150
                                ? cart_item.product_description.slice(0, 150) + "..."
                                : cart_item.product_description
                            }}
                          </div>

                          <div class="d-flex align-items-center justify-content-between mt-3">
                            <p class="mt-3">
                              <img class="heart" src="assets/images/heart.png" alt="" />
                              <a href="" class="save">Save</a>
                            </p>
                            <input type="number" class="product-quantity numbersize form-control"
                              @change="changeQuantity($event, cart_item.item_id)" :max="cart_item.stock_available"
                              :min="1" v-model="cart_item.quantity" />
                          </div>
                        </div>
                      </div>
                      <div class="product-prices d-flex" style="gap: 10px;">
                        <div class="">
                          <h6 class="discount-price">
                            {{ (cart_item.product_price - cart_item?.discount_price)?.toFixed(2) ?? "" |
                              locationPrice(rate)
                            }}
                          </h6>
                          <!-- <h6 class="actual-price" v-if="cart_item?.discount_price && cart_item?.discount_price > 0">
                        {{
                          cart_item.discount_price | locationPrice(rate)
                        }}
                      </h6> -->
                        </div>
                        <img class="cross" src="assets/images/cross.png"
                          @click="removeIconFromCart(cart_item.product_id)" alt="cross" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr class="dotted-hr" />

              <h1 class="recommended-for-you" v-if="products.length > 0">{{ $t("general.Recommended_For_You") }}</h1>
              <splide v-if="products.length > 0" :options="options" class="r-image">
                <splide-slide v-for="(product, index) in products" :key="index">
                  <div class="crtv-bans">
                    <img :src="product.picture" alt="Product Image" class="slide-img" />
                    <h3 class="mt-2">{{ product.name }}</h3>
                    <p>{{ product.price | locationPrice(rate) }}</p>
                    <a href="#" @click.prevent="handleAddToCard(product)">{{ $t("general.Add_to_Cart") }}</a>
                  </div>
                </splide-slide>
              </splide>
            </div>
            <div class="col-lg-4" style="padding-inline: 32px;">
              <OrderSummary :handleSubmit="handleSubmit" :step="0"
                :disable="buttonDisable || !cart?.data[0]?.cartItems" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </base-layout>
</template>
<script>
import navbar from "@/components/navbar.vue";
import OrderSummary from "../components/order-summary/OrderSummary.vue";
import Skeleton from "../components/skeleton";
import axios from "axios";
import { getGuestIdentifier } from "../helpers";
import { checkCountry, convertToCurrency } from "../helpers";

import BaseLayout from "@/layouts/Layout"
export default {
  components: { navbar, OrderSummary, Skeleton, BaseLayout },
  data() {
    return {
      currentPage: 1,
      buttonDisable: false,
      per_page: 5,
      loading: false,
      error: false,
      products: [],
      userLocation: {},
      formatObject: new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XAF",
        minimumFractionDigits: 2,
      }),
      locale: null,
      currency: null,
      rate: null,
      isCameroon: false,
      orderForCurrentPage: [],
      img: ["http://urlr.me/YMQXD", "https://placekitten.com/400/300"],
      options: {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        arrows: true,
        pagination: false,
        autoplay: false,
        gap: '1rem',
      },
    };
  },
  created() {
    this.loading = true;
    this.getCartItems();
    this.getCartSummary();
    this.loading = false;
    console.log("loading cart items");
  },
  async mounted() {
    this.$store.dispatch("checkout/updateStepper", 0);
    this.$store.dispatch("checkout/getCartSummary", this.islogin);
    let country = localStorage.getItem("country") ?? null;
    if (country) this.userLocation.country = country;
    else {
      this.userLocation = await checkCountry();
      localStorage.setItem('country', JSON.stringify({ country: this.userLocation?.country }));
    }

    this.rate = await convertToCurrency();
    this.locale = this.userLocation?.country ?? 'CM';
    this.currency = this.rate.currency;
    this.isCameroon = this.userLocation?.country === 'CM';
    this.getRecommandedProducts('');

  },
  filters: {
    locationPrice(ev, rate) {
      let priceFormatted = 0.0;
      if (rate) {
        if (rate?.currency === 'XAF') {
          priceFormatted = `${(ev / rate.rate).toFixed(2).replace('.', ',')} ${rate.currency}`;
        } else {
          priceFormatted = ` ${(ev / rate?.rate).toFixed(2)} ${rate?.currency}`;
        }
      }
      else {
        priceFormatted = `0.0`
      }
      return priceFormatted;
    }
  },
  watch: {
    currentPage: function (val) {
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
    formatCurrency(value) {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: 'currency',
        currency: this.currency,
        minimumFractionDigits: 2,
      });
      return formatter.format(value);
    },
    handleSubmit() {
      this.$router.push("/checkout");
    },
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
        .dispatch("checkout/getCartSummary", this.islogin)
        .then(() => { })
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
      if (quantity > 1 || quantity == 1) {
        this.buttonDisable = false;
        await this.$store
          .dispatch("checkout/updateCart", { quantity: quantity, index: index, islogin: this.islogin })
          .then((response) => {
            this.getCartSummary();
          })
          .catch((err) => {
            if (err) {
              this.buttonDisable = true;
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
          this.$store.commit("cart/addNewItem", { items: -1, add: true })
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
    async getRecommandedProducts(apiUrl) {
      this.loading = true;
      let url;
      if (apiUrl) {
        url = apiUrl
      }
      else {
        url = this.islogin
          ? `cart/recommended/items`
          : `guest/cart/recommended/items?guest_identifier=${getGuestIdentifier()}`;
      }
      await axios
        .get(url)
        .then((result) => {
          this.products = result.data.data;
          console.log(result);
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
    handleAddToCard(product) {
      this.$store
        .dispatch("cart/addToCart", { product, islogin: this.islogin })
        .then(response => {
          this.flashMessage.show({
            status: "success",
            message: "Product added successfully to cart"
          });
          this.getCartItems();
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "error occur"
          });
        });
    },
    async handleSlideChange(splide) {
      // Check if the user reached the end of the slides and there's more data to fetch
      if (splide.index >= this.products.length - 1 && this.nextPageUrl && !this.isLoading) {
        await this.getRecommandedProducts(this.nextPageUrl); // Fetch next page of data
      }
    },
    async clearBusinessItems(items) {
      const businessId = items[0].business_id;
      this.loading = true;
      if (this.islogin) {
        const url = `cart/item/${businessId}/deleteBusinessItems`;
        await axios
          .delete(url)
          .then((result) => {
            this.getCartSummary();
            console.log(result);
            this.getCartItems();
            this.flashMessage.show({
              status: "success",
              blockClass: "custom-block-class",
              message: "Items Removed Successfully",
            });
            this.loading = false;
          })
          .catch((error) => {
            console.log(error);
            this.flashMessage.show({
              status: "error",
              blockClass: "custom-block-class",
              message: "Unable to remove items at this moment",
            });
            this.loading = false;
          });
      }
      else {
        const payload = {
          business_id: businessId,
          guest_identifier: getGuestIdentifier()
        }
        const url = "guest/cart/items/delete";
        await axios
          .post(url, payload)
          .then((result) => {
            this.getCartSummary();
            console.log(result);
            this.getCartItems();
            this.flashMessage.show({
              status: "success",
              blockClass: "custom-block-class",
              message: "Items Removed Successfully",
            });
            this.loading = false;
          })
          .catch((error) => {
            console.log(error);
            this.flashMessage.show({
              status: "error",
              blockClass: "custom-block-class",
              message: "Unable to remove items at this moment",
            });
            this.loading = false;
          });
      }
    }
  },
};
</script>
<style scoped>
.empty-cart {
  justify-content: center;
  display: flex;
  margin-top: 200px;
  position: static;
}

.my-bag {
  font-size: 26px;
  font-weight: 700;
  color: #000;
}

.card-top-content h4 {
  font-size: 20px;
  font-weight: 700;
  color: #000;
}

.clear {
  font-size: 16px;
  font-weight: 600;
  color: #000;
}

.product-image {
  height: 165px !important;
  width: 200px !important;
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
  border: 2px solid #acacac !important;
  border-radius: 5px;
  background-color: #fff !important;
  margin-left: 50px;
  font-weight: 800;
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
  /* padding: 15px;
  width: 347.667px; */
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

.cart-item-wrapper {
  gap: 25px;
}
</style>