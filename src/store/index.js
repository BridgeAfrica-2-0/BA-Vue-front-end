import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import hotbusiness from "./hotbusiness";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import UserProfileOwner from "./UserProfileOwner";
import axios from "axios";

Vue.use(Vuex);
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = "https://1068-129-0-205-32.ngrok.io/api/v1/";

export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    businessOwner,
    hotbusiness,
    UserProfileOwner
  }
});
