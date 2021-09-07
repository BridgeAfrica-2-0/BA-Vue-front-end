import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";

import axios from "axios";
Vue.use(Vuex);
//axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = "https://a127-129-0-205-103.ngrok.io/api/v1";

export default new Vuex.Store({
  modules: {
    auth,
    businessOwner,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails
  }
});
