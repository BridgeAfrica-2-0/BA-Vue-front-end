<template>
  <div style="overflow-x: hidden" class="dashboard">
    <navbar></navbar>

    <div class="main row">
      <div class="sidebar d-none d-xl-block"><SideBar /></div>

      <div class="main-content row wi-100">
        <div class=" col-lg-7">
          <div class="text-justify p-card ">
            <CompleteProfile class="mb-2" v-if="!Profile_complete" />
          </div>

          <div class="">
            <b-card>
              <span class="d-flex text-center">
                <b-avatar
                  :src="profille.user.profile_picture"
                  variant="primary"
                  size="3em"
                ></b-avatar>

                <span class="mt-2 ml-3">
                  Your current plan:
                  <span class="sub-title" v-if="profile_package.user_package">
                    {{ profile_package.user_package.name }} Account
                  </span>

                  <span class="sub-title" v-else>
                    Basic Account
                  </span>
                </span>
              </span>
              <div class="text-center">
                <router-link to="/settings?tab=account">
                  <b-button variant="outline-primary">
                    Upgrade Account
                  </b-button>
                </router-link>
              </div>
            </b-card>
          </div>

          <div class="d-block d-lg-none">
            <NewProfile
              class="mt-1"
              v-if="selectedb == 'owner'"
              :boptions="boptions"
              :selectedb="selectedb"
              @switchBusiness="switchBusiness"
            />

            <new-business
              class="mt-1"
              style="height: 400px"
              v-if="selectedb != 'owner'"
              :boptions="boptions"
              :selectedb="selectedb"
              @switchBusiness="switchBusiness"
            />
          </div>

          <DashboardTab :usertype="selectedb" class="mt-2" />

          <ProductActivities v-if="selectedb == 'owner'" class="mt-2" />
          <ProductBactivities v-if="selectedb != 'owner'" class="mt-2" />

          <Tutorial class="mt-2" style="overflow:hidden" />
        </div>

        <div class=" col-lg-5 pl-0">
          <div class="d-none d-lg-block">
            <NewProfile
              v-if="selectedb == 'owner'"
              :boptions="boptions"
              :selectedb="selectedb"
              @switchBusiness="switchBusiness"
            />

            <new-business
              style="height: 380px"
              v-if="selectedb != 'owner'"
              :boptions="boptions"
              :selectedb="selectedb"
              @switchBusiness="switchBusiness"
            />
          </div>
          <!-- <ProfileInsight class="mt-2" :selectedb="selectedb" /> -->

          <comuniti-dashboard
            v-if="selectedb == 'owner'"
            class="mt-2"
          ></comuniti-dashboard>

          <comuniti-Bdashboard
            v-if="selectedb != 'owner'"
            class="mt-2"
          ></comuniti-Bdashboard>

          <Business class="mt-2" />
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
import ProductBactivities from "@/components/dasboard/ProductBactivities";
import DashboardTab from "@/components/dasboard/DashboardTab";

//import Insights from "@/components/dasboard/insights";
import ProfileInsight from "@/components/dasboard/profileInsight";

import ComunitiBdashboard from "@/components/dasboard/comunitiBdashboard";
import CompleteProfile from "@/components/dasboard/completeProfile";

