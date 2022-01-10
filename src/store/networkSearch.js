import axios from "axios";

export default {
    namespaced: true,
    state: {
        networks: { data: [] },
        countries: [],
        regions: [],
        divisions: [],
        councils: [],
        neighbourhoods: [],

        prodLoader: false,
        success: false
    },

    getters: {
        getNetworks(state) {
            return state.networks;
        },

        getCountries(state) {
            return state.countries;
        },
        getRegions(state) {
            return state.regions;
        },
        getDivisions(state) {
            return state.divisions;
        },
        getCouncils(state) {
            return state.councils;
        },
        getNeighbourhoods(state) {
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
        //set Network data
        setNetworks(state, data) {
            state.networks = data;
        },
        setCountries(state, data) {
            state.countries = data;
        },
        setRegions(state, data) {
            state.regions = data;
        },
        setDivisions(state, data) {
            state.divisions = data;
        },
        setCouncils(state, data) {
            state.councils = data;
        },
        setNeighbourhoods(state, data) {
            state.neighbourhoods = data;
        },

        setLoader(state, payload) {
            state.prodLoader = payload;
        },
        setSuccess(state, payload) {
            state.success = payload;
        }
    },

    actions: {
        COUNTRIES({ commit, state }) {
            console.log("[DEBUG] Getting countries");


            return axios
                .get("countries")
                .then((res) => {
                    commit("setCountries", res.data.data);
                    console.log("countries results: ", state.countries);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        REGIONS({ commit }, data) {
            return axios
                .post("regions", { countryId: data.country_id })
                .then((res) => {
                    commit("setRegions", res.data.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },

        DIVISIONS({ commit }, data) {
            return axios
                .post("divisions", { regionId: data.region_id })
                .then((res) => {
                    commit("setDivisions", res.data.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        COUNCILS({ commit }, data) {
            return axios
                .post("councils", { divisionId: data.division_id })
                .then((res) => {
                    commit("setCouncils", res.data.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        NEIGHBOURHOODS({ commit }, data) {
            return axios
                .post("neighborhood/show", { councilId: data.council_id })
                .then((res) => {
                    commit("setNeighbourhoods", res.data.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        async SEARCH({ commit, state }, data) {
            commit("setNetworks", { data: [] });
            commit("setLoader", true);
            console.log("[DEBUG] HELLO NETWORK SEARCH", data);

            let page = data.page ? data.page : 1
            let keyword = data.keyword ? data.keyword : ''
            let catId = data.cat_id ? "&cat_id=" + data.cat_id : ''
            let countryId = data.country_id ? "&countryId=" + data.country_id : ''

            let regionId = data.region_id ? "&regionId=" + data.region_id : ''
            let divisionId = data.division_id ? "&divisionId=" + data.division_id : ''
            let councilId = data.council_id ? "&councilId=" + data.council_id : ''
            let neighborhood_id = data.neighborhood_id ? "&neighborhood_id=" + data.neighborhood_id : ''
            let distanceInKM = data.distanceInKM ? "&distanceInKM=" + data.distanceInKM : ''

            console.log("[debug] page:", page);
            try {
                const res = await axios.get(`network/search?keyword=${keyword}&page=${page + catId+countryId+regionId+divisionId+councilId+neighborhood_id+distanceInKM}`);
                commit("setLoader", false);
                console.log("Network Search results: ", res.data);
                commit("setNetworks", res.data);
            } catch (err) {
                commit("setLoader", false);
                console.error(err);
            }

        }


    },
};