import axios from 'axios';
import router from '../router';
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
    cities:[{name:"bbl", id:1}],
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
    password_reset: [],
    last_path:null,
  },

  mutations: {

    updateProfilePicture(state, picture) {
      if (picture !== state.profilConnected.profile_picture)
        state.profilConnected = { ...state.profilConnected, profile_picture: picture }
    },

    addCoverPicture(state, picture) {

      state.profilConnected = { ...state.profilConnected, cover_picture: picture }
      let newUser = JSON.parse(localStorage.getItem('user'));

      newUser.user.cover_picture = picture

      localStorage.setItem('user', JSON.stringify(newUser));

    },

    setUserData(state, userData) {
      localStorage.removeItem('user');
      state.user = userData;
   

      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers.common.Authorization = `Bearer ${userData.accessToken}`;
      const userInfo = localStorage.getItem('user');
      state.profilConnected = { ...userData.user, user_type: 'user'};
    },


    setAppLanguage(state, language) { 
      state.appLanguage = language;
      localStorage.setItem("lang", language); // Whenever we change the appLanguage we save it to the localStorage
    },

    upUserData(state, userData) {
            
      console.log('setting user data');
      console.log(userData);
      state.user.user = userData.user;
      localStorage.setItem("user.user", JSON.stringify(userData.user)) ;
      console.log(state.user);
    },

       
    setUserDataa(state, userData) {
       
      console.log('setting user data');
      console.log(userData);
      state.user.user = userData.user;
      console.log(state.user);
      localStorage.setItem("user.user", JSON.stringify(userData.user))  
    },

    setSignupData(state, userData) {
      state.user = userData;
      localStorage.setItem("signup", JSON.stringify(userData.user))
    },


    setPasswordReset(state, userData) {
      state.password_reset = userData;
     
    },


    setneigbourhoods(state, data) {
      state.neigbourhoods = data;
    },

    setCities(state, data) {
      state.cities = data;
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

    clearUserData(state) {
      localStorage.removeItem('user');
      state.user=[];
  

      var currentUrl = window.location.pathname;

      window.location.href = "/login";

      // console.log(router.app._route);
     
     // router.push({ name: 'Login', query: { redirect: currentUrl } });
  
    },


    profilConnected(state, payload=null) {
      state.profilConnected = (payload) ?  payload : { ...state.user.user, user_type: 'user'};
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

    cities({ commit }, payload) {


      return axios.get("visitor/search/city").then(({ data }) => {

        console.log("logging data for neigbourhood");
        console.log(data);
        commit("setCities", data.data);

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
      // localStorage.removeItem('user');
      return axios.get('user/completewelcome').then(({ data }) => {
        console.log(data.data);
       // commit('setUserDataa', data.data);
        commit('upUserData', data.data);
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
      const url = 'user/verifyOtp/' + mydata.id;

      return axios.post(url, mydata).then(({ data }) => {
        console.log(data.data);

        commit('setUserData', data.data);
      });
    },

    verifyuser({ commit }, payload) {

      return axios.post(payload.url, payload).then(({ data }) => {
        console.log(data.data);

        //commit('setUserData', data.data);
        commit('setPasswordReset', data.data);
      });
    },



    VerifyOtp({ commit }, payload) {

      return axios.post(payload.url, payload).then(({ data }) => {
       // console.log(data.data);

      //  commit('setPasswordReset', data.data);
      return data;
      });
    },

    ResetPassword({ commit }, payload) {

      return axios.post(payload.url, payload).then(({ data }) => {
        console.log(data.data);

        //commit('setUserData', data.data);
      });
    },

  },

  getters: {
    isLogged: state => !!state.user.accessToken,
    isVerified: state => !!state.user,
    user: state => state.user,

    getAuthToken(state) {
      return `Bearer ${state.user.accessToken}`;
    },

    profilConnected: state => state.profilConnected,

    neigbourhoods: state => state.neigbourhoods,

    cities: state => state.cities,

    getAppLanguage: (state) => state.appLanguage

  },
};
