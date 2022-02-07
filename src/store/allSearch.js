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
        SEARCH({ commit, state, getters }, data) {
            console.log("[here]:", data);
            let islogin = this.getters["auth/isLogged"];
            console.log("testing user login --------");
            console.log(islogin);

            commit("setNetworks", { data: [] });
            commit("setPeoples", { data: [] });
            commit("setProducts", { data: [] });
            commit("setBusinesses", { data: [] });
            commit("setPosts", { data: [] });
            commit("setLoader", true);


            let page = 1;
            const TYPES = ["business", "user", "network", "market", "post"];
            let catId = data.cat_id ? "catId=" + data.cat_id : "";
            let keyword = data.keyword ? "&keyword=" + data.keyword : "";

            let subCatId = data.sub_cat ? "&subCatId=" + data.sub_cat : "";
            let filterId = data.filter_id ? "&filterId=" + data.filter_id : "";

            let url = "";

            TYPES.map((type) => {

                if (!islogin) {

                    url = `/visitor/search/${type}?${catId+subCatId+filterId+keyword}`;

                } else {
                    // console.log(`type => ${type} keyword = ${keyword}`);
                    url = `/search/${type}?${catId+subCatId+filterId+keyword}`;


                }
                console.log(url);
                axios
                    .get(url)
                    .then((res) => {
                        if (type == "business") {
                            commit("setBusinesses", res.data);
                            console.log("business results: ", res.data);
                        } else if (type == "user") {
                            commit("setPeoples", res.data);
                            console.log("user results: ", res.data);
                        } else if (type == "market") {
                            commit("setProducts", res.data);
                            console.log("market results: ", res.data);
                        } else if (type == "network") {
                            commit("setNetworks", res.data);
                            console.log("network results: ", res.data);
                        } else if (type == "post") {
                            commit("setPosts", res.data);
                            console.log("post results: ", res.data);
                        }

                        commit("setLoader", false);
                        console.log("All Search results: ", res.data);
                    })

                .catch((err) => {
                    commit("setLoader", false);
                    console.log({ err: err });
                });
            });

            // console.log("[debug] page:", page);
        },
    },
};