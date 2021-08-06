import Vue from "vue";
import Vuex from "vuex";
//import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
// axios.defaults.baseURL = "";

const getDefaultState = () => {
  return {
    recoverData: "",
    login: false,
    isToi: false,
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
        profilePicture: localStorage.getItem("profile_image"),
        coverImage: localStorage.getItem("cover_image"),
        numbersOfFollowers: 30,
        posts: [],
        createPost: {
          profile_picture: null,
          coverImage: null,
          profile_picture_localstorage: localStorage.getItem("profile_image"),
          profileNamePost: "TONTON LA FORCE",
          postBusinessUpdate: "",
          movies: [],
          hyperlinks: []
        },
        userProfileOwner: {
          workedAt: "Current or Last Organization",
          studiedAt: "Last Education",
          homeTown: "Dummy",
          currentCity: "Dummy",
          numbersOfFollowers: 256
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

// initial state
const state = getDefaultState();

const actions = {
  resetCartState({ commit }) {
    commit("resetState");
  },
  increment(context) {
    context.commit("increment");
  },
  log(context, payload) {
    context.commit("login", payload);
  },
  sign(context, payload) {
    context.commit("signin", payload);
  },
  getServiceV(context, payload) {
    context.commit("service", payload);
  },
  makeChange(context, payload) {
    context.commit("change", payload);
  },
  storeService(context, payload) {
    context.commit("keepService", payload);
  },
  recoverPassword2(context, mydata) {
    console.log("heyyyy");
    context.commit("recoverData", mydata);
  },
  /**
   * Make A Request To Server To Store New Post Intro User
   * @param context
   * @param payload
   */
  editPostUserIntro(context, payload) {
    //console.log(payload);
    context.commit("editPostUserIntro", {
      data: {
        workedAt: payload.workedAt,
        studiedAt: payload.studiedAt,
        homeTown: payload.homeTown,
        city: payload.city
      }
    });
    const url =
      "https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/users.json";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        workedAt: payload.workedAt,
        studiedAt: payload.studiedAt,
        homeTown: payload.homeTown,
        city: payload.city
      })
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
      });
  },
  /**
   * Update the profile
   * @param context
   * @param payload
   */
  changeProfilePicture(context, payload) {
    //console.log("Profile Picture");
    //console.log(payload);
    const url =
      "https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/users.json";
    const file = payload.profilePicture;
    let profile = null;
    if (file.files) {
      const reader = new FileReader();
      reader.onload = e => {
        //localStorage.setItem("profile_image", e.target.result);
        profile = e.target.result;
        //console.log("test");
        //console.log(profile);
        context.commit("changeProfilePicture", {
          profilePicture: payload.profilePicture,
          profilePictureLocalStorage: profile
        });
        fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: "20_TONTONLAFORCE",
            fullname: "",
            username: "TONTON LA FORCE LE BEAU GOSSE",
            email: "",
            password: "",
            profileName: "TONTON LA FORCE LE BEAU GOSSE",
            profilePicture: profile,
            coverImage: state.userData[0].coverImage,
            numbersOfFollowers: 30,
            posts: [],
            createPost: {
              profile_picture: payload.profilePicture,
              profile_picture_localstorage: profile,
              coverImage: state.userData[0].createPost.coverImage,
              profileNamePost: "TONTON LA FORCE",
              postBusinessUpdate: "",
              movies: [],
              hyperlinks: []
            },
            userProfileOwner: {
              workedAt: "Current or Last Organization",
              studiedAt: "Last Education",
              homeTown: "Dummy",
              currentCity: "Dummy",
              numbersOfFollowers: 256
            }
          })
        })
          .then(response => {
            return response.json();
          })
          .then(response => {
            console.log("change Profile Image Online ");
            console.log(response);
          });
      };
      reader.readAsDataURL(file.files[0]);
    }
  },
  /**
   *
   * @param context
   * @param payload
   */
  changeCoverImage(context, payload) {
    //console.log("Profile Picture");
    //console.log(payload);
    const url =
      "https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/users.json";
    const file = payload.cover_image;
    let cover = null;
    if (file.files) {
      const reader = new FileReader();
      reader.onload = e => {
        //localStorage.setItem("profile_image", e.target.result);
        cover = e.target.result;
        //console.log("test");
        //console.log(profile);
        context.commit("changeCoverImage", {
          coverImage: payload.cover_image,
          coverImageLocalStorage: cover
        });
        //console.log("test");
        //console.log(state.userData[0].profilePicture);
        fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: "20_TONTONLAFORCE",
            fullname: "",
            username: "TONTON LA FORCE LE BEAU GOSSE",
            email: "",
            password: "",
            profileName: "TONTON LA FORCE LE BEAU GOSSE",
            profilePicture: state.userData[0].profilePicture,
            coverImage: cover,
            numbersOfFollowers: 30,
            posts: [],
            createPost: {
              profile_picture: state.userData[0].createPost.profile_picture,
              profile_picture_localstorage:
                state.userData[0].createPost.profile_picture_localstorage,
              coverImage: payload.cover_image,
              profileNamePost: "TONTON LA FORCE",
              postBusinessUpdate: "",
              movies: [],
              hyperlinks: []
            },
            userProfileOwner: {
              workedAt: "Current or Last Organization",
              studiedAt: "Last Education",
              homeTown: "Dummy",
              currentCity: "Dummy",
              numbersOfFollowers: 256
            }
          })
        })
          .then(response => {
            return response.json();
          })
          .then(response => {
            console.log("change Cover Image Online ");
            console.log(response);
          });
      };
      reader.readAsDataURL(file.files[0]);
    }
  },
  /**
   *
   * @param context
   * @param payload
   */
  createPost(context, payload) {
    //console.log("Create Post");
    //console.log(payload);
    const url =
      "https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/users.json";
    context.commit("createPost", {
      postBusinessUpdate: payload.postBusinessUpdate,
      movies: payload.movies,
      hyperlinks: payload.hyperlinks
    });
    //console.log("test");
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: "20_TONTONLAFORCE",
        fullname: "",
        username: "TONTON LA FORCE LE BEAU GOSSE",
        email: "",
        password: "",
        profileName: "TONTON LA FORCE LE BEAU GOSSE",
        profilePicture: state.userData[0].profilePicture,
        coverImage: state.userData[0].coverImage,
        numbersOfFollowers: 30,
        posts: state.userData[0].posts,
        createPost: {
          profile_picture: state.userData[0].createPost.profile_picture,
          profile_picture_localstorage:
            state.userData[0].createPost.profile_picture_localstorage,
          coverImage: state.userData[0].createPost.coverImage,
          profileNamePost: "TONTON LA FORCE",
          postBusinessUpdate: payload.postBusinessUpdate,
          movies: payload.movies,
          hyperlinks: payload.hyperlinks
        },
        userProfileOwner: {
          workedAt: "Current or Last Organization",
          studiedAt: "Last Education",
          homeTown: "Dummy",
          currentCity: "Dummy",
          numbersOfFollowers: 256
        }
      })
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log("Create Post Online");
        console.log(response);
        console.log(state.userData[0].posts);
      });
  }
};

