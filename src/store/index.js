import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";

import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const getDefaultState = () => {
  return {
    token: "1|5EyNcoXFcd6d4j8kaizPr8E3gU9lRu9CHqAWPa03",
    api_link: "https://94e9-154-72-150-118.ngrok.io/api/v1",
    api_link_end: "/business/details",
    token1: "8|Yx3DU4s08aFTYOCa3T2XJKZkjJV4leSi9b20oo5D",
    bdetails: [],
    userData: [
      {
        profile_community: {
          people: {
            user_followers: [
              {
                id: 1,
                profile_picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "He TONTON LA FORCE",
                followers: 5000,
                messages: [],
                communities: []
              },
              {
                id: 2,
                profile_picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                followers: 5000,
                messages: [],
                communities: []
              },
              {
                id: 3,
                profile_picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                followers: 5000,
                messages: [],
                communities: []
              },
              {
                id: 4,
                picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                community: 5000,
                messages: [],
                communities: []
              },
              {
                id: 5,
                picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                community: 5000,
                messages: [],
                communities: []
              }
            ],
            user_following: [
              {
                id: 1,
                profile_picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "He TONTON LA FORCE",
                followers: 5000,
                messages: [],
                communities: []
              },
              {
                id: 2,
                profile_picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                followers: 5000,
                messages: [],
                communities: []
              },
              {
                id: 3,
                profile_picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                followers: 5000,
                messages: [],
                communities: []
              },
              {
                id: 4,
                picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                community: 5000,
                messages: [],
                communities: []
              },
              {
                id: 5,
                picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                community: 5000,
                messages: [],
                communities: []
              }
            ],
            total_user_following: 2,
            total_user_follower: 2,
            total_people: 4
          },
          business: {
            business_followers: [
              {
                id: 1,
                profile_picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd Yesss",
                category: "Car marketing",
                followers: 20000000,
                city: "Douala",
                country: "Cameroon",
                about_description:
                  "super best car seller in the world adipisicing elit. lorem epsep his is",
                communities: [],
                messages: [],
                directions: []
              },
              {
                id: 2,
                profile_picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                followers: 20000,
                city: "Douala",
                country: "Cameroon",
                about_description:
                  "super best car seller in the world adipisicing elit. lorem epsep his is",
                communities: [],
                messages: [],
                directions: []
              },
              {
                id: 3,
                profile_picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                followers: 20000,
                city: "Douala",
                country: "Cameroon",
                about_description:
                  "super best car seller in the world adipisicing elit. lorem epsep his is",
                communities: [],
                messages: [],
                directions: []
              },
              {
                id: 4,
                profile_picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                followers: 20000,
                city: "Douala",
                country: "Cameroon",
                about_description:
                  "super best car seller in the world adipisicing elit. lorem epsep his is",
                communities: [],
                messages: [],
                directions: []
              },
              {
                id: 5,
                profile_picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                followers: 20000,
                city: "Douala",
                country: "Cameroon",
                about_description:
                  "super best car seller in the world adipisicing elit. lorem epsep his is",
                communities: [],
                messages: [],
                directions: []
              }
            ],
            business_following: [
              {
                id: 1,
                profile_picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd Yesss",
                category: "Car marketing",
                followers: 20000000,
                city: "Douala",
                country: "Cameroon",
                about_description:
                  "super best car seller in the world adipisicing elit. lorem epsep his is",
                communities: [],
                messages: [],
                directions: []
              },
              {
                id: 2,
                profile_picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                followers: 20000,
                city: "Douala",
                country: "Cameroon",
                about_description:
                  "super best car seller in the world adipisicing elit. lorem epsep his is",
                communities: [],
                messages: [],
                directions: []
              },
              {
                id: 3,
                profile_picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                followers: 20000,
                city: "Douala",
                country: "Cameroon",
                about_description:
                  "super best car seller in the world adipisicing elit. lorem epsep his is",
                communities: [],
                messages: [],
                directions: []
              },
              {
                id: 4,
                profile_picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                followers: 20000,
                city: "Douala",
                country: "Cameroon",
                about_description:
                  "super best car seller in the world adipisicing elit. lorem epsep his is",
                communities: [],
                messages: [],
                directions: []
              },
              {
                id: 5,
                profile_picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                followers: 20000,
                city: "Douala",
                country: "Cameroon",
                about_description:
                  "super best car seller in the world adipisicing elit. lorem epsep his is",
                communities: [],
                messages: [],
                directions: []
              }
            ],
            total_business_follower: 0,
            total_business_following: 0,
            total_business: 0
          },
          total_community: [[4]]
        }
      }
    ]
  };
};

const state = getDefaultState();

const actions = {
  async loadUserProfileCommuntity(context, payload) {
    console.log(payload, "load user profile Community start +++++");
    let response_ = null;
    await fetch(process.env.VUE_APP_API_URL1 + "/api/v1/profile/community", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      }
    })
      .then(response => {
        console.log(
          "load user profile community response (1) +++++++",
          response
        );
        if (response.status !== 200 && response.status !== 201) {
          console.log("error from the server +++++ ");
          throw "Error from the Server +++++";
        }
        return response.json();
      })
      .then(response => {
        console.log(
          "load user biography response (2) successsss +++",
          response
        );
        if (!response) {
          console.log("Error from the server+++++++");
          throw new Error("Error of load Biography+++++");
        }
        context.commit("updateUserProfileCommunity", {
          profile_community: response.data
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from browser or server error(1)", error);
        throw error;
      });
    return response_;
  },
  getbdetails({ commit }) {
    return axios.get("/business/details", {}).then(function({ data }) {
      commit("set_details", data.data);
      console.log(data);
    });
  }
};


const mutations = {
  updateUserProfileCommunity(state, payload) {
    state.userData[0].profile_community = payload.profile_community;
  },
  set_details(state, bdetails) {
    state.bdetails = bdetails;
  }
};

const getters = {
  getdetails(state) {
    return state.bdetails;
  }
};

export default new Vuex.Store({
  state,
  getters: {
    getProfileCommunity(state) {
      return state.userData[0].profile_community;
    }
  },
  actions,
  mutations,
  modules: {
    auth,
    businessOwner
  }
});
