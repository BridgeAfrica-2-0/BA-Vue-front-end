<template>
  <b-container>
    <b-container>
      <p class="text">
       Sélectionnez un mode de paiement pour votre compte bridget afrique
      </p>
    </b-container>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Pays"
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
      <b-form-group v-slot="{ ariaDescribedby }">
        <b-form-radio id="mtn" name="mtn" class="text" value="mtn">MTN Mobile Paiement</b-form-radio>
        <br />
        <b-form-radio id="Mobile Payment" name="mobile-payment" value="mobile-money" class="text">
          Orange Mobile Paiement
        </b-form-radio>

        <br />

        <b-form-radio
          :aria-describedby="ariaDescribedby"
          id="Credit-card"
          name="credit-card"
          class="text"
          value="credit-card"
        >
          Express Union</b-form-radio
        >

        <br />

        <b-form-radio
          :aria-describedby="ariaDescribedby"
          id="Credit-card"
          name="credit-card"
          class="text"
          value="credit-card"
        >
          GIMAC
        </b-form-radio>
      </b-form-group>

      <div class=" mb-0">
        <p class="text">
          Vos informations de paiement sont sécurisées
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
