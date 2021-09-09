import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";

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
  },
});
