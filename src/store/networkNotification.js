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
    setNotifications(state, notifications) {
        state.notifications = notifications;
    },
  },

  actions: {

    getNotifications( {commit}, dataInfo ){
      console.log("Store File");
      console.log(dataInfo.id); 
      console.log(dataInfo.path);
      return axios
      .get(`network/${dataInfo.id}/${dataInfo.path}`)
      .then(({ data }) => {
          commit("setNotifications", data.data);
        console.log(data);
        console.log(`network/${dataInfo.id}/${dataInfo.path}`);
      })
    },

    MarkAsRead( {commit}, dataInfo ){
      console.log("Store File MarkAsRead");
      console.log(dataInfo.path);
      console.log(dataInfo.formData); 
      return axios
      .post(`/network/${dataInfo.path}`, dataInfo.formData)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
    },
 
  },
};