import axios from "axios";

export default {
  namespaced: true,

  state: {
    ndetails: []
  },

  actions: {
    getndetails({ commit }) {
      return axios.get("/popularNetwork", {}).then(function({ data }) {
        commit("set_details", data.data);
        console.log(data);
      });
    }
  },

  mutations: {
    set_details(state, bdetails) {
      state.ndetails = bdetails;
    }
  },

  getters: {
    getdetails(state) {
      return state.ndetails;
    }
  }
};
