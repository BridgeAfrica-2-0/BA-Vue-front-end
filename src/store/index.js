import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = "https://e4f5730e80f9.ngrok.io/api/v1";

const getDefaultState = () => {
  return {
    token: "5|ZrS4NiZ9yXrSZ5b80aqtNsnijikEfUUXBMF51R7N",
    bdetails: []
  };
};

// initial state
const state = getDefaultState();

const actions = {
  getbdetails({ commit }) {
    return axios
      .get("", {
        headers: { Authorization: `Bearer ${state.token}` }
      })
      .then(function({ data }) {
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
