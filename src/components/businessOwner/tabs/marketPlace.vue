<template>
    <div> 

      <div class="row ">
        <div class="col-4 col-md-8">
          <p>
            <b-icon
              font-scale="1.8"
              icon="shop"
              variant="primary"
              class="mr-2"
            ></b-icon>
            <span class="font-weight-bold">{{ $t('businessowner.Market') }}</span>
          </p>
        </div>
  
         <div class="col-8 col-md ">
           <div class="inline-flex marg float-right">
  
           
            <b-button v-if="isPremium"
              class=" mx-1"
              variant="outline-primary"
              @click="displayOrders"
              >{{ my_orders }}</b-button
            >
         
                <!-- <div class="col col-md"> -->
            <b-button variant="outline-primary" @click="createProduct"
              >{{ $t('businessowner.Add_Product') }}</b-button
            >
           </div>
  
        </div>
          <!-- </div> -->
      </div>
      <div class="col-12">
        <hr class="h-divider" />
      </div>
      <div class="">
        <!-- MARKET HEADER BAR -->
  
        <!-- MARKET PRODUCT LIST -->
  
          
            
          <!-- <div class="col-md-6" v-for="(product, index) in products" :key="index">
            <Product v-show="!orders && market"  :product="products" />
          </div> -->
    <Product v-show="!orders && market"  />
         
    
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
        <b-link @click="swap">{{ $t('businessowner.Archive') }}</b-link>
  
      </div>
      <!-- ADDPRODUCT FORM -->
      <b-modal hide-footer :title="$t('businessowner.Add_product')"   @hidden="resetPostData" v-model="showModal">
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
                  v-model="newProduct.name"
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
                  v-model="newProduct.description"
                  type="text"
                  required
                ></b-textarea>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <div class="image-upload-wrap" @click="picImage" style="display: flex; justify-content: center; align-items: center; overflow: hidden">
                <input
                  type="file"
                  name=""
                  @change="getImage"
                  accept="image/*"
                  id="image"
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
              v-model="newProduct.price"
              class="mt-1"
              type="number"
              id="price"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-checkbox
            id="checkbox-1"
            v-model="newProduct.on_discount"
            name="checkbox-1"
            value="1"
            unchecked-value="0"
          >
            {{ $t('businessowner.This_Product_Is_On_Discount') }}
          </b-form-checkbox>


 <b-form-group    v-if="newProduct.on_discount==1"
            id="input-group-1"
            :label="$t('businessowner.discount_Price')"
            label-for="input-1"
            label-size=""
          >

   

            <b-form-input
              v-model="newProduct.discount_price"
              class="mt-1"
              type="number"
              id="price"
              required
            ></b-form-input>
          </b-form-group>


  
          <b-form-group
            id="conditions"
            :label="$t('businessowner.Conditions')"
            label-for="input-1"
            label-size="sm"
          >
            <b-form-input
              v-model="newProduct.condition"
              class="mt-1"
              id="conditions"
              required
            ></b-form-input>
          </b-form-group>
  
          <!-- CHECKBOX FLEX BOX -->
          <div class="d-flex justify-content-between align-items-start flex-wrap">
            <b-form-checkbox
              value="1"
              v-model="newProduct.is_service"
              unchecked-value="0"
            >
              {{ $t('businessowner.This_Item_Is_A_Service') }} ?
            </b-form-checkbox>
  
            <b-form-checkbox
              value="1"
              v-model="newProduct.in_stock"
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
              v-model="newProduct.tax_amount"
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
              v-model="newProduct.kg"
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
              v-model="multiselecvalue"
              @input="subcategories"
              :tag-placeholder="$t('businessowner.Add_this_as_new_tag')"
              :placeholder="$t('businessowner.Search_or_add_a_tag')"
              label="name"
              track-by="id"
              :options="BuCategories"
             
            ></multi-select>
          </div>
          <!-- SUB-CATEGORIES -->
          <div class="mt-2">
            <label class="typo__label"> {{ $t('businessowner.Sub_Category') }}</label> 
            <multi-select
              v-model="filterselectvalue"
           
              :placeholder="$t('businessowner.Search_or_add_a_tag')"
              label="name"
              track-by="subcategory_id"
              :options="scategories"
              :multiple="true"
           
            ></multi-select>
          </div>
          <label class="typo__label">{{ $t('businessowner.Filters') }} </label>
          <div>
            <b-card no-body>
              <b-tabs pills card vertical>
                <b-tab
                  :title="filters.name"
                  v-for="filters in filterselectvalue"
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
          <b-button @click="addProduct" class="mt-2 btn-block" variant="primary">
  
            <b-spinner small v-if="load" variant="white"></b-spinner>
  
            {{ $t('businessowner.Add') }}</b-button
          >
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
  import { isPremium } from '@/helpers';
  export default {
    name: "MarketPlace",
    components: {
      MultiSelect,
      Product,
      Orders,
      Archive,
    },
    data() {
      return {
        isPremium: isPremium(),
        options: ["list", "of", "options"],
        orders: false,
        archive: false,
       businessId:null,
        market: true,
        my_orders: this.$t('businessowner.orders'),
        selectedImagePrv: "",
  
        showModal: false,
        load: false,
        loader: false,
        newProduct: {
          name: "",
          description: "",
          picture: null,
          price: "",
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
          kg: "",
        },
       // products: [],
        val: "",
        msg: "",
        success: false,
        multiselecvalue: [],
        filterselectvalue: [],
        select_filterss: [],
        isShowOrders: false,
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
          // selectedUsers.push(item.id);
          selectedCatUsers.push(this.multiselecvalue.id);
        } else {
          selectedCatUsers.push(this.multiselecvalue.category_id);
        }
        return selectedCatUsers;
      },
    },
    methods: {
      swap() {
        console.log("orders: ", this.orders);
        console.log("archive: ", this.archive);
        console.log("market: ", this.market);
        this.orders = !this.orders;
        this.archive = !this.archive;
        this.market = false;
        this.my_orders= this.$t('businessowner.orders');
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
          this.my_orders = this.$t('businessowner.market');
        } else {
          this.my_orders = this.$t('businessowner.my_orders');
        }
        console.log("----" + this.status);
      },
    
  
       getProducts: async function () {
          let url="/market?business_id="+this.businessId;
         await this.$store
          .dispatch("market/getBproducts", url).then((res) => {
            console.log(res);
               
               
            
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            this.loader = false;
          });
      },
  
  
  
        flashErrors(errors) {
        let err = '';
        Object.values(errors).forEach((element) => {
          err = element[0];
        });
  
        return err;
      },
  
  
     resetPostData(){
  
  this.newProduct=[];
  this.selectedImagePrv='';
  this.filterselectvalue=[];
  
  this.multiselecvalue=[];
  
  this.select_filterss=[];
     },
  
      addProduct() {
        this.load = true;
        let fd = new FormData();
  
        //init data
        this.newProduct.business_id = this.$route.params.id;
       
        this.newProduct.categoryId = this.multiselecvalue.id;
     

        this.newProduct.subCategoryId = this.filterselectvalue
          .map((el) => el.subcategory_id)
          .join();
        this.newProduct.filterId = this.select_filterss.join();
  
        console.log("starting to display the map data");
       
  
       // transform product data in form data
        for (const key in this.newProduct) {
          fd.append(key, this.newProduct[key]);
        }
        console.log("NEW PRODUCT", this.newProduct);
        axios
          .post("market?business_id="+this.businessId, fd)
          .then((res) => {
            this.load = false;
            (this.success = true), (this.val = "success");
            this.msg = this.$t('businessowner.Operation_was_successful');
  
             this.flashMessage.show({
              status: 'success',
              message: this.msg,
              blockClass: 'custom-block-class',
            });
  
         this.showModal = false;
  
            this.getProducts();
          }) .catch((err) => {
              console.log({ err: err });
  
               this.load = false;
  
              if (err.response.status == 422) {
                console.log({ err: err });
  
                this.flashMessage.show({
                  status: 'error',
  
                  message: this.flashErrors(err.response.data.errors),
                  blockClass: 'custom-block-class',
                });
              } else {
                this.flashMessage.show({
                  status: 'error',
  
                  message:  this.$t('businessowner.Something_went_wrong'),
                  blockClass: 'custom-block-class',
                });
                console.log({ err: err });
              }
              
              
            });
  
  
  
      },
      picImage() {
        document.querySelector("#image").click();
      },
  
      
      getImage(e) {
        console.log("getImage");
        console.log(e.target.files[0]);
        this.newProduct.picture = e.target.files[0];
        let file = e.target.files[0] || e.dataTransfer.files;
        this.selectedImagePrv = URL.createObjectURL(file);
        console.log("this.selectedImagePrv", this.selectedImagePrv);
      },
      createProduct() {  
 
        if(!this.isPremium && this.products.data){

           if( this.products.data.length >10){

             this.flashMessage.show({
              status: 'success',
              
              message: this.$t('general.max_product_reach')
              
           
            });

           }else{
               this.showModal = !this.showModal;
           }
  
        }else{   
        this.showModal = !this.showModal;

        }
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
        this.multiselecvalue.push(tag); 
      },
      addFilter(newTag) {
        const tag = {
          name: newTag,
          id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
        };
        this.multiselec.push(tag);
        this.filterselectvalue.push(tag);
      },
    },
    beforeMount() {
      //this.loader = true;
      this.businessId = this.$route.params.id;

      this.categories();
      this.subcategories();
    },
  };
  </script>
  
  <style scoped>
  
  .h-100{
  
    height: 100%;
  }
  
  
  .pos {
    /* margin-left: 900px; */
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
  @media only screen and (min-width: 768px) {
    .marg{
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