import Tutorial from "@/components/dasboard/tutorial";
import Profile from "@/components/dasboard/profile";
import NewProfile from "@/components/dasboard/NewProfile";
import newBusiness from "@/components/dasboard/newBusiness";
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
      selectedb: "owner",
      slide: 0,
      //isPremium: isPremium(),
      sliding: null,
      url_data: null,
      map: false,
      category: "",
      boptions: [],
      detail: null,
      data1: null,
      showcompleteprofile: true
    };
  },

  components: {
    ComunitiDashboard,
    ComunitiBdashboard,
    // BusinessDashboard,
    DashboardTab,
    ProductActivities,
    ProductBactivities,
    Business,
    newBusiness,
    NewProfile,

    Tutorial,
    //Insights,
    //ProfileInsight,
    Popularnetwork,
    // Map,
    CompleteProfile,
    SideBar,
    // EmptyBusiness,
    // Profile,

    Navbar
    // mapbox
  },

  methods: {
    ...mapMutations({
      auth: "auth/profilConnected"
    }),

    async checkIfItNetwork() {
      if ("network" == this.profile.user_type) {
        const request = await this.$repository.share.switch(null, "reset");

        if (request.status) this.auth();
      }
    },

    async ProfileProcess() {
      console.log("swtichin");
      const response = await this.$repository.share.switch(null, "reset");

      if (response.success)
        this.auth({ ...this.profille.user, user_type: "user" });

      console.log(this.profille);
    },

    BusinessProcess: async function(id, type) {
      try {
        const request = await this.$repository.share.switch(id, type);
        if (request.success) {
          this.auth({
            name: this.selectedBusiness.name,
            profile_picture: this.selectedBusiness.picture,
            id: this.selectedBusiness.id,
            slug: this.selectedBusiness.slug,
            user_type: "business"
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    async switchBusiness(value) {
      this.data1 = false;

      this.selectedb = value;
      if (value == "owner") {
        this.ProfileProcess();
      }

      if (value != "owner") {
        let loader = this.$loading.show({
          container: this.fullPage ? null : this.$refs.loader,
          canCancel: true,
          onCancel: this.onCancel,
          color: "#e75c18"
        });

        this.url_data = value;

        this.$store.commit("dashboard/setdBusinessId", value);

        await this.$store
          .dispatch("dashboard/dashboardBusiness", value)
          .then(res => {
            this.data1 = true;
          })
          .catch(err => {});

        this.businessCommunityTotal();

        this.dashboardBpost();
        this.BusinessProcess(value, "business");

        loader.hide();
      }
    },

    dashboardPpost() {
      this.$store
        .dispatch("dashboard/dashboardPpost")
        .then(() => {})
        .catch(err => {});
    },

    dashboardBpost() {
      this.$store
        .dispatch("dashboard/dashboardBpost", this.url_data)
        .then(() => {})
        .catch(err => {});
    },

    CommunityBusiness() {
      this.$store
        .dispatch("businessOwner/CommunityBusiness", this.url_data)
        .then(() => {})
        .catch(err => {});
    },

    CommunityPeople() {
      this.$store
        .dispatch("businessOwner/CommunityPeople", this.url_data)
        .then(() => {})
        .catch(err => {});
    },

    businessCommunityTotal() {
      this.$store
        .dispatch("businessOwner/businessCommunityTotal", this.url_data)
        .then(() => {})
        .catch(err => {});
    },
    getbusiness() {
      let owner = JSON.parse(
        JSON.stringify(
          this.$store.getters["ProfileAndBusinessDetails/getdetails"]
        )
      ).owner;

      const ownerData = owner.map(value => ({
        text: value.name,
        value: "owner"
      }));

      let data = ownerData;

      let businesses = JSON.parse(
        JSON.stringify(
          this.$store.getters["ProfileAndBusinessDetails/getdetails"]
        )
      ).business;

      const businessesData = businesses.map(value => ({
        text: value.name,
        value: value.slug
      }));

      data = [...businessesData, ...ownerData];

      this.boptions = data;

      return this.boptions;
    }
  },

  created() {
    this.$store
      .dispatch("profile/loadUserPostIntro", null)
      .then(response => {
        if (this.$store.state.profile.profileIntro.user.profile_complete) {
          this.showcompleteprofile = true;
        } else {
          this.showcompleteprofile = false;
        }
      })
      .catch(error => {});

    this.checkIfItNetwork();

    this.$store
      .dispatch("ProfileAndBusinessDetails/getdetails")
      .then(response => {
        this.getbusiness();
      });

    this.dashboardPpost();
  },

  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute("src", "/assets/js/dashboard.js");
    document.head.appendChild(externalScript);

    this.ProfileProcess();
    this.$store
      .dispatch("ProfileAndBusinessDetails/getdetails")
      .then(response => {
        this.getbusiness();
        this.data1 = true;
      });

    this.dashboardPpost();
  },

  computed: {
    ...mapGetters({
      profile: "auth/profilConnected"
    }),
    profille() {
      return this.$store.state.auth.user;
    },

    profile_package() {
      return this.$store.state.auth.profile_package;
    },

    selectedBusiness: function() {
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
    }
  }
};
</script>

<style>
.title {
  font-size: 18px;
  line-height: 1.2;
  font-family: poppins !important;
  font-weight: 400 !important;
  color: #455a64 !important;
}

.sub-title {
  font-weight: 500;
}

.title-linkClass {
  color: #455a64;
}

.title-linkClass :hover {
  color: #455a64;
  background-color: white !important;
}

.active-tab-item :hover {
  color: red !important;
}

.nav-tabs > li.active {
  background-color: #272727 !important;
  color: red;
}

.nav-tabs .nav-link.active-tab-item {
  background-color: white !important;

  border-left: none;
  border-right: none;
  border-top: none;

  font-family: poppins !important;
  color: #455a64;

  border-bottom: 2px solid red !important;

  padding-left: 5px;
  padding-right: 5px;
}

.nav-tabs .nav-link.active-tab-item .spa-color {
  color: #e75c18 !important;
}

.nav-tabs:hover {
  background-color: white !important;
}

/* .active-tab {
  color: white;
} */

.sidebar {
  width: 250px !important;
  position: relative;
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
.dashboard .dashboard-tab .card-body {
  padding-left: 0px !important;
}
</style>

<style scoped>
@media only screen and (min-width: 768px) {
}

@media only screen and (max-width: 992px) {
  .wi-100 {
    width: 100%;
  }
}

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

.dashboard {
  font-family: poppins !important;
  color: #455a64 !important;
  overflow: hidden;
}
</style>
