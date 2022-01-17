<template>
  <b-modal
    v-model="canShowModal"
    hide-footer
    id="product-details"
    size="xl"
    title="Product Details"
    @close="closeModal"
  >
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="4">
          <ProductCaroussel :productImages="[{ img: product.picture }]" />
        </b-col>
        <b-col cols="12" sm="12" md="8">
          <div>
            <h4 class="font-weight-bold">{{ product.name }}</h4>
            <span class="text-success" v-if="product.in_stock">In Stock</span>
            <span class="text-danger" v-else>Out of stock</span>
            <h4 class="font-weight-bold">
              {{ formatMoney(Number(product.price)) }}
            </h4>
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
              v-if="packageProduct === 'basic'"
              :element="product"
              type="business"
            />
            <b-button
              v-else-if="packageProduct === 'premium'"
              variant="primary"
              class="font-weight-light shadow-sm"
            >
              <span>{{ $t("general.Buy_Now") }}</span>
            </b-button>
            <router-link :to="`/business/${product.business_id}`"
              ><b-button
                variant="success"
                class="font-weight-light shadow-sm"
                >{{ $t("general.Check_On_Website") }}</b-button
              ></router-link
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
import ProductComments from "./ProductComments";
export default {
  name: "ProductDetails",
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    ProductCaroussel,
    ProductComments,
  },
  data() {
    return {
      formatObject: new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XAF",
        minimumFractionDigits: 2,
      }),
      canShowModal: false,
      packageProduct: "basic",
    };
  },
  computed: {},
  methods: {
    formatMoney(money) {
      return this.formatObject.format(money);
    },
    closeModal() {
      console.log("close modal");
      this.$emit("closemodal");
    },
  },
  watch: {
    showModal(newValue) {
      this.canShowModal = newValue;
    },
  },
  mounted() {
    console.log("product", this.product);
    //get prooduct package type
    this.$store
      .dispatch("productDetails/getProductDetails", this.product.id)
      .then((product) => {
        this.packageProduct = product.package[0] || this.packageProduct;
        console.log("Package for product : ", this.packageProduct);
      });
  },
};
</script>

<style></style>
