<template>
  <div>
    <div class="row ">
      <div class="col-4 col-md-8">
        <p>
          <b-icon font-scale="1.8" icon="shop" variant="primary" class="mr-2"></b-icon>
          <span class="font-weight-bold">{{ $t("businessowner.Market") }}</span>
        </p>
      </div>

      <div class="col-8 col-md ">
        <div class="inline-flex marg float-right">
          <b-button v-if="isPremium" class=" mx-1" variant="outline-primary" @click="displayOrders">{{ my_orders
            }}</b-button>
          <b-button variant="outline-primary" v-if="isPremium && !isGlobal" @click="createProduct">{{
            $t("businessowner.Add_Product") }}</b-button>
        </div>
      </div>
    </div>
    <div class="col-12">
      <hr class="h-divider" />
    </div>
    <div class="">
      <!-- MARKET HEADER BAR -->

      <!-- MARKET PRODUCT LIST -->
      <b-card-text v-if="!isPremium">
        {{ $t("general.PREMIUM_ACCOUNT_FEATURE") }}
      </b-card-text>

      <Product v-show="!orders && market && isPremium" />

      <b-col v-if="loader" class="load">
        <!-- <b-spinner
            style="width: 7rem; height: 7rem"
            variant="primary"
          ></b-spinner> -->
      </b-col>

      <div v-if="isShowOrders" class="col-12 orders">
        <Orders />
      </div>
    </div>

    <div class="orders">
      <Orders v-show="orders" ref="orders" />
    </div>
    <div class="archive">
      <Archive v-show="archive" ref="archive" />
    </div>

    <div class="text-center" v-show="orders">
      <b-link @click="swap">{{ $t("businessowner.Archive") }}</b-link>
    </div>
    <!-- ADDPRODUCT FORM -->
    <b-modal hide-footer :title="$t('businessowner.Add_product')" size="lg" @hidden="resetPostData" v-model="showModal"
      no-close-on-backdrop>
      <b-form>
        <b-row>
          <b-col cols="12" md="6">
            <b-form-group id="input-group-1" :label="$t('businessowner.Product_Name')" label-for="input-1"
              label-size="sm">
              <b-form-input id="input-1" class="mt-1" type="text" v-model="newProduct.name" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" :label="$t('businessowner.Product_Description')" label-for="input-1"
              label-size="sm">
              <b-textarea id="input-1" class="mt-2" v-model="newProduct.description" type="text" required></b-textarea>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <!-- Product Media Section -->
            <b-tabs content-class="mt-3" nav-class="border-bottom">
              <b-tab :title="$t('businessowner.Images')" active>
                <label class="d-block mb-2">{{ $t("businessowner.Product_Images") }}</label>
                <vue-upload-multiple-image 
                  limit-exceeded="10"
                  markIsPrimaryText="" 
                  primaryText="Cover image" 
                  browseText=""
                  dragText="Drag or upload images" 
                  @upload-success="uploadImageSuccess" 
                  @before-remove="beforeRemove"
                  @edit-image="editImage" 
                  @data-change="dataChange">
                </vue-upload-multiple-image>
                <small class="text-muted">{{ $t("businessowner.First_image_will_be_the_cover_image") }}</small>
              </b-tab>
              
              <b-tab :title="$t('businessowner.Video')">
                <label class="d-block mb-2">{{ $t("businessowner.Product_Video") }}</label>
                <div class="card p-3 media-upload-card">
                  <!-- Video Upload -->
                  <div v-if="!videoPreview" class="text-center video-upload-zone py-4">
                    <div class="mb-3">
                      <i class="fa fa-video-camera fa-3x text-muted"></i>
                    </div>
                    <p class="mb-2">{{ $t("businessowner.Drag_video_or_click_to_upload") }}</p>
                    <b-button variant="outline-primary" @click="$refs.videoInput.click()">
                      {{ $t("businessowner.Choose_Video") }}
                    </b-button>
                    <input 
                      type="file" 
                      class="d-none" 
                      id="product-video"
                      accept="video/*"
                      @change="handleVideoUpload"
                      ref="videoInput">
                  </div>
                  
                  <!-- Video Preview -->
                  <div v-if="videoPreview" class="text-center">
                    <div class="video-player-container mb-2">
                      <video class="product-video-preview" controls>
                        <source :src="videoPreview">
                        {{ $t("businessowner.Video_Not_Supported") }}
                      </video>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">{{ videoFileName }}</small>
                      <b-button size="sm" variant="outline-danger" @click="removeVideo">
                        <i class="fa fa-trash mr-1"></i> {{ $t("businessowner.Remove") }}
                      </b-button>
                    </div>
                  </div>
                </div>
                <small class="text-muted mt-2 d-block">{{ $t("businessowner.Video_should_be_less_than_50MB") }}</small>
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>

        <b-form-group id="input-group-1" :label="$t('businessowner.Product_Price') + '(Fcfa)'" label-for="input-1"
          label-size="sm">
          <b-form-input v-model="newProduct.price" class="mt-1" type="number" id="price" required></b-form-input>
        </b-form-group>
        <b-form-checkbox id="checkbox-1" v-model="newProduct.on_discount" name="checkbox-1" value="1"
          unchecked-value="0">
          {{ $t("businessowner.This_Product_Is_On_Discount") }}
        </b-form-checkbox>

        <b-form-group v-if="newProduct.on_discount == 1" id="input-group-1"
          :label="$t('businessowner.discount_percentage')" label-for="input-1" label-size="">
          <b-form-input v-model="newProduct.discount_price" class="mt-1" type="number" id="price"
            required></b-form-input>
        </b-form-group>

        <b-form-group id="conditions" :label="$t('businessowner.Conditions')" label-for="input-1" label-size="sm">
          <b-form-input v-model="newProduct.condition" class="mt-1" id="conditions" required></b-form-input>
        </b-form-group>

        <!-- CHECKBOX FLEX BOX -->
        <div class="d-flex justify-content-between align-items-start flex-wrap">
          <b-form-checkbox value="1" v-model="newProduct.is_service" unchecked-value="0">
            {{ $t("businessowner.This_Item_Is_A_Service") }} ?
          </b-form-checkbox>

          <b-form-checkbox value="1" v-model="newProduct.in_stock" unchecked-value="0">
            {{ $t("businessowner.In_stock") }}
          </b-form-checkbox>

          <b-form-checkbox value="1" unchecked-value="0">
            {{ $t("businessowner.Published") }}
          </b-form-checkbox>
        </div>

        <b-form-group id="kg" :label="$t('businessowner.quantity')" label-for="quantity" label-size="sm">
          <b-form-input v-model="newProduct.quantity" class="mt-1" id="quantity" type="number"></b-form-input>
        </b-form-group>

        <!-- TAX and KG -->
        <b-form-input v-model="newProduct.tax_amount" class="mt-1" id="tax" type="number" required
          hidden></b-form-input>

        <b-form-group id="kg" :label="$t('businessowner.Kilogramme')" label-for="input-kg" label-size="sm">
          <b-form-input v-model="newProduct.kg" class="mt-1" id="kg" type="number" min="0" required></b-form-input>
        </b-form-group>
        <!-- CATEGORIES -->
        <div class="mt-2">
          <label class="typo__label">
            {{ $t("businessowner.Category") }}
          </label>
          <multi-select v-model="multiselecvalue" @input="subcategories"
            :tag-placeholder="$t('businessowner.Add_this_as_new_tag')"
            :placeholder="$t('businessowner.Search_or_add_a_tag')" label="name" track-by="id"
            :options="BuCategories"></multi-select>
        </div>
        <!-- SUB-CATEGORIES -->
        <div class="mt-2">
          <label class="typo__label">
            {{ $t("businessowner.Sub_Category") }}</label>
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

        <b-alert v-if="success" :variant="val" show> {{ msg }} </b-alert>
        <b-button @click="addProduct" class="mt-2 btn-block" variant="primary">
          <b-spinner small v-if="load" variant="white"></b-spinner>

          {{ $t("businessowner.Add") }}</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import MultiSelect from "vue-multiselect";
