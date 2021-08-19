import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";

import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default new Vuex.Store({
  modules: {
    auth
  }
});
