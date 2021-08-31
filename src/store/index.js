import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";

import axios from "axios";

Vue.use(Vuex);

//axios.defaults.baseURL =  process.env.VUE_APP_API_URL

axios.defaults.baseURL = "http://devone.maxinemoffett.com/api/v1/";

export default new Vuex.Store({
  modules: {
    auth
  }
});
