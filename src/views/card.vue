<template>
  <div class="container-fluid">
    <navbar />
    <div class="row">


     
      
      
      <div class="col-12 col-md-12 col-lg-9 ">
        <hr />
        <div class="row">
          <div class="col d-none d-md-block"><h3 class="mx-5">{{$t("general.PRODUCT_DETAILS")}}</h3></div>
          <div class="col">
            <div class="row desktop">
              <h3 class="mx-5">{{$t("general.Quantity")}}</h3>
              <h3 class="mx-5">{{$t("general.price")}}</h3>
              <h3 class="mx-5">{{$t("general.Total")}}</h3>
            </div>
          </div>
        </div>
        <hr />
        <div class="row my-4" v-if="loading">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <b-spinner
            variant="primary"
              style="width: 3rem; height: 3rem;"
              label="Loading"
            ></b-spinner>
          </div>
        </div>  
        <div v-if="!loading">
          <div v-for="(cart_item, i) in cart.data" :key="i"> 
           
            <div class="row ">
              <div class="col-4 col-md-3">
                <splide :options="{ rewind: true }" class="r-image">
                  <splide-slide>
                    <img
                      :src="cart_item.product_picture"
                      class="r-image"
                    />
                  </splide-slide>
                </splide>
              </div>

              <div class="col-8 col-md-4 text-end text-start bold ">
                <div >
                  

                  <h3 class="username">   {{ cart_item.product_name}}  </h3>
                </div>

                <div class="text">
  <p> 
                  <read-more
                        more-str="read more"
                        class="readmore"
                        :text="cart_item.product_description"
                        link="#"
                        less-str="read less"
                        :max-chars="50"
                      >
                      </read-more>

                       </p>
                 
                </div>

                
              </div>
              <div class="row line"></div>
              <div class="col mt-2 d-none d-md-block">
                <div class="row ">
                  <div class="col-2 p-0 bg-y ">
                    <input
                      type="number"
                    
                      @change="changeQuantity($event,cart_item.item_id)"
                      v-model="cart_item.quantity"
                      class="numbersize  form-control"
                    />


             


                  </div>
                  <div class="col-3 text-success p-0 ">
                    <h3 class="marg2">{{ formatMoney(cart_item.product_price) }} </h3>
                  </div>
                  <div class="col-3 p-0 text-success  text-center">
                    <h3 class="marg3">
                      {{formatMoney(cart_item.product_price * cart_item.quantity) }}
                      
                    </h3>
                  </div>
                  <div class="col-1 p-0  ">
                    <fas-icon
                      @click="removeIconFromCart(cart_item.product_id)"
                      class="couleur search   cursor "
                      :icon="['fas', 'trash-alt']"
                      style="margin-right:2px"
                    />
                  </div>
                </div>
              </div>

              <br />
          <div class="row"> </div>

        
              
                  <div class="col-3 d-block d-md-none ">
                    <input
                      type="number"
                    
                      @change="changeQuantity($event,cart_item.item_id)"
                      v-model="cart_item.quantity"
                      class="numbersize  form-control"
                    />


             


                  </div>
                  <div class="col-3 text-success p-0  d-block d-md-none">
                    <h3 class="">{{ formatMoney(cart_item.product_price) }} </h3>
                  </div>
                  <div class="col-3 p-0 text-success  text-center d-block d-md-none">
                    <h3 class="">
                      {{ formatMoney(cart_item.product_price * cart_item.quantity) }}
                      
                    </h3>
                  </div>
                  <div class=" d-block d-md-none col-3   text-center ">
                    <fas-icon
                      @click="removeIconFromCart(cart_item.product_id)"
                      class="couleur search   cursor"
                      style="margin-top:-10px"
                      :icon="['fas', 'trash-alt']"
                    />
                  </div>
                </div>
           
            <hr />
          </div>

          <div class="d-flex justify-content-center">
      


           
              <b-pagination
      v-if="cart.next || cart.previous"
      v-model="currentPage"
      pills
      :total-rows="cart.total"
      :per-page="cart.per_page"
      aria-controls="my-table"
      @change="changePage"
      align="center"
    ></b-pagination>


          </div>
        </div>
      </div>
      
      <div class="col-12 col-md-12 col-lg-3  color">
        <h3 class="my-2">{{$t("general.cart_totals")}}</h3>
        <hr />
        <div class="row">
          <div class="col">
            <h3>{{$t("general.ITEMS")}} {{ cart_total.total_items }}</h3>
          </div>
          <div class="col">
            <h3> {{$t("general.sub_totals")}}   {{ cart_total.sub_total }} </h3>
          </div>
        </div>
        <br />
        <form action="">
          <!-- {{$t("general.SHIPPING")}}
          <input type="text" class="form-control" /> -->
          {{$t("general.PROMO_CODE")}}
          <input type="text" class="form-control" />
          <button class="btn btncolor shadow"><h3>{{$t("general.Apply")}}</h3></button>
        </form>
        <br />
        <hr />
        <br />

        <div class="row">
          <div class="col"><h3>{{$t("general.TOTAL_COST")}}</h3></div>
          <div class="col"><h3>  {{formatMoney(cart_total.total_cost)}} </h3></div>
        </div>
        <button class="btn btn1 form-control shadow" @click="gotoCheckout">
          <h3>{{$t("general.CHECKOUT")}}</h3>
        </button>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
