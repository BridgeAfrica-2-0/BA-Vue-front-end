import axios from "axios";


export default {
  namespaced: true,
  state: {
    userdetails: [],
    businessdetails: []
  },

  getters: {
    getUserDetails(state) {
        return state.userdetails;
    },
    getBusinessDetails(state) {
        return state.businessdetails;
    },
  },

  mutations: {
    setUserDetails(state, userdetails) {
        state.userdetails = userdetails;
    },
    setBusinessDetails(state, businessdetails) {
        state.businessdetails = businessdetails;
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