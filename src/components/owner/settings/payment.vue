<template>
  <b-container class="container-fluid">
    <b-container>
      <p class="text">
        {{
          $t(
            "businessowner.Select_a_payment_method_for_your_bridget_africa_account"
          )
        }}
      </p>
    </b-container>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('businessowner.Country')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0"
        >
          <b-form-select
            v-model="PaymentForm.country"
            :options="countries"
            value-field="id"
            text-field="name"
            class="form-control text"
          ></b-form-select>
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
                v-model="PaymentForm.operator"
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
              <p class="mb-0 mx-4 title-font-size font-weight-bold">
                Orange Money
              </p>
            </div>
            <div class="operator-select-box">
              <b-form-radio
                v-model="PaymentForm.operator"
                name="operator"
                value="ORANGE"
                class="operator-select"
              ></b-form-radio>
            </div>
          </div>

          <div class="row p-2">
            <div class="col">
              <button
                @click="AcRequestPayment = true"
                class="float-right btn-custom p-2 btn btn-primary mt-2"
              >
                {{ $t("businessowner.Confirm_Payment") }}
              </button>
            </div>
          </div>
        </div>
      </b-card>

      <div class="mb-0">
        <p class="text">
          {{ $t("businessowner.Your_payment_information_is_secure") }}
        </p>
      </div>
    </b-container>

    <!-- Request Payment -->
    <b-modal
      v-model="AcRequestPayment"
      title="Enter your Number"
      size="md"
      hide-footer
    >
      <b-overlay :show="show" rounded="sm">
        <div class="row">
          <div class="col-10 col-sm-9 col-md-8">
            <b-form-input
              :placeholder="
                PaymentForm.phone ? PaymentForm.phone : '237 6XX XXX XXX'
              "
              id="number"
              v-model="PaymentForm.phone"
              type="tel"
            ></b-form-input>
          </div>
          <div class="col-2 col-sm-3 col-md-4 px-0 btn-custom-box">
            <b-button
              variant="primary"
              class="font-weight-light shadow-sm btn-custom text-14"
              @click="confirmDefaltPayment"
              >{{ $t("businessowner.Confirm") }}</b-button
            >
          </div>
        </div>
      </b-overlay>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  name: "payment",
  props: ["profileId"],
  data() {
    return {
      url: null,
      AcRequestPayment: false,
      operator: "",
      formatObject: new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XAF",
        minimumFractionDigits: 2,
      }),
      number: "",
      PaymentForm: {
        subscribe: "type",
        phone: "",
        operator: "",
        country: "",
      },

      show: false,
    };
  },

  computed: {
    defaultPayment() {
      return this.$store.state.profileSettingsEdit.defaultPayment;
    },
    countries() {
      return this.$store.state.auth.country;
    },
  },

  mounted() {
    console.log("profileId", this.profileId);
    this.url = this.profileId;
    this.DefaultPayment();
  },

  methods: {
    showRewiew() {
      this.$emit("showreview");
    },

    Country() {
      this.$store
        .dispatch("auth/country")
        .then(() => {
          console.log(this.countries);
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    requestPayment() {
      console.log("requestPayment");
      console.log("this.operator", this.operator);
      this.RequestPayment = !this.RequestPayment;
      if (this.operator !== "") this.$emit("requestpayment", this.operator);
    },

    DefaultPayment() {
      console.log("defaultPayment");
      this.$store
        .dispatch("profileSettingsEdit/getDefaultPayment", {
          path: `payment-method`,
        })
        .then(() => {
          console.log(this.defaultPayment);
          this.PaymentForm.operator = this.defaultPayment.payment_method;
          this.PaymentForm.phone = this.defaultPayment.phone;
          console.log("ohh yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    confirmDefaltPayment() {
      this.show = true;
      console.log("PaymentForm:", this.PaymentForm);
      let formData = new FormData();
      formData.append("payment_method", this.PaymentForm.operator);
      formData.append("phone", this.PaymentForm.phone);
      this.$store
        .dispatch("profileSettingsEdit/confirmPayment", {
          path: `update-payement-method`,
          formData: formData,
        })
        .then(({ data }) => {
          console.log(data);
          console.log("ohh yeah");
          this.AcRequestPayment = false;
          this.show = false;
          this.DefaultPayment();
          this.flashMessage.show({
            status: "success",
            message: this.$t("businessowner.Payment_Complete"),
          });
        })
        .catch((err) => {
          this.AcRequestPayment = false;
          this.show = false;
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: this.$t("businessowner.Unable_Complete_Payment"),
          });
        });
    },

    formatMoney(money) {
      return this.formatObject.format(money);
    },
  },
};
</script>

<style scoped>
.descrip {
  font-size: 14px;
}
.btn-custom {
  height: 38px;
  min-width: 123px;
  font-size: 14px;
}
</style>
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