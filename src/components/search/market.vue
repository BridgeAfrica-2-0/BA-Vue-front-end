<template>
  <div v-if="islogin">
    <Skeleton :loading="prodLoader" />
     <Skeleton :loading="prodLoader" />
    <b-alert v-if="products.data.length === 0 && !prodLoader" show variant="warning"
      ><a href="#" class="alert-link">
        {{ $t("search.No_product_available_for_that_search") }}!
      </a></b-alert
    >
 
 <div v-if="!prodLoader">  
     <div
      v-for="(product, index) in products.data"
      :key="index"
      class="people-style p-3 border h-100"
    >  
     <span v-if="product">  
      <div class="d-inline-flex">
        <div class="mr-2">
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
            <span
              class="title cursor-pointer"
              @click="productDetails(product)"
            >
              {{ product.name }}
            </span>
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
            <span class="price  mt-2"> {{ product.price }} FCFA </span>
          </p>
        </div>
      </div>
      <br />
    
    <div class="d-flex"> 

        <b-badge v-if="!product.in_stock" class="text-center m-auto" show variant="info">Out of Stock</b-badge>
         </div> 
         
          <div v-if="product.in_stock" class="d-inline-flex float-right mt-2">
        <div v-if="product.in_stock" class=""> 
          <BtnCtaMessage
            :element="product"
            :isProduct="true"
            :isBuyNow="true"
            type="business"
            :isPremium="product.user_package_name"
          />
        </div>

        <div class="ml-2">
          <b-button
           :disabled="!product.in_stock"
           size="sm"
            v-if="product.user_package_name == 'premium'"
            variant="primary"
            @click="handleAddToCard(product)"
            ><span>
              <b-icon icon="cart4"></b-icon>
              {{ $t("general.Add_to_Cart") }}</span
            >
          </b-button>
        </div>
      </div>

      <br />
      <br />
     </span>
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
      product:{},
      
      currentPage: 1,
      nextLoad: false,
    };
  },
  computed: {
     islogin(){  return this.$store.getters["auth/isLogged"]; },
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
    Skeleton,
  },

  created() {
    this.islogin = this.$store.getters["auth/isLogged"];

    if (this.islogin) {
      this.getProducts();
    }
  },

  methods: {
    /**
     * This will be ignored on rendering
     * @private
     */
     closeDetailsProduct() {
      this.viewProduct = false;
    },

    getProductDetails(product) {
      /**
       * Fired when the button is clicked.
       */
      console.log(product);
      this.product = product;
      this.viewProduct = true;
    },


     productDetails(product) {
    
      this.product = product;
      this.viewProduct = true;
    },
    

    /**
     * This will be ignored on rendering
     * @private
     */
    changePage(value) {
      /**
       * Fired when the button is clicked.
       */

      this.currentPage = value;

      this.$store
        .dispatch("marketSearch/nextPage", {
          url: this.products.next,
          page: this.currentPage,
        })
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

      await this.$store
        .dispatch("marketSearch/searchProducts", {})
        .then((res) => {
          this.total = this.products.total;
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
        .dispatch("cart/addToCart", product)
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
     font-size: 1.0625rem;
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
  .btn {
    padding-top: 6px;
    height: 38px;
    width: 123px;
  }
  .title {
     font-size: 1.0625rem;
    font-weight: 500;
    line-height: 1.2;
    text-transform: capitalize;
  }
}
</style>
