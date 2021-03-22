<template>
  <b-container class="container-fluid">
    <b-container class="">
      <b-container class="">
        <h5 class="a-text"><b-icon-gear></b-icon-gear> Business Settings</h5>
      </b-container>

      <b-container class="bv-example-row">
        <div>
          <b-tabs pills card vertical>
            <b-tab active>
              <template slot="title" class="t-color">
                <h6 class="t-color">General</h6>
              </template>

              <b-card-text> <General /> </b-card-text
            ></b-tab>

            <b-tab>
              <template slot="title" class="t-color">
                <h6 class="t-color">Business Info</h6>
              </template>
              <b-card-text> <Info /> </b-card-text
            ></b-tab>

            <b-tab>
              <template slot="title" class="t-color">
                <h6 class="t-color">Business Roles</h6>
              </template>
              <b-card-text> <Roles /> </b-card-text
            ></b-tab>

            <b-tab>
              <template slot="title" class="t-color">
                <h6 class="t-color">Payment</h6>
              </template>

              <b-card-text> <Payment /> </b-card-text
            ></b-tab>

            <b-tab>
              <template slot="title" class="t-color">
                <h6 class="t-color">Website</h6>
              </template>

              <b-card-text> <Website /> </b-card-text
            ></b-tab>
            <b-tab>
              <template slot="title" class="t-color">
                <h6 class="t-color">Blocking</h6>
              </template>

              <b-card-text> <Blocking /> </b-card-text
            ></b-tab>
          </b-tabs>
        </div>
      </b-container>

      <br />

      <br />
    </b-container>
  </b-container>
</template>

<script>
import General from "@/components/businessf/settings/general";

import Roles from "@/components/businessf/settings/roles";

import Info from "@/components/businessf/settings/info";

import Website from "@/components/businessf/settings/website";

import Payment from "@/components/businessf/settings/payment";

import Blocking from "@/components/businessf/settings/blocking";

export default {
  name: "settings",
  components: {
    General,
    Roles,

    Info,
    Website,
    Payment,
    Blocking
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.card-header {
  background-color: white;
}

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

.t-color {
  color: black;
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
