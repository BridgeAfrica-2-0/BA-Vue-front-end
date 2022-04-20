<template>
  <div v-if="islogin">
    <!-- <b-spinner
      v-if="prodLoader"
      variant="primary"
      :label="$t('search.Spinning')"
    ></b-spinner> -->

    <Skeleton  :loading="prodLoader" />
      <Skeleton  :loading="prodLoader" />

    <b-alert v-if="products.data.length === 0" show variant="warning"
      ><a href="#" class="alert-link">
        {{ $t("search.No_product_available_for_that_search") }}!
      </a></b-alert
    >


    


    <!-- <div
      v-for="(prod, index) in products.data"
      :key="index"
      class="people-style shadow h-100"
    >
      <b-row>
        <b-col md="4" cols="4">
          <div class="center-img">
            <img fluid :src="prod.picture" center class="r-image" />
          </div>
        </b-col>
        <b-col md="4" cols="8">
          <div class="flx100">
            <p class="textt">
              <strong
                class="title cursor-pointer"
                @click="getProductDetails(prod)"
              >
                {{ prod.name }}
              </strong>
              <br />

              <span class="price">
                <strong> {{ prod.price }} Fcfa </strong>
              </span>
              <br />
              <strong> {{ $t("search.Description") }} </strong>
              <br />

              <read-more
                :more-str="$t('search.read_more')"
                class="readmore"
                :text="prod.description"
                link="#"
                :less-str="$t('search.read_less')"
                :max-chars="100"
              >
              </read-more>
            </p>
          </div>
        </b-col>

        <b-col md="4" cols="12">
          <div class="s-button">
            <b-row align-h="center">
              <b-col
                md="12"
                lg="4"
                xl="12"
                sm="12"
                cols="4"
                class="mt-2 text-center"
              >
         <b-button variant="primary" @click="buyNow(prod)"
                  ><span> {{ $t("search.Buy_now") }} </span>
                </b-button> 
                <BtnCtaMessage
                  :element="prod"
                  :isProduct="true"
                  :isBuyNow="true"
                  type="business"
                   :isPremium="prod.user_package_name "
                />
              </b-col>

              <b-col
                md="12"
                lg="4"
                xl="12"
                sm="12"
                cols="4"
                class="mt-2 text-center"
              >
                <b-button  v-if="prod.user_package_name =='premium'" variant="primary" style="width:100%" @click="AddToCard(prod)"
                  >
                  <b-icon icon="cart4"></b-icon>
                  <span>Add to Cart</span>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div> -->

     <div
      v-for="(product, index) in products.data"
      :key="index"
      class="people-style p-3 shadow h-100"
    >
      <div class="d-inline-flex">
        <div>
          <div class="center-img">
            <img
              :src="product.picture"
              class="r-image cursor-pointer"
              @click="productDetails(product)"
            />
          </div>
        </div>

        <div class="flx50">
          <p class="text">
            <strong
              class="title cursor-pointer"
              @click="productDetails(product)"
            >
              {{ product.name }}
            </strong>
            <br />

            <read-more
              more-str="read more"
              class="readmore"
              :text="product.description"
              link="#"
              less-str="read less"
              :max-chars="100"
            >
            </read-more>
            <span class="price username mt-2"> {{ product.price }} FCFA </span>
          </p>
        </div>
      </div>
      <br />
      <div class="d-inline-flex float-right mt-2">
        <div class="">
          <!-- <b-button variant="primary" @click="buyNow(product)"
            ><span>{{ $t("general.Buy_Now") }}</span>
          </b-button> -->
          <BtnCtaMessage
            :element="product"
            :isProduct="true"
            :isBuyNow="true"
            type="business"
            :isPremium="product.user_package_name "  
          />
        </div>

        <div class="ml-2">
          <b-button  v-if="product.user_package_name =='premium'" variant="primary" @click="handleAddToCard(product)"
            ><span> <b-icon icon="cart4"></b-icon> {{ $t("general.Add_to_Cart") }}</span>
          </b-button>
        </div>
      </div>

      <br />
      <br />
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
  <div v-else>
    <login />
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
import login from "@/components/search/login";
import Skeleton from "@/components/skeleton";
export default {
  data() {
    return {
      viewProduct: false,
      total: 0,
      per_page: 10,
      list: [],
      islogin: true,
      currentPage: 1,
      nextLoad: false,
    };
  },
  computed: {
    products() {
      return this.$store.getters["marketSearch/getProducts"];
    },
    prodLoader() {
      return this.$store.getters["marketSearch/getLoader"];
    },

    getStatus() {
      return this.$store.state.cart.status;
    },
  },

  components: {
    ProductDetails,
    login,
    Skeleton
  },

  created() {
    this.islogin = this.$store.getters["auth/isLogged"];

    console.log(this.islogin);
    if(this.islogin){  
    this.getProducts();

     }
  },

  methods: {
     /**
       * This will be ignored on rendering
       * @private
    */
    getProductDetails(product) {
       /**
         * Fired when the button is clicked.
         */
      console.log(product);
      this.product = product;
      this.viewProduct = true;
    },


     /**
       * This will be ignored on rendering
       * @private
    */
    changePage(value) {
      // this.$store.commit("marketSearch/setProducts", '');
      // this.$store.commit("marketSearch/setLoader", true);
      // this.prodLoader = true;
      /**
         * Fired when the button is clicked.
         */

      this.currentPage = value;

      this.$store
        .dispatch("marketSearch/nextPage", {url:this.products.next, page:this.currentPage } )
        .then((res) => {
          console.log("products list: ");
          console.log(this.products);
          // this.prodLoader = false;
        })
        .catch((err) => {
          // this.prodLoader = false;
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
      // this.prodLoader = true;
      await this.$store
        .dispatch("marketSearch/searchProducts", {})
        .then((res) => {
         
          // this.prodLoader = false;
          this.total = this.products.total;
        })
        .catch((err) => {
          // this.prodLoader = false;
          console.log("loader: ", this.prodLoader);
          console.log("products error: ");
          console.error(err);
        });
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
          console.log(error);
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
h6 {
  text-align: center;
  font-weight: bold;
}
.short {
  text-align: center;
}
.price {
  text-align: center;
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
}
.people-style {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: white;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
}
@media only screen and (max-width: 540px) {
  .text {
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
    font-size: 16px;
    color: black;
    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .btn {
    padding-top: 6px;
    font-size: 10px;
    height: 28px;
    width: 85px;
  }
}
@media only screen and (min-width: 540px) and (max-width: 762px) {
  .text {
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
    min-width: 123px;
  }
  .title {
    font-size: 20px;
    color: black;
    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
  .btn {
    padding-top: 6px;
    height: 38px;
    width: 123px;
  }
  .title {
    font-size: 20px;
    color: black;
    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
}
</style>
