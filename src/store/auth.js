import axios from 'axios'

axios.defaults.baseURL = 'https://5ef462c6c214.ngrok.io/api/v1/'

export default {
  namespaced: true,

  state: {
    user: null
  },

 

  mutations: {
    setUserData (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },


    clearUserData () {
      localStorage.removeItem('user')
      location.reload()
    },

  } ,
  
    actions: {
      login ({ commit }, credentials) {
        return axios
          .post('user/login', credentials)
          .then(({ data }) => {
            commit('setUserData', data)
          })
      },
  
      logout ({ commit }) {
        commit('clearUserData')
      }
    },
  
    getters : {
      isLogged: state => !!state.user
    },

}