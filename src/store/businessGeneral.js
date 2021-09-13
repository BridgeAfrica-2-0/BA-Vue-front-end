  
import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: "1|l03kpc4VV9SgYtaebfNXbclriJR9fANkZHSSRVoT",
    business: []
  },

  getters: {
    getbusiness(state) {
        return state.business;
      }
  },

  mutations: {
    setbusiness(state, business) {
        state.business = business;
    }
  },

actions: {

    getbusiness( {commit}, businessId ){
      return axios
      .get("business/info/"+businessId )
      .then(({ data }) => {
          commit("setbusiness", data.data);
        console.log(data);

      })
    }


  },
};