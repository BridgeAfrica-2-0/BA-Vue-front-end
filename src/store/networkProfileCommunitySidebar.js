import axios from "axios";


export default {
  namespaced: true,
  state: {
    userdetails: [],
    businessdetails: [],
    networkdetails: []
  },

  getters: {
    getUserDetails(state) {
        return state.userdetails;
    },
    getBusinessDetails(state) {
        return state.businessdetails;
    },
    getNetworkDetails(state) {
        return state.networkdetails;
    }
  },

  mutations: {
    setUserDetails(state, userdetails) {
        state.userdetails = userdetails;
    },
    setBusinessDetails(state, businessdetails) {
        state.businessdetails = businessdetails;
    },
    setnetworkDetails(state, networkdetails) {
        state.networkdetails = networkdetails;
    }
  },

  actions: {


    getUserDetails( {commit}, networkId ){
      return axios
      .get(`network/community/people/${networkId}`)
      .then(({ data }) => {
          commit("setUserDetails", data.data);
        console.log(data);

      })
    },

    getBusinessDetails( {commit}, networkId ){
      return axios
      .get(`network/community/businesses/${networkId}`)
      .then(({ data }) => {
          commit("setBusinessDetails", data.data);
        console.log(data);

      })
    },

    getNetworkDetails( {commit}, networkId ){
      return axios
      .get(`network/community/networks/${networkId}`)
      .then(({ data }) => {
          commit("setnetworkDetails", data.data);
        console.log(data);

      })
    },


  },
};