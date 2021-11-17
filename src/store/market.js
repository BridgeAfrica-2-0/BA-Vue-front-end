import axios from "axios";

export default {
  namespaced: true,
  state: {
    products: [],
    categories: [],
    subCategories: [],
    subFilter: [],
    loader: false,
    success: false,
  },
  getters: {
    getProducts(state) {
      return state.products;
    },

    getCategories(state) {
      return state.categories;
    },

    getSubCategories(state) {
      return state.subCategories;
    },
    getSubFilters(state) {
      return state.subFilter;
    },


    // sending loader value
    getLoader(state) {
      return state.loader;
    },
    // sending success value
    getSuccess(state) {
      return state.success;
    }
  },
  mutations: {
    //set media data
    setProducts(state, data) {
      state.products = data;
    },
    setCategories(state, data) {
      state.categories = data;
    },
    setSubCategories(state, data) {
      state.subCategories = data;
    },
    setSubFilters(state, data) {
      state.subFilter = data
    },


    setLoader(state, payload) {
      state.loader = payload;
    },
    setSuccess(state, payload) {
      state.success = payload;
    }
  },

  actions: {
    async getBuCategories({ commit }, businessId) {
      await axios.get(`/market/business/categories/${businessId}`)
        .then((response) => {
          commit('setCategories', response.data.data)
          console.log("Business categories", response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // async getSubCategories({ commit }, categoryId) {
    //   await axios.get(`subcategory/${categoryId}`)
    //     .then((response) => {
    //       commit('setSubCategories', response.data.data)
    //       console.log("Sub categories", response.data)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
    getFilter({ state }, sub_id) {
      return axios
        .get(`filters/subcategory/${sub_id}`, {
          headers: {
            //    Authorization: `Bearer ${state.token}`
          }
        })
    },

    getProducts({ commit }) {
      return axios.get("market")
        .then((res) => {
          console.log("products list: ", res.data);
          commit("setProducts", res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    nextPage({ commit }, page) {
      commit("setProducts", []);

      return axios.get(`market?page=${page}`, {
        headers: {
          //       Authorization: "Bearer 24|5uVwIzU7r82crJj936tmqkuIMRXxm1ADTCbuRceL",
        },
      })
        .then((res) => {
          console.log("products list: ", res.data);
          commit("setProducts", res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },

  }
};
    // getCategories({ state, commit }, bussiness_id) {
    //   return axios
    //     .get("category/all", {
    //       headers: {
    //         //   Authorization: `Bearer ${state.token}`
    //       }
    //     })
    //     .then(res => {
    //       console.log("my Categories: ");
    //       let categories = res.data.data;
    //       let all = [];

    //       // console.log(categories);

    //       categories.map(cat => {
    //         let data = {
    //           bussiness_id: bussiness_id,
    //           cat_id: cat.id
    //         };

    //         axios
    //           .get(
    //             `subcategory/all/${data.cat_id}?business_id=${data.bussiness_id}`, {
    //             headers: {
    //               //       Authorization: `Bearer ${state.token}`
    //             }
    //           }
    //           )
    //           .then(res => {
    //             console.log("all loaded!");
    //             all.push({
    //               category: cat,
    //               sub_cat: res.data.data

    //             });
    //             console.log(all);
    //           })
    //           .catch(err => {
    //             console.error(err);
    //           });
    //       });

    //       console.log(all);
    //       commit("setCategories", all);
    //     })
    //     .catch(err => {
    //       console.log("Categories: ");
    //       console.error(err);
    //     });
    // },