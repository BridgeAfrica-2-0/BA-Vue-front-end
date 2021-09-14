import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import market from "./market";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import hotbusiness from "./hotbusiness";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";

import axios from "axios";
Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
export default new Vuex.Store({
    modules: {
        auth,
        networkDetails,
        dashboardcommunity,
        ProfileAndBusinessDetails,
        businessOwner,
        market,

    },

    state,
    getters: {
        recoverPassData: state => {
            return state.recoverData;
        },
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        },
        loggedIn(state) {
            return state.login;
        },
        getUser(state) {
            return state.userData;
        },
        getService(state) {
            return state.service;
        },
        getUsers(state) {
            return state.users;
        },
        getProfilePicture(state) {
            return state.userData[0].createPost.profile_picture_localstorage;
        },
        getCoverImage(state) {
            return state.userData[0].coverImage;
        },
        getBusinessUserPost(state) {
            return state.userData[0].business;
        },
        getCommunautyUserPost(state) {
            return state.userData[0].communauty;
        },
        getPostLists(state) {
            return state.userData[0].posts;
        }
    },
    actions,
    mutations
});



const getDefaultState = () => {
    return {
        recoverData: "",
        login: false,
        isToi: false,
        token: "6|InTVkgzF2JMHXrmcMPccH9glZCnhzuxgFq1CrPxj",
        count: "",
        todos: [],
        userData: [{
            id: "",
            fullname: "",
            username: "TONTON LA FORCE LE BEAU GOSSE",
            email: "",
            password: "",
            profileName: "TONTON LA FORCE LE BEAU GOSSE",
            profilePicture: null,
            coverImage: null,
            numbersOfFollowers: 30,
            posts: [{
                    post_id: 30,
                    profileName: "TONTON LA FORCE LE BEAU GOSSE",
                    profile_picture: null,
                    content: {
                        details: "Lorem Ipsum has been the industry's standard dummy text ever\n" +
                            "                since the 1500s, when an unknown printer took a galley of type\n" +
                            "                and scrambled it to make a type specimen book. It has survived\n" +
                            "                not only five centuries, but also the leap into electronic\n" +
                            "                typesetting, remaining essentially unchanged.😛",
                        movies: [],
                        hyperlinks: []
                    },
                    timeCountDown: "1h",
                    likes: [{
                            id: 1,
                            post_id: 30,
                            user_id: 4,
                            created_at: null,
                            updated_at: null
                        },
                        {
                            id: 2,
                            post_id: 30,
                            user_id: 3,
                            created_at: null,
                            updated_at: null
                        }
                    ],
                    comments: [{
                            comment_id: 1,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            timeCountDown: null,
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        },
                        {
                            comment_id: 2,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        },
                        {
                            comment_id: 3,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        }
                    ]
                },
                {
                    post_id: 31,
                    profileName: "TONTON LA FORCE LE BEAU GOSSE",
                    profile_picture: null,
                    details: "Lorem Ipsum has been the industry's standard dummy text ever\n" +
                        "                since the 1500s, when an unknown printer took a galley of type\n" +
                        "                and scrambled it to make a type specimen book. It has survived\n" +
                        "                not only five centuries, but also the leap into electronic\n" +
                        "                typesetting, remaining essentially unchanged.😛",
                    movies: [],
                    hyperlinks: [],
                    timeCountDown: "1h",
                    likes: [{
                            id: 1,
                            post_id: 30,
                            user_id: 4,
                            created_at: null,
                            updated_at: null
                        },
                        {
                            id: 2,
                            post_id: 30,
                            user_id: 3,
                            created_at: null,
                            updated_at: null
                        }
                    ],
                    comments: [{
                            comment_id: 1,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        },
                        {
                            comment_id: 2,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        },
                        {
                            comment_id: 3,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        }
                    ]
                },
                {
                    post_id: 32,
                    profileName: "TONTON LA FORCE LE BEAU GOSSE",
                    profile_picture: null,
                    details: "Lorem Ipsum has been the industry's standard dummy text ever\n" +
                        "                since the 1500s, when an unknown printer took a galley of type\n" +
                        "                and scrambled it to make a type specimen book. It has survived\n" +
                        "                not only five centuries, but also the leap into electronic\n" +
                        "                typesetting, remaining essentially unchanged.😛",
                    movies: [],
                    hyperlinks: [],
                    timeCountDown: "1h",
                    likes: [{
                            id: 1,
                            post_id: 30,
                            user_id: 4,
                            created_at: null,
                            updated_at: null
                        },
                        {
                            id: 2,
                            post_id: 30,
                            user_id: 3,
                            created_at: null,
                            updated_at: null
                        }
                    ],
                    comments: [{
                            comment_id: 1,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        },
                        {
                            comment_id: 2,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        },
                        {
                            comment_id: 3,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        }
                    ]
                },
                {
                    post_id: 33,
                    profileName: "TONTON LA FORCE LE BEAU GOSSE",
                    profile_picture: null,
                    details: "Lorem Ipsum has been the industry's standard dummy text ever\n" +
                        "                since the 1500s, when an unknown printer took a galley of type\n" +
                        "                and scrambled it to make a type specimen book. It has survived\n" +
                        "                not only five centuries, but also the leap into electronic\n" +
                        "                typesetting, remaining essentially unchanged.😛",
                    movies: [],
                    hyperlinks: [],
                    timeCountDown: "1h",
                    likes: [{
                            id: 1,
                            post_id: 30,
                            user_id: 4,
                            created_at: null,
                            updated_at: null
                        },
                        {
                            id: 2,
                            post_id: 30,
                            user_id: 3,
                            created_at: null,
                            updated_at: null
                        }
                    ],
                    comments: [{
                            comment_id: 1,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        },
                        {
                            comment_id: 2,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        },
                        {
                            comment_id: 3,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        }
                    ]
                },
                {
                    post_id: 34,
                    profileName: "TONTON LA FORCE LE BEAU GOSSE",
                    profile_picture: null,
                    details: "Lorem Ipsum has been the industry's standard dummy text ever\n" +
                        "                since the 1500s, when an unknown printer took a galley of type\n" +
                        "                and scrambled it to make a type specimen book. It has survived\n" +
                        "                not only five centuries, but also the leap into electronic\n" +
                        "                typesetting, remaining essentially unchanged.😛",
                    movies: [],
                    hyperlinks: [],
                    timeCountDown: "1h",
                    likes: [{
                            id: 1,
                            post_id: 30,
                            user_id: 4,
                            created_at: null,
                            updated_at: null
                        },
                        {
                            id: 2,
                            post_id: 30,
                            user_id: 3,
                            created_at: null,
                            updated_at: null
                        }
                    ],
                    comments: [{
                            comment_id: 1,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        },
                        {
                            comment_id: 2,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        },
                        {
                            comment_id: 3,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        }
                    ]
                },
                {
                    post_id: 35,
                    profileName: "TONTON LA FORCE LE BEAU GOSSE",
                    profile_picture: null,
                    details: "Lorem Ipsum has been the industry's standard dummy text ever\n" +
                        "                since the 1500s, when an unknown printer took a galley of type\n" +
                        "                and scrambled it to make a type specimen book. It has survived\n" +
                        "                not only five centuries, but also the leap into electronic\n" +
                        "                typesetting, remaining essentially unchanged.😛",
                    movies: [],
                    hyperlinks: [],
                    timeCountDown: "1h",
                    likes: [{
                            id: 1,
                            post_id: 30,
                            user_id: 4,
                            created_at: null,
                            updated_at: null
                        },
                        {
                            id: 2,
                            post_id: 30,
                            user_id: 3,
                            created_at: null,
                            updated_at: null
                        }
                    ],
                    comments: [{
                            comment_id: 1,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        },
                        {
                            comment_id: 2,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        },
                        {
                            comment_id: 3,
                            post_id: 30,
                            user_id: 4,
                            comment: "Lorem Ipsum has been the industry's   " +
                                "this is do goodfive centuries, but  the leap " +
                                "into electronic      this is do goodfive centuries, but  " +
                                "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                            profile_picture: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                            created_at: null,
                            updated_at: null,
                            likes: [{
                                    like_id: 1,
                                    post_id: 30,
                                    user_id: 4,
                                    created_at: null,
                                    updated_at: null
                                },
                                {
                                    like_id: 2,
                                    post_id: 30,
                                    user_id: 3,
                                    created_at: null,
                                    updated_at: null
                                }
                            ]
                        }
                    ]
                }
            ],
            business: {
                businessNumberFollowers: 10,
                businessNumberFollowing: 30,
                followers: [{
                        id: 1,
                        businessProfilePicture: [
                            "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                            "https://i.wifegeek.com/200426/f9459c52.jpg",
                            "https://i.wifegeek.com/200426/5fa51df3.jpg"
                        ],
                        businessName: "Super Car ltd",
                        businessCategory: "Car Marketing",
                        businessDetails: "super best car seller in the world adipisicing elit. lorem epsep",
                        businessLocation: "Douala cameroon",
                        businessNumberFollowers: 20
                    },
                    {
                        id: 2,
                        businessProfilePicture: [
                            "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                            "https://i.wifegeek.com/200426/f9459c52.jpg",
                            "https://i.wifegeek.com/200426/5fa51df3.jpg"
                        ],
                        businessName: "Super Car ltd",
                        businessCategory: "Car Marketing",
                        businessDetails: "super best car seller in the world adipisicing elit. lorem epsep",
                        businessLocation: "Douala cameroon",
                        businessNumberFollowers: 20
                    },
                    {
                        id: 3,
                        businessProfilePicture: [
                            "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                            "https://i.wifegeek.com/200426/f9459c52.jpg",
                            "https://i.wifegeek.com/200426/5fa51df3.jpg"
                        ],
                        businessName: "Super Car ltd",
                        businessCategory: "Car Marketing",
                        businessDetails: "super best car seller in the world adipisicing elit. lorem epsep",
                        businessLocation: "Douala cameroon",
                        businessNumberFollowers: 20
                    },
                    {
                        id: 4,
                        businessProfilePicture: [
                            "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                            "https://i.wifegeek.com/200426/f9459c52.jpg",
                            "https://i.wifegeek.com/200426/5fa51df3.jpg"
                        ],
                        businessName: "Super Car ltd",
                        businessCategory: "Car Marketing",
                        businessDetails: "super best car seller in the world adipisicing elit. lorem epsep",
                        businessLocation: "Douala cameroon",
                        businessNumberFollowers: 20
                    },
                    {
                        id: 5,
                        businessProfilePicture: [
                            "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                            "https://i.wifegeek.com/200426/f9459c52.jpg",
                            "https://i.wifegeek.com/200426/5fa51df3.jpg"
                        ],
                        businessName: "Super Car ltd",
                        businessCategory: "Car Marketing",
                        businessDetails: "super best car seller in the world adipisicing elit. lorem epsep",
                        businessLocation: "Douala cameroon",
                        businessNumberFollowers: 20
                    },
                    {
                        id: 6,
                        businessProfilePicture: [
                            "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                            "https://i.wifegeek.com/200426/f9459c52.jpg",
                            "https://i.wifegeek.com/200426/5fa51df3.jpg"
                        ],
                        businessName: "Super Car ltd",
                        businessCategory: "Car Marketing",
                        businessDetails: "super best car seller in the world adipisicing elit. lorem epsep",
                        businessLocation: "Douala cameroon",
                        businessNumberFollowers: 20
                    }
                ],
                followings: [{
                    id: 1,
                    businessProfilePicture: [
                        "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                        "https://i.wifegeek.com/200426/f9459c52.jpg",
                        "https://i.wifegeek.com/200426/5fa51df3.jpg"
                    ],
                    businessName: "Super Car ltd",
                    businessCategory: "Car Marketing",
                    businessDetails: "super best car seller in the world adipisicing elit. lorem epsep",
                    businessLocation: "Douala cameroon",
                    businessNumberFollowers: 20
                }]
            },
            communauty: {
                communautyNumberFollowers: 10,
                communautyNumberFollowings: 30,
                followers: [{
                        id: 1,
                        communautyProfilePicture: "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                        communautyName: "Super Car ltd",
                        communautyNumberFollowers: 20
                    },
                    {
                        id: 2,
                        communautyProfilePicture: "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                        communautyName: "Super Car ltd",
                        communautyNumberFollowers: 20
                    },
                    {
                        id: 3,
                        communautyProfilePicture: "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                        communautyName: "Super Car ltd",
                        communautyNumberFollowers: 20
                    },
                    {
                        id: 4,
                        communautyProfilePicture: "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                        communautyName: "Super Car ltd",
                        communautyNumberFollowers: 20
                    },
                    {
                        id: 5,
                        communautyProfilePicture: "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                        communautyName: "Super Car ltd",
                        communautyNumberFollowers: 20
                    },
                    {
                        id: 6,
                        communautyProfilePicture: "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                        communautyName: "Super Car ltd",
                        communautyNumberFollowers: 20
                    }
                ],
                followings: [{
                    id: 1,
                    communautyProfilePicture: "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                    communautyName: "Super Car ltd",
                    communautyNumberFollowings: 20
                }]
            },
            createPost: {
                profile_picture: null,
                coverImage: null,
                profile_picture_localstorage: null,
                profileNamePost: "TONTON LA FORCE",
                postBusinessUpdate: "",
                movies: [],
                hyperlinks: []
            },
            userProfileOwner: {
                workedAt: "Current or Last Organization",
                studiedAt: "Last Education",
                homeTown: "Dummy",
                currentCity: "Dummy",
                numbersOfFollowers: 256
            }
        }],
        users: [{
                id: "S001",
                fullname: "Prime",
                username: "Clet",
                email: "primeclet89@gmail.com",
                password: "1234568"
            },
            {
                id: "S002",
                fullname: "John",
                username: "Doe",
                email: "jondoe@gmail.com",
                password: "azertuiop"
            },
            {
                id: "S003",
                fullname: "test",
                username: "1",
                email: "test1@gmail.com",
                password: "qsdfrtgrd"
            },
            {
                id: "S004",
                fullname: "holu",
                username: "lol",
                email: "lol@gmail.com",
                password: "holulol"
            },
            {
                id: "S005",
                fullname: "gregre",
                username: "io",
                email: "gregre@gmail.com",
                password: "987654321"
            }
        ],
        services: [{
                id: "S2021-1",
                Name: "Soins Esthétiques",
                Image: "Clet",
                Localisation: "Douala, PK14",
                Resume: "La coiffure est métier où l'on est le plus souvent debout. ... Le coiffeur / la coiffeuse travaille comme salarié dans un salon de coiffure indépendant ou franchisé ou à domicile. C'est également un commerçant qui vend des produits capillaires et des accessoires.",
                user_id: "S001"
            },
            {
                id: "S2021-2",
                Name: "Car Driving",
                Image: "Clet",
                Localisation: "Bonanjo, Bastos",
                Resume: "C'est également un commerçant qui vend des produits capillaires et des accessoires.",
                user_id: "S001"
            },
            {
                id: "S2021-3",
                Name: "Gardiennage",
                Image: "Clet",
                Localisation: "Biyem Assi, TKC",
                Resume: "comprend toutes sortes de formes de surveillance et de protection des biens et des personnes.",
                user_id: "S003"
            },
            {
                id: "S2021-4",
                Name: "BTP",
                Image: "Clet",
                Localisation: "AKWA, DJoungolo",
                Resume: "Batiment et travaux Publics......",
                user_id: "S004"
            }
        ],
        service: [{
            id: "",
            Name: "",
            Image: "Clet",
            Localisation: "",
            Resume: ""
        }]
    };
};

