<template>
  <base-layout>
    <template v-slot:main>
      <div>
        <navbar />
        <div class="px-md-5 px-4">
          <hr />
          <div class="row d-block px-md-3">
            <h3>Order Details</h3>
            <div class="row my-4" v-if="loading">
              <div class="col-12 d-flex justify-content-center align-items-center">
                <b-spinner variant="primary" style="width: 3rem; height: 3rem;" label="Loading"></b-spinner>
              </div>
            </div>
            <div v-else>
              <div class="card box-shadow my-3">
                <div class="d-flex justify-content-between top p-3">
                  <span class="text-small font-weight-bold mt-2">
                    <p class="mb-0">
                      Order#<span class="text-success">{{ orderID }}</span>
                    </p>
                    <p class="text-grey font-weight-normal">
                      {{ details.shippingAdress.city }}
                      {{ moment(details.created_at).format("MM/DD/YYYY") }}
                    </p>
                  </span>
                  <span class="text-small font-weight-bold mt-2">
                    Total {{ details.Total }} FCFA
                  </span>
                </div>
              </div>

              <div class="card box-shadow border-0">
                <div class="d-flex justify-content-between top p-3">
                  <span class="text-small font-weight-bold mt-2">
                    <p class="mb-0">
                      Sold By:
                      <router-link :to="'business/' + details.businessDetails">
                        <span>{{ details.businessDetails.name }}</span>
                      </router-link>
                    </p>
                  </span>
                  <!-- <b-button variant="primary">
                <i class="fas fa-envelope"></i> Chat Now
              </b-button> -->
                  <div class="mt-1">
                    <BtnCtaMessage :element="details.businessDetails" type="business" />
                  </div>
                  <!-- <span class="text-small font-weight-bold mt-2">
                Total {{ details.Total }} FCFA
              </span> -->
                </div>
              </div>

              <div class="card my-3 p-2">
                <div v-for="order in details.orderItems" :key="order.id">
                  <div class="row d-flex justify-content-between px-3 mb-3">
                    <span class="flou align-self-center ">
                      {{ order.user_name }}
                      {{ moment(order.created_at).format("MM/DD/YYYY h:m:s") }}
                    </span>
                    <div class="d-block d-lg-none align-self-center text-small">
                      <span>Status:
                        <span class="text-success">{{ order.status }}</span></span>
                    </div>
                  </div>
                  <div class="row px-3 my-4 cursor">
                    <div class="col-lg-3 col-4">
                      <splide :options="{ rewind: true }" class="r-img">
                        <splide-slide cl>
                          <img :src="order.product_picture" class="r-img" />
                        </splide-slide>
                      </splide>
                    </div>
                    <div class="col-lg-3 col-4 font-weight-bold text-left m-auto">
                      <h3 class="text-small text-capitalize">
                        {{ $t("myOrders.Product_Qty") }} :
                      </h3>
                      <h3 class="text-small text-capitalize">
                        {{ $t("myOrders.Price") }} :
                      </h3>
                      <h3 class="text-small text-capitalize">
                        {{ $t("myOrders.shipping_cost") }}:
                      </h3>
                      <h3 class="text-small text-capitalize">
                        {{ $t("myOrders.Total") }} :
                      </h3>
                    </div>
                    <div class="col-lg-3 col-4 text-left m-auto">
                      <h3 class="text-small">
                        {{ order.quantity }}
                      </h3>
                      <h3 class="text-small">{{ order.price }} Fcfa</h3>
                      <h3 class="text-small">{{ order.shipping_amount }} Fcfa</h3>
                      <h3 class="text-small">
                        {{
                          parseFloat(order.sub_total) *
                          parseFloat(order.tax_amount) +
                          parseFloat(order.shipping_amount)
                        }}
                        XAF
                      </h3>
                    </div>
                    <div class="col-lg-3 d-none d-lg-block m-auto">
                      <h3 class="font-weight-bold text-small text-capitalize">
                        {{ $t("myOrders.status") }}
                      </h3>
                      <h3 class="text-success font-weight-normal text-small text-capitalize">
                        {{ order.status }}
                      </h3>
                    </div>
                  </div>
                  <hr />
                </div>
                <div class="d-flex justify-content-center">
                  <b-pagination v-if="next || prev" v-model="currentPage" pills :per-page="perPage"
                    :total-rows="totalItems" @change="handlePage"></b-pagination>
                </div>
              </div>

              <div class="row justify-content-center mx-1">
                <div class="col-md-6">
                  <div class="card shipad h-100">
                    <div class="card-body ">
                      <div class="row font-weight-bold text-center">
                        <h6 class="font-weight-bold">shipping Address</h6>
                      </div>
                      <br />
                      <div class="row">
                        <div class="col-3 ">
                          <p class="text-small font-weight-bold mb-0">city</p>
                        </div>
                        <div class="col">{{ details.shippingAdress.city }}</div>
                      </div>
                      <div class="row">
                        <div class="col-3">
                          <p class="text-small font-weight-bold mb-0">name</p>
                        </div>
                        <div class="col">{{ details.shippingAdress.name }}</div>
                      </div>
                      <div class="row">
                        <div class="col-3 ">
                          <p class="text-small font-weight-bold mb-0">phone</p>
                        </div>
                        <div class="col">{{ details.shippingAdress.phone }}</div>
                      </div>
                      <div class="row">
                        <div class="col-3 ">
                          <p class="text-small font-weight-bold mb-0">email</p>
                        </div>
                        <div class="col">{{ details.shippingAdress.email }}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class=" col-md-6 ">
                  <div class="card h-100 p-2">
                    <div class="p-md-4">
                      <div class="d-flex justify-content-between">
                        <p class="text-small font-weight-bold mb-0">
                          Total Summary
                        </p>
                        <br />
                      </div>
                      <div class="d-flex justify-content-between">
                        <p class="text-small font-weight-bold mb-0">
                          Total Price :
                        </p>
                        <p class="text-small font-weight-bold mb-0">
                          {{ details.Totalprice }} XAF
                        </p>
                      </div>
                      <div class="d-flex justify-content-between">
                        <p class="text-small font-weight-bold mb-0">
                          Total Shipping Fee :
                        </p>
                        <p class="text-small font-weight-bold mb-0">
                          {{ details.TotalShippingFee }} XAF
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between">
                      <p class="text-small font-weight-bold mb-0">Total :</p>
                      <p class="text-small font-weight-bold mb-0">
                        {{ details.Total }} XAF
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </base-layout>
</template>
<script>
import navbar from "@/components/navbar.vue";
import moment from "moment";
import axios from "axios";
import BaseLayout from "@/layouts/Layout"

