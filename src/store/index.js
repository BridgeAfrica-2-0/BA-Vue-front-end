   
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

import businessFollowers from "./businessFollowers";
import hotbusiness from "./hotbusiness";
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
 axios.defaults.baseURL = process.env.VUE_APP_API_URL;
export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    networkProfileFeedback,
    hotbusiness,
    NetworkSettings,
    profile,
    networkProfile,
    follower,
    search,
    networkProfileMembers,
    
    social,
        allSearch,
     marketSearch,
       networkSearch,
    UserProfileOwner,
    businessFollowers,
    networkProfileCommunitySidebar,
    networkProfileCommunity,
    networkProfileMedia,
    networkProfileMemberRequest,
  }
});





