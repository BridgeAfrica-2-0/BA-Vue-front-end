import axios from "axios";

export default {
  namespaced: true,

  state: {
    ndetails: [],
  },

  actions: {
    getdetails({ commit }, marketId) {
        console.log("Test", marketId);
      return axios
        .get(`/market/product/detail/${marketId}`)
        .then((response) => {
          console.log(response);
          return response.data; // Retourner les données
        })
        .catch((error) => {
          console.error(error);
          throw new Error("Failed to fetch details");
        });
    },
  },

  mutations: {},

  getters: {},
};
