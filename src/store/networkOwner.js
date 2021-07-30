import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  mutations: {},
  actions: {
    async addNetwork() {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(response.data);
    },
  },
};
