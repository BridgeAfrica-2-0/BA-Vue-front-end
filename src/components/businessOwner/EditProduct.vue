// EditProduct.vue - Fixed version
<template>
  <div>
    <div class="container py-4">
      <div class="row mb-4">
        <div class="col-12">
          <div class="d-flex align-items-center justify-content-between">
            <h3 class="mb-0">{{ $t("businessowner.Edit_product") }}</h3>
            <b-button variant="outline-secondary" @click="goBack">
              <i class="fa fa-arrow-left mr-2"></i> {{ $t("general.Back") }}
            </b-button>
          </div>
          <hr class="mt-3" />
        </div>
      </div>

      <b-form @submit.prevent="editProduct">
        <b-form-group id="input-group-1" :label="$t('businessowner.Product_Name')" label-for="input-1" label-size="sm">
          <b-form-input id="input-1" class="mt-1" type="text" v-model="editedProduct.name" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-1" :label="$t('businessowner.Product_Description')" label-for="input-1"
          label-size="sm">
          <b-textarea id="input-1" class="mt-2" v-model="editedProduct.description" type="text" required></b-textarea>
        </b-form-group>

        <product-image-upload 
          :value="selectedImagesPrv"
          @input="handleImageInput"
          :video-file="productVideo"
          @images-updated="handleImagesUpdated" 
          @video-updated="handleVideoUpdated"
          @video-error="handleVideoError"
        ></product-image-upload>

        <b-form-group id="input-group-1" :label="$t('businessowner.Product_Price') + '(Fcfa)'" label-for="input-1"
          label-size="sm">
          <b-form-input v-model="editedProduct.price" class="mt-1" type="number" id="price" required></b-form-input>
        </b-form-group>

        <b-form-checkbox id="checkbox-1" v-model="editedProduct.on_discount" name="checkbox-1" value="1"
          unchecked-value="0">
          {{ $t("businessowner.This_Product_Is_On_Discount") }}
        </b-form-checkbox>

        <b-form-group v-if="editedProduct.on_discount == 1" id="input-group-1"
          :label="$t('businessowner.discount_percentage')" label-for="input-1" label-size="">
          <b-form-input v-model="editedProduct.discount_price" class="mt-1" type="number" id="price"
            required></b-form-input>
        </b-form-group>

        <b-form-group id="conditions" :label="$t('businessowner.Conditions')" label-for="input-1" label-size="sm">
          <b-form-input v-model="editedProduct.condition" class="mt-1" id="conditions" required></b-form-input>
        </b-form-group>

        <!-- CHECKBOX FLEX BOX -->
        <div class="d-flex justify-content-between align-items-start flex-wrap">
          <b-form-checkbox value="1" v-model="editedProduct.is_service" unchecked-value="0">
            {{ $t("businessowner.This_Item_Is_A_Service") }} ?
          </b-form-checkbox>

          <b-form-checkbox value="1" v-model="editedProduct.in_stock" unchecked-value="0">
            {{ $t("businessowner.In_stock") }}
          </b-form-checkbox>

          <b-form-checkbox value="1" v-model="editedProduct.status" unchecked-value="0">
            {{ $t("businessowner.Published") }}
          </b-form-checkbox>
        </div>

        <b-form-group id="quantity-group" :label="$t('businessowner.quantity')" label-for="quantity" label-size="sm">
          <b-form-input v-model="editedProduct.quantity" class="mt-1" id="quantity" type="number"
            min="0"></b-form-input>
        </b-form-group>

        <!-- TAX (hidden) -->
        <b-form-group id="tax" :label="$t('businessowner.tax')" label-for="tax" label-size="sm">
          <b-form-input v-model="editedProduct.tax_amount" class="mt-1" id="tax" type="number" required
            min="0"></b-form-input>
        </b-form-group>

        <!-- KG field with unique ID -->
        <b-form-group id="kg-group" :label="$t('businessowner.Kilogramme')" label-for="input-kg" label-size="sm">
          <b-form-input v-model="editedProduct.kg" class="mt-1" id="input-kg" type="number" min="0"
            required></b-form-input>
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

        <div class="d-flex justify-content-end mt-4">
          <b-button variant="outline-secondary" class="mr-2" @click="goBack">
            {{ $t("general.Cancel") }}
          </b-button>
          <b-button type="submit" variant="primary" :disabled="loading">
            <b-spinner small v-if="loading" variant="white" class="mr-1"></b-spinner>
            {{ $t("businessowner.Update") }}
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
import ProductImageUpload from './ProductImageUpload';

