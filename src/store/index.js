import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const getDefaultState = () => {
  return {
    url_base: "https://6dc7-154-72-150-66.ngrok.io/api/v1",
    url_profile_community: "/profile/community",
    url_total_community: "/profile/total/community",
    token: "8|Yx3DU4s08aFTYOCa3T2XJKZkjJV4leSi9b20oo5D",
    profile_community: [],
    community: []
  };
};

// initial state
const state = getDefaultState();

const actions = {
  async getdetails({ commit }) {
    return await axios
      .get(state.url_base + state.url_profile_community, {
        headers: { Authorization: `Bearer ${state.token}` }
      })
      .then(function({ data }) {
        commit("setdetails", data.data);
        console.log(data);
        return data.data;
      });
  },

  async gettotalcommunity({ commit }) {
    return await axios
      .get(state.url_base + state.url_total_community, {
        headers: { Authorization: `Bearer ${state.token}` }
      })
      .then(function({ data }) {
        commit("setcom", data.data);
        console.log(data);
        console.log("peter perre");
        return data.data;
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
      console.log(state.profile_community + "pewpewpewepwepwepwewpepwepw");
      return state.profile_community;
    },
    getcom(state) {
      return state.community;
    }
  },
  actions,
  mutations
});
