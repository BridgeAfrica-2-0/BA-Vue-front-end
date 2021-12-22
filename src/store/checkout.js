
import axios from 'axios'


const state = {
  allShipping: [

  ],
  order: {

  },
  cart: [],
  cart_summary:{},
  buisinessOrdered: []

}
const getters = {
  getAllShipping: (state) => state.allShipping,
  getCartSummary: (state) => state.cart_summary
}
const actions = {
  async createShipping({ commit }, newShippingAdd) {
    console.log(newShippingAdd);
    await axios.post("shipping-address", newShippingAdd)
      .then((response) => {
        console.log(response.data)
        commit
      })
      .catch((error) => {
        console.log(error)
      })
  },


  async getCartSummary({ commit }) {
    await axios.get('cart-total')
      .then((response) => {
        console.log(response.data)
       
        commit('setCartSummary', response.data.data)
      })
      .catch((error) => {
        console.log(error);
      })
  },

  

  async updateCart({ commit },payload) {
    await axios.post('cart/update-quantity/'+payload.index, {
      quantity:payload.quantity
    })
      .then((response) => {
        console.log(response)
        console.log("yooo the mother fucker");
      //  commit('setCartSummary', response.data.data)
      })
      .catch((error) => {
        console.log({error:error});
      })
  },



  async getAllShippingAdd({ commit }) {
    await axios.get('shipping/checkout/shippingAddresses')
      .then((response) => {
        console.log(response.data)
        commit('setAllShipping', response.data.data)
      })
      .catch((error) => {
        console.log(error);
      })
  },
  async deleteShippingAdd({ commit }, id) {
    await axios.delete(`shipping/shippingAddress/${id}/delete`).then(() => {
      commit('deleteShippingAdd', id)
    })
      .catch((error) => {
        console.log(error);
      })
  },
  async createOrder({ commit }, newOrder) {
    await axios.post('cart/create', newOrder).then((response) => {
      commit('setOrder', newOrder)
      console.log(response.data);
    }).catch((error) => {
      console.log(error)
    })
  },
  async getCart({ commit }) {
    await axios.get('cart').then((response) => {
      console.log(response)
      commit('setCart', response.data)
    }).catch((error) => {
      console.log({error:error})
    })
  },

    async next({ commit }, url) {
    await axios.get(url).then((response) => {
      console.log(response)
      commit('setCart', response.data)
    }).catch((error) => {
      console.log({error:error})
    })
  },

  async getBussiness({ commit }, id) {
    await axios.get(`profile/businessInfo/${id}`).then((response) => {
      commit("setBuisiness", response.data)
      console.log(response.data);
    })
      .catch((error) => {
        console.log(error)
      })
  },
  async updateShippingAddress({ commit }, shippingUp) {
    await axios.post(`shipping/shippingAddress/${shippingUp.id}/update`, shippingUp.data)
      .then((response) => {
        commit('upShippingAdd', shippingUp)
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
const mutations = {
  setAllShipping: (state, newShippingTab) => state.allShipping = newShippingTab,

  setCartSummary: (state, cartSummary) => state.cart_summary = cartSummary,

  addShipping: (state, newShippingAdd) => state.allShipping.unshift(newShippingAdd),
  deleteShippingAdd: (state, idShipping) => state.allShipping = state.allShipping.filter(el => el.id !== idShipping),
  setOrder: (state, newOrder) => state.order = newOrder,
  setCart: (state, newCart) => {
    newCart.data.map((el) => {
      el.quantity = 1;
    });
    state.cart = newCart

  },
  setBuisiness: (state, newBuis) => { state.buisinessOrdered = newBuis },
  upShippingAdd: (state, shippingUp) => {
    let shippingData = {
    }
    shippingUp.data.forEach(function (value, key) {
      shippingData[key] = value;
    });

    console.log('mutation update', shippingData);
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}