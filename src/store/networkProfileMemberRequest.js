import axios from "axios";

export default {
  namespaced: true,
  state: {
    requests: []
  },

  getters: {
    getMemberRequests(state) {
      return state.requests;
    }
  },

  mutations: {
    setMemberRequests(state, requests) {
      state.requests = requests;
    }
  },

  actions: {
    getMemberRequests({ commit }, data) {
      console.log(data.path);
      return axios.get(`network/${data.path}`).then(({ data }) => {
        console.log(data);
        return data;
      });
    }
  }
};
