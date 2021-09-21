import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: "79|trGwUB4E3RT66gSokOp4tcoAPlvT0GR5fsukYJHK",
    members: []
  },

  getters: {
    getmembers(state) {
        return state.members;
      },
  },

  mutations: {
    setmembers(state, members) {
        state.members = members;
    }
  },

  actions: {

    getmembers( {commit}, path ){
      console.log(path);
      return axios
      .get(`network/${path}`)
      .then(({ data }) => {
          commit("setmembers", data.data);
        console.log(data);
      })
    }

  },
};