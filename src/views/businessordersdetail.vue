<template>
  <div class="bg-white" style=" color: #455a64 ; font-family:poppins"> 
     <div class="row my-4" v-if="loading">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <b-spinner
             variant="primary"
              style="width: 3rem; height: 3rem;"
              label="Loading"
            ></b-spinner>
          </div>
      </div> 

    <div v-else  class="container body p-0">
      
       <div class="card box-shadow my-3">
            <div class="d-flex justify-content-between top p-3">
              <span class="text-small font-weight-bold mt-2">
                <p class="mb-0">
                  Order#<span class="text-success">{{ orderDetails.orderId }}</span>
                </p>
                <p class="text-grey font-weight-normal">
                  {{ orderDetails.shippingAdress.city }}
                  {{ moment(orderDetails.created_at).format("MM/DD/YYYY") }}
                </p>
              </span>
              <span class="text-small font-weight-bold mt-2">
                Total {{ orderDetails.Total }} FCFA
              </span>
            </div>
          </div> 






        <div class=" border-0">
            <div class="d-flex justify-content-between top p-3">
             
              <span class="text-small font-weight-bold mt-2">
               
                <p class="mb-0">
                   Buyer Info: <router-link :to="'profile/'+orderDetails.user_details.slug"> <span>{{ orderDetails.user_details.name }}</span>  </router-link> 
                </p>
              </span>
              <!-- <b-button variant="primary">
                <i class="fas fa-envelope"></i> Chat Now
              </b-button> -->
             <div class="mt-1">
            <BtnCtaMessage :element="orderDetails.user_details"  type="people" />
          </div>  <!-- <span class="text-small font-weight-bold mt-2">
                Total {{ details.Total }} FCFA
              </span> -->
            </div>
          </div>



       <div class="card my-3 p-2">
            <div  v-for="order in orderDetails.orderItems" :key="order.id">
              <div class="row d-flex justify-content-between px-3 mb-3">
                <span class="flou align-self-center ">
                  {{ order.user_name }}
                  {{ moment(order.created_at).format("MM/DD/YYYY h:m:s") }}
                </span>
                <div class="d-block d-lg-none align-self-center text-small">
                  <span
                    >Status:
                    <span class="text-success">{{ order.status }}</span></span
                  >
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
                    Fcfa
                  </h3>
                </div>
                <div class="col-lg-3 d-none d-lg-block m-auto">
                  <h3 class="font-weight-bold text-small text-capitalize">
                    {{ $t("myOrders.status") }}
                  </h3>
                  <h3
                    class="text-success font-weight-normal text-small text-capitalize"
                  >
                    {{ order.status }} 
                  </h3>
                </div>
              </div>
              <hr />
            </div>
            <div class="d-flex justify-content-center">
              <b-pagination
                v-model="currentPage"
                pills
                :per-page="perPage"
                :total-rows="totalItems"
                @change="handlePage"
              ></b-pagination>
            </div>
          </div>




      <div class="row my-1 ">
        <div class="col-md-6">
          <div class="card shipad h-100">
            <div class="card-body ">
              <div class="row font-weight-bold text-center"><h6>shipping Adress</h6></div>
              <br />
              <div class="row">
                <div class="col-3 font-weight-bold"><p class="mb-0">city</p></div>
                <div class="col">{{ orderDetails.shippingAdress.city }}</div>
              </div>
              <div class="row">
                <div class="col-3 font-weight-bold"><p class="mb-0">name</p></div>
                <div class="col">{{ orderDetails.shippingAdress.name }}</div>
              </div>
              <div class="row">
                <div class="col-3 font-weight-bold"><p class="mb-0">phone</p></div>
                <div class="col">{{ orderDetails.shippingAdress.phone }}</div>
              </div>
              <div class="row">
                <div class="col-3 font-weight-bold"><p class="mb-0">email</p></div>
                <div class="col">{{ orderDetails.shippingAdress.email }}</div>
              </div>
            </div>
          </div>
        </div>


        <div class="col-6">
          <div class="card shipad h-100 ">
            <div class="card-body mt-3">
              
              <div class="col ">
                <span class="row">
                  <span class="col font-weight-bold"><p class="mb-0">Total summary </p></span>
                 </span
                >
                <span class="row">
                  <span class="col font-weight-bold"><p class="mb-0">Total price :</p></span>
                  <span class="col">{{ orderDetails.Totalprice }} Fcfa</span></span
                >
                <span class="row">
                  <span class="col font-weight-bold"><p class="mb-0">total shipping fee :</p></span
                  ><span class="col">
                     {{ orderDetails.TotalShippingFee }}
                    Fcfa</span
                  ></span
                >
              </div>
              <hr>
              <div class="row ">
                <span class="col font-weight-bold"><p class="mb-0">Total :</p></span>
                <span class="col"> {{ orderDetails.Total }} Fcfa</span>
              </div>
      
            </div>
          </div>
        </div>


        
      </div>

      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>

import moment from "moment";
export default {

  data() {
    return {
      moment: moment,
      show: true,
      currentPage: 1,
      per_page: 5,
      total: 10,
      value: 0,
      max: 50,
      img: ["http://urlr.me/YMQXD", "https://placekitten.com/400/300"],
      status: 2,
    };
  },


   props: ["loading"],

  mounted() {
   // this.getBusinessOrderDetails();
  },

  computed: {
    orderDetails() {
      return this.$store.getters["businessOrderDetails/getOrderDetails"];
    },
    getTotal() {
      return this.$store.getters["businessOrderDetails/getTotal"];
    },

    getStatus() {
      return this.$store.getters["profileOrderDetail/getStatus"];
    },
  },

  methods: {
    transition() {
      console.log("transition");
      const progress = document.querySelectorAll(".size");
      console.log(progress);
      for (let i = 1; i <= progress.length; i++) {
        let a = document.getElementById("a" + i);
        let p = document.getElementById("p" + i);
        if (i <= this.status) {
          p.classList.add("bg-success");
          a.classList.add("bg-success");
          console.log(p);
        } else {
          p.classList.add("bg-secondary");
          a.classList.add("bg-secondary");
          console.log(p);
        }
      }
    },

    getBusinessOrderDetails() {
      let url = window.location.href.split("/");

      let data = {
        orderId: 23,
        businessId: url[url.length - 1],
      };
      this.$store
        .dispatch("businessOrderDetails/getOrderDetails", data)
        .then((response) => {
          console.log(response);
          this.show = false;
          this.status = this.getStatus;
          this.transition();
        });
    },

    changePage(value) {
      this.show = true;

      this.currentPage = value;
      let url = window.location.href.split("/");
      let data = {
        orderId: 23,
        businessId: url[url.length - 1],
        page: this.currentPage,
      };
      this.$store
        .dispatch("businessOrderDetails/nextPage", data)
        .then((res) => {
          console.log("products total: ");
          // console.log(this.products);
          // this.prodLoader = false;
          this.total = this.getTotal;
          console.log(this.total);
          this.show = false;
          this.status = this.getStatus;
          this.transition();
        })
        .catch((err) => {
          // this.prodLoader = false; business_owner/ordersdetail
          console.log("products error: ");
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
  
  
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
