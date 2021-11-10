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
          commit('addPageorder', ...response.data.data);
          dataLength = response.data.data.length;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    } while (dataLength > 0);
  },
};
const mutations = {
  addPageOrder: (state, newpage) => {
    state.myOrders.push(newpage);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