// initial state
const state = getDefaultState();

const actions = {
    resetCartState({ commit }) {
        commit("resetState");
    },
    increment(context) {
        context.commit("increment");
    },
    log(context, payload) {
        context.commit("login", payload);
    },
    sign(context, payload) {
        context.commit("signin", payload);
    },
    getServiceV(context, payload) {
        context.commit("service", payload);
    },
    makeChange(context, payload) {
        context.commit("change", payload);
    },
    storeService(context, payload) {
        context.commit("keepService", payload);
    },
    recoverPassword2(context, mydata) {
        console.log("heyyyy");
        context.commit("recoverData", mydata);
    },
    /**
     * Make A Request To Server To Store New Post Intro User
     * @param context
     * @param payload
     */
    editPostUserIntro(context, payload) {
        //console.log(payload);
        context.commit("editPostUserIntro", {
            data: {
                workedAt: payload.workedAt,
                studiedAt: payload.studiedAt,
                homeTown: payload.homeTown,
                city: payload.city
            }
        });
        const url =
            "https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/users.json";
        fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    workedAt: payload.workedAt,
                    studiedAt: payload.studiedAt,
                    homeTown: payload.homeTown,
                    city: payload.city
                })
            })
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response);
            });
    },
    /**
     * Update the profile
     * @param context
     * @param payload
     */
    changeProfilePicture(context, payload) {
        //console.log("Profile Picture");
        //console.log(payload);

        const url = "http://localhost:3000/profile_picture";
        const file = payload.profilePicture;
        let profile = null;
        if (file.files) {
            const reader = new FileReader();
            reader.onload = e => {
                profile = e.target.result;
                context.commit("changeProfilePicture", {
                    profilePicture: payload.profilePicture,
                    profilePictureLocalStorage: profile
                });
                fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify({
                            target: payload.profilePicture,
                            media: profile
                        })
                    })
                    .then(response => {
                        return response.json();
                    })
                    .then(response => {
                        console.log(response);
                    });
            };
            reader.readAsDataURL(file.files[0]);
        }
        // const url = "https://0b586e0a5a1f.ngrok.io/api/v1/upload";
        // const file = payload.profilePicture;
        // const fileImage = file.files[0];
        // const fd = new FormData();
        // fd.append("file", fileImage, fileImage.name);
        // //console.log(file.files[0]);
        // let profile = null;
        // if (file.files) {
        //   const reader = new FileReader();
        //   reader.onload = e => {
        //     //localStorage.setItem("profile_image", e.target.result);
        //     profile = e.target.result;
        //     //console.log("test");
        //     //console.log(profile);
        //     context.commit("changeProfilePicture", {
        //       profilePicture: payload.profilePicture,
        //       profilePictureLocalStorage: profile
        //     });
        //     const config = {
        //       headers: {
        //         "content-type": "multipart/form-data"
        //       }
        //     };
        //     axios
        //       .post(url, fd, config)
        //       .then(response => console.log(response))
        //       .catch(error => console.log(error));
        //   };
        //   reader.readAsDataURL(file.files[0]);
        //}
    },
    changeProfileImageService(context, payload) {
        //const file = payload.media;
        //console.log(payload.media);
        context.commit("changeProfilePicture", {
            profilePicture: payload.target,
            profilePictureLocalStorage: payload.media
        });
    },
    changeCoverImageService(context, payload) {
        //const file = payload.media;
        //console.log(payload.media);
        context.commit("changeCoverImage", {
            coverImage: payload.target,
            coverImageLocalStorage: payload.media
        });
    },
    /**
     *
     * @param context
     * @param payload
     */
    changeCoverImage(context, payload) {
        //console.log("Profile Picture");
        //console.log(payload);
        //const url = "https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/users.json";
        const url = "http://localhost:3000/cover_image";
        const file = payload.cover_image;
        let cover = null;
        if (file.files) {
            const reader = new FileReader();
            reader.onload = e => {
                //localStorage.setItem("profile_image", e.target.result);
                cover = e.target.result;
                //console.log("test");
                //console.log(profile);
                context.commit("changeCoverImage", {
                    coverImage: payload.cover_image,
                    coverImageLocalStorage: cover
                });
                //console.log("test");
                //console.log(state.userData[0].profilePicture);
                fetch(url, {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            target: file,
                            media: cover
                        })
                    })
                    .then(response => {
                        return response.json();
                    })
                    .then(response => {
                        console.log("change Cover Image Online ");
                        console.log(response);
                    });
            };
            reader.readAsDataURL(file.files[0]);
        }
    },
    /**
     *
     * @param context
     * @param payload
     */
    createPost(context, payload) {
        console.log("Create Post ++++++");
        //console.log(payoad);
        // const url = "https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/users.json";
        //const url = " http://localhost:3000/post";
        //console.log("test");
        fetch(state.url_base + state.url_create_post, {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${state.token}`
                },
                body: {
                    media: payload.movies
                }
            })
            .then(response => {
                return response.json();
            })
            .then(response => {
                if (!response) {
                    throw "Error To Create Post";
                }
                console.log("Create Post Online +++++");
                console.log(response);
            })
            .catch(error => {
                if (error instanceof TypeError) {
                    console.log("create Post erreur Lié au navigateur");
                    console.log(error.message);
                } else {
                    console.log("create post erreur lié au serveur");
                }
            });
    },
    /**
     *
     * @param context
     * @param payload
     */
    retrieveBusinessUserPost(context, payload) {
        const url =
            "https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/business.json";
        console.log(payload);
        //context.commit("retrieveBusinessUserPost", null);
        fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json"
                },
                body: JSON.stringify({
                    business: state.userData[0].business
                })
            })
            .then(response => {
                return response.json();
            })
            .then(response => {
                if (!response.ok) {
                    console.log(
                        "Erreur survenue au niveau du serveur et non au niveau du navigateur"
                    );
                    console.log(response);
                    throw response.error;
                }
                console.log("Test de recuperation des business reussis");
                console.log(response);
                context.commit("retrieveBusinessUserPost", null);
            })
            .catch(error => {
                if (error instanceof TypeError) {
                    console.log("Erreur liée au navigateur et non au serveur backend");
                    console.log(error.message);
                } else {
                    console.log(error);
                }
            });
    },
    /**
     *
     * @param context
     * @param payload
     */
    retrieveCommunityUserPost(context, payload) {
        const url =
            "https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/community.json";
        console.log(payload);
        //context.commit("retrieveBusinessUserPost", null);
        fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json"
                },
                body: JSON.stringify({
                    community: state.userData[0].community
                })
            })
            .then(response => {
                return response.json();
            })
            .then(response => {
                if (!response.ok) {
                    console.log(
                        "Erreur survenue au niveau du serveur et non au niveau du navigateur"
                    );
                    console.log(response);
                    throw response.error;
                }
                console.log("Test de recuperation des community reussis");
                console.log(response);
                context.commit("retrieveBusinessUserPost", null);
            })
            .catch(error => {
                if (error instanceof TypeError) {
                    console.log("Erreur liée au navigateur et non au serveur backend");
                    console.log(error.message);
                } else {
                    console.log(error);
                }
            });
    },
    /**
     *
     * @param context
     * @param payload
     */
    retrievePostsUser(context, payload) {
        const url = "https://a8cbdecbc0d4.ngrok.io/api/v1/post/30";
        fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                    Authorization: `Bearer ${state.token}`
                }
            })
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log("recuperation de la liste des posts de l User");
                console.log(context);
                console.log(payload);
                console.log(response);
                if (!response.ok) {
                    throw response.error;
                }
                // context.commit("retrievePostsUser", {
                //   posts: response.data.posts
                // });
            })
            .catch(error => {
                if (error instanceof TypeError) {
                    console.log(error.message);
                } else {
                    console.log(error);
                }
            });
    },
    async loadProfilePicture(context, payload) {
        let response_ = null;
        await fetch("http://localhost:3000/profile_picture", {
                method: "GET"
            })
            .then(response => {
                return response.json();
            })
            .then(response => {
                //console.log("test1");
                //console.log(response);
                if (!response) {
                    throw "Cannot Found Media";
                }
                console.log(context);
                console.log(payload);
                //console.log("test1");
                response_ = response;
            })
            .catch(error => {
                //console.log("echec");
                if (error instanceof TypeError) {
                    console.log(error.message);
                } else {
                    console.log(error);
                }
            });
        await context.dispatch("changeProfileImageService", {
            target: response_.target,
            media: response_.media
        });
        return response_;
    },
    async loadCoverImage(context, payload) {
        let response_ = null;
        await fetch("http://localhost:3000/cover_image", {
                method: "GET"
            })
            .then(response => {
                return response.json();
            })
            .then(response => {
                //console.log("test1");
                //console.log(response);
                if (!response) {
                    throw "Cannot Found Media";
                }
                console.log(context);
                console.log(payload);
                //console.log("test3");
                response_ = response;
            })
            .catch(error => {
                //console.log("echec");
                if (error instanceof TypeError) {
                    console.log(error.message);
                } else {
                    console.log(error);
                }
            });
        await context.dispatch("changeCoverImageService", {
            target: response_.target,
            media: response_.media
        });
        return response_;
    },
    async loadPostsList(context, payload) {
        let response_ = null;
        await fetch("http://localhost:3001/data", {
                method: "GET"
            })
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log("test1");
                console.log(response);
                if (!response) {
                    throw "Cannot Found Media";
                }
                console.log(context);
                console.log(payload);
                console.log("test3");
                response_ = response;
                context.commit("retrievePostsListUser", {
                    posts: response.posts
                });
            })
            .catch(error => {
                //console.log("echec");
                if (error instanceof TypeError) {
                    console.log(error.message);
                } else {
                    console.log(error);
                }
            });
        return response_;
    }
};

const mutations = {
    resetState(state) {
        // Merge rather than replace so we don't lose observers
        // https://github.com/vuejs/vuex/issues/1118
        Object.assign(state, getDefaultState());
    },
    recoverData: (state, data) => (state.recoverData = data),
    increment(state, payload) {
        state.count += payload.amount;
    },
    login(state, payload) {
        for (let i = 0; i < state.users.length; i++) {
            if (
                state.users[i].username === payload.username &&
                state.users[i].password === payload.password
            ) {
                state.login = true;
                state.userData[0].id = state.users[i].id;
                state.userData[0].fullname = state.users[i].fullname;
                state.userData[0].username = state.users[i].username;
                state.userData[0].email = state.users[i].email;
                state.userData[0].password = state.users[i].password;
            }
        }
    },
    service(state, payload) {
        for (let i = 0; i < state.services.length; i++) {
            if (state.services[i].id === payload) {
                state.service[0].id = state.services[i].id;
                state.service[0].Name = state.services[i].Name;
                state.service[0].Localisation = state.services[i].Localisation;
                state.service[0].Resume = state.services[i].Resume;
                if (state.userData[0].id === state.services[i].user_id) {
                    state.isToi = true;
                } else {
                    state.isToi = false;
                }
            }
        }
    },
    change(state, payload) {
        for (let i = 0; i < state.services.length; i++) {
            if (state.services[i].id === payload.id) {
                state.services[i].id = payload.id;
                state.services[i].Name = payload.name;
                state.services[i].Localisation = payload.location;
                state.services[i].Resume = payload.resume;
            }
        }
        console.log("reussi");
    },
    signin(state, payload) {
        state.users.push({
            id: payload.id,
            fullname: payload.fullname,
            username: payload.username,
            email: payload.email,
            password: payload.password
        });
        console.log("reussi");
    },
    keepService(state, payload) {
        state.services.push({
            id: payload.id,
            Name: payload.name,
            Image: "Clet",
            Localisation: payload.location,
            Resume: payload.resume,
            user_id: payload.user_id
        });
        console.log("reussi");
    },
    editPostUserIntro(state, payload) {
        state.userData[0].userProfileOwner = payload.data;
    },
    changeProfilePicture(state, payload) {
        //console.log("Profile Picture Updated");
        //console.log(payload);
        //console.log(state.userData);
        state.userData[0].createPost.profile_picture = payload.profilePicture;
        state.userData[0].createPost.profile_picture_localstorage =
            payload.profilePictureLocalStorage;
        state.userData[0].profilePicture = payload.profilePicture;
        //state.userData[0].coverImage = payload.profilePictureLocalStorage;
        //console.log(state.userData);
    },
    changeCoverImage(state, payload) {
        //console.log("Profile Picture Updated");
        //console.log(payload);
        //console.log(state.userData);
        state.userData[0].createPost.coverImage = payload.coverImage;
        state.userData[0].coverImage = payload.coverImageLocalStorage;
        //console.log(state.userData);
    },
    /**
     *
     * @param state
     * @param payload
     */
    createPost(state, payload) {
        state.userData[0].posts = payload.posts;
    },
    /**
     *
     * @param state
     * @param payload
     */
    retrieveBusinessUserPost(state, payload) {
        console.log("Retrieve business en cours");
        console.log(state);
        console.log(payload);
        //state.userData[0].business = payload.business;
    },
    /**
     *
     * @param state
     * @param payload
     */
    retrievePostsListUser(state, payload) {
        state.userData[0].posts = payload.posts;
    }
}