import axios from "axios";
export default {
  components: { navbar },
  data() {
    return {
      currentPage: 1,
      per_page: 5,
      loading: false,
      error: false,
      formatObject: new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XAF",
        minimumFractionDigits: 2,
      }),
      orderForCurrentPage: [],
      img: ["http://urlr.me/YMQXD", "https://placekitten.com/400/300"],
    };
  },
  created() {
    this.getCartItems();
    this.getCartSummary();
    console.log("loading cart items");
  },
  watch: {


    currentPage: function(val) {
      this.orderForCurrentPage = this.cart["data"].slice(
        (val - 1) * this.per_page,
        val * this.per_page
      );
    },



  },


  computed: {
    rowsOrder() {
      let rows = 1;
      if (this.cart["data"]) {
        rows = this.cart.total;
      }

      return rows;
      // return this.order_items.length;
    },
    cart() {
      return this.$store.state.checkout.cart;
    },

    cart_total() {
      return this.$store.state.checkout.cart_summary;
    },

    getTotalPrice() {
      let totalItems = this.cart.total;
      return 0;
    },
  },
  methods: {

    
    
        changePage(value) {
      console.log("next page loading ");
      
      this.currentPage = value;
     let url="cart&page="+value;    

      this.$store
        .dispatch("checkout/next", url).then((res) => {
          console.log(res);
          this.loader=false;
          
        })
       
        .catch((err) => {
        
          console.error(err);
        });
    },

    async getCartSummary(){

      await this.$store
        .dispatch("checkout/getCartSummary") 
        .then(() => {
         
        })
        .catch((err) => {
          console.log({err:err});
          
        });

    },

    async getCartItems() {
      this.loading = true;
      await this.$store
        .dispatch("checkout/getCart") 
        .then(() => {
          this.loading = false;
          this.error = false;
          this.orderForCurrentPage = this.makeOrderforCurrentPage(
            this.cart,
            this.currentPage
          );
        })
        .catch((err) => {
          console.log({err:err});
          this.loading = false;
          this.error = true;
        });
    },
    changeQuantity(event, index) {

      let quantity = event.target.value;
      if(quantity > 1 ){  
      this.$store
        .dispatch("checkout/updateCart", {quantity:quantity, index:index }) 
        .then(() => {
          this.getCartSummary();
        })
        .catch((err) => {
          console.log({err:err});
          
        }); }
     
    },

    formatMoney(money) {
      return this.formatObject.format(money);
    },
    makeOrderforCurrentPage(cart, currentPage) {
       return cart["data"].slice(
        (currentPage - 1) * this.per_page,
         currentPage * this.per_page
       );
    },
    gotoCheckout() {
      this.$router.push("/checkout");
    },
    async removeIconFromCart(id) {
      this.loading = true;
      await axios
        .delete(`cart/item/${id}/delete`)
        .then((result) => {

          this.getCartSummary();
          console.log(result);
          this.getCartItems();
          this.flashMessage.show({
            status: "success",
            blockClass: "custom-block-class",
            message: "Item Removed Successfully",
          });
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.flashMessage.show({
            status: "error",
            blockClass: "custom-block-class",
            message: "Unable to remove item at this moment",
          });
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1201px) {
  .desktop {
    display: none;
  }
  .color {
    background-color: #c5c5c546;
    margin-top: 15px;
    /* height: 500px; */
  }

  .marg1 {
    margin-left: 180px;
  }
  .marg2 {
    margin-left: 90px;
    /* padding-left: 2px; */
  }

  .marg5 {
    margin-top: -20px;
  }
  h3 {
    font-size: 12px;
    font-weight: bold;
  }
  .h3 {
    font-weight: normal;
  }
  .cursor {
    cursor: pointer;
  }
  .numbersize {
    width: 40px;
    padding: 0px;
        padding-left: 8px !important;
    height: 20px;
  }
  .line {
    width: 100%;
  }

  .btncolor {
    background-color: #e75c18;
    /* margin-top: 10px;
  height: 30px;
  width: 120px; */
    color: white;
    line-height: 10px;
  }
  .btn1 {
    background-color: #e75c18;
    /* margin-top: 10px;
  height: 30px; */

    color: white;
    line-height: 10px;
  }
  .couleur {
    color: red;
  }

  .r-img {
    border-radius: 5px;
    height: 150px;
  }
}

/* style for desktop ------------------------------------ */
@media only screen and (min-width: 1200px) {
  h3 {
    font-size: 14px;
    font-weight: bold;
  }
  .h3 {
    font-weight: normal;
  }
  .color {
    background-color: #c5c5c546;
    margin-top: 15px;
    height: 500px;
  }
  .btncolor {
    background-color: #e75c18;
    margin-top: 10px;
    height: 30px;
    width: 120px;
    color: white;
    line-height: 10px;
  }
  .btn1 {
    background-color: #e75c18;
    margin-top: 10px;
    height: 30px;

    color: white;
    line-height: 10px;
  }
  .couleur {
    color: red;
  }
  .r-img {
    border-radius: 5px;
    height: 150px;
    width: 190px;
  }
  .numbersize {
   width: 40px;
    padding: 0px;
        padding-left: 8px !important;
    height: 20px;
  }
}

.text{
  font-weight: 400;
}




@media only screen and (min-width: 768px) {
  .title {
    font-size: 20px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: 60px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }


  .r-image {
    border-radius: 8px;

    height: 160px;
    width: 160px;
  }
}














@media only screen and (max-width: 768px) {
  .a-flex {
    margin-right: -15px;
  }

  .s-button {
    padding: 15px;
    margin-top: -15px;
  }

  .title {
    font-size: 16px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 12px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .btn {
    padding-top: 6px;
    font-size: 10px;

    height: 28px;
    width: 85px;
  }

  .r-image {
    border-radius: 8px;

    height: 100px;
    width: 100px;
  }
}






</style>
