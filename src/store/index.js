import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessBlocking from "./businessBlocking";
import businessOwner from "./businessOwner";
import businessGeneral from "./businessGeneral";
import businessRole from "./businessRole";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";

import axios from "axios";
Vue.use(Vuex);
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = "http://team3dev.maxinemoffett.com/api/v1/";

export default new Vuex.Store({
  modules: {
    auth,
    businessBlocking,
    businessOwner,
    businessGeneral,
    businessRole,
    networkDetails,
    dashboardcommunity
  }
});
