import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";

import axios from "axios";
import moment from "moment";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const getDefaultState = () => {
  return {
    url_base: "http://team3dev.maxinemoffett.com",
    url_user_infos: "/api/v1/userIntro",
    url_update_user_infos: "/api/v1/userIntro?",
    url_load_user_biography: "/api/v1/userIntro/biography",
    url_update_biography: "/api/v1/userIntro/biography?",
    url_update_birthDate: "/api/v1/userIntro/dob?",
    url_load_birthDate: "/api/v1/userIntro/dob?",
    url_update_gender: "/api/v1/userIntro/gender",
    url_post_mobilesPhones: "/api/v1/userIntro/addPhone",
    url_update_current_city: "/api/v1/userIntro/addCurrentCity/11",
    url_update_current_home: "/api/v1/userIntro/addCurrentHome/11",
    url_post_website: "/api/v1/userIntro/storeWebLink",
    url_post_socialLink: "/api/v1/userIntro/storeSocialLink",
    url_add_working: "/api/v1/userIntro/addWorking",
    url_update_working: "/api/v1/userIntro/updateWorking",
    url_add_school: "api/v1/userIntro/addSchool",
    url_update_school: "api/v1/userIntro/updateSchool",
    url_add_profession: "/api/v1/userIntro/updateWorki",
    api_link: "https://94e9-154-72-150-118.ngrok.io/api/v1",
    api_link_end: "/business/details",
    token1: "8|Yx3DU4s08aFTYOCa3T2XJKZkjJV4leSi9b20oo5D",
    bdetails: [],
    token: "1|5EyNcoXFcd6d4j8kaizPr8E3gU9lRu9CHqAWPa03",
    count: "",
    todos: [],
    userData: [
      {
        profile_about: {
          biography: {
            info_access: "private",
            description: "No Description"
          },
          basicInfo: {
            dateOfBirth: {
              date_1: {
                day: "12",
                month: "January",
                access: "private"
              },
              date_2: {
                year: "2000",
                access: "private"
              }
            },
            gender: "M",
            mobilePhones: ["237656602212", "237677873626"],
            currentCity: null,
            homeTown: null,
            websites: [
              "https://www.google.com",
              "https://www.facebook.com",
              "https://www.udemy.com"
            ],
            socialLinks: [
              "www.instagram.com/bridgeafrica",
              "https://www.google.com",
              "https://www.facebook.com",
              "https://www.udemy.com"
            ]
          },
          educationAndWorks: {
            workPlaces: [
              {
                id: 1,
                companyName: "Coca Cla Pvt Ltd. Team Lead",
                cityTown: "YAOUNDE",
                position: "YAOUNDE",
                jobResponsibilities:
                  "Job descrioption dummny textJob descrioption dummny text Jobdescrioption dummny text",
                currentlyWorking: false,
                startDate: "2021-08-19",
                endDate: null,
                access: "private"
              },
              {
                id: 2,
                companyName: "a Cla Pvt Ltd. Team Lead",
                cityTown: "YAOUNDE",
                position: "YAOUNDE",
                jobResponsibilities:
                  "Job descrioption dummny textJob descrioption dummny text Jobdescrioption dummny text",
                currentlyWorking: false,
                starDate: "2014-09-12",
                endDate: null,
                access: "private"
              },
              {
                id: 3,
                companyName: "Coc Cla Pvt Ltd. Team Lead",
                cityTown: "YAOUNDE",
                position: "YAOUNDE",
                jobResponsibilities:
                  "Job descrioption dummny textJob descrioption dummny text Jobdescrioption dummny text",
                currentlyWorking: false,
                starDate: "2012-09-12",
                endDate: "2012-09-12",
                access: ""
              }
            ],
            educations: [
              {
                id: 1,
                access: "private",
                schoolName: null,
                graduated: false,
                durationFrom: null,
                durationTo: null,
                major: null
              }
            ],
            professions: [
              { profession: "Cultivateur", access: "public" },
              { profession: "Macon", access: "private" },
              { profession: "Cuisinier", access: "public" }
            ]
          }
        },
        profile_about1: null,
        profile_about_new: {
          name: "marc doe",
          profile_picture: "http://localhost:80",
          gender: "female",
          addresses: [],
          work_experiences: [],
          website: [
            {
              website_id: 1,
              website_url: "http://www.googl.fr"
            }
          ],
          contacts: [
            {
              phoneNumber: "677889955",
              phone_id: 1
            }
          ]
        }
      }
    ]
  };
};

