import axios from "axios";
import io from 'socket.io-client';
const socket = io('localhost:7000', {
    transports: ['websocket', 'polling', 'flashsocket'],
})
export default {
    namespaced: true,
    state: {
        currentBizId: null,
        currentBiz: null,
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
        CREATE_ROOM({ commit, state }, data) {
            socket.emit('create-biz', [data.receiver_id, state.currentBizId]);
        },

        // Call to action
        cta_business({ commit, dispatch, state }, data) {
            // create a room
            dispatch("CREATE_ROOM", { senderId: state.currentBizId, receiverId: data.receiverId })

            // Chat Type
            commit("setChatType", data.type);


            // assign receiver id to chatId
            commit("setSelectedChatId", data.receiverId);

            // getBizToBizHist
            dispatch("GET_BIZ_TO_BIZ", { receiverID: data.receiverId })

            // set new msg to false


            // assign { active: true, clickedId: data.id, name: data.chat.name} to chatSelected
            commit("setSelectedChat", { active: true, clickedId: data.receiverId, name: data.name });

        },





        // --------------------
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