import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import networkProfileCommunity from "./networkProfileCommunity";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";

import axios from "axios";
Vue.use(Vuex);
//  axios.defaults.baseURL = process.env.VUE_APP_API_URL;
 axios.defaults.baseURL = "https://afb9-154-72-150-126.ngrok.io/api/v1/";
export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    networkProfileCommunity,

  },
});
