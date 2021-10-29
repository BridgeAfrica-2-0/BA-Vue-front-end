  
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
      .get(`network/${networkId}/about/information`)
      .then(({ data }) => {
          commit("setnetworkInfo", data.data);
        console.log(data);

      })
    },

    updateNetwork( {commit}, networkData ){
      console.log("networkData.path",networkData.path);
      console.log("networkData.formData",networkData.formData);
      return axios
      .post(networkData.path, networkData.formData)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
    },

    submitFile( {commit}, networkData ){
      console.log("networkData.path",networkData.path);
      console.log("networkData.formData",networkData.formData);
      return axios.post( networkData.path, networkData.formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(({ data }) => {
        console.log(data);
        return data;
      })
    }




  },
};