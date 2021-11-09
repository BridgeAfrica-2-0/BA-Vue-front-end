  
import axios from "axios";

export default {
  namespaced: true,
  state: {
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
      .get("business/general/update/"+businessId )
      .then(({ data }) => {
          commit("setbusiness", data.data);
        console.log(data);

      })
    }


  },
};