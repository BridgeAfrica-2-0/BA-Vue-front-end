<template>
  <div class="container">
    <hr />  
    <!-- partie mobile--------------------------------------------------------------------- 
    
    ----------------------DEBUT -----------------------------------------------------
    -->  
   
    <div id="hidemobile">
      <div
        class="justify-content-between d-flex row cd B"
        style="margin-left: 7px"
      >
        <div
          id="m1"
          class="mobile green t col transition pl-4"
          @click="changeElementType(1)"
        >
          <div class="cercle1">1</div>
          <h2 class="h2 text-position">{{ $t("businessowner.All") }}</h2>  
        </div>

        <div
          id="m2"
          class="mobile1 col t start-50"
          @click="changeElementType(2)"
        >
          <div class="cercle2">2</div>

          <h2 class="h2 text-position text-center">
            {{ $t("businessowner.In_Process") }}
          </h2>
        </div>

        <div
          id="m3"
          class="mobile3 col t start-50"
          @click="changeElementType(3)"
        >
          <div class="cercle2">3</div>

          <h2 class="h2 text-position text-center">
            {{ $t("businessowner.Reshedule") }}
          </h2>
        </div>
        <div id="m4" class="mobile2 col t" @click="changeElementType(4)">
          <div class="cercle2">4</div>
          <h2 class="h2 text-position text-center">
            {{ $t("businessowner.Shipped") }}
          </h2>
        </div>
      </div>

      <div class="justify-content-between container row my-4">
        <div class="col order">
          <h3 class="margclear1 bold1">{{ $t("businessowner.My_orders") }}</h3>
        </div>
        <div class="col">
          <h3 class="text-danger text-center margclear">
            {{ $t("businessowner.clear_history") }}
          </h3>
        </div>
      </div>
      <hr />

      <div>
        <div class="inprogress">
          <div class="show row">
            <div class="col-3">{{ $t("businessowner.Show") }}:</div>
            <div class="col">
              <b-form-select
                v-model="selected"
                :options="options"
              ></b-form-select>
            </div>
          </div>
          <div v-for="(item, index) in orders.data" :key="index">
            <div class="justify-content-start container row marghr">
              <div class="justify-content-start container">
                <div class="container d-flex justify-content-end btn-marg">
                  <div class="manage">
                    <b-dropdown
                      variant="ligth"
                      id="dropdown-1"
                      text="Manage"
                      class="m-md-2"
                    >
                      <b-dropdown-item @click="updateStatus(item.oderId, 'archive')">{{
                        $t("businessowner.Archive")
                      }}</b-dropdown-item>
                      <b-dropdown-item @click="updateStatus(item.oderId, 'cancel')">{{
                        $t("businessowner.Delete")
                      }}</b-dropdown-item>

                      <b-dropdown-item @click="updateStatus(item.oderId, 'shipped')" >{{ 
                        $t("businessowner.shipped")
                      }}</b-dropdown-item>
                      <b-dropdown-item @click="updateStatus(item.oderId, 're-shedule')">{{
                        $t("businessowner.Reshedule")
                      }}</b-dropdown-item>
                    </b-dropdown>
                  </div>
                </div>
                <div role="button" @click="getBusinessOrderDetails(item.oderId)"> 

                <span class="gras">{{ $t("businessowner.Order") }}</span>
                <span class="text-success order">#{{ item.oderId }}</span>
                </div>
                <br />
                <span class="flou">
                  {{ moment(item.dateCreated).format("DD/MM/YYYY HH:mm") }}
                </span>
              </div>

              <span class="row posstatus">
                <p class="h3 statusp">{{ $t("businessowner.Status") }}:</p> 
                <h3 class="text-success h3 margstatus">{{ item.status }}</h3>
              </span>
            </div>
            <hr />

            <div class="justify-content-center row">
              <div class="col-4 margimg">
                <splide :options="{ rewind: true }" class="r-img1">
                  <splide-slide
                    cl
                    v-for="(im, index) in item.productImg"
                    :key="index"
                  >
                    <img :src="item.productImg[index]" class="r-img1" />
                  </splide-slide>
                </splide>
              </div>

              <div class="col-4 text-end m-auto">
                <h3 class="h3 margm2">
                  {{ $t("businessowner.Product_Qte") }} :
                </h3>
                <h3 class="h3 margm2">{{ $t("businessowner.Price") }}:</h3>

                <h3 class="h3 margm2">
                  {{$t("myOrders.shipping_cost")}}:
                </h3>
                <h3 class="h3 margm2">{{ $t("businessowner.Total") }} :</h3>
              </div>

              <div class="col-4 m-auto">
                <h3 class="h3">{{ item.totalProduct }}</h3> 

                <h3 class="h3">{{ item.Totalprice }} XAF</h3>
                <h3 class="h3">{{ item.shippingCost }} XAF</h3>
                <h3 class="h3">{{ item.total }} XAF</h3>
              </div>
            </div>

            <div class="justify-content-center container row">
              <br />
            </div>

            <div class="justify-content-center container row">
              <div class=""> 
               <button
                  @click="updateStatus(9, 'shipped')"
                  class="buttonm btn shadow text-center"
                >
                  <h3 class="h3 button-text">
                    {{ $t("businessowner.shipped") }}
                  </h3>
                </button> 
              </div>
            </div>
            <div class="justify-content-center container row">
              <br />
              <br />
            </div>
            <!-- <hr /> -->
          </div>
          <div class="overflow-auto">
          
            
          <div class="text-center d-flex">    
         <b-pagination
                v-if="next || prev "
                v-model="currentPage"
                pills
                class="m-auto"
                :per-page="perPage"
                :total-rows="totalItems"
                @change="handlePage"
              ></b-pagination>
            </div> 
        
          </div>
        </div>











      </div>
    </div>
    <div class="justify-content-between row"></div>
    <!-- FIN DE LA PARTIE MOBILE -------------------------------------------------------------------------->

    <!-- <div class="container d-flex justify-content-end">clear history</div> -->
    <!--  partie desktop---------------------------------------------------------------------------------------- -->
 
    <div class="hidedesktop" id="hidedesktop">
      <!-- navigation--------------- -->
      <div class="row parent">
        <b-avatar id="a1" class="avatar bg-success" text="1"></b-avatar>
        <h2 class="text cursor" @click="changeElementType(1)">
          {{ $t("businessowner.All") }}
        </h2>
        <div
          id="p1"
          class="progress prog cursor gris bg-success"
          @click="changeElementType(1)"
        >
          <div
            class="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <b-avatar id="a2" class="avatar" text="2"></b-avatar>
        <h2 class="text cursor" @click="changeElementType(2)">
          {{ $t("businessowner.In_Process") }}
        </h2>
        <div
          id="p2"
          class="progress prog cursor gris"
          @click="changeElementType(2)"
        >
          <div
            class="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <b-avatar id="a3" class="avatar" text="3"></b-avatar>
        <h2 class="text cursor" @click="changeElementType(3)">
          {{ $t("businessowner.Re_shedule") }}
        </h2>
        <div
          id="p3"
          class="progress prog cursor gris"
          @click="changeElementType(3)"
        >
          <div
            class="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <b-avatar id="a4" class="avatar" text="4"></b-avatar>
        <h2 class="text cursor" @click="changeElementType(4)">
          {{ $t("businessowner.Shipped") }}
        </h2>
        <div
          id="p4"
          class="progress prog cursor gris"
          @click="changeElementType(4)"
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

      <div class="justify-content-between container row my-4">
        <div class="col order">
          <h3 class="bold1">{{ $t("businessowner.My_orders") }}</h3>
        </div>
        <div class="status">
          <h3 class="text-danger">{{ $t("businessowner.clear_history") }}</h3>
        </div>
      </div>

      <div>
        <div  class="inprogress">
          <div class="show row">
            <div class="col-3">{{ $t("businessowner.Show") }}:</div>
            <div class="col">
              <b-form-select
                v-model="selected"
                :options="options"
                @change="getOrder(status)"
              ></b-form-select>
            </div>
          </div>
          <div v-for="item in orders.data" :key="item.oderId">
            <div class="justify-content-start container">
              <div class="container d-flex justify-content-end btn-marg">
                <div class="manage">
                  <b-dropdown
                    variant="ligth"
                    id="dropdown-1"
                    text="Manage"
                    class="m-md-2"
                  >
                    <b-dropdown-item @click="updateStatus(item.oderId, 'archive')">{{
                      $t("businessowner.Archive")
                    }}</b-dropdown-item>   
                    <b-dropdown-item @click="updateStatus(item.oderId, 'cancel')">{{
                      $t("businessowner.Delete")
                    }}</b-dropdown-item>
                    <b-dropdown-item  @click="updateStatus(item.oderId, 'shipped')">{{
                      $t("businessowner.shipped")
                    }}</b-dropdown-item>
                    <b-dropdown-item @click="updateStatus(item.oderId, 're-shedule')">{{
                      $t("businessowner.Reshedule")
                    }}</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
             <div role="button" @click="getBusinessOrderDetails(item.oderId)"> 
              <span class="gras">{{ $t("businessowner.Order") }}</span>
              <span class="text-success">#{{ item.oderId }}</span> </div> <br />

              <span class="flou">{{
                moment(item.dateCreated).format("DD/MM/YYYY HH:mm")
              }}</span>

              <hr />
            </div>

            <div class="justify-content-between row">
              <div class="col-3">
                <splide :options="{ rewind: true }" class="r-img">
                  <splide-slide
                    cl
                    v-for="(im, index) in item.productImg"
                    :key="index"
                  >
                    <img :src="item.productImg[index]" class="r-img" />
                  </splide-slide>
                </splide>
              </div>

              <div class="col-2 text-end text-start bold m-auto">
                <h3>{{ $t("businessowner.Product_Qte") }} :</h3>
                <h3>{{ $t("businessowner.Price") }} :</h3>

                <h3>{{$t("myOrders.shipping_cost")}}:</h3>   
                <h3>{{ $t("businessowner.Total") }} :</h3>
              </div>

              <div class="col-3 text-start m-auto">
                <h3>{{ item.totalProduct }}</h3>
                <h3>{{ item.Totalprice }} XAF</h3>
                <h3>{{ item.shippingCost }} XAF</h3>
                <h3>{{ item.total }} XAF</h3>
              </div>

              <div class="col-2 m-auto" id="hidedesktop1">
                <h3 class="bold1">{{ $t("businessowner.status") }}</h3>
                <h3 class="text-success">{{ item.status }}</h3>
              </div>

              <div class="col-2 m-auto justify-content-end btn-marg">
                 <button
                  @click="updateStatus(9, 'shipped')"
                  class="button btn shadow"
                >
                  <h3 class="h3 button-text">
                    {{ $t("businessowner.Shipped") }}
                  </h3>
                </button> 
              </div>

              <div class="justify-content-center container row">
                <br />
              </div>

              <div class="justify-content-center container row">
                <br />
              </div>
            </div>
          </div>

          <div class="overflow-auto">
          
              
            <div class="text-center d-flex">  
              <b-pagination
              class="m-auto"
                v-if="next || prev "
                v-model="currentPage"
                pills
                :per-page="perPage"
                :total-rows="totalItems"
                @change="handlePage"
              ></b-pagination>
            </div>
           
          </div>
        </div> </div>
    </div>
   

  <b-modal hide-footer id="bizproductdetails"  size="xl"   ref="bizproductdetails" title="Order Details">
   <div> 

 <businessordersdetail  ref="businessproductdetails"  orderdetails="orderDetails" :loading="isloading" />
     </div>
  </b-modal>

  </div>
