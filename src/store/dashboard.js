import axios from "axios";

export default {
  namespaced: true,

  state: {

    dashboard_business: [],
    bdasboard_post:[],
    pdashboard_post:[],

    

    
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


    


  },

  actions: {
    



    dashboardBusiness({ commit }, id) {
      return axios.get("businessInfo/"+id).then(({ data }) => {
        console.log(data);
        commit("setDashboardBusiness", data.data);
      });
    },
    

    dashboardBpost({ commit }, id) {
      return axios.get("profile/dashboard/post/business/"+id).then(({ data }) => {
        console.log("thi sisidjdnd dhdkfhdfd djdvnmddjd jdkdhd");
        console.log(data);
        commit("setBdashboardPost", data.data);
      });
    },
    

    dashboardPpost({ commit }) {
      return axios.get("profile/dashboard/post/user").then(({ data }) => {
        console.log(data);
        commit("setPdashboardPost", data.data);
      });
    },





  
  },

  getters: {
    dashboard_business: state => !!state.dashboard_business,
    
  }
};
