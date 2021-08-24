import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios";
import auth from "./auth";
import businessOwner from "./businessOwner";
import moment from "moment";

import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const getDefaultState = () => {
  return {
    url_base: "http://team3dev.maxinemoffett.com",
    url_load_profile_picture_changed: "/api/v1/download?file_name=",
    url_load_profile_picture:
      "/api/v1/download?file_name=public/media/photos/z7aooJV1XnDVTpRSfPGOUj7sjm0trGVJCiNFS7Ef.jpg",
    url_change_profile_picture: "/api/v1/post",
    change_image_url: "/api/v1/download?file_name=",
    url_create_post: "/api/v1/post",
    url_list_post: "/api/v1/post",
    url_user_infos: "/api/v1/userIntro",
    url_load_user_profile_community: "/api/v1/profile/community",
    recoverData: "",
    login: false,
    isToi: false,
    token: "1|D8mzEzrdzrvlxeXUinBY8XDMgH8bVDtVOjv5xnZz",
    count: "",
    todos: [],
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
        profile_community: {
          people: {
            followers: [
              {
                id: 1,
                picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                community: 5000,
                messages: [],
                communities: []
              },
              {
                id: 2,
                picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                community: 5000,
                messages: [],
                communities: []
              },
              {
                id: 3,
                picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                community: 5000,
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
            followings: [
              {
                id: 1,
                picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                community: 5000,
                messages: [],
                communities: []
              },
              {
                id: 2,
                picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                community: 5000,
                messages: [],
                communities: []
              },
              {
                id: 3,
                picture:
                  "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
                name: "howty Itz blec",
                community: 5000,
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
            ]
          },
          business: {
            followers: [
              {
                id: 1,
                picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                community: 20000000,
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
                picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                community: 20000,
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
                picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                community: 20000,
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
                picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                community: 20000,
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
                picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                community: 20000,
                city: "Douala",
                country: "Cameroon",
                about_description:
                  "super best car seller in the world adipisicing elit. lorem epsep his is",
                communities: [],
                messages: [],
                directions: []
              }
            ],
            followings: [
              {
                id: 1,
                picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                community: 20000,
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
                picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                community: 20000,
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
                picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                community: 20000,
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
                picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                community: 20000,
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
                picture:
                  "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                name: "Super Car ltd",
                category: "Car marketing",
                community: 20000,
                city: "Douala",
                country: "Cameroon",
                about_description:
                  "super best car seller in the world adipisicing elit. lorem epsep his is",
                communities: [],
                messages: [],
                directions: []
              }
            ]
          }
        }
      }
    ],
    users: [
      {
        id: "S001",
        fullname: "Prime",
        username: "Clet",
        email: "primeclet89@gmail.com",
        password: "1234568"
      },
      {
        id: "S002",
        fullname: "John",
        username: "Doe",
        email: "jondoe@gmail.com",
        password: "azertuiop"
      },
      {
        id: "S003",
        fullname: "test",
        username: "1",
        email: "test1@gmail.com",
        password: "qsdfrtgrd"
      },
      {
        id: "S004",
        fullname: "holu",
        username: "lol",
        email: "lol@gmail.com",
        password: "holulol"
      },
      {
        id: "S005",
        fullname: "gregre",
        username: "io",
        email: "gregre@gmail.com",
        password: "987654321"
      }
    ],
    services: [
      {
        id: "S2021-1",
        Name: "Soins Esthétiques",
        Image: "Clet",
        Localisation: "Douala, PK14",
        Resume:
          "La coiffure est métier où l'on est le plus souvent debout. ... Le coiffeur / la coiffeuse travaille comme salarié dans un salon de coiffure indépendant ou franchisé ou à domicile. C'est également un commerçant qui vend des produits capillaires et des accessoires.",
        user_id: "S001"
      },
      {
        id: "S2021-2",
        Name: "Car Driving",
        Image: "Clet",
        Localisation: "Bonanjo, Bastos",
        Resume:
          "C'est également un commerçant qui vend des produits capillaires et des accessoires.",
        user_id: "S001"
      },
      {
        id: "S2021-3",
        Name: "Gardiennage",
        Image: "Clet",
        Localisation: "Biyem Assi, TKC",
        Resume:
          "comprend toutes sortes de formes de surveillance et de protection des biens et des personnes.",
        user_id: "S003"
      },
      {
        id: "S2021-4",
        Name: "BTP",
        Image: "Clet",
        Localisation: "AKWA, DJoungolo",
        Resume: "Batiment et travaux Publics......",
        user_id: "S004"
      }
    ],
    service: [
      {
        id: "",
        Name: "",
        Image: "Clet",
        Localisation: "",
        Resume: ""
      }
    ]
  };
};


const actions = {
  async loadUserProfileBusiness(context, payload) {
    console.log(payload);
    console.log("load user profile Business start +++++");

    let response_ = null;
    await fetch(state.url_base + state.url_load_user_profile_community, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      }
    })
      .then(response => {
        console.log("load user profile community response (1) +++++++");
        console.log(response);
        if (response.status !== 200 && response.status !== 201) {
          console.log("error from the server +++++ ");
          throw "Error from the Server +++++";
        }
        return response.json();
      })
      .then(response => {
        console.log("load user biography response (2) successsss +++");
        console.log(response);
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
        console.log("error from browser or server error(1)");
        console.log(error);
        throw error;
      });
    return response_;
  }
};

const mutations = {
  updateUserProfileCommunity(state, payload) {
    state.userData[0].profile_community = [...payload.profile.community];
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
