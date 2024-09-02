import axios from "axios";
import { getGuestIdentifier, setGuestIdentifier } from "../helpers";
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
      let guest_identifier = getGuestIdentifier();
      if (!islogin && !guest_identifier) {
        guest_identifier = setGuestIdentifier();
      }
      const url = islogin
        ? `market/product/${product.id}/cart/add?business_id=${product.business_id}`
        : `guest/cart/product/${product.id}/cart/add?business_id=${product.business_id}`;
      let body = islogin ? {} : { guest_identifier };
      return await axios
        .post(url, body)
        .then((data) => {
          console.log(data);
          const setCookieHeader = data.data.data.guest_identifier;

          // Log the cookie value if it exists
          // if (setCookieHeader) {
          //   document.cookie = `guest_identifier=${setCookieHeader}; path=/; samesite=None; secure`;

          //   console.log("Cookie received:", setCookieHeader);
          // } else {
          //   console.log("No Set-Cookie header received");
          // }
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
