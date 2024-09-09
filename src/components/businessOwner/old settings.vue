<template>
  <div>
    <div class="">
      <div class="">
        <h5 class="a-text"><b-icon-gear></b-icon-gear> Business Settings</h5>
      </div>
      <hr class="solid" />

      <div class="bv-example-row">
        <div>
          <b-tabs
            pills
            :vertical="vertical"
            :card="card"
            v-model="tabIndex"
            class="itzlala"
          >
            <b-tab active>
              <template slot="title" class="t-color">
                <h6 class="t-color">General</h6>
              </template>

              <b-card-text> <General /> </b-card-text
            ></b-tab>

            <b-tab active>
              <template slot="title" class="t-color">
                <h6 class="t-color">Notifications</h6>
              </template>

              <b-card-text> <Notification /> </b-card-text
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
                <h6 class="t-color">{{ $t("search.Insight") }}</h6>
              </template>
              <b-card-text> <Insight /> </b-card-text
            ></b-tab>

            <b-tab>
              <template slot="title" class="t-color">
                <h6 class="t-color">Pending Post</h6>
              </template>
              <b-card-text> <Pending /> </b-card-text
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

          <b-button @click="tabIndex = 1">Previous</b-button>
          <b-button @click="tabIndex = 4">Next</b-button>
        </div>
      </div>

      <br />

      <br />
    </div>
  </div>
</template>

<script>
import General from "@/components/businessf/settings/general";

import Roles from "@/components/businessf/settings/roles";

import Info from "@/components/businessOwner/settings/info";

import Website from "@/components/businessOwner/settings/website";

import Payment from "@/components/businessOwner/settings/payment";

import Blocking from "@/components/businessf/settings/blocking";
import Notification from "@/components/businessOwner/notification";

import Pending from "@/components/businessOwner/pending";
import Insight from "@/components/businessOwner/insight";

export default {
  name: "settings",
  components: {
    General,
    Roles,
    Notification,
    Pending,

    Insight,
    Info,
    Website,
    Payment,
    Blocking
  },

  data() {
    return {
      size: 0,
      tabIndex: 1
    };
  },

  computed: {
    vertical() {
      if (this.size > 992) return true;
      return false;
    },

    card() {
      if (this.size > 992) return true;
      return false;
    }
  },
  methods: {},
  mounted() {
    var that = this;
    window.onresize = function() {
      that.size = window.innerWidth;
    };
  }
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

@media only screen and (max-width: 768px) {
  .t-color {
    color: black;
    font-size: 12px;
  }
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

<style>
@media only screen and (max-width: 768px) {
  .itzlala .nav-link {
    display: block;
    padding: 4px;
  }
}
</style>
