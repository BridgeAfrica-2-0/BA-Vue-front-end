import axios from "axios";
export default {
  namespaced: true,

  state: {
    cart: [],
    status: "",
  },

  mutations: {
    setStatus(state, status) {
      state.status = status;
    },
  },
  actions: {
    async addToCart({ commit }, { product, islogin }) {
      const url = islogin
        ? `market/product/${product.id}/cart/add?business_id=${product.business_id}`
        : `guest/cart/product/${product.id}/cart/add?business_id=${product.business_id}`;
      let options = islogin ? {} : { withCredentials: true };
      return await axios
        .post(url, {}, options)
        .then((data) => {
          console.log(data);
          const setCookieHeader = data.headers["set-cookie"]; // Correct header key for cookies

          // Log the cookie value if it exists
          if (setCookieHeader) {
            console.log("Cookie received:", setCookieHeader);
          } else {
            console.log("No Set-Cookie header received");
          }
          commit("setStatus", data.data.message);
        })
        .catch((error) => {
          console.log({ error: error });

          if (error.response.status == 403) {
            commit("setStatus", error.response.data.message);
          } else {
            commit("setStatus", "Can not add prodct to cart");
          }
        });
    },
  },
};
