<template>
  <div>  
    <div class="mt-3 d-block d-md-none" v-if="selectedIdd == '0'">
      <div class="d-block d-md-none" style="margin-top: 30px">
        <ly-tab
          v-model="seetings_id"
          :items="items"
          :options="options"
          class="center-ly"
          vertical
        >
        </ly-tab>
      </div>

      <div class="mt-3 d-block d-md-none" v-if="seetings_id == '0'">
        <General />
      </div>

    

      <div class="mt-3 d-block d-md-none" v-if="seetings_id == '3'">
        <Payment />
      </div>

      <div class="mt-3 d-block d-md-none" v-if="seetings_id == '2'">
        <Roles />
      </div>

      <div class="mt-3 d-block d-md-none" v-if="seetings_id == '1'">
        <Info />
      </div>

      <div class="mt-3 d-block d-md-none" v-if="seetings_id == '4'">
        <Blocking />
      </div>
    </div>

    <div class="mt-3 d-block d-md-none" v-if="selectedIdd == '6'">
      <Notification />
    </div>

    <div class="mt-3 d-block d-md-none" v-if="selectedIdd == '7'">
      <Insight />
    </div>

    <div class="mt-3 d-block d-md-none" v-if="selectedIdd == '8'">
      <Pending />
    </div>

    <b-row class="center-content d-none d-md-block" v-if="window.width >= 768">
      <b-col cols="10">
        <div class="bv-example-row">
          <div>
            <b-tabs
              lazy
              pills
              v-model="tabIndex"
              vertical
              class="itzlala"
              nav-wrapper-class="w-15"
            >
              <b-tab :title="$t('businessowner.General')">
                <b-card-text> <General /> </b-card-text
              ></b-tab>

              <b-tab :title="$t('businessowner.Notification')">
                <b-card-text> <Notification /> </b-card-text
              ></b-tab>

              <b-tab :title="$t('businessowner.Business_Info')">
                <b-card-text> <Info /> </b-card-text
              ></b-tab>

              <b-tab :title="$t('businessowner.Business_Roles')">
                <b-card-text> <Roles /> </b-card-text
              ></b-tab>

              <b-tab :title="$t('businessowner.Insight')" *ngIf="isPremium">
                <b-card-text> <Insight /> </b-card-text
              ></b-tab>

              <b-tab :title="$t('businessowner.Pending_Post')" *ngIf="isPremium">
                <b-card-text> <Pending /> </b-card-text
              ></b-tab>

              <b-tab :title="$t('businessowner.Payment')">
                <b-card-text> <Payment /> </b-card-text
              ></b-tab>
              <b-tab :title="$t('businessowner.Blocking')">
                <b-card-text> <Blocking /> </b-card-text
              ></b-tab>
            </b-tabs>
          </div>
        </div>

        <br />

        <br />
      </b-col>
      <b-col cols="2"> </b-col>
    </b-row>
  </div>
</template>

<script>
import General from "@/components/businessOwner/settings/general";

import Roles from "@/components/businessOwner/settings/roles";

import Info from "@/components/businessOwner/settings/info";

import Payment from "@/components/businessOwner/settings/payment";

import Blocking from "@/components/businessOwner/settings/blocking";
import Notification from "@/components/businessOwner/notification";
import LyTab from "@/tab/src/index.vue";
import Pending from "@/components/businessOwner/pending";
import Insight from "@/components/businessOwner/insight";
import { isPremium } from '@/helpers';

export default {
  name: "settings",

  props: ["currenttab"],

  watch: {
    currenttab: {
      immediate: true,
      handler(newVal, oldVal) {
        
        if (newVal == 3) {
          this.selectedIdd = "8";
          this.tabIndex = "5";
        }

        if (newVal == 2) {
          this.selectedIdd = "6";
          this.tabIndex = "1";
        }

        if (newVal == 4) {
          this.selectedIdd = "7";
          this.tabIndex = "4";
        }

        if (newVal == 5) {
          this.selectedIdd = "0";
          this.tabIndex = "0";
        }

        if (newVal == 6) {
          console.log(newVal);
          this.selectedIdd = "6";
          this.tabIndex = "7";
        }
      },
    },
  },

  components: {
    General,
    Roles,
    Notification,
    Pending,
    LyTab,
    Insight,
    Info,
    // Website,
    Payment,
    Blocking,
  },

  data() {
    return {
      size: 0,
      tabIndex: 1,
      selectedIdd: 0,
      seetings_id: 0,
      bottomSelectedId: 0,
      window: {
        width: 0,
        height: 0,
      },
      
      items: [
        { label: "General" },

        { label: "Business Info" },
        { label: "Business Roles" },
        { label: "payment " },

        { label: "Blocking" },
      ],
      options: {
        activeColor: "#1d98bd",
      },
      isPremium: isPremium()
    };
  },

  


   mounted() {
    var that = this;
    window.onresize = function() {
      that.size = window.innerWidth;
    };
  },

 created(){
   window.addEventListener("resize", this.handleResize);
    this.handleResize();
 }, 

   destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
     handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },

  },
};
</script>

<style scoped>
.border-none { 
  border: none;
}
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
    font-size: 16px;
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

.center-content {
  padding-right: 20px;
  padding-left: 20px;
}

.w-15 {
  width: 15%;
}

.card-text {
  margin-left: 100px;
}

.t-color:hover {
  color: #cc4d0d;
}

t-color:focus {
  color: #f1eae7;
}

t-color.active {
  color: #f1eae7;
}

.nav-link:hover,
.nav-link:focus {
  text-decoration: none;
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
