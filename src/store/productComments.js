import axios from "axios";

const state = {
  comments: [],
};
const getters = {};
const actions = {
  async getComments({ commit }, details) {
    await axios
      .get(`product/detail/${details.id}/comments`)
      .then((response) => {
        commit;
        console.log("Products comments", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
