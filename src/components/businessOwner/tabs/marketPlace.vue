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
          <b-button v-if="isPremium" class="mx-1" variant="outline-primary" @click="displayOrders">{{ my_orders
            }}</b-button>
          <b-button variant="outline-primary" v-if="isPremium && !isGlobal" @click="redirectToAddProduct">{{
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

      <!-- Restored product list component -->
      <ProductList v-show="!orders && market && isPremium" />

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
  </div>
</template>

<script>
// import axios from "axios";
import ProductList from "../product"; // Import the product list component with a clearer name
import Orders from "@/views/businessOwnerOrders";
import Archive from "../archive";
import { isPremium } from "@/helpers";
import { LocalisationMixins } from "@/mixins"

export default {
  name: "MarketPlace",
  mixins: [LocalisationMixins],
  components: {
    ProductList, // Register the product list component
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
      loader: false,
      isShowOrders: false
    };
  },
  
  computed: {
    products() {
      return this.$store.state.market.products;
    }
  },
  methods: {
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

    redirectToAddProduct() {
      // Check product limit for non-premium users
      if (!this.isPremium && this.products.data) {
        if (this.products.data.length > 10) {
          this.flashMessage.show({
            status: "success",
            message: this.$t("general.max_product_reach")
          });
          return;
        }
      }
      
      // Redirect to the AddProduct page
      this.$router.push({ name: 'AddProduct', params: { id: this.businessSlug } });
    }
  },
  beforeMount() {
    this.businessSlug = this.$route.params.id;
    this.getProducts();
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