</template>

<script>
import moment from "moment";
import businessordersdetail from '@/views/businessordersdetail'
import Orders from "@/views/businessOwnerOrders";
import axios from "axios";
export default {
  data() {
    return {
      orderdetails:{},
      isloading:false,
      moment: moment,
      rows: 0,
      currentPage: 0,
      perPage: 10,
      orders:[],
      row:'',
      prev:'',
      totalItems:0,
      selected: null,
      rimg: "",
      url: null,
      status:'',
      etat: "All",

      options: [
        { value: null, text: this.$t('general.Please_select_an_option') },
        { value: "5", text: "last 5 days" },
        { value: "10", text: "last 10 days" },
      ],
      etat1: ["in process", "complete", "cancel"],
    };
  },

  components:{
    businessordersdetail
  },

  mounted() { 
    console.log('mounted business orders compoments');
    this.url = this.$route.params.id;
   
    this.getOrder('');
  },

  methods: {

     //order details functionalities

      getBusinessOrderDetails(orderId) {
  
      console.log(orderId);
     this.$bvModal.show("bizproductdetails")
     this.isloading = true;
      let data = {
        orderId: orderId,
        businessSlug:this.url,
      };
      this.$store 
        .dispatch("businessOrderDetails/getOrderDetails", data)
        .then((response) => {
          
        
         this.isloading=false;
        
          //this.status = this.getStatus;
          this.$refs.businessproductdetails.transition();
        });
    },


   


    changeElementType(p) {
      console.log("------------------" + p);
      this.status = p;
      this.currentPage=1;
      if (p == 1) {
        this.etat = "All";
        
        this.getOrder('');

        this.currentPage = 1;
      } else if (p == 2) {
        this.etat = "In process";
        this.getOrder('pending');
       
        this.currentPage = 1;
      } else if (p == 3) {
        this.getOrder('Re-shedule');
        this.etat = "Re-shedule";
      
        this.currentPage = 1;
      } else if (p == 4) {
        this.getOrder('Shipped');
        this.etat = "Shipped";
       
        this.currentPage = 1;
      }
      //transition partie desktop
      const a = document.getElementById("a" + p);
      const pr = document.getElementById("p" + p);

      const as = document.querySelectorAll(".avatar");
      as.forEach((dat) => {
        dat.classList.remove("bg-success");
      });
      a.classList.add("bg-success");

      const ps = document.querySelectorAll(".progress");
      ps.forEach((dat) => {
        dat.classList.remove("bg-success");
      });
      pr.classList.add("bg-success");

      //transition partie mobile

      const el = document.getElementById("m" + p);
      const els = document.querySelectorAll(".t");
      els.forEach((dat) => {
        dat.classList.remove("green");
      });
      el.classList.add("green");
    },

    getpage() {
      let start = this.getCurrentpage * this.perPage;
      console.log(this.getCurrentpage);
    },
    
  handlePage(value) {
      this.currentPage = value;
      this.getOrder(this.status);
    },

   async getOrder(status) {

     
      this.status=status;
      let biz_id = this.$route.params.id;

      await axios
        .post(`order/Business/list?slug=${biz_id}&status=${status}&period=${this.selected}&page=${this.currentPage}`)
        .then((res) => {
          console.log("hey yeah orders");
          console.log(res); 
          
          this.totalItems = res.data.total;
          this.perPage = res.data.per_page;
          this.orders=res.data;
          this.next = res.data.next;
          this.prev = res.data.previous;


        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    updateStatus(order_id, status) {
        console.log(order_id+status);
      let formData = new FormData();
      formData.append("OrderId", order_id);
      formData.append("slug", this.url);
      formData.append("status", status);
      this.$store
        .dispatch("orderBusiness/updateOrderStatus", {
          path: "order/updateOrderBusiness", 
          formData: formData,
        })
        .then(({ data }) => {
        
        this.getOrder(this.status);

          this.flashMessage.show({
            status: "success",
            message: "Status Changed To " + status,
          });
        })
        .catch((err) => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "Unable to Change Status",
          });
        });
    },
  },

  computed: {
    getCurrentpage() {
      return this.currentPage;
    },

 orderDetails() {
      return this.$store.getters["businessOrderDetails/getOrderDetails"];
    },

    // orders() {
      
    //   return this.$store.state.orderBusiness.orders;
       
    // },


    
    

  },
};
</script>

