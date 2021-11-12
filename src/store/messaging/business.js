import axios from "axios";
import io from 'socket.io-client';
const socket = io('localhost:7000', {
    transports: ['websocket', 'polling', 'flashsocket'],
})
export default {
    namespaced: true,
    state: {
        currentUser: JSON.parse(localStorage.getItem("user")),
        bizs: [],
        chats: [],
        chatList: [],

        loader: false,
        success: false
    },
    getters: {
        // get data
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


        setLoader(state, payload) {
            state.loader = payload;
        },
        setSuccess(state, payload) {
            state.success = payload;
        }
    },

    actions: {
        CREATE_ROOM({ commit }, data) {
            socket.emit('create-biz', [data.receiver_id, data.sender_id]);
        },
        selectedChat(data) {
            // this.scrollToBottom();
            this.createRoom(data.id);
            this.chatId = data.id;
            let receiver = { receiverID: data.id, keyword: null };
            if (data.type == 'user') {
                this.histBizToUser(receiver);
            } else if (data.type == 'network') {
                this.histBizToNetwork(receiver);
            } else {
                this.histBizToBiz(receiver);
            }
            this.newMsg = false;
            this.chatSelected = { active: true, clickedId: data.id, ...data.chat };
            console.log('[DEBUG] Chat selected:', this.chatSelected);
        },

        GET_BIZS({ commit, state }, data) {
            commit("setBizs", []);

            commit("setLoader", true);
            let keyword = data ? '/' + data : ''
            axios.get(`/business/all${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let bizs = res.data.data
                    commit("setBizs", bizs);

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
                axios.get(`/messages/businessUser/2${keyword}`)
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
                axios.get(`/messages/businessListing/2${keyword}`)
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
                axios.get(`/messages/businessNetwork/2${keyword}`)
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
            commit("setUsers", []);
            console.log("[DEBUG]", data);

            if (data.type == 'business') {
                axios.post(`/messages/BusinesstoBusiness`, data)
                    .then((res) => {
                        console.log("Message saved...", res.data.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else if (data.type == 'user') {
                axios.post(`/messages/BusinesstoUser`, data)
                    .then((res) => {
                        console.log("Message saved...", res.data.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else {
                axios.post(`/messages/BusinesstoNetwork`, data)
                    .then((res) => {
                        console.log("Message saved...", res.data.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        },

        async GET_BIZ_TO_BIZ({ commit }, data) {
            commit("setLoader", true);
            console.log("[DEBUG] user to user", data);
            let keyword = data.keyword ? '/' + data.keyword : ''

            await axios.get(`/messages/2/business/${data.receiverID + keyword}`)
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
        async GET_BIZ_TO_USER({ commit }, data) {
            commit("setLoader", true);
            console.log("[DEBUG] user to business", data);
            let keyword = data.keyword ? '/' + data.keyword : ''

            await axios.get(`/messages/business/1/user/${data.receiverID + keyword}`)
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
        async GET_BIZ_TO_NETWORK({ commit }, data) {
            commit("setLoader", true);
            console.log("[DEBUG] user to network", data);
            let keyword = data.keyword ? '/' + data.keyword : ''


            await axios.get(`/messages/business/1/network/${data.receiverID + keyword}`)
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