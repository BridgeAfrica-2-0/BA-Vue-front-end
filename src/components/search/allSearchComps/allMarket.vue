<template>
  <div>
    <b-spinner
      v-if="prodLoader"
      variant="primary"
      :label="$t('search.Spinning')"
    ></b-spinner>

    <b-alert v-if="products.total == 0" show variant="warning"
      ><a href="#" class="alert-link">
        {{ $t("search.No_product_available_for_that_search") }}!
      </a></b-alert
    >
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
          />
        </div>

        <div class="ml-2">
          <b-button variant="primary" @click="handleAddToCard(product)"
            ><span>{{ $t("general.Add_to_Cart") }}</span>
          </b-button>
        </div>
      </div>

      <br />
      <br />
    </div>
    <ProductDetails
      @closemodal="closeDetailsProduct"
      :showModal="viewProduct"
      :product="product"
    />
  </div>
</template>

<script>
import ProductDetails from "@/components/businessf/ProductDetails.vue";
export default {
  props: ["products"],
  data() {
    return {
      viewProduct: false,
      total: 0,
      per_page: 10,
      list: [],
      currentPage: 1,
      nextLoad: false,
    };
  },

  components: {
    ProductDetails,
  },

  computed: {
    prodLoader() {
      return this.$store.getters["allSearch/getLoader"];
    },
    getStatus() {
      return this.$store.state.cart.status;
    },
  },

  methods: {
    productDetails(product) {
      console.log(product);
      this.product = product;
      this.viewProduct = true;
    },
    closeDetailsProduct() {
      this.viewProduct = false;
    },

    buyNow(product) {
      this.handleAddToCard(product);
      this.$router.push({ name: "payment" });
    },

    handleAddToCard(product) {
      this.product = product;
      console.log("add to card ", this.product.id);
      this.$store
        .dispatch("cart/addToCart", this.product)
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

    changePage(value) {
      // this.$store.commit("marketSearch/setProducts", '');
      // this.$store.commit("marketSearch/setLoader", true);

      // this.prodLoader = true;
      this.currentPage = value;

      this.$store
        .dispatch("marketSearch/nextPage", this.currentPage)
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
  },
};
</script>



<style scoped>
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