import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import dashboard from "./dashboard";
import businessOwner from "./businessOwner";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import hotbusiness from "./hotbusiness";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import networkProfileMembers from "./networkProfileMembers";

import axios from "axios";
Vue.use(Vuex);
 //axios.defaults.baseURL = process.env.VUE_APP_API_URL;    
 axios.defaults.baseURL ="https://2f35-154-72-150-52.ngrok.io/api/v1/";
export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    dashboard,
    hotbusiness,
    networkProfileMembers,
  }
});
