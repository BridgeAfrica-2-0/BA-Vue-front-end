import axios from "axios";

export default {
  namespaced: true,

  state: {

    dashboard_business: [],
    

    
  },

  mutations: {

    setDashboardBusiness(state, userData) {
      state.dashboard_business = userData;

    },

    


  },

  actions: {
    



    dashboardBusiness({ commit }, id) {
      return axios.get("businessInfo/"+id).then(({ data }) => {
        console.log(data);
        commit("setDashboardBusiness", data.data);
      });
    },





  
  },

  getters: {
    dashboard_business: state => !!state.dashboard_business,
    
  }
};
