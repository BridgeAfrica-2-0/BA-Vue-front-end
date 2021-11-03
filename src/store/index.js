   
import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import marketSearch from "./marketSearch";
import networkSearch from "./networkSearch";
import allSearch from "./allSearch";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import NetworkSettings from "./NetworkSettings";

import businessFollowers from "./businessFollowers";
import hotbusiness from "./hotbusiness";
import profile from "./profile";
import networkProfileMembers from "./networkProfileMembers";
import follower from "./follower";
import networkProfile from "./networkProfile";
import UserProfileOwner from "./UserProfileOwner"
import checkout from "./checkout"
import axios from "axios";
import { search } from "./search";
import { social } from "./social";

Vue.use(Vuex);

 axios.defaults.baseURL = process.env.VUE_APP_API_URL;


export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    hotbusiness,
    NetworkSettings,
    profile,
    networkProfile,
    follower,
    search,
    UserProfileOwner, 
    checkout,
    networkProfileMembers,
    
    social,
        allSearch,
     marketSearch,
       networkSearch,
    businessFollowers
  },
});

   

