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
            console.log("business search start", payload);

            console.log();
            commit("setLoading", true);
            // let main = payload.main ? payload.main : false

           

            return await axios.get(`search/business`, {
                params: {
                    keyword: state.keyword,
                    main: "vrai",
                    location: payload.location,
                   // lat: state.geo.lat,
                   // lng: state.geo.lng,
                    categoryId: payload.cat_id,
                    subCategoryId: payload.sub_cat,
                    filterId: payload.filter_id,
                    distance: payload.distance,
                    countryId:payload.country_id,
                    regionId:payload.region_id,
                    divisionId:payload.division_id,
                    councilId:payload.council_id,

                    neighbourhoodId: payload.neighbourhood,
                    neighbourhood:payload.neighbourhood,
                    city:payload.city,



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

        NEXT_PAGE({ commit, state }, pagge) {

            let payload = state.searchState;
            console.log("business page number ");  

            console.log(pagge);
            console.log(payload.keyword);
            return axios.get(`search/business?page=` + pagge, {
                keyword: payload.keyword,
                location: payload.location,
                categoryId: payload.category,
                subCategoryId: payload.subcategory,
                filterId: payload.filter,
                distance: payload.distance,
                lat: state.geo.lat,
                lng: state.geo.lng,
                neighbourhoodId: payload.neighbourhood,

            }).then(({ data }) => {
                console.log(data);
                commit("setBusinesses", data);
                commit("setSponsoredBusinesses", data.data.sponsord);
                commit("setSearchState", payload);
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