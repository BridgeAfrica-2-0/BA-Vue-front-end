   
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

import networkSetting from "./networkSetting";

import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";

import businessFollowers from "./businessFollowers";
import hotbusiness from "./hotbusiness";
import profile from "./profile";
import networkProfileMembers from "./networkProfileMembers";
import follower from "./follower";
import networkProfile from "./networkProfile";
import UserProfileOwner from "./UserProfileOwner"
import { search } from "./search";
import { social } from "./social";

import axios from "axios";
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
    networkSetting,
    profile,
    networkProfile,
    follower,
    search,
    market,
    social,
    networkProfileMembers,
        allSearch,
     marketSearch,
       networkSearch,
    networkProfile,
    UserProfileOwner,
    businessFollowers
  },
});
   

