import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";

import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_baseURL;


const getDefaultState = () => {
  return {
    ndetails: []
  };
};

// initial state
const state = getDefaultState();

const actions = {
  getndetails({ commit }) {
    return axios.get("network/details", {}).then(function({ data }) {
      commit("set_details", data.data);
      console.log(data);
    });
  }
};

const mutations = {
  set_details(state, bdetails) {
    state.ndetails = bdetails;
  }
};

const getters = {
  getdetails(state) {
    return state.ndetails;
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
