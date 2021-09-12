import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import hotbusiness from "./hotbusiness";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";

import axios from "axios";
Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const getDefaultState = () => {
  return {
    token: "1|5EyNcoXFcd6d4j8kaizPr8E3gU9lRu9CHqAWPa03",
    bdetails: [],
    userData: [
      {
        business_insights: {
          number_likes: 0,
          number_shares: 0,
          number_posts: 0,
          total_likes: 0,
          total_shares: 0,
          total_posts: 0
        },
        posts: [
          {
            id: 1,
            logo: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
            name: "Heavy Gym",
            time: "1h Ago",
            description:
              "Lorem Ipsum has been the industry's standard dummy text ever\n" +
              "                    since the 1500s, when an unknown printer took a galley of\n" +
              "                    type and scrambled it to make a type specimen book. It has\n" +
              "                    survived not only five centuries, but also the leap into\n" +
              "                    electronic typesetting, remaining essentially unchanged.😛",
            images: [
              "https://i.wifegeek.com/200426/f9459c52.jpg",
              "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
              "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
              "https://i.wifegeek.com/200426/2d110780.jpg",
              "https://i.wifegeek.com/200426/e73cd3fa.jpg",
              "https://i.wifegeek.com/200426/15160d6e.jpg",
              "https://i.wifegeek.com/200426/d0c881ae.jpg",
              "https://i.wifegeek.com/200426/a154fc3d.jpg",
              "https://i.wifegeek.com/200426/71d3aa60.jpg",
              "https://i.wifegeek.com/200426/d17ce9a0.jpg",
              "https://i.wifegeek.com/200426/7c4deca9.jpg",
              "https://i.wifegeek.com/200426/64672676.jpg",
              "https://i.wifegeek.com/200426/de6ab9c6.jpg",
              "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
              "https://i.wifegeek.com/200426/4085d03b.jpg",
              "https://i.wifegeek.com/200426/177ef44c.jpg",
              "https://i.wifegeek.com/200426/d74d9040.jpg",
              "https://i.wifegeek.com/200426/81e24a47.jpg",
              "https://i.wifegeek.com/200426/43e2e8bb.jpg"
            ],
            videos: [
              {
                id: 1,
                video: "https://www.youtube.com/embed/JKJECtmqviQ",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },

              {
                id: 2,
                video: "https://www.youtube.com/embed/xVISKL18jLs",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },

              {
                id: 4,
                video: "https://www.youtube.com/embed/nMBQrM1FHZw",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },

              {
                id: 5,
                video: "https://www.youtube.com/embed/iPhGrDZhaAU",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },
              {
                id: 7,
                image: "https://picsum.photos/300/150/?image=41",
                title: "Title 2",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              }
            ],
            likes_numbers: 0,
            likes: [],
            comments_numbers: 0,
            comments: [
              {
                id: 1,
                logo:
                  "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                videos: [],
                description:
                  "um has been the industry's standard dummy text ever\n" +
                  "                    since the 1500s, when an unknown printer took a galley of\n" +
                  "                    type and scrambl",
                photos: [],
                likes: [
                  {
                    id: 1,
                    comment_id: 1,
                    post_id: 1,
                    user_id: 5
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            logo: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
            name: "Heavy Gym",
            time: "1h Ago",
            description:
              "Lorem Ipsum has been the industry's standard dummy text ever\n" +
              "                    since the 1500s, when an unknown printer took a galley of\n" +
              "                    type and scrambled it to make a type specimen book. It has\n" +
              "                    survived not only five centuries, but also the leap into\n" +
              "                    electronic typesetting, remaining essentially unchanged.😛",
            images: [
              "https://i.wifegeek.com/200426/f9459c52.jpg",
              "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
              "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
              "https://i.wifegeek.com/200426/2d110780.jpg",
              "https://i.wifegeek.com/200426/e73cd3fa.jpg",
              "https://i.wifegeek.com/200426/15160d6e.jpg",
              "https://i.wifegeek.com/200426/d0c881ae.jpg",
              "https://i.wifegeek.com/200426/a154fc3d.jpg",
              "https://i.wifegeek.com/200426/71d3aa60.jpg",
              "https://i.wifegeek.com/200426/d17ce9a0.jpg",
              "https://i.wifegeek.com/200426/7c4deca9.jpg",
              "https://i.wifegeek.com/200426/64672676.jpg",
              "https://i.wifegeek.com/200426/de6ab9c6.jpg",
              "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
              "https://i.wifegeek.com/200426/4085d03b.jpg",
              "https://i.wifegeek.com/200426/177ef44c.jpg",
              "https://i.wifegeek.com/200426/d74d9040.jpg",
              "https://i.wifegeek.com/200426/81e24a47.jpg",
              "https://i.wifegeek.com/200426/43e2e8bb.jpg"
            ],
            videos: [
              {
                id: 1,
                video: "https://www.youtube.com/embed/JKJECtmqviQ",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },

              {
                id: 2,
                video: "https://www.youtube.com/embed/xVISKL18jLs",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },

              {
                id: 4,
                video: "https://www.youtube.com/embed/nMBQrM1FHZw",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },

              {
                id: 5,
                video: "https://www.youtube.com/embed/iPhGrDZhaAU",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },
              {
                id: 7,
                image: "https://picsum.photos/300/150/?image=41",
                title: "Title 2",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              }
            ],
            likes_numbers: 0,
            likes: [],
            comments_numbers: 0,
            comments: [
              {
                id: 1,
                logo:
                  "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                videos: [],
                description:
                  "um has been the industry's standard dummy text ever\n" +
                  "                    since the 1500s, when an unknown printer took a galley of\n" +
                  "                    type and scrambl",
                photos: [],
                likes: []
              }
            ]
          },
          {
            id: 3,
            logo: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
            name: "Heavy Gym",
            time: "1h Ago",
            description:
              "Lorem Ipsum has been the industry's standard dummy text ever\n" +
              "                    since the 1500s, when an unknown printer took a galley of\n" +
              "                    type and scrambled it to make a type specimen book. It has\n" +
              "                    survived not only five centuries, but also the leap into\n" +
              "                    electronic typesetting, remaining essentially unchanged.😛",
            images: [
              "https://i.wifegeek.com/200426/f9459c52.jpg",
              "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
              "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
              "https://i.wifegeek.com/200426/2d110780.jpg",
              "https://i.wifegeek.com/200426/e73cd3fa.jpg",
              "https://i.wifegeek.com/200426/15160d6e.jpg",
              "https://i.wifegeek.com/200426/d0c881ae.jpg",
              "https://i.wifegeek.com/200426/a154fc3d.jpg",
              "https://i.wifegeek.com/200426/71d3aa60.jpg",
              "https://i.wifegeek.com/200426/d17ce9a0.jpg",
              "https://i.wifegeek.com/200426/7c4deca9.jpg",
              "https://i.wifegeek.com/200426/64672676.jpg",
              "https://i.wifegeek.com/200426/de6ab9c6.jpg",
              "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
              "https://i.wifegeek.com/200426/4085d03b.jpg",
              "https://i.wifegeek.com/200426/177ef44c.jpg",
              "https://i.wifegeek.com/200426/d74d9040.jpg",
              "https://i.wifegeek.com/200426/81e24a47.jpg",
              "https://i.wifegeek.com/200426/43e2e8bb.jpg"
            ],
            videos: [
              {
                id: 1,
                video: "https://www.youtube.com/embed/JKJECtmqviQ",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },

              {
                id: 2,
                video: "https://www.youtube.com/embed/xVISKL18jLs",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },

              {
                id: 4,
                video: "https://www.youtube.com/embed/nMBQrM1FHZw",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },

              {
                id: 5,
                video: "https://www.youtube.com/embed/iPhGrDZhaAU",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },
              {
                id: 7,
                image: "https://picsum.photos/300/150/?image=41",
                title: "Title 2",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              }
            ],
            likes_numbers: 0,
            likes: [],
            comments_numbers: 0,
            comments: [
              {
                id: 1,
                logo:
                  "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                videos: [],
                description:
                  "um has been the industry's standard dummy text ever\n" +
                  "                    since the 1500s, when an unknown printer took a galley of\n" +
                  "                    type and scrambl",
                photos: [],
                likes: []
              }
            ]
          },
          {
            id: 4,
            logo: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
            name: "Heavy Gym",
            time: "1h Ago",
            description:
              "Lorem Ipsum has been the industry's standard dummy text ever\n" +
              "                    since the 1500s, when an unknown printer took a galley of\n" +
              "                    type and scrambled it to make a type specimen book. It has\n" +
              "                    survived not only five centuries, but also the leap into\n" +
              "                    electronic typesetting, remaining essentially unchanged.😛",
            images: [
              "https://i.wifegeek.com/200426/f9459c52.jpg",
              "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
              "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
              "https://i.wifegeek.com/200426/2d110780.jpg",
              "https://i.wifegeek.com/200426/e73cd3fa.jpg",
              "https://i.wifegeek.com/200426/15160d6e.jpg",
              "https://i.wifegeek.com/200426/d0c881ae.jpg",
              "https://i.wifegeek.com/200426/a154fc3d.jpg",
              "https://i.wifegeek.com/200426/71d3aa60.jpg",
              "https://i.wifegeek.com/200426/d17ce9a0.jpg",
              "https://i.wifegeek.com/200426/7c4deca9.jpg",
              "https://i.wifegeek.com/200426/64672676.jpg",
              "https://i.wifegeek.com/200426/de6ab9c6.jpg",
              "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
              "https://i.wifegeek.com/200426/4085d03b.jpg",
              "https://i.wifegeek.com/200426/177ef44c.jpg",
              "https://i.wifegeek.com/200426/d74d9040.jpg",
              "https://i.wifegeek.com/200426/81e24a47.jpg",
              "https://i.wifegeek.com/200426/43e2e8bb.jpg"
            ],
            videos: [
              {
                id: 1,
                video: "https://www.youtube.com/embed/JKJECtmqviQ",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },

              {
                id: 2,
                video: "https://www.youtube.com/embed/xVISKL18jLs",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },

              {
                id: 4,
                video: "https://www.youtube.com/embed/nMBQrM1FHZw",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },

              {
                id: 5,
                video: "https://www.youtube.com/embed/iPhGrDZhaAU",
                title: "Title 1",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              },
              {
                id: 7,
                image: "https://picsum.photos/300/150/?image=41",
                title: "Title 2",
                text:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
              }
            ],
            likes_numbers: 0,
            likes: [
              {
                id: 1,
                post_id: 4,
                user_id: 5
              }
            ],
            comments_numbers: 0,
            comments: [
              {
                id: 1,
                logo:
                  "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                videos: [],
                description:
                  "um has been the industry's standard dummy text ever\n" +
                  "                    since the 1500s, when an unknown printer took a galley of\n" +
                  "                    type and scrambl",
                photos: [],
                likes: [],
                likes_numbers: 0,
                replies: [
                  {
                    id: 1,
                    comment_id: 1,
                    post_id: 4,
                    user_id: 5,
                    logo:
                      "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
                    videos: [],
                    description: "Reply Me Please",
                    photos: []
                  }
                ]
              }
            ]
          }
        ],
        posts_: {
          user: [],
          business: []
        }
      }
    ]
  };
};

// initial state
const state = getDefaultState();

const actions = {
  async loadUserBusinessInsight(context, payload) {
    console.log(payload);
    console.log("load user Business Insight start +++++");
    let response_ = null;
    let url = null;
    let config = {};
    if (payload !== null) {
      console.log("Payload does not null ++++++++++");
      url =
        process.env.VUE_APP_API_URL1 +
        "/api/v1/business/insights" +
        "?dateStarting=" +
        payload.startDate +
        "&dateClosing=" +
        payload.endDate;
      config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    } else {
      console.log("Payload is null");
      url = state.url_base + state.url_load_business_insight;
      config = {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    }
    await fetch(url, config)
      .then(response => {
        console.log(
          "load user Business Insight response (1) +++++++",
          response
        );
        if (response.status !== 200 && response.status !== 201) {
          throw "Errors during processing by the server";
        }
        return response.json();
      })
      .then(response => {
        console.log(
          "load User Business Insight response successsss +++",
          response
        );
        if (!response) {
          console.log("Error From the server +++++++");
          throw new Error("Error for loading Business Insight +++++");
        }
        context.commit("updateUserBusinessInsights", {
          businessInsights: response.data
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from the server or the browser");
        console.log(error);
        context.commit("updateUserBusinessInsights", {
          businessInsights: null
        });
      });
    return response_;
  },
  async loadUserDashboardPosts(context, payload) {
    console.log(payload);
    console.log("load user Dashboard Post start +++++");
    let response_ = null;
    let url = null;
    let config = {};
    if (payload !== null) {
      console.log("Payload does not null ++++++++++");
      url =
        process.env.VUE_APP_API_URL1 +
        "" +
        "?dateStarting=" +
        payload.startDate +
        "&dateClosing=" +
        payload.endDate;
      config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    } else {
      console.log("Payload is null");
      url = process.env.VUE_APP_API_URL1 + "";
      config = {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    }
    await fetch(url, config)
      .then(response => {
        console.log(
          "load user Posts For Dashboard response (1) +++++++",
          response
        );
        if (response.status !== 200 && response.status !== 201) {
          throw "Errors during processing by the server";
        }
        return response.json();
      })
      .then(response => {
        console.log(
          "load User Posts For Dashboard response successsss +++",
          response
        );
        if (!response) {
          console.log("Error From the server +++++++");
          throw new Error("Error for loading Business Insight +++++");
        }
        context.commit("updateUserPostsDashboard", {
          posts: response.data
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from the server or the browser", error);
        // context.commit("updateUserPostsDashboard", {
        //   posts: null
        // });
        throw error;
      });
    return response_;
  },
  async updatePostLikes(context, payload) {
    console.log(payload, "update post likes start +++++");
    let response_ = null;
    let url = null;
    let config = {};
    if (payload.liked) {
      console.log("update post likes start +++++ ++++++++++");
      url =
        process.env.VUE_APP_API_URL1 +
        "" +
        "?id_post=" +
        payload.post_id +
        "&user_id=" +
        payload.user_id;
      config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    } else if (!payload.liked) {
      console.log("update post likes start +++++ ++++++++++");
      url =
        process.env.VUE_APP_API_URL1 +
        "" +
        "?id_post=" +
        payload.post_id +
        "&user_id=" +
        payload.user_id;
      config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    }
    await fetch(url, config)
      .then(response => {
        console.log("update post likes response (1) +++++++", response);
        if (response.status !== 200 && response.status !== 201) {
          throw "Errors during processing by the server";
        }
        return response.json();
      })
      .then(response => {
        console.log("update post likes response successsss +++", response);
        if (!response) {
          console.log("Error From the server +++++++");
          throw new Error("Error for loading Business Insight +++++");
        }
        context.commit("updateCommentLikes", {
          post_id: payload.post_id,
          user_id: payload.user_id,
          liked: payload.liked
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from the server or the browser", error);
        context.commit("updatePostLikes", {
          post_id: payload.post_id,
          user_id: payload.user_id,
          liked: payload.liked
        });
        throw error;
      });
    return response_;
  },
  async updateCommentLikes(context, payload) {
    console.log(payload, "update comment likes start +++++");
    let response_ = null;
    let url = null;
    let config = {};
    if (payload.liked) {
      console.log("update comment likes start +++++ ++++++++++");
      url =
        process.env.VUE_APP_API_URL1 +
        "" +
        "?comment_id=" +
        payload.post_id +
        "&user_id=" +
        payload.user_id;
      config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    } else if (!payload.liked) {
      console.log("update comment likes start +++++ ++++++++++");
      url =
        process.env.VUE_APP_API_URL1 +
        "" +
        "?post_id=" +
        payload.post_id +
        "&user_id=" +
        payload.user_id;
      config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    }
    await fetch(url, config)
      .then(response => {
        console.log("update comment likes response (1) +++++++", response);
        if (response.status !== 200 && response.status !== 201) {
          throw "Errors during processing by the server";
        }
        return response.json();
      })
      .then(response => {
        console.log("update comment likes response successsss +++", response);
        if (!response) {
          console.log("Error From the server +++++++");
          throw new Error("Error for update comment likes +++++");
        }
        context.commit("updateCommentLikes", {
          comment_id: payload.comment_id,
          post_id: payload.post_id,
          user_id: payload.user_id,
          liked: payload.liked
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from the server or the browser", error);
        context.commit("updateCommentLikes", {
          comment_id: payload.comment_id,
          post_id: payload.post_id,
          user_id: payload.user_id,
          liked: payload.liked
        });
        throw error;
      });
    return response_;
  },
  async crudComment(context, payload) {
    console.log(payload, "crud comment start +++++");
    let response_ = null;
    let url = null;
    let config = {};
    if (payload.type === "delete") {
      console.log("crud comment start +++++ ++++++++++");
      url =
        process.env.VUE_APP_API_URL1 +
        "" +
        "?comment_id=" +
        payload.comment_id +
        "?post_id=" +
        payload.post_id +
        "&user_id=" +
        payload.user_id;
      config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    } else if (payload.type === "update") {
      console.log("update comment start +++++ ++++++++++");
      url =
        process.env.VUE_APP_API_URL1 +
        "" +
        "?comment_id=" +
        payload.comment_id +
        "?post_id=" +
        payload.post_id +
        "&user_id=" +
        payload.user_id;
      config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    } else if (payload.type === "create") {
      console.log("create comment start +++++ ++++++++++");
      url =
        process.env.VUE_APP_API_URL1 +
        "" +
        "?post_id=" +
        payload.post_id +
        "&user_id=" +
        payload.user_id +
        "?comment_created" +
        payload.comment_created;

      config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`
        }
      };
    }
    await fetch(url, config)
      .then(response => {
        console.log("crud comment response (1) +++++++", response);
        if (response.status !== 200 && response.status !== 201) {
          throw "Errors during processing by the server";
        }
        return response.json();
      })
      .then(response => {
        console.log("crud comment response successsss +++", response);
        if (!response) {
          console.log("Error From the server +++++++");
          throw new Error("Error for update comment likes +++++");
        }
        context.commit("crudComment", {
          ...payload
        });
        response_ = response;
      })
      .catch(error => {
        console.log("error from the server or the browser", error);
        context.commit("crudComment", {
          ...payload
        });
        throw error;
      });
    return response_;
  },
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
  updateUserBusinessInsights(state, payload) {
    state.userData[0].business_insights = payload.businessInsights;
  },
  updateUserPostsDashboard(state, payload) {
    state.userData[0].posts = payload.posts;
  },
  updatePostLikes(state, payload) {
    let post = state.userData[0].posts.find(post => {
      return post.id === payload.post_id;
    });
    if (payload.liked) {
      post.likes.push({
        id: post.likes.length,
        post_id: payload.post_id,
        user_id: payload.user_id
      });
    } else {
      const likes = post.likes.filter(like => {
        return like.user_id !== payload.user_id;
      });
      post.likes = likes;
    }
    state.userData[0].posts = state.userData[0].posts.map(post_ => {
      if (post_.id === post.id) {
        post_ = post;
      }
      return post_;
    });
  },
  updateCommentLikes(state, payload) {
    let post = state.userData[0].posts.find(post => {
      return post.id === payload.post_id;
    });
    let comment = post.comments.find(comment => {
      return comment.id === payload.comment_id;
    });
    if (payload.liked) {
      comment.likes.push({
        id: comment.likes.length,
        comment_id: payload.comment_id,
        post_id: payload.post_id,
        user_id: payload.user_id
      });
    } else {
      comment.likes = comment.likes.filter(like => {
        return like.user_id !== payload.user_id;
      });
    }
    post.comments.map(comment_ => {
      if (comment_.id === comment.id) {
        comment_ = comment;
      }
      return comment_;
    });
    state.userData[0].posts = state.userData[0].posts.map(post_ => {
      if (post_.id === post.id) {
        post_ = post;
      }
      return post_;
    });
  },
  crudComment(state, payload) {
    let post = state.userData[0].posts.find(post => {
      return post.id === payload.post_id;
    });
    if (payload.type === "create") {
      post.comments.push({
        id: post.comments.length + 1,
        logo: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
        videos: [],
        description: payload.comment_created,
        photos: [],
        likes: [],
        likes_numbers: 0,
        replies: []
      });
    } else if (payload.type === "delete") {
      post.comments = post.comments.filter(comment => {
        return comment.id !== payload.comment_id;
      });
    } else if (payload.type === "update") {
      post.comments = post.comments.map(comment => {
        if (comment.id === payload.comment_id) {
          comment.description = payload.comment_updated;
        }
        return comment;
      });
    }
    state.userData[0].posts = state.userData[0].posts.map(post_ => {
      if (post_.id === post.id) {
        post_ = post;
      }
      return post_;
    });
  }
};

export default new Vuex.Store({
  state,
  getters: {
    getBusinessInsights(state) {
      return state.userData[0].business_insights;
    },
    getDashboardPosts(state) {
      return state.userData[0].posts;
    },
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
    },
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
  mutations,
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner
  }
});
