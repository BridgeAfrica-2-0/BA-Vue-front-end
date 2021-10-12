import axios from "axios";

export default {
  namespaced: true,
  state: {
    notifications: []
  },

  getters: {
    getNotifications(state) {
      return state.notifications;
    }
  },

  mutations: {
    setnotifications(state, notifications) {
        state.notifications = notifications;
    },
  },

  actions: {

    getNotifications( {commit}, path ){
      console.log(path);
      return axios
      .post(`network/${path}`)
      .then(({ data }) => {
          commit("setnotifications", data.data);
        console.log(data);
      })
    },
 
  },
};