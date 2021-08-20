import axios from "axios";

export default {
  namespaced: true,
  state: {
    networks: [],
    loader: false,
    success: false,
    notifications: [],
    checked: false,
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
  },
  actions: {
    // temporal signin to get token for developement purpose
    async signIn() {
      axios
        .post("/user/login", {
          email: "info@moazateeq.com",
          password: "12345678",
        })
        .then((res) => {
          localStorage.setItem("access_token", res.data.data.accessToken);
        });
    },
    // Get networks from the backend
    async getNetworks({ dispatch, commit }) {
      commit("setLoader", true);
      await dispatch("signIn");
      await axios
        .get("network", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((res) => {
          commit("setLoader", false);
          commit("setSuccess", true);
          commit("setNetworks", res.data.data);
          setTimeout(() => {
            commit("setSuccess", false);
          }, 2000);
        })
        .catch((err) => {
          console.log("Unauthorized request !!");
        });
    },

    // Add network to the database but doesn't work correctly for now
    async addNetwork({ commit }, newNetwork) {
      console.log(newNetwork);
      axios
        .post("/network", newNetwork, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log("Something went wrong");
        });
    },
    //delete network
    async deleteNetwork() {},
    // Edit a network
    async editNetwork({ dispatch, commit }, editedNetwork) {
      commit("setLoader", true);
      axios
        .post(`network/${editedNetwork.id}`, editedNetwork, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "application/json",
          },
        })
        .then(async (res) => {
          console.log(res.data);
          await dispatch("getNetworks");
        })
        .catch((err) => {
          console.log("Something went wrong");
        });
    },

    // Getting the notifications
    async getNotifications({ dispatch, commit }) {
      commit("setLoader", true);
      await dispatch("signIn");
      await axios
        .get("notification")
        .then((res) => {
          commit("setLoader", false);
          commit("setSuccess", true);
          commit("setNotifications", res.data.data);
          setTimeout(() => {
            commit("setSuccess", false);
          }, 2000);
        })
        .catch((err) => {
          console.log("Unauthorized request !!");
        });
    },

    // Sending a read request
    async readNotifiactions({ dispatch, commit }, payload) {
      let items = {
        ids: [],
      };

      payload.forEach((element) => {
        let objId = {
          id: null,
        };
        objId.id = element.id;
        items.ids.push(objId);
      });
      await axios.post("notification/mark-read", items).then(() => {
        dispatch("getNotifications");
      });
    },

    // Delete All Notifications
    async deleteNotifications({ dispatch, commit }, payload) {
      let items = {
        ids: [],
      };

      payload.forEach((element) => {
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
      axios
        .delete(`notification/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then(() => {
          dispatch("getNotifications");
        });
    },
  },
};
