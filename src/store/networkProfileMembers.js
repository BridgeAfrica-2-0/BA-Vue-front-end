import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: "79|trGwUB4E3RT66gSokOp4tcoAPlvT0GR5fsukYJHK",
    members: [],
    admins: [],
    business: []
  },

  getters: {
    getmembers(state) {
      return state.members;
    },
    getadmins(state) {
      return state.admins;
    },
    getbusiness(state) {
      return state.business;
    },
  },

  mutations: {
    setmembers(state, members) {
        state.members = members;
    },
    setadmins(state, admins) {
        state.admins = admins;
    },
    setbusiness(state, business) {
        state.business = business;
    }
  },

  actions: {

    getmembers( {commit}, path ){
      console.log(path);
      return axios
      .get(`network/${path}`)
      .then(({ data }) => {
          commit("setmembers", data.data);
        console.log(data);
      })
    },
    getadmins( {commit}, path ){
      console.log(path);
      return axios
      .get(`network/${path}`)
      .then(({ data }) => {
          commit("setadmins", data.data);
        console.log(data);
      })
    },
    getbusiness( {commit}, path ){
      console.log(path);
      return axios
      .get(`network/${path}`)
      .then(({ data }) => {
          commit("setbusiness", data.data);
        console.log(data);
      })
    }

  },
};