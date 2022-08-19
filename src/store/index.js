import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import auth from './auth';

import profileOrderDetail from './profileOrderDetail';
import businessBlocking from './businessBlocking';
import dashboard from './dashboard';
import businessGeneral from './businessGeneral';
import businessRole from './businessRole';
import profileAccountType from './profileAccountType';
import businessOwner from './businessOwner';
import marketSearch from './marketSearch';
import market from './market';
import networkSearch from './networkSearch';
import allSearch from './allSearch';
import ProfileAndBusinessDetails from './ProfileAndBusinessDetails';
import networkProfileCommunity from './networkProfileCommunity';  
import networkDetails from './networkDetails';
import dashboardcommunity from './dashboardcommunity';
import orderBusiness from './orderBusiness';
import NetworkSettings from './NetworkSettings';
import checkout from './checkout';
import businessFollowers from './businessFollowers';
import hotbusiness from './hotbusiness';
import business from './business';
import profile from './profile';
import networkProfileMembers from './networkProfileMembers';
import follower from './follower';
import networkProfile from './networkProfile';
import UserProfileOwner from './UserProfileOwner';
import { search } from './search';
import userChat from './messaging/user';
import businessChat from './messaging/business';
import networkChat from './messaging/network';
import { notification } from './notifications';
import businessSettingInfo from './businessSettingInfo';
import networkProfileCommunitySidebar from './networkProfileCommunitySidebar';
import networkProfileFeedback from './networkProfileFeedback';
import networkProfileMedia from './networkProfileMedia';
import networkProfileMemberRequest from './networkProfileMemberRequest';
import networkNotification from './networkNotification';
import profileOrders from './profileOrders';
import keywordOperationOnNetwork from './keywordOperationOnNetwork';
import homeRedirection from './homeRedirection';

import profileSettingsEdit from "./profileSettingsEdit";
import cart from "./cart"
import productComments from './productComments';
import { social } from './social';
import networkSetting from './networkSetting';
import productDetails from './productDetails';
import businessGuest from './businessGuest';

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// axios.defaults.baseURL = "http://courage4.maxinemoffett.com/api/v1/";

//axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

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
        market,
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
        profileAccountType,
        business,
        networkProfileFeedback,
        NetworkSettings,
        networkChat,
        keywordOperationOnNetwork,
        businessSettingInfo,
        checkout,
        social,
        businessFollowers,
        networkProfileCommunitySidebar,
        networkProfileCommunity,
        networkProfileMedia,
        networkProfileMemberRequest,
        networkNotification,
        networkProfile,
        orderBusiness,
        notification,
        homeRedirection,
        profileOrderDetail,
        profileSettingsEdit,
        cart,
        networkSetting,
        profileOrders,
        productComments,
        productDetails,
        businessGuest
    }
})
