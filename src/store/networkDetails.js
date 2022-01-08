import axios from "axios";

export default {
  namespaced: true,

  state: {
    ndetails: []   
  },

  actions: {
    getndetails({ commit }) {
      return axios.get("profile/popular/network", {}).then(function({ data }) {
        commit("set_details", data.data);
      });
    },

    roleCheck({ commit },id){
      return axios.get("network/"+id+"/determine-role")
        .then((data) => {
          return data;
        });
    },
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
