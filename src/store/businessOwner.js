import axios from "axios";

export default {
  namespaced: true,
  state: {
    networks: [],
  },
  getters: {
    getnetWorks(state) {
      if (state.networks.length > 0) {
        return state.networks;
      }
    },
  },
  mutations: {
    setNetworks(state, payload) {
      state.networks = payload;
    },
  },
  actions: {
    async signIn() {
      axios
        .post("/user/login", {
          email: "info4@moazateeq.com",
          password: "12345678",
        })
        .then((res) => {
          localStorage.setItem("access_token", res.data.data.accessToken);
        });
    },
    async getNetworks({ dispatch, commit }) {
      await dispatch("signIn");
      await axios
        .get("/network", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((res) => {
          commit("setNetworks", res.data.data);
        })
        .catch((err) => {
          console.log("Unauthorized request !!");
        });
    },
    async addNetwork() {},
    async deleteNetwork() {},
    async editNetwork() {},
  },
};
