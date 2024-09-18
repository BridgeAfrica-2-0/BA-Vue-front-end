<template>
  <!-- <b-card>
    <div class=""> -->
  <!-- <div class="row p-2">
				<div class="col">
					<button @click="showRewiew" class="float-left p-2 btn btn-primary">
						Back
					</button>
				</div>
			</div> -->

  <!-- <div class="my-4 operator">
        <div class="operator-img-box">
          <img
            :src="require('@/assets/img/payment/mtn.png')"
            style="width:40px"
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
        <div class="operator-img-box">
          <img
            :src="require('@/assets/img/payment/orange_money.png')"
            alt="ORANGE MONEY"
            style="width:40px"
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

      <div class="row p-2">
        <div class="col">
          <button
            @click="requestPayment"
            class="float-right btn-custom p-2 btn btn-primary mt-2"
          >
            Pay: {{ formatMoney(price) }}
          </button>
        </div>
      </div> -->
  <!-- </div>
  </b-card> -->
  <div class="col">
    <div class="row">
      <div class="col-12 col-md-8 col-lg-8">
        <div class="d-flex justify-content-between">
          <h4 class="title mb-0 p-1"> {{ $t("general.PAYMENT") }}</h4>
          <b-button
          v-b-modal.edit-shipping-modal
          variant="primary"
          @click="goBack()"
          class="back-btn"
        >
        <i class="fas fa-arrow-alt-circle-left mr-3"></i>
          BACK
        </b-button>
        </div>
        <h5 class="saved-payment">{{ $t("general.SAVED_PAYMENT") }}</h5>
        <hr class="dotted-hr" />

        <div class="my-4 operator d-flex align-items-center">
          <div class="operator-select-box">
            <b-form-radio v-model="operator" name="operator" value="Stripe" class="operator-select"></b-form-radio>
          </div>
          <div class="operator-img-box ml-2 py-2">
            <img :src="require('@/assets/img/payment/stripe.png')" style="width:67px" alt="MOBILE MONEY" />
          </div>
          <div class="operator-name">
            <p class="mb-0 mx-4 title-font-size font-weight-bold">
              Stripe
            </p>
          </div>
        </div>
        <div class="my-4 operator d-flex align-items-center">
          <div class="operator-select-box">
          <b-form-radio v-model="operator" name="operator" value="ORANGE"   class="operator-select"></b-form-radio>
          </div>
          <div class="operator-img-box ml-2 p-0 px-2 py-1">
            <img :src="require('@/assets/img/payment/orange-money-new.png')" alt="ORANGE MONEY" style="width:60px; height: 40px" />
          </div>
          <div class="operator-name">
            <p class="mb-0 mx-4 title-font-size font-weight-bold">Orange Money</p>
          </div>
        </div>
        <div class="my-4 operator d-flex align-items-center">
          <div class="operator-select-box">
            <b-form-radio v-model="operator" name="operator" value="MTN"  class="operator-select" style="font-size: 20px"></b-form-radio>
          </div>
          <div class="operator-img-box ml-2">
            <img :src="require('@/assets/img/payment/mtn-new.png')" style="width:67px" alt="MOBILE MONEY" />
          </div>
          <div class="operator-name">
            <p class="mb-0 mx-4 title-font-size font-weight-bold">
              MTN Mobile Money
            </p>
          </div>
        </div>

        <div v-if="operator == 'ORANGE' || operator == 'MTN'">
          <div class="card">
            <div class="card-body">
              <p class="card-text">{{ operator === 'MTN' ? 'Enter your MTN Mobile Money number' : 'Enter your ORANGE Mobile Money number'}}</p>
              <div class="d-flex align-items-center">
                <div class="flex-grow-1"> 
                  <b-form-input
                    v-model="phone"
                    class="phone-input"
                    id="phone-input"
                    type="tel"
                    required
                    placeholder="237 6XX XXX XXX"
                  ></b-form-input>
                </div>
              </div>
              <p class="price-note">Please make sure your account balance is greater than 162 001,00 FCFA, Otherwise your payment will not be completed.</p>
            </div>
          </div>
        </div> 
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <OrderSummary :step="3" :handleSubmit="handleSubmit" :disable="!operator || (['ORANGE', 'MTN'].includes(operator) ? !phone : false)" />
      </div>
    </div>
  </div>

</template>

<script>
import OrderSummary from "../order-summary/OrderSummary.vue";
export default {
  name: "PaymentOperator",
  props: {
    price: {
      type: Number,
      default: 0
    }
  },
  components: { OrderSummary },
  data() {
    return {
      operator: "",
      phone: "",
      formatObject: new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XAF",
        minimumFractionDigits: 2
      })
    };
  },
  methods: {
    showRewiew() {
      this.$emit("showreview");
    },
    requestPayment() {
      // if (this.operator !== "" && this.price > 0)
      console.log("payment is being requested")
        this.$emit("requestpayment", this.price, this.operator);
    },
    formatMoney(money) {
      return this.formatObject.format(money);
    },
    loadActualComponent2() {
      this.$emit("loadActualComponent2");
    },
    handleSubmit(){
      // this.$router.push({ path: "/ThankYouPage" }); 
      // this.$emit("requestpayment", 1, this.operator);/////////////////////////////
      // this.$emit("handleNextStep", 3);

      this.$emit('confirmpayment', {
        number: this.phone,
        amount: this.price,
        operator: this.operator
      });         
    },
    goBack()
    {
      this.$emit("handleNextStep", 2);
    },
  }
};
</script>

<style scoped>
.back-btn {
  width: 100px;
  height: 46px;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 10px;
}
/* .d-flex .img {
		display: block;
		width: 60px !important;
	} */
/* .btn-custom {
  height: 38px;
  min-width: 123px;
  font-size: 14px;
}
.operator {
  display: flex;
  justify-content: start;
  align-items: center;
}

@media only screen and (max-width: 768px) {
  .operator-img-box {
    width: 50% !important;
  }
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
} */

.title {
  font-size: 30px !important;
  color: #000;
  font-weight: bold;
}

.add-payment-btn {
  background-color: #ff9900;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-payment-btn:hover {
  background-color: #ff9900;
}

.dotted-hr {
  border: 0;
  border-top: 2px dotted black;
  height: 0;
  margin: 20px 0;
  position: relative;
}

.saved-payment {
  padding-top: 15px !important;
  font-size: 20px !important;
  font-weight: bold;
  color: #000;
}

.operator-img-box {
  border: 2px solid lightgray;
  padding: 5px;
  border-radius: 7.5px;
}

.pay-btn {
  color: #fff;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  font-weight: 600;
  border-radius: 0px;
  white-space: nowrap; 
  padding: 0.5rem 1rem; 
  min-width: 100px;
}

.price-note {
  color: #ACACAC;
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 0 !important;
}

.phone-input {
  border-start-end-radius: 0px !important;
  border-end-end-radius: 0px !important;
}
</style>
