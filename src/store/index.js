import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);
//axios.defaults.baseURL = process.env.VUE_APP_baseURL;
axios.defaults.baseURL = " https://580f-154-72-150-86.ngrok.io/api/v1";

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
  mutations
});
