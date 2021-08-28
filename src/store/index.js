import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);
//axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = "https://580f-154-72-150-86.ngrok.io/api/v1";
//axios.defaults.baseURL="https://6dc7-154-72-150-66.ngrok.io/api/v1/profile/total/community";

const getDefaultState = () => {
  return {
    profile_community: [],
    community: []
  };
};

// initial state
const state = getDefaultState();

const actions = {
  getdetails({ commit }) {
    return axios.get("/profile/community", {}).then(function({ data }) {
      commit("setdetails", data.data);
      console.log(data);
    });
  },

  gettotalcommunity({ commit }) {
    return axios.get("profile/total/community", {}).then(function({ data }) {
      commit("setcom", data.data);
      console.log(data);
    });
  }
};

const mutations = {
  setdetails(state, details) {
    state.profile_community = details;
  },
  setcom(state, details) {
    state.community = details;
  }
};

export default new Vuex.Store({
  state,
  getters: {
    getProfileCommunity(state) {
      return state.profile_community;
    },
    getcom(state) {
      return state.community;
    }
  },
  actions,
  mutations
});
