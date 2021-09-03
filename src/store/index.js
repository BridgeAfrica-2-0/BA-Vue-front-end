import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const getDefaultState = () => {
  return {
    url_base: "http://team3dev.maxinemoffett.com",
    url_load_business_insight: "/api/v1/business/insights",
    token: "1|5EyNcoXFcd6d4j8kaizPr8E3gU9lRu9CHqAWPa03",
    bdetails: [],
    userData: [
      {
        business_insights: {
          number_likes: 0,
          number_shares: 0,
          number_posts: 0,
          total_likes: 0,
          total_shares: 0,
          total_posts: 0
        }
      }
    ]
  };
};

// initial state
const state = getDefaultState();

const actions = {
  async loadUserBusinessInsight(context, payload) {
    console.log(payload);
    console.log("load user Business Insight start +++++");
    let response_ = null;
    let url = null;
    let config = {};
    if (payload !== null) {
      console.log("Payload does not null ++++++++++");
      url =
        state.url_base +
        state.url_load_business_insight +
        "?dateStarting=" +
        payload.startDate +
        "&dateClosing=" +
        payload.endDate;
      config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    } else {
      console.log("Payload is null");
      url = state.url_base + state.url_load_business_insight;
      config = {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    }
    await fetch(url, config)
      .then(response => {
        console.log(
          "load user Business Insight response (1) +++++++",
          response
        );
        if (response.status !== 200 && response.status !== 201) {
          throw "Errors during processing by the server";
        }
        return response.json();
      })
      .then(response => {
        console.log(
          "load User Business Insight response successsss +++",
          response
        );
        if (!response) {
          console.log("Error From the server +++++++");
          throw new Error("Error for loading Business Insight +++++");
        }
        context.commit("updateUserBusinessInsights", {
          businessInsights: response.data
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from the server or the browser");
        console.log(error);
        context.commit("updateUserBusinessInsights", {
          businessInsights: null
        });
      });
    return response_;
  }
};

const mutations = {
  updateUserBusinessInsights(state, payload) {
    state.userData[0].business_insights = payload.businessInsights;
  }
};

export default new Vuex.Store({
  state,
  getters: {
    getBusinessInsights(state) {
      return state.userData[0].business_insights;
    }
  },
  actions,
  mutations,
  modules: {
    auth,
    businessOwner
  }
});