<style scoped>
/* style for desktop------------------------- */
.flou {
  color: #b6b2b2;
}
.show {
  margin-left: 2px;
  margin-bottom: 70px;
  width: 370px;
}
.manage {
  margin-bottom: -60px;
  height: 50px;
  width: 90px;
}
.avatar {
  margin-top: 23px;
  margin-right: 10px;
}
.text {
  margin-right: 50px;
  margin-top: 35px;
}
.prog {
  height: 10px;
  margin-left: 20px;
  margin-right: 10px !important;
  width: 130px !important;
}
.parent {
  margin-left: 10px;
}
.margd1 {
  margin-left: 50px;
}
.margd2 {
  margin-right: 50px;
}
.btn-marg {
  margin-top: -30px;
}
.r-img {
  border-radius: 5px;
  height: 150px;
  width: 250px;
}
.button-text {
  color: white;
}
.button {
  width: 120px;
  height: 30px;
  background-color: #e75c18;
}
.btn-margd {
  margin-top: 60px;
}
h1 {
  font-size: 20px;
  font-weight: bold;
}
h2 {
  font-size: 16px;
  /* font-weight: bold; */
}

h3 {
  font-size: 14px;
  /* font-weight: bold; */
}
.bold h3 {
  font-weight: bold !important;
}
.gras {
  font-weight: bold;
}
/* end style for desktop ----------------------------- */

