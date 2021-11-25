<template >
  <div>
    <navbar />
    <div class="content body">
      <h1 class="h1">Order Details</h1>

      <div class="card my-2 p-0">
        <div class="card-body row">
          <div class="col ">
            <span class="marge row">
              <span class="bold m"><h3>Order</h3></span>
              <span class="text-success order m"
                ><h3>#{{ orderDetails.orderId }}</h3></span
              >
            </span>
            <span class="flou marge1"
              ><h3 class="marge1">yaoundé, {{ moment(orderDetails.orderDate).format('YYYY-MM-DD HH:mm:ss') }}</h3></span
            >
          </div>
          <div class="col-4 p-0">
            <span class="bold row">
              <h3 class="margtotal">Total :{{ orderDetails.TotalPrice }} Fcfa</h3>
            </span>
          </div>
        </div>
      </div>

      <div class="card my-1 p-0">
        <div class="card-body row">
          <div class="col ">
            <span class="mr-2 row"
              ><fas-icon class="couleur search " :icon="['fas', 'cart-arrow-down']" /> Card</span>
            
            <div class="row"> <h3>sold by: </h3>
              <span class="" v-for="(item, index) in orderDetails.businessesName" :key="index">
                <h3>{{ item }},</h3></span
              >
          </div>
          </div>

              <div class="col-3 ">
                <button v-b-modal="'my-modal'" variant="ligth" class="border mx-4 button">
                  <span class="mr-3 row"
                    ><fas-icon class="couleur1 search margbtn " :icon="['fas', 'envelope']" />
                    <h3 class="couleur1 ecart pl-1">chat now</h3>
                  </span>
                </button>
                </div>
                <b-modal id="my-modal">
                  <div class="container">
                    <span class="mr-3 row" v-for="(item, index) in orderDetails.businessesName" :key="index"
                      ><fas-icon class="couleur search" :icon="['fas', 'envelope']" />
                      <h3>chat with {{ item }}</h3>
                    </span>
                    <!-- <span class="mr-3 row"
                      ><fas-icon
                        class="couleur search"
                        :icon="['fas', 'envelope']"
                      /> <h3>chat with danaz</h3>
                    </span> -->
                  </div>
                </b-modal>
              
            </div>
          
        
      </div>

      <div class="card my-1 cardborder">
        <div class="card-body">
          <div class="row container rowmobile">
            <b-avatar id="a1" class="avatar" text=" "></b-avatar>
            <b-progress id="p1" :value="value" :max="max" variant="success" class="mb-3 size"> </b-progress>

            <b-avatar id="a2" class="avatar" text=" "></b-avatar>
            <b-progress id="p2" :value="value" :max="max" variant="success" class="mb-3 size"></b-progress>

            <b-avatar id="a3" class="avatar" text=" "></b-avatar>
            <b-progress id="p3" :value="value" :max="max" variant="success " class="mb-3 size"></b-progress>

            <b-avatar id="a4" class="avatar" text=" "></b-avatar>
            <b-progress id="p4" :value="value" :max="max" variant="success" class="mb-3 size"></b-progress>
          </div>
          <div class="row sizestate">
            <div class="col-3"><h3 >payment made</h3></div>
            <div class="col-2 text-start p-0"><h3>processing</h3></div>
            <div class="col-2 text-start"><h3>complete</h3></div>
            <div class="col-2 text-center"><h3>receive</h3></div>
          </div>

          <div class="justify-content row my-5" v-for="(item, index) in orderDetails.orderItems" :key="index">
            <div class="col-11 col-lg-4 margimg">
              <splide :options="{ rewind: true }" class="r-img">
                <splide-slide cl>
                  <img :src="item.product_picture" class="r-img" />
                </splide-slide>
              </splide>
            </div>
            <div class="ligne"><br /></div>
            <div class="col-6 col-lg-4  margtext">
              <div class="row ">
                <div class="col-5 bold">
                  <h3 class="h3 margm2">Name:</h3>
                </div>
                <div class="col">
                  <h3>{{ item.product_name }}</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-5 bold"><h3 class="h3 margm2">product ID :</h3></div>
                <div class="col">
                  <h3>#{{ item.product_id }}</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-5 bold"><h3 class="h3 margm2">Quantity:</h3></div>
                <div class="col">
                  <h3>{{ item.quantity }}</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-5 bold"><h3 class="h3 margm2">price :</h3></div>
                <div class="col">
                  <h3>{{ item.price }} XAF</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-5 bold"><h3 class="h3 margm2">shipping cost:</h3></div>
                <div class="col">
                  <h3>{{ item.shipping_amount }} XAF</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-5 bold"><h3 class="h3 margm2">total cost :</h3></div>
                <div class="col">
                  <h3>
                    {{ parseInt(item.sub_total) + parseInt(item.tax_amount) + parseInt(item.shipping_amount) }} Fcfa
                  </h3>
                </div>
              </div>
            </div>

            <div class="col col-lg margtext ">
              <h3 class="bold1">status</h3>
              <h3 class="text-success">{{ item.status }}</h3>
            </div>

            <div class="col-3 col-lg margtext ">
              <h3 class="text-success">WRITE A REVIEW</h3>
            </div>

            <!-- <div class="justify-content-center container row">
              <br />
            </div>

            <div class="justify-content-center container row">
              <br />
            </div> -->
          </div>
          <div v-if="show" class="text-center">
            <b-spinner label="Spinning"></b-spinner>
          </div>
          <b-pagination
            pills
            v-model="currentPage"
            :total-rows="total"
            :per-page="per_page"
            aria-controls="my-table"
            @change="changePage"
            align="center"
          ></b-pagination>
        </div>
      </div>

      <div class="row my-1">
        <div class="col-12 col-lg-6">
          <div class="card shipad">
            <div class="card-body " v-if="orderDetails.shippingAdress">
              <div class="row bold text-center"><h3 class="text-center">shipping Adress</h3></div>
              <br />

              <div class="row">
                <div class="col-3 bold"><h3>city</h3></div>
                <div class="col">{{ orderDetails.shippingAdress.city }}</div>
              </div>
              <div class="row">
                <div class="col-3 bold"><h3>name</h3></div>
                <div class="col">{{ orderDetails.shippingAdress.name }}</div>
              </div>
              <div class="row">
                <div class="col-3 bold"><h3>phone</h3></div>
                <div class="col">{{ orderDetails.shippingAdress.phone }}</div>
              </div>
              <div class="row">
                <div class="col-3 bold"><h3>email</h3></div>
                <div class="col">{{ orderDetails.shippingAdress.email }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="ligne"></div>

        <div class="col-12 col-lg-6">
          <div class="card shipad my-1">
            <div class="card-body">
              <div class="col bold">
                <span class="row">
                  <span class="col"><h3>Total summary :</h3></span>
                  <span class="col">10000 Fcfa</span></span
                >
                <span class="row">
                  <span class="col"><h3>Total price :</h3></span>
                  <span class="col">{{ orderDetails.TotalPrice }} XAF</span></span
                >
                <span class="row">
                  <span class="col"><h3>total shipping fee :</h3></span
                  ><span class="col">
                    {{ parseInt(orderDetails.Total) - parseInt(orderDetails.TotalPrice) }} XAF</span
                  ></span
                >
              </div>
              <div class="row"><hr class="hr" /></div>

              <div class="row bold">
                <span class="col"><h3>Total :</h3></span>
                <span class="col"> {{ orderDetails.TotalPrice }} XAF</span>
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
import navbar from '@/components/navbar.vue';
import moment from 'moment';
export default {
  components: { navbar },
  data() {
    return {
      moment: moment,
      show: true,
      currentPage: 1,
      per_page: 5,
      total: 10,
      value: 0,
      max: 50,
      img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300'],
      status: 1,
    };
  },

  mounted() {
   
    this.getProfileOrderDetails();
  
  },

  computed: {
    orderDetails() {
      return this.$store.getters['profileOrderDetail/getOrderDetails'];
    },
    getTotal() {
      return this.$store.getters['profileOrderDetail/getTotal'];
    },

    getStatus(){
        return this.$store.getters['profileOrderDetail/getStatus'];
    }
  },
  methods: {

    transition(){console.log("transition");
        const progress = document.querySelectorAll('.size');
    console.log(progress);
    for (let i = 1; i <= progress.length; i++) {
      let a = document.getElementById('a' + i);
      let p = document.getElementById('p' + i);
      if (i <= this.status) {
        p.classList.add('bg-success');
        a.classList.add('bg-success');
        console.log(p);
      } else {
        p.classList.add('bg-secondary');
        a.classList.add('bg-secondary');
        console.log(p);
      }
    }
    },
    getProfileOrderDetails() {
      let orderId = 23;

      this.$store.dispatch('profileOrderDetail/getOrderDetails', orderId).then((response) => {
        console.log(response);
        this.show = false;
        this.status = this.getStatus
         this.transition();
      });
    },

   
        
       

    changePage(value) {
      this.show = true;

      this.currentPage = value;

      let data = {
        orderId: 23,
        page: this.currentPage,
      };
      this.$store
        .dispatch('profileOrderDetail/nextPage', data)
        .then((res) => {
          console.log('products total: ');

          this.total = this.getTotal;
          console.log(this.total);
          this.show = false;
          this.status = this.getStatus;
          this.transition();
        })
        .catch((err) => {
          // this.prodLoader = false; business_owner/ordersdetail
          console.log('products error: ');
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.ecart {
  margin-left: 2px;
}

.hr {
  height: 0.1px;
  width: 500px;
  background-color: rgb(243, 232, 232);
}
.border {
  background-color: #e75c18;
}
.couleur {
  color: #e75c18;
}
.card {
  margin-left: 10px;
}

.couleur1 {
  color: white;
}

/* style de la navigation  */

.made {
  margin-top: 10px;
}

/* style de l'affichage des produits */

/* style pour le desktop (-------------------) */
@media only screen and (min-width: 769px) {
  .body {
    background-color: rgba(213, 214, 214, 0.473);
  }

  .content {
    width: 80%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    margin-right: auto;
    margin-left: auto;
  }
  .rowmobile {
    margin-left: 50px;
  }
  .avatar {
    width: 15px;
    height: 15px;
  }
  .progress {
    width: 200px;
  }

.marge {
  margin-right: 380px;
}
.marge1 {
  margin-right: 300px;
}
.size {
  height: 5px;
  margin-top: 5px;
  margin-left: -3px;
  margin-right: -3px;
  width: 190px !important;
}
  .margtotal {
    margin-left: 50px;
  }
  .margbtn {
    margin-left: 22px;
  }
  .button {
    /* text-align: center; */
    width: 120px;
    height: 40px;
    border-radius: 5px;
    padding-left: 20px;
    line-height: 10px;
  }
  .couleur1 {
    font-size: 12px;
  }
  .r-img {
    border-radius: 5px;
    height: 150px;
    width: 230px;
  }
  .bold h3 {
    font-weight: bold !important;
  }
  .bold1 {
    font-weight: bold;
  }
  h3 {
    font-size: 14px;
    /* font-weight: bold; */
  }
  /* 
.margm2 {
  margin-left: 70px;
  margin-right: -20px;
  font-weight: bold;
} */

  .m {
    margin-left: 10px;
  }
}

/* style de l'afichage mobile */

@media only screen and (max-width: 768px) {
  /* .marge {
  margin-right: 380px;
}*/
  .cardborder {
    border: none;
  }

  .bold h3 {
    font-weight: bold !important;
  }

.margtext .text-success{
  font-size: 10px !important;
 
}
.margtext h3{
  margin-left: -16px;
  margin-right: -20px;
}
.margtext .text-success{
  font-size: 9px !important;
  
}
.avatar{
width: 8px;
height: 8px;
}
.marge1 {
  /* margin-right: 300px; */
  font-size: 10px !important;
  margin-left: -15px;
} 

.ligne{
  width: 100%;
}
  .progress {
    width: 200px;
  }
  .size {
    height: 3px;
    margin-top: 3px;
    margin-left: -3px;
    margin-right: -3px;
    width: 67px;
  }

  h3 {
    font-size: 12px;
    /* font-weight: bold; */
  }
  .margimg {
    margin-left: -15px;
  }

  .couleur1 {
    font-size: 10px;
  }
  .button {
    /* text-align: center; */
    width: 100px;
    height: 30px;
    border-radius: 5px;
    padding-left: 22px;
    padding-top: 10px;
  }
  .margbtn {
    margin-left: 13px;
  }
  /* .margm2 {
  margin-left: 11px;
  margin-right: -20px;
  font-weight: bold;
} */
  .r-img {
    border-radius: 4px;
    height: 150px;
    width: 340px;
  }

  .margtotal {
    margin-left: 20px;
  }
  .rowmobile {
    margin-left: -0.1px !important;
  }

  .sizestate h3 {
    font-size: 8px;
    margin-left: -18px;
    margin-top: -10px;
  }
  .sizestate {
    margin-left: 20px;
  }

  .shipad {
    /* width: 325px !important; */
  }
  h1 {
    font-size: 16px;
  }
}

@media only screen and (min-width: 360px) {
  .size {
    /* height: 3px;
  margin-top: 3px;
  margin-left: -3px;
  margin-right: -3px; 
   width: 65px; */
  }
}
</style>