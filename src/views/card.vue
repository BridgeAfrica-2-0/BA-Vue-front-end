<template>
  <base-layout :top="30">
    <template v-slot:main>
      <div class="bg-white">
        <!-- <navbar /> -->

        <div class="cart-wrapper container" style="margin-bottom: 300px;">
          <h1 class="mt-5 my-bag">{{ $t("general.My_Cart") }} ({{ (cart?.data[0]?.cartItems) ? cart?.data[0]?.cartItems : 0 }})</h1>
          <div class="row pt-5">
            <div class="col-lg-8">
              <div v-for="(business, i) in cart?.data[0]?.businesses" :key="i">
                <div style="margin-right: 150px;">
                  <Skeleton :loading="loading" />
                </div>
                <div v-if="!loading" class="mt-4">
                  <div class="d-flex justify-content-between card-top-content mb-3">
                    <h4>{{ business.business_name }}</h4>
                    <button class="clear-btn d-block d-sm-none" @click.prevent="clearBusinessItems(business?.items)">{{ $t("general.Clear") }}</button>
                    <a href="" class="clear d-none d-sm-block" @click.prevent="clearBusinessItems(business?.items)">{{ $t("general.Clear") }}</a>
                  </div>
                  <div v-for="(cart_item, i) in business.items" :key="i">
                    <div class="mobile-cart-item d-block d-sm-none">
                      <div class="d-flex cart-item-wrapper mt-4">
                        <div class="row m-0 p-0" style="flex-grow: 1;">
                          <div class="col-12">
                            <img :src="cart_item.product_picture" class="product-image w-100" />
                          </div>
                          <div class="col-12 product-details-container">
                            <h6 class="product-name">{{ cart_item.product_name }}</h6>
                            <div class="availability-section">
                              <label for="" class="text-black availability-label">{{ $t("general.availability") }}:</label>
                              <span class="ml-2" :class="cart_item.product_in_stock ? 'in-stock' : 'out-of-stock'">
                                {{ $t("general.only") }} {{ cart_item.stock_available }}
                                <span v-if="cart_item.product_in_stock">{{
                                  $t("general.in_stock")
                                  }}</span>
                                <span v-else>{{
                                  $t("general.out_of_stock")
                                  }}</span>
                              </span>
                            </div>
                            <div class="product-description">
                              {{
                                cart_item.product_description.length > 150
                                  ? cart_item.product_description.slice(0, 150) + "..."
                                  : cart_item.product_description
                              }}
                            </div>
                            <div class="price-section my-2">
                              <h6 class="discount-price mb-0">
                                {{ (cart_item.product_price - cart_item?.discount_price)?.toFixed(2) ?? "" |
                                  locationPrice(rate)
                                }}
                              </h6>
                            </div>
                            <button class="save-button d-flex align-items-center mt-3" @click.prevent>
                              <img class="heart" src="assets/images/heart.png" alt="" />
                              <span class="save-text">Save</span>
                            </button>
                            <div class="d-flex align-items-center justify-content-between mt-4 mb-2">
                              <input type="number" class="product-quantity numbersize form-control"
                                @change="changeQuantity($event, cart_item.item_id)" :max="cart_item.stock_available"
                                :min="1" v-model="cart_item.quantity" />
                              <button class="remove-btn" @click="removeIconFromCart(cart_item.product_id)">Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Desktop view (unchanged) -->
                    <div class="d-none d-sm-flex cart-item-wrapper mt-4">
                      <div class="row m-0 p-0" style="flex-grow: 1;">
                        <img :src="cart_item.product_picture" class="product-image col-lg-3 m-0 cursor-pointer" @click="goToDetail(cart_item.product_id)"/>
                        <div class="col-lg-9 col-md-6 mt-3">
                          <h6 class="product-name cursor-pointer" @click="goToDetail(cart_item.product_id)">{{ cart_item.product_name }}</h6>
                          <div>
                            <label for="" class="text-black">{{ $t("general.availability") }}:</label>
                            <span class="ml-2">{{ $t("general.only") }} {{ cart_item.stock_available }}
                              <span class="" v-if="cart_item.product_in_stock">{{
                                $t("general.in_stock")
                                }}</span>
                              <span class="text-danger" v-else>{{
                                $t("general.out_of_stock")
                                }}</span></span>
                          </div>
                          <div>
                            <label for="" class="text-black">{{ $t("general.business_info") }}:</label>
                            <span class="ml-2 cursor-pointer" @click="handleBusinessClick(business.slug)"> {{ business.business_name }}</span>
                          </div>
                          <div class="">
                            {{
                              cart_item.product_description.length > 150
                                ? cart_item.product_description.slice(0, 150) + "..."
                                : cart_item.product_description
                            }}
                          </div>
                          <div class="d-flex align-items-center justify-content-between mt-3 mb-3">
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
                        </div>
                        <img class="cross" src="assets/images/cross.png"
                          @click="removeIconFromCart(cart_item.product_id)" alt="cross" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
