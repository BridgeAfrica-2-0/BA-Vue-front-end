  
import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: "8|VjFtS2m3B9YuCz5Fw0r94gkWiCs0p9MhfrMpMDZW",
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