<template>
  <b-container>
    <b-container>
      <p class="a-text">
        Select a payment method for your bridget africa account
      </p>
    </b-container>

    <b-container class="payment-type">
      <b-form-group v-slot="{ ariaDescribedby }">
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" id="Paypal" name="paypal" value="paypal"
          >Paypal</b-form-radio
        >
        <br />
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          id="Mobile Payment"
          name="mobile-payment"
          value="mobile-money"
        >
          Mobile Payment
        </b-form-radio>
        <br />
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          id="Credit-card"
          name="credit-card"
          value="credit-card"
          >Credit/Debit card</b-form-radio
        >
      </b-form-group>

      <div class="payment-image col-md-6">
        <img class="mb-2 img-fluid" src="@/assets/img/credit-cards-logos.png" alt="Fluid image" />
      </div>

      <b-container class="h-background">
        <div class="account-headnig">
          <h3 class="heading-user h3-color">4755-xxxx-xxxx</h3>
          <p class="card-name">123456789</p>
        </div>
      </b-container>

      <div class=" mb-0">
        <b-icon icon="plus" class="b-color"></b-icon>
        <b-link href="#">Add new Credit/Debit card</b-link>
      </div>
      <br />

      <div class=" mb-0">
        <p>
          <b-icon icon="lock" class="b-color"></b-icon> Your payment information is secure,
          <b-link href="#">Read more</b-link>
        </p>
      </div>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'payment',
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
  margin-top: -60px;
  float: right;
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
