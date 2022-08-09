<template>
  <div style="overflow-x: hidden" class="dashboard">
    <navbar></navbar>

    <div class="text-justify p-card pr-1">
      <CompleteProfile class="mb-2" v-if="!Profile_complete" />
    </div>

    <div class="main row">
      <div class="sidebar"><SideBar /> </div>

      <div class="main-content row">
        <div class="col-md-7">  
          
          <CommunityActivity v-if="selectedb == 'owner'" />
          <CommunityBactivity v-if="selectedb != 'owner'" />

          <Tutorial class="mt-2" />

           <comuniti-dashboard
          v-if="selectedb == 'owner'"
          class=""
        ></comuniti-dashboard>

        <comuniti-Bdashboard
          v-if="selectedb != 'owner'"
          class=""
        ></comuniti-Bdashboard>



         

          <ProductActivities />

          
            
        </div>

        <div class="col-md-5 pl-0">  

          <NewProfile />

          <ProfileInsight class="mt-2" :selectedb="selectedb" />

           <Business  class="mt-2"/>
          <Popularnetwork class="mt-2" />


   
       
     


         
        </div>


      </div>

    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";

import BusinessDashboard from "@/components/dasboard/businessDashboard";
import ComunitiDashboard from "@/components/dasboard/comunitiDashboard";

import ProductActivities from "@/components/dasboard/ProductActivities";

//import Insights from "@/components/dasboard/insights";
import ProfileInsight from "@/components/dasboard/profileInsight";


import ComunitiBdashboard from "@/components/dasboard/comunitiBdashboard";
import CompleteProfile from "@/components/dasboard/completeProfile";

import CommunityActivity from "@/components/dasboard/communityActivity";

import CommunityBactivity from "@/components/dasboard/communityBactivity";

import Tutorial from "@/components/dasboard/tutorial";
import Profile from "@/components/dasboard/profile";
import NewProfile from "@/components/dasboard/NewProfile";

import Business from "@/components/dasboard/hotbusiness";

// import Map from "@/components/dasboard/map";
import EmptyBusiness from "@/components/dasboard/emptybusiness";
import Popularnetwork from "@/components/dasboard/popularnetwork";
import mapbox from "@/components/mapbox";
import SideBar from "@/components/dasboard/SideBar";
import { WhoIsIt } from "@/mixins";
import { isPremium } from "@/helpers";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "dashboard",

  mixins: [WhoIsIt],

  data() {
    return {
      slide: 0,
      isPremium: isPremium(),
      sliding: null,
      url_data: null,
      selectedb: "owner",
      map: false,
      category: "",
      boptions: [],
      detail: null,
      data1: null,
      showcompleteprofile: true,
    };
  },

  components: {
     ComunitiDashboard,
    // ComunitiBdashboard,
    // BusinessDashboard,
    ProductActivities,
     Business,
     CommunityActivity,
     CommunityBactivity,
     NewProfile,
    
     Tutorial,
    //Insights,
    ProfileInsight,
     Popularnetwork,
    // Map,
    CompleteProfile,
    SideBar,
    // EmptyBusiness,
    // Profile,

    Navbar,
    // mapbox
  },

  methods: {
    ...mapMutations({
      auth: "auth/profilConnected",
    }),

    async checkIfItNetwork() {
      if ("network" == this.profile.user_type) {
        const request = await this.$repository.share.switch(null, "reset");

        if (request.status) this.auth();
      }
    },
    async switchBusiness(value) {
      this.data1 = false;

      if (value != "Owner") {
        let loader = this.$loading.show({
          container: this.fullPage ? null : this.$refs.loader,
          canCancel: true,
          onCancel: this.onCancel,
          color: "#e75c18",
        });

        this.url_data = value;

        this.$store.commit("dashboard/setdBusinessId", value);

        await this.$store
          .dispatch("dashboard/dashboardBusiness", value)
          .then((res) => {
            this.data1 = true;
          })
          .catch((err) => {});

        this.businessCommunityTotal();

        this.dashboardBpost();

        loader.hide();
      }
    },

    dashboardPpost() {
      this.$store
        .dispatch("dashboard/dashboardPpost")
        .then(() => {})
        .catch((err) => {});
    },

    dashboardBpost() {
      this.$store
        .dispatch("dashboard/dashboardBpost", this.url_data)
        .then(() => {})
        .catch((err) => {});
    },

    CommunityBusiness() {
      this.$store
        .dispatch("businessOwner/CommunityBusiness", this.url_data)
        .then(() => {})
        .catch((err) => {});
    },

    CommunityPeople() {
      this.$store
        .dispatch("businessOwner/CommunityPeople", this.url_data)
        .then(() => {})
        .catch((err) => {});
    },

    businessCommunityTotal() {
      this.$store
        .dispatch("businessOwner/businessCommunityTotal", this.url_data)
        .then(() => {})
        .catch((err) => {});
    },
    getbusiness() {
      let owner = JSON.parse(
        JSON.stringify(
          this.$store.getters["ProfileAndBusinessDetails/getdetails"]
        )
      ).owner;

      const ownerData = owner.map((value) => ({
        text: value.name,
        value: "owner",
      }));

      let data = ownerData;

      let businesses = JSON.parse(
        JSON.stringify(
          this.$store.getters["ProfileAndBusinessDetails/getdetails"]
        )
      ).business;

      const businessesData = businesses.map((value) => ({
        text: value.name,
        value: value.id,
      }));

      data = [...businessesData, ...ownerData];

      this.boptions = data;

      return this.boptions;
    },
  },

  created() {
    this.$store
      .dispatch("profile/loadUserPostIntro", null)
      .then((response) => {
        if (this.$store.state.profile.profileIntro.user.profile_complete) {
          this.showcompleteprofile = true;
        } else {
          this.showcompleteprofile = false;
        }
      })
      .catch((error) => {});

    this.checkIfItNetwork();

    this.$store
      .dispatch("ProfileAndBusinessDetails/getdetails")
      .then((response) => {
        this.getbusiness();
      });

    this.dashboardPpost();
  },

  mounted() {
    this.$store
      .dispatch("ProfileAndBusinessDetails/getdetails")
      .then((response) => {
        this.getbusiness();
        this.data1 = true;
      });

    this.dashboardPpost();
  },

  computed: {
    ...mapGetters({
      profile: "auth/profilConnected",
    }),
    selectedBusiness: function () {
      let data = this.$store.state.dashboard.dashboard_business;
      data.lat = data.latitute;
      data.lng = data.longitute;

      return data;
    },
    details() {
      return this.$store.getters["ProfileAndBusinessDetails/getdetails"];
    },
    Profile_complete() {
      return this.showcompleteprofile;
    },
  },

  watch: {
    selectedb(newvalue) {},
  },
};
</script>

<style>
.sidebar {
  width: 250px !important;
}

.main-content {
  width: calc(100% - 250px);
  padding-left: 15px;
}

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


.dashboard{
  font-family: poppins;
  color: #455a64;
}

</style>
