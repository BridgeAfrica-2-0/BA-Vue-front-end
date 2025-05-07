import axios from "axios";
import { getGuestIdentifier, setGuestIdentifier } from "../helpers";
export default {
  namespaced: true,

  state: {
    cart: [],
    status: "",
    nbreOfItem: 0
  },

  mutations: {
    setStatus(state, status) {
      state.status = status;
    },
    addNewItem(state, { items = 1, add = false }) {
      state.nbreOfItem =  add ? state.nbreOfItem + items : items
    }
  },
  getters: {
    getNumberOfItem: state => state.nbreOfItem,
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

          const setCookieHeader = data.data.data.guest_identifier;

          commit("setStatus", data.data.message);
          commit("addNewItem", { items: 1, add: true });

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
