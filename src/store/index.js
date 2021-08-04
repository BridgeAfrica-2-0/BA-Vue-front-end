import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";

import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = "http://team2dev.maxinemoffett.com/api/v1/";

export default new Vuex.Store({
  modules: {
    auth,
    businessOwner,
  },
});
