<template>
  <div>
    <vue-confirm-dialog />
    <div class="text-center" v-if="loader">
      <b-spinner class="spin" variant="primary"> </b-spinner>
    </div>
    <b-row v-if="!loader">
      <b-col md="12" lg="6" class=" mb-2" v-for="product in products.data" :key="product.id">
        <div class="people-style  h-100 ">
          <b-link>
            <div class="float-right others">
              <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                <template #button-content>
                  <b-icon icon="three-dots-vertical" variant="primary" class="icon-size"></b-icon>
                </template>
                <b-dropdown-item @click="navigateToEditProduct(product)" v-b-modal="`modal-${product.id}`">
                  {{ $t("profileowner.Edit") }}</b-dropdown-item>
                <b-dropdown-item @click="deleteProduct(product)" v-b-modal="`modal-D${product.id}`">
                  {{ $t("profileowner.Delete") }}</b-dropdown-item>

                <b-dropdown-item v-if="!product.warehouseRequestStatus || profile_package.user_package.name == FEATURE_WAREHOUSE" @click="requestToWhareHouse(product)"
                  v-b-modal="`modal-warehouse-${product.id}`">
                  Request to wareHouse</b-dropdown-item>

              </b-dropdown>
            </div>
          </b-link>

          <div class="d-inline-flex">
            <div>
              <div class="center-img">
                <img :src="product.picture" class="r-image cursor-pointer" @click="goToDetail(product.id)" />
              </div>
            </div>

            
            <div class="flx50">
              <p class="text">
                <span class="title cursor-pointer" @click="goToDetail(product.id)">
                  {{ product.name }}
                </span>
                <br />

                <span> <b> Quantity:</b> {{ product.quantity }} </span>

                <br />

                <read-more :more-str="$t('search.read_more')" class="readmore" :text="product.description" link="#"
                  :less-str="$t('search.read_less')" :max-chars="100">
                </read-more>


                <span class="price username mt-2">
                  {{ product.price }} FCFA
                </span>
              </p>
              
              <p class="rq-st" v-if="product.warehouseRequestStatus == 'pending'">Pending request</p>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>

    <span v-if="!loader">
      <b-pagination v-if="products.next || products.previous" v-model="currentPage" pills :total-rows="products.total"
        :per-page="per_page" aria-controls="my-table" @change="changePage" align="center"></b-pagination>
    </span>

    <!-- EDIT PRODUCT MODAL -->
    <!-- <b-modal :id="`modal-${product.id}`" hide-footer title="Edit product">
      <EditProduct :showModal="Edit" :product="product" />
    </b-modal> -->

    <b-modal :id="`modal-${product.id}`" hide-footer title="Edit product" v-model="showModal" size="lg">
      <b-form>
        <b-row>
          <b-col cols="12" md="6">
            <b-form-group id="input-group-1" :label="$t('businessowner.Product_Name')" label-for="input-1"
              label-size="sm">
              <b-form-input id="input-1" class="mt-1 mr-1" type="text" v-model="product.name" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" :label="$t('businessowner.Product_Description')" label-for="input-1"
              label-size="sm">
              <b-textarea id="input-1" class="mt-2" v-model="product.description" type="text" required></b-textarea>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <div class="image-upload-wrap" @click="picImage"
              style="display: flex; justify-content: center; align-items: center; overflow: hidden">
              <input type="file" @change="getImagee" accept="image/*" id="Mimage" v-show="false" required />
              <a href="#" data-toggle="modal" data-target="#createalbumModal">
                <div v-if="selectedImagePrv">
                  <img :src="selectedImagePrv" :srcset="selectedImagePrv" style="min-width: 100%; min-height: 100%" />
                </div>
                <div v-else class="drag-text">
                  <i class="fa fa-plus"></i>
                  <h6>{{ $t("businessowner.Product_Image") }}</h6>
                </div>
              </a>
            </div>
          </b-col>
        </b-row>

        <b-form-group id="input-group-1" :label="$t('businessowner.Product_Price')" label-for="input-1" label-size="sm">
          <b-form-input v-model="product.price" class="mt-1" type="number" id="price" required></b-form-input>
        </b-form-group>
        <b-form-checkbox id="checkbox-1" v-model="product.on_discount" name="checkbox-1" value="1" unchecked-value="0">
          {{ $t("businessowner.This_Product_Is_On_Discount") }}
        </b-form-checkbox>

        <b-form-group id="conditions" :label="$t('businessowner.Conditions')" label-for="input-1" label-size="sm">
          <b-form-input v-model="product.condition" class="mt-1" id="conditions" required></b-form-input>
        </b-form-group>

        <!-- CHECKBOX FLEX BOX -->
        <div class="d-flex justify-content-between align-items-start flex-wrap">
          <b-form-checkbox value="1" v-model="product.is_service" unchecked-value="0">
            {{ $t("businessowner.This_Item_Is_A_Service") }} ?
          </b-form-checkbox>

          <b-form-checkbox value="1" v-model="product.in_stock" unchecked-value="0">
            {{ $t("businessowner.In_stock") }}
          </b-form-checkbox>

          <b-form-checkbox value="1" unchecked-value="0">
            {{ $t("businessowner.Published") }}
          </b-form-checkbox>
        </div>
        <!-- TAX and KG -->
        <b-form-group id="tax" :label="$t('businessowner.Tax')" label-for="input-tax" label-size="sm" hidden>
          <b-form-input v-model="product.tax_amount" class="mt-1" id="tax" type="number" required></b-form-input>
        </b-form-group>

        <b-form-group id="kg" :label="$t('businessowner.quantity')" label-for="quantity" label-size="sm">
          <b-form-input v-model="product.quantity" class="mt-1" id="quantity" type="number"></b-form-input>
        </b-form-group>

        <b-form-group id="kg" :label="$t('businessowner.Kilogramme')" label-for="input-kg" label-size="sm">
          <b-form-input v-model="product.kg" class="mt-1" id="kg" type="number" required></b-form-input>
        </b-form-group>
        <!-- CATEGORIES -->
        <div class="mt-2">
          <label class="typo__label">
            {{ $t("businessowner.Category") }}
          </label>
          <multi-select v-model="multiselecvalue" @input="subcategories"
            :placeholder="$t('businessowner.Search_or_add_a_tag')" label="name" track-by="id"
            :options="BuCategories"></multi-select>
        </div>
        <!-- SUB-CATEGORIES -->
        <div class="mt-2">
          <label class="typo__label">
            {{ $t("businessowner.Sub_Category") }}
          </label>
          <multi-select v-model="filterselectvalue" :placeholder="$t('businessowner.Search_or_add_a_tag')" label="name"
            track-by="subcategory_id" :options="scategories" :multiple="true"></multi-select>
        </div>
        <label class="typo__label">{{ $t("businessowner.Filters") }} </label>
        <div>
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab :title="filters.name" v-for="filters in filterselectvalue" :key="filters.id" active><b-card-text>
                  <b-form-group :label="$t('businessowner.Filters')" class="colorblack">
                    <b-form-checkbox-group id="" class="colorblack" v-model="select_filterss" name="filters">
                      <b-form-checkbox class="colorblack" v-for="fil in filters.filters" :key="fil.id" :value="fil.id">
                        {{ fil.name }}
                      </b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>
                </b-card-text></b-tab>
            </b-tabs>
          </b-card>
        </div>

        <b-button @click="editProduct(product)" class="mt-2 btn-block" variant="primary">
          <b-spinner small v-if="sendingp" variant="white"></b-spinner>
          {{ $t("update") }}
        </b-button>
      </b-form>
    </b-modal>

    <!-- modal delete -->

    <b-modal :id="`modal-D${product.id}`" centered hide-footer v-model="delModal" title="Edit product" size="lg">
      <template #modal-title>
        <span>WARNING!!!</span>
      </template>
      <div class="d-block text-center">
        <h3>Sure To Delete: {{ product.name }}!!</h3>
      </div>
      <b-row>
        <b-col>
          <b-button class="mt-3" block variant="primary" @click="deleteProduct(product)">Delete</b-button>
        </b-col>
      </b-row>
      <!-- <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Delete</b-button> -->
    </b-modal>

    <!-- PRODUCT DETAILS MODAL -->
    <!-- <ProductDetails @closemodal="closeDetailsProduct" :showModal="viewProduct" :product="product" /> -->

    <b-modal hide-footer :title="'Request for use warehouse'" size="lg" @hidden="requestModal = false"
      v-model="requestModal" no-close-on-backdrop>
      <b-form>

        <b-form-group id="quantity" :label="'Quantity'" label-for="quantity" label-size="">
          <b-form-input v-model="newProduct.quantity" class="mt-1" type="number" id="quantity" required></b-form-input>
        </b-form-group>

        <b-form-group id="length" :label="'Length'" label-for="quantity" label-size="">
          <b-form-input v-model="newProduct.length" class="mt-1" type="number" id="quantity" required></b-form-input>
        </b-form-group>

        <b-form-group id="width" :label="'Width'" label-for="quantity" label-size="">
          <b-form-input v-model="newProduct.width" class="mt-1" type="number" id="quantity" required></b-form-input>
        </b-form-group>

        <b-form-group id="height" :label="'Height'" label-for="quantity" label-size="">
          <b-form-input v-model="newProduct.height" class="mt-1" type="number" id="quantity" required></b-form-input>
        </b-form-group>


        <b-form-group id="conditions" :label="'Description'" label-for="input-1" label-size="sm">
          <b-form-textarea v-model="newProduct.description" class="mt-1" rows="4" max-rows="8" id="conditions"
            required></b-form-textarea>
        </b-form-group>



        <b-form-group id="location" :label="'Location'" label-for="location" label-size="sm">
          <b-form-input v-model="newProduct.location" class="mt-1" id="location" type="text"></b-form-input>
        </b-form-group>


        <b-form-group id="contact" :label="'contact'" label-for="contact" label-size="sm">
          <b-form-input v-model="newProduct.contact" class="mt-1" id="contact" type="text"></b-form-input>
        </b-form-group>

        <!-- <b-alert v-if="success" :variant="val" show> {{ msg }} </b-alert> -->

        <div class="d-flex justify-content-end">
          <b-button class="mt-2 btn-block btn-outline-secondary w-100" @click="requestModal">
            Cancel
          </b-button>
          <b-button @click.prevent="onSendRequest" class="mt-2 btn-block  w-100" variant="primary"
            :disabled="canSendRequest">
            <b-spinner small v-if="startRequest" variant="white"></b-spinner>
            Send request
          </b-button>
        </div>
      </b-form>

    </b-modal>
    <!-- <ProductDetails  @closemodal="closeDetailsProduct" :showModal="viewProduct" /> -->
  </div>
