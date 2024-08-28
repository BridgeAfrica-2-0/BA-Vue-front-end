import axios from "axios";

export default {
  namespaced: true,

  state: {
    profile_community: [],
    community: []
  },

  actions: {
    getdetails({ commit }) {
      return axios.get("/profile/community", {}).then(function({ data }) {
        commit("setdetails", data.data);
      });
    },

    gettotalcommunity({ commit }) {
      return axios.get("/profile/total/community", {}).then(function({ data }) {
        commit("setcom", data.data);
      });
    }
  },

  mutations: {
    setdetails(state, details) {
      state.profile_community = details;
    },
    setcom(state, details) {
      state.community = details;
    }
  },

  getters: {
    getProfileCommunity(state) {
      return state.profile_community;
    },
    getcom(state) {
      return state.community;
    }
  }
};
