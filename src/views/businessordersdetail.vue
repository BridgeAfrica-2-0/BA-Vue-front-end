<template>
  <div>
    <navbar />
    <div class="container body p-0">
      <h1 >Order Details</h1>

      <div class="card  my-2 shadow">
        <div class="card-body row">
          <div class="col">
            <span class="marge row">
              <span class="bold m "><h3>Order</h3></span>
              <span class="text-success order m"
                ><h3>#{{ orderDetails.orderId }}</h3></span
              >
            </span>
            <span class="flou marge1"
              ><h3 class="  marge1">{{ moment(orderDetails.orderDate).format("YYYY-MM-DD HH:mm:ss") }}</h3></span
            >
          </div>
          <div class="col ">
            <span class=" ">
              <h3 class="margtotal ">Total : {{ orderDetails.TotalPrice }} Fcfa</h3>
            </span>
          </div>
        </div>
      </div>

      <div class="card my-1 shadow">
        <div class="card-body row">
          <div class="col">
            <span class="mr-2 row "
              ><fas-icon class="couleur search card" :icon="['fas', 'cart-arrow-down']" /> Card</span
            >
            <span class="row">
              <span class="my-1 col">
                <h3>sold by: {{ orderDetails.businessesName[0] }}</h3></span
              >

              <div>
                <button v-b-modal="'my-modal'" variant="ligth" class="border mx-4 button">
                  <span class="mr-3 row "
                    ><fas-icon class="couleur1 search margbtn " :icon="['fas', 'envelope']" />
                    <h3 class="couleur1">Chat Now</h3>
                  </span>
                </button>
                <b-modal id="my-modal">
                  <div class="container">
                    <span class="mr-3 row"
                      ><fas-icon class="couleur search" :icon="['fas', 'envelope']" />
                      <h3>chat with Marcellin</h3>
                    </span>
                    <span class="mr-3 row"
                      ><fas-icon class="couleur search" :icon="['fas', 'envelope']" />
                      <h3>chat with danaz</h3>
                    </span>
                  </div>
                </b-modal>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div class="card my-1  cardborder">
        <div class="card-body ">
          <div class="row container mx-5 rowmobile">
            <b-avatar id="a1" class="avatar" text=" "></b-avatar>
            <b-progress id="p1" :value="value" :max="max" variant="success" class="mb-3 size"> </b-progress>
            <b-avatar id="a2" class="avatar" text=" "></b-avatar>
            <b-progress id="p2" :value="value" :max="max" variant="success" class="mb-3 size"></b-progress>
            <b-avatar id="a3" class="avatar" text=" "></b-avatar>
            <b-progress id="p3" :value="value" :max="max" variant="success " class="mb-3 size"></b-progress>
            <b-avatar id="a4" class="avatar" text=" "></b-avatar>
            <b-progress id="p4" :value="value" :max="max" variant="success" class="mb-3 size"></b-progress>
            <b-avatar id="a5" class="avatar" text=" "></b-avatar>
            <b-progress id="p5" :value="value" :max="max" variant="success" class="mb-3 size"></b-progress>
          </div>
          <div class="row sizestate container">
            <div class="col-2 text-center"><h3>order</h3></div>
            <div class="col-2  text-center "><h3>processing</h3></div>
            <div class="col-2 text-start "><h3 class="t">shipped</h3></div>
            <div class="col-2 text-start "><h3 class="t">delivred</h3></div>
            <div class="col-3 text-start "><h3 class="t">payment received</h3></div>
          </div>

          <div class="justify-content-between row my-5" v-for="item in orderDetails.orderItems" :key="item.id">
            <div class="col-3   margimg">
              <splide :options="{ rewind: true }" class="r-img">
                <splide-slide >
                  <img :src="item.product_picture" class="r-img" />
                </splide-slide>
              </splide>
            </div>
            <div class="ligne"><br /></div>

            <div class="col-6   text-end   margtext">
              <div class="row">
                 <div class="col-3 bold"><h3 class="h3 margm2">Name:</h3></div>
                <div class="col"> <h3>{{ item.product_name }}</h3></div>
              </div>
              <div class="row">
                <div class="col-3 bold"><h3 class="h3 margm2">product ID :</h3></div>
                <div class="col"><h3>{{ item.product_id }}</h3></div>
              </div>
              <div class="row">
                <div class="col-3 bold">  <h3 class="h3 margm2">Quantity:</h3></div>
                <div class="col"><h3>{{ item.quantity }}</h3></div>
              </div>
              <div class="row">
                <div class="col-3 bold"> <h3 class="h3 margm2">price :</h3></div>
                <div class="col"> <h3>{{ item.price }} XAF</h3></div>
              </div>
              <div class="row">
                <div class="col-3 bold"><h3 class="h3 margm2">shipping cost:</h3></div>
                <div class="col"> <h3>{{ item.shipping_amount }} XAF</h3></div>
              </div>
              <div class="row">
                <div class="col-3 bold"><h3 class="h3 margm2">total cost :</h3></div>
                <div class="col"><h3>{{ parseInt(item.sub_total) + parseInt(item.tax_amount) + parseInt(item.shipping_amount) }} XAF</h3></div>
              </div>
            </div>

           

            <div class="col margtext">
              <h3 class="bold1">status</h3>
              <h3 class="text-success">{{ item.status }}</h3>
            </div>

            <div class="col margtext">
              <h3 class="text-success">WRITE A REVIEW</h3>
            </div>

            <div class="justify-content-center container row">
              <br />
            </div>

            <div class="justify-content-center container row">
              <br />
            </div>
          </div>
          <div v-if="show" class="text-center">
              <b-spinner label="Spinning"></b-spinner>
          </div>

           <b-pagination
     
      v-model="currentPage"
      :total-rows="total"
      :per-page="per_page"
      aria-controls="my-table"
      @change="changePage"
      align="center"
    
    ></b-pagination>
    
        </div>
      </div>

      <div class="row my-1 ">
        <div class="col-6">
          <div class="card shipad shadow">
            <div class="card-body ">
              <div class="row bold text-center"><h3>shipping Adress</h3></div>
              <br />
              <div class="row">
                <div class="col-3 bold"><h3>city</h3></div>
                <div class="col"> {{orderDetails.shippingAdress.city}}</div>
              </div>
               <div class="row">
                <div class="col-3 bold"><h3>name</h3></div>
                <div class="col"> {{orderDetails.shippingAdress.name}}</div>
              </div>
              <div class="row">
                <div class="col-3 bold"><h3>phone</h3></div>
                <div class="col"> {{orderDetails.shippingAdress.phone}}</div>
              </div>
               <div class="row">
                <div class="col-3 bold"><h3>email</h3></div>
                <div class="col"> {{orderDetails.shippingAdress.email}}</div>
              </div>
              
            </div>
          </div>
        </div>
        <div class="ligne"></div>

        <div class="col-6">
          <div class="card shipad my-1 shadow">
            <div class="card-body">
              <div class="col bold">
                <span class="row">
                  <span class="col"><h3>Total summary :</h3></span>
                  <span class="col">{{ orderDetails.TotalPrice }} Fcfa</span></span
                >
                <span class="row">
                  <span class="col"><h3>Total price :</h3></span>
                  <span class="col">{{ orderDetails.Total }} Fcfa</span></span
                >
                <span class="row">
                  <span class="col"><h3>total shipping fee :</h3></span
                  ><span class="col">
                    {{ parseInt(orderDetails.Total) - parseInt(orderDetails.TotalPrice) }} Fcfa</span
                  ></span
                >
              </div>
              <div class="row"><hr class="hr" /></div>

              <div class="row bold">
                <span class="col"><h3>Total :</h3></span>
                <span class="col"> {{ orderDetails.TotalPrice }} Fcfa</span>
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
      show:true,
      currentPage: 1,
      per_page: 5,
      total: 10,
      value: 0,
      max: 50,
      img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300'],
      status: 2,
    };
  },

  mounted() {
    const progress = document.querySelectorAll('.size');
    for (let i = 1; i <= progress.length; i++) {
      let a = document.getElementById('a' + i);
      let p = document.getElementById('p' + i);
      if (i <= this.status) {
        p.classList.add('bg-success');
        a.classList.add('bg-success');
      } else {
        p.classList.add('bg-secondary');
        a.classList.add('bg-secondary');
      }
    }

    this.getBusinessOrderDetails();
  
  },

  computed: {
    orderDetails() {
      return this.$store.getters['businessOrderDetails/getOrderDetails'];
    },
    getTotal(){
      return this.$store.getters['businessOrderDetails/getTotal'];
    }
  },

  methods: {
    getBusinessOrderDetails() {
      let url = window.location.href.split("/")
      
      let data = {
        orderId: 23,
        businessId: url[url.length -1]
      }
      this.$store.dispatch('businessOrderDetails/getOrderDetails', data).then(response => {
        console.log(response);
        this.show = false
      });
    },

  changePage(value) {
        this.show = true;
     
      this.currentPage = value;
       let url = window.location.href.split("/")
      let data = {
        orderId: 23,
        businessId:  url[url.length -1],
        page: this.currentPage 
      } 
      this.$store
        .dispatch("businessOrderDetails/nextPage", data)
        .then((res) => {
          console.log("products total: ");
          // console.log(this.products);
          // this.prodLoader = false;
          this.total =this.getTotal
        console.log(this.total);
          this.show = false
          
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
@media only screen and (min-width: 988px) {
  .body {
    background-color: rgba(213, 214, 214, 0.473);
  }

  .avatar {
    width: 15px;
    height: 15px;
  }
  .progress {
    width: 150px;
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
  }
  .margtotal {
    margin-left: 350px;
  }
  .margbtn {
    margin-left: 22px;
  }
  .button {
    text-align: center;
    width: 120px;
    height: 50px;
    border-radius: 5px;
    padding: 15px;
  }
  .couleur1 {
    font-size: 12px;
  }
  .r-img {
    border-radius: 5px;
    height: 150px;
    width: 250px;
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

  .rowmobile {
    margin-right: -10px;
  }
}

/* style de l'afichage mobile */

@media only screen and (max-width: 987px) {
  /* .marge {
  margin-right: 380px;
}*/

  .margtext .text-success {
    font-size: 10px !important;
  }

  .cardborder {
    border: none;
  }
  .margtext h3 {
    margin-left: -16px;
    margin-right: -20px;
  }
  .margtext .text-success {
    font-size: 9px !important;
  }
  .avatar {
    width: 10px;
    height: 10px;
  }
  .marge1 {
    /* margin-right: 300px; */
    font-size: 10px !important;
    margin-left: -15px;
  }
  .m {
    /* margin-left: 10px; */
  }
  .ligne {
    width: 100%;
  }
  .progress {
    width: 200px;
  }
  .size {
    height: 3px;
    margin-top: 4px;
    margin-left: -3px;
    margin-right: -3px;
    width: 45px;
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
    text-align: center;
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
    margin-left: -15px !important;
  }

  .sizestate h3 {
    font-size: 8px;
    margin-left: -28px;
    margin-top: -10px;
  }

  .shipad {
    width: 340px !important;
  }
}

@media only screen and (min-width: 400px) {
  .size {
    /* width: 70px; */
  }
}
</style>
