<template>
  <div v-if="islogin" class="px-3">
    <Skeleton :loading="prodLoader" />
    <Skeleton :loading="prodLoader" />
    <b-alert
      v-if="products.data.length === 0 && !prodLoader"
      show
      variant="warning"
      ><a href="#" class="alert-link">
        {{ $t("search.No_product_available_for_that_search") }}!
      </a></b-alert
    >

    <div v-if="!prodLoader">
      <div class="row">
        <div
        v-for="(product, index) in products.data"
        :key="index"
        class="col-lg-3 col-md-6 col-sm-6 mb-4 position-relative"
      >
        <div class="card shadow-none p-0 h-100">
          <div class="image-container mb-2" @click="goToDetail(product.id)">
          <v-lazy-image
            :src="product.picture"
            :alt="product.name"
            class="product-image"
          />
        </div>
        <div class="content-container  cursor-pointer" @click="goToDetail(product.id)">
          <div class="stock-status">
            <span class="text-success" v-if="product.in_stock">{{
              $t("general.in_stock")
            }}</span>
            <span class="text-danger" v-else>{{
              $t("general.out_of_stock")
            }}</span>
          </div>
          <!-- <h3 @click="navigateToCart(product)">{{ product.name }}</h3> -->
          <h3 class="font-weight-bold">
                {{ product.name }}
            </h3>
          <p style="margin-bottom: 7em;">
            {{
              product.description.length > 50
                ? product.description.slice(0, 50) + "..."
                : product.description
            }}
          </p>
        </div>
        <div class="bottom-info">
          <span class="price font-weight-bold"
            >{{ product.price | locationPrice(rate, currencySelected) }}
          </span>
          <div class="w-100"  v-if="product.in_stock">
                  <div class="d-flex justify-content-between w-100 mt-1" style="gap: 20px;">
                    <!-- <button class="buy_now_btn btn flex-grow-1 d-flex align-items-center" @click="navigateToCart(product)">
                      <span style="font-size: 12px !important; font-weight: bold;">{{ $t('general.buy_now') }}</span>
                      <span class="arrow-icon">
                        <i class="fas fa-arrow-right"></i>
                      </span>
                    </button> -->
                    <button
                class="add_to_cart btn flex-grow-1 d-flex align-items-center"
               
                @click="handleAddToCard(product)"
              >
                <span
                  style="font-size: 12px; font-weight: bold;"
                  >{{ $t("general.Add_to_Cart") }}</span
                >
                <span class="arrow-icon">
                        <i class="fas fa-arrow-right"></i>
                      </span>
              </button>
                  </div>
                </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    <!-- pagination -->
    <b-pagination
      v-if="products.next || products.previous"
      v-model="currentPage"
      :total-rows="total"
      pills
      :per-page="per_page"
      aria-controls="my-table"
      @change="changePage"
      align="center"
      :disabled="products.data.length > 0 ? false : true"
    ></b-pagination>
    <!-- End pagination -->

    <ProductDetails
      @closemodal="closeDetailsProduct"
      :showModal="viewProduct"
      :product="product"
    />
  </div>

  <div v-else class="px-3">
    <!-- <login /> -->
    <Skeleton :loading="prodLoader" />
    <Skeleton :loading="prodLoader" />
    <b-alert
      v-if="guestUserProducts.data.length === 0 && !prodLoader"
      show
      variant="warning"
      ><a href="#" class="alert-link">
        {{ $t("search.No_product_available_for_that_search") }}!
      </a></b-alert
    >

    <div v-if="!prodLoader">
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-sm-6 mb-4 position-relative"
          v-for="(product, index) in guestUserProducts.data.slice(0, 8)"
          :key="index"
        >
          <div class="card shadow-none m-0 p-0 h-100">
            <div class="image-container mb-2" @click="goToDetail(product.id)">
              <v-lazy-image
                :src="product.picture"
                :alt="product.name"
                class="product-image"
              />
              <div class="position-absolute top-right"></div>
            </div>
            <div class="content-container cursor-pointer" @click="goToDetail(product.id)">
              <div class="stock-status">
                <span class="text-success" v-if="product.in_stock">{{
                  $t("general.in_stock")
                }}</span>
                <span class="text-danger" v-else>{{
                  $t("general.out_of_stock")
                }}</span>
              </div>
              <h3 class="font-weight-bold">
                {{ product.name }}
              </h3>
              <p style="margin-bottom: 7em;">
                {{
                  product.description.length > 50
                    ? product.description.slice(0, 50) + "..."
                    : product.description
                }}
              </p>
            </div>
            <div class="bottom-info">
          <span class="price font-weight-bold"
            >{{ product.price | locationPrice(rate, currencySelected) }}
          </span>
          <div class="w-100" v-if="product.in_stock">
                  <div class="d-flex justify-content-between w-100 mt-1" style="gap: 10px;">
                    <button
                class="add_to_cart flex-grow-1 btn d-flex align-items-center"
                style="font-size: 12px; font-weight: bold;"
                
                @click="handleAddToCard(product)"
              >
              {{ $t("general.Add_to_Cart") }}
              <span class="arrow-icon">
                        <i class="fas fa-arrow-right"></i>
                      </span>
              </button>
                  </div>
                </div>
        </div>
          </div>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <b-pagination
      v-if="guestUserProducts.next || guestUserProducts.previous"
      v-model="currentPage"
      :total-rows="total"
      pills
      :per-page="per_page"
      aria-controls="my-table"
      @change="changePageForGuest"
      align="center"
      :disabled="guestUserProducts.data.length > 0 ? false : true"
    ></b-pagination>
    <!-- End pagination -->

    <ProductDetails
      @closemodal="closeDetailsProduct"
      :showModal="viewProduct"
      :product="product"
    />
  </div>
