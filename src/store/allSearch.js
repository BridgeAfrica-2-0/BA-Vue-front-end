import axios from "axios";

export default {
    namespaced: true,
    state: {
        networks: { data: [] },
        peoples: { data: [] },
        businesses: { data: [] },
        products: { data: [] },
        posts: { data: [] },

        prodLoader: false,
        success: false,
        token: "51|HZT2jfu5klFDkJhpvEI6dBhAQBDEdBQ2fABwhhaf"
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
            return state.prodLoader;
        },
        // sending success value
        getSuccess(state) {
            return state.success;
        }
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

        setLoader(state, payload) {
            state.prodLoader = payload;
        },
        setSuccess(state, payload) {
            state.success = payload;
        }
    },

    actions: {

        async SEARCH({ commit, state }, data) {
            commit("setNetworks", { data: [] });
            commit("setLoader", true);
            console.log("[DEBUG] HELLO NETWORK SEARCH", data);
            let page = 1
            let type = ''

            if (data.page) page = data.page
            if (data.type == 'market') {
                type = 'market'
            } else if (data.type == 'business') {
                type = 'business'
            } else if (data.type == 'business') {
                type = 'business'
            } else if (data.type == 'network') {
                type = 'network'
            } else if (data.type == 'post') {
                type = 'post'
            } else if (data.type == 'user') {
                type = 'user'
            }


            console.log("[debug] page:", page);
            try {
                const res = await axios.post(`/search/${type}?page=${page}`, data, {
                    headers: {
                        Authorization: `Bearer ${state.token}`
                    }
                });
                commit("setLoader", false);
                console.log("Network Search results: ", res.data);
                commit("setNetworks", res.data);
            } catch (err) {
                commit("setLoader", false);
                console.log(err);
            }

        }


    }
};