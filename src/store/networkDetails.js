import axios from 'axios';

export default {
  namespaced: true,

  state: {
    ndetails: [],
  },

  actions: {
    getndetails({ commit }) {
      return axios.get('profile/popular/network', {}).then(function({ data }) {
        commit('set_details', data.data);

        console.log('lalaads shskdjdjdd djdjdhdjee djeejejeje ejsjsjsjsjs jcjcjcjcjc ');
        console.log(data);
      });
    },
  },

  mutations: {
    set_details(state, bdetails) {
      state.ndetails = bdetails;
    },
  },

  getters: {
    getdetails(state) {
      return state.ndetails;
    },
  },
};
