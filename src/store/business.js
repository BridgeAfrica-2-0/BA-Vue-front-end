import axios from "axios";

export default {
    namespaced: true,

    state: {

        keyword: null,
        location: null,
        businesses: [],
        sponsoredBusinesses: [],
        searchState: {},
        isLoading: false,
        geo: {},
    },

    mutations: {
        setLoading(state, data) {
            console.log("setting search data");
            console.log(data);
            state.isLoading = data;
        },
        setGeo(state, data) {
            state.geo = data;
        },

        setKeyword(state, data) {
            state.keyword = data;
        },

        setLocation(state, data) {
            state.location = data;
        },

        setBusinesses(state, data) {
            state.businesses = data;

        },
        setSearchState(state, data) {
            state.searchState = data;

        },

        setSponsoredBusinesses(state, data) {
            state.sponsoredBusinesses = data;

        },

    },

    actions: {

        getGeo({ commit }, payload) {
            console.log("setting geo location");
            console.log(payload);
            commit("setGeo", payload);
        },

        async FIND_BUSINESS({ commit, state }, payload) {
            commit("setLoading", true);
            return await axios.get(`search/business`, {
                params: {
                    keyword: state.keyword,
                    main: "vrai",
                    location: payload.location,
                   // lat: state.geo.lat,
                   // lng: state.geo.lng,
                    catId: payload.cat_id,
                    subCatId: payload.sub_cat,
                    filterId: payload.filter_id,
                    distance: payload.distance,
                    countryId:payload.country_id,
                    regionId:payload.region_id,
                    divisionId:payload.division_id,
                    councilId:payload.council_id,
                    city:payload.city ? payload.city:state.location ,
                    neighbourhoodId: payload.neighbourhood,
                    limit: 10
                }
            }).then(({ data }) => {
                commit("setLoading", false);

                console.log("set businesses: ", data);
                commit("setBusinesses", data);
                commit("setSponsoredBusinesses", data.data.sponsord);
                commit("setSearchState", payload);
            }).catch(error => {
                commit("setLoading", false);

                console.log({ erroe: error });
                throw error;
            });
        },

        NEXT_PAGE({ commit, state }, payload) {
            return axios.get(payload.url+'&page='+payload.page).then(({ data }) => {
              
                commit("setBusinesses", data);
                commit("setSponsoredBusinesses", data.data.sponsord);
               
                commit("setLoading", false);

            }).catch(error => {
                commit("setLoading", false);

                console.log({ erroe: error });
                throw error;
            });
        },
    },

    getters: {

        getSearchState(state) {
            return state.searchState;
        },

        getBusiness(state) {
            return state.businesses;
        },
        getSponsorBusinesses(state) {
            return state.sponsoredBusinesses;
        },

        getloadingState(state) {
            return state.isLoading;
        }

    }
};