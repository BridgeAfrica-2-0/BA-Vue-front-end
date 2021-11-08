import axios from "axios";

export default {
    namespaced: true,
    state: {
        currentUser: JSON.parse(localStorage.getItem("user")),
        users: [],
        chatList: [],
        userToUser: [],
        userToBiz: [],
        userToNetwork: [],

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
        getChatList(state) {
            return state.chatList;
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
        setChatList(state, data) {
            state.chatList = data
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
            let usersFinal = []
            axios.get(`/user/all-user${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let users = res.data.data
                    usersFinal = users.filter((user) => { return user.id != state.currentUser.user.id })
                    commit("setUsers", usersFinal);

                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        // [BUGGY]
        GET_USERS_CHAT_LIST({ commit, state }, data) {
            commit("setUsers", []);

            commit("setLoader", true);
            let keyword = data.keyword ? '/' + data.keyword : ''

            if (data.type == 'user') {
                axios.get(`/messages/userListing${keyword}`)
                    .then((res) => {
                        commit("setLoader", false);
                        console.log("User chat list: ", res.data.data);
                        commit("setChatList", res.data.data ? res.data.data : {
                            data: []
                        });
                    })
                    .catch((err) => {
                        commit("setLoader", false);
                        console.log(err);
                    })
            } else if (data.type == 'business') {
                axios.get(`/messages/userBusiness${keyword}`)
                    .then((res) => {
                        commit("setLoader", false);
                        console.log("Business chat list: ", res.data.data);
                        commit("setChatList", res.data.data ? res.data.data : {
                            data: []
                        });
                    })
                    .catch((err) => {
                        commit("setLoader", false);
                        console.log(err);
                    })
            } else {
                axios.get(`/messages/userNetwork${keyword}`)
                    .then((res) => {
                        commit("setLoader", false);
                        console.log("Network chat list: ", res.data.data);
                        commit("setChatList", res.data.data ? res.data.data : {
                            data: []
                        });
                    })
                    .catch((err) => {
                        commit("setLoader", false);
                        console.log(err);
                    })
            }
        },
        // ----------------------------------------


        SAVE_USERS_CHAT({ commit, dispatch }, data) {
            commit("setUsers", []);

            axios.post(`/messages/UserToUser`, data)
                .then((res) => {
                    console.log("Message saved...", res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        async GET_USER_TO_USER({ commit }, data) {
            commit("setLoader", true);
            console.log("[DEBUG] user to user", data);
            let keyword = data.keyword ? '/' + data.keyword : ''

            await axios.get(`/messages/user/${data.receiverID + keyword}`)
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
            let keyword = data.keyword ? '/' + data.keyword : ''

            await axios.get(`/messages/business/${data.receiverID + keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    console.log("User to business: ", res.data.data);
                    commit("setUserToUser", res.data.data);
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
                    commit("setUserToUser", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        }


    }
};