import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessBlocking from "./businessBlocking";
import dashboard from "./dashboard";
import businessGeneral from "./businessGeneral";
import businessRole from "./businessRole";
import businessAccountType from "./businessAccountType";
import businessOwner from "./businessOwner";
import marketSearch from "./marketSearch";
import networkSearch from "./networkSearch";
import allSearch from "./allSearch";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import networkProfileCommunity from "./networkProfileCommunity";
import networkDetails from "./networkDetails";

import dashboardCommunity from "./dashboardcommunity";

import NetworkSettings from "./NetworkSettings";
import checkout from "./checkout";
import businessFollowers from "./businessFollowers";
import hotbusiness from "./hotbusiness";
import business from "./business";
import profile from "./profile";
import networkProfileMembers from "./networkProfileMembers";
import follower from "./follower";
import keywordOperationOnNetwork from "./keywordOperationOnNetwork";

// import UserProfileOwner from "./UserProfileOwner";
import networkProfile from "./networkProfile";
import UserProfileOwner from "./UserProfileOwner"
import businessSettingInfo from "./businessSettingInfo"
import networkProfileCommunitySidebar from "./networkProfileCommunitySidebar";
import networkProfileFeedback from "./networkProfileFeedback";
import networkProfileMedia from "./networkProfileMedia";
import networkProfileMemberRequest from "./networkProfileMemberRequest";
import { search } from "./search";
import { social } from "./social";
import { notification } from "./notifications"

import axios from "axios";
Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardCommunity,
    businessOwner,
    businessBlocking,
    dashboard,
    ProfileAndBusinessDetails,
    businessGeneral,
    businessRole,
    businessAccountType,
    business,
    networkProfileFeedback,
    hotbusiness,
    NetworkSettings,
    profile,
    follower,
    search,
    keywordOperationOnNetwork,

    UserProfileOwner,
    businessSettingInfo,
    checkout,
    social,
    marketSearch,
    networkSearch,
    networkProfileMembers,
    allSearch,
    businessFollowers,
    networkProfileCommunitySidebar,
    networkProfileCommunity,
    networkProfileMedia,
    networkProfileMemberRequest,
    networkProfile,
    notification
  }
});

