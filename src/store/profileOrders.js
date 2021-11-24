import axios from 'axios';
const state = {
  myOrders: [],
};
const getters = {
  getAllOrders: state => {
    return state.myOrders;
  },
  getPendingOrders: state => {
    return state.myOrders.filter(order => order.status === 'pending') || [];
  },
  getCompleteOrders: state => {
    return state.myOrders.filter(order => order.status === 'complete') || [];
  },
  getCancelOrders: state => {
    return state.myOrders.filter(order => order.status === 'cancel') || [];
  },
};
const actions = {
  async getMyOrders({ commit }) {
    commit('removeOrder');
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
  },
  removeOrder: state => {
    state.myOrders = [];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
