import axios from "axios";


export default {
  namespaced: true,
  state: {
    token: "40|NOOROiN1Nz8YBeQsGVQX9rh8J9KUqlN3QnHpghT8",
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


  },
};