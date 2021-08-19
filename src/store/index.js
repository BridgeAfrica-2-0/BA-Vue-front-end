import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = "https://adbb1e30c453.ngrok.io/api/v1";

const getDefaultState = () => {
  return {
    token: "8|Yx3DU4s08aFTYOCa3T2XJKZkjJV4leSi9b20oo5D",
    bdetails: []
    /*bdetails: [
      {
        id: 1,
        name: "peter",
        category: "Agriculture",
        location_description: "Yaounde",
        about_business: "peter poo",
        followers: 6
      }
    ]*/
  };
};

// initial state
const state = getDefaultState();

const actions = {
  getbdetails({ commit }) {
    return axios
      .get("/business/details", {
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
