<template>
  <div style="overflow-x: hidden" class="dashboard">
    <navbar></navbar>

    <div class="text-justify p-card pr-1">
      <CarousselDashboard class="mm-top" /> <br />

      <div v-if="selectedb == 'owner'"> 
        <b-card class="border shadow hselect">
          <b-row>
            <b-col md="6" sm="12" class="">     
              <h6 class="font-weight-bolder text-design text-center t-center">
                {{
                  $t(
                    "dashboard.Use_Bridge_Africa_as_Yourself_or_as_one_of_your_businesses"
                  )
                }}
              </h6>
            </b-col>
            <b-col sm="12" md="6" class="mb-3">
              <div class="container">
                <b-form-select
                  v-model="selectedb"
                  class="mr-3"
                  :options="boptions"
                  @input="switchBusiness"
                ></b-form-select>
              </div>
            </b-col>
          </b-row>
        </b-card>
        <br />
      </div>

      <div v-if="selectedb == 'owner'">
        <b-row class="p-0">
          <b-col md="6" sm="12" class="mt-2"> <Profile /> </b-col>
          <b-col md="6" sm="12" class="mt-2"> <EmptyBusiness /> </b-col>
        </b-row>
        <br />
      </div>

      <div v-if="selectedb != 'owner'">
        <b-row>
          <b-col md="6" sm="12" class="mt-2">
            <div>
              <b-card class="border shadow pr-3" style="height: 350px">
                <h6 class="font-weight-bolder text-design">
                  {{
                    $t(
                      "dashboard.Use_Bridge_Africa_as_Yourself_or_as_one_of_your_businesses"
                    )
                  }}
                </h6>
                <b-form-select
                  v-model="selectedb"
                  @input="switchBusiness"
                  :options="boptions"
                ></b-form-select>
              </b-card>
            </div>
          </b-col> 
          <b-col md="6" sm="12" class="mt-2" > 
             <b-card class=" border shadow pr-3" style="height:350px">
              <h6 class="title">
                <fas-icon class="icons" :icon="['fas', 'map-marker-alt']" size="lg" />
                <b>  {{$t('dashboard.get_direction').toUpperCase()}} </b>
              </h6>
            <!-- <Map />  --> 
            <div v-if="selectedBusiness"> 
            <mapbox :business="selectedBusiness" />

            </div>
            </b-card>
            </b-col>
        </b-row>

        <br />
      </div>

      <div v-if="selectedb != 'owner'">
        <b-row>
          <b-col md="6" sm="12" class="mt-2">
            <BusinessDashboard :selectedb="selectedb" />
          </b-col>
          <b-col md="6" sm="12" class="mt-2">
            <Insights :selectedb="selectedb" />
          </b-col>
        </b-row>
      </div>

      <div class="com-dash">
        <comuniti-dashboard
          v-if="selectedb == 'owner'"
          class="m-component m-3"
        ></comuniti-dashboard>

        <comuniti-Bdashboard
          v-if="selectedb != 'owner'"
          class="m-component m-3"
        ></comuniti-Bdashboard>
      </div>

      <div>
        <b-row>
          <b-col sm="12" lg="7" class="">
            <CommunityActivity v-if="selectedb == 'owner'" />
            <CommunityBactivity v-if="selectedb != 'owner'" />
          </b-col>
          <b-col sm="12" lg="5" class=""> <Tutorial /> </b-col>
        </b-row>
      </div>

      <div class="mt-3">
        <b-row>
          <b-col sm="12" lg="6" class="">
            <b-card class="border shadow card card-hight">
              <h6 class="titlle">
                <fas-icon
                  class="icons"
                  :icon="['fas', 'hands-helping']"
                  size="lg"
                />
                <b> {{ $t("dashboard.HOT_BUSINESSES").toUpperCase() }}</b>
              </h6>

              <div class="p-tab">
                <Business />
              </div>
            </b-card>
          </b-col>
          <b-col sm="12" lg="6" class="">
            <b-card class="border shadow card card-hight">
              <h6 class="titlle">
                <fas-icon
                  class="icons"
                  :icon="['fas', 'project-diagram']"
                  size="lg"
                />
                <b> {{ $t("dashboard.POPULAR_NETWORKS").toUpperCase() }}</b>
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

import ComunitiBdashboard from "@/components/dasboard/comunitiBdashboard";

import Insights from "@/components/dasboard/insights";
import CommunityActivity from "@/components/dasboard/communityActivity";

import CommunityBactivity from "@/components/dasboard/communityBactivity";

import Tutorial from "@/components/dasboard/tutorial";
import Profile from "@/components/dasboard/profile";

import Business from "@/components/dasboard/hotbusiness";

