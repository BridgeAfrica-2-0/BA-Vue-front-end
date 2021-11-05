  
import axios from "axios";

export default {
  namespaced: true,
  state: {
    businessInfo: [],
    subcategories: [],
  },

  getters: {
    getBusinessInfo(state) {
      return state.businessInfo;
    }
  },

  mutations: {
    setBusinessInfo(state, businessInfo) {
      state.businessInfo = businessInfo;
    },
    setSubcategories(state, data) {
      state.subcategories = data;
    },
  },

  actions: {

    getBusinessInfo( {commit}, businessId ){
      return axios
      .get(`business/info/${businessId}`)
      .then(({ data }) => {
          commit("setBusinessInfo", data.data);
        console.log("Store Data Available");
        console.log(data);

      })
    },

    UpdateInfomation( {commit}, businessData ){
      console.log("businessData.path",businessData.path);
      console.log("businessData.formData",businessData.formData);
      return axios
      .post(businessData.path, businessData.formData)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
    },

    
    subcategories({ commit }, data) {
      return axios.post("catergory/subcategory", data).then(({ data }) => {
        console.log(data);
        commit("setSubcategories", data.data);
      });
    },

  },
};