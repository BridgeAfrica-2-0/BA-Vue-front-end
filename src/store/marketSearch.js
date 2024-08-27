import axios from "axios";
import { Alert } from "bootstrap";

export default {
  namespaced: true,
  state: {
    products: [],
    categories: [],
    subCat: [],
    subFilter: [],
    prodLoader: false,
    success: false,
    neighbourhoods: [],

    keyword: null,
    location: null
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getGuestUserProducts(state) {
      return state.products;
    },
    getCategories(state) {
      return state.categories;
    },

    getSubCat(state) {
      return state.subCat;
    },
    getSubFilters(state) {
      return state.subFilter;
    },
    getUserNeighbourhoods(state) {
      return state.neighbourhoods;
    },

    // sending loader value
    getLoader(state) {
      return state.prodLoader;
    },
    // sending success value
    getSuccess(state) {
      return state.success;
    }
  },
  mutations: {
    //set media data
    setUserNeighbourhoods(state, payload) {
      state.neighbourhoods = payload;
    },

    setKeyword(state, data) {
      state.keyword = data;
    },

    setLocation(state, data) {
      state.location = data;
    },

    setProducts(state, data) {
      state.products = data;
    },
    setCategories(state, data) {
      state.categories = data;
    },
    setSubCat(state, data) {
      state.subCat = data;
    },
    setSubFilters(state, data) {
      state.subFilter = data;
    },
    setLoader(state, payload) {
      state.prodLoader = payload;
    },
    setSuccess(state, payload) {
      state.success = payload;
    }
  },

  actions: {
    getCategories({ state, commit }, bussiness_id) {
      return axios
        .get("category")
        .then(res => {
          console.log("my Categories: ");
          let categories = res.data.data;
          let all = [];

          // console.log(categories);

          categories.map(cat => {
            let data = {
              bussiness_id: bussiness_id,
              cat_id: cat.id
            };

            axios
              .get(`subcategory/${data.cat_id}`)
              .then(res => {
                let sub_categories = [];
                res.data.data.map(sub => {
                  sub_categories.push({ cat_id: cat.id, ...sub });
                });
                // console.log("final sub categories: ", sub_categories);

                all.push({
                  category: cat,
                  sub_cat: sub_categories
                });
                // console.log(all);
              })
              .catch(err => {
                console.error(err);
              });
          });

          // console.log(all);
          commit("setCategories", all);
        })
        .catch(err => {
          console.log("Categories: ");
          console.error(err);
        });
    },

    getFilter({ state }, sub_id) {
      return axios.get(`filters/subcategory/${sub_id}`);
    },

    getProducts({ commit, state }) {
      commit("setLoader", true);

      return axios
        .get("market/search")
        .then(res => {
          commit("setLoader", false);
          console.log("products list: ", res.data);
          commit("setProducts", res.data);
        })
        .catch(err => {
          commit("setLoader", false);

          console.error(err);
        });
    },
    getGuestUserProducts({ commit, state }) {
      commit("setLoader", true);

      return axios
        .get("visitor/search/market")
        .then(res => {
          commit("setLoader", false);
          console.log("products list: ", res.data);
          commit("setProducts", res.data);
        })
        .catch(err => {
          commit("setLoader", false);

          console.error(err);
        });
    },
    nextPage({ commit, state }, payload) {
      commit("setLoader", true);

      return axios
        .get(payload.url + "&page=" + payload.page)
        .then(res => {
          commit("setLoader", false);

          console.log("products list: ", res.data);
          commit("setProducts", res.data);
        })
        .catch(err => {
          commit("setLoader", false);

          console.error(err);
        });
    },
    async getUserNeigbourhoods({ commit }, data) {
      console.log("[...neigbourb...]");
      try {
        const res = await axios.get("user/neighborhood");
        console.log("[...neigbourb...]", res.data.data);

        commit("setUserNeighbourhoods", res.data.data);
      } catch (err) {
        console.error(err);
      }
    },
    async searchProducts({ commit, state }, data) {
      commit("setProducts", { data: [] });
      commit("setLoader", true);

      let keyword = state.keyword ? state.keyword : "";
      let cat_id = data.cat_id ? data.cat_id : "";
      let sub_cat = data.sub_cat ? data.sub_cat : "";
      let filter_id = data.filter_id ? data.filter_id : "";
      let page = data.page ? data.page : "";
      let distance = data.distanceInKM ? data.distanceInKM : "";
      let countryId = data.country_id ? "&countryId=" + data.country_id : "";
      let regionId = data.region_id ? "&regionId=" + data.region_id : "";
      let divisionId = data.division_id
        ? "&divisionId=" + data.division_id
        : "";
      let councilId = data.council_id ? "&councilId=" + data.council_id : "";
      let city = data.city
        ? "&city=" + data.city
        : "&city=" + state.location.code;
      let neighbourhoodId = data.neighborhood_id
        ? "&neighbourhoodId=" + data.neighborhood_id
        : "";

      let neighbourhood = data.neighbourhood
        ? "&neighbourhood=" + data.neighbourhood
        : "";
      const limit = 10;

      try {
        const res = await axios.get(
          `search/market?keyword=${keyword}&cat_id=${cat_id}&sub_cat_id=${sub_cat}&filter_id=${filter_id}&distanceInKM=${distance}&page=${page}&limit=${limit}` +
            countryId +
            regionId +
            divisionId +
            councilId +
            city +
            neighbourhoodId +
            neighbourhood
        );
        commit("setLoader", false);
        commit("setProducts", res.data);
      } catch (err) {
        commit("setLoader", false);
      }
    },

    async searchGuestUserProducts({ commit, state }, data) {
      commit("setProducts", { data: [] });
      commit("setLoader", true);

      let keyword = state.keyword ? state.keyword : "";
      let cat_id = data.cat_id ? data.cat_id : "";
      let sub_cat = data.sub_cat ? data.sub_cat : "";
      let filter_id = data.filter_id ? data.filter_id : "";
      let page = data.page ? data.page : "";
      let distance = data.distanceInKM ? data.distanceInKM : "";
      let countryId = data.country_id ? "&countryId=" + data.country_id : "";
      let regionId = data.region_id ? "&regionId=" + data.region_id : "";
      let divisionId = data.division_id
        ? "&divisionId=" + data.division_id
        : "";
      let councilId = data.council_id ? "&councilId=" + data.council_id : "";
      let city = data.city
        ? "&city=" + data.city
        : "&city=" + state.location.code;
      let neighbourhoodId = data.neighborhood_id
        ? "&neighbourhoodId=" + data.neighborhood_id
        : "";

      let neighbourhood = data.neighbourhood
        ? "&neighbourhood=" + data.neighbourhood
        : "";
      const limit = 10;

      try {
        const res = await axios.get(
          `visitor/search/market?keyword=${keyword}&cat_id=${cat_id}&sub_cat_id=${sub_cat}&filter_id=${filter_id}&distanceInKM=${distance}&page=${page}&limit=${limit}` +
            countryId +
            regionId +
            divisionId +
            councilId +
            city +
            neighbourhoodId +
            neighbourhood
        );
        commit("setLoader", false);
        commit("setProducts", res.data);
      } catch (err) {
        commit("setLoader", false);
      }
    }
  }
};