</template>

<script>
/**
 * The custom HTML `<market>` component.
 *
 * @author Edouard Yonga
 * Copyright (c) Bridge Africa. All rights reserved.
 */
import ProductDetails from "@/components/businessf/ProductDetails.vue";
import Skeleton from "@/components/skeleton";
import VLazyImage from "v-lazy-image/v2";

import { LocalisationMixins } from "@/mixins";
export default {
  mixins: [LocalisationMixins],
  data() {
    return {
      viewProduct: false,
      total: 0,
      per_page: 10,
      list: [],
      product: {},
      currentPage: 1,
      nextLoad: false,
    };
  },
  computed: {
    islogin() {
      return this.$store.getters["auth/isLogged"];
    },
    products() {
      return this.$store.getters["marketSearch/getProducts"];
    },
    guestUserProducts() {
      return this.$store.getters["marketSearch/getGuestUserProducts"];
    },
    prodLoader() {
      return this.$store.getters["marketSearch/getLoader"];
    },

    getStatus() {
      return this.$store.state.cart.status;
    },
  },

  filters: {
    locationPrice: function(ev, rate, currency) {
      const symbol = currency?.symbol ? currency?.name : "XAF";
      return rate ? `${(ev / rate).toFixed(2)} ${symbol}` : `${ev} ${symbol}`;
    },
  },

  components: {
    ProductDetails,
    VLazyImage,
    // login,
    Skeleton,
  },

  created() {
    this.onInit();
    this.islogin = this.$store.getters["auth/isLogged"];

    if (this.islogin) {
      this.getProducts();
    } else {
      this.getGuestUserProducts();
    }
  },

  methods: {
    async onInit() {
      //this.rate = await convertCurrency()
    },
    /**
     * This will be ignored on rendering
     * @private
     */
    closeDetailsProduct() {
      this.viewProduct = false;
    },

    goToDetail(id) {
      this.$router.push(`/product-details/${id}`);
    },

    getProductDetails(product) {
      /**
       * Fired when the button is clicked.
       */
      console.log(product);
      this.product = product;
      this.viewProduct = true;
    },

    navigateToCart(product) {
      this.handleAddToCard(product);
      this.$router.push("/cart");
    },
    productDetails(product) {
      this.product = product;
      this.viewProduct = true;
    },
    nextPage(payload) {
      return this.$store.dispatch("marketSearch/nextPage", payload);
    },

    /**
     * This will be ignored on rendering
     * @private
     */
    changePage(value) {
      this.currentPage = value;
      const endpoint =
        this.products.next != "" ? this.products.next : this.products.previous;
      this.nextPage({ url: endpoint, page: value })
        .then((res) => {
          console.log("products list: ");
          console.log(this.products);
        })
        .catch((err) => {
          this.total = this.products.total;
          console.log("products error: ");
          console.error(err);
        });
    },

    changePageForGuest(value) {
      this.currentPage = value;
      const endpoint =
        this.guestUserProducts.next != ""
          ? this.guestUserProducts.next
          : this.guestUserProducts.previous;
      this.nextPage({ url: endpoint, page: value })
        .then((res) => {
          console.log("products list: ");
          console.log(this.guestUserProducts);
        })
        .catch((err) => {
          this.total = this.guestUserProducts.total;
          console.log("products error: ");
          console.error(err);
        });
    },
    /**
     * This will be ignored on rendering
     * @private
     */
    async getProducts() {
      /**
       * Fired before the DOM is loaded.
       */

      await this.$store
        .dispatch("marketSearch/searchProducts", {})
        .then((res) => {
          this.total = this.products.total;
        })
        .catch((err) => {});
    },
    async getGuestUserProducts() {
      /**
       * Fired before the DOM is loaded.
       */

      await this.$store
        .dispatch("marketSearch/searchGuestUserProducts", {})
        .then((res) => {
          this.total = this.guestUserProducts.total;
        })
        .catch((err) => {});
    },

    /**
     * This will be ignored on rendering
     * @private
     */
    buyNow(prod) {
      /**
       * Fired when the button is clicked.
       */
      this.AddToCard(prod);
      this.$router.push({ name: "payment" });
    },

    /**
     * This will be ignored on rendering
     * @private
     */

    handleAddToCard(product) {
      this.product = product;

      this.$store
        .dispatch("cart/addToCart", { product, islogin: this.islogin })
        .then((response) => {
          this.flashMessage.show({
            status: "success",
            message: this.getStatus,
          });
        })
        .catch((err) => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "error occur",
          });
        });
    },

    AddToCard(id, val) {
      /**
       * Fired when the button is clicked.
       */
      console.log("add to card ", id);
      this.$store
        .dispatch("cart/addToCart", id)
        .then((response) => {
          console.log("----", this.getStatus);
          this.flashMessage.show({
            status: "success",
            message: this.getStatus,
          });
          if (val) this.$router.push({ name: "payment" });
        })
        .catch((error) => {
          this.flashMessage.show({
            status: "error",
            message: "error occur",
          });
        });
    },
  },
};
</script>

