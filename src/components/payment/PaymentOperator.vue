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
  <div>
    <div class="row pt-5">
      <div class="col-12 col-md-8 col-lg-8">
        <div class="d-flex justify-content-between">
          <h4 class="title"> {{ $t("general.PAYMENT") }}</h4>
        </div>
        <h5 class="saved-payment">{{ $t("general.SAVED_PAYMENT") }}</h5>
        <div class="row">
          <div class="col-12">
            <CreatePaymentModal />
          </div>
        </div>
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
          <b-form-radio v-model="operator" name="operator" value="ORANGE" class="operator-select"></b-form-radio>
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
            <b-form-radio v-model="operator" name="operator" value="MTN" class="operator-select" style="font-size: 20px"></b-form-radio>
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
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <OrderSummary />
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
      if (this.operator !== "" && this.price > 0)
        this.$emit("requestpayment", this.price, this.operator);
    },
    formatMoney(money) {
      return this.formatObject.format(money);
    },
    loadActualComponent2() {
      this.$emit("loadActualComponent2");
    }
  }
};
</script>

<style scoped>
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
  font-size: 26px !important;
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
</style>