export default {
  components: { navbar, BaseLayout },
  data() {
    return {
      moment: moment,
      orderID: null,
      details: [],
      totalItems: 0,
      next: "",
      prev: "",
      currentPage: 1,
      perPage: 5,
      loading: false
    };
  },
  created() {
    // console.log(this.$route.params.id);
    this.orderID = this.$route.params.id;
    this.getOrderDetails();
  },
  methods: {
    async getOrderDetails() {
      this.loading = true;
      let page = this.currentPage;
      await axios
        .get(`user-order/${this.orderID}/items?page=${page}`)
        .then(res => {
          this.loading = false;
          this.details = res.data.data;

          this.totalItems = res.data.total;
          this.perPage = res.data.per_page;

          this.next = res.data.next;
          this.prev = res.data.previous;

          console.log(res.data);
        })
        .catch(err => {
          this.loading = false;
          console.dir(err);
        });
    },
    handlePage(value) {
      this.currentPage = value;
      this.getOrderDetails();
    }
  }
};
</script>
<style scoped>
/* .box-shadow {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.39);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.39);
} */
.text-small {
  font-size: 14px;
}

.text-grey {
  color: #5c5c5c;
}

@media only screen and (max-width: 700px) {
  .d-flex.top {
    flex-direction: column;
  }
}
</style>
