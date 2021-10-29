
import axios from "axios";

export default {
  namespaced: true,
  state: {
    networkInfo: {
      name: '',
      description: '',
      email: '',
      primary_phone: '',
      secondary_phone: '',
      address: '',
      allow_business: '',
      image: ''
    }
  },

  getters: {
    getnetworkInfo(state) {
      return state.networkInfo;
    }
  },

  mutations: {
    setnetworkInfo(state, networkInfo) {
      state.networkInfo = networkInfo;
    },
    updateNetworkInfo(state, upNetworkInfo) {
      for (const key in upNetworkInfo) {
        state.networkInfo[key] = upNetworkInfo[key]
      }
    }
  },

  actions: {

    getnetworkInfo({ commit }, networkId) {
      return axios
        .get(`network/${networkId}/about/information`)
        .then(({ data }) => {
          commit("setnetworkInfo", data.data);
          console.log(data);

        })
    },

    updateNetwork({ commit }, networkData) {
      console.log("networkData.path", networkData.path);
      console.log("networkData.formData", networkData.formData);
      return axios
        .post(networkData.path, networkData.formData)
        .then(({ data }) => {
          console.log(data);
          commit('updateNetworkInfo', networkData.formData)
          return data;
        })
    },

    submitFile({ commit }, networkData) {
      console.log("networkData.path", networkData.path);
      console.log("networkData.formData", networkData.formData);
      return axios.post(networkData.path, networkData.formData,
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