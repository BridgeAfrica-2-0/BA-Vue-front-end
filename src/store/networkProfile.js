  
import axios from "axios";

export default {
  namespaced: true,
  state: {
    networkInfo: []
  },

  getters: {
    getnetworkInfo(state) {
        return state.networkInfo;
    }
  },

  mutations: {
    setnetworkInfo(state, networkInfo) {
        state.networkInfo = networkInfo;
    }
  },

  actions: {

    getnetworkInfo( {commit}, networkId ){
      return axios
      .get(`network/edit-informaions/${networkId}`)
      .then(({ data }) => {
          commit("setnetworkInfo", data.data);
        console.log(data);

      })
    }




  },
};