import axios from "axios";
import moment from "moment";
export default {
  namespaced: true,
  state: {

    communityPeople: [],
    CommunityBusiness: [],
    ownerPost: [],
    profileBusiness: [],  
    profileNetwork:[],
    ownerPostImages: [],
    biography: null,
    basicInfo: [],
    dateOfBirth: [],
    websites: [],
    socialLinks: [],
    workPlaces: [],
    educations: [],
    professions: [],
    imagess:[],

    profile_about:{"user":{},"user_address":[], "user_education":[],"user_experience":[],"user_websites":[]  },
    profileIntro:{"user":{},"user_address":[], "user_education":[],"user_experience":[],"user_websites":[]  },
    NcommunityFollower:{ "network_followers": [ ], "total_network_follower": 0 },
    NcommunityFollowing:{ "network_following": [ ], "total_network_following": 0 },
    BcommunityFollower:{ "business_followers": [ ], "total_business_follower": 0 },
    BcommunityFollowing:{ "business_following": [ ], "total_business_following": 0 },
  
    UcommunityFollower:{ "user_followers": [ ], "total_user_follower": 0 },
    UcommunityFollowing:{ "user_following": [ ], "total_user_following": 0 },
    Tcommunity:[],


  },
  getters: {
    getAlbums(state) {
      return state.albums;
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
      return state.profileIntro;
    },
    getProfileAbout_(state) {
      return state.profileIntro;
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

   setTcommunity(state, data){
   
     state.Tcommunity=data;

   },
    
    setNcommunityFollower(state, data){

      state.NcommunityFollower = data;

    },

    setUcommunityFollowing(state, data){


      state.UcommunityFollowing = data;

    },


    setUcommunityFollower(state, data){
    
      state.UcommunityFollower = data;

    },

    setBcommunityFollowing(state, data){
      state.BcommunityFollowing = data;

    },


    setBcommunityFollower(state, data){

      state.BcommunityFollower = data;
    },


    setNcommunityFollowing(state, data){

      state.NcommunityFollowing = data;
    },





    //set media data

    setAlbums(state, data) {
      state.albums = data;
    },

    setprofileNetwork(state, data){
     
      state.profileNetwork=data;

    },

    setProfileBusiness(state, data) {
      state.profileBusiness = data;
    },


    setImages(state, data) {

      state.ownerPostImages = data;

    },



    setImagess(state, data) {

      state.imagess = data;

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
      state.profile_about=payload;
    },
    updateUserBiography(state, payload) {
      state.biography=payload.user.biography;
     
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

    getImages({ commit }, id) {
      return axios.get("profile/user/media?id="+id).then(( {data} ) => {
        commit("setImagess", data.data);
        console.log(data);
      });
     },

    loadMoreUserBusiness({commit}, url){
         
      return axios.get(url)
      .then(({ data }) => {

       // console.log(data);
       return data;
      });

    },

    loadMore({commit}, url){
      console.log("hello you are loading now");
      console.log(url);
     return axios.get(url)
     .then(( data ) => {
      return data;
     }) .catch((err) => {
       console.log("Something went wrong");
       console.log({err:err})
     });       
 
    },
     
    Tcommunity({commit}, id){
     
      return axios
      .get('profile/total/community?id='+id)
      .then(({ data }) => {
        commit('setTcommunity', data.data);
        console.log(data);
      });

    },
    
    NcommunityFollower({ commit }, id){
      return axios
      .get('profile/network/follower?id='+id)
      .then(({ data }) => {
        commit('setNcommunityFollower', data.data);
        console.log(data);
      });
    },
    NcommunityFollowing({ commit },id){
      return axios
      .get('profile/network/following?id='+id)
      .then(({ data }) => {
        commit('setNcommunityFollowing', data.data);
        console.log(data);
      });
    },
    BcommunityFollower({ commit },id){
      return axios
      .get('profile/business/follower?id='+id)
      .then(({ data }) => {
        commit('setBcommunityFollower', data.data);
        console.log(data);
      });
    },
    BcommunityFollowing({ commit }, id){
      return axios
      .get('profile/business/following?id='+id)
      .then(({ data }) => {
        commit('setBcommunityFollowing', data.data);  
        console.log(data);
      });
    },
   
    UcommunityFollower({ commit }, id){
      return axios
      .get('profile/user/follower?id='+id)
      .then(({ data }) => {
        commit('setUcommunityFollower', data.data);
        console.log(data);
      });
    },
    UcommunityFollowing({ commit }, id){
      return axios
      .get('profile/user/following?id='+id)
      .then(({ data }) => {
        commit('setUcommunityFollowing', data.data);      
        console.log(data);
      });
    },



    profileBusiness({ commit }, id) {

      return axios
        .get('business/userBusiness?id='+id)
        .then(({ data }) => {
          commit('setProfileBusiness', data.data);
          console.log(data);
        });

    },


    profileNetwork({ commit }, id) { 

      return axios
        .get('network?id='+id)
        .then(({ data }) => {
          commit('setprofileNetwork', data.data);
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

   
    ownerPost({ commit }, id) {
      return axios.get("post?id="+id).then(({ data }) => {
        commit("ownerPost", data.data);
        console.log(data);
      });
    },

   


    profilecommunity({ commit }, id) {
      return axios
        .get("profile/community?id="+id)
        .then(({ data }) => {
          commit("setCommunityPeople", data.data.people[0]);
          commit("setCommunityBusiness", data.data.business[0]);
          console.log(data);
        });
    },






     

  
    async loadUserPostIntro(context, id) {
      let response_ = null;
      await axios.get('userIntro?id='+id)
       
        .then(response => {
          console.log("load user Intro Post test1 successsss +++");
          console.log(response);
          if (!response) {
            throw "Cannot Found User Post Intro";
          }
         
          response_ = response.data[0];
          context.commit("editPostUserIntro", response.data.data);
        })
        .catch(error => {

          console.log({error:error});
          console.log("Load User Intro Echec");
          if (error instanceof TypeError) {
            console.log(error.message);
          } else {
            console.log(error);
          }
        });
      return response_;
    },

    async loadUserBiography(context, id) {


      let response_ = null;
      await axios.get('userIntro/biography?id='+id)
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
















    async loadUserProfileAbout({commit}, id) {

      let response_ = null;
      await axios.get('userIntro?id='+id, {
        method: "GET",
        headers: {
          Accept: "application/json",

        }
      })
        .then(response => {
          console.log("load user profile about response (1) +++++++", response);
         
          return response;
        })
        .then(response => {
         
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




    async loadUserBasicInfosBirthDate(context, id) {
    
      console.log("load user birth date start +++++");

      let response_ = null;
      await axios.get('userIntro/dob?id='+id, {
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
          console.log({error : error});
          throw error;
        });
      return response_;
    },

    
    



  }
};
