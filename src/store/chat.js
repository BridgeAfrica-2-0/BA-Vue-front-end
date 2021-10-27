import axios from "axios";
import { state } from "./search/state";

export default {
    namespaced: true,
    state: {
        currentUser: JSON.parse(localStorage.getItem("user")),
        users: [],
        bizToBiz: [],
        bizToUser: [],
        bizToNetwork: [],
        userToUser: [],

        loader: false,
        success: false
    },
    getters: {
        // get data
        getBizToBiz(state) {
            return state.bizToBiz;
        },
        getBizToUser(state) {
            return state.bizToUser;
        },
        getBizToNetwork(state) {
            return state.bizToNetwork;
        },
        getUserToUser(state) {
            return state.userToUser;
        },
        getUsers(state) {
            return state.users;
        },
        getUser(state) {
            return state.currentUser;
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
        }
    },
    mutations: {
        //set data
        setBizToBiz(state, data) {
            state.bizToBiz = data;
        },
        setBizToUser(state, data) {
            state.bizToUser = data;
        },
        setBizToNetwork(state, data) {
            state.bizToNetwork = data;
        },
        setUserToUser(state, data) {
            state.userToUser = data;
        },
        setUsers(state, data) {
            state.users = data;
        },
        setUser(state, data) {
            state.currentUser = data
        },


        setLoader(state, payload) {
            state.loader = payload;
        },
        setSuccess(state, payload) {
            state.success = payload;
        }
    },

    actions: {
        GET_USERS({ commit, state }) {

            commit("setLoader", true);

            axios.get(`/users`)
                .then((res) => {
                    commit("setLoader", false);
                    console.log("All Users: ", res.data.data);
                    commit("setUsers", res.data.data ? res.data.data : {
                        data: []
                    });

                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },

        GET_USER_TO_USER({ commit, state }, data) {
            commit("setLoader", true);

            console.log("[DEBUG] user to user", data);

            axios.get(`/messages/${data}`)
                .then((res) => {
                    commit("setLoader", false);
                    console.log("User to user: ", res.data.data);
                    commit("setUserToUser", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        }


    }
};