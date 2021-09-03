import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";

import axios from "axios";

Vue.use(Vuex);
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;

axios.defaults.baseURL = "http://team2dev.maxinemoffett.com/api/v1";
export default new Vuex.Store({
  modules: {
    auth,
    businessOwner,
  },
});
