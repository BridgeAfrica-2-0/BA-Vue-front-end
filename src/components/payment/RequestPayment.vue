<template>
  <b-card class="border-0">

  
    <b-button variant="link" @click="changepayment" class="px-0">
      <i class="fas fa-arrow-left"></i> Back
    </b-button>
    <div class="card-header px-0 text-black border-bottom-0  bg-white h-50">
      Enter your {{operator}} Mobile Money number
    </div>
    <div class="px-0">
      <div class="row">
        <div class="col-8 col-sm-9 col-md-6">
          <b-form-input
            placeholder="237 6XX XXX XXX"
            id="number"
            v-model="number"
            type="tel"
          ></b-form-input>
        </div>
        <div class="col-4 col-sm-3 col-md-6 px-0 btn-custom-box">
          <b-button
            variant="primary"
            @click="changepayment"
            class="font-weight-light btn-custom text-14 shadow-sm"
            >CHANGE</b-button
          >
        </div>
      </div>
      <div class="row my-3">
        <div class="col btn-custom-box">
          <b-button
            variant="primary"
            class="font-weight-light shadow-sm btn-custom text-14"
            @click="confirmPayment"
            > <b-spinner v-if="loading" small variant="light"></b-spinner> PAY {{ formatMoney(price) }}</b-button
          >
        </div>
      </div>
      <div class="row my-3">
        <div class="col body-font-size">
          <p>
            Please make sure your account balance is greater than {{ formatMoney(price) }},
            Otherwise your payment will not be completed.
          </p>
          <p>
            <!-- Reference NO: XXXXXXXXXXXX -->
          </p>
        </div>
      </div>
    </div>

    
    
  <b-modal ref="paymentmodal" id="modal-xl" size="xl" hide-footer  > 
     <div v-if="!error_msg" class="container tex-center p-5 mb-5">
      <div>  
      <h2 class="text-center">  Your payment has been initiated! </h2>
      <p class="mt-5 text-center"> You will receive a payment request on your phone. </p>
      <p class="text-center"> If you don't, dial <span style="font-weight:bold; color: #fc0!important;
       text-shadow: 1px 1px #f1f1f1;">  *126# </span> to initiate the payment  </p>
    </div>
     </div> 
    </b-modal>


  </b-card>
</template>

<script>
export default {
  name: "RequestPayment",

  
  props: {
    operator: {
      type: String,
    },
    amount: {
      type: String,
    },

    loading: {
      type: Boolean,
      default:false,

    },

    price: {
      type: Number,
      default: 0,
    },
  },
  computed:{
  
			order() {
				return this.$store.state.checkout.order.data;
				
			},

  },
  data() {
    return {

      	// loading: true,
       error_msg:false,
       formatObject: new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XAF",
        minimumFractionDigits: 2,
       
      }),
      number: "",
    };
  },
  methods: {
    confirmPayment() {
      this.error_msg=false;

      if (this.operator == "MTN") {
      this.$refs['paymentmodal'].show()
      }

      this.$emit("confirmpayment", {
        number: this.number,
        amount: this.price,
        operator: this.operator,
      
      });

      this.loading=false;
    },

    paymenterror(error){
      alert('yoo  am here')
      console.log(error);
      this.error_msg=error;
    },

    formatMoney(money) {
      return this.formatObject.format(money);
    },
    changepayment() {
      this.$emit("changepayment");
    },
  },
};
</script>

<style scoped>
.btn-custom {
  height: 38px;
  min-width: 123px;
  font-size: 14px;
}
@media only screen and (max-width: 768px) {
  /* .btn-custom {
			float: right;
		} */
  /* .btn-custom-box{
			width: fit-content;
		} */
  /* .payment-body{
			padding: 20px 0px !important;
		} */
  .card-body {
    padding: 0 !important;
  }
}
</style>
