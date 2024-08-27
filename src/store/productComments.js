import axios from "axios";

const state = {
  comments: []
};
const getters = {};
const actions = {
  async getComments({ commit }, details) {
    return await new Promise((resolve, reject) => {
      axios
        .get(`market/product/detail/${details.id}/comments/${details.page}`)
        .then(response => {
          commit("setComment", response.data.data);
          console.log("Products comments", response.data);
          resolve(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    });
  },
  async getProductLikes({ commit }, idproduct) {
    return await new Promise((resolve, reject) => {
      axios
        .get(`/market/product/detail/${idproduct}/like`)
        .then(response => {
          commit;
          console.log(response.data);
          resolve(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    });
  },

  async productLikes({ commit }, idproduct) {
    return await new Promise((resolve, reject) => {
      axios
        .get(`/market/product/detail/${idproduct}/like`)
        .then(response => {
          commit;
          console.log(response.data);
          resolve(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    });
  },
  async postComment({ commit }, newComment) {
    await axios
      .post(`/market/product/${newComment.idproduct}/comment/create`, {
        comment: newComment.text
      })
      .then(response => {
        commit;
        console.log(response.data);
      });
  },
  async deleteComment({ commit }, details) {
    await axios
      .delete(
        `market/product/${details.idproduct}/comment/${details.idcomment}/delete `
      )
      .then(response => {
        commit;
        console.log(response.data);
      });
  }
};
const mutations = {
  // loadComments: (state, newComments) => {
  //   if (newComments.lenght) {
  //     state.comments = [...state.comments, ...newComments];
  //     console.log("Product comment mutations",state.comments);
  //   }
  // },

  setComment(state, data) {
    data.map(item => {
      state.comments.push(item);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
