import axios from "axios";

const state = {
  comments: [],
};
const getters = {};
const actions = {
  async getComments({ commit }, details) {
    await axios
      .get(`market/product/detail/${details.id}/comments/${details.page}`)
      .then((response) => {
        commit;
        console.log("Products comments", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
const mutations = {
  loadComments: (state, newComments) => {
    state.comments.push(newComments);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
