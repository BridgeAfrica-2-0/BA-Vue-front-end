  
import axios from "axios";

export default {
  namespaced: true,
  state: {
    followers: []
  },

  getters: {
    getfollowers(state) {
        return state.followers;
    }
  },

  mutations: {
    setfollowers(state, followers) {
        state.followers = followers;
    },
  },

  actions: {

    getfollowers( {commit}, businessId ){
      return axios
      .get(`business/community/people/${businessId}`)
      .then(({ data }) => {
          commit("setfollowers", data.data);
        console.log(data);

      })
    },



    updateOrderStatus( {commit}, data ){
      console.log("updateOrderStatus");
      console.log("data.path",data.path);
      console.log("data.status",data.formData);
      return axios
      .post(`/${data.path}`, data.formData)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
    },


  },
};
