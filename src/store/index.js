import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import dashboard from "./dashboard";
import businessBlocking from "./businessBlocking";
import businessGeneral from "./businessGeneral";
import businessRole from "./businessRole";
import businessAccountType from "./businessAccountType";
import businessOwner from "./businessOwner";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import NetworkSettings from "./NetworkSettings";
import networkProfileMembers from "./networkProfileMembers";

import businessFollowers from "./businessFollowers";
import market from "./market";
import hotbusiness from "./hotbusiness";
import profile from "./profile";
import follower from "./follower";
import UserProfileOwner from "./UserProfileOwner";
import checkout from "./checkout";
import axios from "axios";

// import networkProfile from "./networkProfile";
// import businessSettingInfo from "./businessSettingInfo";
// import networkProfileCommunitySidebar from "./networkProfileCommunitySidebar";
// import networkProfileFeedback from "./networkProfileFeedback";
// import networkProfileMedia from "./networkProfileMedia";
// import networkProfileMemberRequest from "./networkProfileMemberRequest";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import { search } from "./search";
import productComments from "./productComments";
import productDetails from "./productDetails";
import cart from "./cart";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// axios.defaults.baseURL = "http://edson.maxinemoffett.com/api/v1";

export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    cart,

    dashboardcommunity,

    businessOwner,
    businessBlocking,
    dashboard,
    ProfileAndBusinessDetails,
    businessGeneral,
    businessRole,
    businessAccountType,
    // networkProfileFeedback,
    hotbusiness,
    NetworkSettings,
    profile,
    follower,
    search,
    market,
    UserProfileOwner,
    // businessSettingInfo,
    checkout,
    networkProfileMembers,
    businessFollowers,
    productComments,
    productDetails,
  },
});
