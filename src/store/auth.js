import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_API_URL_DEV;

export default {
  namespaced: true,

  state: {
    user: [],
    isVerified: null,
    passwordToken: null,
    registerData: null,

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
  },

  mutations: {
    setUserData(state, userData) {
      state.user = userData;

      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common.Authorization = `Bearer ${userData.accessToken}`;

      const userInfo = localStorage.getItem("user");
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
      localStorage.removeItem("user");
      location.reload();
    },
  },

  actions: {
    login({ commit }, credentials) {
      return axios.post("user/login", credentials).then(({ data }) => {
        commit("setUserData", data.data);
      });
    },

    country({ commit }) {
      return axios.get("countries").then(({ data }) => {
        console.log(data);
        commit("setCountry", data.data);
      });
    },

    region({ commit }, data) {
      return axios.post("regions", data).then(({ data }) => {
        console.log(data);
        commit("setRegion", data.data);
      });
    },

    municipality({ commit }, data) {
      return axios.get("councils", data).then(({ data }) => {
        console.log(data);
        commit("setMunicipality", data.data);
      });
    },

    locality({ commit }, data) {
      return axios.post("neighborhoods", data).then(({ data }) => {
        console.log(data);
        commit("setLocality", data.data);
      });
    },

    division({ commit }, data) {
      return axios.get("divisions ", data).then(({ data }) => {
        console.log(data);
        commit("setDivision", data.data);
      });
    },

    categories({ commit }) {
      return axios.get("category").then(({ data }) => {
        console.log(data);
        commit("setCategories", data.data);
      });
    },

    subcategories({ commit }, data) {
      return axios.post("catergory/subcategory", data).then(({ data }) => {
        console.log(data);
        commit("setSubcategories", data.data);
      });
    },

    filters({ commit }) {
      return axios.get("user/completewelcome").then(({ data }) => {
        console.log(data);
        commit("setFilters", data.data);
      });
    },

    Setcategoryfiters({ commit }) {
      return axios.get("user/completewelcome").then(({ data }) => {
        console.log(data);
        commit("Setcategoryfiters", data.data);
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
        console.log(data);

        commit("setPasswordToken", data.data);
      });
    },

    verify({ commit }, mydata) {
      const url = "user/verifyOtp/" + this.state.auth.user.user.id;

      return axios.post(url, mydata).then(({ data }) => {
        console.log(data.data);

        commit("setUserData", data.data);
      });
    },
  },

  getters: {
    isLogged: (state) => !!state.user,
    isVerified: (state) => !!state.user,
    user: (state) => state.user,

    getAuthToken(state) {
      return `Bearer ${state.user.accessToken}`
    },

  },
};
