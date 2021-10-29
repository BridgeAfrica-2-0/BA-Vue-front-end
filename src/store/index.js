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
import UserProfileOwner from "./UserProfileOwner"
import axios from "axios";
import { search } from "./search";

Vue.use(Vuex);
//axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.baseURL = "https://bace-154-72-167-103.ngrok.io/api/v1/"

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
    follower,
    search,
    market,
    UserProfileOwner
  },
});