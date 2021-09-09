import axios from "axios";


export default {
  namespaced: true,
  state: {
    token: "1|l03kpc4VV9SgYtaebfNXbclriJR9fANkZHSSRVoT",
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


    getblockusers( {commit}, id ){
      return axios
      .get(`business/blocking/${id}`)
      .then(({ data }) => {
          commit("setblocking", data.data);
        console.log(data);

      })
    },


  },
};