import axios from "axios";

export default {
    namespaced: true,
    state: {
        networks: { data: [] },
        countries: [],
        regions: [],
        divisions: [],
        councils: [],

        prodLoader: false,
        success: false,
        token: "51|HZT2jfu5klFDkJhpvEI6dBhAQBDEdBQ2fABwhhaf"
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

            return axios.get("countries")
                .then((res) => {
                    commit("setCountries", res.data.data);
                    console.log("countries results: ", state.countries);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        REGIONS({ commit }, data) {
            return axios.post("regions", { country_id: data.country_id })
                .then((res) => {
                    commit("setRegions", res.data.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },

        DIVISIONS({ commit }, data) {
            return axios.post("divisions", { region_id: data.region_id })
                .then((res) => {
                    commit("setDivisions", res.data.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        COUNCILS({ commit }, data) {
            return axios.post("councils", { division_id: data.division_id })
                .then((res) => {
                    commit("setCouncils", res.data.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },

        async SEARCH({ commit, state }, data) {
            commit("setNetworks", { data: [] });
            commit("setLoader", true);
            console.log("[DEBUG] HELLO NETWORK SEARCH", data);
            let page = 1
            if (data.page) page = data.page
            else console.log("Page not set!");
            console.log("[debug] page:", page);
            try {
                const res = await axios.post(`network/search?page=${page}`, data, {
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