/*  start style mobile------------------------- */
.r-img1 {
  border-radius: 4px;
  object-fit: cover;
  width: 125px;
  max-height: 200px;
}

.r-img{
    border-radius: 5px;
    height: 200px;
    width: 200px;
    object-fit: cover;
}

.margm {
  margin-left: 30px;
  margin-right: 10px;
}
.margm1 {
  margin-right: 80px;
}
.margm2 {
  margin-left: 11px;
  margin-right: -20px;
  font-weight: bold;
}
.margimg {
  margin-left: -15px;
}
.margstatus {
  margin-left: 10px;
}
.button-text {
  color: white;
}
.buttonm {
  width: 150px;
  height: 25px;
  background-color: #e75c18;
}
.h3 {
  font-size: 12px;
}
.margclear {
  margin-left: 40px;
  margin-top: 30px;
  margin-bottom: -20px;
}
.margclear1 {
  margin-top: 30px;
  margin-bottom: -20px;
}
.posstatus {
  margin-left: 195px;
  margin-top: -18px;
}

/*  end style mobile------------------------- */
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
  /* margin-right: -20px; */
  margin-left: 3px;
  text-align: center;
  line-height: 23px;
}
.bar {
  background-color: #28a745;
  width: 200px;
  margin-right: -5px;
  margin-left: 17px;
}

