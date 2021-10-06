  
import axios from "axios";

export default {
  namespaced: true,
  state: {
    followers: [],
    roles: [],
    editors: []
  },

  getters: {
    getfollowers(state) {
        return state.followers;
      },
    getroles(state) {
        return state.roles;
      },
    geteditors(state) {
        return state.editors;
      }
  },

  mutations: {
    setfollowers(state, followers) {
        state.followers = followers;
    },
    setroles(state, roles) {
        state.roles = roles;
    },
    seteditors(state, editors) {
        state.editors = editors;
    }
  },

  actions: {

    getfollowers( {commit}, businessId ){
      return axios
      .get(`business/community/people/${businessId}`)
      .then(({ data }) => {
          commit("setfollowers", data.data);
        console.log(data);

      })
    },

    getroles( {commit} ){
      return axios
      .get("business/role/displayRole")
      .then(({ data }) => {
          commit("setroles", data.data);
        console.log(data);

      })
    },

    geteditors( {commit}, businessId ){
      return axios
      .get("business/role/editor/"+businessId)
      .then(({ data }) => {
          commit("seteditors", data.data);
        console.log(data);

      })
    }

  },
};
