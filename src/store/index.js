import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import auth from "./auth";
import businessOwner from "./businessOwner";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const getDefaultState = () => {
  return {
    api_link: "https://94e9-154-72-150-118.ngrok.io/api/v1",
    api_link_end: "/business/details",
    token1: "8|Yx3DU4s08aFTYOCa3T2XJKZkjJV4leSi9b20oo5D",
    bdetails: [],
    token: "1|5EyNcoXFcd6d4j8kaizPr8E3gU9lRu9CHqAWPa03",
    userData: [
      {
        profile_business: [
          {
            id: 1,
            logo_path:
              "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
            name: "Super Car ltd",
            category: "Car marketing",
            keywords: null,
            timezone: null,
            about_business:
              "super best car seller in the world adipisicing elit. lorem epsep this is, ar seller in the world adipisicing elit. lorem epsep this is",
            phone: null,
            phone2: null,
            website: null,
            email: null,
            city: "Douala",
            country: "Cameroon",
            neighbourhood: null,
            community: 2000000000
          },
          {
            id: 2,
            logo_path:
              "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
            name: "Super Car ltd",
            category: "Car marketing",
            keywords: null,
            timezone: null,
            about_business:
              "super best car seller in the world adipisicing elit. lorem epsep this is, ar seller in the world adipisicing elit. lorem epsep this is",
            phone: null,
            phone2: null,
            website: null,
            email: null,
            city: "Douala",
            country: "Cameroon",
            neighbourhood: null,
            community: 2000000000
          },
          {
            id: 3,
            logo_path:
              "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
            name: "Super Car ltd",
            category: "Car marketing",
            keywords: null,
            timezone: null,
            about_business:
              "super best car seller in the world adipisicing elit. lorem epsep this is, ar seller in the world adipisicing elit. lorem epsep this is",
            phone: null,
            phone2: null,
            website: null,
            email: null,
            city: "Douala",
            country: "Cameroon",
            neighbourhood: null,
            community: 2000000000
          },
          {
            id: 4,
            logo_path:
              "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
            name: "Super Car ltd",
            category: "Car marketing",
            keywords: null,
            timezone: null,
            about_business:
              "super best car seller in the world adipisicing elit. lorem epsep this is, ar seller in the world adipisicing elit. lorem epsep this is",
            phone: null,
            phone2: null,
            website: null,
            email: null,
            city: "Douala",
            country: "Cameroon",
            neighbourhood: null,
            community: 2000000000
          },
          {
            id: 5,
            logo_path:
              "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
            name: "Super Car ltd",
            category: "Car marketing",
            keywords: null,
            timezone: null,
            about_business:
              "super best car seller in the world adipisicing elit. lorem epsep this is, ar seller in the world adipisicing elit. lorem epsep this is",
            phone: null,
            phone2: null,
            website: null,
            email: null,
            city: "Douala",
            country: "Cameroon",
            neighbourhood: null,
            community: 2000000000
          }
        ]
      }
    ]
  };
};

// initial state
const state = getDefaultState();

const actions = {
  async loadUserProfileBusiness(context, payload) {
    console.log(payload, "load user Profile Business start +++++");
    let response_ = null;
    await fetch(process.env.VUE_APP_API_URL1 + "/api/v1/business", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      }
    })
      .then(response => {
        console.log(
          "load user profile business response (1) +++++++",
          response
        );
        if (response.status !== 200 && response.status !== 201) {
          console.log("error from the server ");
          throw "Error from the Server";
        }
        return response.json();
      })
      .then(response => {
        console.log(
          "load user profile business response (2) successsss +++",
          response
        );
        if (!response) {
          console.log("Error from the server+++++++");
          throw new Error("Error of load Profile Business+++++");
        }
        context.commit("updateUserProfileBusiness", {
          profile_business: response.data.profile_business
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from browser or server error(1)", error);
        throw error;
      });
    return response_;
  },
  async updateUserProfileBusiness(context, payload) {
    console.log(payload, "edit user Profile Business start +++++");
    let response_ = null;
    await fetch(
      process.env.VUE_APP_API_URL1 + "/api/v1/business/create/userBusiness",
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        },
        body: {
          name: payload.business.name,
          category: payload.business.category,
          keywords: payload.business.keywords,
          timezone: payload.business.timezone,
          logo_path: payload.business.logo_path,
          about_business: payload.business.about_business,
          email: payload.business.hasNoEmail ? null : payload.business.email,
          city: payload.business.city.split(",")[0].trim(),
          country: payload.business.city.split(",")[1].trim(),
          website: payload.business.hasNoWebsite
            ? null
            : payload.business.website,
          neighbourhood: payload.business.neighbourhood,
          phone: payload.business.hasNoPhone
            ? null
            : payload.business.phoneId + " " + payload.business.phone,
          phone2: payload.business.hasNoPhone
            ? null
            : payload.business.phoneId + " " + payload.business.phone2
        }
      }
    )
      .then(response => {
        console.log("save new Business response (1) +++++++", response);
        if (response.status !== 200 && response.status !== 201) {
          console.log("Error From the Server ++++ ");
          throw "Error from the Server";
        }
        return response.json();
      })
      .then(response => {
        console.log("save new Business response successsss (2) +++", response);
        if (!response) {
          console.log("Error From The server+++++++");
          throw new Error("Error from save new Business+++++");
        }
        context.commit("storeBusiness", {
          business: {
            name: payload.business.name,
            category: payload.business.category,
            keywords: payload.business.keywords,
            timezone: payload.business.timezone,
            logo_path: payload.business.logo_path,
            about_business: payload.business.about_business,
            email: payload.business.hasNoEmail ? null : payload.business.email,
            city: payload.business.city.split(",")[0].trim(),
            country: payload.business.city.split(",")[1].trim(),
            website: payload.business.hasNoWebsite
              ? null
              : payload.business.website,
            neighbourhood: payload.business.neighbourhood,
            phone: payload.business.hasNoPhone
              ? null
              : payload.business.phoneId + " " + payload.business.phone,
            phone2: payload.business.hasNoPhone
              ? null
              : payload.business.phoneId + " " + payload.business.phone2,
            community: 0
          }
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from the browser or the server error(1)", error);
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
  storeBusiness(state, payload) {
    const newId = state.userData[0].profile_business.length;
    state.userData[0].profile_business.push({
      id: newId,
      ...payload.business
    });
  },
  set_details(state, bdetails) {
    state.bdetails = bdetails;
  }
};

export default new Vuex.Store({
  state,
  getters: {
    getProfileBusiness(state) {
      return state.userData[0].profile_business;
    },
    getdetails(state) {
      return state.bdetails;
    }
  },
  actions,
  mutations,
  modules: {
    auth,
    businessOwner
  }
});
