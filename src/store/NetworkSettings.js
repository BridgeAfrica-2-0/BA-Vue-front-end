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
    getfollowers({ commit }) {
      return axios.get("/profile/community").then(({ data }) => {
        commit("setfollowers", data.data);
        console.log(data);
      });
    },

    getroles({ commit }) {
      return axios.get("/network/displayRole").then(({ data }) => {
        commit("setroles", data.data);
        console.log(data);
        console.log("roles data")
      });
    },

    geteditors({ commit }, businessId) {
      return axios
        .get("/business/role/editor/" + businessId)
        .then(({ data }) => {
          commit("seteditors", data.data);
          console.log(data);
        });
    },

    getblockusers({ commit }, businessId) {
      return axios.get(`/network/blocking/${businessId}`).then(({ data }) => {
        commit("setblocking", data.data);
        console.log(data);
      });
    }
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
    }
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
    }
  }
};
