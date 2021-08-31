import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import networkDetails from "./networkDetails";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_baseURL;

export default new Vuex.Store({
  modules: {
    auth,
    businessOwner,
    networkDetails
  }
});