.margt {
  margin-left: -40px;
}
.pos {
  margin-top: 25px;
  margin-left: 47px;
  color: black;
}
.pos1 {
  margin-top: 27px;
  margin-left: -15px;
  margin-right: 15px;
}
.pos2 {
  margin-top: 35px;
  margin-left: -20px;
}
.gris {
  background-color: #6c757d;
}
.gris1 {
  background-color: #c5c5c5;
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
  width: 201px;
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
.green {
  background-color: #28a745;
}
.text-position {
  line-height: 25px;
  margin-top: -22px;
  font-size: 14px;
  margin-left: 5px;
}
/* .button-text{
    color:white;
}
.button{
  width: 146px;
  height: 30px;
  background-color:#e75c18 ;
  
} */
.marg {
  margin-right: -150px;
  margin-top: 25px;
}
.marg4 {
  margin-right: -50px;
  margin-top: 25px;
}
.marg3 {
  margin-right: -40px;
}
.line {
  border-bottom: solid 10px;
  border-color: rgb(128, 118, 110);
  width: 160px;

  /* border-radius: 8%; */
  line-height: 50px;
  margin-right: 50px;
  margin-left: -30px;
  margin-bottom: 20px;
}
.progress {
  width: 160px;

  /* border-radius: 8%; */
  line-height: 50px;
  margin-right: 50px;
  margin-left: -30px;
  margin-top: 40px;
}
.line-actif {
  border-color: #28a745;
  color: #28a745;
}

.cercle {
  /* border:  5px rgb(128, 118, 110); */
  border-radius: 100%;
  width: 50px;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  line-height: 55px;
  color: white;
  background-color: #6c757d;
  margin-top: 20px;
}
.cercle-actif {
  border-color: #28a745;
  color: white;
  background-color: #28a745;
}
.cursor {
  cursor: pointer;
}
.etat {
  /* margin-right: 13px; */
  margin-left: -50px;
}

.Re-order {
  width: 123px;
  height: 38px;
}
/* style du desktop --------------------------- */

.total {
  margin-left: 50px;
}
.size {
  font-size: 16px;
}
/* styledu mobile---------------------------- */
.h11 {
  font-size: 16px;
}
.h22 {
  font-size: 14px;
}

.bold1 {
  font-weight: bold;
}
/* .hidedesktop{
    visibility: hidden;
  } */
@media only screen and (max-width: 1200px) {
  .bold h3 {
    font-weight: normal !important;
  }
  .cercle2 {
    margin-left: 50px !important;
    width: 18px;
    height: 18px;
    line-height: 20px;
  }
  .cercle1 {
    width: 18px;
    height: 18px;
  }

  #hidedesktop {
    display: none;
  }
}
@media only screen and (max-width: 360px) {
  .margclear {
    font-size: 12px;
  }
}
@media only screen and (max-width: 768px) {
  .bold h3 {
    font-weight: normal !important;
  }
  .cercle2 {
    margin-left: 3px !important;
    width: 17px;
    height: 17px;
  }
  .gras {
    font-size: 12px !important;
  }
  .flou {
    font-size: 12px !important;
  }
  .order {
    font-size: 12px !important;
  }
  .statusp {
    margin-left: 16px;
  }
  .marghr {
    margin-bottom: -20px;
  }
  .manage {
    margin-top: -6px !important;
    margin-right: -12px !important;
  }
}
@media only screen and (max-width: 470px) {
  .h2 {
    font-size: 10px !important;
    margin-left: 5px;
  }
  .cercle2 {
    margin-left: -4px !important;
  }

  .manage {
    margin-top: -6px !important;
    margin-right: -12px !important;
  }
  #hidedesktop {
    display: none;
  }
}

@media only screen and (min-width: 1200px) {
  #hidemobile {
    display: none !important;
  }
}
</style>