import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";

import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const getDefaultState = () => {
  return {
    bdetails: []
  };
};

// initial state
const state = getDefaultState();

const actions = {
  getbdetails({ commit }) {
    return axios.get("/business/details", {}).then(function({ data }) {
      commit("set_details", data.data);
      console.log(data);
    });
  }
};

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
  state,
  getters,
  actions,
  mutations,
  modules: {
    auth,
    businessOwner
  }
});
