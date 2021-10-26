import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessBlocking from "./businessBlocking";
import dashboard from "./dashboard";
import businessOwner from "./businessOwner";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import businessGeneral from "./businessGeneral";
import businessRole from "./businessRole";
import businessAccountType from "./businessAccountType";

import NetworkSettings from "./NetworkSettings";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import businessFollowers from "./businessFollowers";
import market from "./market";
import hotbusiness from "./hotbusiness";
import profile from "./profile";
import follower from "./follower";
import UserProfileOwner from "./UserProfileOwner"
import axios from "axios";
import { search } from "./search";

Vue.use(Vuex);
 axios.defaults.baseURL = process.env.VUE_APP_API_URL; 

export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    businessOwner,
    businessBlocking,
    dashboard,
    businessGeneral,
    market,
    ProfileAndBusinessDetails,
    hotbusiness,
    businessRole,
    businessAccountType,
    NetworkSettings,
    profile,
    follower,
    search,
    UserProfileOwner
  },
});
