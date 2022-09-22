import axios from "axios";

const state = {};
const getters = {};
const actions = {
  async getProductDetails({ commit }, idproduct) {
    return await new Promise((resolve, reject) => {
      axios
        .get(`/market/product/detail/${idproduct}`)
        .then((response) => {
          commit;
          console.log(response.data);
          resolve(response.data.data);
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    });
  },
  async getProductDetailsForGuest({ commit }, idproduct) {

    if(idproduct){ 
    return await new Promise((resolve, reject) => {
      axios
        .get(`/guest/market/product/detail/${idproduct}`)
        .then((response) => {
          commit;
          console.log(response.data);
          resolve(response.data.data);
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    });
  }
  },
};
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
