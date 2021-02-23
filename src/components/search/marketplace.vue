<template>
  <div>
    <b-card>
      <b-row>
        <b-col>
          <h2>Marketplace</h2>
        </b-col>
        <b-col class="col-2">
          <b-link>See All</b-link>
        </b-col>
      </b-row>
      <div>
        <b-row>
          <b-col>
            <h4>Business Name</h4>
          </b-col>
          <b-col class="col-2">
            <b-link>Visit Shop</b-link>
          </b-col>
        </b-row>
        <div class="products">
          <Product
            v-for="(product, index) in products"
            :key="index"
            :title="product.title"
            :cost="product.cost"
            :state="product.state"
            class="ml-3"
          />
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
/* eslint-disable */
import Product from "@/components/search/slider";
export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [
        { title: "Product", cost: "1000", state: "In-stock" },
        { title: "Product", cost: "1000", state: "In-stock" },
        { title: "Product", cost: "1000", state: "In-stock" },
      ],
    };
  },
};
</script>

<style scoped>
.business {
  border-bottom: 1px solid #ccc;
}
.button {
  margin-left: 120px;
}
.products{
    display: flex;
    flex-wrap: wrap;
}
</style>