</template>

<script>

import axios from "axios";

// import ProductDetails from "./ProductDetails.vue";

import MultiSelect from "vue-multiselect";

import {FEATURE_WAREHOUSE} from "@/const"

// import EditProduct from "./editProduct.vue";
export default {
  // props: ["product"],
  data() {
    return {
      productRequest: null,
      startRequest: false,
      requestModal: false,
      newProduct: {},
      viewProduct: false,
      businessSlug: null,
      // products:[],
      sendingp: false,
      product: [],
      load: false,
      loader: false,
      pro_img: "",
      showModal: false,
      Edit: false,
      selectedProduct: "",
      total: 0,
      per_page: 10,
      delModal: false,
      currentPage: 1,
      nextLoad: false,
      selectedImagePrv: null,
      multiselecvalue: [],
      filterselectvalue: [],
      select_filterss: []
    };
  },

  components: {
    // ProductDetails,
    MultiSelect
    //  EditProduct
  },
  computed: {

    canSendRequest() {
      return this.newProduct.quantity &&
        this.newProduct.length && this.newProduct.width && this.newProduct.height && this.newProduct.description &&
        this.newProduct.location && this.newProduct.contact ? false : true
    },

    profile_package() {
      return this.$store.state.auth.profile_package;
    },

    products() {
      return this.$store.state.market.products;
    },

    BuCategories() {
      return this.$store.state.auth.categories;
    },

    scategories() {
      return this.$store.state.auth.subcategories;
    },

    selectedcategories: function () {
      return this.multiselecvalue.id;
    },

    selectedsubcategories: function () {
      let sub_cat = [];

      this.filterselectvalue.forEach(item => {
        if (item.subcategory_id) {
          sub_cat.push(item.subcategory_id);
        } else {
          sub_cat.push(item.subcategoryId);
        }
      });
      return sub_cat;
    }

  },

  beforeMount() {
    this.loader = true;
    this.businessSlug = this.$route.params.id;
    this.getProducts();
    this.categories();
  },

  methods: {
    requestToWhareHouse(product) {
      this.productRequest = product
      this.requestModal = true
    },

    onResetRequestData() {
      this.newProduct = {}
      this.productRequest = null
    },
    navigateToEditProduct(product) {
    this.$router.push({
      name: 'EditProduct',
      params: {
        businessSlug: this.businessSlug,
        productId: product.id
      }
    });
  },
  goToDetail(id) {
      this.$router.push(`/product-details/${id}`);
    },
    onSendRequest() {
      this.startRequest = true
      const data = {
        "product_id": this.productRequest.id,
        "quantity": this.newProduct.quantity,
        "length": this.newProduct.length,
        "width": this.newProduct.width,
        "height": this.newProduct.height,
        "description": this.newProduct.description,
        "location": this.newProduct.location,
        "contact": this.newProduct.contact,
      }

      axios.post(`market/warehouse/request`, data)
        .then(() => {
          this.flashMessage.show({
            status: "success",
            blockClass: "custom-block-class",
            message: "Changes Made Successfuly"
          });

          const news = { ...this.productRequest, warehouseRequestStatus: "pending" }

          this.products.data.forEach((product, index, arr) => {
            arr[index] = product.id == news.id ? news : product
          })
        })
        .finally(() => {
          this.startRequest = false
          this.requestModal = false
          this.onResetRequestData()

          this.flashMessage.show({
            status: "success",
            blockClass: "custom-block-class",
            message: "Request has been created"
          });

        })
    },

    callactions(product) {

      this.product = product;

      this.selectedImagePrv = product.picture;

      this.multiselecvalue = product.categories[0];

      this.subcategories();

      this.select_filterss = this.editfilters(product.filters);
    },

    editfilters(filter) {
      let fil = [];

      filter.forEach(item => {
        fil.push(item.id);
      });

      return fil;
    },

    getsubCat() {
      let selectedUsers = [];
      this.scategories.forEach(item => {
        this.product.subcategories.forEach(itemm => {
          if (item.subcategory_id == itemm.id) {
            selectedUsers.push(item);
          }
        });
      });

      console.log(selectedUsers);

      return selectedUsers;
    },

    getfilters() {
      let selectedUsers = [];
      this.scategories.forEach(item => {
        this.product.subcategories.forEach(itemm => {
          if (item.subcategory_id == itemm.id) {
            selectedUsers.push(item);
          }
        });
      });

      console.log(selectedUsers);

      return selectedUsers;
    },

    flashErrors(errors) {
      let err = "";
      Object.values(errors).forEach(element => {
        err = element[0];
      });

      return err;
    },

    changePage(value) {
      console.log("next page loading ");

      this.loader = true;
      this.currentPage = value;
      let url = "/market?slug=" + this.businessSlug + "&page=" + value;

      this.$store
        .dispatch("market/bPnextPage", url)
        .then(res => {
          console.log(res);
          this.loader = false;
        })

        .catch(err => {
          this.$store.commit("business/setLoading", true);
          this.total = this.business.total;
          console.error(err);
        });
    },

    getProducts: async function () {
      let url = "/market?slug=" + this.businessSlug;
      await this.$store
        .dispatch("market/getBproducts", url)
        .then(res => { })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.loader = false;
        });
    },

    // productDetails(product) {
    //   this.product = product;
    //   this.viewProduct = true;
    // },
    showEdit() {
      this.Edit = true;
    },
    closeDetailsProduct() {
      this.viewProduct = false;
    },
    handleAddToCard() {
      console.log("add to card");
    },
    picImage() {
      document.querySelector("#Mimage").click();
    },
    getImagee(e) {
      this.product.picture = e.target.files[0];
      this.pro_img = e.target.files[0];
      let fille = e.target.files[0];
      this.selectedImagePrv = URL.createObjectURL(fille);
      // console.log("this.selectedImagePrv", this.selectedImagePrv);
    },

    editProduct(Product) {
      this.sendingp = true;
      console.log("editProduct");
      console.log(Product);
      let formData = new FormData();
      formData.append("name", Product.name);
      formData.append("description", Product.description);
      formData.append("price", Product.price);
      formData.append("on_discount", Product.on_discount);
      formData.append("condition", Product.condition);
      formData.append("is_service", Product.is_service);
      formData.append("in_stock", Product.in_stock);
      formData.append("tax_amount", 0);
      formData.append("quantity", Product.quantity);
      formData.append("kg", Product.kg);
      formData.append("categoryId", this.multiselecvalue.id);
      formData.append(
        "subCategoryId",
        this.filterselectvalue.map(el => el.subcategory_id).join()
      );

      formData.append("filterId", this.select_filterss.join());
      formData.append("picture", this.pro_img);

      console.log(this.pro_img);

      axios
        .post("market/" + Product.id, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(({ data }) => {
          this.sendingp = false;
          console.log(data);
          this.flashMessage.show({
            status: "success",
            blockClass: "custom-block-class",
            message: "Changes Made Successfuly"
          });

          this.showModal = false;

          this.changePage(this.currentPage);
        })
        .catch(err => {
          console.log({ err: err });

          this.sendingp = false;

          if (err.response.status == 422) {
            console.log({ err: err });

            this.flashMessage.show({
              status: "error",

              message: this.flashErrors(err.response.data.errors),
              blockClass: "custom-block-class"
            });
          } else {
            this.flashMessage.show({
              status: "error",

              message: "Unable to Update Your Product",
              blockClass: "custom-block-class"
            });
            console.log({ err: err });
          }
        });
    },

    deleteProduct(Product) {
      this.$confirm({
        message: `Are you sure?`,
        button: {
          no: "No",
          yes: "Yes"
        },

        callback: confirm => {
          if (confirm) {
            this.$store
              .dispatch("market/DeleteProduct", {
                path: "market/" + Product.id
              })
              .then(({ data }) => {
                this.changePage(this.currentPage);
                this.delModal = false;

                console.log(data);
                this.flashMessage.show({
                  status: "success",
                  blockClass: "custom-block-class",
                  message: this.$t("general.Product_Deleted_Successfuly")
                });
              })
              .catch(err => {
                console.log({ err: err });
                this.flashMessage.show({
                  status: "error",
                  message: this.$t("general.Unable_To_Delete_Product")
                });
              });
          }
        }
      });
    },

    categories() {
      this.$store.dispatch("auth/categories");
    },

    async subcategories() {
      let formData2 = new FormData();

      formData2.append("categoryId", this.selectedcategories);
      await this.$store.dispatch("auth/subcategories", formData2).then(() => {
        this.filterselectvalue = this.getfilters();
      });
    },

    addTag(newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.multiselec.push(tag);
      this.product.categories.push(tag);
    },
    addFilter(newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.multiselec.push(tag);
      this.product.subcategories.push(tag);
    }
  }
};
</script>

