import axios from "axios";

export default {
  namespaced: true,

  state: {
    cart: [],
    status: ""
  },

  mutations: {
    setStatus(state, status) {
      state.status = status;
    }
  },
  actions: {
    async addToCart({ commit }, { product, islogin }) {
      const url = islogin
        ? `market/product/${product.id}/cart/add?business_id=${product.business_id}`
        : `guest/cart/product/${product.id}/cart/add?business_id=${product.business_id}`;
      return await axios
        .post(url)
        .then(data => {
          console.log(data);
          commit("setStatus", data.data.message);
        })
        .catch(error => {
          console.log({ error: error });

          if (error.response.status == 403) {
            commit("setStatus", error.response.data.message);
          } else {
            commit("setStatus", "Can not add prodct to cart");
          }
        });
    }
  }
};
