import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import dashboardcommunity from "./dashboardcommunity";
import axios from "axios";

Vue.use(Vuex);
//axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
//axios.defaults.baseURL = "http://team3dev.maxinemoffett.com/api/v1";
axios.defaults.baseURL = "https://c77d-154-72-150-32.ngrok.io/api/v1";

export default new Vuex.Store({
  modules: {
    auth,
    businessOwner,
    dashboardcommunity
  }
});
