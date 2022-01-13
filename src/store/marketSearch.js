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
        neighbourhoods: [],

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
                            .get(
                                `subcategory/${data.cat_id}`
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
            return axios
                .get(`filters/subcategory/${sub_id}`)
        },

        getProducts({ commit, state }) {
            commit("setLoader", true);

            return axios.get("market/search")
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

            return axios.get(`market/search?page=${page}`)
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

            let keyword = data.keyword ? data.keyword : ''
            let cat_id = data.cat_id ? data.cat_id : ''
            let sub_cat = data.sub_cat ? data.sub_cat : ''
            let filter_id = data.filter_id ? data.filter_id : ''
            let page = data.page ? data.page : ''
            let distance = data.distanceInKM ? data.distanceInKM : ''

            try {
                const res = await axios.get(`market/search?keyword=${keyword}&cat_id=${cat_id}&sub_cat_id=${sub_cat}&filter_id=${filter_id}&distanceInKM=${distance}&page=${page}`);
                commit("setLoader", false);
                console.log("Search results: ", res.data);
                commit("setProducts", res.data);
            } catch (err) {
                commit("setLoader", false);
                console.log(err);
            }
        },


    }
};