import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import dashboard from "./dashboard";
import businessOwner from "./businessOwner";
import market from "./market";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import hotbusiness from "./hotbusiness";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import networkProfileMembers from "./networkProfileMembers";
import NetworkSettings from "./NetworkSettings";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_API_URL;    

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
    market
  }
});
