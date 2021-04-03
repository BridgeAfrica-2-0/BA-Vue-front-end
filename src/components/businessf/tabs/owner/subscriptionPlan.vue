<template>
  <div>
    <b-row class="mb-5">
      <b-col cols="12">
        <div class="h-100 w-100">
          <div class="mx-auto text-center my-5">
            <h3 class="my-3 font-weight-bolder">
              Subscription Plan
            </h3>
            <p class="my-2">
              Upgrade your plans to get exciting features
            </p>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <b-row>
              <b-col cols="4" class="text-center my-auto">
                <b-icon-check-square
                  scale="3"
                  class="icon-check"
                ></b-icon-check-square>
              </b-col>
              <b-col cols="8" class="text-justify pl-5">
                <p class="title-plan">Basic</p>
                <h1 class="subtitle-plan">Free</h1>
              </b-col>
            </b-row>
          </template>

          <div class="text1">
            <h5 class="font-weight-bold">Subdomain URL</h5>
            <p>http://website.com</p>
          </div>
          <div class="text1">
            <h5 class="font-weight-bold">Ticket Support</h5>
          </div>
          <div class="text1">
            <h5 class="font-weight-bold">
              Brige Africa Content <br />Intergration
            </h5>
          </div>
          <div class="btn-wrap free text-center">
            <a href="#" class="btn-buy"></a>
            <b-button class="btn-block font-weight-bold">Current Plan</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col md="4" class="plan-2">
        <b-button class="btn-block font-weight-bold" variant="primary"
          >Most Popular</b-button
        >
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <b-row>
              <b-col cols="4" class="text-center my-auto">
                <b-icon-check-square
                  scale="3"
                  class="icon-check"
                  v-if="choice"
                ></b-icon-check-square>
              </b-col>
              <b-col cols="8" class="text-justify pl-2">
                <p class="title-plan">Advanced</p>
                <h3 class="subtitle-plan">$00/month</h3>
              </b-col>
            </b-row>
          </template>

          <div class="text1">
            <h5 class="font-weight-bold">Subdomain URL</h5>
            <p>http://website.com</p>
          </div>
          <div class="text1">
            <h5 class="font-weight-bold">Ticket Support</h5>
          </div>
          <div class="text1">
            <h5 class="font-weight-bold">
              Brige Africa Content <br />Intergration
            </h5>
          </div>
          <div class="text1">
            <h5 class="font-weight-bold">Premium Template</h5>
          </div>
          <div class="text1">
            <h5 class="font-weight-bold">Remove Ads</h5>
          </div>
          <div class="btn-wrap free2 text-center">
            <a href="#" class="btn-buy"></a>
            <b-button class="btn-block font-weight-bold" variant="primary"
              >Subscribe Now</b-button
            >
          </div>
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card header-tag="header" footer-tag="footer" class="mt-2 pt-1">
          <template #header>
            <b-row>
              <b-col cols="4" class="text-center my-auto">
                <b-icon-check-square
                  scale="3"
                  class="icon-check"
                  v-if="choice"
                ></b-icon-check-square>
              </b-col>
              <b-col cols="8" class="text-justify pl-1">
                <p class="title-plan">Advanced</p>
                <h3 class="subtitle-plan">$12/month</h3>
              </b-col>
            </b-row>
          </template>

          <div class="text1">
            <h5 class="font-weight-bold">Subdomain URL</h5>
            <p>http://website.com</p>
          </div>
          <div class="text1">
            <h5 class="font-weight-bold">Ticket Support</h5>
          </div>
          <div class="text1">
            <h5 class="font-weight-bold">
              Brige Africa Content <br />Intergration
            </h5>
          </div>
          <div class="text1">
            <h5 class="font-weight-bold">Premium Template</h5>
          </div>
          <div class="text1">
            <h5 class="font-weight-bold">Remove Ads</h5>
          </div>
          <div class="text1">
            <h5 class="font-weight-bold">Free Domain for 1 year</h5>
            <p>S0 Value</p>
          </div>
          <div class="text1">
            <h5 class="font-weight-bold">Connect Your domain</h5>
          </div>
          <div class="text1">
            <h5 class="font-weight-bold">SSL Certificate</h5>
          </div>

          <div class="text1">
            <h5 class="font-weight-bold">Premium Support</h5>
            <p>email, phone</p>
          </div>
          <div class="btn-wrap free3 text-center">
            <a href="#" class="btn-buy"></a>
            <b-button class="btn-block font-weight-bold" variant="primary"
              >Subscribe Now</b-button
            >
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "subscriptionPlan",
  components: {},
  data() {
    return {
      choice: false
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.title-plan {
  color: #e75c18;
  margin-bottom: 0px;
  padding-left: 20px;
}

.subtitle-plan {
  color: #000;
  margin-top: 0px;
  margin-bottom: 5px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}

.icon-check {
  color: #30d61e;
  font-weight: bolder;
}

.text1 {
  border-bottom: 1px solid #e6e6e6;
  padding-top: 10px;
  padding-bottom: 4px;
  color: #7e7d7d;
  text-align: center;
}

.btn-wrap.free {
  margin-top: 128%;
}

.btn-wrap.free2 {
  margin-top: 109%;
}

.btn-wrap.free3 {
  margin-top: 11%;
}

.plan-2 {
  margin-top: -60px;
}
</style>
