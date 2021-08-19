import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = "https://e4f5730e80f9.ngrok.io/api/v1";

const getDefaultState = () => {
  return {
    token: "5|ZrS4NiZ9yXrSZ5b80aqtNsnijikEfUUXBMF51R7N",
    //ndetails: []
    ndetails: [
      {
        id: 1,
        name: "peter network",
        category: "Agriculture network",
        location_description: "Yaounde N",
        about_network: "peter poo pii",
        followers: 30
      }
    ]
  };
};

// initial state
const state = getDefaultState();

const actions = {
  getndetails({ commit }) {
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
  mutations
});
