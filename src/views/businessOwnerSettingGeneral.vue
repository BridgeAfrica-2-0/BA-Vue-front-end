<template>
  <b-container class="container-fluid">
    <navbar />
    <b-container fluid="xl" class="text-justify">
      <b-row>
        <a class="settings" href="#">Settings</a>
        <b-tabs content-class="mt-3">
          <b-tab :title="$t('general.Business')"> </b-tab>

          <b-tab :title="$t('general.Inbox')"> </b-tab>
          <b-tab :title="$t('general.Notification')"> </b-tab>

          <b-tab :title="$t('general.Pending_Post')"> </b-tab>

          <b-tab :title="$t('general.Insights')"> </b-tab>
        </b-tabs>
      </b-row>
    </b-container>

    <b-container class="">
      <b-container class="">
        <h5 class="a-text"><b-icon-gear></b-icon-gear> {{$t('general.Business_Settings')}}</h5>
      </b-container>

      <b-container class="bv-example-row">
        <div>
          <b-tabs pills card vertical>
            <b-tab :title="$t('general.General')" active
              ><b-card-text> <General /> </b-card-text
            ></b-tab>

            <b-tab :title="$t('general.Business_Info')"
              ><b-card-text> <Info /> </b-card-text
            ></b-tab>

            <b-tab :title="$t('general.Business_Roles')"
              ><b-card-text> <Roles /> </b-card-text
            ></b-tab>

            <b-tab title="$t('general.Payment') "
              ><b-card-text> <Payment /> </b-card-text
            ></b-tab>
            <b-tab title="$t('general.Website') "
              ><b-card-text> <Website /> </b-card-text
            ></b-tab>
            <b-tab title="$t('general.Blocking') "
              ><b-card-text> <Blocking /> </b-card-text
            ></b-tab>
          </b-tabs>
        </div>
      </b-container>

      <br />

      <br />
      style
      <Footer />
    </b-container>
  </b-container>
</template>

<script>
import navbar from "@/components/navbar";
//import Business from "../components/businessf/business";
import General from "../components/businessf/settings/general";

import Roles from "../components/businessf/settings/roles";

import Info from "../components/businessf/settings/info";

import Website from "../components/businessf/settings/website";

import Payment from "../components/businessf/settings/payment";

import Blocking from "../components/businessf/settings/blocking";

import Footer from "../components/footer";
export default {
  name: "businessOwnerSettingBlocking",
  components: {
    navbar,
    General,
    Website,
    Info,
    Blocking,
    Payment,
    Roles,

    Footer
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.b-bottom {
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 10px;

  border-bottom: 0.5px solid;
  border-color: gray;
}

.b-bottomn {
  margin-top: -20px;
  margin-bottom: 30px;
  padding-bottom: 10px;
}

.card-header {
  background-color: white;
}

.f-right {
  float: right;
}

.f-left {
  float: left;
}

.tabs {
  width: 100%;
}

.a-button-l {
  margin-bottom: 1000px;
  align-content: right;
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
