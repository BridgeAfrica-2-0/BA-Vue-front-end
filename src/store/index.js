import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import dashboard from "./dashboard";
import businessOwner from "./businessOwner";
import marketSearch from "./marketSearch";
import networkSearch from "./networkSearch";
import allSearch from "./allSearch";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import networkSetting from "./networkSetting";
import businessFollowers from "./businessFollowers";
import hotbusiness from "./hotbusiness";
import profile from "./profile";
import networkProfileMembers from "./networkProfileMembers";
import follower from "./follower";
import networkProfile from "./networkProfile";

import UserProfileOwner from "./UserProfileOwner"
import axios from "axios";
import { search } from "./search";
import { social } from "./social";

Vue.use(Vuex);
//axios.defaults.baseURL = process.env.VUE_APP_API_URL;

axios.defaults.baseURL = "https://0fdb-154-72-150-90.ngrok.io/api/v1/"

export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    dashboard,
    hotbusiness,
    networkSetting,
    profile,
    follower,
    search,
    social,
    networkProfileMembers,
    allSearch,
    marketSearch,
    networkSearch,
    networkProfile,
    UserProfileOwner,
    businessFollowers
  },
});


