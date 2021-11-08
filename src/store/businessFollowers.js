import axios from "axios";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("access_token");
export default {
  namespaced: true,
  state: {
    Followers: [],
    Following: [],
    peopleFollowers: [],
    peopleFollowing: [],
    Networks: [],

    notifications: [],
    loader: false,
  },
  getters: {
    //getting followers from store
    getFollowers(state) {
      return state.Followers;
    },

    //getting followers from store
    getPeopleFollowers(state) {
      return state.peopleFollowers;
    },

    //getting following
    getFollowing(state) {
      return state.Following;
    },

    //getting people following
    getPeopleFollowing(state) {
      return state.peopleFollowing;
    },

    // sending loader value
    getLoader(state) {
      return state.loader;
    },

    // Sending notifications
    sendNotifications(state) {
      if (state.notifications.length > 0) {
        return state.notifications;
      }
    },
  },
  mutations: {
    //setting followers
    allFollowers(state, payload) {
      state.Followers = payload;
    },

    //setting followers
    ppFollowers(state, payload) {
      state.peopleFollowers = payload;
    },

    //setting followings
    allFollowing(state, payload) {
      state.Following = payload;
    },
    //setting followings
    ppFollowing(state, payload) {
      state.peopleFollowing = payload;
    },

    //setting joining network
    Join(state, payload) {
      state.Networks = payload;
    },

    setLoader(state, payload) {
      state.loader = payload;
    },

    // Setting the notifications in the state
    setNotifications(state, payload) {
      state.notifications = payload;
    },
  },
  actions: {
    //getting business followers
    async gettingFollowers({ commit }) {
      const res = await axios.get("/community/business-follower");
      commit("allFollowers", res.data);
    },

    //getting business people followers
    async gettingPeopleFollowers({ commit }) {
      const res = await axios.get("/community/people-follower");
      commit("ppFollowers", res.data);
    },

    //getting business folowings
    async gettingFollowings({ commit }) {
      const res = await axios.get("/community/business-following");
      commit("allFollowing", res.data);
    },

    //getting business people folowings
    async gettingPeopleFollowings({ commit }) {
      const res = await axios.get("/community/people-following");
      commit("ppFollowing", res.data);
    },

    // joining a network
    async Joining({ commit }) {
      const res = await axios.post("");
      commit("Join", res.data);
    },

    // Getting the notifications
    async getNotifications({ dispatch, commit }) {
      commit("setLoader", true);

      await axios
        .get("/notification")
        .then((res) => {
          commit("setLoader", false);
          commit("setNotifications", res.data.data);
          setTimeout(() => {}, 2000);
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
        .post("/notification/mark-read", items)
        .then(() => {
          dispatch("getNotifications");
        })
        .catch((err) => [console.log(err)]);
    },

    // delete a single notification
    deleteOne({ dispatch }, id) {
      axios.delete(`/notification/${id}`).then(() => {
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
      await axios.post("/notification/deleteAll", items).then(() => {
        dispatch("getNotifications");
      });
    },
  },
};
