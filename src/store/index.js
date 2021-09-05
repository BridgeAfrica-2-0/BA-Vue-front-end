import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const mutations = {
  set_details(state, bdetails) {
    state.bdetails = bdetails;
  }
};

const getters = {
  getdetails(state) {
    return state.bdetails;
  }
};

export default new Vuex.Store({
  modules: {
    auth,
    businessOwner,
    ProfileAndBusinessDetails
  }
});
