import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";

import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = "https://e4f5730e80f9.ngrok.io/api/v1";

const getDefaultState = () => {
  return {
    token: "8|Yx3DU4s08aFTYOCa3T2XJKZkjJV4leSi9b20oo5D",

    userData: [
      {
        id: "",
        fullname: "",
        username: "Thorfinn Kharlsefni",
        email: "",
        password: "",
        profileName: "Thorfinn",
        profilePicture: "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
        coverImage: "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
        numbersOfFollowers: 30,
        posts: [
          {
            post_id: 30,
            profileName: "THorfinn",
            profile_picture: "https://i.wifegeek.com/200426/2d110780.jpg",
            details:
              "Lorem Ipsum has been the industry's standard dummy text ever\n" +
              "                since the 1500s, when an unknown printer took a galley of type\n" +
              "                and scrambled it to make a type specimen book. It has survived\n" +
              "                not only five centuries, but also the leap into electronic\n" +
              "                typesetting, remaining essentially unchanged.😛",
            movies: [],
            hyperlinks: [],
            timeCountDown: "1h",
            likes: [
              {
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
            ],
            comments: [
              {
                comment_id: 1,
                post_id: 30,
                user_id: 4,
                comment:
                  "Lorem Ipsum has been the industry's   " +
                  "this is do goodfive centuries, but  the leap " +
                  "into electronic      this is do goodfive centuries, but  " +
                  "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                profile_picture:
                  "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                created_at: null,
                updated_at: null,
                likes: [
                  {
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
                  },
                  {
                    like_id: 3,
                    post_id: 30,
                    user_id: 2,
                    created_at: null,
                    updated_at: null
                  },
                  {
                    like_id: 4,
                    post_id: 30,
                    user_id: 2,
                    created_at: null,
                    updated_at: null
                  }
                ]
              },
              {
                comment_id: 2,
                post_id: 30,
                user_id: 4,
                comment:
                  "Lorem Ipsum has been the industry's   " +
                  "this is do goodfive centuries, but  the leap " +
                  "into electronic      this is do goodfive centuries, but  " +
                  "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                profile_picture:
                  "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                created_at: null,
                updated_at: null,
                likes: [
                  {
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
                comment:
                  "Lorem Ipsum has been the industry's   " +
                  "this is do goodfive centuries, but  the leap " +
                  "into electronic      this is do goodfive centuries, but  " +
                  "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                profile_picture:
                  "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                created_at: null,
                updated_at: null,
                likes: [
                  {
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
            profileName: "Thorfinn 2",
            profile_picture: localStorage.getItem("profile_image"),
            details:
              "Lorem Ipsum has been the industry's standard dummy text ever\n" +
              "                since the 1500s, when an unknown printer took a galley of type\n" +
              "                and scrambled it to make a type specimen book. It has survived\n" +
              "                not only five centuries, but also the leap into electronic\n" +
              "                typesetting, remaining essentially unchanged.😛",
            movies: [],
            hyperlinks: [],
            timeCountDown: "1h",
            likes: [
              {
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
              },
              {
                like_id: 3,
                post_id: 30,
                user_id: 5,
                created_at: null,
                updated_at: null
              }
            ],
            comments: [
              {
                comment_id: 1,
                post_id: 30,
                user_id: 4,
                comment:
                  "Lorem Ipsum has been the industry's   " +
                  "this is do goodfive centuries, but  the leap " +
                  "into electronic      this is do goodfive centuries, but  " +
                  "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                profile_picture:
                  "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                created_at: null,
                updated_at: null,
                likes: [
                  {
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
            profileName: "Thorfinn 3",
            profile_picture: localStorage.getItem("profile_image"),
            details:
              "Lorem Ipsum has been the industry's standard dummy text ever\n" +
              "                since the 1500s, when an unknown printer took a galley of type\n" +
              "                and scrambled it to make a type specimen book. It has survived\n" +
              "                not only five centuries, but also the leap into electronic\n" +
              "                typesetting, remaining essentially unchanged.😛",
            movies: [],
            hyperlinks: [],
            timeCountDown: "1h",
            likes: [
              {
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
            ],
            comments: [
              {
                comment_id: 1,
                post_id: 30,
                user_id: 4,
                comment:
                  "Lorem Ipsum has been the industry's   " +
                  "this is do goodfive centuries, but  the leap " +
                  "into electronic      this is do goodfive centuries, but  " +
                  "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                profile_picture:
                  "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                created_at: null,
                updated_at: null,
                likes: [
                  {
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
            profileName: "Thorfinn 4",
            profile_picture: localStorage.getItem("profile_image"),
            details:
              "Lorem Ipsum has been the industry's standard dummy text ever\n" +
              "                since the 1500s, when an unknown printer took a galley of type\n" +
              "                and scrambled it to make a type specimen book. It has survived\n" +
              "                not only five centuries, but also the leap into electronic\n" +
              "                typesetting, remaining essentially unchanged.😛",
            movies: [],
            hyperlinks: [],
            timeCountDown: "1h",
            likes: [
              {
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
            ],
            comments: [
              {
                comment_id: 1,
                post_id: 30,
                user_id: 4,
                comment:
                  "Lorem Ipsum has been the industry's   " +
                  "this is do goodfive centuries, but  the leap " +
                  "into electronic      this is do goodfive centuries, but  " +
                  "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                profile_picture:
                  "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                created_at: null,
                updated_at: null,
                likes: [
                  {
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
            profileName: "Thorfinn 5",
            profile_picture: localStorage.getItem("profile_image"),
            details:
              "Lorem Ipsum has been the industry's standard dummy text ever\n" +
              "                since the 1500s, when an unknown printer took a galley of type\n" +
              "                and scrambled it to make a type specimen book. It has survived\n" +
              "                not only five centuries, but also the leap into electronic\n" +
              "                typesetting, remaining essentially unchanged.😛",
            movies: [],
            hyperlinks: [],
            timeCountDown: "1h",
            likes: [
              {
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
            ],
            comments: [
              {
                comment_id: 1,
                post_id: 30,
                user_id: 4,
                comment:
                  "Lorem Ipsum has been the industry's   " +
                  "this is do goodfive centuries, but  the leap " +
                  "into electronic      this is do goodfive centuries, but  " +
                  "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                profile_picture:
                  "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                created_at: null,
                updated_at: null,
                likes: [
                  {
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
            profileName: "Thorfinn 6",
            profile_picture: localStorage.getItem("profile_image"),
            details:
              "Lorem Ipsum has been the industry's standard dummy text ever\n" +
              "                since the 1500s, when an unknown printer took a galley of type\n" +
              "                and scrambled it to make a type specimen book. It has survived\n" +
              "                not only five centuries, but also the leap into electronic\n" +
              "                typesetting, remaining essentially unchanged.😛",
            movies: [],
            hyperlinks: [],
            timeCountDown: "1h",
            likes: [
              {
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
            ],
            comments: [
              {
                comment_id: 1,
                post_id: 30,
                user_id: 4,
                comment:
                  "Lorem Ipsum has been the industry's   " +
                  "this is do goodfive centuries, but  the leap " +
                  "into electronic      this is do goodfive centuries, but  " +
                  "the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
                profile_picture:
                  "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                created_at: null,
                updated_at: null,
                likes: [
                  {
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
          followers: [
            {
              id: 1,
              businessProfilePicture: [
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                "https://i.wifegeek.com/200426/f9459c52.jpg",
                "https://i.wifegeek.com/200426/5fa51df3.jpg"
              ],
              businessName: "Super Car ltd",
              businessCategory: "Car Marketing",
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
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
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
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
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
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
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
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
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
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
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
              businessLocation: "Douala cameroon",
              businessNumberFollowers: 20
            }
          ],
          followings: [
            {
              id: 1,
              businessProfilePicture: [
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                "https://i.wifegeek.com/200426/f9459c52.jpg",
                "https://i.wifegeek.com/200426/5fa51df3.jpg"
              ],
              businessName: "Super Car ltd",
              businessCategory: "Car Marketing",
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
              businessLocation: "Douala cameroon",
              businessNumberFollowers: 20
            }
          ]
        },
        people: {
          communautyNumberFollowers: 10,
          communautyNumberFollowings: 30,
          followers: [
            {
              id: 1,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowers: 20
            },
            {
              id: 2,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowers: 20
            },
            {
              id: 3,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowers: 20
            },
            {
              id: 4,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowers: 20
            },
            {
              id: 5,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowers: 20
            },
            {
              id: 6,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowers: 20
            }
          ],
          followings: [
            {
              id: 1,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowings: 20
            }
          ]
        }
      }
    ],

    businessData: [
      {
        id: "",
        fullname: "",
        username: "Thorfinn Kharlsefni business",
        email: "",
        password: "",
        businessName: "Thorfinn business",
        businessPicture: "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
        coverImage: "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
        numbersOfFollowers: 30,
        business: {
          businessNumberFollowers: 10,
          businessNumberFollowing: 30,
          followers: [
            {
              id: 1,
              businessProfilePicture: [
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                "https://i.wifegeek.com/200426/f9459c52.jpg",
                "https://i.wifegeek.com/200426/5fa51df3.jpg"
              ],
              businessName: "Super Car ltd",
              businessCategory: "Car Marketing",
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
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
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
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
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
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
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
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
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
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
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
              businessLocation: "Douala cameroon",
              businessNumberFollowers: 20
            }
          ],
          followings: [
            {
              id: 1,
              businessProfilePicture: [
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
                "https://i.wifegeek.com/200426/f9459c52.jpg",
                "https://i.wifegeek.com/200426/5fa51df3.jpg"
              ],
              businessName: "Super Car ltd",
              businessCategory: "Car Marketing",
              businessDetails:
                "super best car seller in the world adipisicing elit. lorem epsep",
              businessLocation: "Douala cameroon",
              businessNumberFollowers: 20
            }
          ]
        },
        people: {
          communautyNumberFollowers: 10,
          communautyNumberFollowings: 30,
          followers: [
            {
              id: 1,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowers: 20
            },
            {
              id: 2,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowers: 20
            },
            {
              id: 3,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowers: 20
            },
            {
              id: 4,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowers: 20
            },
            {
              id: 5,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowers: 20
            },
            {
              id: 6,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowers: 20
            }
          ],
          followings: [
            {
              id: 1,
              communautyProfilePicture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              communautyName: "Super Car ltd",
              communautyNumberFollowings: 20
            }
          ]
        }
      }
    ],

    boptions: [
      { value: "owner", text: "Owner's Name" },
      { value: "a", text: "Business Name 1" },
      { value: "b", text: "Business Name 2" },
      { value: "c", text: "Business Name 3" }
    ],

    bdetailss: [
      {
        business: [
          {
            name: "peter pan",
            category: "poup poup",
            about_business: "BHBfiuwefufewi",
            location_description: "Yaounde",
            website: "https://BHB",
            logo_path: ""
          }
        ],
        followers: 200
      }
    ],

    pdetails: "",

    bdetails: [],

    //details: []

    details: [
      {
        value: "owner",
        id: "",
        fullname: "",
        username: "Thorfinn Kharlsefni",
        email: "",
        password: "",
        profileName: "Thorfinn",
        profilePicture: "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
        coverImage: "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
        numbersOfFollowers: 30,
        business: [
          {
            id: 1,
            fullname: "",
            username: "Thorfinn Kharlsefni",
            email: "",
            password: "",
            profileName: "Thorfinn",
            profilePicture: "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
            coverImage: "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
            numbersOfFollowers: 30
          },
          {
            id: 2,
            fullname: "",
            username: "Thorfinn",
            email: "",
            password: "",
            profileName: "Thorfinn",
            profilePicture: "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
            coverImage: "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
            numbersOfFollowers: 30
          }
        ]
      }
    ],

    business: []
  };
};

// initial state
const state = getDefaultState();

const actions = {
  getdetails({ commit }) {
    return axios
      .get("", {
        headers: { Authorization: `Bearer ${state.token}` }
      })
      .then(function({ data }) {
        commit("setdetails", data.data);
        console.log(data);
      });
  }
};

const mutations = {
  setdetails(state, details) {
    state.details = details;
  }
};

const getters = {
  getdetails(state) {
    return state.details;
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
