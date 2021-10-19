
import axios from 'axios'


const state = {
  shipping: [

  ], 
  token: ''
}
const getters = {
  getShipping: (state) => state.shipping
}
const actions = {
  async loginToShipping({ commit }) {
    await axios.post('/user/login', {
      email: 'edson@gmail.com',
      password: '123123123'
    })
      .then((response) => {
        commit('logUserToShipping', response.data.data.accessToken)
      })
      .catch((error) => {
        console.log(error);
      })
  },
  async getShipping({ commit }) {
    await axios.get('/shipping/checkout')
      .then((response) => {
        commit('setShipping', response.data.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
const mutations = { 
  setShipping: (state, newShipping) => state.shipping = newShipping,
  logUserToShipping: (state, newToken)=> {
    axios.defaults.headers.common['Authorization'] =`Bearer ${newToken}`
    state.token= newToken
    state.token = newToken
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}