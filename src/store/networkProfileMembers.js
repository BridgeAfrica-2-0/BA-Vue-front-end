import axios from "axios";

export default {
  namespaced: true,
  state: {
    members: [],
    admins: [],
    business: []
  },

  getters: {
    getmembers(state) {
      return state.members;
    },
    getadmins(state) {
      return state.admins;
    },
    getbusiness(state) {
      return state.business;
    },
  },

  mutations: {
    setmembers(state, members) {
        state.members = members;
    },
    setadmins(state, admins) {
        state.admins = admins;
    },
    setbusiness(state, business) {
        state.business = business;
    }
  },

  actions: {

    getmembers( {commit}, path ){
      console.log(path);
      return axios
      .post(`network/${path}`)
      .then(({ data }) => {
          commit("setmembers", data.data);
        console.log(data);
      })
    },
    getMembers( data ){
      console.log(data.path);
      return axios
      .post('network/'+data.path, data.formData)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
    },

    makeAdmin( data ){
      console.log(data.path);
      return axios
      .post(`network/${data.path}`)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
    },

    removeAsAdmin( data ){
      console.log(data.path);
      return axios
      .put(`network/${data.path}`)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
    },
 
    getadmins( {commit}, data){
      console.log('getadmins: '+data.path);
      console.log('keyword: '+data.keyword);
      console.log(data.keyword);
      return axios
      .post(`network/${data.path}`, { "keyword": data.keyword})
      .then(({ data }) => {
          commit("setadmins", data.data);
        console.log(data);
      })
    },
    getbusiness( {commit}, data ){
        console.log('getbusiness: '+data.path);
        console.log('keyword: '+data.keyword);
      return axios
      .post(`network/${data.path}`, { "keyword": data.keyword})
      .then(({ data }) => {
          commit("setbusiness", data.data);
        console.log(data);
      })
    }

  },
};