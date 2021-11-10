  
import axios from "axios";

export default {
  namespaced: true,
  state: {
    accounts: []
  },

  getters: {
    getaccounts(state) {
        return state.accounts;
    }
  },

  mutations: {
    setaccounts(state, accounts) {
        state.accounts = accounts;
    }
  },

  actions: {

    getaccounts( {commit}, businessId ){
      return axios
      .get(`business/community/people/${businessId}`)
      .then(({ data }) => {
          commit("setaccounts", data.data);
        console.log(data);

      })
    }

  },
};
