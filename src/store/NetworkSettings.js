import axios from "axios";

export default {
  namespaced: true,

  state: {
    followers: [],
    roles: [],
    editors: [],
    blockusers: [],
    blocknetworks: [],
    blockbusiness: [],
    networkinfo: [],
    general: [],
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
    getblocknetworks(state) {
      return state.blockusers;
    },
    getblockbusiness(state) {
      return state.blockusers;
    },
    getNinfo(state) {
      return state.networkinfo;
    }
  },
  
  mutations: {
    // setting general section
    generalSave(state, payload) {
      state.general = payload;
    },
    
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
    setuserblocking(state, blockusers) {
      state.blockusers = blockusers;
    },
    getblocknetworks(state, blocknetworks) {
      state.blockusers = blocknetworks;
    },
    getblockbusiness(state, blockbusiness) {
      state.blockusers = blockbusiness;
    },
    setnetworkinfo(state, networkinfo) {
      state.networkinfo = networkinfo;
    }
  },

  actions: {
    getfollowers({ commit }, networkId) {
      console.log("networkId: ", networkId);
      return axios
        .post(`/network/${networkId}/members/list`).then(({ data }) => {
          commit("setfollowers", data.data.data);
          console.log("data: ", data);
        });
    },

    getroles({ commit }) {
      return axios.get("/network/roles/list").then(({ data }) => {
        commit("setroles", data.data);
        console.log(data);
        console.log("roles data");
      });
    },

    geteditors({ commit }, businessId) {
      return axios.get(`/network/roles/user/${businessId}`).then(({ data }) => {
        commit("seteditors", data.data);
        console.log(data);
      });
    },
    updateEditor({ commit }, businessId) {
      return axios.get(`/network/roles/user/${businessId}`).then(({ data }) => {
        console.log(data);
        return data;
      });
    },

    getblockusers({ commit }, networkId) {
      return axios
        .get(`/network/users/blocked/${networkId}`)
        .then(({ data }) => {
          commit("setuserblocking", data.data);
          console.log("getblockusers", data);
        });
    },
    getblocknetworks({ commit }, networkId) {
      return axios
        .get(`/network/networks/blocked/${networkId}`)
        .then(({ data }) => {
          commit("setnetworkblocking", data.data);
          console.log("getblocknetworks", data);
        });
    },
    getblockbusiness({ commit }, networkId) {
      return axios
        .get(`/network/businesses/blocked/${networkId}`)
        .then(({ data }) => {
          commit("setbusinessblocking", data.data);
          console.log("getblockbusiness", data);
        });
    },

    getnetworkinfo({ commit }, networkId) {
      return axios.get(`/network/${networkId}`).then(({ data }) => {
        commit("setnetworkinfo", data.data);
        console.log(data);
      });
    },

    generalSave({ commit }, payload) {
      console.log("payload", payload)
      return axios.post(`/network/${payload.path}`, payload.formData)
      .then(({ data }) => {
        return data;
      });
    },

    networkDelete({ commit }, payload) {
      console.log("payload", payload)
      return axios.delete(`/network/${payload.path}`)
      .then(({ data }) => {
        return data;
      });
    },

  },

};
