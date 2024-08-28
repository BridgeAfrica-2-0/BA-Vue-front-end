import axios from "axios";

export default {
  namespaced: true,
  state: {
    members: [],
    admins: [],
    editors: [],
    business: []
  },

  getters: {
    getmembers(state) {
      return state.members;
    },
    getadmins(state) {
      return state.admins;
    },
    geteditors(state) {
      return state.editors;
    },
    getbusiness(state) {
      return state.business;
    }
  },

  mutations: {
    setmembers(state, members) {
      state.members = members;
    },
    setadmins(state, admins) {
      state.admins = admins;
    },
    seteditors(state, editors) {
      state.editors = editors;
    },
    setbusiness(state, business) {
      state.business = business;
    }
  },

  actions: {
    getMembers({ commit }, data) {
      console.log("getMembers");
      console.log("data", data);
      console.log(data.path);
      return axios
        .post("network/" + data.path, data.formData)
        .then(({ data }) => {
          console.log(data);
          return data;
        });
    },

    makeAdmin({ commit }, data) {
      console.log("makeAdmin");
      console.log(data);
      return axios
        .put(`network/${data.url}/make/editor/${data.id}`)
        .then(({ data }) => {
          console.log(data);
          return data;
        });
    },

    removeAsAdmin({ commit }, data) {
      console.log("removeAsAdmin");
      console.log(data);
      return axios
        .delete(`network/${data.url}/members/remove/${data.id}`)
        .then(({ data }) => {
          console.log(data);
          return data;
        });
    },

    removeBusinessFromNetwork({ commit }, data) {
      return axios
        .delete(`network/${data.url}/business/remove/${data.id}`)
        .then(({ data }) => {
          console.log(data);
          return data;
        });
    },

    removeAsEditor({ commit }, data) {
      console.log("removeAsEditor");
      console.log(data);
      return axios
        .put(`network/${data.url}/remove/editor/${data.id}`)
        .then(({ data }) => {
          console.log(data);
          return data;
        });
    },

    getadmins({ commit }, data) {
      console.log("getadmins: " + data.path);
      console.log("keyword: " + data.keyword);
      console.log(data.keyword);
      return axios
        .post(`network/${data.path}`, { keyword: data.keyword })
        .then(({ data }) => {
          commit("setadmins", data.data);
          console.log(data);
        });
    },
    geteditors({ commit }, data) {
      console.log("geteditors: " + data.path);
      console.log("keyword: " + data.keyword);
      console.log(data.keyword);
      return axios
        .post(`network/${data.path}`, { keyword: data.keyword })
        .then(({ data }) => {
          commit("seteditors", data.data);
          console.log(data);
        });
    },
    getbusiness({ commit }, data) {
      console.log("getbusiness: " + data.path);
      console.log("keyword: " + data.keyword);
      return axios
        .post(`network/${data.path}`, { keyword: data.keyword })
        .then(({ data }) => {
          commit("setbusiness", data.data);
          console.log(data);
        });
    },

    getmembers({ commit }, data) {
      return axios
        .post(`network/${data.path}`, { keyword: data.keyword })
        .then(({ data }) => {
          commit("setmembers", data.data);

          console.log(data);
        });
    }
  }
};
