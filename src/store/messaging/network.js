import axios from "axios";

export default {
    namespaced: true,
    state: {
        editors: [],
        groupMembers: [],
        all: [],
        users: [],
        members: [],
        networks: [],
        businesses: [],
        currentBizId: null,
        currentBiz: [],
        userInfo: [],
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
        getGroupMembers(state) {
            return state.groupMembers;
        },
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
        getAllEditors(state) {
            return state.editors;
        },
        getAllMembers(state) {
            return state.members;
        },

        getUserInfo(state) {
            return state.userInfo;
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
        getSelectedChatId(state) {
            return state.selectedChatId;
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
        setGroupMembers(state, data) {
            state.groupMembers = data
        },
        setSelectedChatId(state, data) {
            state.selectedChatId = data
        },

        setUserInfo(state, data) {
            state.userInfo = data
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
        CREATE_GROUP({ commit, state }, data) {
            console.log("group data:", data);
            commit("setLoader", true);
            return axios.post(`/group/create/network/${state.currentBizId}`, data)
                .then((res) => {
                    console.log("group created:", res.data.data);
                    commit("setLoader", false);
                    commit("setSelectedChatId", res.data.data.groupID)
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
            await axios.get(`group/list/admin/network/${state.currentBizId + keyword }`)

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

            return axios.get(`network/${state.currentBizId}/user/follower${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let users = res.data.data.data
                    if (users) {
                        users.map((elm) => {
                            state.users.push({ statusType: "follower", ...elm })
                        })
                    }

                    axios.get(`network/${state.currentBizId}/user/following${keyword}`)
                        .then((res1) => {
                            commit("setLoader", false);

                            if (res1.data.data.data.length > 0) {
                                res1.data.data.data.map((elm) => {
                                        state.users.push({ accountType: "people", statusType: "following", ...elm })
                                    })
                                    // state.businesses.push({ statusType: "following", ...res1.data.data.data })
                            }
                            // state.users.push({ statusType: "following", ...res1.data.data })
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
            return axios.get(`/network/${state.currentBizId+keyword}/follower${keyword}`)
                .then((res) => {
                    commit("setLoader", false);

                    let networks = res.data.data.data
                    if (networks) {
                        networks.map((elm) => {
                            state.networks.push({ statusType: "follower", ...elm })
                        })
                    }

                    axios.get(`network/${state.currentBizId}/following${keyword}`)
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

            await axios.get(`/network/${state.currentBizId}/business/follower${keyword}`)
                .then((res) => {
                    let business = res.data.data.data
                    if (business) {
                        business.map((elm) => {
                            state.businesses.push({ accountType: "business", statusType: "follower", ...elm })
                        })
                    }
                    axios.get(`/network/${state.currentBizId}/business/following${keyword}`)
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
        },

        async GET_CUR_BIZ({ commit, state }) {

            await axios.get(`/network`)
                .then((res) => {
                    commit("setLoader", false);
                    let bizs = res.data.data
                    console.log('network +++:', bizs)

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
            state.editors = []

            await axios.post(`/network/${state.currentBizId}/members/editor`)
                .then((res) => {
                    commit("setLoader", false);
                    let editor = res.data.data
                    if (editor.length > 0) {
                        editor.map((elm) => {
                                state.editors.push({ accountType: "editor", ...elm, name: elm.fullname, id: elm.user_id })
                            })
                            // state.editors = { accountType: "business", ...res.data.data }
                    }
                    console.log("editor:", state.editors);
                    commit("setBizs", state.editors);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
                // commit("setCurrentBiz", rootGetters['auth/profilConnected']);

        },
        async GET_NETWORK_MEMBERS({ commit, state }) {
            commit("setBizs", []);
            state.members = []

            await axios.post(`network/${state.currentBizId}/members/list`)
                .then((res) => {
                    commit("setLoader", false);
                    let members = res.data.data

                    if (members.length > 0) {
                        members.map((elm) => {
                            state.members.push({ accountType: "member", ...elm, id: elm.user_id })
                        })

                    }
                    console.log("member:", state.members);
                    commit("setBizs", state.members);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
                // commit("setCurrentBiz", rootGetters['auth/profilConnected']);

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
            } else if (data.type == 'business') {
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
            } else {
                axios.get(`group/list/admin/network/${state.currentBizId + keyword }`)
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
        SAVE_GROUP_CHAT({ commit, state }, data) {
            // commit("setUsers", []);
            console.log("[DEBUG]", data);
            let payload = data.data
                // let group_id = data.group_id
            let sender_id = data.sender_id
            let editor = state.userInfo.editorNetworksID.some((res) => {
                return res.network_id == sender_id
            })
            console.log("editor is", editor);

            if (editor) {
                return axios.post(`/group/${state.selectedChatId}/network/${sender_id}/editor`, payload, {
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
                return axios.post(`/group/${state.selectedChatId}/network/${sender_id}`, payload, {
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
            }



        },

        async GET_BIZ_TO_BIZ({ commit, state }, data) {
            commit("setLoader", true);
            console.log("[DEBUG] user to user", data);
            let keyword = data.keyword ? '/' + data.keyword : ''
            await axios.get(`/messages/network/${state.currentBizId}/business/${data.receiverID + keyword}`)
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

            await axios.get(`/messages/${state.currentBizId}/network/${data.receiverID + keyword}`)
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
        }

    }
};