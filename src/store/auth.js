import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default {
  namespaced: true,

  state: {
    user: null,
    isVerified: null,
    passwordToken: null,
    registerData: null,

    businessAround: null,
<<<<<<< HEAD
    peopleAround: null,
=======
    peopleAround: null
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
  },

  mutations: {
    setUserData(state, userData) {
      state.user = userData;

      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common.Authorization = `Bearer ${userData.accessToken}`;

      const userInfo = localStorage.getItem("user");
    },

    setPeopleAround(state, data) {
      state.peopleAround = data;
    },

    setBusinessAround(state, data) {
      state.businessAround = data;
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
      localStorage.removeItem("user");
      location.reload();
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
  },

  actions: {
    login({ commit }, credentials) {
      return axios.post("user/login", credentials).then(({ data }) => {
        commit("setUserData", data.data);
      });
    },

    completeWelcome({ commit }) {
      return axios.get("user/completewelcome").then(({ data }) => {
        console.log(data);
        commit("setUserData", data.data);
      });
    },

    businessAround({ commit }) {
      return axios.get("business/around").then(({ data }) => {
        commit("setBusinessAround", data.data);
        console.log(data);
      });
    },

    peopleAround({ commit }) {
      return axios.get("people/around").then(({ data }) => {
        commit("setPeopleAround", data.data);
        console.log(data);
      });
    },

    storeRegisterData({ commit }, userdata) {
      commit("setUserData", userdata);
    },

    logout({ commit }) {
      commit("clearUserData");
    },

    recoverPassword2({ commit }, data) {
      return axios.post("user/reset", data).then(({ data }) => {
<<<<<<< HEAD
        console.log(data);
=======
        console.log(data.data);
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227

        commit("setPasswordToken", data.data);
      });
    },

    verify({ commit }, mydata) {
<<<<<<< HEAD
      const url = "user/verifyOtp/" + this.state.auth.user.data.user.id;
=======
      const url = "user/verifyOtp/" + this.state.auth.user.user.id;
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227

      return axios.post(url, mydata).then(({ data }) => {
        console.log(data.data);

<<<<<<< HEAD
        const url = "user/verifyOtp/" + this.state.auth.user.user.id;

        return axios.post(url, mydata).then(({ data }) => {
          console.log(data.data);

          commit("setUserData", data.data);
        });
      });
    },
=======
        commit("setUserData", data.data);
      });
    }
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
  },

  getters: {
    isLogged: state => !!state.user,
    isVerified: state => !!state.user,
<<<<<<< HEAD
    user: state => state.user,
  },
=======
    user: state => state.user
  }
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
};
