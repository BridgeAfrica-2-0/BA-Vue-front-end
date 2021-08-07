import axios from 'axios'

axios.defaults.baseURL =  process.env.VUE_APP_API_URL    
export default {
  namespaced: true,

  state: {
    user: null,
    isVerified: null,
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



    recoverPassword2({ commit }, data) {



      return axios
        .post('user/reset', data)  
        .then(({ data }) => {

          commit('setPasswordToken', data.data)

        })

    },




    verify({ commit }, mydata) {


      const url = 'user/verifyOtp/' + this.state.auth.user.data.user.id

     

      return axios
        .post(url, mydata)
        .then(({ data }) => {
          console.log(data.data);

          commit('setUserData', data.data)

        })
       

    }


  },

  getters: {
    isLogged: state => !!state.user,
    isVerified: state => !!state.user,
    user: state => state.user
  },

}



