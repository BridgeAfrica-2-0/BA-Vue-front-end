<template>
  <div>
    <navbar />
    <div class="px-md-5 px-4">
      <hr />
      <div class="row d-block px-md-3">
        <h3>Order Details</h3>
        <div class="row my-4" v-if="loading">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <b-spinner
              style="width: 3rem; height: 3rem;"
              label="Loading"
            ></b-spinner>
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
                  Sold By: <span>{{ details.businessesName[0] }}</span>
                </p>
              </span>
              <b-button variant="primary">
                <i class="fas fa-envelope"></i> Chat Now
              </b-button>
              <!-- <span class="text-small font-weight-bold mt-2">
                Total {{ details.Total }} FCFA
              </span> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
import moment from "moment";
import axios from "axios";
export default {
  components: { navbar },
  data() {
    return {
      moment: moment,
      orderID: null,
      details: [],
      loading: false,
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
      await axios
        .get(`user-order/${this.orderID}/items`)
        .then((res) => {
          this.loading = false;
          this.details = res.data.data;
          console.log(res.data);
        })
        .catch((err) => {
          this.loading = false;
          console.dir(err);
        });
    },
  },
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
