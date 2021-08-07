import axios from 'axios'

axios.defaults.baseURL = 'https://9aeb4781f48a.ngrok.io/api/v1/'
export default {
  namespaced: true,

  state: {
    user: null,
    verifyToken: null,
    passwordToken: null,
    registerData: null
  },



  mutations: {
    setUserData(state, userData) {
      state.user = userData

      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.accessToken}`

      const userInfo = localStorage.getItem('user')


    },

    setVerifyToken(state, data) {
      state.verifyToken = data;
    },


    setRegisterdata(state, data) {
      state.registerData = data;
    },



    setPasswordToken(state, data) {
      state.passwordToken = data;
    },

    clearUserData() {
      localStorage.removeItem('user')
      location.reload()
    },

  },

  actions: {

    login({ commit }, credentials) {
      return axios
        .post('user/login', credentials)
        .then(({ data }) => {
          commit('setUserData', data.data)

        })
    },




    storeRegisterData({ commit }, userdata) {


      commit('setUserData', userdata)
    },





    logout({ commit }) {
      commit('clearUserData')
    }

    ,



    recoverPassword2({ commit }, mydata) {



      return axios
        .post('user/verify/password', mydata)
        .then(({ data }) => {

          commit('setPasswordToken', data.data)

        })

    },




    verify({ commit }, mydata) {


      const url = 'user/verifyotp/' + this.state.auth.user.data.user.id

      console.log(url);

      return axios
        .post(url, mydata)
        .then(({ data }) => {

          commit('setVerifyToken', data.data)

        })

    }


  },

  getters: {
    isLogged: state => !!state.user,
    isVerified: state => !!state.verifyToken,
    user: state => state.user
  },

}