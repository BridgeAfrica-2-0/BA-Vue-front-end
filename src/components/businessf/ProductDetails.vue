<template>
  <b-modal
    v-model="canShowModal"
    hide-footer
    id="product-details"
    size="xl"
    title="Product Details"
    @close="closeModal"
  >
    <LightBox
      ref="lightboxh"
      :media="[
        {
          type: 'image',
          thumb: product.picture,
          src: product.picture,
          id: 'fTs87IawpN4'
        }
      ]"
      :show-caption="true"
      :show-light-box="false"
    ></LightBox>

    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="5">
          <ProductCaroussel :productImages="[{ img: product.picture }]" />
        </b-col>
        <b-col cols="12" sm="12" md="7">
          <div>
            <h4 class="">{{ product.name }}</h4>
            <span class="text-success" v-if="product.in_stock">In Stock</span>
            <span class="text-danger" v-else>Out of stock</span>
            <h4 class="">{{ formatMoney(Number(product.price)) }}</h4>
          </div>
          <hr class="h-divider" />
          <div>
            <h4>{{ $t("general.Product_Desciption") }}</h4>
            <p class="text-justify">
              {{ product.description }}
            </p>
          </div>
          <hr class="h-divider" />

          <div
            class="
              buttons
              my-3
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <BtnCtaMessage
              v-if="product.user_package_name == 'basic'"
              :element="product"
              :isProduct="true"
              :buyNow="true"
              type="business"
            />

            <b-button
              @click="handleAddToCard"
              v-else-if="product.user_package_name == 'premium'"
              variant="primary"
              class="font-weight-light shadow-sm"
            >
              <span>{{ $t("general.Buy_Now") }}</span>
            </b-button>

            <b-button
              variant="light"
              class="font-weight-light shadow-sm"
              @click="goToWebsiteMarket(product)"
              >{{ $t("general.Check_On_Website") }}</b-button
            >
          </div>
          <hr class="h-divider" />
          <div class="mt-3">
            <ProductComments :idproduct="product.id" :product="product" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
import ProductCaroussel from "./ProductCaroussel";
import LightBox from "vue-it-bigger";
import ProductComments from "./ProductComments";
import { isGuestUser } from "@/helpers";

export default {
  name: "ProductDetails",
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    product: {
      type: [Array, Object],
      required: true
    }
  },
  components: {
    ProductCaroussel,
    ProductComments,
    LightBox
  },
  data() {
    return {
      formatObject: new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XAF",
        minimumFractionDigits: 2
      }),
      canShowModal: false,
      packageProduct: "basic",
      isGuestUser: isGuestUser
    };
  },
  computed: {
    getStatus() {
      return this.$store.state.cart.status;
    },
    islogin() {
      return this.$store.getters["auth/isLogged"];
    }
  },
  methods: {
    async handleAddToCard() {
      await this.$store
        .dispatch("cart/addToCart", {
          product: this.product,
          islogin: this.islogin
        })
        .then(response => {
          this.flashMessage.show({
            status: "success",
            message: this.getStatus
          });

          this.$router.push({ name: "payment" });
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "error occur"
          });
        });
    },

    goToWebsiteMarket(product) {
      this.$router.push({
        path: `/business/${product.business_slug}`,
        query: { tabId: 3 }
      });
    },

    formatMoney(money) {
      return this.formatObject.format(money);
    },
    closeModal() {
      console.log("close modal");
      this.$emit("closemodal");
    }
  },
  watch: {
    showModal(newValue) {
      this.canShowModal = newValue;
    }
  },
  mounted() {
    const dispatchMethod = this.isGuestUser
      ? "getProductDetailsForGuest"
      : "getProductDetails";

    //get prooduct package type

    // if(this.product){
    // this.$store
    //   .dispatch("productDetails/"+dispatchMethod, this.product.id)
    //   .then((product) => {
    //     if(product){
    //     this.packageProduct = product.package[0] || this.packageProduct;
    //     console.log("Package for product : ", this.packageProduct);
    //     }
    //   });
    //     }
  }
};
</script>

<style></style>
