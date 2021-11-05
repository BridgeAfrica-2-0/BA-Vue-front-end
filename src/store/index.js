   
import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import marketSearch from "./marketSearch";
import networkSearch from "./networkSearch";
import allSearch from "./allSearch";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import networkProfileCommunity from "./networkProfileCommunity";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import NetworkSettings from "./NetworkSettings";
import checkout from "./checkout";
import businessFollowers from "./businessFollowers";
import hotbusiness from "./hotbusiness";   
import business from "./business";
import profile from "./profile";
import networkProfileMembers from "./networkProfileMembers";
import follower from "./follower";
import networkProfile from "./networkProfile";
import UserProfileOwner from "./UserProfileOwner"
import networkProfileCommunitySidebar from "./networkProfileCommunitySidebar";
import networkProfileFeedback  from "./networkProfileFeedback";
import networkProfileMedia from "./networkProfileMedia";
import networkProfileMemberRequest  from "./networkProfileMemberRequest";
import { search } from "./search";
import { social } from "./social";

import axios from "axios";
Vue.use(Vuex);

//axios.defaults.baseURL = process.env.VUE_APP_API_URL;  
axios.defaults.baseURL = "http://test.maxinemoffett.com/api/v1"

export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    business,
    networkProfileFeedback,
    hotbusiness,
    NetworkSettings,
    profile,
    follower,
    search,
    UserProfileOwner,
    checkout,
    social,
    marketSearch,
    networkSearch,
    networkProfileMembers,
        allSearch,
  
    networkProfileCommunitySidebar,
    networkProfileCommunity,
    networkProfileMedia,
    networkProfileMemberRequest,
    networkProfile,
    businessFollowers,
  }
});