import Product from "../product";
import Orders from "@/views/businessOwnerOrders";
import Archive from "../archive";
import { isPremium } from "@/helpers";
import { LocalisationMixins } from "@/mixins"

import VueUploadMultipleImage from 'vue-upload-multiple-image'


export default {
  name: "MarketPlace",
  mixins: [LocalisationMixins],
  components: {
    MultiSelect,
    VueUploadMultipleImage,
    Product,
    Orders,
    Archive
  },
  data() {
    return {
      isPremium: isPremium(),
      options: ["list", "of", "options"],
      orders: false,
      archive: false,
      businessSlug: null,
      market: true,
      my_orders: this.$t("businessowner.orders"),
      selectedImagePrv: "",

      // Video data
      productVideo: null,
      videoPreview: null,
      videoFileName: "",

      showModal: false,
      load: false,
      loader: false,
      newProduct: {
        name: "",
        description: "",
        picture: null,
        price: "",
        quantity: "",
        in_stock: 1,
        on_discount: 0,
        discount_price: 0,
        condition: "",
        is_service: 0,
        status: 1,
        business_id: "",
        categoryId: "",
        subCategoryId: "",
        filterId: "",
        tax_amount: "",
        kg: ""
      },
      val: "",
      msg: "",
      success: false,
      multiselecvalue: [],
      filterselectvalue: [],
      select_filterss: [],
      isShowOrders: false,
      selectedImagesPrv: []
    };
  },
  
  computed: {
    BuCategories() {
      return this.$store.state.auth.categories;
    },
    scategories() {
      return this.$store.state.auth.subcategories;
    },

    products() {
      return this.$store.state.market.products;
    },

    selectedcategories: function () {
      let selectedCatUsers = [];
      if (this.multiselecvalue.id) {
        selectedCatUsers.push(this.multiselecvalue.id);
      } else {
        selectedCatUsers.push(this.multiselecvalue.category_id);
      }
      return selectedCatUsers;
    }
  },
  methods: {
    // Image methods
    uploadImageSuccess(event) {
      const iterator = event.entries();
      for (const value of iterator) {
        this.selectedImagesPrv.push(value[1]);
      }
      console.log('upload success');
    },

    beforeRemove(index, done, fileList) {
      this.selectedImagesPrv.splice(index, 1);
      done();
    },

    editImage(formData, index, fileList) {
      const iterator = formData.entries();
      let file = null;

      for (const value of iterator) {
        file = value[1];
      }
      this.selectedImagesPrv[index] = file;

      console.log('edit image success');
    },

    dataChange(event) {
      console.log(event);
      console.log('data change success');
    },

    // Video methods
    handleVideoUpload(e) {
      const file = e.target.files[0];
      if (!file) return;
      
      // Check if it's a video file
      if (!file.type.match('video.*')) {
        this.flashMessage.show({
          status: "error",
          message: this.$t("businessowner.Please_select_a_video_file"),
        });
        return;
      }
      
      // Check file size (limit to 50MB)
      const maxSize = 50 * 1024 * 1024; // 50MB in bytes
      if (file.size > maxSize) {
        this.flashMessage.show({
          status: "error",
          message: this.$t("businessowner.Video_file_too_large"),
        });
        return;
      }
      
      this.productVideo = file;
      this.videoFileName = file.name;
      this.videoPreview = URL.createObjectURL(file);
    },
    
    removeVideo() {
      this.productVideo = null;
      this.videoPreview = null;
      this.videoFileName = "";
      // Reset file input
      if (this.$refs.videoInput) {
        this.$refs.videoInput.value = '';
      }
    },

    swap() {
      console.log("orders: ", this.orders);
      console.log("archive: ", this.archive);
      console.log("market: ", this.market);
      this.orders = !this.orders;
      this.archive = !this.archive;
      this.market = false;
      this.my_orders = this.$t("businessowner.orders");
      console.log("-------------------");
      console.log("orders: ", this.orders);
      console.log("archive: ", this.archive);
      console.log("archive: ", this.market);
    },

    displayOrders() {
      this.status = !this.status;
      this.orders = !this.orders;
      this.market = !this.orders;
      this.archive = false;
      if (this.orders == true) {
        this.my_orders = this.$t("businessowner.market");
      } else {
        this.my_orders = this.$t("businessowner.my_orders");
      }
      console.log("----" + this.status);
    },

    getProducts: async function () {
      let url = "/market?slug=" + this.businessSlug;
      await this.$store
        .dispatch("market/getBproducts", url)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.loader = false;
        });
    },

    flashErrors(errors) {
      let err = "";
      Object.values(errors).forEach(element => {
        err += `<p>${element[0]}</p>`;
      });
      return `<div class="p-3">${err}</div>`;
    },

    resetPostData() {
      this.newProduct = {
        name: "",
        description: "",
        picture: null,
        price: "",
        quantity: "",
        in_stock: 1,
        on_discount: 0,
        discount_price: 0,
        condition: "",
        is_service: 0,
        status: 1,
        business_id: "",
        categoryId: "",
        subCategoryId: "",
        filterId: "",
        tax_amount: "",
        kg: ""
      };
      this.selectedImagePrv = "";
      this.selectedImagesPrv = [];
      this.filterselectvalue = [];
      this.multiselecvalue = [];
      this.select_filterss = [];
      this.removeVideo();
    },

    addProduct() {
      this.load = true;
      let fd = new FormData();

      //init data
      this.newProduct.slug = this.$route.params.id;
      this.newProduct.categoryId = this.multiselecvalue.id;
      this.newProduct.subCategoryId = this.filterselectvalue
        .map(el => el.subcategory_id)
        .join();
      this.newProduct.filterId = this.select_filterss.join();

      // Add images to form data
      if (this.selectedImagesPrv.length) {
        // First image is the main product image
        const mainImage = this.selectedImagesPrv[0];
        fd.append('picture', mainImage);
        
        // Additional images start from index 1
        for (let i = 1; i < this.selectedImagesPrv.length; i++) {
          fd.append(`additional_images[${i-1}]`, this.selectedImagesPrv[i]);
        }
      }
      
      // Add video if available
      if (this.productVideo) {
        fd.append('product_video', this.productVideo);
      }

      // Add all other product data
      for (const key in this.newProduct) {
        if (key !== 'picture') { // Skip picture as we handled it separately
          fd.append(key, this.newProduct[key]);
        }
      }

      axios
        .post("market?slug=" + this.businessSlug, fd)
        .then(res => {
          this.load = false;
          this.success = true;
          this.val = "success";
          this.msg = this.$t("businessowner.Operation_was_successful");

          this.flashMessage.show({
            status: "success",
            message: this.msg,
            blockClass: "custom-block-class"
          });

          this.showModal = false;
          this.getProducts();
        })
        .catch(err => {
          console.log({ err: err });
          this.load = false;

          if (err.response && err.response.status == 422) {
            this.flashMessage.show({
              status: "error",
              html: this.flashErrors(err.response.data.errors),
            });
          } else {
            this.flashMessage.show({
              status: "error",
              message: this.$t("businessowner.Something_went_wrong"),
              blockClass: "custom-block-class"
            });
            console.log({ err: err });
          }
        });
    },

    createProduct() {
      if (!this.isPremium && this.products.data) {
        if (this.products.data.length > 10) {
          this.flashMessage.show({
            status: "success",
            message: this.$t("general.max_product_reach")
          });
        } else {
          this.showModal = !this.showModal;
        }
      } else {
        this.showModal = !this.showModal;
      }
    },

    categories() {
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
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.multiselec.push(tag);
      this.multiselecvalue.push(tag);
    },
    
    addFilter(newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.multiselec.push(tag);
      this.filterselectvalue.push(tag);
    }
  },
  beforeMount() {
    this.businessSlug = this.$route.params.id;
    this.categories();
    this.subcategories();
  }
};
</script>

