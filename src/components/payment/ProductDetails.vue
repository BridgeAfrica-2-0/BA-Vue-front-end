<template>
  <b-modal hide-footer id="product-details" size="xl" title="Product Details">
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="4">
          <ProductCaroussel />
        </b-col>
        <b-col cols="12" sm="12" md="8">
          <div>
            <h4 class="font-weight-bold">Headset</h4>
            <span class="text-success">In Stock</span>
            <h4 class="font-weight-bold">5 000XAF</h4>
          </div>
          <hr class="h-divider" />
          <div>
            <h4>Product Desciption</h4>
            <p class="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis iste, dolor asperiores nisi ad ipsam laboriosam, fugiat
              facilis amet eveniet, saepe dolores excepturi. Similique quas quae
              ut eum totam explicabo.
            </p>
          </div>
          <hr class="h-divider" />

          <div
            class="buttons my-3 d-flex justify-content-between align-items-center"
          >
            <b-button variant="primary" class="font-weight-light shadow-sm"
              >Buy Now</b-button
            >
            <b-button variant="success" class="font-weight-light shadow-sm"
              >Check On Website</b-button
            >
          </div>
          <hr class="h-divider" />
          <div class="mt-3">
            <ProductComments />
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
  components: {
    ProductCaroussel,
    ProductComments
  }
};
</script>

<style></style>
