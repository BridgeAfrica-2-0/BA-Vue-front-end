import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import dashboard from "./dashboard";
import businessOwner from "./businessOwner";
import marketSearch from "./marketSearch";
import networkSearch from "./networkSearch";
import allSearch from "./allSearch";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import hotbusiness from "./hotbusiness";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
import profile from "./profile";
import networkProfileMembers from "./networkProfileMembers";



import axios from "axios";
import { search } from "./search";

Vue.use(Vuex);

// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = process.env.VUE_APP_API_URL_DEV;


export default new Vuex.Store({
    modules: {
        auth,
        networkDetails,
        dashboardcommunity,
        ProfileAndBusinessDetails,
        businessOwner,
        dashboard,
        hotbusiness,
        networkProfileMembers,
        marketSearch,
        networkSearch,
        allSearch

    }
});