<template>
  <b-container>
    <b-container>
      <p class="text">Select a payment method for your bridget africa account</p>
    </b-container>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Country"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0"
        >
          <country-select v-model="country" :country="country" topCountry="US" class="form-control text" />
        </b-form-group>
      </b-container>
    </div>

    <br />

    <b-container class="payment-type">

      <b-card>
        <div class="">

          <div class="my-4 operator">
            <div class="">
              <img
                :src="require('@/assets/img/payment/mtn.png')"
                alt="MOBILE MONEY"
              />
            </div>
            <div class="operator-name">
              <p class="mb-0 mx-4 title-font-size font-weight-bold">
                MTN Mobile Money
              </p>
            </div>
            <div class="operator-select-box">
              <b-form-radio
                v-model="operator"
                name="operator"
                value="MTN"
                class="operator-select"
              ></b-form-radio>
            </div>
          </div>

          <div class="my-4 operator">
            <div class="">
              <img
                :src="require('@/assets/img/payment/orange_money.png')"
                alt="ORANGE MONEY"
              />
            </div>
            <div class="operator-name">
              <p class="mb-0 mx-4 title-font-size font-weight-bold">Orange Money</p>
            </div>
            <div class="operator-select-box">
              <b-form-radio
                v-model="operator"
                name="operator"
                value="ORANGE"
                class="operator-select"
              ></b-form-radio>
            </div>
          </div>
          <div class="my-4 operator">
            <div class="operator-img-box">
              <img
                :src="require('@/assets/img/payment/expressU.jpg')"
                alt="EXPRESS UNION"
              />
            </div>
            <div class="operator-name">
              <p class="mb-0 mx-4 title-font-size font-weight-bold">
                Express Union
              </p>
            </div>
            <div class="operator-select-box ml-md-2">
              <b-form-radio
                v-model="operator"
                name="operator"
                value="EXPRESS"
                class="operator-select"
              ></b-form-radio>
            </div>
          </div>

          <div class="row p-2">
            <div class="col">
              <button
                @click="requestPayment"
                class="float-right btn-custom p-2 btn btn-primary mt-2"
              > Confirm Payment</button>
            </div>
          </div>
        </div>
      </b-card>



      <div class="mb-0">
        <p class="text">Your payment information is secure</p>
      </div>
    </b-container>
    <b-modal v-model="RequestPayment" title="Enter your MTN Mobile Money number" size="md" hide-footer>
      <div v-if="congratulation" class="px-0">
        <b-overlay :show="show" rounded="sm">
          <div class="row">
            <div class="col-10 col-sm-9 col-md-8">
              <b-form-input
                placeholder="237 6XX XXX XXX"
                id="number"
                v-model="number"
                type="tel"
              ></b-form-input>
            </div>
            <div class="col-2 col-sm-3 col-md-4 px-0 btn-custom-box">
              <b-button
                variant="primary"
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
                >PAY {{formatMoney(2000)}}</b-button
              >
            </div>
          </div>
          <div class="row my-3">
            <div class="col body-font-size">
              <p>
                Please make sure your account balance is greater than 13 000XAF,
                Otherwise your payment will not be completed.
              </p>
              <p>
                Reference NO: XXXXXXXXXXXX
              </p>


            </div>
          </div>
        </b-overlay>
      </div>
      <div v-else class="text-center">
        <h3><b>🥳❗Transaction Completed❗🥳</b></h3>
      </div>
    </b-modal>

  </b-container>
</template>

<script>
export default {
  name: 'payment',
  data() {
    return {
      url:null,
      RequestPayment: false,
      operator: '',
      formatObject: new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XAF',
        minimumFractionDigits: 2,
      }),
      number: '',

      show: false,
      congratulation: false
    };
  },

  mounted(){
    this.url = this.$route.params.id;
  },

  methods: {
    showRewiew() {
      this.$emit('showreview');
    },

    requestPayment() {
      console.log("requestPayment");
      console.log("this.operator", this.operator);
      this.RequestPayment = !this.RequestPayment;
      if (this.operator !== '') 
        this.$emit('requestpayment', this.operator);
    },
    confirmPayment() {
      this.show = true;
      console.log("confirmPayment");
      console.log("this.PaymentForm.type", "this.PaymentForm.type")
      console.log("this.PaymentForm.price", "price")
      let formData = new FormData();
      formData.append("type", "this.PaymentForm.type")
      formData.append("time", "this.PaymentForm.type")
      this.$store
      .dispatch("businessAccountType/confirmPayment", {
        path: `community/people/${this.url}`,
        data: formData
        })
      .then(({data}) => {
        console.log('ohh yeah');
        console.log(data);
        this.show = false
      })
      .catch(err => {
        this.show = false
        this.congratulation = true
        console.log({ err: err });
      });
    },

    formatMoney(money) {
      return this.formatObject.format(money);
    },
  },
};
</script>

<style scoped>
.payment-type {
  background-color: #f7f7f7;
  padding: 4px 15px;
  text-align: left;
}

.h3-color {
  color: #000;
}

.b-color {
  color: #7952b3;
}
.tabs {
  width: 100%;
}

.account-headnig {
  padding-left: 12px;
  padding-top: 7px;
  text-align: left;
}
.h-background {
  display: flex;
  background-color: #e4e3e3;
}
.payment-image {
  margin-top: -50px;
  float: right;
}

@media only screen and (max-width: 1065px) {
  .payment-image {
    margin-top: 0px;
    float: right;
  }
}
.a-text {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}

@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>
<style scoped>
	/* .d-flex .img {
		display: block;
		width: 60px !important;
	} */
	.btn-custom {
		height: 38px;
		min-width: 123px;
		font-size: 14px;
	}
	.operator {
		display: flex;
		justify-content: start;
		align-items: center;
	}
	.operator-img-box {
		width: 50px !important;
	}
	.operator img {
		display: inline-block;
		height: 40px;
		width: 100%;
	}
	.operator-name {
		width: 30rem;
	}
	.operator-select {
		cursor: pointer !important;
	}

	@media only screen and (max-width: 992px) {
		.operator-select-box {
			width: 80%;
		}
		.operator-select {
			float: right;
		}
	}
</style>