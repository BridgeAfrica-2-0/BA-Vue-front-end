<template>
  <b-container>
    <b-container>
      <p class="text">
        {{$t("businessowner.Select_a_payment_method_for_your_bridget_africa_account")}}
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

              
                <country-select v-model="country" :country="country" topCountry="US"  class="form-control text" />

              </b-form-group>


            </b-container>
          </div>


  <br />

    <b-container class="payment-type">
      <b-form-group v-slot="{ ariaDescribedby }">
        <b-form-radio
          id="mtn"
          name="mtn"
          class="text"
          value="mtn"
          >{{$t("businessowner.MTN_Mobile_Payment")}}</b-form-radio
        >
        <br />
        <b-form-radio
       
          id="Mobile Payment"
          name="mobile-payment"
          value="mobile-money"
           class="text"
        >
         {{$t("businessowner.Orange_Mobile_Payment")}}
        </b-form-radio>

        <br />
      

         <b-form-radio
          
          :aria-describedby="ariaDescribedby"
          id="Credit-card"
          name="credit-card"
           class="text"
           
          value="credit-card"
          >{{$t("businessowner.Express_Union")}}</b-form-radio
        >





      
        <br />
      

         <b-form-radio
          
          :aria-describedby="ariaDescribedby"
          id="Credit-card"
          name="credit-card"
           class="text"
          value="credit-card"
          > GIMAC </b-form-radio
        >


      </b-form-group>

      

     


      <div class=" mb-0">
        <p class="text">
           {{$t("businessowner.Your_payment_information_is_secure")}}
        </p>
      </div>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "payment"
};
</script>

<style scoped>
.payment-type {
  background-color: #f7f7f7;
  padding: 4px 15px;
  text-align: left;
}


.h3-color{
  color: #000;
}


.b-color{
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
