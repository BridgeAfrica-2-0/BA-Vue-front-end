<template>
  <div>
    <div class="people-style shadow  ">
      <b-row class="pr-3">
        <b-col cols="3" lg="4" md="4"  sm="4">
          <div class="center-img">
            <img
              :src="product.picture"
              class="r-image cursor-pointer"
              @click="productDetails"
            />
          </div>
        </b-col>
        <b-col cols="6" lg="7" md="7" sm="8">
          <p class="text">
            <strong class="title cursor-pointer" @click="productDetails">
              {{ product.name }}
            </strong>

            <br />

             <read-more
                        :more-str="$t('search.read_more')"
                        class="readmore"
                        :text="product.description"
                        link="#"
                        :less-str="$t('search.read_less')"
                        :max-chars="100"
                      >

                      </read-more>


            <br />

            <span class="price username">
             {{ product.price }} FCFA
            </span>
            <br />
          </p>
        </b-col>
        <b-col cols="3" lg="1" md="1" sm="1" class="">
              <!-- <b-icon @click="showEdit" icon="three-dots-vertical"></b-icon> -->
          <b-dropdown
            size="md"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          ><template #button-content>
            <b-icon @click="showEdit" icon="three-dots-vertical"></b-icon>
            </template>
            <b-dropdown-item-button v-b-modal="`modal-${product.id}`">{{ $t('businessowner.Edit') }}</b-dropdown-item-button>
            <b-dropdown-item-button v-b-modal="`modal-D${product.id}`">{{ $t('businessowner.Delete') }}</b-dropdown-item-button>
          </b-dropdown>
        </b-col>
      </b-row>

      <div>
        <br />
      </div>
    </div>
    <!-- EDIT PRODUCT MODAL -->
    <!-- <b-modal :id="`modal-${product.id}`" hide-footer title="Edit product">
      <EditProduct :showModal="Edit" :product="product" />
    </b-modal> -->
    <b-modal :id="`modal-${product.id}`" hide-footer title="Edit product" v-model="showModal"  >
      <b-form>
        <b-row>
          <b-col cols="12" md="6">
            <b-form-group
              id="input-group-1"
              :label="$t('businessowner.Product_Name')"
              label-for="input-1"
              label-size="sm"
            >
              <b-form-input
                id="input-1"
                class="mt-1"
                type="text"
                v-model="product.name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              :label="$t('businessowner.Product_Description')"
              label-for="input-1"
              label-size="sm"
            >
              <b-textarea
                id="input-1"
                class="mt-2"
                v-model="product.description"
                type="text"
                required
              ></b-textarea>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <div class="image-upload-wrap" @click="picImage" style="display: flex; justify-content: center; align-items: center; overflow: hidden">
              <input
                type="file"
                @change="getImage"
                accept="image/*"
                id="Mimage"
                v-show="false"
                required
              />
              <a href="#" data-toggle="modal" data-target="#createalbumModal">
                <div v-if="selectedImagePrv">
                  <img :src="selectedImagePrv" :srcset="selectedImagePrv" style="min-width: 100%; min-height: 100%">
                </div>
                <div v-else class="drag-text">
                  <i class="fa fa-plus"></i>
                  <h6>{{ $t('businessowner.Product_Image') }}</h6>
                </div>
              </a>
            </div>
          </b-col>
        </b-row>

        <b-form-group
          id="input-group-1"
          :label="$t('businessowner.Product_Price')"
          label-for="input-1"
          label-size="sm"
        >
          <b-form-input
            v-model="product.price"
            class="mt-1"
            type="number"
            id="price"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-checkbox
          id="checkbox-1"
          v-model="product.on_discount"
          name="checkbox-1"
          value="1"
          unchecked-value="0"
        >
          {{ $t('businessowner.This_Product_Is_On_Discount') }}
        </b-form-checkbox>

        <b-form-group
          id="conditions"
          :label="$t('businessowner.Conditions')"
          label-for="input-1"
          label-size="sm"
        >
          <b-form-input
            v-model="product.condition"
            class="mt-1"
            id="conditions"
            required
          ></b-form-input>
        </b-form-group>

        <!-- CHECKBOX FLEX BOX -->
        <div class="d-flex justify-content-between align-items-start flex-wrap">
          <b-form-checkbox
            value="1"
            v-model="product.is_service"
            unchecked-value="0"
          >
            {{ $t('businessowner.This_Item_Is_A_Service') }} ?
          </b-form-checkbox>

          <b-form-checkbox
            value="1"
            v-model="product.in_stock"
            unchecked-value="0"
          >
            {{ $t('businessowner.In_stock') }}
          </b-form-checkbox>

          <b-form-checkbox value="1" unchecked-value="0">
            {{ $t('businessowner.Published') }}
          </b-form-checkbox>
        </div>
        <!-- TAX and KG -->
        <b-form-group
          id="tax"
          :label="$t('businessowner.Tax')"
          label-for="input-tax"
          label-size="sm"
        >
          <b-form-input
            v-model="product.tax_amount"
            class="mt-1"
            id="tax"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="kg"
          :label="$t('businessowner.Kilogramme')"
          label-for="input-kg"
          label-size="sm"
        >
          <b-form-input
            v-model="product.kg"
            class="mt-1"
            id="kg"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
        <!-- CATEGORIES -->
        <div class="mt-2">
          <label class="typo__label"> {{ $t('businessowner.Category') }} </label>
          <multi-select
            v-model="product.categories"
            @input="subcategories"
            :tag-placeholder="$t('businessowner.Add_this_as_new_tag')"
            :placeholder="$t('businessowner.Search_or_add_a_tag')"
            :label="$t('businessowner.name')"
            track-by="id"
            :options="BuCategories"
            :taggable="true"
            @tag="addTag"
          ></multi-select>
        </div>
        <!-- SUB-CATEGORIES -->
        <div class="mt-2">
          <label class="typo__label"> {{ $t('businessowner.Sub_Category') }}</label>
          <multi-select
            v-model="product.subcategories"
            :tag-placeholder="$t('businessowner.Add_this_as_new_tag')"
            :placeholder="$t('businessowner.Search_or_add_a_tag')"
            :label="$t('businessowner.name')"
            track-by="subcategoryId"
            :options="scategories"
            :multiple="true"
            :taggable="true"
            @tag="addFilter"
          ></multi-select>
        </div>
        <label class="typo__label">{{ $t('businessowner.Filters') }} </label>
        <div>
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab
                :title="filters.name"
                v-for="filters in product.subcategories"
                :key="filters.id"
                active
                ><b-card-text>
                  <b-form-group :label="$t('businessowner.Filters')" class="colorblack">
                    <b-form-checkbox-group
                      id=""
                      class="colorblack"
                      v-model="select_filterss"
                      name="filters"
                    >
                      <b-form-checkbox
                        class="colorblack"
                        v-for="fil in filters.filters"
                        :key="fil.id"
                        :value="fil.id"
                      >
                        {{ fil.name }}
                      </b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>
                </b-card-text></b-tab
              >
            </b-tabs>
          </b-card>
        </div>


        <b-alert v-if="success" :variant="val" show> {{ msg }} </b-alert>
        <b-button @click="editProduct(product)" class="mt-2 btn-block" variant="primary">
          <b-spinner small v-if="load" variant="white"></b-spinner>
          {{ $t('businessowner.Add') }}
        </b-button>
      </b-form>
    </b-modal>

    <!-- modal delete -->
    <b-modal :id="`modal-D${product.id}`" centered hide-footer title="Edit product">
      <template #modal-title>
        <span>WARNING!!!</span>
      </template>
      <div class="d-block text-center">
        <h3>Sure To Delete: {{product.name}}!!</h3>
      </div>
      <b-row>
        <b-col>
          <b-button class="mt-3" block variant="primary" @click="deleteProduct(product)">Delete</b-button>
        </b-col>
      </b-row>
      <!-- <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Delete</b-button> -->
    </b-modal>

    <!-- PRODUCT DETAILS MODAL -->
    <ProductDetails  @closemodal="closeDetailsProduct" :showModal="viewProduct" :product="product"/>
  </div>
