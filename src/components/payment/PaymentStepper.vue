<template>
  <div style="background-color: white;">
    <!-- Stepper header start-->
    <b-container class="my-4" fluid="lg">
      <hr class="h-divider" />
      <PaymentProgress :current_step="current_step" @switchstep="handleSwitchStep" :steps="steps" />
      <hr class="h-divider" />
    </b-container>
    <!-- Stepper header end-->

    <b-container fluid="lg">
      <b-row v-if="current_step === 1 && !showRequestPayment">
        <b-col class="my-4" cols="12">
          <ShippingAdress @RefreshSipping="RefreshSipping" @loadActualComponent3="showActualComponent3"
            @loadActualComponent1="showActualComponent1" @handleNextStep="handleSwitchStep" />
        </b-col>
      </b-row>
      <b-row v-if="current_step === 2 && !showRequestPayment">
        <b-col class="my-4" cols="12">
          <ShippingAdress @RefreshSipping="RefreshSipping" @showoperator="handleShowOperator"
            @loadActualComponent3="showActualComponent3" @loadActualComponent1="showActualComponent1" :review=true
            @edit-button-clicked="redirectToStep1" @handleNextStep="handleSwitchStep" />
        </b-col>

      </b-row>
      <!-- @requestpayment="handleRequestPayment"  this is where payment is processing -->
      <b-row v-if="current_step === 3 && !showRequestPayment">
        <b-col class="my-4" cols="12">
          <PaymentOperator @requestpayment="handleRequestPayment" @showreview="handleShowReview" :price="order_price"
            @handleNextStep="handleSwitchStep" @confirmpayment="handleConfirmPayment" />
        </b-col>
      </b-row>
      <b-row>
        <b-col v-if="current_step === 1 && showRequestPayment" class="my-4" cols="12">
          <RequestPayment :price="order_price" :operator="operator" ref="request_payment" :loading="loading"
            @changepayment="handleChangePayment" @confirmpayment="handleConfirmPayment" />
        </b-col>
        <b-col v-if="current_step === 2 && showConfirmPayment" class="my-4" cols="12">
          <ConfirmPayment />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import ShippingAdress from "./ShippingAdress";
import PaymentOperator from "./PaymentOperator";
import RequestPayment from "./RequestPayment";
import ConfirmPayment from "./ConfirmPayment";
import PaymentProgress from "./PaymentProgress";
// import CreateShippingAddress from "./CreateShippingAddress";
import axios from "axios";
import { convertToCurrency } from "@/helpers";
// import ProductDetails from "./ProductDetails";

