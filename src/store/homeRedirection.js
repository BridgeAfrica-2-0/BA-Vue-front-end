import axios from "axios";
//axios.defaults.baseURL = "https://alert.maxinemoffett.com/api/v1/";

export default {
  namespaced: true,
  state: {
    idbissf: 1,
    idbisso: 6,
    etat: 0
  },

  getters: {
    getListKeyWord(state) {
      return 1;
    }
  },

  mutations: {
    setId(state, id) {
      state.idbissf = id;
    }
  },

  actions: {
    businessInfos({ commit }) {
      return axios.get("/profile/user/businesses").then(response => {
        console.log(response.data.data);
        commit("setId", response.data.data[0].business_id);
      });
    },

    listPost({ commit }, data) {
      return axios.get("/alerts/listPostKeywordAlert" + data).then(response => {
        console.log(response.data.data);
        commit("setListPost", response.data.data);
      });
    }
  }
};
