<template>
  <div>
    <div class="text-center" v-if="loader">
      <b-spinner class="spin" variant="primary"> </b-spinner>
    </div>

    <b-row v-if="!loader">
      <b-col
        md="12"
        lg="6"
        class="mb-2"
        v-for="product in products.data"
        :key="product.id"
      >
        <div class="people-style p-3 shadow h-100">
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

                <span class="price username mt-2">
                  {{ product.price }} FCFA
                </span>
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
      </b-col>
    </b-row>

    <span v-if="!loader">
      <b-pagination
        v-if="products.next || products.previous"
        v-model="currentPage"
        pills
        :total-rows="products.total"
        :per-page="per_page"
        aria-controls="my-table"
        @change="changePage"
        align="center"
      ></b-pagination>
    </span>

    <!-- EDIT PRODUCT MODAL -->

    <b-modal hide-footer title="Edit product">
      <b-form>
        <b-row>
          <b-col cols="12" md="6">
            <b-form-group
              id="input-group-1"
              :label="$t('general.Product_Name')"
              label-for="input-1"
              label-size="sm"
            >
              <b-form-input
                id="input-1"
                class="mt-1"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="$t('general.Product_Description')"
              label-for="input-1"
              label-size="sm"
            >
              <b-textarea
                id="input-1"
                class="mt-2"
                type="text"
                required
              ></b-textarea>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <div class="image-upload-wrap">
              <a href="#" data-toggle="modal" data-target="#createalbumModal">
                <div class="drag-text">
                  <i class="fa fa-plus"></i>
                  <h6>{{ $t("general.Product_Image") }}</h6>
                </div>
              </a>
              <div></div>
            </div>
          </b-col>
        </b-row>

        <b-form-group
          id="input-group-1"
          :label="$t('general.product_Price')"
          label-for="input-1"
          label-size="sm"
        >
          <b-form-input class="mt-1" id="price"></b-form-input>
        </b-form-group>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          {{ $t("general.This_Product_Is_On_Discount") }}
        </b-form-checkbox>

        <b-form-group
          id="conditions"
          :label="$t('general.Conditions')"
          label-for="input-1"
          label-size="sm"
        >
          <b-form-input class="mt-1" id="conditions"></b-form-input>
        </b-form-group>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          {{ $t("general.This_Item_Is_A_Service") }} ?
        </b-form-checkbox>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          In stock
        </b-form-checkbox>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          {{ $t("general.Published") }}
        </b-form-checkbox>

        <b-button class="mt-2 btn-block" variant="primary">
          {{ $t("general.Add") }}</b-button
        >
      </b-form>
    </b-modal>
    <!-- MODAL -->
    <!-- <div>
        <br />
      </div> -->
    <!-- </div> -->
    <!-- EDIT PRODUCT MODAL -->

    <b-modal hide-footer :title="$t('general.Edit_product')">
      <b-form>
        <b-row>
          <b-col cols="12" md="6">
            <b-form-group
              id="input-group-1"
              :label="$t('general.Product_Name')"
              label-for="input-1"
              label-size="sm"
            >
              <b-form-input
                id="input-1"
                class="mt-1"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              :label="$t('general.Product_Description')"
              label-for="input-1"
              label-size="sm"
            >
              <b-textarea
                id="input-1"
                class="mt-2"
                type="text"
                required
              ></b-textarea>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <div class="image-upload-wrap">
              <a href="#" data-toggle="modal" data-target="#createalbumModal">
                <div class="drag-text">
                  <i class="fa fa-plus"></i>
                  <h6>{{ $t("general.Product_Image") }}</h6>
                </div>
              </a>
              <div></div>
            </div>
          </b-col>
        </b-row>

        <b-form-group
          id="input-group-1"
          :label="$t('general.product_Price')"
          label-for="input-1"
          label-size="sm"
        >
          <b-form-input class="mt-1" id="price"></b-form-input>
        </b-form-group>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          {{ $t("general.This_Product_Is_On_Discount") }}
        </b-form-checkbox>

        <b-form-group
          id="conditions"
          :label="$t('general.Conditions')"
          label-for="input-1"
          label-size="sm"
        >
          <b-form-input class="mt-1" id="conditions"></b-form-input>
        </b-form-group>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          {{ $t("general.This_Item_Is_A_Service") }} ?
        </b-form-checkbox>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          {{ $t("general.In_stock") }}
        </b-form-checkbox>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          {{ $t("general.Published") }}
        </b-form-checkbox>

        <b-button class="mt-2 btn-block" variant="primary"
          >{{ $t("general.Add") }}
        </b-button>
      </b-form>
    </b-modal>
    <!-- PRODUCT DETAILS MODAL -->
    <ProductDetails
      @closemodal="closeDetailsProduct"
      :showModal="viewProduct"
      :product="product"
    />
  </div>
</template>

<script>
import ProductDetails from "./ProductDetails.vue";
export default {
  data() {
    return {
      viewProduct: false,

      businessId: null,
      // products:[],
      product: [],
      load: false,
      loader: false,
      pro_img: "",
      showModal: false,
      Edit: false,
      selectedProduct: "",
      total: 0,
      per_page: 10,

      currentPage: 1,
      nextLoad: false,
    };
  },
  components: {
    ProductDetails,
  },

  computed: {
    products() {
      return this.$store.state.market.products;
    },

    getStatus() {
      return this.$store.state.cart.status;
    },

    shippingAddress() {
      console.log(this.$store.state.checkout.allShipping);
      return this.$store.state.checkout.allShipping;
    },
  },

  beforeMount() {
    this.loader = true;
    this.businessId = this.$route.params.id;
    this.getProducts();
  },

  methods: {
    /**
     * Used to view produduct details
     * @param id
     * @return void
     */

    changePage(value) {
      console.log("next page loading ");

      this.loader = true;
      this.currentPage = value;
      let url = "/market?business_id=" + this.businessId + "&page=" + value;

      this.$store
        .dispatch("market/bPnextPage", url)
        .then((res) => {
          console.log(res);
          this.loader = false;
        })

        .catch((err) => {
          console.error(err);
        });
    },

    getProducts: async function () {
      let url = "/market?business_id=" + this.businessId;
      await this.$store
        .dispatch("market/getBproducts", url)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loader = false;
        });
    },

    productDetails(prod) {
      this.product = prod;
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
      console.log("add to card ", this.product);
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
  },

  mounted() {
    this.$store
      .dispatch("checkout/getAllShippingAdd")
      .then(() => {
        console.log(this.shippingAddress);
      })
      .catch(() => {});
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
    margin-left: 65px;
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
    margin-left: 65px;
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