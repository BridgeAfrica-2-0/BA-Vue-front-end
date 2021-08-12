import axios from "axios";

export default {
  namespaced: true,
  state: {
    networks: [],
    loader: false,
    success: false,
    notifications: [],
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
    // sending success value
    getSuccess(state) {
      return state.success;
    },
    // sending notifications
    sendNotifications(state) {
      return state.notifications;
    },
  },
  mutations: {
    // setting the networks
    setNetworks(state, payload) {
      state.networks = payload;
    },

    // Update network
    updateNetwork(state, payload) {
      state.networks = [];
    },

    // setting the loader
    setLoader(state, payload) {
      state.loader = payload;
    },

    // setting the success state
    setSuccess(state, payload) {
      state.success = payload;
    },

    // setting notifications
    setNotifications(state, payload) {
      state.notifications = payload;
    },

    // setting the read property
    setAsRead(state, payload) {
      // find the state to be updated
      // change the state
    },

    // delete notifications
    deleteNotifications(sate, payload) {},
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

    // get notifications
    async getNotifications({ dispatch, commit }) {},
    // read notifications
    readNotification({ commit }) {},
    // delete Notifications
    deleteNotification({ commit }) {},
  },
};
