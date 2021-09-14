import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import hotbusiness from "./hotbusiness";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import NetworkSettings from "./NetworkSettings";
import axios from "axios";

Vue.use(Vuex);
//axios.defaults.baseURL = process.env.VUE_APP_API_URL;
//axios.defaults.baseURL = "https://qa-bridgeafrica-api.maxinemoffett.com/api/v1";
axios.defaults.baseURL = "https://9ab7-154-72-150-19.ngrok.io/api/v1";
export default new Vuex.Store({
  modules: {
    auth,
    dashboardcommunity,
    businessOwner,
    hotbusiness,
    networkDetails,
    NetworkSettings
  }
});
