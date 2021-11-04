import axios from 'axios';

export default {
  namespaced: true,

  state: {
    followers: [],
    roles: [],
    editors: [],
    blockusers: [],
    networkinfo: [],
  },

  actions: {
    getfollowers({ commit }, businessId) {
      return axios.get(`/network/list/member/${businessId}`).then(({ data }) => {
        commit('setfollowers', data.data);
        console.log(data);
      });
    },

    getroles({ commit }) {
      return axios.get('/network/roles/').then(({ data }) => {
        commit('setroles', data.data);
        console.log(data);
        console.log('roles data');
      });
    },

    geteditors({ commit }, businessId) {
      return axios.get(`/network/roles/user/${businessId}`).then(({ data }) => {
        commit('seteditors', data.data);
        console.log(data);
      });
    },

    getblockusers({ commit }, businessId) {
      return axios.get(`/network/blocked-user/${businessId}`).then(({ data }) => {
        commit('setblocking', data.data);
        console.log(data);
      });
    },

    getnetworkinfo({ commit }, businessId) {
      return axios.get(`/network/info/${businessId}`).then(({ data }) => {
        commit('setnetworkinfo', data.data);
        console.log(data);
      });
    },
  },

  mutations: {
    set_details(state, details) {
      state.NetworkDetails = details;
    },
    setfollowers(state, followers) {
      state.followers = followers;
    },
    setroles(state, roles) {
      state.roles = roles;
    },
    seteditors(state, editors) {
      state.editors = editors;
    },
    setblocking(state, blockusers) {
      state.blockusers = blockusers;
    },
    setnetworkinfo(state, networkinfo) {
      state.networkinfo = networkinfo;
    },
  },

  getters: {
    getfollowers(state) {
      return state.followers;
    },
    getroles(state) {
      return state.roles;
    },
    geteditors(state) {
      return state.editors;
    },
    getblockusers(state) {
      return state.blockusers;
    },
    getNinfo(state) {
      return state.networkinfo;
    },
  },
};
