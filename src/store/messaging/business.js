import axios from "axios";
import { state } from "../search/state";

export default {
    namespaced: true,
    state: {
        all: [],
        users: [],
        networks: [],
        businesses: [],
        currentBizId: null,
        currentBiz: [],
        bizs: [],
        chats: [],
        chatList: [],

        type: 2,
        selectedChat: null,
        selectedChatId: null,

        loader: false,
        success: false
    },
    getters: {
        // get data
        getCurrentBizId(state) {
            return state.currentBizId;
        },
        getAll(state) {
            return state.all;
        },
        getAllUsers(state) {
            return state.users;
        },
        getAllNetworks(state) {
            return state.networks;
        },
        getAllBusinesses(state) {
            return state.businesses;
        },
        getCurrentBiz(state) {
            return state.currentBiz;
        },
        getBizs(state) {
            return state.bizs;
        },
        getChats(state) {
            return state.chats;
        },
        getUser(state) {
            return state.currentUser;
        },
        getChatList(state) {
            return state.chatList;
        },

        getSelectedChatId(state) {
            return state.selectedChatId;
        },
        getSelectedChat(state) {
            return state.selectedChat;
        },
        getChatType(state) {
            return state.type;
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
        setCurrentBizId(state, data) {
            state.currentBizId = data
        },
        setCurrentBiz(state, data) {
            state.currentBiz = data
        },
        setChats(state, data) {
            state.chats = data
        },
        setBizs(state, data) {
            state.bizs = data;
        },
        setBiz(state, data) {
            state.currentUser = data
        },
        setChatList(state, data) {
            state.chatList = data
        },

        setSelectedChatId(state, data) {
            state.selectedChatId = data
        },
        setSelectedChat(state, data) {
            state.selectedChat = data
        },
        setChatType(state, data) {
            state.type = data
        },


        setLoader(state, payload) {
            state.loader = payload;
        },
        setSuccess(state, payload) {
            state.success = payload;
        }
    },

    actions: {
        CREATE_GROUP({ commit }, data) {

            commit("setLoader", true);
            return axios.post(`/group/create`, data)
                .then((res) => {
                    commit("setLoader", false);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        async GET_ALL({ commit, state }, data) {
            let keyword = data ? '/' + data : ''
            var users = []
            var businesses = []
            commit("setLoader", true);

            axios.get(`/user/all-user${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let result = res.data.data
                    result.map((user) => {
                        users.push({ accountType: 'people', ...user })
                    })

                    axios.get(`/business/all${keyword}`)
                        .then((biz) => {
                            commit("setLoader", false);

                            let result = biz.data.data
                            result.map((user) => {
                                businesses.push({ accountType: 'business', ...user })
                            })
                            console.log("Bizs:", businesses);
                            // return axios.get(`/networks${keyword}`)
                            //     .then((res) => {
                            //         commit("setLoader", false);
                            //         state.networks = res.data.data
                            //     })
                            //     .catch((err) => {
                            //         commit("setLoader", false);
                            //         console.log(err);
                            //     })
                            state.all = [...users, ...businesses]
                            state.users = users
                            state.businesses = businesses

                            console.log(" businesses:", businesses);
                            console.log(" users:", state.users);

                            console.log(" All:", state.all);
                        })
                        .catch((err) => {
                            commit("setLoader", false);
                            console.log(err);
                        })

                })


        },
        GET_USERS({ commit, state }, data) {
            commit("setBizs", []);
            state.users = []

            commit("setLoader", true);
            let keyword = data ? '/' + data : ''

            return axios.get(`/user/all-user${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let users = res.data.data
                    state.users = users
                    commit("setBizs", users);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        GET_NETWORKS({ commit, state }, data) {
            commit("setBizs", []);
            state.networks = []

            commit("setLoader", true);
            let keyword = data ? '/' + data : ''
            let usersFinal = []
            return axios.get(`/networks${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let networks = res.data.data
                    state.networks = networks
                    commit("setBizs", networks);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        async GET_BIZS({ commit, state, getters, rootGetters, rootState }, data) {
            state.all = []
            commit("setBizs", []);
            state.businesses = []

            commit("setLoader", true);

            let keyword = data ? '/' + data : ''
            await axios.get(`/business/all${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let bizs = res.data.data

                    console.log('businesses:', bizs)
                    commit("setBizs", bizs);
                    state.businesses = bizs
                    let curBiz = bizs.filter((biz) => {
                        return state.currentBizId == biz.id
                    })
                    commit("setCurrentBiz", curBiz);
                    console.log("current new: ", curBiz);

                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
                // commit("setCurrentBiz", rootGetters['auth/profilConnected']);
                // console.log("current biz:", curBiz);


        },
        // [NO BUG]
        GET_BIZS_CHAT_LIST({ commit, state }, data) {

            commit("setLoader", true);
            let keyword = data.keyword ? '/' + data.keyword : ''

            if (data.type == 'user') {
                axios.get(`/messages/businessUser/${state.currentBizId+keyword}`)
                    .then((res) => {
                        commit("setLoader", false);
                        console.log("business chat list: ", res.data.data);
                        commit("setChatList", res.data.data ? res.data.data : {
                            data: []
                        });
                    })
                    .catch((err) => {
                        commit("setLoader", false);
                        console.log(err);
                    })
            } else if (data.type == 'business') {
                axios.get(`/messages/businessListing/${state.currentBizId + keyword}`)
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
                axios.get(`/messages/businessNetwork/${state.currentBizId + keyword}`)
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
            }
        },
        // ----------------------------------------


        SAVE_BUSINESS_CHAT({ commit }, data) {
            // commit("setUsers", []);
            console.log("[DEBUG]", data);
            var payload = data.data
            var type = data.type

            if (type == 'business') {
                axios.post(`/messages/BusinesstoBusiness`, payload, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((res) => {
                        console.log("Message saved...", res.data.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else if (type == 'user') {
                axios.post(`/messages/BusinesstoUser`, payload, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((res) => {
                        console.log("Message saved...", res.data.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else {
                axios.post(`/messages/BusinesstoNetwork`, payload)
                    .then((res) => {
                        console.log("Message saved...", res.data.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        },

        async GET_BIZ_TO_BIZ({ commit, state }, data) {
            commit("setLoader", true);
            console.log("[DEBUG] user to user", data);
            let keyword = data.keyword ? '/' + data.keyword : ''

            await axios.get(`/messages/${state.currentBizId}/business/${data.receiverID + keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    console.log("Business to business: ", res.data.data);
                    commit("setChats", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        async GET_BIZ_TO_USER({ commit, state }, data) {
            commit("setLoader", true);
            console.log("[DEBUG] user to business", data);
            let keyword = data.keyword ? '/' + data.keyword : ''

            await axios.get(`/messages/business/${state.currentBizId}/user/${data.receiverID + keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    console.log("User to business: ", res.data.data);
                    commit("setChats", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        async GET_BIZ_TO_NETWORK({ commit, state }, data) {
            commit("setLoader", true);
            console.log("[DEBUG] user to network", data);
            let keyword = data.keyword ? '/' + data.keyword : ''


            await axios.get(`/messages/business/${state.currentBizId}/network/${data.receiverID + keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    console.log("User to network: ", res.data.data);
                    commit("setChats", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        }

    }
};