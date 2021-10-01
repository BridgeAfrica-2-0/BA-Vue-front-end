import axios from "axios";

export default {
    namespaced: true,
    state: {
        products: [],
        categories: [],
        subCat: [],
        subFilter: [],
        prodLoader: false,
        success: false,
        token: "51|HZT2jfu5klFDkJhpvEI6dBhAQBDEdBQ2fABwhhaf"
    },
    getters: {
        getProducts(state) {
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
            state.subFilter = data
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
                .get("category/all", {
                    headers: {
                        Authorization: `Bearer ${state.token}`
                    }
                })
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
                            .get(
                                `subcategory/all/${data.cat_id}?business_id=${data.bussiness_id}`, {
                                    headers: {
                                        Authorization: `Bearer ${state.token}`
                                    }
                                }
                            )
                            .then(res => {
                                console.log("all loaded!");
                                let sub_categories = []
                                res.data.data.map((sub) => {
                                        sub_categories.push({ cat_id: cat.id, ...sub })
                                    })
                                    // console.log("final sub categories: ", sub_categories);

                                all.push({
                                    category: cat,
                                    sub_cat: sub_categories

                                });
                                console.log(all);
                            })
                            .catch(err => {
                                console.error(err);
                            });
                    });

                    console.log(all);
                    commit("setCategories", all);
                })
                .catch(err => {
                    console.log("Categories: ");
                    console.error(err);
                });
        },

        getFilter({ state }, sub_id) {
            return axios
                .get(`filters/subcategory/${sub_id}`, {
                    headers: {
                        Authorization: `Bearer ${state.token}`
                    }
                })
        },

        getProducts({ commit, state }) {
            commit("setLoader", true);


            return axios.get("market", {
                    headers: {
                        Authorization: `Bearer ${state.token}`,
                    },
                })
                .then((res) => {
                    commit("setLoader", false);

                    console.log("products list: ", res.data);
                    commit("setProducts", res.data);
                })
                .catch((err) => {
                    commit("setLoader", false);

                    console.error(err);
                });
        },
        nextPage({ commit, state }, page) {
            commit("setLoader", true);
            commit("setProducts", { data: [] });

            return axios.get(`market?page=${page}`, {
                    headers: {
                        Authorization: `Bearer ${state.token}`,
                    },
                })
                .then((res) => {
                    commit("setLoader", false);

                    console.log("products list: ", res.data);
                    commit("setProducts", res.data);
                })
                .catch((err) => {
                    commit("setLoader", false);

                    console.error(err);
                });
        },
        searchProducts({ commit, state }, data) {
            commit("setProducts", { data: [] });
            commit("setLoader", true);

            return axios.post("market/search", data, {
                    headers: {
                        Authorization: `Bearer ${state.token}`
                    }
                })
                .then((res) => {
                    commit("setLoader", false);
                    console.log("Search results: ", res.data);
                    commit("setProducts", res.data);

                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                });
        },


    }
};