import axios from "axios";

const state = {
  cart: [],
};
const getters = {};
const actions = {
  async addToCart({ commit }, idproduct) {
    await axios
      .post(`market/product/cart/add`, {
        product_id: idproduct,
      })
      .then((response) => {
        commit;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
