import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import hotbusiness from "./hotbusiness";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import networkProfile from "./networkProfile";

import axios from "axios";
Vue.use(Vuex);
//  axios.defaults.baseURL = process.env.VUE_APP_API_URL;
 axios.defaults.baseURL = "https://7e7c-154-72-150-118.ngrok.io/api/v1/";
export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    hotbusiness,
    networkProfile,

  }

});