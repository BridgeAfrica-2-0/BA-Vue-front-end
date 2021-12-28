import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default {
  namespaced: true,

  state: {
    appLanguage: 'fr',
    user: [],
    isVerified: null,
    passwordToken: null,
    registerData: null,
    neigbourhoods: [],
    businessAround: [],
    peopleAround: [],
    categories: [],
    subcategories: [],
    filters: [],
    category_fiters: [],
    country: [],
    region: [],
    municipality: [],
    locality: [],
    division: [],
    profilConnected: null,
  },


  mutations: {

    updateProfilePicture(state, picture) {
      if (picture !== state.profilConnected.profile_picture)
        state.profilConnected = { ...state.profilConnected, profile_picture: picture }
    },

    setUserData(state, userData) {
      localStorage.removeItem('user');
      state.user = userData;
      state.profilConnected = { ...userData.user, user_type: 'user' };

      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers.common.Authorization = `Bearer ${userData.accessToken}`;

      const userInfo = localStorage.getItem('user');
    },



    setAppLanguage(state, language) {
      state.appLanguage = language;
      localStorage.setItem("lang", language); // Whenever we change the appLanguage we save it to the localStorage
    },


    setUserDataa(state, userData) {
      state.user.user = userData.user;
      localStorage.setItem("user.user", JSON.stringify(userData.user))
    },

    setneigbourhoods(state, data) {
      state.neigbourhoods = data;
    },

    setCountry(state, data) {
      state.country = data;
    },

    setRegion(state, data) {
      state.region = data;
    },

    setDivision(state, data) {
      state.division = data;
    },

    setMunicipality(state, data) {
      state.municipality = data;
    },

    setLocality(state, data) {
      state.locality = data;
    },

    setCategories(state, data) {
      state.categories = data;
    },

    setSubcategories(state, data) {
      state.subcategories = data;
    },

    setFilters(state, data) {
      state.filters = data;
    },

    Setcategoryfiters(state, data) {
      state.category_fiters = data;
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
      localStorage.removeItem('user');
      location.reload();
    },

    profilConnected(state, payload) {
      state.profilConnected = payload
    },
  },


  actions: {
    sendOtp({ commit }, payload) {
      return axios.post(payload.url, payload).then(({ data }) => {
        console.log(data);
        // commit("setUserData", data.data);
      });
    },

    login({ commit }, credentials) {
      return axios.post("user/login", credentials).then(({ data }) => {
        console.log(data);
        commit("setUserData", data.data);
      });
    },


    neigbourhoods({ commit }, payload) {

      console.log(payload);

      return axios.get("user/neighborhood?lat=" + payload.lat + "&lng=" + payload.lng).then(({ data }) => {

        console.log("logging data for neigbourhood");
        console.log(data);
        commit("setneigbourhoods", data.data);

      });

    },

    country({ commit }) {

      return axios.get("countries").then(({ data }) => {
        console.log(data.data);
        commit("setCountry", data.data);

      });
    },

    region({ commit }, data) {
      return axios.post('regions', data).then(({ data }) => {
        console.log(data);
        commit('setRegion', data.data);
      });
    },

    municipality({ commit }, data) {
      return axios.post("councils", data).then(({ data }) => {
        console.log(data);
        commit('setMunicipality', data.data);
      });
    },

    locality({ commit }, data) {
      return axios.post('neighborhoods', data).then(({ data }) => {
        console.log(data);
        commit('setLocality', data.data);
        return true
      });
    },

    division({ commit }, data) {
      return axios.post("divisions", data).then(({ data }) => {
        console.log(data);
        commit('setDivision', data.data);
      });
    },

    categories({ commit }) {
      return axios.get('category').then(({ data }) => {
        console.log(data);
        commit('setCategories', data.data);
      });
    },

    subcategories({ commit }, data) {
      return axios.post('catergory/subcategory', data).then(({ data }) => {
        console.log(data);
        commit('setSubcategories', data.data);
      });
    },

    completeWelcome({ commit }) {
      localStorage.removeItem('user');
      return axios.get('user/completewelcome').then(({ data }) => {
        console.log(data);
        commit("setUserDataa", data.data);
      });
    },

    businessAround({ commit }) {
      return axios.get('business/around').then(({ data }) => {
        commit('setBusinessAround', data.data);
        console.log(data);
      });
    },

    peopleAround({ commit }) {
      return axios.get('people/around').then(({ data }) => {
        commit('setPeopleAround', data.data);
        console.log(data);
      });
    },

    storeRegisterData({ commit }, userdata) {
      commit('setUserData', userdata);
    },

    logout({ commit }) {
      commit('clearUserData');
    },

    recoverPassword2({ commit }, data) {
      return axios.post('user/reset', data).then(({ data }) => {
        console.log(data);

        commit('setPasswordToken', data.data);
      });
    },

    verify({ commit }, mydata) {
      const url = 'user/verifyOtp/' + this.state.auth.user.user.id;

      return axios.post(url, mydata).then(({ data }) => {
        console.log(data.data);

        commit('setUserData', data.data);
      });
    },



  },

  getters: {
    isLogged: state => !!state.user,
    isVerified: state => !!state.user,
    user: state => state.user,

    getAuthToken(state) {
      return `Bearer ${state.user.accessToken}`;
    },

    profilConnected: state => state.profilConnected,

    neigbourhoods: state => state.neigbourhoods,

    getAppLanguage: (state) => state.appLanguage

  },
};
