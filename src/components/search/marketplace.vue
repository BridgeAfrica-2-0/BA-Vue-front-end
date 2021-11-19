<template>
  <div>
    <b-card class="card">
      <b-row>
        <b-col>
          <h4>{{$t("search.Market")}}</h4>
        </b-col>
        <b-col class="col">
          <b-link class="lnk">{{$t("search.See_All")}}</b-link>
        </b-col>
      </b-row>
      <div>
        <b-row>
          <b-col>
            <h6><b>{{$t("search.Business_Name")}}</b></h6>
          </b-col>
          <b-col class="col">
            <b-link class="lnk">{{$t("search.Visit_Shop")}}</b-link>
          </b-col>
        </b-row>
        <div class="products">
          <b-row class="ml-3">
            <div class="left">
              <b-icon icon="arrow-left-circle"></b-icon>
            </div>
            <b-col class="ml-5">
              <b-row>
                <Product
                  v-for="(product, index) in products"
                  :key="index"
                  :title="product.title"
                  :cost="product.cost"
                  :state="product.state"
                  class="ml-3"
              /></b-row>
            </b-col>
            <div class="left ml-5">
              <b-icon icon="arrow-right-circle"></b-icon>
            </div>
          </b-row>
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
.left {
  background-color: #e75d29;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
  height: 40px;
  padding: 10px;
  color: #fff;
  border-radius: 20px;
  margin-top: 120px;
  cursor: pointer;
  margin-left: 10px;
}
@media only screen and (max-width: 768px) {
  .lnk {
    margin-left: 30px;
  }
}
</style>