<style scoped>
/* Add to your <style> section */
@media screen and (max-width: 768px) {
  /* Android-specific fixes */
  html {
    -webkit-overflow-scrolling: touch; /* This is the correct property */
  }
  
  body {
    /* Prevent Android WebView from auto-scrolling */
    overflow-anchor: none;
  }
  
  /* Prevent scroll restoration on Android */
  .container, .row {
    overflow-anchor: none;
  }
  
  /* Android WebView specific fixes */
  .modal-open {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  /* Prevent Android modal scroll issues */
  .modal-backdrop {
    position: fixed !important;
  }
}

/* Additional Android fixes */
@supports (-webkit-touch-callout: none) {
  /* iOS specific - exclude Android */
  body {
    -webkit-overflow-scrolling: touch;
  }
}

/* Target Android specifically */
@media screen and (max-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {
  .people-style {
    /* Prevent Android scroll anchor issues */
    overflow-anchor: none;
  }
  
  .modal {
    /* Fix Android modal positioning */
    position: fixed !important;
  }
}
.others {
  position: absolute;
  right: 0px;
}

.flx50 {
  flex-basis: 70%;
}

.spin {
  text-align: center;
  margin-top: 10%;
  margin-bottom: 10%;
  width: 4rem;
  height: 4rem;
}

.h-100 {
  height: 100%;
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

/* input {
  border-radius: 15px;
  padding: 5px;
  border: solid 1px #ccc;
  width: 250px;
} */
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
    margin-right: -40px;
  }

  .marge {
    margin-right: 0px;
    padding-right: 8px;
  }
}

.buybtn {
  width: 100px;
}

.rq-st {
  color: white;
  background: #1aad1a;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  right: 1rem;
  position: absolute;
  bottom: 0;
  border-radius: 14px;
  padding: 4px;
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

  padding: 3px;
}

@media only screen and (max-width: 540px) {
  .marge {
    margin-left: -25px;
  }

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
    font-weight: 600;

    line-height: 35px;
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
    margin-left: 50px;
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
    min-width: 123px;
  }

  .title {
    font-size: 20px;
    font-weight: 600;

    line-height: 35px;
  }
}

.discount {
  color: orange;
  margin-left: 60px;
}

p {
  text-align: left;
}

/* input {
  border-radius: 15px;
  padding: 5px;
  border: solid 1px #ccc;
  width: 250px;
} */
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
    margin-left: 50px;
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
    font-weight: 600;

    line-height: 35px;
  }
}
</style>
