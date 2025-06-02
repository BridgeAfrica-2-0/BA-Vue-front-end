// Modified AddProduct.vue component with enhanced image upload
<template>
  <div>
    <div class="container py-4">
      <div class="row mb-4">
        <div class="col-12">
          <div class="d-flex align-items-center justify-content-between">
            <h3 class="mb-0">{{ $t("businessowner.Add_product") }}</h3>
            <b-button variant="outline-secondary" @click="goBack">
              <i class="fa fa-arrow-left mr-2"></i> {{ $t("general.Back") }}
            </b-button>
          </div>
          <hr class="mt-3" />
        </div>
      </div>

      <b-form @submit.prevent="addProduct">
        <b-form-group id="input-group-1" :label="$t('businessowner.Product_Name')" label-for="input-1"
              label-size="sm">
              <b-form-input id="input-1" class="mt-1" type="text" v-model="newProduct.name" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" :label="$t('businessowner.Product_Description')" label-for="input-1"
              label-size="sm">
              <b-textarea id="input-1" class="mt-2" v-model="newProduct.description" type="text" required></b-textarea>
            </b-form-group>
            <product-image-upload
              v-model="selectedImagesPrv"
              :video-file="productVideo"
              @images-updated="handleImagesUpdated"
              @video-updated="handleVideoUpdated"
              @video-error="handleVideoError"
            ></product-image-upload>
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

        <b-form-group id="quantity" :label="$t('businessowner.quantity')" label-for="quantity" label-size="sm">
          <b-form-input v-model="newProduct.quantity" class="mt-1" id="quantity" type="number"></b-form-input>
        </b-form-group>

        <!-- TAX and KG -->
        <b-form-group id="tax" :label="$t('businessowner.tax')" label-for="tax" label-size="sm">
          <b-form-input v-model="newProduct.tax_amount" class="mt-1" id="tax" type="number"></b-form-input>
        </b-form-group>
        <!-- <b-form-input v-model="newProduct.tax_amount" class="visually-hidden" id="tax" type="number" required></b-form-input> -->
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
        <div class="d-flex justify-content-start justify-content-sm-end mt-4 flex-wrap w-100">
          <b-button variant="outline-secondary" class="mr-2" @click="goBack">
            {{ $t("general.Cancel") }}
          </b-button>
          <b-button type="submit" variant="primary" :disabled="load">
            <b-spinner small v-if="load" variant="white" class="mr-1"></b-spinner>
            {{ $t("businessowner.Add") }}
          </b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MultiSelect from "vue-multiselect";
import { isPremium } from "@/helpers";
import { LocalisationMixins } from "@/mixins";
import ProductImageUpload from './ProductImageUpload'; // Import the new component

