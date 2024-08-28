import axios from "axios";

export default {
  namespaced: true,
  state: {
    notifications: [],
    notificationsDetails: [],
    all: []
  },

  getters: {
    getAllNotifications(state) {
      console.log(state.all);
      return state.all;
    }
  },

  mutations: {
    setNotifications(state, notifications) {
      state.notifications = notifications;
      state.all = notifications;
    },
    setNotificationDetails(state, notificationsDetails) {
      state.notificationsDetails = notificationsDetails;
    },

    addNotification(state, notification) {
      state.all = [notification, ...state.all];
    }
  },

  actions: {
    getNotifications({ commit }, dataInfo) {
      return axios.get(`${dataInfo.id}${dataInfo.path}`).then(({ data }) => {
        console.log("hey yoouu");
        console.log(data.data);
        commit("setNotifications", data);
        commit("setNotificationDetails", data);
      });
    },

    MarkAsRead({ commit }, dataInfo) {
      console.log("Store File MarkAsRead");
      console.log(dataInfo.path);
      console.log(dataInfo.formData);
      return axios
        .post(`/${dataInfo.path}`, dataInfo.formData)
        .then(({ data }) => {
          console.log(data);
          return data;
        });
    },

    Delete({ commit }, dataInfo) {
      console.log("Store File Delete");
      console.log(dataInfo.path);
      console.log(dataInfo.formData);
      return axios
        .post(`/${dataInfo.path}`, dataInfo.formData)
        .then(({ data }) => {
          console.log(data);
          return data;
        });
    }
  }
};
