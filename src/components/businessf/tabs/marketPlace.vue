<template>
  <div>  
    <div class="">  
      <!-- MARKET HEADER BAR -->
      <div class="col-12 d-flex align-items-center justify-content-between">
        <p>
          <b-icon
            font-scale="1.8"
            icon="shop"
            variant="primary"
            class="mr-2"
          ></b-icon>
          <span class="font-weight-bold">Market</span>
        </p>
        <b-button v-if="business_info.user_package_name=='premium'"
          variant="outline-primary"
          @click="() => $router.push({ name: 'cart' })"
        >
          <b-icon icon="cart" class="mr-2"></b-icon>Cart</b-button
        >
      </div>
      <div class="col-12">
        <hr class="h-divider" />
      </div>

      <!-- MARKET PRODUCT LIST -->

       <Product  />

     
    </div>
    <!-- ADDPRODUCT FORM -->
  </div>
</template>

<script>
import Product from "../product";
import { isGuestUser } from '@/helpers';
import axios from "axios";
export default {
  name: "MarketPlace",
  components: {
    Product,
  },
  data() {
    return {
      showModal: false,
      load: false,
      loader: false,
      businessId:null,
      products: [],
      val: "",
      msg: "",
      success: false,
      multiselecvalue: [],
      filterselectvalue: [],
      select_filterss: [],
      isGuestUser: isGuestUser(),
      multiselec: [
        { name: "Vue.js", code: "vu" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" },
      ],
    };
  },

  computed:{
 
     business_info() {
      return this.isGuestUser ? this.$store.state.businessGuest.businessInfo: this.$store.state.businessOwner.businessInfo;
    },
  },

  methods: {
   

   
     getProducts: async function () {
        let url="/market?slug="+this.businessId;
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


  },
  beforeMount() {
    this.businessId = this.$route.params.id;
    this.loader = true;
    //get market place products
   // this.getProducts();
  },
};
</script>

<style scoped>
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
