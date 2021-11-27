import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import auth from './auth';
import profileOrderDetail from './profileOrderDetail';
import businessBlocking from './businessBlocking';
import dashboard from './dashboard';
import businessGeneral from './businessGeneral';
import businessRole from './businessRole';
import businessAccountType from './businessAccountType';
import businessOwner from './businessOwner';
import marketSearch from './marketSearch';
import networkSearch from './networkSearch';
import allSearch from './allSearch';
import ProfileAndBusinessDetails from './ProfileAndBusinessDetails';
import networkProfileCommunity from './networkProfileCommunity';
import networkDetails from './networkDetails';
import dashboardcommunity from './dashboardcommunity';
import orderBusiness from './orderBusiness';
<<<<<<< HEAD
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
=======
import NetworkSettings from './NetworkSettings';
import checkout from './checkout';
import businessFollowers from './businessFollowers';
import hotbusiness from './hotbusiness';
import business from './business';
import profile from './profile';
import networkProfileMembers from './networkProfileMembers';
import follower from './follower';
>>>>>>> 4d6df2670bce3f8f1b9cdc061b702bdce641c396
import networkProfile from './networkProfile';
import UserProfileOwner from './UserProfileOwner';
import { search } from './search';
import userChat from './messaging/user';
import businessChat from './messaging/business';
import { notification } from './notifications';
import businessSettingInfo from './businessSettingInfo';
import networkProfileCommunitySidebar from './networkProfileCommunitySidebar';
import networkProfileFeedback from './networkProfileFeedback';
import networkProfileMedia from './networkProfileMedia';
import networkProfileMemberRequest from './networkProfileMemberRequest';
import profileOrders from './profileOrders';
import keywordOperationOnNetwork from './keywordOperationOnNetwork';

import homeRedirection from './homeRedirection';

<<<<<<< HEAD
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
=======
import profileSettingsEdit from "./profileSettingsEdit"
>>>>>>> 4d6df2670bce3f8f1b9cdc061b702bdce641c396


import { social } from './social';

Vue.use(Vuex);

<<<<<<< HEAD
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

=======

//axios.defaults.baseURL = process.env.VUE_APP_API_URL_DEV;
axios.defaults.baseURL = "https://test.maxinemoffett.com/api/v1/"; 
 // axios.defaults.baseURL = process.env.VUE_APP_API_URL;


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
>>>>>>> 4d6df2670bce3f8f1b9cdc061b702bdce641c396
        orderBusiness,
        notification,
        homeRedirection,
        profileOrderDetail,
        profileSettingsEdit

<<<<<<< HEAD
        notification
    
=======
    }
});


>>>>>>> 4d6df2670bce3f8f1b9cdc061b702bdce641c396
