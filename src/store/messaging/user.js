import axios from "axios";
// import Echo from 'laravel-echo'
// var io = require('socket.io')()
// const io = require('socket.io-client')
export default {
    namespaced: true,
    state: {
        currentUser: JSON.parse(localStorage.getItem("user")),
        users: [],
        userToUser: [],
        userToBiz: [],
        userToNetwork: [],
        // echo: new Echo({
        //     broadcaster: 'socket.io',
        //     host: "localhost:6001",
        //     client: require('socket.io-client'),
        //     auth: { headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken } }
        // }),

        loader: false,
        success: false
    },
    getters: {
        getEcho(state) {
            return state.echo;
        },
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
        setUserToNetwork(state, data) {
            state.userToNetwork = data;
        },
        setUserToUser(state, data) {
            state.userToUser = data;
        },
        setUserToBiz(state, data) {
            state.userToBiz = data;
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
        GET_USERS({ commit, state }, data) {
            commit("setUsers", []);

            commit("setLoader", true);
            let keyword = data ? '/' + data : ''

            axios.get(`/user/all-user${keyword}`)
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

        async GET_USER_TO_USER({ commit }, data) {
            commit("setLoader", true);

            console.log("[DEBUG] user to user", data);
            let keyword = data.keyword ? '/' + data.keyword : ''

            await axios.get(`/messages/${data.receiverID}${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    console.log("User to user: ", res.data.data);
                    commit("setUserToUser", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        async GET_USER_TO_BIZ({ commit }, data) {
            commit("setLoader", true);

            console.log("[DEBUG] user to business", data);

            await axios.get(`/messages/business/${data}`)
                .then((res) => {
                    commit("setLoader", false);
                    console.log("User to business: ", res.data.data);
                    commit("setUserToBiz", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        async GET_USER_TO_NETWORK({ commit }, data) {
            commit("setLoader", true);

            console.log("[DEBUG] user to network", data);

            await axios.get(`/messages/network/${data}`)
                .then((res) => {
                    commit("setLoader", false);
                    console.log("User to network: ", res.data.data);
                    commit("setUserToNetwork", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        }


    }
};