export default {
  name: "AddProduct",
  mixins: [LocalisationMixins],
  components: {
    MultiSelect,
    ProductImageUpload  // Register the new component
  },
  data() {
    return {
      isPremium: isPremium(),
      businessSlug: null,

      // Video data
      productVideo: null,
      videoPreview: null,
      videoFileName: "",

      load: false,
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
    // New Image handling methods using the component
    handleImagesUpdated(images) {
      this.selectedImagesPrv = images;
      console.log('Product images updated:', images.length);
    },
    
    handleVideoUpdated(video) {
      this.productVideo = video;
      if (video) {
        this.videoFileName = video.name;
        this.videoPreview = URL.createObjectURL(video);
      } else {
        this.videoFileName = "";
        this.videoPreview = null;
      }
    },
    
    handleVideoError(errorKey) {
      this.flashMessage.show({
        status: "error",
        message: this.$t(`businessowner.${errorKey}`),
      });
    },

    goBack() {
      const businessSlug = this.$route.params.id || this.businessSlug;

      if (businessSlug) {
        this.$router.push(`/business_owner/${businessSlug}`);
      } else {
        window.history.back();
      }
    },

    // Modified addProduct method that fixes validation issues
    // Method in AddProduct.vue component
addProduct() {
  // 1. Set default values for any required fields that might be empty
  
  this.load = true;
  let fd = new FormData();
  if (!this.newProduct.tax_amount) {
    this.newProduct.tax_amount = "0";
  }
  else{
    fd.append('tax_amount', parseInt(this.newProduct.tax_amount) || 0);
  }

  // Get the slug from route params or from component data
  const businessSlug = this.$route.params.id;
  
  // Validate slug before proceeding
  if (!businessSlug) {
    this.flashMessage.show({
      status: "error",
      message: this.$t("businessowner.Invalid_business_slug"),
    });
    this.load = false;
    return;
  }

  console.log("Business slug for API call:", businessSlug);

  // init data
  this.newProduct.slug = businessSlug;
  fd.append('slug', businessSlug); // Explicitly add the slug to FormData
  
  // Check if multiselecvalue has an id before trying to access it
  if (this.multiselecvalue && this.multiselecvalue.id) {
    this.newProduct.categoryId = this.multiselecvalue.id;
  } else {
    console.warn("No category selected, using default");
    this.flashMessage.show({
      status: "error",
      message: this.$t("businessowner.Please_select_a_category"),
    });
    this.load = false;
    return; // Stop form submission if required data is missing
  }
  
  // Check if filterselectvalue is valid before mapping
  if (this.filterselectvalue && this.filterselectvalue.length > 0) {
    this.newProduct.subCategoryId = this.filterselectvalue
      .map(el => el.subcategory_id)
      .join();
  } else {
    console.warn("No subcategory selected");
  }
  
  this.newProduct.filterId = this.select_filterss.join();

  // Process images
  if (this.selectedImagesPrv.length > 0) {
    // FIX: Add the main image to 'images' field which is required by the API
    // fd.append('images', this.selectedImagesPrv[0]);
    
    // Still include picture field for backward compatibility if needed
    fd.append('picture', this.selectedImagesPrv[0]);

    // if (this.selectedImagesPrv.length > 1) {
      for (let i = 0; i < this.selectedImagesPrv.length; i++) {
        fd.append('images[]', this.selectedImagesPrv[i]);
      }
    // } 
  } else {
    // No image selected, show error and stop submission
    this.flashMessage.show({
      status: "error",
      message: this.$t("businessowner.Please_select_at_least_one_image"),
    });
    this.load = false;
    return;
  }

  // Add video if available
  if (this.productVideo) {
    fd.append('video', this.productVideo);
  }

  // Add all other product data
  for (const key in this.newProduct) {
    if (key !== 'picture') { // Skip picture as we handled it separately
      fd.append(key, this.newProduct[key]);
    }
  }

  // Debug logging
  console.log('Submitting form with business slug:', businessSlug);
  
  // Log FormData entries for debugging purposes
  for (let pair of fd.entries()) {
    console.log(pair[0] + ': ' + (pair[1] instanceof File ? pair[1].name : pair[1]));
  }
  
  axios
    .post(`/market?slug=${businessSlug}`, fd, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log('API Response:', res);
      this.load = false;
      this.success = true;
      this.val = "success";
      this.msg = this.$t("businessowner.Operation_was_successful");

      this.flashMessage.show({
        status: "success",
        message: this.msg,
        blockClass: "custom-block-class"
      });

      // Redirect back to marketplace after successful submission
      setTimeout(() => {
        this.goBack();
      }, 1500);
    })
    .catch(err => {
      console.log('API Error:', err);
      this.load = false;

      if (err.response && err.response.status == 422) {
        this.flashMessage.show({
          status: "error",
          message: err.response.data.message,
        });
      } else {
        this.flashMessage.show({
          status: "error",
          message: this.$t("businessowner.Something_went_wrong"),
          blockClass: "custom-block-class"
        });
      }
    });
},

    flashErrors(errors) {
      let err = "";
      Object.values(errors).forEach(element => {
        err += `<p>${element[0]}</p>`;
      });
      return `<div class="p-3">${err}</div>`;
    },

    categories() {
      this.$store.dispatch("auth/categories");
    },

    subcategories() {
      //get subcategories
      let formData2 = new FormData();
      formData2.append("categoryId", this.selectedcategories);
      this.$store.dispatch("auth/subcategories", formData2);
    }
  },
  created() {
    console.log("AddProduct component created with route params:", this.$route.params);
    this.businessSlug = this.$route.params.id;
    this.categories();
    this.subcategories();
  }
};
</script>