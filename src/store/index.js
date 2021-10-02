import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessBlocking from "./businessBlocking";
import businessOwner from "./businessOwner";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import businessGeneral from "./businessGeneral";
import businessRole from "./businessRole";

import axios from "axios";
Vue.use(Vuex);
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = process.env.VUE_APP_API_URL_ABU;

export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    businessOwner,
    businessBlocking,
    businessGeneral,
    businessRole,
  }
});
