import axios from "axios";

export default {
    namespaced: true,
    state: {
        products: ["tomato", "test", "yam"],
        categories: [],
        subCat: [],
        loader: false,
        success: false,
        token: '24|5uVwIzU7r82crJj936tmqkuIMRXxm1ADTCbuRceL'

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
        setSubCat(state, data) {
            state.subCat = data;
        },
        setLoader(state, payload) {
            state.loader = payload;
        },
        setSuccess(state, payload) {
            state.success = payload;
        }
    },

    actions: {
        getCategories({ state, commit }) {
            return axios.get("http://team2dev.maxinemoffett.com/api/v1/category/all", {
                    headers: {
                        Authorization: `Bearer ${state.token}`,
                    },
                })
                .then(res => {
                    console.log("Categories: ");
                    console.log(res.data.data);
                    commit('setCategories', res.data.data)
                })
                .catch(err => {
                    console.log("Categories: ");
                    console.error(err);
                });
        },
        getSubCat({ state, commit }, data) {
            console.log(data);
            axios
                .get(`http://team2dev.maxinemoffett.com/api/v1/subcategory/all/${data.cat_id}?business_id=${data.bussiness_id}`, {
                    headers: {
                        Authorization: `Bearer ${state.token}`,
                    },
                })
                .then((res) => {
                    console.log("SubCategories:");
                    console.log(res.data.data);
                    commit('setSubCat', res.data.data)

                    // state.subCategories = res.data.data;
                })
                .catch((err) => {
                    console.log("SubCategories: ");
                    console.error(err);
                    state.subCat = []


                    // this.subCategories = {name: "No sub-category available!"};

                });
        },

        async getProducts({ commit }, businessId) {

            return await axios
                .get(`market/products/${businessId}`)
                .then((data) => {
                    commit('setProducts', data.data.message);
                    console.log(data.data);
                });
        },

    }
};