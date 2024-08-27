import axios from "axios";

export default {
  namespaced: true,
  state: {
    accounts: [],
    defaultPayment: []
  },

  getters: {
    getaccounts(state) {
      return state.accounts;
    },
    getDefaultPayment(state) {
      return state.defaultPayment;
    }
  },

  mutations: {
    setaccounts(state, accounts) {
      state.accounts = accounts;
    },
    setDefaultPayment(state, defaultPayment) {
      state.defaultPayment = defaultPayment;
    }
  },

  actions: {
    getDefaultPayment({ commit }, Data) {
      console.log("DefaultPayment");
      return axios.get(`business/${Data.path}`).then(({ data }) => {
        commit("setDefaultPayment", data.data);
        console.log(data);
      });
    },

    getaccounts({ commit }, Data) {
      console.log("getaccounts");
      return axios.get(`${Data.path}`).then(({ data }) => {
        commit("setaccounts", data.data);
        console.log(data);
      });
    },

    confirmPayment({ commit }, Data) {
      console.log("confirmPayment");
      console.log(Data);
      return axios.post(`${Data.path}`, Data.formData).then(({ data }) => {
        console.log(data);
        return data;
      });
    }
  }
};