// initial state
const state = getDefaultState();

const actions = {
  async loadUserProfileAbout(context, payload) {
    console.log(payload);
    console.log("load user Profile About start +++++");

    let response_ = null;
    await fetch(state.url_base + state.url_user_infos, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      }
    })
      .then(response => {
        console.log("load user profile about response (1) +++++++");
        console.log(response);
        if (response.status !== 200 && response.status !== 201) {
          console.log("error from the server ++++");
          throw "Error from the Server";
        }
        return response.json();
      })
      .then(response => {
        console.log("load user profile about response (2) successsss +++");
        console.log(response);
        if (!response) {
          console.log("Error from the server+++++++");
          throw new Error("Error of load profile about ++++++++");
        }
        context.commit("updateUserProfileAbout", {
          profile_about: response.data
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from browser or server error(1)");
        console.log(error);
        throw error;
      });
    return response_;
  },

  async updateUserBiography(context, payload) {
    console.log(payload, "edit user biography start +++++");
    let response_ = null;
    await fetch(
      state.url_base +
        state.url_update_biography +
        "biography=" +
        payload.description +
        "&value=" +
        payload.info_access,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      }
    )
      .then(response => {
        console.log("edit user biography response (1) +++++++", response);
        if (response.status !== 200 && response.status !== 201) {
          console.log("Error From the Server ++++ ");
          throw "Error from the Server";
        }
        return response.json();
      })
      .then(response => {
        console.log("edit user biography response successsss +++", response);
        if (!response) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d edition de la biographie+++++");
        }
        context.commit("updateUserBiography", {
          info_access: payload.info_access,
          description: payload.description
        });
        response_ = response;
      })
      .catch(error => {
        console.log(
          "error from the browser or the server error(1) ++++++",
          error
        );
        throw error;
      });
    return response_;
  },
  async loadUserBiography(context, payload) {
    console.log(payload, "load user biography start +++++");

    let response_ = null;
    await fetch(state.url_base + state.url_load_user_biography, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      }
    })
      .then(response => {
        console.log(response, "load user biography response (1) +++++++");
        if (response.status !== 200 && response.status !== 201) {
          console.log("error from the server ");
          throw "Error from the Server";
        }
        return response.json();
      })
      .then(response => {
        console.log(
          response,
          "load user biography response (2) successsss +++"
        );
        if (!response) {
          console.log("Error from the server+++++++");
          throw new Error("Error of load Biography+++++");
        }
        context.commit("updateUserBiography", {
          info_access:
            response.data[0] !== null
              ? response.data.biography[0].biography
              : "private",
          description:
            response.data[0] !== null
              ? response.data.biography[0].biography
              : "No Description"
        });
        response_ = response;
      })
      .catch(error => {
        console.log(error, "error from browser or server error(1) +++++++");
        throw error;
      });
    return response_;
  },
  async loadUserBasicInfosBirthDate(context, payload) {
    console.log(payload);
    console.log("load user birth date start +++++");

    let response_ = null;
    await fetch(state.url_base + state.url_load_birthDate, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      }
    })
      .then(response => {
        console.log("load user birthDate response (1) +++++++");
        console.log(response);
        if (response.status !== 200 && response.status !== 201) {
          console.log("Error Form The Server ");
          throw "Error from the Server";
        }
        return response.json();
      })
      .then(response => {
        console.log("load user birthDate response (2) successsss +++");
        console.log(response);
        if (!response) {
          console.log("Error from the server+++++++");
          throw new Error("Error of load Biography+++++");
        }
        context.commit("updateUserBirthDate", {
          dateOfBirth:
            response.data === null
              ? {
                  date_1: {
                    day: "12",
                    month: "January",
                    access: "private"
                  },
                  date_2: {
                    year: "2000",
                    access: "private"
                  }
                }
              : response.data
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from browser or server error(1)");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserBasicInfosBirthDate(context, payload) {
    console.log(payload);
    console.log("edit user birtDate start +++++");
    console.log(
      moment(
        payload.dateOfBirth.date_2.year +
          " " +
          payload.dateOfBirth.date_1.month +
          " " +
          payload.dateOfBirth.date_1.day
      ).format("YYYY-MM-DD")
    );

    let response_ = null;
    await fetch(
      state.url_base +
        state.url_update_birthDate +
        "dob=" +
        moment(
          payload.dateOfBirth.date_2.year +
            " " +
            payload.dateOfBirth.date_1.month +
            " " +
            payload.dateOfBirth.date_1.day
        ).format("YYYY-MM-DD") +
        "&value=" +
        payload.dateOfBirth.date_1.access,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      }
    )
      .then(response => {
        console.log("edit user birthDate response (1) +++++++");
        if (response.status !== 200 && response.status !== 201) {
          console.log("Error from the server");
          throw "Error Form The Server";
        }
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log("edit user birthDate response successsss (2)+++");
        console.log(response);
        if (!response) {
          console.log("Error From The Server error(1) ++++++");
          throw new Error("Error For Edit BirthDate+++++");
        }
        context.commit("updateUserBirthDate", {
          dateOfBirth: payload.dateOfBirth
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from Server or browser");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserBasicInfosGender(context, payload) {
    console.log(payload);
    console.log("edit user gender start +++++");
    const gender = payload.gender === "F" ? "female" : "male";
    console.log(state.url_base + state.url_update_gender + "?gender=" + gender);
    let response_ = null;
    await fetch(
      state.url_base + state.url_update_gender + "?gender=" + gender,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      }
    )
      .then(response => {
        console.log("edit user gender response (1) +++++++");
        console.log(response);
        if (response.status !== 200 && response.status !== 201) {
          console.log("Error From The Server");
          throw "Error From The Server";
        }
        return response.json();
      })
      .then(response => {
        console.log("edit user gender response successsss +++");
        console.log(response);
        if (!response) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d edition du BirthDate+++++");
        }
        context.commit("updateUserGender", {
          gender: payload.gender
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserBasicInfosMobilePhones(context, payload) {
    console.log(payload);
    console.log("edit user mobile Phones start +++++");
    const lastPhoneNumber =
      payload.mobilePhones[payload.mobilePhones.length - 1];
    let response_ = null;
    await fetch(
      state.url_base +
        state.url_post_mobilesPhones +
        "?phoneNumber=" +
        lastPhoneNumber,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      }
    )
      .then(response => {
        console.log("edit user mobile phones response (1) +++++++");
        console.log(response);
        if (response.status !== 200 && response.status !== 201) {
          console.log("Error From The Server");
          throw "Error From The Server";
        }
        return response.json();
      })
      .then(response => {
        console.log("edit user mobile phones response successsss (2) +++");
        console.log(response);

        if (!response) {
          console.log("Error From The Server +++++++");
          throw new Error("Error To Add MobilesPhones+++++");
        }
        context.commit("storeMobilePhones", {
          mobilePhones: [...payload.mobilePhones]
        });
        response_ = response;
      })
      .catch(error => {
        console.log("Error From The Server or the Browser");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserBasicInfosCurrentCity(context, payload) {
    console.log(payload);
    console.log("edit user currentcity start +++++");
    let response_ = null;
    await fetch(
      state.url_base +
        state.url_update_current_city +
        "?city=" +
        payload.currentCity,
      {
        method: "POST",
        headers: {
          //"Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
        // body: JSON.stringify({
        //   currentCity: payload.currentCity
        // })
      }
    )
      .then(response => {
        console.log("edit user current city response (1) +++++++");
        console.log(response);
        if (response.status !== 200 && response.status !== 201) {
          console.log("Error From The Server");
          throw "Error From The Server";
        }
        return response.json();
      })
      .then(response => {
        console.log("edit user current city response successsss (2) +++");
        console.log(response);
        if (!response) {
          console.log("Error From The Server +++++++");
          throw new Error("Error From Add New Current City+++++");
        }
        context.commit("storeCurrentCity", {
          currentCity: payload.currentCity
        });
        response_ = response;
      })
      .catch(error => {
        console.log("Error From The Server or The Browser");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserBasicInfosHomeTown(context, payload) {
    console.log(payload);
    console.log("edit user homeTown start +++++");
    let response_ = null;
    await fetch(
      state.url_base +
        state.url_update_current_city +
        "?homeTown=" +
        payload.homeTown,
      {
        method: "POST",
        headers: {
          //"Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
        // body: JSON.stringify({
        //   homeTown: payload.homeTown
        // })
      }
    )
      .then(response => {
        console.log("edit user homeTown response (1) +++++++");
        console.log(response);
        if (response.status !== 200 && response.status !== 201) {
          console.log("Error From The Server");
          throw "Error From The Server";
        }
        return response.json();
      })
      .then(response => {
        console.log("edit user homeTown response successsss response (1) +++");
        console.log(response);
        if (!response) {
          console.log("Error From the server +++++++");
          throw new Error("Error From update or add new homeTown+++++");
        }
        context.commit("storeHomeTown", {
          homeTown: payload.homeTown
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error From browser or server");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserBasicInfosWebsites(context, payload) {
    console.log(payload);
    console.log("edit user website start +++++");

    let response_ = null;
    await fetch(
      state.url_base +
        state.url_post_website +
        "?webUrl=" +
        payload.websites[payload.websites.length - 1],
      {
        method: "POST",
        headers: {
          //"Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
        // body: JSON.stringify({
        //   websites: payload.websites
        // })
      }
    )
      .then(response => {
        console.log("edit user websites response (1) +++++++");
        console.log(response);
        if (response.status !== 200 && response.status !== 201) {
          console.log("Error From The Server");
          throw "Error From The Server";
        }
        return response.json();
      })
      .then(response => {
        console.log("edit user websites response successsss response (1) +++");
        console.log(response);
        if (!response) {
          console.log("Error From The Server +++++++");
          throw new Error("Error From Add Website+++++");
        }
        context.commit("storeWebsites", {
          websites: payload.websites
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from browser or server error (1)");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserBasicInfosSocialLinks(context, payload) {
    console.log(payload);
    console.log("edit user socialLinks start +++++");

    let response_ = null;
    await fetch(
      state.url_base +
        state.url_post_socialLink +
        "?socialLink=" +
        payload.socialLinks[payload.socialLinks.length - 1],
      {
        method: "POST",
        headers: {
          //"Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
        // body: JSON.stringify({
        //   socialLinks: payload.socialLinks
        // })
      }
    )
      .then(response => {
        console.log("edit user socialLinks response (1) +++++++");
        console.log(response);
        if (response.status !== 200 && response.status !== 201) {
          console.log("Error From The Server");
          throw "Error From The Server";
        }
        return response.json();
      })
      .then(response => {
        console.log("edit user socialLinks response successsss +++");
        console.log(response);
        if (!response) {
          console.log("Error From The Server+++++++");
          throw new Error("Error to add socialLinks+++++");
        }
        context.commit("storeSocialLinks", {
          socialLinks: payload.socialLinks
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from the server or the browser");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserWorkPlaces(context, payload) {
    console.log(payload);
    console.log("save/edit/delete user workplace start +++++");
    let url = null;
    let config = {};
    if (payload.method === "POST") {
      url = state.url_base + state.url_add_working;
      config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        },
        body: JSON.stringify({
          companyName: payload.workPlace.companyName,
          cityTown: payload.workPlace.cityTown,
          position: payload.workPlace.position,
          jobResponsibilities: payload.workPlace.jobResponsibilities,
          currentlyWorking: payload.workPlace === true ? 1 : 0,
          startDate: payload.workPlace.startDate,
          endDate: payload.workPlace.endDate
        })
      };
    } else if (payload.method === "PUT") {
      const workplace = payload.workPlace === true ? 1 : 0;
      (url =
        state.url_base +
        state.url_update_working +
        "/11" +
        "?companyName=" +
        payload.workPlace.companyName),
        "&cityTown=" + payload.workPlace.cityTown,
        "&position=" + "YAOUNDE",
        "&jobResponsibilities=" +
          "Job descrioption dummny textJob descrioption dummny text Jobdescrioption dummny text",
        "&currentlyWorking=" + workplace,
        "&startDate=" + "2012-09-12",
        "&endDate=" + "2012-09-12";
      config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    }

    let response_ = null;
    await fetch(url, config)
      .then(response => {
        console.log("save/edit/delete user workPlace response (1) +++++++");
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log("save/edit/delete user workPlace response successsss +++");
        console.log(response);
        if (response.errors) {
          console.log("Error from the server +++++++");
          throw new Error("Error from save/edit/delete workplace+++++");
        }
        context.commit("storeWorkPlace", {
          workPlace: payload.workPlace,
          method: payload.method
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from the server or the browser");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserEducation(context, payload) {
    console.log(payload);
    console.log("save/edit/delete user education start +++++");
    let url = "",
      config = {};
    if (payload.method.toLowerCase() === "post") {
      url = state.url_base + state.url_add_school;
      config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        },
        body: JSON.stringify({
          schoolName: payload.education.schoolName,
          graduated: payload.education.graduated ? 1 : 0,
          durationFrom: payload.education.durationFrom,
          major: payload.education.major,
          durationTo: payload.education.durationFrom
        })
      };
    } else if (payload.method.toLowerCase() === "update") {
      const graduated = payload.education.graduated ? 1 : 0;
      (url =
        state.url_base +
        state.url_update_school +
        "/11" +
        "?schoolName=" +
        payload.education.schoolName),
        "&graduated=" + graduated,
        "&durationFrom=" + payload.education.durationFrom,
        "&major=" + payload.education.major,
        "&durationTo=" + payload.education.durationFrom;
      config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    }

    let response_ = null;
    await fetch(url, config)
      .then(response => {
        console.log("save/edit/delete user education response (1) +++++++");
        console.log(response);
        if (response.status !== 200 || response.status !== 201) {
          console.log("Error From The server +++++++");
          throw new Error("Error From save/edit/delete Education+++++");
        }
        return response.json();
      })
      .then(response => {
        console.log(
          "save/edit/delete user education response successsss response (2) +++"
        );
        console.log(response);
        if (response.errors) {
          console.log("Error From Server +++++++");
          throw new Error("Error From save/edit/delete Education+++++");
        }
        context.commit("storeEducation", {
          education: payload.education,
          method: payload.method
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error From The Server or a Browser");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserProfession(context, payload) {
    console.log(payload);
    console.log("edit user profession start +++++");

    let response_ = null;
    await fetch(state.url_base + state.url_add_profession, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      },
      body: JSON.stringify({
        profession: payload.profession,
        access: payload.access
      })
    })
      .then(response => {
        console.log("edit user workPlace response (1) +++++++");
        console.log(response);
        if (response.status !== 201 || response.status !== 200) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d 'ajout de workPlace+++++");
        }
        return response.json();
      })
      .then(response => {
        console.log("edit user workPlace response successsss +++");
        console.log(response);
        if (response.errors) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d 'ajout de workPlace+++++");
        }
        context.commit("storeProfession", {
          professions: payload.professions
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
        throw error;
      });
    return response_;
  },
  setbdetails({ commit }) {
    return axios.get("/business/details", {}).then(function({ data }) {
      commit("set_details", data.data);
      console.log(data);
    });
  }
};

const mutations = {
  retrieveBusinessUserPost(state, payload) {
    console.log("Retrieve business en cours");
    console.log(state);
    console.log(payload);
    //state.userData[0].business = payload.business;
  },
  /**
   *
   * @param state
   * @param payload
   */
  updateUserProfileAbout(state, payload) {
    state.userData[0].profile_about_new = payload.profile_about;
  },
  updateUserBiography(state, payload) {
    state.userData[0].profile_about.biography.info_access = payload.info_access;
    state.userData[0].profile_about.biography.description = payload.description;
  },
  updateUserBirthDate(state, payload) {
    state.userData[0].profile_about.basicInfo.dateOfBirth = payload.dateOfBirth;
  },
  updateUserGender(state, payload) {
    state.userData[0].profile_about.basicInfo.gender = payload.gender;
  },
  storeMobilePhones(state, payload) {
    state.userData[0].profile_about.basicInfo.mobilePhones = [
      ...payload.mobilePhones
    ];
  },
  storeCurrentCity(state, payload) {
    state.userData[0].profile_about.basicInfo.currentCity = payload.currentCity;
  },
  storeHomeTown(state, payload) {
    state.userData[0].profile_about.basicInfo.homeTown = payload.homeTown;
  },
  storeWebsites(state, payload) {
    state.userData[0].profile_about.basicInfo.websites = [...payload.websites];
  },
  storeSocialLinks(state, payload) {
    state.userData[0].profile_about.basicInfo.socialLinks = [
      ...payload.socialLinks
    ];
  },
  storeWorkPlace(state, payload) {
    if (payload.method === "POST") {
      const newId =
        state.userData[0].profile_about.educationAndWorks.workPlaces.length;
      state.userData[0].profile_about.educationAndWorks.workPlaces = [
        ...state.userData[0].profile_about.educationAndWorks.workPlaces,
        { id: newId, ...payload.workPlace }
      ];
    } else if (payload.method === "PUT") {
      const index = state.userData[0].profile_about.educationAndWorks.workPlaces.findIndex(
        workplace => workplace.id === payload.workPlace.id
      );
      state.userData[0].profile_about.educationAndWorks.workPlaces[index] =
        payload.workPlace;
    }
  },
  storeProfession(state, payload) {
    state.userData[0].profile_about.educationAndWorks.professions = [
      ...state.userData[0].profile_about.educationAndWorks.professions,
      payload.professions
    ];
  },
  storeEducation(state, payload) {
    state.userData[0].profile_about.educationAndWorks.educations = [
      ...state.userData[0].profile_about.educationAndWorks.educations,
      payload.educations
    ];
  },
  set_details(state, bdetails) {
    state.bdetails = bdetails;
  }
};

export default new Vuex.Store({
  state,
  getters: {
    getProfileAboutBiography(state) {
      return state.userData[0].profile_about.biography;
    },
    getProfileAboutBasicInfos(state) {
      return state.userData[0].profile_about.basicInfo;
    },
    getProfileAbout_(state) {
      return state.userData[0].profile_about_new;
    },
    getProfileAboutEducationAndWorks(state) {
      return state.userData[0].profile_about.educationAndWorks;
    },
    getProfileAbout(state) {
      return state.userData[0].profile_about1;
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