<style scoped>
.arrow-icon {
  background-color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0;
  margin-left: 10px;
}

.arrow-icon i {
  color: #ff6200;
}
.content-container {
  padding: 0px 15px;
}
.content-container h3 {
  font-size: 17px !important;
  line-height: 20px !important;
  color: #000000;
  text-align: left !important;
  cursor: pointer;
}

.content-container p {
  font-size: 14px !important;
  line-height: 20px !important;
  text-align: left !important;
  color: #000000;
}

.bottom-info {
  padding: 2px 15px 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /*  */
  justify-content: space-between;
  position: absolute;
  bottom: 0;
}

.price {
  font-weight: bold;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}
.add_to_cart {
  cursor: pointer;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  border-radius: 10px;
  color: white;
}

.add_to_cart:hover {
  background-color: #e68a00;
}

.buy_now_btn {
  cursor: pointer;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  border-radius: 10px;
  color: white;
}

.buy_now_btn:hover {
  background-color: #e68a00;
}

.text-left {
  text-align: left;
}

.image-container {
  position: relative;
  width: 100%;
  height: 200px !important;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  /* padding: 1px 10px; */
}

.product-image {
  height: 200px !important;
  width: 100%;
  /* height: 50% !important; */
  object-fit: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  cursor: pointer;
  /* border-radius: 6px; */
}

.stock-status {
  text-align: left;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  justify-content: start;
  margin-bottom: 5px;
}

.in-stock {
  color: #23c73d;
}

.bottom-info {
  padding: 2px 15px 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /*  */
  justify-content: space-between;
  position: absolute;
  bottom: 0;
}

.bottom-info {
  padding: 0px 15px 15px 15px !important;
}

.desc {
  font-size: 15px;
  line-height: 1.2;
}

.card-custom img {
  height: 200px;
  object-fit: cover;
}

