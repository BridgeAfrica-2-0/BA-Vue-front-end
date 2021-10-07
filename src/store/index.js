import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import networkDetails from "./networkDetails";
import dashboard from "./dashboard";
import dashboardcommunity from "./dashboardcommunity";
import networkProfileMedia from "./networkProfileMedia";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import businessFollowers from "./businessFollowers";
import market from "./market";
import hotbusiness from "./hotbusiness";
import profile from "./profile";
import follower from "./follower";

import axios from "axios";
import { search } from "./search";

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
    networkProfileMedia,
    dashboard,
    hotbusiness,
    profile,
    follower,
    search,
    market
  },
});
