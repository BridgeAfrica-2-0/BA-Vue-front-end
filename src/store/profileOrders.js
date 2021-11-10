import axios from 'axios';
const state = {
  myOrders: [],
};
const getters = {};
const actions = {
  async getMyOrders({ commit }) {
    let page = 1;
    let dataLength = 0;
    do {
      await axios
        .get(`order/getOrderUser/${page}`)
        .then(response => {
          commit('addPageOrder', response.data.data);
          dataLength = response.data.data.length;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      page++;
    } while (dataLength > 0);
    console.log('listing order user finish');
  },
};
const mutations = {
  addPageOrder: (state, newpage) => {
    state.myOrders = state.myOrders.concat(newpage);
    console.log('My Orders on state', state.myOrders);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
