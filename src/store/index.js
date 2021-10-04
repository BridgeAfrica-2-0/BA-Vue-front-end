import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import networkDetails from "./networkDetails";
import networkProfile from "./networkProfile";
import dashboardcommunity from "./dashboardcommunity";

import axios from "axios";
Vue.use(Vuex);
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = process.env.VUE_APP_API_URL_EDS;

export default new Vuex.Store({
  modules: {
    auth,
    businessOwner,
    networkDetails,
    networkProfile,
    dashboardcommunity
  }
});
