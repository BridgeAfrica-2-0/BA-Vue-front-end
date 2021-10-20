   
import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
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
import networkProfileFeedback  from "./networkProfileFeedback";
import { search } from "./search";

import axios from "axios";
Vue.use(Vuex);
<<<<<<< HEAD
 axios.defaults.baseURL = process.env.VUE_APP_API_URL;
=======

axios.defaults.baseURL = process.env.VUE_APP_API_URL;



>>>>>>> main
export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    networkProfileFeedback,
    dashboard,
    hotbusiness,
    profile,
    follower,
    search,
    market,
    UserProfileOwner
  },
});
