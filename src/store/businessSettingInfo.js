import axios from "axios";

export default {
  namespaced: true,
  state: {
    businessInfo: [],
    subcategories: []
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
    }
  },

  actions: {
    getBusinessInfo({ commit }, businessId) {
      return axios.get(`business/info/${businessId}`).then(({ data }) => {
        commit("setBusinessInfo", data.data);
      });
    },

    UpdateInfomation({ commit }, businessData) {
      // let data={ ...}
      return axios
        .post(businessData.path, businessData.data)
        .then(({ data }) => {
          return data;
        });
    },

    subcategories({ commit }, data) {
      return axios.post("catergory/subcategory", data).then(({ data }) => {
        commit("setSubcategories", data.data);
      });
    }
  }
};
