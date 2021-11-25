  
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

    getaccounts( {commit}, Data ){
      console.log("getaccounts");
      return axios
      .get(`business/${Data.path}`)
      .then(({ data }) => {
          commit("setaccounts", data.data);
        console.log(data);

      })
    },

    confirmPayment( {commit}, Data ){
      console.log("confirmPayment");
      return axios
      .post(`business/${Data.path}`, Data.formData)
      .then(({ data }) => {
        console.log(data);
        return data
      })
    }

  },
};