// import Map from "@/components/dasboard/map";
import EmptyBusiness from "@/components/dasboard/emptybusiness";
import Popularnetwork from "@/components/dasboard/popularnetwork";
import mapbox from "@/components/mapbox";
import { WhoIsIt } from "@/mixins";

import { mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "dashboard",
  
  mixins: [WhoIsIt],

  data() {
    return {
      slide: 0,
      sliding: null,
      url_data: null,
      selectedb: "owner",
      map: false,
      category: "",
      boptions: [],
      detail: null,
      data1: null
    };
  },

  components: {
    ComunitiDashboard,
    ComunitiBdashboard,
    BusinessDashboard,
    Business,
    CommunityActivity,
    CommunityBactivity,
    Tutorial,
    Insights,
    Popularnetwork,
    // Map,
    EmptyBusiness,
    Profile,
    CarousselDashboard,
    Navbar,
    mapbox
  },

  methods: {
    ...mapMutations({
      auth: 'auth/profilConnected',
    }),

    async checkIfItNetwork(){
      if ("network" == this.profile.user_type){
        const request = await this.$repository.share.switch(null,"reset");

        if (request.status)
          this.auth()
      }
      
    },
    async switchBusiness(value) {
      this.data1 = false;
      console.log("business switch" + value);

      if (value != "Owner") {
        let loader = this.$loading.show({
          container: this.fullPage ? null : this.$refs.loader,
          canCancel: true,
          onCancel: this.onCancel,
          color: "#e75c18",
        });

        console.log(value);
        this.url_data = value;

        this.$store.commit("dashboard/setdBusinessId", value);

        await this.$store
          .dispatch("dashboard/dashboardBusiness", value)
          .then((res) => {
            console.log("business switch----", res);
             this.data1 = true;
          })
          .catch((err) => {
            console.log({ err: err });
          });

        this.businessCommunityTotal();

        this.dashboardBpost();

        loader.hide();
      }
    },

    dashboardPpost() {
      this.$store
        .dispatch("dashboard/dashboardPpost")
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    dashboardBpost() {
      this.$store
        .dispatch("dashboard/dashboardBpost", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    CommunityBusiness() {
      this.$store
        .dispatch("businessOwner/CommunityBusiness", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    CommunityPeople() {
      this.$store
        .dispatch("businessOwner/CommunityPeople", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    businessCommunityTotal() {
      this.$store
        .dispatch("businessOwner/businessCommunityTotal", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    getbusiness() {
      console.log(
        JSON.parse(
          JSON.stringify(
            this.$store.getters["ProfileAndBusinessDetails/getdetails"]
          )
        )
      );

      let owner = JSON.parse(
        JSON.stringify(
          this.$store.getters["ProfileAndBusinessDetails/getdetails"]
        )
      ).owner;

      const ownerData = owner.map((value) => ({ text: value.name, value: "owner" }));

      let data = ownerData

      /* console.log(
        JSON.parse(
          JSON.stringify(
            this.$store.getters["ProfileAndBusinessDetails/getdetails"]
          )
        ).business
      ); */

      let businesses = JSON.parse(
        JSON.stringify(
          this.$store.getters["ProfileAndBusinessDetails/getdetails"]
        )
      ).business;

      const businessesData = businesses.map((value) => ({ text: value.name, value: value.id }) );

      data = [ ...businessesData, ...ownerData]

      console.log(data)
      
      this.boptions = data

      return this.boptions;
    },
  },

  created() {
    
    this.checkIfItNetwork();

    this.$store
      .dispatch("ProfileAndBusinessDetails/getdetails")
      .then((response) => {
        this.getbusiness();

      });

    this.dashboardPpost();

  },

  mounted(){
    this.$store
      .dispatch("ProfileAndBusinessDetails/getdetails")
      .then((response) => {
        this.getbusiness();
       this.data1 = true;
        console.log('response----',response.data.business[0])
      });

    this.dashboardPpost();
  },

  computed: {
    ...mapGetters({
      profile: 'auth/profilConnected'
    }),
    selectedBusiness: function(){
      let data = this.$store.state.dashboard.dashboard_business;
      data.lat= data.latitute;
      data.lng = data.longitute;
     
      return data
    },
    details() {
      return this.$store.getters["ProfileAndBusinessDetails/getdetails"];
    },
  },

  watch: {
    selectedb(newvalue) {},
  },
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

.dashboard .card-body {
  padding-right: 0px !important;
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

  .com-dash {
    margin-right: -15px;
    margin-left: -15px;
  }
}

@media only screen and (max-width: 768px) {
  .titlle {
    font-size: 16px;
  }

  .com-dash {
    margin-right: -35px;
    margin-left: -20px;
  }

  .centerdiv {
    padding: 0px;
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
