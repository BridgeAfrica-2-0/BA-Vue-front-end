import axios from "axios";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("access_token");
export default {
  namespaced: true,
  state: {
    networks: [],
    loader: false,
    success: {
      state: false,
      succes: false,
      msg: "",
    },
    notifications: [],
    checked: false,
    btnDelLoader: false,
    btnReadLoader: false,
  },
  getters: {
    // sending networks
    getnetWorks(state) {
      if (state.networks.length > 0) {
        return state.networks.reverse();
      }
    },
    // sending loader value
    getLoader(state) {
      return state.loader;
    },
    // sending button loader value
    getBtnDelLoader(state) {
      return state.btnDelLoader;
    },
    // sending button loader value
    getBtnReadLoader(state) {
      return state.btnReadLoader;
    },
    // sending success value
    getSuccess(state) {
      return state.success;
    },

    // Sending notifications
    sendNotifications(state) {
      if (state.notifications.length > 0) {
        return state.notifications;
      }
    },

    // sending checked value
    sendChecked(state) {
      return state.checked;
    },
  },
  mutations: {
    setNetworks(state, payload) {
      state.networks = payload;
    },
    setLoader(state, payload) {
      state.loader = payload;
    },
    setSuccess(state, payload) {
      state.success = payload;
    },

    // Setting the notifications in the state
    setNotifications(state, payload) {
      state.notifications = payload;
    },

    // Set Pendinding posts
    setPendingPosts(state, payload) {
      state.pendingPosts = payload;
    },
  },
  actions: {
    // Get networks from the backend
    async getNetworks({ commit }) {
      await axios
        .get("/network")
        .then(res => {
          let sucData = {
            state: true,
            succes: "success",
            msg: "Operation was successfull !!",
          };
          commit("setLoader", false);
          commit("setSuccess", sucData);
          commit("setNetworks", res.data.data);
          setTimeout(() => {
            sucData.state = false;
            sucData.msg = "";
            commit("setSuccess", sucData);
          }, 2000);
        })
        .catch(err => {
          console.log("Unauthorized request !!");
          let sucData = {
            state: true,
            succes: "danger",
            msg: "Unauthorized request !!",
          };
          commit("setLoader", false);
          commit("setSuccess", sucData);
          setTimeout(() => {
            sucData.state = false;
            sucData.msg = "";
            commit("setSuccess", sucData);
          }, 2000);
        });
    },

    // Edit a network
    async editNetwork({ dispatch, commit }, editedNetwork) {
      commit("setLoader", true);
      axios
        .post(`network/${editedNetwork.id}`, editedNetwork.data)
        .then(async res => {
          await dispatch("getNetworks");
        })
        .catch(err => {
          console.log("Something went wrong !!");
          let sucData = {
            state: true,
            succes: "danger",
            msg: "Something went wrong !!",
          };
          commit("setLoader", false);
          commit("setSuccess", sucData);
          setTimeout(() => {
            sucData.state = false;
            sucData.msg = "";
            commit("setSuccess", sucData);
          }, 2000);
        });
    },

    // Getting the notifications
    async getNotifications({ dispatch, commit }) {
      commit("setLoader", true);

      await axios
        .get("notification")
        .then(res => {
          commit("setLoader", false);
          commit("setSuccess", true);
          commit("setNotifications", res.data.data);
          setTimeout(() => {
            commit("setSuccess", false);
          }, 2000);
        })
        .catch(err => {
          commit("setLoader", false);
          console.log("Unauthorized request !!");
        });
    },

    // Sending a read request
    async readNotifiactions({ dispatch, commit }, payload) {
      let items = {
        ids: [],
      };

      payload.forEach(element => {
        let objId = {
          id: null,
        };
        objId.id = element.id;
        items.ids.push(objId);
      });
      await axios
        .post("notification/mark-read", items)
        .then(() => {
          dispatch("getNotifications");
        })
        .catch(err => [console.log(err)]);
    },

    // Delete All Notifications
    async deleteNotifications({ dispatch, commit }, payload) {
      let items = {
        ids: [],
      };

      payload.forEach(element => {
        let objId = {
          id: null,
        };
        objId.id = element;
        items.ids.push(objId);
      });
      await axios.post("notification/deleteAll", items).then(() => {
        dispatch("getNotifications");
      });
    },
    // delete a single notification
    delete({ dispatch }, id) {
      axios.delete(`notification/${id}`).then(() => {
        dispatch("getNotifications");
      });
    },
  },
};
