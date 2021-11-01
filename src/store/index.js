import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import dashboard from "./dashboard";
import businessOwner from "./businessOwner";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import businessFollowers from "./businessFollowers";
import market from "./market";
import hotbusiness from "./hotbusiness";
import profile from "./profile";
import follower from "./follower";
import networkProfile from "./networkProfile";

import UserProfileOwner from "./UserProfileOwner"
import axios from "axios";
import { search } from "./search";
import { social } from "./social";

Vue.use(Vuex);
//axios.defaults.baseURL = process.env.VUE_APP_API_URL;

axios.defaults.baseURL = "https://f8a7-154-72-167-44.ngrok.io/api/v1/";

export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    dashboard,
    hotbusiness,
    businessFollowers,
    profile,
    follower,
    search,
    market,
    social,
    networkProfile,
    UserProfileOwner
  },
});
