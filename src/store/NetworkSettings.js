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
    editnetworkinfo: [],
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
      return state.blocknetworks;
    },
    getblockbusinesses(state) {
      return state.blockbusiness;
    },
    getnetworkinfo(state) {
      return state.networkinfo;
    },
    getEditNetworkInfo(state) {
      return state.editnetworkinfo;
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
      console.log("setuserblocking");
      state.blockusers = blockusers;
    },
    setnetworkblocking(state, blocknetworks) {
      console.log("setnetworkblocking");
      state.blocknetworks = blocknetworks;
    },
    setbusinessblocking(state, blockbusiness) {
      console.log("setbusinessblocking");
      state.blockbusiness = blockbusiness;
    },
    setnetworkinfo(state, networkinfo) {
      state.networkinfo = networkinfo;
    },
    seteditnetworkinfo(state, editnetworkinfo) {
      state.editnetworkinfo = editnetworkinfo;
    }
  },

  actions: {
    getfollowers({ commit }, networkId) {
      console.log("networkId: ", networkId);
      return axios
        .post(`/network/${networkId}/members/list`)
        .then(({ data }) => {
          commit("setfollowers", data.data);
          console.log("data: ", data);
        });
    },

    getroles({ commit }) {
      return axios.get("/network/roles/show-roles")
      .then(({ data }) => {
        commit("setroles", data.data);
        console.log(data);
        console.log("roles data");
      });
    },

    geteditors({ commit }, networkId) {
      return axios.post(`/network/${networkId}/members/editor`).then(({ data }) => {
        commit("seteditors", data.data);
        console.log(data);
      });
    },
    updateEditor({ commit }, data) {
      console.log("updateEditor", data);
      return axios.post(`/network/${data.path}`, data.formData).then(({ data }) => {
        console.log(data);
        return data;
      });
    },

    getblockusers({ commit }, networkId) {
      console.log("getblockusers")
      return axios
        .get(`/network/users/blocked/${networkId}`)
        .then(({ data }) => {
          commit("setuserblocking", data.data);
          console.log("getblockusers", data);
        });
    },
    getblocknetworks({ commit }, networkId) {
      console.log("getblocknetworks");
      return axios
        .get(`/network/networks/blocked/${networkId}`)
        .then(({ data }) => {
          commit("setnetworkblocking", data.data);
          console.log("getblocknetworks", data);
        });
    },
    getblockbusinesses({ commit }, networkId) {
      console.log("getblockbusinesses");
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
    getEditNetworkInfo({ commit }, netData) {
      return axios.get(`/network/${netData}`).then(({ data }) => {
        commit("seteditnetworkinfo", data.data);
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

    UnBlock({ commit }, payload) {
      console.log("payload", payload)
      return axios.delete(`/network/${payload.path}`)
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

    deleteEditor({ commit }, payload) {
      console.log("payload", payload)
      return axios.delete(`/network/${payload.path}`)
      .then(({ data }) => {
        return data;
      });
    },

    updateNetworkInfo({ commit }, data) {
      console.log("updateNetworkInfo", data)
      return axios.post(`/network/${data.path}`, data.formData)
      .then(({ data }) => {
        return data;
      });
    },

  },

};
