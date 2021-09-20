  
import axios from "axios";

export default {
  namespaced: true,
  state: {
    networkadmins: [],
    bussiness: [],
    members: [],
  },

  getters: {
    getnetworkadmins(state) {
        return state.networkadmins;
    },
    getbussiness(state) {
        return state.bussiness;
    },
    getmembers(state) {
        return state.members;
    },
  },

  mutations: {
    setnetworkadmins(state, networkadmins) {
        state.networkadmins = networkadmins;
    },
    setbussiness(state, bussiness) {
        state.bussiness = bussiness;
    },
    setmembers(state, members) {
        state.bussiness = members;
    },
  },

  actions: {

    getnetworkadmins( {commit} ){
      return axios
      .get("#")
      .then(({ data }) => {
          commit("setnetworkadmins", data.data);
        console.log(data);

      })
    },

    getbussiness( {commit}, businessId ){
      return axios
      .get("#/"+businessId)
      .then(({ data }) => {
          commit("setbussiness", data.data);
        console.log(data);

      })
    },
 
    getmembers( {commit}, businessId ){
      return axios
      .get("#/"+businessId)
      .then(({ data }) => {
          commit("setmembers", data.data);
        console.log(data);

      })
    },

  },
};