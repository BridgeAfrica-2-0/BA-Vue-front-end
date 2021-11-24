import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
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
import dashboardcommunity from "./dashboardcommunity";
import orderBusiness from './orderBusiness';
import NetworkSettings from "./NetworkSettings";
import checkout from "./checkout";
import businessFollowers from "./businessFollowers";
import hotbusiness from "./hotbusiness";
import business from "./business";
import profile from "./profile";
import networkProfileMembers from "./networkProfileMembers";
import follower from "./follower";
import keywordOperationOnNetwork from "./keywordOperationOnNetwork";


import networkProfile from "./networkProfile";
import UserProfileOwner from "./UserProfileOwner"
import { search } from "./search";
import userChat from "./messaging/user";
import businessChat from "./messaging/business";
import businessSettingInfo from "./businessSettingInfo"
import networkProfileCommunitySidebar from "./networkProfileCommunitySidebar";
import networkProfileFeedback from "./networkProfileFeedback";
import networkProfileMedia from "./networkProfileMedia";
import networkProfileMemberRequest from "./networkProfileMemberRequest";
import { social } from "./social";
import { notification } from "./notifications"

Vue.use(Vuex);
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
//.defaults.baseURL = "https://221e-154-72-167-30.ngrok.io/api/v1/"

axios.defaults.baseURL = "https://cfa0-154-72-150-101.ngrok.io/api/v1/"

export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
    businessBlocking,
    dashboard,
    hotbusiness,
    networkProfileMembers,
    marketSearch,
    networkSearch,
    allSearch,
    profile,
    follower,
    search,
    UserProfileOwner,
    userChat,
    businessChat,
    businessGeneral,
    businessRole,
    businessAccountType,
    business,
    networkProfileFeedback,
    NetworkSettings,
    keywordOperationOnNetwork,
    orderBusiness,
    businessSettingInfo,
    checkout,
    social,
    businessFollowers,
    networkProfileCommunitySidebar,
    networkProfileCommunity,
    networkProfileMedia,
    networkProfileMemberRequest,
    networkProfile,
    notification
  }
});

