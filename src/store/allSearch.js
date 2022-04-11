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

        keyword: null,
        location: null,
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

        setKeyword(state, data) {
            state.keyword = data;
        },

        setLocation(state, data) {
            state.location = data;
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
        setLocation({commit}, payload){
            commit("setLocation", payload)
        },

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
            let keyword = state.keyword ? "&keyword=" + state.keyword : "";

            let subCatId = data.sub_cat ? "&subCatId=" + data.sub_cat : "";
            let filterId = data.filter_id ? "&filterId=" + data.filter_id : "";

            //blec implementation for location search 

            let countryId = data.country_id ? "&countryId=" + data.country_id : "";
            let regionId = data.region_id ? "&regionId=" + data.region_id : "";
            let divisionId = data.division_id ? "&divisionId=" + data.division_id : "";
            let councilId = data.council_id ? "&councilId=" + data.council_id : "";
            let city = data.city ? "&city=" + data.city : "";
            let neighbourhoodId=data.neighborhood_id ?  "&neighbourhoodId=" + data.neighborhood_id : "";

            let neighbourhood = data.neighbourhood ? "&neighbourhood=" + data.neighbourhood : "&city=" + state.location;

            

            let url = "";

            TYPES.map((type) => {

                if (!islogin) {

                    url = `/visitor/search/${type}?${catId+subCatId+countryId+regionId+filterId+divisionId+councilId+city+neighbourhood+neighbourhoodId+keyword}`;

                } else {
                    // console.log(`type => ${type} keyword = ${keyword}`);
                    url = `/search/${type}?${catId+subCatId+filterId+countryId+regionId+divisionId+councilId+city+neighbourhood+neighbourhoodId+keyword}`;


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