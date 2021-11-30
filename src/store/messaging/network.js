import axios from "axios";

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
        async GET_ALL({ commit, state }, data) {
            let keyword = data ? '/' + data : ''
            var users = []
            var businesses = []
            commit("setLoader", true);

            axios.get(`/user/all-user${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    users = res.data.data
                    axios.get(`/business/all${keyword}`)
                        .then((biz) => {
                            commit("setLoader", false);
                            businesses = biz.data.data
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
        GET_BIZS({ commit, state }, data) {
            commit("setBizs", []);

            commit("setLoader", true);
            let keyword = data ? '/' + data : ''
            axios.get(`/networks${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let bizs = res.data.data
                    commit("setBizs", bizs);
                    let curBiz = bizs.filter((biz) => {
                        return state.currentBizId == biz.id
                    })
                    commit("setCurrentBiz", curBiz[0]);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        // [NO BUG]
        GET_BIZS_CHAT_LIST({ commit, state }, data) {

            commit("setLoader", true);
            let keyword = data.keyword ? '/' + data.keyword : ''

            if (data.type == 'user') {
                axios.get(`/messages/networkUser/${state.currentBizId+keyword}`)
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
            } else if (data.type == 'network') {
                axios.get(`/messages/networkListing/${state.currentBizId + keyword}`)
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
                axios.get(`/messages/networkBusiness/${state.currentBizId + keyword}`)
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

        SHARE_POST_NETWORK({ commit }, data) {
            commit("setLoader", true)
            var payload = data.data

            return axios.post(`/share/post/network`, payload)
                .then((res) => {
                    commit("setLoader", false)
                    console.log("Post shared...", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false)
                    console.log(err);
                })

        },

        SHARE_POST_USER({ commit }, data) {
            commit("setLoader", true)
            var payload = data.data

            return axios.post(`/share/post/network/user`, payload)
                .then((res) => {
                    commit("setLoader", false)
                    console.log("Post shared...", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false)
                    console.log(err);
                })

        },
        SHARE_POST_BUSINESS({ commit }, data) {
            commit("setLoader", true)
            var payload = data.data

            return axios.post(`/share/post/network/business`, payload)
                .then((res) => {
                    commit("setLoader", false)
                    console.log("Post shared...", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false)
                    console.log(err);
                })

        }, // --------------------------------

        SAVE_BUSINESS_CHAT({ commit }, data) {
            console.log("[DEBUG]", data);
            var payload = data.data
            var type = data.type

            if (type == 'network') {
                axios.post(`/messages/NetworktoNetwork`, payload)
                    .then((res) => {
                        console.log("Message saved...", res.data.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else if (type == 'user') {
                axios.post(`/messages/NetworktoUser`, payload)
                    .then((res) => {
                        console.log("Message saved...", res.data.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else {
                axios.post(`/messages/NetworktoBusiness`, payload)
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

            await axios.get(`/messages/${state.currentBizId}/network/${data.receiverID + keyword}`)
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

            await axios.get(`/messages/network/${state.currentBizId}/user/${data.receiverID + keyword}`)
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


            await axios.get(`/messages/network/${state.currentBizId}/business/${data.receiverID + keyword}`)
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
}
};