</template>

<script>
import ProductDetails from "./ProductDetails.vue";
import MultiSelect from "vue-multiselect";
// import EditProduct from "./editProduct.vue";
export default {
  props: ["product"],
  data() {
    return {
      viewProduct: false,
      pro_img:'',
      showModal: false,
      Edit: false,
      selectedProduct: "",
      selectedImagePrv: this.product.picture,
      multiselecvalue: [],
      select_filterss: [],
    };
  },
  components: {
    ProductDetails,
    MultiSelect,
    // EditProduct
  },
  computed: {
    BuCategories() {
      return this.$store.state.auth.categories;
    },
    scategories() {
      return this.$store.state.auth.subcategories;
    },
    selectedcategories: function () {
      let selectedCatUsers = [];
      if (this.product.categories.id) {
        // selectedUsers.push(item.id);
        selectedCatUsers.push(this.product.categories.id);
      } else {
        selectedCatUsers.push(this.product.categories.category_id);
      }
      return selectedCatUsers;
    },
  },
  beforeMount() {
    this.categories();
    this.subcategories();
  },
  methods: {
    productDetails() {
      this.viewProduct = true;
    },
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
    getImage(e) {
      console.log("getImage");
      console.log(e.target.files[0]);
      this.product.picture = e.target.files[0];
      this.pro_img=e.target.files[0];
      let file = e.target.files[0] || e.dataTransfer.files;
      this.selectedImagePrv = URL.createObjectURL(file);
      console.log("this.selectedImagePrv", this.selectedImagePrv);
    },
    editProduct(Product) {
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
      formData.append("tax_amount", 200);  
      formData.append("kg", 7);
      formData.append("categories", Product.categories);
      formData.append("subcategories", Product.subcategories);
      formData.append("filters", Product.filters);
      //formData.append("picture", this.pro_img);

      console.log(this.pro_img);
      this.$store
        .dispatch("market/UpdateProduct", {
          path: "market/"+Product.id,
          formData: formData,
        })
        .then(({ data }) => {
          console.log(data);
          this.flashMessage.show({
            status: "success",
            blockClass: 'custom-block-class',
            message: "Changes Made Successfuly"
          });  

          this.showModal=false;
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            blockClass: 'custom-block-class',
            message: "Unable To Make Changes"
          });
        });
    },
    deleteProduct(Product) {
      console.log("deleteProduct");
      console.log(Product);
      this.$store
        .dispatch("market/DeleteProduct", {
          path: "market/"+Product.id,
        })
        .then(({ data }) => {
          console.log(data);
          this.flashMessage.show({
            status: "success",
            blockClass: 'custom-block-class',
            message: "Product Deleted Successfuly"
          });  
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "Unable To Delete Product"
          });
        });
    },
    
    categories(){
        this.$store.dispatch("auth/categories");
    },
    subcategories() {
      //get subcategories
      let formData2 = new FormData();
      formData2.append("categoryId", this.selectedcategories);
      this.$store.dispatch("auth/subcategories", formData2);
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.multiselec.push(tag);
      this.product.categories.push(tag);
    },
    addFilter(newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.multiselec.push(tag);
      this.product.subcategories.push(tag);
    },
  },
};
</script>

<style scoped>

.h-100{

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
    margin-right: -40px;
  }
  .marge{
  margin-right: 0px;
      padding-right: 8px
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
  .marge{
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
