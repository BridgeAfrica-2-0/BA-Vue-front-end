import axios from "axios";


export default {
  namespaced: true,
  state: {
    feedbacks: [],
  },

  getters: {
    getFeedbacks(state) {
        return state.feedbacks;
    }
  },

  mutations: {
    setFeedbacks(state, feedbacks) {
        state.feedbacks = feedbacks;
    }
  },

  actions: {

    getFeedbacks( {commit}, path ){
      return axios
      .get(`network/${path}`)
      .then(({ data }) => {
        commit("setFeedbacks", data.data);
        console.log(data);
        console.log(path);

      })
    },

  },
};