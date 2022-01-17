<template>
  <div v-if="islogin">
    <b-spinner
      v-if="prodLoader"
      variant="primary"
      :label="$t('search.Spinning')"
    ></b-spinner>

    <b-alert v-if="products.data.length === 0" show variant="warning"
      ><a href="#" class="alert-link">
        {{ $t("search.No_product_available_for_that_search") }}!
      </a></b-alert
    >
    <div
      v-for="(prod, index) in products.data"
      :key="index"
      class="people-style shadow h-100"
    >
      <b-row>
        <b-col lg="12" xl="4" md="4" cols="12" sm="12">
          <div class="center-img">
            <img fluid :src="prod.picture" center class="r-image" />
          </div>
        </b-col>
        <b-col lg="12" xl="4" md="4" cols="12" sm="12">
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

        <b-col lg="12" xl="4" md="4" cols="12" sm="12">
          <div class="s-button">
            <b-row>
              <b-col
                md="12"
                lg="4"
                xl="12"
                sm="12"
                cols="4"
                class="mt-2 text-center"
              >
                <b-button variant="primary" @click="AddToCard(prod.id, true)"
                  ><span> {{ $t("search.Buy_now") }} </span>
                </b-button>
              </b-col>

              <b-col
                md="12"
                lg="4"
                xl="12"
                sm="12"
                cols="4"
                class="mt-2 text-center"
              >
                <b-button variant="primary" @click="AddToCard(prod.id)"
                  ><span>Add to Cart</span>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>

    <!-- pagination -->
    <b-pagination
      v-if="products.next || products.previous"
      v-model="currentPage"
      :total-rows="total"
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
import ProductDetails from "@/components/businessf/ProductDetails.vue";
import login from "@/components/search/login";
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
  },

  created() {
    this.islogin = this.$store.getters["auth/isLogged"];

    console.log(this.islogin);
    this.getProducts();
  },

  methods: {
    getProductDetails(product) {
      console.log(product);
      this.product = product;
      this.viewProduct = true;
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

    async getProducts() {
      // this.prodLoader = true;
      await this.$store
        .dispatch("marketSearch/getProducts")
        .then((res) => {
          console.log("products list: ");
          console.log(this.products);
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

    buyNow() {
      this.AddToCard();
      this.$router.push({ name: "payment" });
    },

    AddToCard(id, val) {
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
  .center-img {
    margin-right: -60px;
  }

  .marge {
    margin-left: 200px;
  }
  .pos {
    margin-left: 200px;
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

  padding: 3px;
  padding-bottom: 26px;
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

    margin-left: -30px;

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
    width: 123px;
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
