import axios from "axios";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("access_token");
export default {
  namespaced: true,
  state: {
    networks: [],
    loader: false,
    success: {
      state: false,
      succes: false,
      msg: "",
    },
  },
  getters: {
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
    // Get networks from the backend
    async getNetworks({ commit }) {
      await axios
        .get("/network")
        .then(res => {
          let sucData = {
            state: true,
            succes: "success",
            msg: "Operation was successfull !!",
          };
          commit("setLoader", false);
          commit("setSuccess", sucData);
          commit("setNetworks", res.data.data);
          setTimeout(() => {
            sucData.state = false;
            sucData.msg = "";
            commit("setSuccess", sucData);
          }, 2000);
        })
        .catch(err => {
          console.log("Unauthorized request !!");
          let sucData = {
            state: true,
            succes: "danger",
            msg: "Unauthorized request !!",
          };
          commit("setLoader", false);
          commit("setSuccess", sucData);
          setTimeout(() => {
            sucData.state = false;
            sucData.msg = "";
            commit("setSuccess", sucData);
          }, 2000);
        });
    },

    // Add network to the database but doesn't work correctly for now
    async addNetwork({ dispatch, commit }, newNetwork) {
      commit("setLoader", true);
      axios
        .post("/network", newNetwork)
        .then(res => {
          dispatch("getNetworks");
        })
        .catch(err => {
          console.log("Something went wrong !!");
          let sucData = {
            state: true,
            succes: "danger",
            msg: "Something went wrong !!",
          };
          commit("setLoader", false);
          commit("setSuccess", sucData);
          setTimeout(() => {
            sucData.state = false;
            sucData.msg = "";
            commit("setSuccess", sucData);
          }, 2000);
        });
    },
    //delete network
    async deleteNetwork({ dispatch }, network) {
      axios
        .post(`/network/${network.id}`)
        .then(res => {
          dispatch("getNetworks");
        })
        .catch(err => {
          console.log("Something went wrong");
        });
    },
    // Edit a network
    async editNetwork({ dispatch, commit }, editedNetwork) {
      commit("setLoader", true);
      axios
        .post(`network/${editedNetwork.id}`, editedNetwork)
        .then(async res => {
          await dispatch("getNetworks");
        })
        .catch(err => {
          console.log("Something went wrong !!");
          let sucData = {
            state: true,
            succes: "danger",
            msg: "Something went wrong !!",
          };
          commit("setLoader", false);
          commit("setSuccess", sucData);
          setTimeout(() => {
            sucData.state = false;
            sucData.msg = "";
            commit("setSuccess", sucData);
          }, 2000);
        });
    },
  },
};
