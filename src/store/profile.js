import axios from "axios";
import moment from "moment";
export default {
  namespaced: true,
  state: {

    communityPeople: [],
    CommunityBusiness: [],
    ownerPost: [],
    profileBusiness: [],
    ownerPostImages: [],
    biography: [],
    basicInfo: [],
    dateOfBirth: [],
    websites: [],
    socialLinks: [],
    workPlaces: [],
    educations: [],
    professions: [],


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
  },
  getters: {
    getAlbums(state) {
      return state.albums;
    },

    getImages(state) {
      return state.images;
    },

    getBusinessInfo(state) {
      return state.businessInfo;
    },

    getnetWorks(state) {
      if (state.networks.length > 0) {
        return state.networks.reverse();
      }
    },
    // sending loader value
    getLoader(state) {
      return state.loader;
    },
    // sending success value
    getSuccess(state) {
      return state.success;
    },


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
  mutations: {
    //set media data

    setAlbums(state, data) {
      state.albums = data;
    },



    setProfileBusiness(state, data) {
      state.profileBusiness = data;
    },


    setImages(state, data) {

      state.ownerPostImages = data;

    },

    setAlbumImages(state, data) {
      state.albumImages = data;
    },

    setCommunityBusiness(state, data) {
      state.CommunityBusiness = data;
    },

    setCommunityPeople(state, data) {
      state.communityPeople = data;
    },

    setBusinessInfo(state, data) {
      state.businessInfo = data;
    },

    setProfileCommunity(state, data) {
      state.profileCommunity = data;
    },

    ownerPost(state, data) {
      state.ownerPost = data;
    },

    ownerPostImages(state, data) {
      state.ownerPostImages = data;
    },

    setNetworks(state, payload) {
      state.networks = payload;
    },
    updateNetwork(state, payload) {
      state.networks = [];
    },
    setLoader(state, payload) {
      state.loader = payload;
    },
    setSuccess(state, payload) {
      state.success = payload;
    },

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
  },

  actions: {


    nFormatter(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
      }
      return num;
    },



    profileBusiness({ commit }) {

      return axios
        .get('business/userBusiness')
        .then(({ data }) => {
          commit('setProfileBusiness', data.data);
          console.log(data);
        });

    },

    getAlbumImages({ commit }, busineeId) {


      return axios
        .get('business/album/show/' + busineeId)
        .then(({ data }) => {
          commit('setAlbumImages', data.data.media);
          console.log(data);
        });
    },

    getImages({ commit }, busineeId) {
      return axios.get("business/post/" + busineeId).then(({ data }) => {
        commit("setImages", data.data);
        console.log(data);
      });
    },

    getAlbums({ commit }, busineeId) {
      return axios.get("business/album/index/" + busineeId).then(({ data }) => {
        commit("setAlbums", data.data);
        console.log(data);
      });
    },

    ownerPost({ commit }) {
      return axios.get("post").then(({ data }) => {
        commit("ownerPost", data.data);
        console.log(data);
      });
    },

    ownerPostImages({ commit }, busineeId) {
      return axios.get("business/show/images/" + busineeId).then(({ data }) => {
        commit("ownerPostImages", data.data);
        console.log(data);
      });
    },

    businessInfo({ commit }, busineeId) {
      return axios.get("business/info/" + busineeId).then(({ data }) => {
        commit("setBusinessInfo", data.data);
        console.log(data);
      });
    },

    CommunityBusiness({ commit }, businessId) {
      return axios
        .get("business/community/business/" + businessId)
        .then(({ data }) => {
          commit("setCommunityBusiness", data.data);
          console.log(data);
        });
    },

    CommunityPeople({ commit }, businessId) {
      return axios
        .get("business/community/people/" + businessId)
        .then(({ data }) => {
          commit("setCommunityPeople", data.data);
          console.log(data);
        });
    },

    profilecommunity({ commit }) {
      return axios
        .get("profile/community")
        .then(({ data }) => {
          commit("setCommunityPeople", data.data.people[0]);
          commit("setCommunityBusiness", data.data.business[0]);
          console.log(data);
        });
    },



    async loadUserBiography(context, payload) {


      let response_ = null;
      await axios.get('userIntro/biography')
        .then(({ data }) => {
          console.log(data, "load user biography response (1) +++++++");

          return data;
        })
        .then(({ data }) => {
          console.log(data,
            "load user biography response (2) successsss +++"
          );
          if (!data) {
            console.log("Error from the server+++++++");
            throw new Error("Error of load Biography+++++");
          }
          context.commit("updateUserBiography", {
            info_access: data.data !== null
              ? data.data.biography[0].biography
              : "private",
            description:
              data.data !== null
                ? data.data.biography[0].biography
                : "No Description"
          });
          response_ = data;

        })

        .catch(error => {
          console.log(error, "error from browser or server error(1) +++++++");
          throw error;
        });
      return response_;
    },




    async updateUserBiography(context, payload) {
      console.log(payload, "edit user biography start +++++");
      let response_ = null;
      await axios.post("userIntro/biography?" + "biography=" + payload.description + "&value=" + payload.info_access)
        .then(response => {
          console.log("edit user biography response (1) +++++++", response);
          if (response.status !== 200 && response.status !== 201) {
            console.log("Error From the Server ++++ ");
            throw "Error from the Server";
          }
          return response;
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














    async loadUserProfileAbout(context, payload) {
      console.log(payload, "load user Profile About start +++++");

      let response_ = null;
      await axios.get("userIntro", {
        method: "GET",
        headers: {
          Accept: "application/json",

        }
      })
        .then(response => {
          console.log("load user profile about response (1) +++++++", response);
          if (response.status !== 200 && response.status !== 201) {
            console.log("error from the server ++++");
            throw "Error from the Server";
          }
          return response;
        })
        .then(response => {
          console.log(
            "load user profile about response (2) successsss +++",
            response
          );
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
          console.log("error from browser or server error(1)", error);
          throw error;
        });
      return response_;
    },




    async loadUserBasicInfosBirthDate(context, payload) {
      console.log(payload);
      console.log("load user birth date start +++++");

      let response_ = null;
      await axios.get("userIntro/dob?", {
        method: "GET",
        headers: {
          Accept: "application/json",

        }
      })
        .then(response => {
          console.log("load user birthDate response (1) +++++++");
          console.log(response);
          if (response.status !== 200 && response.status !== 201) {
            console.log("Error Form The Server ");
            throw "Error from the Server";
          }
          return response;
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

        "userIntro/dob?" +
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
          return response;
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
      console.log(payload, "edit user gender start +++++");
      const gender = payload.gender === "F" ? "female" : "male";
      console.log(

        "userIntro/gender" +
        "?gender=" +
        gender
      );
      let response_ = null;
      await axios.post(

        "userIntro/gender" +
        "?gender=" +
        gender,
        {
          method: "POST",
          headers: {
            Accept: "application/json",

          }
        }
      )
        .then(response => {
          console.log("edit user gender response (1) +++++++", response);
          if (response.status !== 200 && response.status !== 201) {
            console.log("Error From The Server");
            throw "Error From The Server";
          }
          return response;
        })
        .then(response => {
          console.log("edit user gender response successsss +++", response);
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
          console.log("erreur liée au serveur ou au navigateur", error);
          throw error;
        });
      return response_;
    },
    async updateUserBasicInfosMobilePhones(context, payload) {
      console.log(payload, "edit user mobile Phones start +++++");
      const lastPhoneNumber =
        payload.mobilePhones[payload.mobilePhones.length - 1];
      let response_ = null;
      await
        axios({
          method: 'post',
          url: "userIntro/addPhone" + "?phoneNumber=" + lastPhoneNumber,
          headers: {
            Accept: "application/json",

          },

        }).then(response => {
          console.log("edit user mobile phones response (1) +++++++", response);
          if (response.status !== 200 && response.status !== 201) {
            console.log("Error From The Server");
            throw "Error From The Server";
          }
          return response;
        })
          .then(response => {
            console.log(
              "edit user mobile phones response successsss (2) +++",
              response
            );

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
            console.log("Error From The Server or the Browser", error);
            throw error;
          });
      return response_;
    },
    async updateUserBasicInfosCurrentCity(context, payload) {
      console.log(payload, "edit user currentcity start +++++");
      let response_ = null;
      await axios(

        "userIntro/addCurrentCity/11" +
        "?city=" +
        payload.currentCity,
        {
          method: "POST",
          headers: {
            Accept: "application/json",

          }
        }
      )
        .then(response => {
          console.log("edit user current city response (1) +++++++", response);
          if (response.status !== 200 && response.status !== 201) {
            console.log("Error From The Server");
            throw "Error From The Server";
          }
          return response;
        })
        .then(response => {
          console.log(
            "edit user current city response successsss (2) +++",
            response
          );
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
          console.log("Error From The Server or The Browser", error);
          throw error;
        });
      return response_;
    },
    async updateUserBasicInfosHomeTown(context, payload) {
      console.log(payload, "edit user homeTown start +++++");
      let response_ = null;
      await axios.post(

        "userIntro/addCurrentHome/11" +
        "?homeTown=" +
        payload.homeTown,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          }
        }
      )
        .then(response => {
          console.log("edit user homeTown response (1) +++++++", response);
          if (response.status !== 200 && response.status !== 201) {
            console.log("Error From The Server");
            throw "Error From The Server";
          }
          return response;
        })
        .then(response => {
          console.log(
            "edit user homeTown response successsss response (1) +++",
            response
          );
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
          console.log("error From browser or server", error);
          throw error;
        });
      return response_;
    },
    async updateUserBasicInfosWebsites(context, payload) {
      console.log(payload, "edit user website start +++++");

      let response_ = null;
      await axios.post(

        "/userIntro/storeWebLink" +
        "?webUrl=" +
        payload.websites[payload.websites.length - 1],
        {
          method: "POST",
          headers: {
            Accept: "application/json",

          }
        }
      )
        .then(response => {
          console.log("edit user websites response (1) +++++++", response);
          if (response.status !== 200 && response.status !== 201) {
            console.log("Error From The Server");
            throw "Error From The Server";
          }
          return response;
        })
        .then(response => {
          console.log(
            "edit user websites response successsss response (1) +++",
            response
          );
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
          console.log("error from browser or server error (1)", error);
          throw error;
        });
      return response_;
    },
    async updateUserBasicInfosSocialLinks(context, payload) {
      console.log(payload, "edit user socialLinks start +++++");

      let response_ = null;
      await axios(

        "userIntro/storeSocialLink" +
        "?socialLink=" +
        payload.socialLinks[payload.socialLinks.length - 1],
        {
          method: "POST",
          data: {
            value: 'public',

          },
          headers: {
            Accept: "application/json",
          }
        }
      )
        .then(response => {
          console.log("edit user socialLinks response (1) +++++++", response);
          if (response.status !== 200 && response.status !== 201) {
            console.log("Error From The Server");
            throw "Error From The Server";
          }
          return response;
        })
        .then(response => {
          console.log("edit user socialLinks response successsss +++", response);
          if (!response) {
            console.log("Error From The Server+++++++");
            throw new Error("Error to add socialLinks+++++");
          }
          context.commit("storeSocialLinks", {
            socialLinks: payload.socialLinks
          });
          response_ = response;
        })
        .catch(err => {

          console.log({ err: err });
          console.log("error from the server or the browser", err);
          throw err;
        });
      return response_;
    },
    async updateUserWorkPlaces(context, payload) {
      console.log(payload, "save/edit/delete user workplace start +++++");
      let url = null;
      let config = {};
      if (payload.method === "POST") {

        url = "userIntro/addWorking";
        config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          data: {
            companyName: payload.workPlace.companyName,
            cityTown: payload.workPlace.cityTown,
            position: payload.workPlace.position,
            jobResponsibilities: payload.workPlace.jobResponsibilities,
            currentlyWorking: payload.workPlace === true ? 1 : 0,
            startDate: payload.workPlace.startDate,
            endDate: payload.workPlace.endDate
          }
        };
      } else if (payload.method === "PUT") {
        const workplace = payload.workPlace === true ? 1 : 0;
        (url = "userIntro/updateWorking" + "/11" + "?companyName=" + payload.workPlace.companyName),
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
          }
        };
      }

      let response_ = null;
      await axios(url, config)
        .then(response => {
          console.log(
            "save/edit/delete user workPlace response (1) +++++++",
            response
          );
          return response;
        })
        .then(response => {
          console.log(
            "save/edit/delete user workPlace response successsss +++",
            response
          );
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
        .catch(err => {
          console.group({ err: err });
          console.log("error from the server or the browser", err);
          throw err;
        });
      return response_;
    },
    async updateUserEducation(context, payload) {
      console.log(payload, "save/edit/delete user education start +++++");
      let url = "",
        config = {};
      if (payload.method.toLowerCase() === "post") {
        url = "userIntro/addSchool";
        config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          data: {
            schoolName: payload.education.schoolName,
            graduated: payload.education.graduated ? 1 : 0,
            startDate: payload.education.durationFrom,
            major_subjects: payload.education.major,
            endDate: payload.education.durationFrom
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
          "userIntro/updateSchool" +
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
          }
        };
      }

      let response_ = null;
      await axios(url, config)
        .then(response => {
          console.log(
            "save/edit/delete user education response (1) +++++++",
            response
          );
          if (response.status !== 200 || response.status !== 201) {
            console.log("Error From The server +++++++");
            throw new Error("Error From save/edit/delete Education+++++");
          }
          return response;
        })
        .then(response => {
          console.log(
            "save/edit/delete user education response successsss response (2) +++",
            response
          );
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
        .catch(err => {
          console.log({ err: err });
          console.log("error From The Server or a Browser", err);
          throw err;
        });
      return response_;
    },

    async updateUserProfession(context, payload) {
      console.log(payload, "edit user profession start +++++");

      let response_ = null;
      await axios.post("userIntro/updateWorki",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            profession: payload.profession,
            access: payload.access
          })
        }
      )
        .then(response => {
          console.log("edit user workPlace response (1) +++++++", response);
          console.log();
          if (response.status !== 201 || response.status !== 200) {
            console.log("Erreur liée au serveur+++++++");
            throw new Error("Erreur d 'ajout de workPlace+++++");
          }
          return response;
        })
        .then(response => {
          console.log("edit user workPlace response successsss +++", response);
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
          console.log("erreur liée au serveur ou au navigateur", error);
          throw error;
        });
      return response_;
    },
    setbdetails({ commit }) {
      return axios.get("/business/details", {}).then(function ({ data }) {
        commit("set_details", data.data);
        console.log(data);
      });
    }




  }
};
