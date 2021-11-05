import axios from "axios";


export default {
  namespaced: true,
  state: {
    requests: [],
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

    getMemberRequests( {commit}, path ){
      return axios
      .get(`network/${path}`)
      .then(({ data }) => {
        commit("setMemberRequests", data.data);
        console.log(data);
        console.log(path);

      })
    },

  },
};