import axios from "axios";


export default {
  namespaced: true,
  state: {
    peoplefollowers: [],
    peoplefollowings: [],
    businessfollowers: [],
    businessfollowings: [],
    networkfollowers: [],
    networkfollowings: []
  },

  getters: {
    getPeopleFollowers(state) {
        return state.peoplefollowers;
    },
    getPeopleFollowings(state) {
        return state.peoplefollowings;
    },
    getBusinessFollowers(state) {
        return state.businessfollowers;
    },
    getBusinessFollowings(state) {
        return state.businessfollowings;
    },
    getNetworkFollowers(state) {
        return state.networkfollowers;
    },
    getNetworkFollowings(state) {
        return state.networkfollowings;
    },
  },

  mutations: {
    setPeopleFollowers(state, peoplefollowers) {
        state.peoplefollowers = peoplefollowers;
    },
    setPeopleFollowings(state, peoplefollowings) {
        state.peoplefollowings = peoplefollowings;
    },
    setBusinessFollowers(state, businessfollowers) {
        state.businessfollowers = businessfollowers;
    },
    setBusinessFollowings(state, businessfollowings) {
        state.businessfollowings = businessfollowings;
    },
    setNetworkFollowers(state, networkfollowers) {
        state.networkfollowers = networkfollowers;
    },
    setNetworkFollowings(state, networkfollowings) {
        state.networkfollowings = networkfollowings;
    },
  },

  actions: {

    getPeopleFollowers( {commit}, path ){
      return axios
      .get(`network/${path}`)
      .then(({ data }) => {
        commit("setPeopleFollowers", data.data);
        console.log(data);
        console.log(path);

      })
    },
    getPeopleFollowings( {commit}, path ){
      return axios
      .get(`network/${path}`)
      .then(({ data }) => {
        commit("setPeopleFollowings", data.data);
        console.log(path);
        console.log(data);

      })
    },

    getBusinessFollowers( {commit}, path ){
      return axios
      .get(`network/${path}`)
      .then(({ data }) => {
          commit("setBusinessFollowers", data.data);
          console.log(path);
        console.log(data);

      })
    },
    getBusinessFollowings( {commit}, path ){
      return axios
      .get(`network/${path}`)
      .then(({ data }) => {
          commit("setBusinessFollowings", data.data);
          console.log(path);
        console.log(data);

      })
    },

    getNetworkFollowers( {commit}, path ){
      return axios
      .get(`network/${path}`)
      .then(({ data }) => {
          commit("setNetworkFollowers", data.data);
          console.log(path);
        console.log(data);

      })
    },
    getNetworkFollowings( {commit}, path ){
      return axios
      .get(`network/${path}`)
      .then(({ data }) => {
          commit("setNetworkFollowings", data.data);
          console.log(path);
        console.log(data);

      })
    },




  },
};