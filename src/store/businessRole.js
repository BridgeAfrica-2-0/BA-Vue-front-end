  
import axios from "axios";

export default {
  namespaced: true,
  state: {
    followers: [],
    roles: [],
    editors: []
  },

  getters: {
    getfollowers(state) {
        return state.followers;
      },
    getroles(state) {
        return state.roles;
      },
    geteditors(state) {
        return state.editors;
      }
  },

  mutations: {
    setfollowers(state, followers) {
        state.followers = followers;
    },
    setroles(state, roles) {
        state.roles = roles;
    },
    seteditors(state, editors) {
        state.editors = editors;
    }
  },

  actions: {     

    getfollowers( {commit}, businessId ){
      return axios
      .get(`business/role/display-users/${businessId}`)
      .then(({ data }) => {
          commit("setfollowers", data.data);
        console.log(data);

      })
    },

    getroles( {commit} ){
      return axios
      .get("business/role/displayRole")
      .then(({ data }) => {
          commit("setroles", data.data);
        console.log(data);

      })
    },

    geteditors( {commit}, businessId ){
      return axios
      .get("business/role/editor/"+businessId)
      .then(({ data }) => {
          commit("seteditors", data.data);
        console.log(data);

      })
    },

    updateEditor( {commit}, businessData ){
      console.log("businessData.path",businessData.path);
      console.log("businessData.formData",businessData.formData);
      return axios
      .post(businessData.path, businessData.formData)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
    },

    assignRole( {commit}, businessData ){
      console.log("businessData.path",businessData.path);
      console.log("businessData.formData",businessData.formData);
      return axios
      .post(businessData.path, businessData.formData)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
    },

    deleteEditor( {commit}, businessData ){
      console.log("businessData.path",businessData.path);
      return axios
      .post(businessData.path)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
    },

  },
};
