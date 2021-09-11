import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: "8|VjFtS2m3B9YuCz5Fw0r94gkWiCs0p9MhfrMpMDZW",
    networkInfo: [],

    networks: [],
    loader: false,
    success: false,
  },
  getters: {
    getnetworkInfo(state) {
        return state.networkInfo;
    },

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
    // sending success value
    getSuccess(state) {
      return state.success;
    },
  },
  mutations: {
    setnetworkInfo(state, networkInfo) {
        state.networkInfo = networkInfo;
    },


    setNetworks(state, payload) {
      state.networks = payload;
    },
    updateNetwork(state, payload) {
      state.networks = [];
    },
    setLoader(state, payload) {
      state.loader = payload;
    },
    setSuccess(state, payload) {
      state.success = payload;
    },
  },
  actions: {
    getnetworkInfo( {commit} ){
        return axios
        .get("network/edit-informaions/1")
        .then(({ data }) => {
            commit("setnetworkInfo", data.data);
          console.log(data);
  
        })
    },


    // temporal signin to get token for developement purpose
    async signIn() {
      this.axios
        .post("/user/login", {
          email: "info@moazateeq.com",
          password: "12345678",
        })
        .then((res) => {
          localStorage.setItem("access_token", res.data.data.accessToken);
        });
    },
    // Get networks from the backend
    async getNetworks({ dispatch, commit }) {
      await dispatch("signIn");
      await this.axios
        .get("network", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
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
    async addNetwork({ commit }, newNetwork) {
      console.log(newNetwork);
      this.axios
        .post("/network", newNetwork, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log("Something went wrong");
        });
    },
    //delete network
    async deleteNetwork() {},
    // Edit a network
    async editNetwork({ dispatch, commit }, editedNetwork) {
      commit("setLoader", true);
      this.axios
        .put(`network/${editedNetwork.id}`, editedNetwork, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then(async (res) => {
          await dispatch("getNetworks");
        })
        .catch((err) => {
          console.log("Something went wrong");
        });
    },
  },
};