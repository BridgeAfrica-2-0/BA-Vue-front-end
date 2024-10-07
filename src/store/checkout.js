import axios from "axios";
import { getGuestIdentifier } from "../helpers";

const state = {
  allShipping: [],
  shippingFee: 0.0,
  shippingMethod: '',
  order: {
    data: { order_id: "", total_cost: 0 },
  },

  shippingsummary: [],

  cart: [],
  cart_summary: {
    total_items: 0,
    shipping: "FREE",
    tax: 0.0,
    total_cost: 0.0,
    sub_total: 0.0,
    discount: 0.0,
    product_kg: 0.0,
  },
  total: null,
  currentStep: 0,

  buisinessOrdered: [],
  shippingAddressChanged: false,
};
const getters = {
  getAllShipping: (state) => state.allShipping,
  getCartSummary: (state) => state.cart_summary,
  shippingAddressChanges: (state) => state.shippingAddressChanged,
  getCurrentStep: (state) => state.currentStep,
};
const actions = {
  async createShipping({ commit }, newShippingAdd) {
    console.log(newShippingAdd);
    let guest_identifier = getGuestIdentifier();
    const url = newShippingAdd.islogin
      ? `shipping-address`
      : `guest/shipping-address`;
    await axios
      .post(url, { ...newShippingAdd, guest_identifier })
      .then((response) => {
        commit;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async getCartSummary({ commit }, isLogin) {
    const url = isLogin
      ? "cart/summary"
      : "guest/cart/summary?guest_identifier=" + getGuestIdentifier();

    await axios
      .get(url)
      .then((response) => {
        let totalWeight = response.data.data.cartItems.reduce((total, item) => {
          return total + parseFloat(item.product_kg || 0);
        }, 0);
         localStorage.setItem('totalWeight', totalWeight);
        commit("setCartSummary", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async getshippingsummary({ commit }, isLogin) {
    const url = isLogin
      ? "cart/shippingSummary/1"
      : "guest/cart/shippingSummary/1?guest_identifier=" + getGuestIdentifier();
    await axios
      .get(url)
      .then((response) => {
        commit("setshippingsummary", response.data);
      })
      .catch((error) => {
        -console.log({ error: error });
      });
  },

  async getTotal({ commit }) {
    await axios
      .get("cart/total")
      .then((response) => {
        console.log(response.data);

        commit("setCartTotal", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async choseShipping({ commit }, payload) {
    let url = payload.isLogin
      ? "update/shipping-address/status"
      : "guest/shipping-address/update/status";
    await axios
      .post(`${url}?shipping_address_id=${payload.id.id}`, {
        guest_identifier: getGuestIdentifier(),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log({ error: error });
      });
  },

  async shippingFee({ commit }) {
    let totalWeight = localStorage.getItem('totalWeight');
    let url ="/dhl/shippingFee/" + totalWeight
    await axios
      .get(url)
      .then((response) => {
        if(response.data.products)
        {
          if(totalWeight==1)
          {
            localStorage.setItem('shippingFee', response.data.products[0].totalPrice[0].price);
          }
          commit("setShippingFee", response.data.products[0].totalPrice[0].price);
          commit("setShippingMethod", response.data.products[0].productName);
          console.log(response.data.products[0].totalPrice[0].price);
        }
        else{
          commit("setShippingFee", 0.0);
          commit("setShippingMethod", "");
          return Promise.reject(response.data.error);
        }
      })
      .catch((error) => {
        commit("setShippingFee", 0.0);
        commit("setShippingMethod", "");
        return Promise.reject(error);
      });
  },

  async globalShippingFee({ commit }) {
    let totalWeight = localStorage.getItem('fixedWeight');
    let url ="/dhl/shippingFee/" + totalWeight
    await axios
      .get(url)
      .then((response) => {
        if(response.data.products)
        {
          if(totalWeight==1)
          {
            localStorage.setItem('shippingFee', response.data.products[0].totalPrice[0].price);
          }
        }
      })
      .catch((error) => {
        commit("setShippingFee", 0.0);
        commit("setShippingMethod", "");
        return Promise.reject(error);
      });
  },

  async updateCart({ commit }, payload) {
    const url = payload.islogin ? 'cart/update-quantity/' : 'guest/cart/update-quantity/';
    return await axios
      .post(url+ payload.index, {
        quantity: payload.quantity,
      })
      .then((response) => {});
  },

  async getAllShippingAdd({ commit }, { islogin, prefix = "" }) {
    let guest_identifier = getGuestIdentifier();
    const url = islogin
      ? `${prefix}shipping/checkout/shippingAddresses`
      : `${prefix}guest/shipping-address?guest_identifier=${guest_identifier}`;
    await axios
      .get(url)
      .then((response) => {
        commit("setAllShipping", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async deleteShippingAdd({ commit }, id) {
    await axios
      .delete(`shipping/shippingAddress/${id}/delete`)
      .then(() => {
        commit("deleteShippingAdd", id);
        return;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },

  createOrder({ commit }, { isLogin, isLocal, shipping_fee, shipping_method }) {
    let url = isLogin
      ? "cart/create"
      : `guest/cart/create?guest_identifier=${getGuestIdentifier()}`;
    return axios
      .post(url,{isLocal: isLocal, shipping_fee: shipping_fee,shipping_method: shipping_method })
      .then((data) => {
        let orderId = data.data.data;
        console.log(data.data);

        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getorder({ commit }, payload) {
    return axios
      .get("cart/payement-amount/" + payload.data)
      .then((data) => {
        commit("setOrder", data.data);
        localStorage.setItem("Order", data.data);

        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async getCart({ commit }, isLogin = false) {
    let guest_identifier = getGuestIdentifier();
    const url = isLogin
      ? "cart"
      : "guest/cart?guest_identifier=" + guest_identifier;
    await axios
      .get(url)
      .then((response) => {
        console.log("get cart", response);
        commit("setCart", response.data);
      })
      .catch((error) => {
        console.log({ error: error });
      });
  },

  async getCartt({ commit }, isLogin = false) {
    let guest_identifier = getGuestIdentifier();
    let url = isLogin
      ? "ckeckout-cart"
      : "guest/cart/checkout?guest_identifier=" + guest_identifier;
    await axios
      .get(url)
      .then((response) => {
        console.log(response);
        commit("setCart", response.data);
        commit("shippingAddressChanged");
      })
      .catch((error) => {
        console.log({ error: error });
      });
  },

  async next({ commit }, url) {
    await axios
      .get(url)
      .then((response) => {
        console.log(response);
        commit("setCart", response.data);
      })
      .catch((error) => {
        console.log({ error: error });
      });
  },

  async getBussiness({ commit }, id) {
    await axios
      .get(`profile/businessInfo/${id}`)
      .then((response) => {
        commit("setBuisiness", response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async updateShippingAddress({ commit }, shippingUp) {
    await axios
      .post(`shipping/shippingAddress/${shippingUp.id}/update`, shippingUp.data)
      .then((response) => {
        commit("upShippingAdd", shippingUp);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  updateStepper({ commit }, step) {
    commit("updateStep", step);
  },
};
const mutations = {
  setAllShipping: (state, newShippingTab) =>
    (state.allShipping = newShippingTab),

  setCartSummary: (state, cartSummary) => (state.cart_summary = cartSummary),

  setCartTotal: (state, cartSummary) => (state.total = cartSummary),

  addShipping: (state, newShippingAdd) =>
    state.allShipping.unshift(newShippingAdd),
  deleteShippingAdd: (state, idShipping) =>
    (state.allShipping = state.allShipping.filter(
      (el) => el.id !== idShipping
    )),
  setOrder: (state, newOrder) => (state.order = newOrder),
  setCart: (state, newCart) => {
    // newCart.data.map((el) => {
    //   el.quantity = 1;
    // });
    state.cart = newCart;
  },

  setshippingsummary(state, data) {
    state.shippingsummary = data;
  },
  
  setShippingFee(state, data) {
    state.shippingFee = data;
  },

  setShippingMethod(state, data) {
    state.shippingMethod = data;
  },

  setBuisiness: (state, newBuis) => {
    state.buisinessOrdered = newBuis;
  },
  upShippingAdd: (state, shippingUp) => {
    let shippingData = {};
    shippingUp.data.forEach(function(value, key) {
      shippingData[key] = value;
    });
  },
  shippingAddressChanged: (state) =>
    (state.shippingAddressChanged = !state.shippingAddressChanged),
  updateStep: (state, nextStep) => (state.currentStep = nextStep),
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
