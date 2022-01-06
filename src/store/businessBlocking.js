import axios from "axios";


export default {
  namespaced: true,
  state: {
    blockusers: []
  },

  getters: {
    getblockusers(state) {
        return state.blockusers;
      },
  },

  mutations: {
    setblocking(state, blockusers) {
        state.blockusers = blockusers;
    }
  },

  actions: {


    getblockusers( {commit}, businessId ){
      return axios
      .get(`business/blocking/${businessId}`)
      .then(({ data }) => {
          commit("setblocking", data.data);
        console.log(data);

      })
    },

    block( {commit}, blockInfo ){
      return axios
      .post(`business/${blockInfo.path}`, blockInfo.formData)
      .then(({ data }) => {
        console.log(data);
        return data
      })
    },


  },
};