const mutations = {
  resetState(state) {
    // Merge rather than replace so we don't lose observers
    // https://github.com/vuejs/vuex/issues/1118
    Object.assign(state, getDefaultState());
  },
  recoverData: (state, data) => (state.recoverData = data),
  increment(state, payload) {
    state.count += payload.amount;
  },
  login(state, payload) {
    for (let i = 0; i < state.users.length; i++) {
      if (
        state.users[i].username === payload.username &&
        state.users[i].password === payload.password
      ) {
        state.login = true;
        state.userData[0].id = state.users[i].id;
        state.userData[0].fullname = state.users[i].fullname;
        state.userData[0].username = state.users[i].username;
        state.userData[0].email = state.users[i].email;
        state.userData[0].password = state.users[i].password;
      }
    }
  },
  service(state, payload) {
    for (let i = 0; i < state.services.length; i++) {
      if (state.services[i].id === payload) {
        state.service[0].id = state.services[i].id;
        state.service[0].Name = state.services[i].Name;
        state.service[0].Localisation = state.services[i].Localisation;
        state.service[0].Resume = state.services[i].Resume;
        if (state.userData[0].id === state.services[i].user_id) {
          state.isToi = true;
        } else {
          state.isToi = false;
        }
      }
    }
  },
  change(state, payload) {
    for (let i = 0; i < state.services.length; i++) {
      if (state.services[i].id === payload.id) {
        state.services[i].id = payload.id;
        state.services[i].Name = payload.name;
        state.services[i].Localisation = payload.location;
        state.services[i].Resume = payload.resume;
      }
    }
    console.log("reussi");
  },
  signin(state, payload) {
    state.users.push({
      id: payload.id,
      fullname: payload.fullname,
      username: payload.username,
      email: payload.email,
      password: payload.password
    });
    console.log("reussi");
  },
  keepService(state, payload) {
    state.services.push({
      id: payload.id,
      Name: payload.name,
      Image: "Clet",
      Localisation: payload.location,
      Resume: payload.resume,
      user_id: payload.user_id
    });
    console.log("reussi");
  },
  editPostUserIntro(state, payload) {
    state.userData[0].userProfileOwner = payload.data;
  },
  changeProfilePicture(state, payload) {
    //console.log("Profile Picture Updated");
    //console.log(payload);
    //console.log(state.userData);
    state.userData[0].createPost.profile_picture = payload.profilePicture;
    state.userData[0].createPost.profile_picture_localstorage =
      payload.profilePictureLocalStorage;
    state.userData[0].profilePicture = payload.profilePicture;
    state.userData[0].coverImage = payload.profilePictureLocalStorage;
    //console.log(state.userData);
  },
  changeCoverImage(state, payload) {
    //console.log("Profile Picture Updated");
    //console.log(payload);
    //console.log(state.userData);
    state.userData[0].createPost.coverImage = payload.coverImage;
    state.userData[0].coverImage = payload.coverImageLocalStorage;
    //console.log(state.userData);
  },
  /**
   *
   * @param state
   * @param payload
   */
  createPost(state, payload) {
    state.userData[0].createPost.postBusinessUpdate =
      payload.postBusinessUpdate;
    state.userData[0].createPost.movies = payload.movies;
    state.userData[0].createPost.hyperlinks = payload.hyperlinks;
    state.userData[0].posts.push(payload);
  }
};

