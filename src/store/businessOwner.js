import axios from "axios";

export default {
  namespaced: true,
  state: {
    networks: [],
    loader: false,
<<<<<<< HEAD
    success: false,
    notifications: [],
    checked: false,
    btnDelLoader: false,
    btnReadLoader: false,

=======
    success: false
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
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
<<<<<<< HEAD
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


=======
    }
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
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
<<<<<<< HEAD
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
 
=======
    }
  },
  actions: {
    // temporal signin to get token for developement purpose
    async signIn() {
      axios
        .post("/user/login", {
          email: "info@moazateeq.com",
          password: "12345678"
        })
        .then(res => {
          localStorage.setItem("access_token", res.data.data.accessToken);
        });
    },
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
    // Get networks from the backend
    async getNetworks({ commit }) {
      commit("setLoader", true);
      await axios
<<<<<<< HEAD
        .get("network")
        .then((res) => {
=======
        .get("/network", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        })
        .then(res => {
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
          commit("setLoader", false);
          commit("setSuccess", true);
          commit("setNetworks", res.data.data);
          setTimeout(() => {
            commit("setSuccess", false);
          }, 2000);
        })
        .catch(err => {
          console.log("Unauthorized request !!");
        });
    },

    // Add network to the database but doesn't work correctly for now
    async addNetwork({ dispatch, commit }, newNetwork) {
      axios
<<<<<<< HEAD
        .post("/network", newNetwork)
        .then((res) => {
          dispatch("getNetworks");
=======
        .post("/network", newNetwork, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        })
        .then(res => {
          console.log(res.data);
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
        })
        .catch(err => {
          console.log("Something went wrong");
        });
    },

    // Edit a network
    async editNetwork({ dispatch, commit }, editedNetwork) {
      commit("setLoader", true);
      axios
<<<<<<< HEAD
        .put(`network/${editedNetwork.id}`, editedNetwork)
        .then(async (res) => {
          dispatch("getNetworks");
=======
        .put(`/network/${editedNetwork.id}`, editedNetwork, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        })
        .then(async res => {
          await dispatch("getNetworks");
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
        })
        .catch(err => {
          console.log("Something went wrong");
        });
<<<<<<< HEAD
    },

    // Getting the notifications
    async getNotifications({ dispatch, commit }) {
      commit("setLoader", true);

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
          commit("setLoader", false);
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
      await axios
        .post("notification/mark-read", items)
        .then(() => {
          dispatch("getNotifications");
        })
        .catch((err) => [console.log(err)]);
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
      axios.delete(`notification/${id}`).then(() => {
        dispatch("getNotifications");
      });
    },
   
  },
=======
    }
  }
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
};
