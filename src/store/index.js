import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import dashboard from "./dashboard";
import businessOwner from "./businessOwner";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import market from "./market";
import hotbusiness from "./hotbusiness";
import networkNotification from "./networkNotification";

import axios from "axios";

Vue.use(Vuex);
//  axios.defaults.baseURL = process.env.VUE_APP_API_URL;     
axios.defaults.baseURL = process.env.VUE_APP_API_URL_EDS;     


export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    dashboard,
    hotbusiness,
    market,
    networkNotification
  },
});
