import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";

import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const getDefaultState = () => {
  return {
    pdetails: "",

    bdetails: [],

    details: []
  };
};

// initial state
const state = getDefaultState();

const actions = {
  async getdetails({ commit }) {
    return await axios.get("/profileInf", {}).then(function({ data }) {
      commit("setdetails", data.data);
      console.log(data);
    });
  }
};

const mutations = {
  setdetails(state, details) {
    state.details = details;
  }
};

const getters = {
  getdetails(state) {
    return state.details;
  },
  getbdetails(state) {
    return state.details.business;
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
