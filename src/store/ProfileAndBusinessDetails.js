import axios from "axios";
export default {
  namespaced: true,

  state: {
    details: [],
    profile: [],

    business: [],
  },

  actions: {
    async getdetails({ commit }) {
      return await axios.get("profile/user/info", {}).then(function({ data }) {
        commit("setdetails", data.data);
        commit("setBusiness", data.data.business);
        commit("setProfile", data.data.owner[0]);

        console.log(data);
      });
    },
  },

  mutations: {
    setdetails(state, details) {
      state.details = details;
    },

    setProfile(state, details) {
      state.profile = details;
    },

    setBusiness(state, details) {
      state.business = details;
    },
  },

  getters: {
    getdetails(state) {
      return state.details;
    },
  },
};
