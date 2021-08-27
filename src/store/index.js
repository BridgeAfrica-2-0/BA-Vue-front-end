import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";

import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL =  process.env.VUE_APP_API_URL

const getDefaultState = () => {
  return {
    api_link:"https://9cdd-129-0-205-153.ngrok.io/api/v1",
    api_link_end:"/network/details",
    token: "8|Yx3DU4s08aFTYOCa3T2XJKZkjJV4leSi9b20oo5D",
    ndetails: []
  };
};

// initial state
const state = getDefaultState();

const actions = {
  getndetails({ commit }) {
    return axios
      .get(state.api_link+state.api_link_end, {
        headers: { Authorization: `Bearer Bearer ${state.token}` }
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
  mutations,
  modules: {
    auth,
    businessOwner,
  },
});
