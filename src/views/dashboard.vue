<template>
  <div style="overflow-x:hidden" class="dashboard">
    <navbar></navbar>

    <div class="text-justify  p-card pr-3 ">
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
                  @input="switchBusiness"
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
              <b-card class=" border shadow pr-3" style="height:350px">
                <h6 class="font-weight-bolder text-design">
                  Use Bridge Africa as Yourself or as one of your businesses
                </h6>
                <b-form-select
                  v-model="selectedb"
                   @input="switchBusiness"
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
          <b-col md="6" sm="12" class="mt-2">
            <Insights :selectedb="selectedb" />
          </b-col>
        </b-row>
      </div>
      <br />

     
      <div class="com-dash" >
          <comuniti-dashboard  v-if="selectedb == 'owner'" class="m-component m-3"></comuniti-dashboard> <br />
      
       
         <comuniti-Bdashboard  v-if="selectedb != 'owner'" class="m-component m-3"></comuniti-Bdashboard> <br />

     </div>
     
     

      <div>
        <b-row>
          <b-col sm="12" lg="8" > <CommunityActivity  v-if="selectedb == 'owner'" />      <CommunityBactivity    v-if="selectedb != 'owner'" />    </b-col>
          <b-col sm="12" lg="4" > <Tutorial /> </b-col>
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

import ComunitiBdashboard from "@/components/dasboard/comunitiBdashboard";

import Insights from "@/components/dasboard/insights";

import CommunityActivity from "@/components/dasboard/communityActivity";

import CommunityBactivity from "@/components/dasboard/communityBactivity";

import Tutorial from "@/components/dasboard/tutorial";

import Profile from "@/components/dasboard/profile";

import Business from "@/components/dasboard/hotbusiness";

import Map from "@/components/dasboard/map";

import EmptyBusiness from "@/components/dasboard/emptybusiness";

import Popularnetwork from "@/components/dasboard/popularnetwork";
export default {
  name: "dashboard",

  data() {
    return {
      slide: 0,

      sliding: null,
       url_data:null,
      selectedb: "owner",

      map: false,

      category: "",

      boptions: [],

      detail: null
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
    Map,
    EmptyBusiness,
    Profile,
    CarousselDashboard,
    Navbar
  },

  methods: {


    switchBusiness(value){

       if(value != "Owner"){ 
           let loader = this.$loading.show({
                   
                    container: this.fullPage ? null : this.$refs.loader,
                    canCancel: true,
                    onCancel: this.onCancel,
                    color:"#e75c18"
                });

      console.log(value);
     this.url_data=value;

 


      this.$store
        .dispatch("dashboard/dashboardBusiness", value)
        .then(() => {
          console.log("business switch");
        })
        .catch((err) => {
          console.log({ err: err });
        });


        this.CommunityBusiness();

    this.CommunityPeople();

    this.businessCommunityTotal();

    this.dashboardBpost();


     loader.hide()

       }

       
    },



   dashboardPpost(){
    
       this.$store
        .dispatch("dashboard/dashboardPpost")
        .then(() => {
          console.log("hey yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });

   },

   dashboardBpost(){
    
      this.$store
        .dispatch("dashboard/dashboardBpost", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
   
   },

   
    CommunityBusiness() {
      this.$store
        .dispatch("businessOwner/CommunityBusiness", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

    CommunityPeople() {
      this.$store
        .dispatch("businessOwner/CommunityPeople", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

    businessCommunityTotal() {
      this.$store
        .dispatch("businessOwner/businessCommunityTotal", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

   



    getbusiness() {

      console.log(
        JSON.parse(
          JSON.stringify(
            this.$store.getters["ProfileAndBusinessDetails/getdetails"]
          )
        ).owner
      );


      let owner = JSON.parse(
        JSON.stringify(
          this.$store.getters["ProfileAndBusinessDetails/getdetails"]
        )
      ).owner;


      owner = owner.map(value => {
        this.boptions.push({ text: value.name, value: "owner" });
        return value;
      });


      console.log(
        JSON.parse(
          JSON.stringify(
            this.$store.getters["ProfileAndBusinessDetails/getdetails"]
          )
        ).business
      );
      let businesses = JSON.parse(
        JSON.stringify(
          this.$store.getters["ProfileAndBusinessDetails/getdetails"]
        )
      ).business;
      businesses = businesses.map(value => {
        this.boptions.push({ text: value.name, value: value.id });
        return value;
      });
      return this.boptions;
    }
  },

  mounted() {
      
       this.$store
      .dispatch("ProfileAndBusinessDetails/getdetails")
      .then(response => {
        this.getbusiness();
      });


      this.dashboardPpost()

  },

  created() {
   
  },

  computed: {
    details() {
      return this.$store.getters["ProfileAndBusinessDetails/getdetails"];
    }
  },
  watch: {
    selectedb(newvalue) {}
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

.dashboard .card-body {
    
    padding-right: 0px !important;
}
</style>

<style scoped>

.com-dash{

margin-right: -15px;
margin-left: -15px;
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
