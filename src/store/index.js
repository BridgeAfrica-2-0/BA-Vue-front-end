import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";

import axios from "axios";
Vue.use(Vuex);
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = "http://team3dev.maxinemoffett.com/api/v1/";
// axios.defaults.baseURL = "https://0148-154-72-150-79.ngrok.io/api/v1/";

export default new Vuex.Store({
  modules: {
    auth,
    businessOwner,
    networkDetails,
    dashboardcommunity
  }
});
