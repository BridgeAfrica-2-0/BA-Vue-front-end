<template>
  <div class="container">
    <navbar />
    <hr />
    <!-- Desktop Top Bar -->

    <div v-if="showPayment">   

      <PaymentOperator  v-if="showOperator"
            @requestpayment="handleRequestPayment"
            @showreview="handleShowReview"
            :price="order_price"
          />



            <RequestPayment 
            
             v-if="showRequestPayment"
            :price="order_price"
            :operator="operator"
            :loading="loading"
            @changepayment="handleChangePayment"
            @confirmpayment="handleConfirmPayment"
          />

     </div>



  <div v-if="!showPayment">  


    <div class="row m-0 parent desktop">
      <b-avatar
        id="a1"
        class="avatar"
        :class="isTabActive == 1 ? 'bg-success' : ''"
        text="1"
        @click="changeTab(1)"
      ></b-avatar>
      <h2 class="text cursor" @click="changeTab(1)">
        {{ $t("myOrders.All") }}
      </h2>
      <div
        id="p1"
        class="progress prog cursor gris"
        :class="isTabActive == 1 ? 'bg-success' : ''"
        @click="changeTab(1)"
      >
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <b-avatar
        id="a2"
        class="avatar"
        :class="isTabActive == 2 ? 'bg-success' : ''"
        text="2"
        @click="changeTab(2)"
      ></b-avatar>
      <h2 class="text cursor" @click="changeTab(2)">
        {{ $t("myOrders.In_Progress") }}
      </h2>
      <div
        id="p2"
        class="progress prog cursor gris"
        :class="isTabActive == 2 ? 'bg-success' : ''"
        @click="changeTab(2)"
      >
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <b-avatar
        id="a3"
        class="avatar"
        :class="isTabActive == 3 ? 'bg-success' : ''"
        text="3"
        @click="changeTab(3)"
      ></b-avatar>
      <h2 class="text cursor" @click="changeTab(3)">
        {{ $t("myOrders.Complete") }}
      </h2>
      <div
        id="p3"
        class="progress prog cursor gris"
        :class="isTabActive == 3 ? 'bg-success' : ''"
        @click="changeTab(3)"
      >
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <b-avatar
        id="a4"
        class="avatar"
        :class="isTabActive == 4 ? 'bg-success' : ''"
        text="4"
        @click="changeTab(4)"
      ></b-avatar>
      <h2 class="text cursor" @click="changeTab(4)">
        {{ $t("myOrders.Cancel") }}
      </h2>
      <div
        id="p4"
        class="progress prog cursor gris"
        :class="isTabActive == 4 ? 'bg-success' : ''"
        @click="changeTab(4)"
      >
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <!-- Mobile Top Bar -->
    <div class="mobile-view">
      <div class="justify-content-between d-flex row cd B m-0">
        <div
          id="m1"
          class="mobile bg-success t col transition pl-4"
          @click="changeTab(1)"
        >
          <div class="cercle1">1</div>
          <h2 class="h2 text-position">{{ $t("myOrders.All") }}</h2>
        </div>
        <div id="m2" class="mobile1 col t start-50" @click="changeTab(2)">
          <div class="cercle2">2</div>

          <h2 class="h2 text-position text-center">
            {{ $t("myOrders.In_progress") }}
          </h2>
        </div>
        <div id="m3" class="mobile3 col t start-50" @click="changeTab(3)">
          <div class="cercle2">3</div>

          <h2 class="h2 text-position text-center">
            {{ $t("myOrders.Complete") }}
          </h2>
        </div>
        <div id="m4" class="mobile2 col t" @click="changeTab(4)">
          <div class="cercle2">4</div>
          <h2 class="h2 text-position text-center">{{ $t("myOrders.Cancel") }}</h2>
        </div>
      </div>
    </div>

    <!-- Top Bar Ended -->

    <div class="d-flex justify-content-between my-4">
      <h2 class="font-20 align-self-center">{{ $t("myOrders.My_orders") }}</h2>
      <b-button variant="link" class="align-self-center text-capitalize">{{
        $t("myOrders.clear_history")
      }}</b-button>
    </div>
    <div class="row">
      <div class="col-md-6 col-lg-4 d-flex justify-content-between mb-4">
        <p class="align-self-center">{{ $t("myOrders.Show") }}:</p>
        <b-form-select
          v-model="selectedShow"
          :options="showOptions"
          @change="filterOrderByTime"
          class="mx-3 align-self-center"
        ></b-form-select>
      </div>
    </div>
    <div class="row my-4" v-if="loading">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <b-spinner
        variant="primary"
          style="width: 3rem; height: 3rem"
          label="Loading"
        ></b-spinner>
      </div>
    </div>  
    <div v-for="order in orders" :key="order.order_id">
      <div class="row d-flex justify-content-between px-3">
        <p class="order-text align-self-center pb-0 mb-0">
          <span class="font-weight-bold">
            {{ $t("myOrders.Order") }}
          </span>
          <span
            class="text-success cursor"
            @click="gotoOrderDetails(order.order_id)"
            >#{{ order.order_id }}</span
          >
        </p>
        <b-dropdown
          variant="ligth"
          id="dropdown-1"
          text="Manage"
          class="align-self-center"
        >
          <b-dropdown-item
            @click="updateOrderStatus('complete', order.order_id)"
            >Complete</b-dropdown-item
          >
          <b-dropdown-item @click="updateOrderStatus('archive', order.order_id)"
            >Archive</b-dropdown-item
          >
          <b-dropdown-item @click="updateOrderStatus('delete', order.order_id)"
            >{{ $t("general.Delete") }}</b-dropdown-item
          >
        </b-dropdown>
      </div>
      <div class="row d-flex justify-content-between px-3 mb-3">
        <span class="flou align-self-center">
          {{ order.user_name }}
          {{ moment(order.created_at).format("MM/DD/YYYY") }}
          12H00
        </span>
        <div class="d-block d-lg-none align-self-center text-small">
          <span
            >Status: <span class="text-success">{{ order.status }}</span></span
          >
        </div>
      </div>
      <hr />
      <div
        class="row px-3 my-4 cursor"
        @click="gotoOrderDetails(order.order_id)"
      >
        <div class="col-lg-3 col-4">
          <splide :options="{ rewind: true }" class="r-img">
            <splide-slide cl v-for="(im, index) in order.images" :key="index">
              <img :src="im" class="r-img" />
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
        <div class="col-lg-2 col-4 text-left m-auto">
          <h3 class="text-small">
            {{ order.order_items_count }}
          </h3>
          <h3 class="text-small">{{ order.total_amount }} Fcfa</h3>
          <h3 class="text-small">{{ order.shipping_amount }} Fcfa</h3>
          <h3 class="text-small">
            {{
              parseFloat(order.shipping_amount) + parseFloat(order.total_amount)
            }}
            XAF
          </h3>
        </div>
        <div class="col-lg-2 d-none d-lg-block m-auto text-center">
          <h3 class="font-weight-bold text-small text-capitalize">
            {{ $t("myOrders.status") }}
          </h3>
          <h3
            class="text-success font-weight-normal text-small text-capitalize"
          >
            {{ order.status }}
          </h3>
        </div>

        <div class="col-lg-2 d-none d-lg-block m-auto text-right">
          
           <b-button
          variant="primary"
          class="px-3"
          @click="reOrder(order)"
          >   <b-spinner
          style="width: 1.2rem; height: 1.5rem"
          variant="light"
          v-if="order_loading"
          label="Loading"
        ></b-spinner>    {{ $t("myOrders.Reorder") }}     </b-button
        >
        
         </div>
      </div>
      <div
        class="
          d-flex d-lg-none
          justify-content-lg-end justify-content-center
          my-3
        "
      >
        <b-button
          variant="primary"
          class="px-5"
          @click="reOrder(order)"
          >   <b-spinner
          style="width: 1.5rem; height: 1.5rem"
          variant="light"
          v-if="order_loading"
          label="Loading"
        ></b-spinner>    {{ $t("myOrders.Reorder") }}     </b-button
        >
      </div>

    </div>
    <div class="row my-4" v-if="loading">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <!-- <b-spinner
          style="width: 3rem; height: 3rem"
          variant="primary"
          label="Loading"
        ></b-spinner> -->
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <b-pagination  v-if="!loading  && next   && prev "
     
        v-model="currentPage"
        pills
        :total-rows="totalOrders"
        :per-page="orderPerPage"
        @change="handlePageChange"
      ></b-pagination>
    </div>
    
  </div>  
   </div>
