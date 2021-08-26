import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
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
    profile_community: {
      people: {
        followers: [
          {
            id: 1,
            picture:
              "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
            name: "howty Itz blec 1",
            community: 5000,
            messages: [],
            communities: []
          },
          {
            id: 2,
            picture:
              "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
            name: "howty Itz blec 2",
            community: 500,
            messages: [],
            communities: []
          },
          {
            id: 3,
            picture:
              "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
            name: "howty Itz blec 3",
            community: 123,
            messages: [],
            communities: []
          },
          {
            id: 4,
            picture:
              "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
            name: "howty Itz blec 4",
            community: 1245,
            messages: [],
            communities: []
          },
          {
            id: 5,
            picture:
              "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
            name: "howty Itz blec 5",
            community: 25,
            messages: [],
            communities: []
          }
        ],
        followings: [
          {
            id: 1,
            picture:
              "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
            name: "howty Itz blec 6",
            community: 100,
            messages: [],
            communities: []
          },
          {
            id: 2,
            picture:
              "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
            name: "howty Itz blec 7",
            community: 265,
            messages: [],
            communities: []
          },
          {
            id: 3,
            picture:
              "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
            name: "howty Itz blec 8",
            community: 28572,
            messages: [],
            communities: []
          },
          {
            id: 4,
            picture:
              "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
            name: "howty Itz blec 9",
            community: 25,
            messages: [],
            communities: []
          },
          {
            id: 5,
            picture:
              "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
            name: "howty Itz blec 10",
            community: 32,
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
            name: "Super Car peter",
            category: "Car marketing",
            community: 20220,
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
            name: "Super Car ltd2",
            category: "Car marketing",
            community: 2100,
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
            name: "Super Car ltd3",
            category: "Car marketing",
            community: 2850,
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
            name: "Super Car ltd4",
            category: "Car marketing",
            community: 27850,
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
            name: "Super Car ltd5",
            category: "Car marketing",
            community: 21412,
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
            name: "Super Car ltd6",
            category: "Car marketing",
            community: 204,
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
            community: 247,
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
            name: "Super Car ltd7",
            category: "Car marketing",
            community: 965,
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
            name: "Super Car ltd8",
            category: "Car marketing",
            community: 2354,
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
            name: "Super Car ltd9",
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
  };
};

// initial state
const state = getDefaultState();

const actions = {
  async loadUserProfileCommuntity(context, payload) {
    console.log(payload);
    console.log("load user profile Community start +++++");

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
    state.profile_community = [...payload.profile.community];
  }
};

export default new Vuex.Store({
  state,
  getters: {
    getProfileCommunity(state) {
      return state.profile_community;
    }
  },
  actions,
  mutations
});