<style scoped>
.h-100 {
  height: 100%;
}

.pos {
  margin-bottom: 22px;
}

.order-button {
  height: 40px;
  color: white;
  border-radius: 5px;
  border: none;
  background-color: #e75c18;
}

.load {
  display: flex;
  justify-content: center;
}

.products {
  display: flex;
  flex-wrap: wrap;
}

.product:hover .overlay {
  opacity: 0.5;
  color: #e75d29;
}

.text-hover {
  position: relative;
  top: 80px;
}

.text-static {
  position: relative;
  top: -220px;
  left: 100px;
  color: white;
  font-weight: 200;
}

.product:hover .text-static {
  display: none;
}

.btn-view {
  background-color: transparent;
  border: none;
  color: white;
}

.btn-view:focus {
  outline-color: transparent;
  border: none;
}

.product-name {
  color: #e75d29;
  text-align: center;
}

.pic-name {
  position: relative;
  left: -200px;
  color: white;
  font-weight: 200;
  opacity: 0;
}

.sp:hover .pic-name {
  opacity: 1;
}

.pic {
  cursor: pointer;
  background-color: transparent;
}

.pic:hover {
  box-shadow: 5px 10px 8px 2px #888888;
}

.image-container.position-relative.text-center {
  width: 100% !important;
}