export default {
  name: "PaymentStepper",
  components: {
    ShippingAdress,
    PaymentOperator,
    PaymentProgress,
    // CreateShippingAddress,
    RequestPayment,
    ConfirmPayment,
  },
  data() {
    return {
      current_step: 1,
      max_step: 5,
      steps: [
        {
          text: this.$t("general.Stepper_shipping"),
          status: true,
          complete: false,
        },
        {
          text: this.$t("general.Review"),
          status: false,
          complete: false,
        },
        {
          text: this.$t("general.Payment"),
          status: false,
          complete: false,
        },
      ],
      sizeStepperIndicator: "md",
      showOperators: false,
      showReview: false,
      showRequestPayment: false,
      showConfirmPayment: false,
      order_price: 0,
      order_ids: [],
      operator: "",
      loading: false,
      actualComponent1: true,
      actualComponent2: false,
      actualComponent3: false,
    };
  },
  computed: {
    progress: function () {
      return Math.round(100 / this.max_step) * this.current_step;
    },
    order() {
      return this.$store.state.checkout.order.data;
    },
    islogin() {
      return this.$store.getters["auth/isLogged"];
    },
  },

  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const stepValue = urlParams.get('step') || 'default value'; 
    console.log("************url***",stepValue);
    this.loading = true;
    this.$store.dispatch("checkout/updateStepper", 1);
    this.$store.dispatch("checkout/getCartSummary", this.islogin);
    this.$store
      .dispatch("checkout/getAllShippingAdd", { islogin: this.islogin })
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
      if(stepValue)
      {
        this.current_step = parseInt(stepValue);
      }
  },

  methods: {
    redirectToStep1() {
      this.steps[0].status = true;
      this.current_step = 1;
    },
    RefreshSipping() {
      if (this.$refs.checkoutorder) {
        this.$refs.checkoutorder.RefreshSipping();
      }
    },

    onClickNext: function () {
      this.changeStatusProgress(this.current_step, this.current_step + 1);
      this.current_step++;
    },
    onClickBack: function () {
      this.current_step--;
    },
    onClickFirst: function () {
      this.current_step = 1;
    },
    handleSwitchStep(step) {
      this.changeStatusProgress(this.current_step, step);
      this.current_step = step;
    },
    showActualComponent1() {
      this.current_step = 1;
      this.steps[0].status = true;
      this.steps[1].status = false;
      this.actualComponent1 = true;
      this.actualComponent2 = false;
    },
    showActualComponent2() {
      this.current_step = 2;
      this.steps[0].status = false;
      this.steps[1].status = true;
      this.steps[2].status = false;
      this.actualComponent1 = false;
      this.actualComponent2 = true;
    },
    showActualComponent3() {
      this.current_step = 3;
      this.steps[1].status = false;
      this.steps[2].status = true;
      this.actualComponent2 = false;
      this.actualComponent3 = true;
    },

    changeStatusProgress(current_step, next_step) {
      // this.steps[current_step - 1].status = false;
      // this.steps[current_step - 1].complete = true;
      this.steps[next_step - 1].status = true;
    },

    handleShowOperator(price, order_ids) {
      // this.showOperators = true;
      // this.showReview = false;
      console.log("======price, and order_ids=========", price, order_ids);
      this.order_price = price;
      this.order_ids = order_ids;
      this.onClickNext();
    },

    handleShowReview() {
      this.showReview = true;
      this.showOperators = false;
    },
    handleRequestPayment(price, operator) {
      this.showRequestPayment = true;
      this.current_step = 1;
      this.order_price = price;
      this.operator = operator;
      this.steps = [
        {
          text: "Request Payment",
          status: true,
          complete: false,
        },
        {
          text: "Confirm Payment",
          status: false,
          complete: false,
        },
      ];
    },
    handleChangePayment() {
      this.current_step = 3;
      this.showRequestPayment = false;
      this.steps = [
        {
          text: "SHIPPING",
          status: true,
          complete: true,
        },
        {
          text: "REVIEW",
          status: true,
          complete: true,
        },
        {
          text: "PAYMENT",
          status: false,
          complete: false,
        },
      ];
    },
    async handleConfirmPayment({ number, amount, operator }) {
      // this.$emit("nextpaymentstep");
      // this.showRequestPayment = false;
      // this.showConfirmPayment = true;
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });
      const data = {
        phone: number,
        amount: amount,
        orderId: this.order_ids.toString(),
        operator: operator,
      };
      if (operator == "Stripe") {
        const rate = await convertToCurrency('USD');
        const amount_in_dollar = rate ? `${(amount / rate.rate).toFixed(2)}` : `${amount} XAF`
        const amountInDollarInt = parseFloat(amount_in_dollar);
        data.name = "Product 1";
        data.order_ids = this.order_ids,
          delete data.orderId;
        delete data.phone;
        delete data.operator;
        data.amount = amountInDollarInt;
        console.log("====dollar====",rate)
        const url = "checkout-session/create";
        axios
          .post(url, data)
          .then((response) => {
            if (response.data) {
              window.location.href = response.data.url;
            }
            this.loading = false;
            loader.hide();
          })
          .catch((error) => {
            this.flashMessage.show({
              status: "error",

              message: "Transaction Failed",
            });
            console.dir(error);
            loader.hide();
            this.loading = false;
          });


        return;
      }

      let url = null;
      if (operator == "ORANGE") {
        this.loading = true;
        const userJson = localStorage.getItem("user");

        let userId = null;
        const userObject = JSON.parse(userJson);
        if (userObject) {
          try {
            userId = userObject.user.id;
          } catch (error) {
            console.error("Error parsing user data from localStorage:", error);
          }
        }

        url = this.islogin
          ? `orange/start-orange-money-transaction?userId=${userId}`
          : "orange/start-orange-money-transaction";

        axios
          .post(url, data)
          .then((response) => {
            // this.showConfirmPayment = true;
            //  this.onClickNext();
            if (response.data) {
              this.flashMessage.show({
                status: "success",
                message: "Operation Successful! ",
              });
              setTimeout(() => {
                this.$router.push({ path: "/ThankYouPage", query: { order_ids: this.order_ids.toString() } });
              }, 3000);
            }
            loader.hide();
            this.loading = false;
            console.log("testing orange");
          })
          .catch((error) => {
            this.flashMessage.show({
              status: "error",

              message: "Transaction Failed",
            });
            console.dir(error);
            loader.hide();
            this.loading = false;
          });
      }

      if (operator == "MTN") {
        this.loading = true;

        url = "mtn/start-momo-transaction";

        axios
          .post(url, data)
          .then((response) => {
            this.showConfirmPayment = true;
            this.onClickNext();
            console.log(response);
            this.loading = false;
          })
          .catch((error) => {
            this.$refs.request_payment.paymenterror(error);
            this.flashMessage.show({
              status: "error",

              message: "Transaction Failed",
            });
            console.dir(error);
            this.loading = false;
          });
      }
    },

    shownextComponent() { },
  },
};
</script>

<style>
.card-style {
  width: 80%;
  margin: 0 auto;
}

.step .icon {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.3rem;
  height: 2.3rem;
  background-color: var(--secondary);
  color: var(--primary-text);
  margin-right: 0.5rem;
}

.step.active .icon,
.step.complete .icon {
  background-color: #13b93c;
}

.title-font-size {
  font-size: 16px !important;
  cursor: pointer !important;
  color: #000;
}

.headline-font-size {
  font-size: 20px;
  color: #000;
}

.avatar-size {
  height: 40px;
  width: 40px;
}

.body-font-size {
  font-size: 14px;
}

.text-14 {
  font-size: 14px;
}

@media only screen and (max-width: 768px) {
  .headline-font-size {
    font-size: 16px;
  }

  .title-font-size {
    font-size: 14px !important;
  }

  .avatar-size {
    height: 35px !important;
    width: 35px !important;
  }

  .body-font-size {
    font-size: 12px;
  }
}
</style>