export default {
  name: "EditProduct",
  mixins: [LocalisationMixins],
  components: {
    MultiSelect,
    ProductImageUpload
  },
  data() {
    return {
      isPremium: isPremium(),
      businessSlug: null,
      productId: null,

      // Load states
      loading: false,
      success: false,
      val: "",
      msg: "",

      // Product data
      editedProduct: {
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
        tax_amount: "0",
        kg: ""
      },

      // Media data
      productVideo: null,
      videoPreview: null,
      videoFileName: "",
      selectedImagesPrv: [],

      // Category data
      multiselecvalue: [],
      filterselectvalue: [],
      select_filterss: [],
      
      // Track existing images to avoid re-uploading
      existingImageUrls: [],
      existingVideoUrl: null,
      originalImages: [],
      imagesToDeleteIds:[],
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
      if (this.multiselecvalue && this.multiselecvalue.id) {
        selectedCatUsers.push(this.multiselecvalue.id);
      } else if (this.multiselecvalue && this.multiselecvalue.category_id) {
        selectedCatUsers.push(this.multiselecvalue.category_id);
      }
      return selectedCatUsers;
    }
  },
  methods: {
    // Image handling methods
    handleImagesUpdated(images) {
      console.log('Images updated:', images);
      this.selectedImagesPrv = images;
    },

    // handleImageInput(newImages) {
    //   console.log("Received images from component:", newImages);
    //   this.selectedImagesPrv = newImages;
    // },
    handleImageInput(newImages) {
  console.log("Received images from component:", newImages);

  // Find deleted images from originalImages that are missing in newImages
  const deleted = this.originalImages.filter(original =>
    original.id && !newImages.some(img => img.id === original.id)
  );

  // Add their IDs to imagesToDeleteIds if not already included
  deleted.forEach(img => {
    if (!this.imagesToDeleteIds.includes(img.id)) {
      this.imagesToDeleteIds.push(img.id);
    }
  });

  // Update the current image list
  this.selectedImagesPrv = newImages;
},
    handleVideoUpdated(video) {
      console.log('Video updated:', video);
      this.productVideo = video;
      if (video) {
        if (video instanceof File) {
          this.videoFileName = video.name;
          this.videoPreview = URL.createObjectURL(video);
        } else if (video.url) {
          this.videoFileName = video.name || 'Current video';
          this.videoPreview = video.url;
        }
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

    // Create proper image objects that the component can handle
    // createImageObject(url, index = 0) {
    //   // Extract filename from URL or create a default one
    //   console.log("URL:::::::::::::::::::::::::::::", url);
    //   let  urlParts;
    //   if(index==0)
    // {
    //   urlParts = url.split('/');
    // }
    // else{
    //   urlParts = url.image.split('/');
    // }
    //   const filename = urlParts[urlParts.length - 1] || `image-${index}.jpg`;
      
    //   // Ensure the filename has a proper extension
    //   const hasExtension = /\.(jpg|jpeg|png|gif|webp)$/i.test(filename);
    //   const finalFilename = hasExtension ? filename : `${filename}.jpg`;

    //   return {
    //     name: finalFilename,
    //     type: this.getImageTypeFromUrl(url),
    //     url: url,
    //     preview: url,
    //     isExisting: true,
    //     size: 0, // Unknown size for existing images
    //     toString: function() { return this.url; }
    //   };
    // },
createImageObject(url, index = 0) {
  // Handle different URL formats based on index
  let urlParts;
  let actualUrl;
  
  if (index == 0) {
    // For first index, url is a string
    urlParts = url.split('/');
    actualUrl = url;
  } else {
    // For other indices, url is an object with image property
    urlParts = url.image.split('/');
    actualUrl = url.image;
  }
  
  // Extract filename from URL or create a default one
  const filename = urlParts[urlParts.length - 1] || `image-${index}.jpg`;
  
  // Ensure the filename has a proper extension
  const hasExtension = /\.(jpg|jpeg|png|gif|webp)$/i.test(filename);
  const finalFilename = hasExtension ? filename : `${filename}.jpg`;
  
  return {
    name: finalFilename,
    type: this.getImageTypeFromUrl(actualUrl),
    url: actualUrl,
    preview: actualUrl,
    id: url.id || null, 
    isExisting: true,
    size: 0, 
    toString: function() { return this.url; }
  };
},
    // Determine MIME type from URL or default to JPEG
    getImageTypeFromUrl(url) {
      const extension = url.split('.').pop()?.toLowerCase();
      switch (extension) {
        case 'png': return 'image/png';
        case 'gif': return 'image/gif';
        case 'webp': return 'image/webp';
        case 'jpg':
        case 'jpeg':
        default: return 'image/jpeg';
      }
    },

    // Navigation methods
    goBack() {
      const businessSlug = this.$route.params.businessSlug || this.businessSlug;
      if (businessSlug) {
        this.$router.push(`/business_owner/${businessSlug}`);
      } else {
        window.history.back();
      }
    },

    async loadProduct() {
      try {
        this.loading = true;
        console.log("Loading product with ID:", this.productId);

        const response = await axios.get(`/market/${this.productId}`);
        const productData = response.data;
        console.log("API returned product data:", productData);

        // Load basic product data
        this.editedProduct = {
          name: productData.data.name || "",
          description: productData.data.description || "",
          price: productData.data.price || "",
          quantity: productData.data.quantity || "",
          in_stock: productData.data.in_stock || 1,
          on_discount: productData.data.on_discount || 0,
          discount_price: productData.data.discount_price || 0,
          condition: productData.data.condition || "",
          is_service: productData.data.is_service || 0,
          status: productData.data.status || 1,
          kg: productData.data.kg || "",
          tax_amount: productData.data.tax_amount || "0"
        };

        // Handle existing images
        this.existingImageUrls = [];
        this.selectedImagesPrv = [];

        // if (productData.data.picture) {
        //   const mainImageObj = this.createImageObject(productData.data.picture, 0);
        //   this.selectedImagesPrv.push(mainImageObj);
        //   this.existingImageUrls.push(productData.data.picture);
        // }

        // Handle additional images
        if (productData.data.images && Array.isArray(productData.data.images)) {
          this.originalImages = [...productData.data.images]; 
          productData.data.images.forEach((url, index) => {
            if (url && url.image !== productData.data.picture) { // Avoid duplicating main image
              const imageObj = this.createImageObject(url, index + 1);
              this.selectedImagesPrv.push(imageObj);
              this.existingImageUrls.push(url);
            }
          });
        }

        console.log("Loaded images:", this.selectedImagesPrv);
        console.log("Existing image URLs:", this.existingImageUrls);

        // Handle existing video
        if (productData.data.video) {
          this.existingVideoUrl = productData.data.video;
          this.productVideo = {
            name: "Current video",
            type: "video/mp4",
            url: productData.data.video,
            isExisting: true
          };
          this.videoPreview = productData.data.video;
          this.videoFileName = "Current video";
        }

        // Handle categories, subcategories, and filters
        if (productData.data.categories && productData.data.categories.length > 0) {
          this.multiselecvalue = productData.data.categories[0];
          this.subcategories();

          setTimeout(() => {
            if (productData.data.subcategories && productData.data.subcategories.length > 0) {
              this.filterselectvalue = productData.data.subcategories;
            }
            if (productData.data.filters && productData.data.filters.length > 0) {
              this.select_filterss = productData.data.filters.map(filter => filter.id);
            }
          }, 1000);
        }

        this.loading = false;
      } catch (error) {
        console.error('Error loading product data:', error);
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: this.$t("businessowner.Error_loading_product"),
        });
      }
    },

    // Fixed editProduct method
    editProduct() {
      this.loading = true;
      let fd = new FormData();

      // Add basic product info
      fd.append('name', this.editedProduct.name);
      fd.append('description', this.editedProduct.description);
      fd.append('price', this.editedProduct.price);
      fd.append('on_discount', this.editedProduct.on_discount);
      fd.append('discount_price', this.editedProduct.discount_price || 0);
      fd.append('condition', this.editedProduct.condition);
      fd.append('is_service', this.editedProduct.is_service);
      fd.append('in_stock', this.editedProduct.in_stock);
      fd.append('status', this.editedProduct.status);
      fd.append('quantity', this.editedProduct.quantity);
      fd.append('kg', this.editedProduct.kg);
      fd.append('tax_amount', parseInt(this.editedProduct.tax_amount) || 0);
      fd.append('slug', this.businessSlug);

      // Add category and subcategory
      if (this.multiselecvalue && this.multiselecvalue.id) {
        fd.append('categoryId', this.multiselecvalue.id);
      }

      if (this.filterselectvalue && this.filterselectvalue.length > 0) {
        fd.append('subCategoryId', this.filterselectvalue.map(el => el.subcategory_id).join());
      }

      fd.append('filterId', this.select_filterss.join());

      // Handle images properly
      if (this.selectedImagesPrv.length === 0) {
        this.flashMessage.show({
          status: "error",
          message: this.$t("businessowner.Please_select_at_least_one_image"),
        });
        this.loading = false;
        return;
      }

      // Separate new files from existing URLs
      const newImageFiles = [];
      const existingImageUrls = [];

      this.selectedImagesPrv.forEach((image, index) => {
        if (image instanceof File) {
          // New uploaded file
          newImageFiles.push({ file: image, index });
        } else if (image.isExisting && image.url) {
          // Existing image URL
          existingImageUrls.push(image.url);
        } else if (typeof image === 'string') {
          // String URL
          existingImageUrls.push(image);
        }
      });
      console.log(",,,,,,,,,,,,,", this.imagesToDeleteIds);
      if(this.imagesToDeleteIds.length > 0)
      {
        fd.append('imagesToDeleteIds', this.imagesToDeleteIds);
      }
      // Add main image (first image)
      const firstImage = this.selectedImagesPrv[0];
      if (firstImage instanceof File) {
        fd.append('picture', firstImage);
      }
      //  else if (firstImage.isExisting || typeof firstImage === 'string') {
      //   fd.append('picture', firstImage.url || firstImage);
      // }

      // Add all images (new files)
      newImageFiles.forEach(({ file }) => {
        fd.append('images[]', file);
      });

      // Add existing image URLs
      // existingImageUrls.forEach(url => {
      //   fd.append('images[]', url);
      // });

      // Handle additional new images
      // if (newImageFiles.length > 1) {
      //   newImageFiles.slice(1).forEach(({ file }) => {
      //     fd.append('additional_images[]', file);
      //   });
      // }

      // Handle video
      if (this.productVideo) {
        if (this.productVideo instanceof File) {
          fd.append('video', this.productVideo);
        } 
      }
      else
      {
        fd.append('video', "");
      }

      // Debug FormData
      console.log('FormData contents:');
      for (let pair of fd.entries()) {
        console.log(pair[0] + ':', pair[1] instanceof File ? `File: ${pair[1].name}` : pair[1]);
      }

      // Send the update request
      axios.post(`/market/${this.productId}`, fd, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        console.log('API Response:', res);
        this.loading = false;
        this.success = true;
        this.val = "success";
        this.msg = this.$t("businessowner.Product_updated_successfully");

        this.flashMessage.show({
          status: "success",
          message: this.msg,
        });

        setTimeout(() => {
          this.goBack();
        }, 1500);
      })
      .catch(err => {
        console.error('API Error:', err);
        this.loading = false;
        
        if (err.response && err.response.status === 422) {
          this.flashMessage.show({
            status: "error",
            message: err.response.data.message,
          });
        } else {
          this.flashMessage.show({
            status: "error",
            message: this.$t("businessowner.Something_went_wrong"),
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
      if (this.selectedcategories && this.selectedcategories.length > 0) {
        let formData2 = new FormData();
        formData2.append("categoryId", this.selectedcategories);
        this.$store.dispatch("auth/subcategories", formData2)
          .then(() => {
            if (this.editedProduct.subcategories && this.editedProduct.subcategories.length > 0) {
              this.filterselectvalue = this.getSubcategoriesFromProduct();
            }
          });
      }
    },

    getSubcategoriesFromProduct() {
      let selectedSubcategories = [];
      if (this.scategories && this.editedProduct.subcategories) {
        this.scategories.forEach(subcategory => {
          this.editedProduct.subcategories.forEach(productSubcat => {
            if (subcategory.subcategory_id == productSubcat.id) {
              selectedSubcategories.push(subcategory);
            }
          });
        });
      }
      return selectedSubcategories;
    }
  },

  created() {
    console.log("EditProduct component created");

    this.businessSlug = this.$route.params.businessSlug;
    this.productId = this.$route.params.productId;

    if (!this.productId) {
      console.error("No product ID provided in route params");
      this.flashMessage.show({
        status: "error",
        message: this.$t("businessowner.Invalid_product_id"),
      });
      this.goBack();
      return;
    }

    this.categories();
    this.loadProduct();
  }
};
</script>