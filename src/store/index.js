   
import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import hotbusiness from "./hotbusiness";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import networkProfile from "./networkProfile";
import networkProfileMedia from "./networkProfileMedia";
import networkProfileCommunity  from "./networkProfileCommunity";
import networkProfileCommunitySidebar  from "./networkProfileCommunitySidebar";
import networkProfileFeedback  from "./networkProfileFeedback";

import axios from "axios";
Vue.use(Vuex);
//  axios.defaults.baseURL = process.env.VUE_APP_API_URL;
 axios.defaults.baseURL = process.env.VUE_APP_API_URL_EDS;
export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    networkProfile,
    networkProfileMedia,
    networkProfileCommunity ,
    networkProfileCommunitySidebar ,
    networkProfileFeedback
  },
});