import axios from "axios";

export default {
  namespaced: true,
  state: {
    networks: { data: [] },
    peoples: { data: [] },
    businesses: { data: [] },
    products: { data: [] },
    posts: { data: [] },

    loader: false,
    success: false,
  },
  getters: {
    // get data
    getNetworks(state) {
      return state.networks;
    },
    getPeoples(state) {
      return state.peoples;
    },
    getBusinesses(state) {
      return state.businesses;
    },
    getPosts(state) {
      return state.posts;
    },
    getProducts(state) {
      return state.products;
    },

    // sending loader value
    getLoader(state) {
      return state.loader;
    },
    // sending success value
    getSuccess(state) {
      return state.success;
    },
  },
  mutations: {
    //set data
    setNetworks(state, data) {
      state.networks = data;
    },
    setPeoples(state, data) {
      state.peoples = data;
    },
    setProducts(state, data) {
      state.products = data;
    },
    setBusinesses(state, data) {
      state.businesses = data;
    },
    setPosts(state, data) {
      state.posts = data;
    },

    setLoader(state, payload) {
      state.loader = payload;
    },
    setSuccess(state, payload) {
      state.success = payload;
    },
  },

  actions: {
    SEARCH({ commit, state }, data) {
      commit("setNetworks", { data: [] });
      commit("setPeoples", { data: [] });
      commit("setProducts", { data: [] });
      commit("setBusinesses", { data: [] });
      commit("setPosts", { data: [] });
      commit("setLoader", true);

      console.log("[DEBUG] NETWORK SEARCH", data);
      let page = 1;
      const TYPES = ["business", "user", "network", "market", "post"];
      let catId = data.cat_id ? "catId=" + data.cat_id : "";
      let keyword = data.keyword ? "keyword=" + data.keyword : "";

      TYPES.map((type) => {
        console.log(`type => ${type} keyword = ${keyword}`);
        axios
          .get(`/search/${type}?${catId}&${keyword}`)
          .then((res) => {
            if (type == "business") {
              commit("setBusinesses", res.data);
            } else if (type == "user") {
              commit("setPeoples", res.data);
            } else if (type == "market") {
              commit("setProducts", res.data);
            } else if (type == "network") {
              commit("setNetworks", res.data);
            } else if (type == "post") {
              commit("setPosts", res.data);
            }

            commit("setLoader", false);
            console.log("All Search results: ", res.data);
          })

          .catch((err) => {
            commit("setLoader", false);
            console.dir(err);
          });
      });

      // console.log("[debug] page:", page);
    },
  },
};
