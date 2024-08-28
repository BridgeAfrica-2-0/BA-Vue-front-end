import axios from "axios";

export default {
  namespaced: true,
  state: {
    feedbacks: []
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
    getFeedbacks({ commit }, path) {
      return axios.get(`network/${path}`).then(({ data }) => {
        commit("setFeedbacks", data.data);
        console.log(data);
        console.log(path);
      });
    },

    async feedbackRequests({ commit }, payload) {
      console.log(payload, "save/edit/delete network feedback start +++++");
      let url = null;
      let config = {};
      if (payload.method === "DELETE") {
        url =
          "network/" +
          payload.data.url +
          "/feedback/delete/" +
          payload.data.user_id;
        config = {
          method: "DELETE"
        };
      }

      let response_ = null;
      await axios(url, config)
        .then(response => {
          console.log(
            "save/edit/delete network feedback response (1) +++++++",
            response
          );
          return response;
        })
        .then(response => {
          console.log(
            "save/edit/delete network feedback response successsss +++",
            response
          );
          if (response.errors) {
            console.log("Error from the server +++++++");
            throw new Error(
              "Error from save/edit/delete network feedback+++++"
            );
          }
          response_ = response;
        })
        .catch(err => {
          console.group({ err: err });
          console.log("error from the server or the browser", err);
          throw err;
        });
      return response_;
    }
  }
};
