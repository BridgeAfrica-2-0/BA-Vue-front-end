import axios from "axios";

export default {
  namespaced: true,

  state: {
    followers: [],
    roles: [],
    editors: [],
    blockusers: []
  },

  actions: {
    getNetwork({ commit }) {
      return axios.get("/popularNetwork", {}).then(function({ data }) {
        commit("set_details", data.data);
        console.log(data);
      });
    },
    getRoles({ commit }) {
      return axios.get("", {}).then(function({ data }) {
        commit("set_roles", data.data);
        console.log(data);
      });
    },
    getfollowers({ commit }) {
      return axios.get("profile/community").then(({ data }) => {
        commit("setfollowers", data.data);
        console.log(data);
      });
    },

    getroles({ commit }) {
      return axios.get("business/role/displayRole").then(({ data }) => {
        commit("setroles", data.data);
        console.log(data);
      });
    },

    geteditors({ commit }, businessId) {
      return axios
        .get("business/role/editor/" + businessId)
        .then(({ data }) => {
          commit("seteditors", data.data);
          console.log(data);
        });
    },

    getblockusers({ commit }, businessId) {
      return axios.get(`business/blocking/${businessId}`).then(({ data }) => {
        commit("setblocking", data.data);
        console.log(data);
      });
    }
  },

  mutations: {
    set_details(state, details) {
      state.NetworkDetails = details;
    },
    set_roles(state, details) {
      state.NetworkRoles = details;
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
    }
  },

  getters: {
    getNetworkDetails(state) {
      return state.NetworkDetails;
    },
    getNetworkROles(state) {
      return state.NetworkRoles;
    },
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
    }
  }
};