export default new Vuex.Store({
  state,
  getters: {
    recoverPassData: state => {
      return state.recoverData;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    loggedIn(state) {
      return state.login;
    },
    getUser(state) {
      return state.userData;
    },
    getService(state) {
      return state.service;
    },
    getUsers(state) {
      return state.users;
    },
    getProfilePicture(state) {
      return state.userData[0].createPost.profile_picture_localstorage;
    }
  },
  actions,
  mutations
});

/*
export default new Vuex.Store({
  state: {
    recoverData: "",
    login: false,
    isToi: false,
    count: "",
    todos: [],
    userData: [
      {
        id: "",
        fullname: "",
        username: "TONTON LA FORCE LE BEAU GOSSE",
        email: "",
        password: "",
        createPost: {
          profile_picture: null,
          profileNamePost: "TONTON LA FORCE"
        },
        userProfileOwner: {
          workedAt: "Current or Last Organization",
          studiedAt: "Last Education",
          homeTown: "Dummy",
          currentCity: "Dummy",
          numbersOfFollowers: 256
        }
      }
    ],
    userData2: [
      {
        id: "",
        fullname: "",
        email: "",
        password: "",
        createPost: {
          profile_picture: null,
          profileNamePost: "TONTON LA FORCE"
        },
        userProfileOwner: {
          workedAt: "Current or Last Organization",
          studiedAt: "Last Education",
          homeTown: "Dummy",
          currentCity: "Dummy",
          numbersOfFollowers: 256
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
  },
  plugins: [createPersistedState()],
  mutations: {
    recoverData: (state, data) => (state.recoverData = data),
    increment(state, payload) {
      state.count += payload.amount;
    },
    login(state, payload) {
      for (let i = 0; i < state.users.length; i++) {
        if (
            state.users[i].username === payload.username &&
            state.users[i].password === payload.password
        ) {
          state.login = true;
          state.userData[0].id = state.users[i].id;
          state.userData[0].fullname = state.users[i].fullname;
          state.userData[0].username = state.users[i].username;
          state.userData[0].email = state.users[i].email;
          state.userData[0].password = state.users[i].password;
        }
      }
    },
    service(state, payload) {
      for (let i = 0; i < state.services.length; i++) {
        if (state.services[i].id === payload) {
          state.service[0].id = state.services[i].id;
          state.service[0].Name = state.services[i].Name;
          state.service[0].Localisation = state.services[i].Localisation;
          state.service[0].Resume = state.services[i].Resume;
          if (state.userData[0].id === state.services[i].user_id) {
            state.isToi = true;
          } else {
            state.isToi = false;
          }
        }
      }
    },
    change(state, payload) {
      for (let i = 0; i < state.services.length; i++) {
        if (state.services[i].id === payload.id) {
          state.services[i].id = payload.id;
          state.services[i].Name = payload.name;
          state.services[i].Localisation = payload.location;
          state.services[i].Resume = payload.resume;
        }
      }
      console.log("reussi");
    },
    signin(state, payload) {
      state.users.push({
        id: payload.id,
        fullname: payload.fullname,
        username: payload.username,
        email: payload.email,
        password: payload.password
      });
      console.log("reussi");
    },
    keepService(state, payload) {
      state.services.push({
        id: payload.id,
        Name: payload.name,
        Image: "Clet",
        Localisation: payload.location,
        Resume: payload.resume,
        user_id: payload.user_id
      });
      console.log("reussi");
    },
    editPostUserIntro(state, payload) {
      state.userData[0].userProfileOwner = payload.data;
      state.userData2[0].userProfileOwner = payload.data;
    },
    changeProfilePicture(state, payload) {
      //console.log("Profile Picture Updated");
      //console.log(payload);
      //console.log(state.userData);
      state.userData[0].createPost.profile_picture = payload.profilePicture;
      state.userData2[0].createPost.profile_picture = payload.profilePicture;
    }
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    log(context, payload) {
      context.commit("login", payload);
    },
    sign(context, payload) {
      context.commit("signin", payload);
    },
    getServiceV(context, payload) {
      context.commit("service", payload);
    },
    makeChange(context, payload) {
      context.commit("change", payload);
    },
    storeService(context, payload) {
      context.commit("keepService", payload);
    },
    recoverPassword2(context, mydata) {
      console.log("heyyyy");
      context.commit("recoverData", mydata);
    },
    /!**
     * Make A Request To Server To Store New Post Intro User
     * @param context
     * @param payload
     *!/
    editPostUserIntro(context, payload) {
      //console.log(payload);
      const url =
          "https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/users.json";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          workedAt: payload.workedAt,
          studiedAt: payload.studiedAt,
          homeTown: payload.homeTown,
          city: payload.city
        })
      })
          .then(response => {
            return response.json();
          })
          .then(response => {
            console.log(response);
          });
    },
    /!**
     * Update the profile
     * @param context
     * @param payload
     *!/
    changeProfilePicture(context, payload) {
      //console.log("Profile Picture");
      //console.log(payload);
      context.commit("changeProfilePicture", {
        profilePicture: payload.profilePicture
      });
    }
  },
  getters: {
    recoverPassData: state => {
      return state.recoverData;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    loggedIn(state) {
      return state.login;
    },
    getUser(state) {
      return state.userData;
    },
    getService(state) {
      return state.service;
    },
    getUsers(state) {
      return state.users;
    },
    getUser2(state) {
      return state.userData2;
    }
  },
  modules: {}
});*/
