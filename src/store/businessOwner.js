import axios from "axios";

export default {
  namespaced: true,
  state: {
    networks: [],
    loader: false,
    success: false,
    notifications: [],
    checked: false,
    btnDelLoader: false,
    btnReadLoader: false,

    pendingPosts: [],
    Followers: [],
    Following: [],
    peopleFollowers: [],
    peopleFollowing: [],
    Products: [],
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

    //getting pending posts
    getPosts(state) {
      return state.pendingPosts;
    },
    //getFollowers
    getFollowers(state) {
      return state.Followers;
    },
    //get people Followers
    getPeopleFollowers(state) {
      return state.peopleFollowers;
    },
    //getFollowing
    getFollowing(state) {
      return state.Following;
    },
    //get people Following
    getPeopleFollowing(state) {
      return state.peopleFollowing;
    },

    //get products
    getProducts(state) {
      return state.Products;
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
    //approve post
    setApprove(state, payload) {
      state.pendingPosts = payload;
    },
    //setDisApprove post
    setDisApprove(state, payload) {
      state.pendingPosts = payload;
    },

    //setFollowers
    setFollowers(state, payload) {
      state.Followers = payload;
    },
    //set people followers
    setPeopleFollowers(state, payload) {
      state.peopleFollowers = payload;
    },
    //setFollowing
    setFollowing(state, payload) {
      state.Following = payload;
    },
    //set people following
    setPeopleFollowing(state, payload) {
      state.peopleFollowing = payload;
    },

    //setProducts
    setProducts(state, payload) {
      state.Products = payload;
    },

    //postProducts
    postProducts(state, payload) {
      state.Products = payload;
    },
  },
  actions: {
    // Get networks from the backend
    async getNetworks({ commit }) {
      commit("setLoader", true);
      await axios
        .get("network")
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
    async addNetwork({ dispatch, commit }, newNetwork) {
      axios
        .post("/network", newNetwork)
        .then((res) => {
          dispatch("getNetworks");
        })
        .catch((err) => {
          console.log("Something went wrong");
        });
    },

    // Edit a network
    async editNetwork({ dispatch, commit }, editedNetwork) {
      commit("setLoader", true);
      axios
        .put(`network/${editedNetwork.id}`, editedNetwork)
        .then(async (res) => {
          dispatch("getNetworks");
        })
        .catch((err) => {
          console.log("Something went wrong");
        });
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

    async getPendingPosts({ commit }) {
      commit("setLoader", true);
      const res = await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(() => {
          commit("setPendingPosts", res.data);
          commit("setLoader", false);
        })
        .catch((err) => {
          commit("setLoader", false);
          console.log(err);
        });
    },

    async approvePost({ dispatch, commit }, id) {
      commit("setLoader", true);
      const res = await axios
        .get(`business/show/post/${id}`)
        .then(() => {
          commit("setApprove", res.data);
          dispatch("getPendingPosts");
          commit("setLoader", false);
        })
        .catch((err) => {
          commit("setLoader", false);
          console.log(err);
        });
    },

    async disApprovePost({ dispatch, commit }, id) {
      commit("setLoader", true);
      const res = await axios
        .get(`business/show/post/${id}`)
        .then(() => {
          commit("setDisApprove", res.data);
          dispatch("getPendingPosts");
          commit("setLoader", false);
        })
        .catch((err) => {
          commit("setLoader", false);
          console.log(err);
        });
    },

    //getting business followers from database
    async getFollowers({ commit }) {
      commit("setLoader", true);
      const res = await axios
        .get("community/business-follower")
        .then(() => {
          commit("setFollowers", res.data);
          commit("setLoader", false);
        })
        .catch((err) => {
          commit("setLoader", false);
          console.log(err);
        });
    },

    //getting business people followers from database
    async getPeopleFollowers({ commit }) {
      commit("setLoader", true);
      const res = await axios
        .get("community/people-follower")
        .then(() => {
          commit("setPeopleFollowers", res.data);
          commit("setLoader", false);
        })
        .catch((err) => {
          commit("setLoader", false);
          console.log(err);
        });
    },

    //getting business following from database
    async getFollowing({ commit }) {
      commit("setLoader", true);
      const res = await axios
        .get("community/business-following")
        .then(() => {
          commit("setFollowing", res.data);
          commit("setLoader", false);
        })
        .catch((err) => {
          commit("setLoader", false);
          console.log(err);
        });
    },

    //getting business people following from database
    async getPeopleFollowing({ commit }) {
      commit("setLoader", true);
      const res = await axios
        .get("community/people-following")
        .then(() => {
          commit("setPeopleFollowing", res.data);
          commit("setLoader", false);
        })
        .catch((err) => {
          commit("setLoader", false);
          console.log(err);
        });
    },

    //getting products from market place
    async getProducts({ commit }) {
      commit("setLoader", true);
      const res = await axios
        .get("market/products")
        .then(() => {
          commit("setProducts", res.data);
          commit("setLoader", false);
        })
        .catch((err) => {
          commit("setLoader", false);
          console.log(err);
        });
    },

    //posting products to market place
    async addProducts({ commit }, fd) {
      commit("setLoader", true);
      const res = await axios
        .post("market", fd)
        .then(() => {
          commit("postProducts", res.data);
          commit("setLoader", false);
        })
        .catch((err) => {
          commit("setLoader", false);
          console.log(err);
        });
    },
  },
};