.create {
  position: relative;
  height: 210px;
  color: #fff;
  background-color: #bbb;
  padding: 20px;
  width: 14rem;
  top: 5px;
  left: 10px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;
}

.text {
  margin-top: 50px;
}

.product {
  height: 190px;
  cursor: pointer;
}

._vue-flash-msg-body ._vue-flash-msg-wrapper {
  display: block !important;
  width: 100% !important;
  padding: 20px !important;
}

/* Product media styling */
.media-upload-card {
  border: 1px dashed #dee2e6;
  background-color: #f8f9fa;
}

.video-upload-zone {
  cursor: pointer;
  transition: all 0.2s ease;
}

.video-upload-zone:hover {
  background-color: rgba(0,0,0,0.03);
}

.product-video-preview {
  max-width: 100%;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.video-player-container {
  position: relative;
  background-color: #000;
  border-radius: 4px;
  overflow: hidden;
}

/* Custom file input styling */
.custom-file-label::after {
  content: "Browse";
}

@media only screen and (min-width: 768px) {
  .marg {
    margin-left: 50px;
  }
}

@media only screen and (max-width: 768px) {
  .products {
    position: relative;
  }

  .product {
    margin-top: 20px;
  }

  .create {
    position: relative;
    height: 150px;
    left: 23px;
  }

  .text {
    margin-top: 30px;
  }

  .btn {
    font-size: 12px;
  }
}
</style>