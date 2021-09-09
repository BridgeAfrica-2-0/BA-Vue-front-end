import axios from "axios";
export default {
  namespaced: true,

  state: {
    details: []
  },

  actions: {
    async getdetails({ commit }) {
      return await axios.get("/profileInfo", {}).then(function({ data }) {
        commit("setdetails", data.data);
        console.log(data);
      });
    }
  },

  mutations: {
    setdetails(state, details) {
      state.details = details;
    }
  },

  getters: {
    getdetails(state) {
      return state.details;
    }
  }
};
