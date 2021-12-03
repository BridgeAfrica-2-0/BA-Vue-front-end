<template>
  <div>
    <b-row class="mb-3">
      <b-col cols="12">
        <div class="h-100 w-100">
          <div class="mx-auto text-center my-5">
            <h4 class="my-3 font-weight-bolder">
              {{ $t('businessowner.Confirm_Payment') }}
            </h4>
            <p class="my-2">
              {{ $t('businessowner.Upgrade_your_plans_to_get_excting_features') }} 
            </p>
          </div>
        </div>
      </b-col>
    </b-row>
    <div class="paiement-receipt p-md-4 p-2">
      <b-row>
        <b-col cols="12">
          <p class="text-center">
            <span>{{ $t('businessowner.Monthly_Payment') }}</span>
            <b-form-checkbox
              switch
              size=""
              v-model="selected"
              class="ml-2 d-inline-block"
              button-variant="primary"
            ></b-form-checkbox>
            <span>{{ $t('businessowner.Annual_Payment') }}</span>
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p class="m-0 p-0">
            <span class="text-left">
              <b>{{ $t('businessowner.Premium_Plan') }}</b>
            </span>
            <span class="float-right">
              <b>$ 00</b>
            </span>
          </p>
          <p class="font-italic m-0 p-0">
            <span class="float-left">
              {{ $t('businessowner.Expiry') }}: 1 {{ $t('businessowner.Month') }} (dd/MM/YY - dd/MM/YY)
            </span>
          </p>
        </b-col>
      </b-row>
      <hr width="80%" class="row-step" />
      <b-row class="mt-4">
        <b-col>
          <p class="m-0 p-0">
            <span class="text-left">
              <b>{{ $t('businessowner.Selected_Payment_Method') }}</b>
            </span>
            <span class="float-right">
              <b>{{ $t('businessowner.Sub_Total') }} $ 00</b>
            </span>
          </p>
          <p class="m-0 p-0 mt-3">
            <span class="text-left">
              <img
                src="https://business.bridgeafrica.info/assets/img/credit-cards-logos_635.png"
                width="150"
                class="mr-2"
                alt=""
              />{{ $t('businessowner.Credit_Card') }} <a href="">({{ $t('businessowner.Change') }})</a>
            </span>
            <span class="float-right">
              <b>{{ $t('businessowner.Taxes') }} $ 00</b>
            </span>
          </p>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col class="mt-3">
          <p class="m-0 p-0">
            <span class="text-left">
              <b
                ><b-form-checkbox class="d-inline-block"
                  >{{ $t('businessowner.Automatically_renew_subscription_until_i_turn_it_off') }}
                  </b-form-checkbox
                ></b
              >
            </span>
            <span class="float-right">
              <b>{{ $t('businessowner.Total_Payble') }}</b>
            </span>
          </p>
          <p class="m-0 p-0 mt-3">
            <span class="text-left"> </span>
            <span class="float-right">
              <b class="total">$ 00</b>
            </span>
          </p>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col class="mt-2">
          <p class="m-0 p-0">
            <span class="text-left">
              <b-icon-info-circle-fill
                scale="1.3"
                class="mr-2"
                variant="primary"
              ></b-icon-info-circle-fill>
              {{ $t('businessowner.By_confirming_you_agree_to_Terms_conditions') }}
              <a href="">{{ $t('businessowner.Read_more') }}</a>
            </span>
            <span class="float-right">
              <b></b>
            </span>
          </p>
        </b-col>
      </b-row>
    </div>
    <b-row class="mt-4 mb-3">
      <b-col cols="12" class="m-0 pr-3">
        <b-button variant="outline-dark" class="ml-3 float-right"
          >{{ $t('businessowner.Cancel') }}</b-button
        >
        <b-button variant="primary" class="ml-3 float-right">{{ $t('businessowner.Confirm') }}</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "validatePay",
  data() {
    return {
      selected: true
    };
  }
};
</script>

<style scoped>
.paiement-receipt {
  background-color: #e6e6e6;
}
.row-step {
  height: 1px;
  margin: 1rem 0 0 0;
  content: "";
  background-color: rgb(0 0 0);
  width: 100%;
}
.total {
  font-size: 30px;
}
</style>
