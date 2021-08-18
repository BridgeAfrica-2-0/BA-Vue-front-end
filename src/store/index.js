import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
//import axios from "axios";
//import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
// axios.defaults.baseURL = "";

const getDefaultState = () => {
  return {
    url_base: "https://ce2d17022ed8.ngrok.io",
    url_load_profile_picture_changed: "/api/v1/download?file_name=",
    url_load_profile_picture:
      "/api/v1/download?file_name=public/media/photos/z7aooJV1XnDVTpRSfPGOUj7sjm0trGVJCiNFS7Ef.jpg",
    url_change_profile_picture: "/api/v1/post",
    change_image_url: "/api/v1/download?file_name=",
    url_create_post: "/api/v1/post",
    url_list_post: "/api/v1/post",
    url_user_infos: "/api/v1/userIntro",
    url_update_user_infos: "/api/v1/userIntro?",
    url_load_user_biography: "/api/v1/userIntro/biography",
    url_update_biography: "/api/v1/userIntro/biography?",
    url_update_birthDate: "/api/v1/userIntro/dob?",
    url_update_gender: "api/v1/userIntro/gender?",
    url_post_mobilesPhones: "/api/v1/userIntro/addPhone",
    url_update_current_city: "/api/v1/userIntro/addCurrentCity?",
    url_add_working: "/api/v1/userIntro/addWorking",
    url_update_working: "/api/v1/userIntro/updateWorking",
    url_add_school: "api/v1/userIntro/addSchool",
    url_add_profession: "/api/v1/userIntro/updateWorki",
    url_load_basicInfos: "",
    recoverData: "",
    login: false,
    isToi: false,
    token: "1|le8p995vGFTX1oo8PxHyam4pIOpkdxLQKHUw2QkP",
    count: "",
    todos: [],
    dashboard: [
      {
        id: 1,
        type: "Business Name 1",
        directions: null,
        business: {
          name: "Business Name 1",
          plan_type: false,
          category: "Profesional",
          messages: 30,
          notifications: 30,
          website: null
        },
        insights: {
          posts: 33000,
          visit: 1400,
          share: 870
        },
        community: {
          people: {
            followers: [],
            followings: []
          },
          business: {
            followers: [],
            followings: []
          }
        },
        posts: []
      },
      {
        id: 2,
        type: "Business Name 1",
        directions: null,
        business: {
          name: "Business Name 1",
          plan_type: false,
          category: "Profesional",
          messages: 30,
          notifications: 30,
          website: null
        },
        insights: {
          posts: 33000,
          visit: 1400,
          share: 870
        },
        community: {
          people: {
            followers: [],
            followings: []
          },
          business: {
            followers: [],
            followings: []
          }
        },
        posts: []
      },
      {
        id: 3,
        type: "Business Name 1",
        directions: null,
        business: {
          name: "Business Name 1",
          plan_type: false,
          category: "Profesional",
          messages: 30,
          notifications: 30,
          website: null
        },
        insights: {
          posts: 33000,
          visit: 1400,
          share: 870
        },
        community: {
          people: {
            followers: [],
            followings: []
          },
          business: {
            followers: [],
            followings: []
          }
        },
        posts: []
      },
      {
        id: 4,
        type: "Business Name 1",
        directions: null,
        business: {
          name: "Business Name 1",
          plan_type: false,
          category: "Profesional",
          messages: 30,
          notifications: 30,
          website: null
        },
        insights: {
          posts: 33000,
          visit: 1400,
          share: 870
        },
        community: {
          people: {
            followers: [],
            followings: []
          },
          business: {
            followers: [],
            followings: []
          }
        },
        posts: []
      },
      {
        id: 5,
        type: "Business Name 1",
        directions: null,
        business: {
          name: "Business Name 1",
          plan_type: false,
          category: "Profesional",
          messages: 30,
          notifications: 30,
          website: null
        },
        insights: {
          posts: 33000,
          visit: 1400,
          share: 870
        },
        community: {
          people: {
            followers: [],
            followings: []
          },
          business: {
            followers: [],
            followings: []
          }
        },
        posts: []
      }
    ],
    data: {
      owner: {},
      business: [
        {
          id: 1,
          type: "Business Name 1",
          directions: null,
          business: {
            name: "Business Name 1",
            plan_type: false,
            category: "Profesional",
            messages: 30,
            notifications: 30,
            website: null
          },
          insights: {
            posts: 33000,
            visit: 1400,
            share: 870
          },
          community: {
            people: {
              followers: [],
              followings: []
            },
            business: {
              followers: [],
              followings: []
            }
          },
          posts: []
        },
        {
          id: 2,
          type: "Business Name 1",
          directions: null,
          business: {
            name: "Business Name 1",
            plan_type: false,
            category: "Profesional",
            messages: 30,
            notifications: 30,
            website: null
          },
          insights: {
            posts: 33000,
            visit: 1400,
            share: 870
          },
          community: {
            people: {
              followers: [],
              followings: []
            },
            business: {
              followers: [],
              followings: []
            }
          },
          posts: []
        },
        {
          id: 3,
          type: "Business Name 1",
          directions: null,
          business: {
            name: "Business Name 1",
            plan_type: false,
            category: "Profesional",
            messages: 30,
            notifications: 30,
            website: null
          },
          insights: {
            posts: 33000,
            visit: 1400,
            share: 870
          },
          community: {
            people: {
              followers: [],
              followings: []
            },
            business: {
              followers: [],
              followings: []
            }
          },
          posts: []
        },
        {
          id: 4,
          type: "Business Name 1",
          directions: null,
          business: {
            name: "Business Name 1",
            plan_type: false,
            category: "Profesional",
            messages: 30,
            notifications: 30,
            website: null
          },
          insights: {
            posts: 33000,
            visit: 1400,
            share: 870
          },
          community: {
            people: {
              followers: [],
              followings: []
            },
            business: {
              followers: [],
              followings: []
            }
          },
          posts: []
        }
      ]
    },
    userData: [
      {
        id: "",
        fullname: "",
        username: "TONTON LA FORCE LE BEAU GOSSE",
        email: "",
        password: "",
        profileName: "TONTON LA FORCE LE BEAU GOSSE",
        profilePicture: null,
        target: null,
        coverImage: null,
        numbersOfFollowers: 30,
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
            timeCountDown: null,
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
        ],
        likes: [
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
            timeCountDown: null,
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
        ],
        posts: [
          {
            post_id: 30,
            profileName: "TONTON LA FORCE LE BEAU GOSSE",
            profile_picture: null,
            content: {
              details:
                "Lorem Ipsum has been the industry's standard dummy text ever\n" +
                "                since the 1500s, when an unknown printer took a galley of type\n" +
                "                and scrambled it to make a type specimen book. It has survived\n" +
                "                not only five centuries, but also the leap into electronic\n" +
                "                typesetting, remaining essentially unchanged.😛",
              movies: [],
              hyperlinks: []
            },
            timeCountDown: "1h",
            likes: [
              {
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
                timeCountDown: null,
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
            profileName: "TONTON LA FORCE LE BEAU GOSSE",
            profile_picture: null,
            content: {
              details:
                "Lorem Ipsum has been the industry's standard dummy text ever\n" +
                "                since the 1500s, when an unknown printer took a galley of type\n" +
                "                and scrambled it to make a type specimen book. It has survived\n" +
                "                not only five centuries, but also the leap into electronic\n" +
                "                typesetting, remaining essentially unchanged.😛",
              movies: [],
              hyperlinks: []
            },
            timeCountDown: "1h",
            likes: [
              {
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
            post_id: 32,
            profileName: "TONTON LA FORCE LE BEAU GOSSE",
            profile_picture: null,
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
            post_id: 33,
            profileName: "TONTON LA FORCE LE BEAU GOSSE",
            profile_picture: null,
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
            post_id: 34,
            profileName: "TONTON LA FORCE LE BEAU GOSSE",
            profile_picture: null,
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
            post_id: 35,
            profileName: "TONTON LA FORCE LE BEAU GOSSE",
            profile_picture: null,
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
        communauty: {
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
          workedAt: "Last Organization",
          studiedAt: "Last Education",
          homeTown: "Dummy",
          currentCity: "Dummy To You",
          numbersOfFollowers: 256
        },
        profile_about: {
          biography: {
            info_access: null,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, aliquid cupiditate fugit similique laboriosam, expedita, voluptatibus dolorem atlibero ipsam illo molestiae. Voluptates quisquam vitae, aperiam voluptatem ad enim ducimus praesentium fuga quas unde ea quasi obcaecati eumlaboriosam eos nesciunt exercitationem voluptatibus cupiditate sunt totam?Dolor voluptatem repudiandae quos." +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, aliquid cupiditate fugit similique laboriosam, expedita, voluptatibus dolorem atlibero ipsam illo molestiae. Voluptates quisquam vitae, aperiam voluptatem ad enim ducimus praesentium fuga quas unde ea quasi obcaecati eumlaboriosam eos nesciunt exercitationem voluptatibus cupiditate sunt totam?Dolor voluptatem repudiandae quos." +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, aliquid cupiditate fugit similique laboriosam, expedita, voluptatibus dolorem atlibero ipsam illo molestiae. Voluptates quisquam vitae, aperiam voluptatem ad enim ducimus praesentium fuga quas unde ea quasi obcaecati eumlaboriosam eos nesciunt exercitationem voluptatibus cupiditate sunt totam?Dolor voluptatem repudiandae quos."
          },
          basicInfo: {
            dateOfBirth: {
              date_1: {
                day: "12",
                month: "January",
                access: "private"
              },
              date_2: {
                year: "2000",
                access: "private"
              }
            },
            gender: "M",
            mobilePhones: ["237656602212", "237677873626"],
            currentCity: "YAOUNDE",
            homeTown: "MELEN",
            websites: ["www.google.com", "ww.facebook.com", "www.udemy.com"],
            socialLinks: [
              "www.instagram.com/bridgeafrica",
              "www.google.com",
              "ww.facebook.com",
              "www.udemy.com"
            ]
          },
          educationAndWorks: {
            workPlaces: [
              {
                id: 1,
                companyName: "Coca Cla Pvt Ltd. Team Lead",
                cityTown: "YAOUNDE",
                position: "YAOUNDE",
                jobResponsibilities:
                  "Job descrioption dummny textJob descrioption dummny text Jobdescrioption dummny text",
                currentlyWorking: false,
                startDate: "2021-08-19",
                endDate: null,
                access: "private"
              },
              {
                id: 2,
                companyName: "a Cla Pvt Ltd. Team Lead",
                cityTown: "YAOUNDE",
                position: "YAOUNDE",
                jobResponsibilities:
                  "Job descrioption dummny textJob descrioption dummny text Jobdescrioption dummny text",
                currentlyWorking: false,
                starDate: "2014-09-12",
                endDate: null,
                access: "private"
              },
              {
                id: 3,
                companyName: "Coc Cla Pvt Ltd. Team Lead",
                cityTown: "YAOUNDE",
                position: "YAOUNDE",
                jobResponsibilities:
                  "Job descrioption dummny textJob descrioption dummny text Jobdescrioption dummny text",
                currentlyWorking: false,
                starDate: "2012-09-12",
                endDate: "2012-09-12",
                access: ""
              }
            ],
            educations: [
              {
                access: "private",
                schoolName: null,
                graduated: false,
                durationFrom: null,
                durationTo: null,
                major: null
              }
            ],
            professions: [
              { profession: "Cultivateur", access: "public" },
              { profession: "Macon", access: "private" },
              { profession: "Cuisinier", access: "public" }
            ]
          }
        }
      }
    ],
    users: [
      {
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
    services: [
      {
        id: "S2021-1",
        Name: "Soins Esthétiques",
        Image: "Clet",
        Localisation: "Douala, PK14",
        Resume:
          "La coiffure est métier où l'on est le plus souvent debout. ... Le coiffeur / la coiffeuse travaille comme salarié dans un salon de coiffure indépendant ou franchisé ou à domicile. C'est également un commerçant qui vend des produits capillaires et des accessoires.",
        user_id: "S001"
      },
      {
        id: "S2021-2",
        Name: "Car Driving",
        Image: "Clet",
        Localisation: "Bonanjo, Bastos",
        Resume:
          "C'est également un commerçant qui vend des produits capillaires et des accessoires.",
        user_id: "S001"
      },
      {
        id: "S2021-3",
        Name: "Gardiennage",
        Image: "Clet",
        Localisation: "Biyem Assi, TKC",
        Resume:
          "comprend toutes sortes de formes de surveillance et de protection des biens et des personnes.",
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
    service: [
      {
        id: "",
        Name: "",
        Image: "Clet",
        Localisation: "",
        Resume: ""
      }
    ]
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
  async editPostUserIntro(context, payload) {
    //console.log(payload);
    //const url = "https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/users.json";
    //const url = state.url_update_user_infos;
    context.commit("editPostUserIntro", {
      data: {
        workedAt: payload.workedAt,
        studiedAt: payload.studiedAt,
        homeTown: payload.homeTown,
        currentCity: payload.currentCity,
        numbersOfFollowers: 20
      }
    });

    console.log(
      state.url_base +
        state.url_update_user_infos +
        "companyName=" +
        payload.workedAt +
        "address=" +
        1 +
        "cityTown=" +
        payload.currentCity +
        "schoolName=" +
        payload.studiedAt
    );
    const url =
      state.url_base +
      state.url_update_user_infos +
      "companyName=" +
      payload.workedAt +
      "&address=" +
      1 +
      "&cityTown=" +
      payload.currentCity +
      "&schoolName=" +
      payload.studiedAt;
    await axios
      .post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${state.token}`
          }
        }
      )
      .then(response => {
        console.log("edit user intro response(1) ++++++++");
        console.log(response);
        return response;
      })
      .then(response => {
        console.log("user intro edited successssssssssss ++++++++++");
        console.log("edit user intro test1 response");
        console.log(response);
        context.commit("editPostUserIntro", {
          data: {
            workedAt: response.data.data.company_name,
            studiedAt: response.data.data.school_name,
            homeTown: response.data.data.address,
            currentCity: response.data.data.city_town,
            numbersOfFollowers: 20
          }
        });
      })
      .catch(error => {
        console.log("erreur liée au navigateur ou au serveur +++");
        console.log(error);
      });
  },
  /**
   * Update the profile
   * @param context
   * @param payload
   */
  async changeProfilePicture(context, payload) {
    console.log("change profile picture start");
    console.log("======================");
    console.log(payload.profilePicture);

    console.log("axiossssssssssss start (2)");
    console.log(payload.profilePicture);
    await axios
      .post(
        state.url_base + state.url_change_profile_picture,
        payload.profilePicture,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${state.token}`
          }
        }
      )
      .then(response => {
        console.log("axiossssssssssss response (1)");
        console.log(response);
        return response;
      })
      .then(response => {
        console.log("axiossssssssssss response (2)");
        console.log(response.data.data.link);
        const url =
          state.url_base +
          state.url_load_profile_picture_changed +
          response.data.data.link;

        console.log("change profile picture url " + url);
        fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${state.token}`
          }
        }).then(image => {
          console.log("Load profile Image response +++++++++");
          console.log(image);
          image.blob().then(imageBlob => {
            const imageURL = URL.createObjectURL(imageBlob);
            console.log("Load profile Image response image URL +++++++++");
            console.log(imageURL);
            context.dispatch("changeProfileImageService", {
              target: imageURL,
              media: imageURL
            });
          });
        });
      })
      .catch(error => {
        console.log("erreur lie au navigateur ou au serveur");
        console.log(error);
      });

    console.log("change profile picture end");
  },
  changeProfileImageService(context, payload) {
    context.commit("changeProfilePicture", {
      profilePicture: payload.target,
      profilePictureLocalStorage: payload.media
    });
  },
  changeCoverImageService(context, payload) {
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
  async changeCoverImage(context, payload) {
    console.log("change cover image start");
    console.log("========================");
    console.log(payload.cover_image);

    console.log("axiossssssssssss start (2)");
    console.log(payload.cover_image);
    await axios
      .post(
        state.url_base + state.url_change_profile_picture,
        payload.cover_image,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${state.token}`
          }
        }
      )
      .then(response => {
        console.log("axiossssssssssss response (1)");
        console.log(response);
        return response;
      })
      .then(response => {
        console.log("axiossssssssssss response (2)");
        console.log(response.data.data.link);
        const url =
          state.url_base +
          state.url_load_profile_picture_changed +
          response.data.data.link;

        console.log("change cover image url " + url);
        fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${state.token}`
          }
        }).then(image => {
          console.log("Load cover image response +++++++++");
          console.log(image);
          image.blob().then(imageBlob => {
            const imageURL = URL.createObjectURL(imageBlob);
            console.log("Load cover image response image URL +++++++++");
            console.log(imageURL);
            context.dispatch("changeCoverImageService", {
              target: imageURL,
              media: imageURL
            });
          });
        });
      })
      .catch(error => {
        console.log("erreur lie au navigateur ou au serveur");
        console.log(error);
      });

    console.log("change profile picture end");
  },
  /**
   *
   * @param context
   * @param payload
   */
  async createPost(context, payload) {
    console.log("Create Post ++++++");
    //console.log(payoad);
    // const url = "https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/users.json";
    //const url = " http://localhost:3000/post";
    //console.log("test");
    await fetch(state.url_base + state.url_create_post, {
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
        context.dispatch("loadPostsList").then(posts => {
          console.log("get post list after creating ++++++++");
          console.log(posts);
          context.commit("retrievePostsListUser", {
            posts: [...posts]
          });
        });

        context.commit("createPost", {
          posts: [
            ...context.getters.getPostLists,
            {
              id: 30,
              profileName: "TONTON LA FORCE LE BEAU GOSSE",
              profile_picture: null,
              content: payload.postBusinessUpdate,
              //{
              //details: payload.postBusinessUpdate,
              //movies: [],
              //hyperlinks: []
              //},
              timeCountDown: "1h",
              likes: [
                {
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
                  timeCountDown: null,
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
            }
          ]
        });
        //console.log(state.userData[0].posts);
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
          // console.log(error);
        }
      });
  },
  async loadProfilePicture(context, payload) {
    console.log("load profile start");
    console.log(context);
    console.log(payload);
    const url =
      state.userData[0].target === null
        ? state.url_base + state.url_load_profile_picture
        : state.userData[0].target;

    const image = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${state.token}`
      }
    });
    console.log("Load profile Image response +++++++++");
    console.log(image);
    const imageBlob = await image.blob();
    const imageURL = await URL.createObjectURL(imageBlob);
    console.log("Load profile Image response image URL +++++++++");
    console.log(imageURL);

    await context.dispatch("changeProfileImageService", {
      target: imageURL,
      media: imageURL
    });
    console.log("load profile end");
    return imageURL;
  },
  async loadCoverImage(context, payload) {
    console.log("load cover Image start++++++++++++++");
    console.log(context);
    console.log(payload);

    console.log("load profile start");
    console.log(context);
    console.log(payload);
    const url = state.url_base + state.url_load_profile_picture;

    const image = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${state.token}`
      }
    });
    console.log("Load cover Image response +++++++++");
    console.log(image);
    const imageBlob = await image.blob();
    const imageURL = await URL.createObjectURL(imageBlob);
    console.log("Load  Cover Image response image URL +++++++++");
    console.log(imageURL);

    await context.dispatch("changeCoverImageService", {
      target: imageURL,
      media: imageURL
    });
    console.log("load cover image end");
    return "test";
  },
  async loadPostsList(context, payload) {
    let response_ = null;
    await fetch(state.url_base + state.url_list_post, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log("load list posts test1++++++++++++");
        console.log(response.data.posts);
        if (!response) {
          throw "Cannot Found Media";
        }
        console.log(context);
        console.log(payload);
        console.log("load list post test2 ++++++++++++");
        response_ = response;
        context.commit("retrievePostsListUser", {
          posts: [...response.data.posts]
        });
      })
      .catch(error => {
        console.log("load post echec ++++++++");
        if (error instanceof TypeError) {
          console.log(error.message);
        } else {
          console.log(error);
        }
      });
    return response_.data.posts;
  },
  async loadUserPostIntro(context, payload) {
    let response_ = null;
    await fetch(state.url_user_infos, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log("load user Intro Post test1 successsss +++");
        console.log(response);
        if (!response) {
          throw "Cannot Found User Post Intro";
        }
        console.log(context);
        console.log(payload);
        console.log("Load User Intro Post test3 +++");
        response_ = response.data[0];
        context.commit("editPostUserIntro", {
          data: {
            workedAt: response_.company_name,
            studiedAt: response_.school_name,
            homeTown: response_.position,
            currentCity: response_.city_town,
            numbersOfFollowers: 20
          }
        });
      })
      .catch(error => {
        console.log("Load User Intro Echec");
        if (error instanceof TypeError) {
          console.log(error.message);
        } else {
          console.log(error);
        }
      });
    return response_;
  },

  async updateUserBiography(context, payload) {
    console.log(payload);
    console.log("edit user biography start +++++");

    // context.commit("updateUserBiography", {
    //   info_access: payload.info_access,
    //   description: payload.description
    // });

    let response_ = null;
    await fetch(
      state.url_base +
        state.url_update_biography +
        "biography=" +
        payload.description,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      }
    )
      .then(response => {
        console.log("edit user biography response (1) +++++++");
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log("edit user biography response successsss +++");
        console.log(response);
        if (!response) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d edition de la biographie+++++");
        }
        context.commit("updateUserBiography", {
          info_access: payload.info_access,
          description: response.data.biography
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
      });
    return response_;
  },
  async loadUserBiography(context, payload) {
    console.log(payload);
    console.log("load user biography start +++++");

    // context.commit("updateUserBiography", {
    //   info_access: payload.info_access,
    //   description: payload.description
    // });

    let response_ = null;
    await fetch(state.url_base + state.url_load_user_biography, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      }
    })
      .then(response => {
        console.log("load user biography response (1) +++++++");
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log("load user biography response successsss +++");
        console.log(response);
        if (!response) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur du chargement de la biographie+++++");
        }
        context.commit("updateUserBiography", {
          info_access: "private",
          description: response.data.biography[0].biography
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
      });
    return response_;
  },
  async updateUserBasicInfosBirthDate(context, payload) {
    console.log(payload);
    console.log("edit user birtDate start +++++");

    // context.commit("updateUserBiography", {
    //   info_access: payload.info_access,
    //   description: payload.description
    // });

    let response_ = null;
    await fetch(
      state.url_base +
        state.url_update_birthDate +
        "dob=" +
        payload.dateOfBirth.date_2.year +
        "-01" +
        //payload.dateOfBirth.date_1.month +
        "-" +
        payload.dateOfBirth.date_1.day,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      }
    )
      .then(response => {
        console.log("edit user birthDate response (1) +++++++");
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log("edit user birthDate response successsss +++");
        console.log(response);
        if (!response) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d edition du BirthDate+++++");
        }
        context.commit("updateUserBirthDate", {
          dateOfBirth: payload.dateOfBirth
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserBasicInfosGender(context, payload) {
    console.log(payload);
    console.log("edit user gender start +++++");

    // context.commit("updateUserBiography", {
    //   info_access: payload.info_access,
    //   description: payload.description
    // });

    let response_ = null;
    await fetch(
      state.url_base + state.url_update_gender + "gender=" + payload.gender,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      }
    )
      .then(response => {
        console.log("edit user gender response (1) +++++++");
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log("edit user gender response successsss +++");
        console.log(response);
        if (!response) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d edition du BirthDate+++++");
        }
        context.commit("updateUserGender", {
          gender: payload.gender
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserBasicInfosMobilePhones(context, payload) {
    console.log(payload);
    console.log("edit user mobile Phones start +++++");

    // context.commit("updateUserBiography", {
    //   info_access: payload.info_access,
    //   description: payload.description
    // });

    let response_ = null;
    await fetch(state.url_base + state.url_post_mobilesPhones, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      },
      body: JSON.stringify({
        mobilePhones: [...payload.mobilePhones]
      })
    })
      .then(response => {
        console.log("edit user mobile phones response (1) +++++++");
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log("edit user mobile phones response successsss +++");
        console.log(response);
        if (!response) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d ajout des mobilesPhones+++++");
        }
        context.commit("storeMobilePhones", {
          mobilePhones: [...payload.mobilePhones]
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserBasicInfosCurrentCity(context, payload) {
    console.log(payload);
    console.log("edit user currentcity start +++++");

    // context.commit("updateUserBiography", {
    //   info_access: payload.info_access,
    //   description: payload.description
    // });

    let response_ = null;
    await fetch(state.url_base + state.url_update_current_city, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      },
      body: JSON.stringify({
        currentCity: payload.currentCity
      })
    })
      .then(response => {
        console.log("edit user current city response (1) +++++++");
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log("edit user current city response successsss +++");
        console.log(response);
        if (!response) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d ajout des current city+++++");
        }
        context.commit("storeCurrentCity", {
          currentCity: payload.currentCity
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserBasicInfosHomeTown(context, payload) {
    console.log(payload);
    console.log("edit user homeTown start +++++");

    // context.commit("updateUserBiography", {
    //   info_access: payload.info_access,
    //   description: payload.description
    // });

    let response_ = null;
    await fetch(state.url_base + state.url_update_current_city, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      },
      body: JSON.stringify({
        homeTown: payload.homeTown
      })
    })
      .then(response => {
        console.log("edit user homeTown response (1) +++++++");
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log("edit user chomeTown response successsss +++");
        console.log(response);
        if (!response) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d 'ajout de homeTown+++++");
        }
        context.commit("storeHomeTown", {
          homeTown: payload.homeTown
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserBasicInfosWebsites(context, payload) {
    console.log(payload);
    console.log("edit user website start +++++");

    let response_ = null;
    await fetch(state.url_base + state.url_update_current_city, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      },
      body: JSON.stringify({
        websites: payload.websites
      })
    })
      .then(response => {
        console.log("edit user websites response (1) +++++++");
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log("edit user websites response successsss +++");
        console.log(response);
        if (!response) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d 'ajout de websites+++++");
        }
        context.commit("storeWebsites", {
          websites: payload.websites
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserBasicInfosSocialLinks(context, payload) {
    console.log(payload);
    console.log("edit user socialLinks start +++++");

    let response_ = null;
    await fetch(state.url_base + state.url_update_current_city, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      },
      body: JSON.stringify({
        socialLinks: payload.socialLinks
      })
    })
      .then(response => {
        console.log("edit user socialLinks response (1) +++++++");
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log("edit user socialLinks response successsss +++");
        console.log(response);
        if (!response) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d 'ajout de socialLinks+++++");
        }
        context.commit("storeSocialLinks", {
          socialLinks: payload.socialLinks
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserWorkPlaces(context, payload) {
    console.log(payload);
    console.log("edit user workplace start +++++");

    let response_ = null;
    await fetch(state.url_base + state.url_add_working, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      },
      body: JSON.stringify({
        companyName: payload.workPlace.companyName,
        cityTown: payload.workPlace.cityTown,
        position: "YAOUNDE",
        jobResponsibilities:
          "Job descrioption dummny textJob descrioption dummny text Jobdescrioption dummny text",
        currentlyWorking: payload.workPlace === true ? 1 : 0,
        startDate: "2012-09-12",
        endDate: "2012-09-12"
      })
    })
      .then(response => {
        console.log("edit user workPlace response (1) +++++++");
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log("edit user workPlace response successsss +++");
        console.log(response);
        if (response.errors) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d 'ajout de workPlace+++++");
        }
        context.commit("storeWorkPlace", {
          workPlace: payload.workPlace
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserEducation(context, payload) {
    console.log(payload);
    console.log("edit user education start +++++");

    let response_ = null;
    await fetch(state.url_base + state.url_add_school, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      },
      body: JSON.stringify({
        schoolName: payload.education.schoolName,
        graduated: payload.education.graduated ? 1 : 0,
        durationFrom: payload.education.durationFrom,
        major: payload.education.major,
        durationTo: payload.education.durationFrom
      })
    })
      .then(response => {
        console.log("edit user education response (1) +++++++");
        console.log(response);
        if (response.status !== 200 || response.status !== 201) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d 'ajout d'education+++++");
        }
        return response.json();
      })
      .then(response => {
        console.log("edit user education response successsss +++");
        console.log(response);
        if (response.errors) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d 'ajout d'education+++++");
        }
        context.commit("storeEducation", {
          education: payload.education
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
        throw error;
      });
    return response_;
  },
  async updateUserProfession(context, payload) {
    console.log(payload);
    console.log("edit user profession start +++++");

    let response_ = null;
    await fetch(state.url_base + state.url_add_profession, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${state.token}`
      },
      body: JSON.stringify({
        profession: payload.profession,
        access: payload.access
      })
    })
      .then(response => {
        console.log("edit user workPlace response (1) +++++++");
        console.log(response);
        if (response.status !== 201 || response.status !== 200) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d 'ajout de workPlace+++++");
        }
        return response.json();
      })
      .then(response => {
        console.log("edit user workPlace response successsss +++");
        console.log(response);
        if (response.errors) {
          console.log("Erreur liée au serveur+++++++");
          throw new Error("Erreur d 'ajout de workPlace+++++");
        }
        context.commit("storeProfession", {
          professions: payload.professions
        });
        response_ = response;
      })
      .catch(error => {
        console.log("erreur liée au serveur ou au navigateur");
        console.log(error);
        throw error;
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
    state.userData[0].createPost.profile_picture = payload.profilePicture;
    state.userData[0].createPost.profile_picture_localstorage =
      payload.profilePictureLocalStorage;
    state.userData[0].profilePicture = payload.profilePicture;
    state.userData[0].target =
      state.change_image_url + payload.profilePictureLocalStorage;
  },
  changeCoverImage(state, payload) {
    state.userData[0].createPost.coverImage = payload.coverImage;
    state.userData[0].coverImage = payload.coverImageLocalStorage;
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
  },
  updateUserBiography(state, payload) {
    state.userData[0].profile_about.biography.info_access = payload.info_access;
    state.userData[0].profile_about.biography.description = payload.description;
  },
  updateUserBirthDate(state, payload) {
    state.userData[0].profile_about.basicInfo.dateOfBirth = payload.dateOfBirth;
  },
  updateUserGender(state, payload) {
    state.userData[0].profile_about.basicInfo.gender = payload.gender;
  },
  storeMobilePhones(state, payload) {
    state.userData[0].profile_about.basicInfo.mobilePhones = [
      ...payload.mobilePhones
    ];
  },
  storeCurrentCity(state, payload) {
    state.userData[0].profile_about.basicInfo.currentCity = payload.currentCity;
  },
  storeHomeTown(state, payload) {
    state.userData[0].profile_about.basicInfo.homeTown = payload.homeTown;
  },
  storeWebsites(state, payload) {
    state.userData[0].profile_about.basicInfo.websites = [...payload.websites];
  },
  storeSocialLinks(state, payload) {
    state.userData[0].profile_about.basicInfo.socialLinks = [
      ...payload.socialLinks
    ];
  },
  storeWorkPlace(state, payload) {
    state.userData[0].profile_about.educationAndWorks.workPlaces = [
      ...state.userData[0].profile_about.educationAndWorks.workPlaces,
      payload.workPlace
    ];
  },
  storeProfession(state, payload) {
    state.userData[0].profile_about.educationAndWorks.professions = [
      ...state.userData[0].profile_about.educationAndWorks.professions,
      payload.professions
    ];
  },
  storeEducation(state, payload) {
    state.userData[0].profile_about.educationAndWorks.educations = [
      ...state.userData[0].profile_about.educationAndWorks.educations,
      payload.educations
    ];
  }
};

export default new Vuex.Store({
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
    },
    getUserPostIntro(state) {
      return state.userData[0].userProfileOwner;
    },
    getProfileAboutBiography(state) {
      return state.userData[0].profile_about.biography;
    },
    getProfileAboutBasicInfos(state) {
      return state.userData[0].profile_about.basicInfo;
    },
    getProfileAboutEducationAndWorks(state) {
      return state.userData[0].profile_about.educationAndWorks;
    }
  },
  actions,
  mutations
});
