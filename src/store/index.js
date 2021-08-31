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
    url_load_business_about: "/api/v1/business/info",
    url_update_business_about_name: "/api/v1/business/update",
    url_update_business_biography: "/api/v1/business/businessBiography",
    token: "1|5EyNcoXFcd6d4j8kaizPr8E3gU9lRu9CHqAWPa03",
    api_link: "https://94e9-154-72-150-118.ngrok.io/api/v1",
    api_link_end: "/business/details",
    token1: "8|Yx3DU4s08aFTYOCa3T2XJKZkjJV4leSi9b20oo5D",
    bdetails: [],
    userData: [
      {
        id: "",
        fullname: "",
        username: "TONTON LA FORCE LE BEAU GOSSE",
        email: "",
        password: "",
        profileName: "TONTON LA FORCE LE BEAU GOSSE",
        profilePicture: null,
        target: null,
        coverImage: null,
        numbersOfFollowers: 30,
        business_about: {
          biography: {
            title: "About Mapoure Agrobusiness",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
              "              Asperiores temporibus, rerum iste id obcaecati quae odit accusamus\n" +
              "              reprehenderit, ipsa nam laudantium pariatur. Harum, soluta. Nam\n" +
              "              accusantium hic numquam architecto debitis. Lorem ipsum dolor sit\n" +
              "              amet consectetur adipisicing elit. Asperiores temporibus, rerum\n" +
              "              iste id obcaecati quae odit accusamus reprehenderit, ipsa nam\n" +
              "              laudantium pariatur. Harum, soluta. Nam accusantium hic numquam\n" +
              "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
              "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
              "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
              "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
              "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
              "              quae odit accusamus reprehenderit, ipsa nam laudantium pariatur.\n" +
              "              quae odit accusamus reprehenderit, ipsa nam laudantium pariatur.\n" +
              "              Harum, soluta. Nam accusantium hic numquam architecto debitis."
          },
          address: {
            businessName: "Current or Last Organization",
            category: "Agriculture",
            keywords: "Agriculture",
            country: "Cameroun",
            city: "Yaounde",
            NeigbourHood: "Melen",
            phones: { phone_1: "+237656602212", phone_2: "+237677754814" },
            businessEmail: "info@businessname.com",
            businessHours: {
              open: "Always Open",
              dayOfWorks: [
                { day: "Monday", start: 1, end: 10, check: false },
                { day: "Tuesday", start: null, end: null, check: false },
                { day: "Wednesday", start: null, end: null, check: false },
                { day: "Thursday", start: null, end: null, check: false },
                { day: "Friday", start: null, end: null, check: false },
                { day: "Saturday", start: null, end: null, check: false },
                { day: "Sunday", start: null, end: null, check: false }
              ]
            }
          }
        },
        business_about1: {
          name: "Tierra Hermiston",
          logo_path: "http://localhost:8000/storage",
          category: "Hourse Marketing",
          keywords: null,
          language: null,
          location_description:
            "Tempore quo soluta voluptates quis. Doloremque autem minus ut nisi molestias maiores cum. Et assumenda velit expedita et et sint sed in.",
          website: null,
          community: 6,
          phone: null,
          email: null,
          business_open_hours: [
            {
              day: "monday",
              opening_time: "09:05:12",
              closing_time: "15:06:18"
            },
            {
              day: "tuesday",
              opening_time: "07:05:38",
              closing_time: "14:05:43"
            }
          ],
          region: null,
          address: null,
          city: null,
          country: null,
          lat: -56.200329,
          lng: -6.249487
        }
      }
    ]
  };
};

// initial state
const state = getDefaultState();

const actions = {
  async loadUserBusinessAbout(context, payload) {
    console.log(payload);
    console.log("load user Business About start +++++");
    let response_ = null;
    const id_Business = 1;
    await fetch(
      state.url_base + state.url_load_business_about + "/" + id_Business,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      }
    )
      .then(response => {
        console.log("load user Business About response (1) +++++++");
        console.log(response);
        if (response.status !== 200 && response.status !== 201) {
          throw "Error from the server";
        }
        return response.json();
      })
      .then(response => {
        console.log("load user Business About response successsss +++");
        console.log(response);
        if (!response) {
          console.log("Error from the server+++++++");
          throw new Error("Error for loading Business About +++++");
        }
        context.commit("updateUserBusinessAbout", {
          businessAbout: response.data
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from the server or the browser");
        console.log(error);
      });
    return response_;
  },
  async updateUserBusinessAbout(context, payload) {
    console.log(payload);
    console.log("update user Business About start +++++");
    let response_ = null;
    const id_Business = 1;
    await fetch(
      state.url_base + state.url_update_business_about_name + "/" + id_Business,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        },
        body: JSON.stringify({
          name: payload.business_about.name,
          category: payload.business_about.category,
          keywords: payload.business_about.keywords,
          phone: payload.business_about.phone,
          email: payload.business_about.email,
          region: payload.business_about.region,
          city: payload.business_about.city,
          country: payload.business_about.country,
          openHours: payload.business_about.business_open_hours
        })
      }
    )
      .then(response => {
        console.log("update user Business About response (1) +++++++");
        console.log(response);
        // if (response.status !== 200 && response.status !== 201) {
        //   throw "Erreurs lors du traitement par le serveur";
        // }
        return response.json();
      })
      .then(response => {
        console.log("update user Business About response successsss (2) +++");
        console.log(response);
        if (!response) {
          console.log("Error THe Server++++++");
          throw new Error("Error For Updating Business About +++++");
        }
        context.commit("updateUserBusinessAbout", {
          businessAbout: payload.business_about
        });
        response_ = response;
      })
      .catch(error => {
        console.log("Error From the Server or Browser error(1)");
        console.log(error);
        throw error;
      });
    return response_;
  },
  getbdetails({ commit }) {
    return axios
      .get(state.api_link + state.api_link_end, {
        headers: { Authorization: `Bearer ${state.token}` }
      })
      .then(function({ data }) {
        commit("set_details", data.data);
        console.log(data);
      });
  }
};

const mutations = {
  updateUserBusinessAbout(state, payload) {
    state.userData[0].business_about1 = payload.businessAbout;
  },
  set_details(state, bdetails) {
    state.bdetails = bdetails;
  }
};

export default new Vuex.Store({
  state,
  getters: {
    getdetails(state) {
      return state.bdetails;
    },
    getBusinessAbout(state) {
      return state.userData[0].business_about1;
    }
  },
  actions,
  mutations,
  modules: {
    auth,
    businessOwner
  }
});
