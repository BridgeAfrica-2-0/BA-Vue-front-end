import axios from "axios";

export default {
  namespaced: true,
  state: {
    Followers: [],
    Following: [],
    peopleFollowers: [],
    peopleFollowing: [],
  },
  getters: {
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
  },
  mutations: {
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
  },
  actions: {
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
  },
};
