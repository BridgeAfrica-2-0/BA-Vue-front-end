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
import profile from "./profile";


import axios from "axios";
import { search } from "./search/people";

Vue.use(Vuex);
 //axios.defaults.baseURL = process.env.VUE_APP_API_URL;    
 axios.defaults.baseURL = "https://097e-154-72-150-111.ngrok.io/api/v1/";    

export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    dashboard,
    hotbusiness,
    profile,
    search
  },

});


