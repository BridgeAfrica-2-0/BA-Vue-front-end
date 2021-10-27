import axios from "axios";

export default {
  namespaced: true,
  state: {
    bdetails: [],
  },
  getters: {
    getdetails(state) {
      return state.bdetails;
    },
  },
  mutations: {
    set_details(state, bdetails) {
      state.bdetails = bdetails;
    },
  },
  actions: {
    getbdetails({ commit }) {
      return axios.get("profile/hot/business", {}).then(function({ data }) {
        commit("set_details", data.data);
        console.log(data);
      });
    },
  },
};