/* Icône coeur en haut à droite */
.top-right {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Ajuster l'apparence de la carte */
.priceN {
  font-size: 1.5rem;
  font-weight: 600;
}

/* ED css */
button.pagination {
  width: 50px;
}

/* Not ED */
.discount {
  color: orange;
  margin-left: 60px;
}

.flx50 {
  flex-basis: 80%;
}

.spin {
  text-align: center;
  margin-top: 10%;
  margin-bottom: 10%;
  width: 4rem;
  height: 4rem;
}

.discount {
  color: orange;
  margin-left: 60px;
}

.cursor-pointer {
  cursor: pointer;
}

p {
  text-align: left;
}

input {
  border-radius: 15px;
  padding: 5px;
  border: solid 1px #ccc;
  width: 250px;
}

input:focus {
  outline-color: none;
  border: none;
}

.post {
  position: relative;
  left: -24px;
}

.prod {
  max-width: 14rem;
  cursor: pointer;
}

.stock {
  color: green;
}

.btn:focus {
  outline: none;
}

.btn {
  border-radius: 30px;
}

h6 {
  text-align: center;
  font-weight: bold;
}

.short {
  text-align: center;
}

.price {
  text-align: center;
  font-weight: 600;
}

.buy {
  border-radius: 0px;
  width: 100%;
}

.reply {
  cursor: pointer;
}

@media only screen and (min-width: 768px) {
  .marge {
    margin-left: 200px;
  }

  .pos {
    margin-left: 200px;
  }

  .center-img {
    margin-right: -60px;
  }
}

.buybtn {
  width: 100px;
}

.marketbtn {
  margin-bottom: 3px;
  float: right;
}

.price {
  font-size: 18px;
  font-weight: 400;
}

.people-style {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: white;
  background-color: #fff;
  background-clip: border-box;

  margin-bottom: 10px;
}

@media only screen and (max-width: 540px) {
  .text {
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
    /* margin-left: -30px; */
    line-height: 25px;
  }

  .r-image {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 100px;
    height: 100px;
    padding: 4px;
  }

  .title {
    font-size: 1.0625rem;
    font-weight: 500;
    line-height: 1.2;
    text-transform: capitalize;
  }

  .btn {
    padding-top: 6px;
    font-size: 10px;
    height: 28px;
    /* width: 85px; */
  }
}

@media only screen and (min-width: 540px) and (max-width: 762px) {
  .text {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;

    text-align: left;
    font-weight: normal;
    line-height: 20px;
    font-style: normal;
    padding: 1px;
    text-align: left;
    margin-right: -5px;
    line-height: 25px;
    margin-left: 75px;
  }

  .r-image {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 100px;
    width: 100px;
    padding: 4px;
  }

  .btn {
    padding-top: 6px;
    height: 38px;
    /* min-width: 123px; */
  }

  .title {
    font-size: 1.2625rem;
    font-weight: 500;
    line-height: 1.2;
    text-transform: capitalize;
  }
}

.discount {
  color: orange;
  margin-left: 60px;
}

p {
  text-align: left;
}

input {
  border-radius: 15px;
  padding: 5px;
  border: solid 1px #ccc;
  width: 250px;
}

input:focus {
  outline-color: none;
  border: none;
}

.post {
  position: relative;
  left: -24px;
}

.prod {
  max-width: 14rem;
  cursor: pointer;
}

.stock {
  color: green;
}

.btn:focus {
  outline: none;
}

.comment {
  width: 90%;
  border: solid 1px #ccc;
  border-radius: 25px;
  background-color: #ddd;
  height: 35px;
  padding-left: 10px;
  margin-left: 20px;
}

.comment:focus {
  outline: none;
}

.send-cmt {
  position: relative;
  margin-left: 93%;
  top: -28px;
  cursor: pointer;
}

h6 {
  text-align: center;
  font-weight: bold;
}

.short {
  text-align: center;
}

.price {
  text-align: center;
  font-weight: 400;
}

.buy {
  border-radius: 0px;
  width: 100%;
}

.reply {
  cursor: pointer;
}

@media only screen and (min-width: 762px) {
  .text {
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;

    text-align: left;
    font-weight: normal;
    line-height: 20px;
    font-style: normal;
    padding: 1px;
    text-align: left;
    margin-right: -5px;
    line-height: 25px;
    margin-left: 75px;
  }

  .r-image {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 160px;
    width: 160px;
    padding: 4px;
  }

  .title {
    font-size: 1.0625rem;
    font-weight: 500;
    line-height: 1.2;
    text-transform: capitalize;
  }
}
</style>
