import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
// axios.defaults.baseURL = "";

export default new Vuex.Store({
  state: {
    recoverData:"",
    login: false,
    isToi: false,
    count: "",
    todos: [],
    userData: [
      {
        id: "",
        fullname: "",
        username: "",
        email: "",
        password: ""
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
    recoverData: (state, data) => state.recoverData = data,
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
    recoverPassword2(context, mydata){
      console.log("heyyyy")
        context.commit("recoverData", mydata);
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
    }
  },
  modules: {}
});
