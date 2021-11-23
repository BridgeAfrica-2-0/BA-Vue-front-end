import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import checkout from "./checkout";


import auth from "./auth";
import dashboard from "./dashboard";
import businessBlocking from "./businessBlocking";
import businessGeneral from "./businessGeneral";
import businessRole from "./businessRole";
import businessAccountType from "./businessAccountType";
import businessOwner from "./businessOwner";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import networkSetting from "./networkSetting";
import orderBusiness from './orderBusiness';
import NetworkSettings from "./NetworkSettings";
import networkProfileMembers from "./networkProfileMembers";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";

import businessFollowers from "./businessFollowers";
import business from "./business";
import market from "./market";
import hotbusiness from "./hotbusiness";
import profile from "./profile";
import follower from "./follower";
import keywordOperationOnNetwork from "./keywordOperationOnNetwork";
import businessOrderDetails from "./businessOrderDetails";

// import UserProfileOwner from "./UserProfileOwner";
import networkProfile from './networkProfile';
import UserProfileOwner from './UserProfileOwner';
import businessSettingInfo from './businessSettingInfo';
import networkProfileCommunitySidebar from './networkProfileCommunitySidebar';
import networkProfileFeedback from './networkProfileFeedback';
import networkProfileMedia from './networkProfileMedia';
import networkProfileMemberRequest from './networkProfileMemberRequest';
import profileOrders from './profileOrders';
import { search } from './search';
import { social } from './social';

import networkProfile from "./networkProfile";
import UserProfileOwner from "./UserProfileOwner"
import { search } from "./search";
import userChat from "./messaging/user";
import businessChat from "./messaging/business";
import networkChat from "./messaging/network";
import businessSettingInfo from "./businessSettingInfo"
import networkProfileCommunitySidebar from "./networkProfileCommunitySidebar";
import networkProfileFeedback from "./networkProfileFeedback";
import networkProfileMedia from "./networkProfileMedia";
import networkProfileMemberRequest from "./networkProfileMemberRequest";
// import networkNotification from "./networkNotification";
import { social } from "./social";
import { notification } from "./notifications";
import cart from "./cart"


// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// axios.defaults.baseURL = process.env.VUE_APP_API_URL_DEV;
// axios.defaults.baseURL = process.env.VUE_APP_API_URL_EDS;
Vue.use(Vuex);

 axios.defaults.baseURL = process.env.VUE_APP_API_URL;
 //axios.defaults.baseURL = "https://test.maxinemoffett.com/api/v1/";

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
    businessSettingInfo,
    checkout,
    social,
    businessFollowers,
    networkProfileCommunitySidebar,
    networkProfileCommunity,
    networkProfileMedia,
    networkProfileMemberRequest,
    networkProfile,
    businessOrderDetails,
    cart,
    notification
  }
});

        orderBusiness,

        notification
    