</template>
<script>
import axios from "axios";
import navbar from "./navbar.vue";
import PaymentOperator from "./payment/PaymentOperator";
import RequestPayment from "./payment/RequestPayment";
import moment from "moment";
export default {
  components: { navbar, PaymentOperator, RequestPayment },
  data() {
    return {
      isTabActive: 1,
      orders: [],
      operator: "",
      showRequestPayment: false,
      showPayment: false,
      showOperator:false,
      moment: moment,
      totalOrders: 0,
      orderPerPage: 5,
      currentPage: 1,
      order_price: 0,
      order_id: null,
      order_loading:false,
      next: "",
      prev: "",
      selectedShow: null,
      loading: false,
      img: ["http://urlr.me/YMQXD", "https://placekitten.com/400/300"],
      showOptions: [
        { value: null, text: this.$t("general.Please_select_an_option") },
        { value: "a", text: "last 5 days" },
        { value: "b", text: "last 10 days" },
      ],
    };
  },

  created() {
    this.getAllOrders();
    // this.updateOrderStatus("complete", 10);
  },
  methods: {
    changeTab(index) {
      this.isTabActive = index;
      if (index == 2) {
        this.getOrderByStatus(this.$t("myOrders.pending"));
      } else if (index == 3) {
        this.getOrderByStatus(this.$t("myOrders.complete"));
      } else if (index == 4) {
        this.getOrderByStatus(this.$t("myOrders.cancel"));
      } else {
        this.getAllOrders();
      }
    },

    async reOrder(order) {

       let loader = this.$loading.show({
          container: this.fullPage ? null : this.$refs.loader,
          canCancel: true,
          onCancel: this.onCancel,
          color: "#e75c18",
        });


  
      await axios
        .post(`shipping-checkout/re-order?order_id=${order.order_id}`)
        .then((res) => {
            console.log(res);

          this.order_price = res.data.data.total_amount;
          this.order_id = res.data.data.order_id;

              loader.hide();

           this.showPayment= true;
            this.showOperator =true;
        })
        .catch((err) => {
          console.log(err);
            loader.hide();
        });
    },

    handleChangePayment() {
        

          this.showPayment= true;
      this.showOperator=true;
      this.showRequestPayment=false;

    },

    handleConfirmPayment({ number, amount, operator }) {
      // this.$emit("nextpaymentstep");
      // this.showRequestPayment = false;
      // this.showConfirmPayment = true;


    

      const data = {
        phone: number,
        amount: amount,
        orderId: this.order_id,
        operator: operator,
      };

      console.log(data);
      let url = null;
      if (operator == "ORANGE") {
        this.loading = true;

        url = "orange/start-orange-money-transaction";

        axios
          .post(url, data)
          .then((response) => {
            // this.showConfirmPayment = true;
         
            console.log(response.data.data);

            window.location.href = response.data.data.payment_url;
            this.loading = false;
            console.log("testing orange");
          })
          .catch((error) => {
            this.flashMessage.show({
              status: "error",

              message: "Transaction Failed",
            });
            console.dir(error);

            this.loading = false;
          });
      }

      if (operator == "MTN") {
        this.loading = true;

        url = "mtn/start-momo-transaction";

        axios.post(url, data)
          .then((response) => {

            this.flashMessage.show({
              status: "success",

              message: "Transaction Pending",
            });


            
               this.showPayment= false;
             this.showOperator=false;
              this.showRequestPayment=false;
           
            this.loading = false;
          })      
          .catch((error) => {
            this.flashMessage.show({
              status: "error",

              message: "Transaction Failed",
            });
            console.dir(error);
            this.loading = false;
          });
      }
    },

    handleRequestPayment(price, operator) {
     
         this.showPayment= true;
      this.showOperator=false;
      this.showRequestPayment=true;
      this.operator=operator;
    },

    handleShowReview() {
      this.showReview = true;
      this.showOperators = false;
    },

    async getAllOrders() {
      let page = this.currentPage;
      this.loading = true;
      await axios
        .get(`orders/all?page=${page}`)
        .then((res) => {
          this.orders = res.data.data;
          this.totalOrders = res.data.total;
          this.orderPerPage = res.data.per_page;

          this.next = res.data.next;
          this.prev = res.data.previous;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    async getOrderByStatus(status) {
      let page = this.currentPage;
      this.loading = true;
      await axios
        .get(`shipping-checkout/orders/${status}?page=${page}`)
        .then((res) => {
          this.orders = res.data.data;
          this.totalOrders = res.data.total;
          this.orderPerPage = res.data.per_page;

          this.next = res.data.next;
          this.next = res.data.previous;
          this.loading = false;

          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    async updateOrderStatus(status, id) {
      this.loading = true;
      let data = {
        OrderId: id,
        status: status,
      };
      axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      await axios
        .post(`order/actionUserOrder/${id}/${status}`, data)
        .then((res) => {
          if (res.status == 200) {
            this.flashMessage.show({
              status: "success",
              message: `Order status is updated to ${status}`,
              blockClass: "custom-block-class",
            });
            this.getOrders();
          }
        })
        .catch((err) => {
          console.dir(err);
          this.flashMessage.show({
            status: "error",
            message: err.response.data.message,
            blockClass: "custom-block-class",
          });
        });
    },
    handlePageChange(value) {
      this.currentPage = value;
      this.getOrders();
    },
    getOrders() {
      let index = this.isTabActive;
      if (index == 2) {
        this.getOrderByStatus(this.$t("myOrders.pending"));
      } else if (index == 3) {
        this.getOrderByStatus(this.$t("myOrders.complete"));
      } else if (index == 4) {
        this.getOrderByStatus(this.$t("myOrders.cancel"));
      } else {
        this.getAllOrders();
      }
    },
    async filterOrderByTime() {
      this.loading = true;
      let type = this.selectedShow;
      await axios
        .get(`order/filtreOrderUser/${type}`)
        .then((res) => {
          this.loading = false;
          this.orders = res.data.data;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
    gotoOrderDetails(id) {
      this.$router.push(`/myorders/detail/${id}`);
    },
  },
};
</script>
<style scoped>
.progress {
  width: 160px;
  line-height: 50px;
  margin-right: 50px;
  margin-left: -30px;
  margin-top: 40px;
}

.avatar {
  margin-top: 23px;
  margin-right: 10px;
}

.cursor {
  cursor: pointer;
}

.prog {
  height: 10px;
  margin-left: 20px;
  margin-right: 10px !important;
  width: 130px !important;
}
.gris {
  background-color: #6c757d;
}
.text {
  margin-top: 35px;
}

.mobile {
  width: 195px;
  height: 50px;
  color: white;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 88% 50%, 75% 100%, 0% 100%, 0 52%, 0% 0%);
}
.mobile1 {
  width: 200px;
  height: 50px;
  margin-left: -21px;
  color: white;
  z-index: 20px;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 88% 50%, 75% 100%, 0% 100%, 11% 50%, 0% 0%);
}
.mobile2 {
  width: 200px;
  height: 50px;
  margin-left: -20px;
  color: white;
  z-index: 20px;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 75% 50%, 75% 100%, 0% 100%, 11% 50%, 0% 0%);
}
.mobile3 {
  width: 200px;
  height: 50px;
  margin-left: -20px;
  color: white;
  z-index: 20px;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 88% 50%, 75% 100%, 0% 100%, 11% 50%, 0% 0%);
}
.cercle1 {
  margin-top: 15px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 10px;
  background-color: white;
  color: black;
  margin-left: -20px;
  text-align: center;
  line-height: 23px;
}
.cercle2 {
  margin-top: 15px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 10px;
  background-color: white;
  color: black;
  margin-left: 3px;
  text-align: center;
  line-height: 23px;
}

.text-position {
  line-height: 25px;
  margin-top: -22px;
  font-size: 14px;
  margin-left: 5px;
}
.mobile-view {
  max-width: 100%;
}
.font-20 {
  font-size: 20px;
}
.flou {
  color: #b6b2b2;
}
.text-small {
  font-size: 16px;
}
.r-img {
  border-radius: 5px;
  width: 100%;
}
@media only screen and (max-width: 768px) {
  .order-text {
    font-size: 12px;
  }
  .flou {
    font-size: 12px !important;
  }
  .text-small {
    font-size: 12px;
  }
}
@media only screen and (max-width: 1200px) {
  .desktop.parent {
    display: none;
  }
}
@media only screen and (max-width: 470px) {
  .h2 {
    font-size: 10px !important;
    margin-left: 12px;
  }
  .cercle2 {
    margin-left: -4px !important;
  }
}
@media only screen and (min-width: 1200px) {
  .mobile-view {
    display: none !important;
  }
}
</style>
