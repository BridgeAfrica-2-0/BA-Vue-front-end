import axios from "axios";

export default {
    namespaced: true,
    state: {
        // currentAuth: rootState.auth.profilConnected,
        currentUser: JSON.parse(localStorage.getItem("user")),
        users: [],
        bizs: [],
        nets: [],

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
        getBizs(state) {
            return state.bizs;
        },
        getNets(state) {
            return state.nets;
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
        setBizs(state, data) {
            state.bizs = data
        },
        setNets(state, data) {
            state.nets = data
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
        GET_COMMUNITY_USERS({ commit, state }, data) {
            commit("setUsers", []);
            commit("setLoader", true);
            let keyword = data ? '/' + data : ''
            axios.get(`/community/listing/users${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let userFinal = []
                    let users = res.data.data
                    users.map((user) => {
                        userFinal.push(user.user)
                    })
                    commit("setUsers", userFinal);
                    console.log("community people:", userFinal);
                    // commit("businessChat/setUsers", usersFinal);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        GET_COMMUNITY_BIZS({ commit, state }, data) {
            commit("setUsers", []);
            commit("setLoader", true);
            let keyword = data ? '/' + data : ''
            axios.get(`community/listing/user/business${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let userFinal = []
                    let users = res.data.data
                    users.map((user) => {
                        userFinal.push(user.business)
                    })
                    commit("setUsers", userFinal);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },

        GET_COMMUNITY_NETS({ commit, state }, data) {
            commit("setUsers", []);
            commit("setLoader", true);
            let keyword = data ? '/' + data : ''
            axios.get(`community/listing/user/network${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let userFinal = []
                    let users = res.data.data
                    users.map((user) => {
                        userFinal.push(user.network)
                    })
                    console.log('user network:', userFinal);
                    commit("setUsers", userFinal);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },


        // -----------------------------------
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
                    // commit("businessChat/setUsers", usersFinal);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        GET_BIZS({ commit, rootState }, data) {
            commit("setBizs", []);
            commit("setLoader", true);
            let keyword = data ? '/' + data : ''
            let currentAuth = rootState.auth.profilConnected

            axios.get(`/business/all${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let bizs = res.data.data
                    let bizsFinal = currentAuth.user_type == 'business' ? bizs.filter((biz) => { return biz.id != currentAuth.id }) : bizs
                    commit("setBizs", bizsFinal);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        GET_NETS({ commit, state, rootState }, data) {
            commit("setNets", []);
            commit("setLoader", true);
            let keyword = data ? '?keyword=' + data : ''
            let currentAuth = rootState.auth.profilConnected

            axios.get(`/network/search${keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    let bizs = res.data.data
                    let bizsFinal = currentAuth.user_type == 'network' ? bizs.filter((biz) => { return biz.id != currentAuth.id }) : bizs
                    commit("setNets", bizsFinal);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        // [NO BUG]
        GET_USERS_CHAT_LIST_Dos({ commit, state }, data) {
            commit("setUsers", []);
            console.log("[data]:", data);
            

            if (data.type == 'user') {
                axios.get(`/messages/userListing`)
                    .then((res) => {
                        console.log("User chat list: ", res.data.data);
                        commit("setChatList", res.data.data ? res.data.data : {
                            data: []
                        });
                    })

            } else if (data.type == 'business') {
                axios.get(`/messages/userBusiness`)
                    .then((res) => {
                        console.log("Business chat list: ", res.data.data);
                        commit("setChatList", res.data.data ? res.data.data : {
                            data: []
                        });
                    })

            } else if (data.type == "network") {
                axios.get(`/messages/userNetwork`)
                    .then((res) => {
                        console.log("Network chat list: ", res.data.data);
                        commit("setChatList", res.data.data ? res.data.data : {
                            data: []
                        });
                    })

            } else {
                axios.get(`group/list/users/${state.currentUser.user.id}`)
                    .then((res) => {
                        console.log("Business GROUPS: ", res.data.data);
                        commit("setChatList", res.data.data ? res.data.data : {
                            data: []
                        });
                    })
            }
        },
        GET_USERS_CHAT_LIST({ commit, state }, data) {
            commit("setUsers", []);
            console.log("[data]:", data);


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
            } else if (data.type == "network") {
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
            } else {
                axios.get(`group/list/users/${state.currentUser.user.id + keyword }`)
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
        // SHARE <---------
        SHARE_POST_NETWORK({ commit }, data) {
            commit("setLoader", true)

            return axios.post(`/share/post/user/network`, data)
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

            return axios.post(`/share/post/user`, data)
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
            console.log("data:", data);

            return axios.post(`/share/post/user/business`, data)
                .then((res) => {
                    commit("setLoader", false)
                    console.log("Post shared...", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false)
                    console.log(err);
                })

        },
        // ------------------
        SAVE_USERS_CHAT({ commit, dispatch }, data) {
            commit("setUsers", []);
            console.log("[DEBUG]", data);
            var payload = data.data
            var type = data.type
            let exec = 0

            if (type == 'business') {
                if (exec < 1) {
                    axios.post(`/messages/UserToBusiness`, payload, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then((res) => {
                            exec += 1
                            console.log("exec:", exec);
                            console.log("Message saved...", res.data.data);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
            } else if (type == 'user' && exec < 1) {
                console.log("bug");
                if (exec < 1) {
                    axios.post(`/messages/UserToUser`, payload, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then((res) => {
                            exec += 1
                            console.log("exec:", exec);
                            console.log("Message saved...", res.data.data);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
            } else if (type == 'network') {
                if (exec < 1) {
                    axios.post(`/messages/UserToNetwork`, payload)
                        .then((res) => {
                            exec += 1
                            console.log("exec:", exec);
                            console.log("Message saved...", res.data.data);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
            } else console.log("Not saved!");

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
            let keyword = data.keyword ? '/' + data.keyword : ''


            await axios.get(`/messages/network/${data.receiverID + keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    console.log("User to network: ", res.data.data);
                    commit("setUserToUser", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        async GET_USER_TO_GROUP({ commit, state }, data) {
            commit("setLoader", true);
            console.log("[DEBUG] user to group", data);
            let keyword = data.keyword ? '/' + data.keyword : ''

            await axios.get(`/group/${data.receiverID + keyword}`)
                .then((res) => {
                    commit("setLoader", false);
                    console.log("Group: ", res.data.data);
                    commit("setUserToUser", res.data.data);
                })
                .catch((err) => {
                    commit("setLoader", false);
                    console.log(err);
                })
        },
        DATA_UPDATE_C({ commit, state, dispatch }, data) {
            commit("setLoader", true);
            console.log("[DEBUG userToUser]: ", data);
            commit("setUserToUser", data);
            commit("setLoader", false);
           
        },


    }
};