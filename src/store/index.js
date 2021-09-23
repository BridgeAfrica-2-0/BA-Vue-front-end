import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import dashboard from "./dashboard";
import businessOwner from "./businessOwner";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import networkProfileCommunity from "./networkProfileCommunity";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";

import axios from "axios";
Vue.use(Vuex);
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = "https://edson.maxinemoffett.com/api/v1/";
// axios.defaults.baseURL = "https://1e21-154-72-150-73.ngrok.io/api/v1/";
export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    networkProfileCommunity,
    dashboard,
  }
});

