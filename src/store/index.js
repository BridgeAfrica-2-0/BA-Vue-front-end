import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessBlocking from "./businessBlocking";
import businessOwner from "./businessOwner";
import businessRole from "./businessRole";
import networkDetails from "./networkDetails";
import networkProfile from "./networkProfile";
import dashboardcommunity from "./dashboardcommunity";

import axios from "axios";
Vue.use(Vuex);
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// axios.defaults.baseURL = "http://team3dev.maxinemoffett.com/api/v1/";
axios.defaults.baseURL = "https://caae-154-72-150-79.ngrok.io/api/v1/";

export default new Vuex.Store({
  modules: {
    auth,
    businessBlocking,
    businessOwner,
    businessRole,
    networkDetails,
    networkProfile,
    dashboardcommunity
  }
});
