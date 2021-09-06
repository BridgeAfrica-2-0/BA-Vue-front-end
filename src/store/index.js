import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import hotbusiness from "./hotbusiness";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;


export default new Vuex.Store({
  modules: {
    auth,
    businessOwner,
    hotbusiness
  }
});
