import axios from "axios";

export default {
  namespaced: true,

  state: {

    dashboard_business: [],
    bdasboard_post: [],
    pdashboard_post: [],
    dBusinessId: null,

  },

  mutations: {

    setDashboardBusiness(state, userData) {
      state.dashboard_business = userData;

    },

    setBdashboardPost(state, userData) {
      state.bdasboard_post = userData;
    },

    setPdashboardPost(state, userData) {
      state.pdashboard_post = userData;

    },

    setdBusinessId(state, data) {
      state.dBusinessId = data
    }
  },

  actions: {
    dashboardBusiness({ commit }, id) {
      return axios.get("profile/businessInfo/" + id).then(({ data }) => {
       
        commit("setDashboardBusiness", data.data);
      });
    },

    dashboardBpost({ commit }, id) {
      return axios.get("profile/dashboard/post/business/" + id).then(({ data }) => {
        commit("setBdashboardPost", data.data);
      });
    },

    dashboardPpost({ commit }) {
      return axios.get("profile/dashboard/post/user").then(({ data }) => {
       
        commit("setPdashboardPost", data.data);
      });
    },






  },

  getters: {
    dashboard_business: state => !!state.dashboard_business,

  }
};
