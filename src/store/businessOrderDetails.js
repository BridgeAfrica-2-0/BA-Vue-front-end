import axios from "axios";

export default {
  namespaced: true,

  state: {
    order_details: {},
    total: 1
  },

  getters: {
    getOrderDetails(state) {
      return state.order_details;
    },

    getTotal(state) {
      return state.total;
    },

    getStatus(state) {
      if (
        state.order_details.orderItems.filter(item => item.status == "process")
      ) {
        return 2;
      } else if (
        state.order_details.orderItems.filter(item => item.status == "shipped")
      ) {
        return 3;
      } else if (
        state.order_details.orderItems.filter(item => item.status == "delivred")
      ) {
        return 4;
      } else if (
        state.order_details.orderItems.filter(
          item => item.status == "payment receive"
        )
      ) {
        return 5;
      }
    }
  },

  mutations: {
    setOrderDetails(state, order_details) {
      state.order_details = order_details;
    },
    setTotal(state, newtotal) {
      state.total = newtotal;
    }
  },

  actions: {
    getOrderDetails({ commit, state }, data) {
      return axios
        .get(`/order/${data.orderId}/${data.businessSlug}/items`)
        .then(response => {
          console.log("----------------------------------s");
          console.log(response);
          commit("setOrderDetails", response.data.data);
          console.log(state.order_details);
          commit("setTotal", response.data.total);
        });
    },

    nextPage({ commit, state }, data) {
      return axios
        .get(
          `/order/${data.orderId}/${data.businessId}/items?page=${data.page}`
        )
        .then(response => {
          console.log("----------------------------------s");
          console.log(response);
          commit("setOrderDetails", response.data.data);
          console.log(state.order_details);

          commit("setTotal", response.data.total);
        });
    }
  }
};
