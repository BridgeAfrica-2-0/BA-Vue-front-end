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
  },
  actions: {
    //getting business followers
    async gettingFollowers({ commit }) {
      const res = await axios.get("/api/v1/community/business-follower");
      commit("allFollowers", res.data);
    },

    //getting business people followers
    async gettingPeopleFollowers({ commit }) {
      const res = await axios.get("/api/v1/community/people-follower");
      commit("ppFollowers", res.data);
    },

    //getting business folowings
    async gettingFollowings({ commit }) {
      const res = await axios.get("/api/v1/community/business-following");
      commit("allFollowing", res.data);
    },

    //getting business people folowings
    async gettingPeopleFollowings({ commit }) {
      const res = await axios.get("/api/v1/community/people-following");
      commit("ppFollowing", res.data);
    },

    //joining a network
    async Joining({ commit }) {
      const res = await axios.post("");
      commit("Join", res.data);
    },
  },
};
