import axios from "axios";

export default {
    namespaced: true,
    state: {
        editors: [],
        all: [],
        users: [],
        networks: [],
        businesses: [],
        currentBizId: null,
        currentBizSlug:null,
        currentBiz: [],
        bizs: [],
        chats: [],
        chatList: [],
        groupMembers: [],
        community: [],
        lastcreatedgroup: {},
        type: 2,
        selectedChat: null,
        selectedChatId: null,
        loader: false,
        success: false
    },
    getters: {
        // get data
        getCommunity(state) {
            return state.community;
        },
        getCurrentBizId(state) {
            return state.currentBizId;
        },
        getCurrentBizSlug(state) {
            return state.currentBizSlug;
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
        getAllEditors(state) {
            return state.editors;
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
        getUserInfo(state) {
            return state.userInfo;
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



        getlastcreatedgroup(state) {
            return state.lastcreatedgroup;
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
        getGroupMembers(state) {
            return state.groupMembers;
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
        setCommunity(state, data) {
            state.community = data;
        },
        setCurrentBizId(state, data) {
            state.currentBizId = data
        },

        setCurrentBizSlug(state, data) {
            state.currentBizSlug = data
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
        setUserInfo(state, data) {
            state.userInfo = data
        },
        setSelectedChatId(state, data) {
            state.selectedChatId = data
        },

        lastCreatedGroup(state, data) {

            state.lastcreatedgroup = data

        },
        setSelectedChat(state, data) {
            state.selectedChat = data
        },
        setChatType(state, data) {
            state.type = data
        },
        setGroupMembers(state, data) {
            state.groupMembers = data
        },


        setLoader(state, payload) {
            state.loader = payload;
        },
        setSuccess(state, payload) {
            state.success = payload;
        }
    },

    actions: {

        // COMMUNITY
        GET_COMMUNITY_USERS({ commit, rootState }, data) {
            commit("setCommunity", []);
            commit("setLoader", true);
            let keyword = data.keyword ? '/' + data.keyword : ''
            axios.get(`/community/listing/business/${data.id}/user${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let userFinal = []
                    let users = res.data.data
                    users.map((user) => {
                        userFinal.push(user.user)
                    })
                    rootState.userChat.users = userFinal
                    console.log("rootState:", rootState.userChat.users);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err)
                })
        },
        GET_COMMUNITY_BIZS({ commit, rootState }, data) {
            commit("setCommunity", []);
            commit("setLoader", true);
            let keyword = data.keyword ? '/' + data.keyword : ''
            axios.get(`/community/listing/businesses/${data.id + keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let userFinal = []
                    let users = res.data.data
                    users.map((user) => {
                        userFinal.push(user.business)
                    })
                    rootState.userChat.users = userFinal
                    console.log("rootState:", rootState.userChat.users);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },

        GET_COMMUNITY_NETS({ commit, rootState }, data) {
            commit("setCommunity", []);
            commit("setLoader", true);
            let keyword = data.keyword ? '/' + data.keyword : ''
            axios.get(`community/listing/business/${data.id}/network${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let userFinal = []
                    let users = res.data.data
                    users.map((user) => {
                        userFinal.push(user.network)
                    })
                    rootState.userChat.users = userFinal
                    console.log("rootState:", rootState.userChat.users);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },

        // ---------------
        async CREATE_GROUP({ commit, state }, data) {
            console.log("group data:", data);
            commit("setLoader", true);
            await axios.post(`/group/create/business/${state.currentBizId}`, data)
                .then((res) => {
                    commit("setLoader", false);
                    commit("setSelectedChatId", res.data.data.groupID);
                    console.log("group created data:", res.data.data);

                    commit("lastCreatedGroup", res.data.data);

                    return res.data.data;

                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },

        async GET_GROUPS({ commit, state }, data) {
            commit("setLoader", true);
            console.log("[DEBUG] user to user", data);
            let keyword = data.keyword ? '/' + data.keyword : ''

            // await axios.get(`group/list/businesses/${state.currentBizId + keyword }`)
            await axios.get(`group/list/admin/business/${state.currentBizId + keyword}`)

                .then((res) => {
                    commit("setLoader", false);
                    console.log("Business GROUPS: ", res.data.data);
                    commit("setChatList", res.data.data ? res.data.data : {
                        data: []
                    });
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        async GET_BUSINESS_MEMBERS({ commit, state }) {
            commit("setBizs", []);

            await axios.post(`network/${state.currentBizId}/business/members`)
                .then((res) => {
                    commit("setLoader", false);
                    let editor = res.data.data
                    if (editor.length > 0) {
                        state.editors = { accountType: "member", ...res.data.data }
                    }
                    console.log("member:", state.editors);
                    commit("setBizs", state.editors);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
            // commit("setCurrentBiz", rootGetters['auth/profilConnected']);

        },
        async GET_GROUP_MEMBERS({ commit, state }, data) {
            commit("setLoader", true);
            console.log("[DEBUG] user to user", data);

            // await axios.get(`group/list/businesses/${state.currentBizId + keyword }`)
            await axios.get(`group/list/members/${data}`)
                .then((res) => {
                    commit("setLoader", false);
                    console.log("MEMBERS GROUPS: ", res.data.data);
                    commit("setGroupMembers", res.data.data ? res.data.data : {
                        data: []
                    });
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
            var networks = []
            var editors = []

            commit("setLoader", true);

            axios.get(`/user/all-user${keyword}`)
                .then((res) => {
                    let result = res.data.data
                    result.map((user) => {
                        users.push({ accountType: 'people', ...user })
                    })

                    axios.get(`/business/all${keyword}`)
                        .then((biz) => {
                            let result = biz.data.data
                            result.map((user) => {
                                businesses.push({ accountType: 'business', ...user })
                            })
                            console.log("Bizs:", businesses);
                            return axios.get(`/networks${keyword}`)
                                .then((net) => {
                                    commit("setLoader", false);
                                    let result = net.data.data
                                    result.map((network) => {
                                        networks.push({ accountType: 'network', ...network })
                                    })

                                    state.all = [...users, ...businesses, ...networks]
                                    state.users = users
                                    state.businesses = businesses
                                    state.networks = networks

                                    console.log(" businesses:", businesses);
                                    console.log(" users:", state.users);
                                    console.log(" All:", state.all);
                                })
                                .catch((err) => {
                                    commit("setLoader", false);
                                    console.log(err);
                                })

                        })
                        .catch((err) => {
                            commit("setLoader", false);
                            console.log(err);
                        })

                }).catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
            // axios.get(`/business/role/editor/${state.currentBizId}${keyword}`)
            //     .then((res) => {
            //         let result = res.data.data
            //         result.map((editor) => {
            //             editors.push({ accountType: 'editor', ...editor })
            //         })
            //         console.log("editors", editors);
            //     })

        },

        GET_USERS({ commit, state }, data) {
            commit("setBizs", []);
            state.users = []

            commit("setLoader", true);
            let keyword = data.keyword ? '/' + data.keyword : ''
            return axios.get(`/business-community/people-follower/${state.currentBizId + keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let users = res.data.data.data
                    if (users) {
                        users.map((elm) => {
                            state.users.push({ statusType: "follower", ...elm })
                        })
                    }

                    axios.get(`/business-community/people-following/${state.currentBizId + keyword}`)
                        .then((res1) => {
                            commit("setLoader", false);

                            if (res1.data.data.data.length > 0) {
                                res1.data.data.data.map((elm) => {
                                    state.users.push({ accountType: "people", statusType: "following", ...elm })
                                })
                            }
                            commit("setBizs", state.users);
                        })
                        .catch((err) => {
                            commit("setLoader", false);
                            console.log(err);
                        })
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
            let keyword = data.keyword ? '/' + data.keyword : ''
            return axios.get(`/business-community/network-follower/${state.currentBizId + keyword}`)
                .then((res) => {
                    commit("setLoader", false);

                    let networks = res.data.data.data
                    if (networks) {
                        networks.map((elm) => {
                            state.networks.push({ statusType: "follower", ...elm })
                        })
                    }

                    axios.get(`/business-community/network-following/${state.currentBizId + keyword}`)
                        .then((res1) => {
                            commit("setLoader", false);
                            if (res1.data.data.data.length > 0) {
                                res1.data.data.data.map((elm) => {
                                    state.networks.push({ statusType: "following", ...elm })
                                })
                                // state.businesses.push({ statusType: "following", ...res1.data.data.data })
                            }

                            commit("setBizs", state.networks);
                        })
                        .catch((err) => {
                            commit("setLoader", false);
                            console.log(err);
                        })
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

            let keyword = data.keyword ? '/' + data.keyword : ''

            await axios.get(`/business-community/business-follower/${state.currentBizId + keyword}`)
                .then((res) => {
                    let business = res.data.data.data
                    if (business.length > 0) {
                        business.map((elm) => {
                            state.businesses.push({ accountType: "business", statusType: "follower", ...elm })
                        })

                    }
                    axios.get(`/business-community/business-following/${state.currentBizId + keyword}`)
                        .then((res1) => {
                            commit("setLoader", false);
                            if (res1.data.data.data.length > 0) {
                                res1.data.data.data.map((elm) => {
                                    state.businesses.push({ accountType: "business", statusType: "following", ...elm })
                                })

                                // state.businesses.push({ statusType: "following", ...res1.data.data.data })
                            }
                            commit("setBizs", state.businesses);
                        })
                        .catch((err) => {
                            commit("setLoader", false);
                            console.log(err);
                        })
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })

            console.log("Business >: ", state.businesses);

        },

        async GET_CUR_BIZ({ commit, state }) {

            await axios.get(`/business/all`)
                .then((res) => {
                    commit("setLoader", false);
                    let bizs = res.data.data
                    // console.log('businesses +++:', bizs)

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

        },

        async GET_EDITORS({ commit, state }) {
            commit("setBizs", []);
            commit("setLoader", true);

            let render = []

            await axios.get(`/business/role/editor/${state.currentBizId}`)
                .then((res) => {
                    commit("setLoader", false);
                    let editor = res.data.data

                    console.log(editor)

                    if (editor.length > 0) {
                        editor.map((elm) => {
                            render.push({ accountType: "editor", ...elm })
                        })

                    }

                    console.log("editor:", render);

                    commit("setBizs", render);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
            // commit("setCurrentBiz", rootGetters['auth/profilConnected']);

        },

        // [NO BUG]
        GET_BIZS_CHAT_LIST_Dos({ commit, state }, data) {

            if (data.type == 'user') {
                axios.get(`/messages/businessUser/${state.currentBizId}`)
                    .then((res) => {
                        console.log("business chat list: ", res.data.data);
                        commit("setChatList", res.data.data ? res.data.data : {
                            data: []
                        });
                    })
            } else if (data.type == 'business') {
                axios.get(`/messages/businessListing/${state.currentBizId}`)
                    .then((res) => {
                        console.log("Business chat list: ", res.data.data);
                        commit("setChatList", res.data.data ? res.data.data : {
                            data: []
                        });
                    })
            } else if (data.type == "network") {
                axios.get(`/messages/businessNetwork/${state.currentBizId}`)
                    .then((res) => {
                        console.log("Business chat list: ", res.data.data);
                        commit("setChatList", res.data.data ? res.data.data : {
                            data: []
                        });
                    })
            } else {
                axios.get(`group/list/admin/business/${state.currentBizId}`)
                    .then((res) => {
                        console.log("Business GROUPS: ", res.data.data);
                        commit("setChatList", res.data.data ? res.data.data : {
                            data: []
                        });
                    })
            }
        },
        GET_BIZS_CHAT_LIST({ commit, state }, data) {

            commit("setLoader", true);
            let keyword = data.keyword ? '/' + data.keyword : ''

            if (data.type == 'user') {
                axios.get(`/messages/businessUser/${state.currentBizId + keyword}`)
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
            } else if (data.type == "network") {
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
            } else {
                axios.get(`group/list/admin/business/${state.currentBizId + keyword}`)
                    .then((res) => {
                        commit("setLoader", false);
                        console.log("Business GROUPS: ", res.data.data);
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

        // share post
        SHARE_POST_USER({ commit }, data) {
            commit("setSuccess", false)
            commit("setLoader", true)

            console.log(data);

            return axios.post(`share/post/business/user`, data)
                .then((res) => {
                    console.log("Post shared...", res.data.data);
                    commit("setSuccess", true)
                    commit("setLoader", false)

                })
                .catch((err) => {
                    commit("setLoader", false)
                    console.log(err);
                })
        },
        SHARE_POST_BUSINESS({ commit }, data) {
            commit("setLoader", true)

            return axios.post(`share/post/business`, data)
                .then((res) => {
                    commit("setLoader", false)
                    console.log("Post shared...", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false)
                    console.log(err);
                })
        },
        SHARE_POST_NETWORK({ commit }, data) {
            commit("setLoader", true)

            return axios.post(`/share/post/business/network`, data)
                .then((res) => {
                    commit("setLoader", false)
                    console.log("Post shared...", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false)
                    console.log(err);
                })
        },
        // ----------

        SAVE_BUSINESS_CHAT({ commit }, data) {
            // commit("setUsers", []);
            console.log("[DEBUG]", data);
            var payload = data.data
            var type = data.type
            let exec = 0


            if (type == 'business') {
                if (exec < 1) {
                    axios.post(`/messages/BusinesstoBusiness`, payload, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                        .then((res) => {
                            exec += 1
                            console.log("Message saved...", res.data.data);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
            } else if (type == 'user') {
                if (exec < 1) {
                    axios.post(`/messages/BusinesstoUser`, payload, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                        .then((res) => {
                            exec += 1

                            console.log("Message saved...", res.data.data);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }

            } else if (type == 'network') {
                if (exec < 1) {
                    axios.post(`/messages/BusinesstoNetwork`, payload)
                        .then((res) => {
                            exec += 1

                            console.log("Message saved...", res.data.data);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }

            }
        },
        GET_USER_INFO({ commit, state }, data) {

            return axios.get(`/userIntro`)
                .then((res) => {
                    console.log("USER INFO", res.data.data.user);
                    commit("setUserInfo", res.data.data.user);

                })
                .catch((err) => {
                    console.log(err);
                })
        },
        SAVE_GROUP_CHAT({ commit }, data) {
            // commit("setUsers", []);
            console.log("[DEBUG]", data);
            let payload = data.data
            let group_id = data.group_id
            let sender_id = data.sender_id

            return axios.post(`/group/${group_id}/business/${sender_id}/admin`, payload, {
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
        },
        async GET_BIZ_TO_GROUP({ commit, state, dispatch }, data) {
            commit("setLoader", true);
            console.log("[DEBUG]: ", data);
            let keyword = data.keyword ? '/' + data.keyword : ''


            await axios.get(`/group/${data.receiverID + keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    console.log("Group: ", res.data.data);
                    commit("setChats", res.data.data);

                    dispatch("GET_GROUP_MEMBERS", data.receiverID)
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },

        DATA_UPDATE_C({ commit, state, dispatch }, data) {
            commit("setLoader", true);
            console.log("[DEBUG]: ", data);
            commit("setChats", data);
            commit("setLoader", false);

        },
        async DELETE_USER_MESSAGE_BY_MESSAGEID({ commit, state, dispatch }, data) {
            commit("setLoader", true);
            console.log("[DEBUG]: DELETE_USER_MESSAGE_BY_MESSAGEID ", data);
            let messageId = data.id;

            await axios.delete(`messages/${messageId}/user`)
                .then((res) => {
                    commit("setLoader", false);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },

        async DELETE_BUSINESS_MESSAGE_BY_MESSAGEID_BUSINESSID({ commit, state, dispatch }, data) {
            commit("setLoader", true);
            console.log("[DEBUG]: DELETE_BUSINESS_MESSAGE_BY_MESSAGEID_BUSINESSID ", data);
            let messageId = data.id;
            let businessId = data.businessId;

            await axios.delete(`messages/${messageId}/business/${businessId}`)
                .then((res) => {
                    commit("setLoader", false);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },

        async DELETE_NETWORK_MESSAGE_BY_MESSAGEID_NETWORKID({ commit, state, dispatch }, data) {
            commit("setLoader", true);
            console.log("[DEBUG]: DELETE_NETWORK_MESSAGE_BY_MESSAGEID_NETWORKID ", data);
            let messageId = data.id;
            let networkId = data.networkId;

            await axios.delete(`messages/${messageId}/network/${networkId}`)
                .then((res) => {
                    commit("setLoader", false);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },

        async DELETE_GROUP_MESSAGE_BYGROUP_ID({ commit, state, dispatch }, data) {
            // commit("setLoader", true);
            console.log("[DEBUG]: DELETE_GROUP_MESSAGE_BYGROUP_ID ", data);
            let messageId = data.id;
            let groupId = data.groupId;
            let businessId = data.business_admin_id

            await axios.delete(`group/${groupId}/message/${messageId}/business/${businessId}`)
                .then((res) => {

                    // dispatch("DELETE_GROUP_MESSAGE_BYGROUP_ID")
                    commit("setLoader", false);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },

        async DELETE_BUSINESS({ commit, state, dispatch }, data) {

            commit("setLoader", true);
            console.log("[DEBUG]: DELETE_BUSINESS", data);

            const chatData = data.data
            const typeData = data.type

            var urlDelte = "";

            switch (data.type.type) {

                case "user":
                    urlDelte = `messages/businessOwner/${typeData.chat.sender_business_id}/business/${typeData.id}/chat`
                    break;

                case "business":
                    urlDelte = `messages/businessOwner/${typeData.chat.sender_business_id}/business/${typeData.id}/chat`
                    break;
                case "network":
                    urlDelte = `messages/businessOwner/${typeData.chat.sender_business_id}/business/${typeData.id}/chat`
                    break;


                // case "business":
                //         urlDelte = `messages/businessOwner/${typeData.sender_business_id}/business/${data.id}/chat`
                //         break;

                default:
                    urlDelte = ""
                    break;
            }

            if(data.type.type != "group"){

                commit("setChatList", chatData);
                await axios.delete(urlDelte)
                    .then((res) => {
                        commit("setChatList", chatData);
                    })
                    .catch((err) => {
                        console.log(err);
                    })

            }
            

        },

    }
};