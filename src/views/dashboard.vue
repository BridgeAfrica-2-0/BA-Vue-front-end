<template>
  <div style="overflow-x:hidden">
    <navbar></navbar>

    <div class="text-justify  p-card ">
      <CarousselDashboard class="mm-top" /> <br />

      <br />

      <div v-if="selectedb == 'owner'">
        <b-card class=" border shadow hselect">
          <b-row>
            <b-col md="6" sm="12" class="">
              <h6 class="font-weight-bolder text-design">
                Use Bridge Africa as Yourself or as one of your businesses
              </h6>
            </b-col>
            <b-col sm="12" md="6" class="mb-3">
              <b-form-select
                v-model="selectedb"
                :options="boptions"
              ></b-form-select>
            </b-col>
          </b-row>
        </b-card>
        <br />
      </div>

      <div v-if="selectedb == 'owner'">
        <b-row class=" p-0">
          <b-col md="6" sm="12" class="mt-2 "> <Profile /> </b-col>
          <b-col md="6" sm="12" class="mt-2  "> <EmptyBusiness /> </b-col>
        </b-row>
        <br />
      </div>

      <div v-if="selectedb != 'owner'">
        <b-row>
          <b-col md="6" sm="12" class="mt-2">
            <div>
              <b-card class=" border shadow" style="height:350px">
                <h6 class="font-weight-bolder text-design">
                  Use Bridge Africa as Yourself or as one of your businesses
                </h6>
                <b-form-select
                  v-model="selectedb"
                  :options="boptions"
                ></b-form-select>
              </b-card>
            </div>
          </b-col>
          <b-col md="6" sm="12" class="mt-2"> <Map /> </b-col>
        </b-row>

        <br />
      </div>

      <div v-if="selectedb != 'owner'">
        <b-row>
          <b-col md="6" sm="12" class="mt-2">
            <BusinessDashboard :selectedb="selectedb" />
          </b-col>
          <b-col md="6" sm="12" class="mt-2"> <Insights /> </b-col>
        </b-row>
      </div>
      <br />

      <b-row>
        <comuniti-dashboard class="m-component m-3"></comuniti-dashboard> <br />
      </b-row>

      <div>
        <b-row>
          <b-col sm="12" lg="8" class="mt-3"> <CommunityActivity /> </b-col>
          <b-col sm="12" lg="4" class="mt-3"> <Tutorial /> </b-col>
        </b-row>
      </div>
      <br />

      <div>
        <b-row>
          <b-col sm="12" lg="6" class="mt-3">
            <b-card class="border shadow card  card-hight">
              <h6 class=" titlle">
                <fas-icon
                  class="icons"
                  :icon="['fas', 'hands-helping']"
                  size="lg"
                />
                <b> HOT BUSINESSES </b>
              </h6>

              <div class="  p-tab">
                <Business />
              </div>
            </b-card>
          </b-col>
          <b-col sm="12" lg="6" class="mt-3">
            <b-card class="border shadow  card card-hight">
              <h6 class=" titlle">
                <fas-icon
                  class=" icons"
                  :icon="['fas', 'project-diagram']"
                  size="lg"
                />
                <b> POPULAR NETWORKS </b>
              </h6>

              <div class=""><Popularnetwork /></div>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";

import CarousselDashboard from "@/components/dasboard/carousselDashboard";

import BusinessDashboard from "@/components/dasboard/businessDashboard";

import ComunitiDashboard from "@/components/dasboard/comunitiDashboard";

import Insights from "@/components/dasboard/insights";

import CommunityActivity from "@/components/dasboard/communityActivity";

import Tutorial from "@/components/dasboard/tutorial";

import Profile from "@/components/dasboard/profile";

import Business from "@/components/dasboard/communitybusiness";

import Map from "@/components/dasboard/map";

import EmptyBusiness from "@/components/dasboard/emptybusiness";

import Popularnetwork from "@/components/dasboard/popularnetwork";
export default {
  name: "dashboard",

  data() {
    return {
      slide: 0,

      sliding: null,

      selectedb: "owner",

      map: false,

      category: "",

      boptions: [],

      detail: null
    };
  },

  components: {
    ComunitiDashboard,
    BusinessDashboard,
    Business,
    CommunityActivity,
    Tutorial,
    Insights,
    Popularnetwork,
    Map,
    EmptyBusiness,
    Profile,
    CarousselDashboard,
    Navbar
  },

  methods: {
    getbusiness() {
      this.boptions.push({
        text: this.$store.getters.getdetails.owner[0].name,
        value: "owner"
      });
      console.log("load data from dashboard++++++++++++");
      console.log(
        JSON.parse(JSON.stringify(this.$store.getters.getdetails)).business
      );
      let businesses = JSON.parse(
        JSON.stringify(this.$store.getters.getdetails)
      ).business;
      console.log(businesses);
      businesses = businesses.map(value => {
        this.boptions.push({ text: value.name, value: value.id });
        return value;
      });
      console.log(businesses);
      return this.boptions;
    }
  },

  mounted() {},

  created() {
    this.$store.dispatch("getdetails").then(response => {
      console.log(response, "+++++++++pop");
      this.getbusiness();
    });
  },

  computed: {
    details() {
      return this.$store.getters.getdetails;
    }
  },
  watch: {
    selectedb(newvalue) {
      console.log(newvalue);
    }
  }
};
</script>

<style>
.icon-color {
  color: #e75c18;
}

.icons {
  color: #e75c18;
  width: 24px;
}
</style>

<style scoped>
.card-body {
  padding: 8px;
}

.card {
  padding: 0px;
  padding-top: 15px;
}

@media only screen and (min-width: 768px) {
  .titlle {
    font-size: 20px;
  }
}

@media only screen and (max-width: 768px) {
  .titlle {
    font-size: 16px;
  }
}

.card-hight {
  height: 550px;
  overflow-y: auto;
  overflow-x: hidden;
}

.logo-img {
  width: 60px;
}

@media only screen and (max-width: 768px) {
  h4 {
    font-size: 15px;
  }

  .logo-img {
    width: 30px;
  }
  .see-all-link {
    font-size: 10px;
  }
}

.p-card {
  margin: 2px;

  border: 0px;
}

.search-form {
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: right;
}

.m-component {
  margin: -20px;
}

.w-50 {
  width: 50%;
  height: 50px;
}

select option {
  margin: 40px;
  background: white;
  color: black;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}

.wi-25 {
  width: 25%;
  height: 50px;
}

.b-groupe {
  background-color: orangered;

  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-style: none;
  color: white;
}

.custom-select {
  display: inherit;
}

.color-sit {
  color: white;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

.a-center {
  align-content: center;
  text-align: center;

  margin-top: 15px;
}

.div-h {
  height: 350px;
  overflow: auto;
  overflow-x: hidden;
}
</style>
