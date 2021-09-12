import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
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
        id: post.comments.length,
        logo: "https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg",
        videos: [],
        description:
          "um has been the industry's standard dummy text ever\n" +
          "                    since the 1500s, when an unknown printer took a galley of\n" +
          "                    type and scrambl",
        photos: [],
        likes: []
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
    }
  },
  actions,
  mutations,
  modules: {
    auth,
    businessOwner
  }
});
