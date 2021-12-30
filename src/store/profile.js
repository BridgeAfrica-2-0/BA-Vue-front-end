import axios from "axios";
import moment from "moment";
export default {
  namespaced: true,
  state: {

    communityPeople: [],
    CommunityBusiness: [],
    profilenetwork: [],
    ownerPost: [],
    profileBusiness: [],
    ownerPostImages: [],
    biography: null,
    basicInfo: [],
    dateOfBirth: [],
    websites: [],
    socialLinks: [],
    workPlaces: [],
    educations: [],
    professions: [],
    networks: [],

    profile_about: { "user": {}, "user_address": [], "user_education": [], "user_experience": [], "user_websites": [] },
    profileIntro: { "user": {}, "user_address": [], "user_education": [], "user_experience": [], "user_websites": [] },
    NcommunityFollower: { "network_followers": [], "total_network_follower": 0 },
    NcommunityFollowing: { "network_following": [], "total_network_following": 0 },
    BcommunityFollower: { "business_followers": [], "total_business_follower": 0 },
    BcommunityFollowing: { "business_following": [], "total_business_following": 0 },

    UcommunityFollower: { "user_followers": [], "total_user_follower": 0 },
    UcommunityFollowing: { "user_following": [], "total_user_following": 0 },
    Tcommunity: [],
    images: [],


    userData:
    {
      user: {
        address: "",
        biography: "",
        city: "",
        country: "",
        cover_picture: "",
        dob: "2021-09-24",
        email: "",
        id: 63,
        language: "",
        name: "",
        neighbor: "",
        phone: null,
        profession: "",
        profile_complete: 1,
        profile_picture: "",
        provider: 0,
        provider_id: 0,
        region: "01",
        status: 1,
        updated_at: "2021-10-04T08:37:57.000000Z",
        user_account_package_id: null
      },
      profile_about: {
        biography: {
          info_access: "private",
          description: ""
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
          mobilePhones: [],
          currentCity: null,
          homeTown: null,
          websites: [

          ],
          socialLinks: [

          ]
        },
        educationAndWorks: {
          workPlaces: [

            {
              id: 3,
              companyName: "",
              cityTown: "",
              position: "",
              jobResponsibilities:
                "",
              currentlyWorking: false,
              starDate: "2012-09-12",
              endDate: "2012-09-12",
              access: ""
            }
          ],
          educations: [

          ],
          professions: [

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

  },
  getters: {
    getAlbums(state) {
      return state.albums;
    },

    getOwnerPost(state) {
      return state.ownerPost
    },

    getUserPostIntro(state) {
      return state.profileIntro;
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
      return state.profile_about.user.biography;
    },
    getProfileAboutBasicInfos(state) {
      return state.profile_about;
    },
    getProfileAbout_(state) {
      return state.profile_about;
    },
    getProfileProfession(state) {
      return state.profileIntro.user.profession;
    },

    getProfileAboutEducationAndWorks(state) {
      return state.profileIntro.user_education;
    },
    getProfileAbout(state) {
      return state.profile_about;
    },
    getdetails(state) {
      return state.bdetails;
    }
  },

  mutations: {

    removePost(state, uuid) {
      const newPosts = state.ownerPost.filter(post => post.id != uuid)
      state.ownerPost = newPosts
    },

    UpdatePost(state, payload) {

      const newPosts = state.ownerPost.map(post => post.id == payload.id ? payload : post)
      state.ownerPost = newPosts
    },

    createPost(state, payload) {
      state.ownerPost = [payload, ...state.ownerPost]
    },

    //set community data  
    setTcommunity(state, data) {
      state.Tcommunity = data;
    },


    setNcommunityFollower(state, data) {
      state.NcommunityFollower = data;
    },

    setUcommunityFollowing(state, data) {
      state.UcommunityFollowing = data;
    },


    setUcommunityFollower(state, data) {

      state.UcommunityFollower = data;

    },

    setBcommunityFollowing(state, data) {
      state.BcommunityFollowing = data;

    },


    setBcommunityFollower(state, data) {

      state.BcommunityFollower = data;
    },


    setNcommunityFollowing(state, data) {

      state.NcommunityFollowing = data;
    },




    //set media data

    setAlbums(state, data) {
      state.albums = data;
    },



    setProfileBusiness(state, data) {
      state.profileBusiness = data;
    },


    setProfileNetwork(state, data) {
      console.log("commiting this issdshd");
      state.profileNetwork = data;
    },


    setImages(state, data) {

      state.images = data;

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
    editPostUserIntro(state, payload) {
      state.profileIntro = payload;
    },
    updateUserProfileAbout(state, payload) {
      state.profile_about = payload;
    },
    updateUserBiography(state, payload) {
      state.biography = payload.user.biography;

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

    deleteCover({ commit }) {

      return axios
        .delete('user/cover')
        .then(({ data }) => {
          console.log(data);
        });

    },


    deleteBusiness({ commit }, url) {

      return axios
        .delete(url)
        .then(({ data }) => {
          console.log(data);
        });

    },



    Tcommunity({ commit }) {

      return axios
        .get('profile/total/community')
        .then(({ data }) => {
          commit('setTcommunity', data.data);
          console.log(data);
        });

    },

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

    loadMore({ commit }, url) {

      return axios.get(url)
        .then((data) => {
          return data;
        });

    },

    createContact({ commit }, payload) {

      console.log(payload)
      return axios.post("user/contact-create", { phone: payload.phone }, {

      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log("Something went wrong");
          console.log({ err: err })
        });

    },

    updateContact({ commit }, payload) {

      console.log(payload)
      return axios.post("user/contact-update/" + payload.id, { phone: payload.phone }, {

      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log("Something went wrong");
          console.log({ err: err })
        });


    },


    deleteContact({ commit }, payload) {

      console.log(payload)
      return axios.post("user/contact-delete/" + payload.id, {

      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log("Something went wrong");
          console.log({ err: err })
        });


    },




    NcommunityFollower({ commit }) {
      return axios
        .get('profile/network/follower')
        .then(({ data }) => {
          commit('setNcommunityFollower', data.data);
          console.log(data);
        });
    },
    NcommunityFollowing({ commit }) {
      return axios
        .get('profile/network/following')
        .then(({ data }) => {
          commit('setNcommunityFollowing', data.data);
          console.log(data);
        });
    },
    BcommunityFollower({ commit }) {
      return axios
        .get('profile/business/follower')
        .then(({ data }) => {
          commit('setBcommunityFollower', data.data);
          console.log(data);
        });
    },
    BcommunityFollowing({ commit }) {
      return axios
        .get('profile/business/following')
        .then(({ data }) => {
          commit('setBcommunityFollowing', data.data);
          console.log(data);
        });
    },

    UcommunityFollower({ commit }) {
      return axios
        .get('profile/user/follower')
        .then(({ data }) => {
          commit('setUcommunityFollower', data.data);
          console.log(data);
        });
    },
    UcommunityFollowing({ commit }) {
      return axios
        .get('profile/user/following')
        .then(({ data }) => {
          commit('setUcommunityFollowing', data.data);
          console.log(data);
        });
    },

    profileBusiness({ commit }) {

      return axios
        .get('business/userBusiness')
        .then(({ data }) => {
          commit('setProfileBusiness', data.data);
          console.log(data);
        });

    },


    profileNetwork({ commit }) {

      return axios
        .get('network')
        .then(({ data }) => {
          commit('setProfileNetwork', data.data);
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

    getImages({ commit }) {
      return axios.get("profile/user/media").then(({ data }) => {
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







    async editPostUserIntro(context, payload) {
      //console.log(payload);
      //const url = "https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/users.json";
      //const url = state.url_update_user_infos;
      context.commit("editPostUserIntro", {
        data: {
          workedAt: payload.workedAt,
          studiedAt: payload.studiedAt,
          homeTown: payload.homeTown,
          currentCity: payload.currentCity,
          numbersOfFollowers: 20
        }
      });


      const url = "userIntro?" + "companyName=" + payload.workedAt + "&address=" + 1 + "&cityTown=" + payload.currentCity + "&schoolName=" +
        payload.studiedAt;
      await axios
        .post(
          url,
          {},
          {
            headers: {

            }
          }
        )

        .then(response => {
          console.log("user intro edited successssssssssss ++++++++++");
          console.log("edit user intro test1 fuckk blec response");
          console.log(response);
          context.commit("editPostUserIntro", response.data);
        })
        .catch(error => {
          console.log("erreur liée au navigateur ou au serveur +++");
          console.log(error);
        });
    },



    async loadUserPostIntro(context, payload) {
      let response_ = null;
      await axios.get('userIntro')

        .then(response => {
          if (!response) {
            throw "Cannot Found User Post Intro";
          }
          response_ = response.data[0];
          context.commit("editPostUserIntro", response.data.data);
        })
        .catch(error => {
          console.log("Load User Intro Echec");
          if (error instanceof TypeError) {
            console.log(error.message);
          } else {
            console.log(error);
          }
        });
      return response_;
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
          console.log("edit user biography response successsss +++", response);

          context.commit("updateUserBiography", response.data.data);
          console.log(response);
          response_ = response;
        })
        .catch(error => {
          console.log(
            { erroe: error }
          );
          throw error;
        });
      return response_;
    },

    async loadUserProfileAbout({ commit }, payload) {
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
          commit("updateUserProfileAbout", response.data.data);
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
                ? {}
                : response.data
          });
          response_ = response;
        })
        .catch(error => {
          console.log("error from browser or server error(1)");
          console.log({ error: error });
          throw error;
        });
      return response_;
    },
    async updateUserBasicInfosBirthDate(context, payload) {
      let date = payload.dateOfBirth.date;
      let response_ = null;
      await axios(

        "userIntro/dob?" +
        "dob=" + date,
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
        payload.mobilePhones;
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

        "userIntro/addCurrentCity" +
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

      console.log(payload);

      let response_ = null;
      await axios.post("userIntro/addHomeTown" + "?home_town=" + payload.homeTown,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          }
        }
      )
        .then(response => {

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
          console.log({ error: error });
        });
      return response_;
    },

    async updateUserBasicInfosWebsites(context, payload) {
      console.log(payload, "edit user website start +++++");

      let response_ = null;
      let url = "/userIntro/storeWebLink";
      let formData = new FormData();
      formData.append('webUrl', payload.websites)
      await axios.post(url, formData)
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

          response_ = response;
        })
        .catch(error => {
          console.log("error from browser or server error (1)", error);
          console.log({ error: error });
          throw error;
        });
      return response_;
    },

    async deleteUserBasicInfosWebsites(context, payload) {
      console.log(payload, "edit user website start +++++");

      let response_ = null;
      await axios.delete("/userIntro/deleteWebLink/" + payload.id)
        .then(response => {
          console.log("edit user websites response (1) +++++++", response);
          if (response.status !== 200 && response.status !== 201) {
            console.log("Error From The Server");
            throw "Error From The Server";
          }
          return response;
        })
        .then(response => {


          response_ = response;
        })
        .catch(error => {
          console.log({ error: error });

        });
      return response_;
    },

    async updateUserBasicInfosEWebsites(context, payload) {
      console.log(payload, "edit user website start +++++");

      let response_ = null;
      let url = "/userIntro/updateWebLink/" + payload.id
      let formData = new FormData();
      formData.append('webUrl', payload.websites);
      await axios.post(url, formData)
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

          response_ = response;
        })
        .catch(error => {
          console.log("error from browser or server error (1)", error);
          console.log({ error: error });
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
        url = "userIntro/updateWorking/" + payload.workPlace.id;
        config = {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          data: {
            companyName: payload.workPlace.company_name,
            cityTown: payload.workPlace.city_town,
            position: payload.workPlace.position,
            jobResponsibilities: payload.workPlace.job_responsibilities,
            currentlyWorking: payload.workPlace === true ? 1 : 0,
            startDate: payload.workPlace.startDate,
            // endDate: null,
            // endDate: payload.workPlace.endDate,
            endDate: payload.workPlace === true ? null : payload.workPlace.endDate,
          }
        };
      } else if (payload.method === "DELETE") {
        url = "userIntro/deleteWorking/" + payload.workPlace;
        config = {
          method: "DELETE",
        };
      }

      let response_ = null;
      await axios(url, config)
        .then(response => {
          console.log("save/edit/delete user workPlace response (1) +++++++", response);
          return response;
        })
        .then(response => {
          console.log("save/edit/delete user workPlace response successsss +++", response);
          if (response.errors) {
            console.log("Error from the server +++++++");
            throw new Error("Error from save/edit/delete workplace+++++");
          };
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
        console.log("Method: " + payload.method.toLowerCase());
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
      } else if (payload.method.toLowerCase() === "put") {
        const workplace = payload.education === true ? 1 : 0;
        console.log("Method: " + payload.method.toLowerCase());
        url = "userIntro/updateSchool/" + payload.education.id;
        config = {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          data: {
            schoolName: payload.education.school_name,
            graduated: payload.education.is_graduated,
            startDate: payload.education.startDate,
            endDate: payload.education.endDate,
            major_subjects: payload.education.major_subjects,
          }
        };
      } else if (payload.method === "DELETE") {
        url = "userIntro/deleteSchool/" + payload.workPlace;
        config = {
          method: "DELETE",
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