// import navbar from "@/components/navbar.vue";
import OrderSummary from "../components/order-summary/OrderSummary.vue";
import Skeleton from "../components/skeleton";
import axios from "axios";
import { getGuestIdentifier } from "../helpers";
import { checkCountry, convertToCurrency } from "../helpers";

import BaseLayout from "@/layouts/Layout"
export default {
  components: {  OrderSummary, Skeleton, BaseLayout },
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
        perPage: 2,
        perMove: 1,
        arrows: true,
        pagination: false,
        autoplay: false,
        gap: '1rem',
      },
      storageListener: null,
    };
  },
  created() {
    this.loading = true;
    this.getCartItems();
    this.getCartSummary();
    this.loading = false;
    console.log("loading cart items");
    this.storageListener = this.handleStorageChange.bind(this);
    window.addEventListener('storage', this.storageListener);
    document.addEventListener('settings-updated', this.refreshCurrencyAndRates.bind(this));
  },
  beforeDestroy() {
    // Remove event listeners when component is destroyed
    if (this.storageListener) {
      window.removeEventListener('storage', this.storageListener);
    }
    document.removeEventListener('settings-updated', this.refreshCurrencyAndRates);
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
  // filters: {
  //   locationPrice(ev, rate) {
  //     let priceFormatted = 0.0;
  //     if (rate) {
  //       if (rate?.currency === 'XAF') {
  //         priceFormatted = `${(ev / rate.rate).toFixed(2).replace('.', ',')} ${rate.currency}`;
  //       } else {
  //         priceFormatted = ` ${(ev / rate?.rate).toFixed(2)} ${rate?.currency}`;
  //       }
  //     }
  //     else {
  //       priceFormatted = `0.0`
  //     }
  //     return priceFormatted;
  //   }
  // },
  filters: {
  // locationPrice(ev, rate) {
  //   if (!ev || isNaN(ev)) return '0.00';
  //   if (!rate || !rate.currency) return `${parseFloat(ev).toFixed(2)} USD`;
    
  //   try {
  //     // Convert the value according to the rate
  //     const convertedValue = parseFloat(ev) / (rate.rate || 1);
      
  //     // Format according to currency
  //     switch (rate.currency) {
  //       case 'XAF':
  //         // Use comma as decimal separator for XAF
  //         return `${convertedValue.toFixed(2).replace('.', ',')} ${rate.currency}`;
  //       case 'EUR':
  //         return `${convertedValue.toFixed(2)} €`;
  //       case 'GBP':
  //         return `£${convertedValue.toFixed(2)}`;
  //       case 'JPY':
  //         // No decimal places for JPY
  //         return `¥${Math.round(convertedValue)}`;
  //       case 'PKR':
  //         return `Rs ${convertedValue.toFixed(2)}`;
  //       default:
  //         // Default format with currency code
  //         return `${convertedValue.toFixed(2)} ${rate.currency}`;
  //     }
  //   } catch (error) {
  //     console.error('Error in locationPrice filter:', error);
  //     return `${parseFloat(ev).toFixed(2)} ${rate?.currency || 'USD'}`;
  //   }
  // }
  // Enhanced locationPrice function for more consistent currency display
 locationPrice(value, rate) {
  if (!value || isNaN(value)) return '0.00';
  if (!rate || !rate.currency) return `${parseFloat(value).toFixed(2)} USD`;
  
  try {
    // Convert the value according to the rate
    const convertedValue = parseFloat(value) / (rate.rate || 1);
    
    // Get symbol from currency data if available
    const cachedCurrencyData = localStorage.getItem("currencyRate");
    let symbol = "";
    
    if (cachedCurrencyData) {
      try {
        const parsed = JSON.parse(cachedCurrencyData);
        symbol = parsed.symbol || "";
      } catch (e) {
        console.error("Error parsing cached currency for symbol:", e);
      }
    }
    
    // Format according to currency code
    switch (rate.currency) {
      case 'XAF':
        // Use comma as decimal separator for XAF
        return `${convertedValue.toFixed(2).replace('.', ',')} ${symbol || rate.currency}`;
      case 'EUR':
        return `${convertedValue.toFixed(2)} ${symbol || '€'}`;
      case 'GBP':
        return `${symbol || '£'}${convertedValue.toFixed(2)}`;
      case 'JPY':
        // No decimal places for JPY
        return `${symbol || '¥'}${Math.round(convertedValue)}`;
      case 'PKR':
        return `${symbol || 'Rs'} ${convertedValue.toFixed(2)}`;
      case 'USD':
        return `${symbol || '$'}${convertedValue.toFixed(2)}`;
      default:
        // Try to get a formatter based on locale if available
        try {
          const locale = localStorage.getItem("lang") || 'en';
          const formatter = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: rate.currency,
            minimumFractionDigits: 2
          });
          return formatter.format(convertedValue);
        } catch (e) {
          // Default format with currency code if formatter fails
          return `${convertedValue.toFixed(2)} ${symbol || rate.currency}`;
        }
    }
  } catch (error) {
    console.error('Error formatting price:', error);
    return `${parseFloat(value).toFixed(2)} ${rate?.currency || 'USD'}`;
  }
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
      // let totalItems = this.cart.total;
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
    goToDetail(id) {
      this.$router.push(`/product-details/${id}`);
    },
    handleBusinessClick(slug) {
      if (this.islogin) {
        this.$router.push({
          name: "BusinessFollower",
          params: { id: slug }
        });
      } 
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
        .then(() => {
          this.loader = false;
        })

        .catch((err) => {
          console.error(err);
        });
    },
    async handleStorageChange(event) {
      // Check if relevant localStorage keys were changed
      if (
        event.key === 'country' ||
        event.key === 'currencyRate' ||
        event.key === 'userSelectedCurrency' ||
        event.key === 'isLocal'
      ) {
        console.log('Detected settings change, refreshing currency data');
        await this.refreshCurrencyAndRates();
      }
    },
    async refreshCurrencyAndRates() {
      console.log('Refreshing currency and rates');
      try {
        // Re-fetch currency rate
        this.rate = await convertToCurrency();
        
        // Update locale and currency from new settings
        let countryData = localStorage.getItem("country");
        if (countryData) {
          try {
            const parsedCountry = JSON.parse(countryData);
            this.locale = parsedCountry.country || 'CM';
            this.isCameroon = this.locale === 'CM';
          } catch (e) {
            console.error('Error parsing country data:', e);
          }
        }
        
        this.currency = this.rate.currency;
        
        // Force component re-render
        this.$forceUpdate();
        
        console.log('Updated currency settings:', {
          locale: this.locale,
          currency: this.currency,
          rate: this.rate,
          isCameroon: this.isCameroon
        });
      } catch (err) {
        console.error('Error refreshing currency settings:', err);
      }
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
          .then(() => {
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
        .then(() => {
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
/* Original styles */
.color-btn {
  color: red;
}
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
  border-bottom: 1px solid rgba(192, 192, 192, 0.493);
}

/* NEW MOBILE STYLES */
@media (max-width: 767.98px) {
  .product-image {
    height: auto !important;
    width: 100% !important;
    max-height: 200px !important;
    object-fit: contain;
    object-position: center;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 15px !important;
    border-radius: 4px;
  }
  
  .mobile-cart-item {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
  
  .mobile-cart-item .cart-item-wrapper {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  .product-details-container {
    padding-top: 10px;
    padding-bottom: 15px;
  }

  .availability-section {
    margin: 12px 0;
    padding: 5px 0;
  }
  
  .availability-label {
    font-weight: 600;
    color: #333;
  }
  
  .in-stock {
    color: #2e7d32;
    font-weight: 500;
  }
  
  .out-of-stock {
    color: #d32f2f;
    font-weight: 500;
  }
  
  .product-description {
    margin: 10px 0;
    line-height: 1.5;
    color: #575757;
    font-size: 14px;
  }
  
  .price-section {
    background-color: rgba(0,0,0,0.03);
    padding: 8px;
    border-radius: 4px;
  }
  
  .remove-btn {
    background-color: #fff;
    color: #d32f2f;
    border: 1px solid #d32f2f;
    border-radius: 4px;
    padding: 8px 16px;
    font-weight: 500;
    min-width: 100px;
    transition: all 0.2s ease;
  }
  
  .remove-btn:active {
    background-color: #ffebee;
  }
  
  .save-button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    padding: 5px 0;
    cursor: pointer;
  }
  
  .save-button:active {
    opacity: 0.7;
  }
  
  .save-text {
    margin-left: 8px;
    text-decoration: underline;
    font-weight: 500;
    color: #000;
  }
  
  .clear-btn {
    background-color: #f5f5f5;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px 15px;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>