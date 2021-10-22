
import axios from 'axios'


const state = {
  allShipping: [

  ],
}
const getters = {
  getAllShipping: (state) => state.allShipping
}
const actions = {
  async createShipping({ commit }, newShippingAdd) {
    await axios.post("shipping-address", newShippingAdd)
      .then((response) => {
        console.log(response.data)
        commit
      })
      .catch((error) => {
        console.log(error)
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
    .catch((error)=>{
      console.log(error);
    })
  }
}
const mutations = {
  setAllShipping: (state, newShippingTab) => state.allShipping = newShippingTab,
  addShipping: (state, newShippingAdd) => state.allShipping.unshift(newShippingAdd),
  deleteShippingAdd: (state, idShipping) => state.allShipping = state.allShipping.filter(el => el.id !== idShipping)
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}