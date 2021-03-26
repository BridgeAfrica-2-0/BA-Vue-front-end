<template>
  <div>
    <b-card class="card">
      <b-row>
        <b-col>
          <h4>Marketplace</h4>
        </b-col>
        <b-col class="col">
          <b-link class="lnk">See All</b-link>
        </b-col>
      </b-row>
      <div>
        <b-row>
          <b-col>
            <h6><b>Business Name</b></h6>
          </b-col>
          <b-col class="col">
            <b-link class="lnk">Visit Shop</b-link>
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
.products {
  display: flex;
  flex-wrap: wrap;
}
.lnk {
  margin-left: 280px;
}

.card {
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
}
@media only screen and (max-width: 768px) {
  .lnk {
    margin-left: 30px;
  }
}
</style>
