<template>
  <div>
    <b-card class="px-md-3 border shadow ">
      <span>
        <h6 class="title mt-3 ">
          <fas-icon
            class=" icons icon-color"
            :icon="['fab', 'readme']"
            size="lg"
          />
          <b> Post </b>
        </h6>
      </span>
      <div>
        <div class="s-card">
          <div v-if="dashboard_ === null">No Posts</div>
          <div v-else v-for="post in dashboard" :key="post.id">
            <b-row class="mt-0">
              <b-col cols="12" class="mt-4">
                <b-row class="mt-4">
                  <b-col cols="12" class="mt-4">
                    <b-row>
                      <b-col cols="2" md="1" class="m-0 p-0">
                        <b-avatar
                          class="d-inline-block avat"
                          variant="primary"
                          :src="post.logo"
                          square
                        ></b-avatar>
                      </b-col>
                      <b-col cols="10" md="11" class="pt-2">
                        <h5 class="m-0 font-weight-bolder">{{ post.name }}</h5>
                        <p class="duration">1h Ago</p>
                      </b-col>
                    </b-row>
                    <!-- Comment-->
                    <b-row>
                      <b-col cols="12" class="mt-2">
                        <p class="post-text">
                          {{ post.description }}
                        </p>
                      </b-col>
                    </b-row>
                    <b-row>
                      <!-- Images Place-->
                      <b-col cols="12" class="mt-2">
                        <lightbox :cells="4" :items="post.images"></lightbox>
                      </b-col>
                      <!-- Videos Place-->
                      <b-row>
                        <b-col
                          cols="3"
                          class="m-media"
                          v-for="item in post.videos"
                          :key="item.id"
                        >
                          <div class="container-fluid  " v-if="item.video">
                            <b-embed
                              type="iframe"
                              aspect="16by9"
                              :src="item.video"
                              allowfullscreen
                              class="s-embed"
                            ></b-embed>
                            <p class="text">
                              {{ item.title }}<br />
                              {{ item.description }}
                            </p>
                          </div>
                        </b-col></b-row
                      >
                    </b-row>
                  </b-col>
                  <!-- Comment User -->
                  <b-col class="mt-1">
                    <span class="mr-3" @click="likePost(post.id, 5)"
                      ><b-icon
                        :icon="post.liked ? 'suit-heart-fill' : 'suit-heart'"
                        variant="primary"
                        aria-hidden="true"
                      ></b-icon>
                      {{ post.likes.length }}</span
                    >
                    <span
                      ><b-icon
                        icon="chat-fill"
                        variant="primary"
                        aria-hidden="true"
                      ></b-icon>
                      {{ post.comments.length }}</span
                    >

                    <span>
                      <fas-icon class="primary ml-3" :icon="['fas', 'share']" />
                    </span>
                  </b-col>
                  <b-col cols="12">
                    <b-row class="mt-2">
                      <b-col cols="3" md="1" class="m-md-0 p-md-0">
                        <b-avatar
                          variant="primary"
                          class="img-fluid avat-comment"
                          :src="post.logo"
                        ></b-avatar>
                      </b-col>
                      <b-col cols="9" md="11" class="p-0 m-0 pr-3">
                        <input
                          placeholder="Post a Comment"
                          class="comment"
                          type="text"
                          v-model="post_comment_input"
                        />

                        <fas-icon
                          class="primary send-cmt"
                          :icon="['fas', 'paper-plane']"
                          @click="savePostComment(post.id)"
                        />
                      </b-col>
                    </b-row>
                  </b-col>
                  <Comment
                    v-for="comment in post.comments"
                    :key="comment.id"
                    :comment="comment"
                    :post_id="post.id"
                    @likeComment="likeComment"
                    @deleteComment="deleteComment"
                    @updateComment="updateComment"
                  />
                </b-row>
              </b-col>
            </b-row>
          </div>
          <hr />
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import Comment from "./comment";

export default {
  name: "postNetwork",
  components: {
    Comment
  },
  data() {
    return {
      post_comment_input: null,
      posts: [
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
      liked_: [],
      dashboard: null,
      liked: false,
      time: 0
    };
  },
  watch: {},
  computed: {
    dashboard_() {
      if (this.dashboard !== null) {
        this.dashboardMethod();
      }
      return this.dashboard;
    }
  },
  created() {
    console.log("Load Posts Dashboard start  ++++");
    this.$store
      .dispatch("loadUserDashboardPosts", null)
      .then(response => {
        console.log(
          "load Posts For Dashboard response in component (3)+++++",
          response
        );
        console.log("load Posts For Dashboard end +++++++");
      })
      .catch(error => {
        console.log(
          "error from the server or the browser error(2) ++++++",
          error
        );
        console.log("Load Posts For Dashboard end +++++");
      })
      .finally(() => {
        this.dashboard = this.$store.getters.getDashboardPosts;
        // this.liked_ = this.dashboard.map(post => {
        //   return !!post.likes.find(like => {
        //     return like.user_id === 5;
        //   });
        // });
        console.log("Finally load Dashboard Posts +++++", this.dashboard);
      });
  },
  methods: {
    likePost(id, user_id) {
      this.dashboard[id - 1].liked = !this.dashboard[id - 1].liked;
      if (this.dashboard[id - 1].liked) {
        this.time = setTimeout(() => {
          console.log("Liked post");
          this.updatePostLikes(id, user_id, this.dashboard[id - 1].liked);
        }, 1);
      } else {
        clearTimeout(this.time);
        this.updatePostLikes(id, user_id, this.dashboard[id - 1].liked);
        console.log("Disliked Post");
      }
    },
    updatePostLikes(post_id, user_id, liked) {
      console.log("update Post Likes start  ++++");
      this.$store
        .dispatch("updatePostLikes", {
          post_id: post_id,
          user_id: user_id,
          liked: liked
        })
        .then(response => {
          console.log(
            "update Post Likes response in component (3)+++++",
            response
          );
          console.log("update Post Likes end +++++++");
        })
        .catch(error => {
          console.log(
            "error from the server or the browser error(2) ++++++",
            error
          );
          console.log("update Post Likes end +++++");
        })
        .finally(() => {
          this.dashboard = this.$store.getters.getDashboardPosts;
          console.log("Finally update Post Likes Posts +++++", this.dashboard);
        });
    },
    dashboardMethod() {
      this.dashboard = this.dashboard.map(post => {
        const liked = !!post.likes.find(like => {
          return like.user_id === 5;
        });

        post.comments = post.comments.map(comment => {
          const liked_comment = !!comment.likes.find(like => {
            return like.user_id === 5;
          });
          return { ...comment, liked_comment };
        });
        return { ...post, liked };
      });
      console.log("Changed+++++++++", this.dashboard);
    },
    likeComment(comment_id,post_id, user_id, liked) {
      if (liked) {
        this.time = setTimeout(() => {
          console.log("Liked Comment +++++");
          this.updateCommentLikes(comment_id,post_id, user_id, liked);
        }, 1);
      } else {
        clearTimeout(this.time);
        this.updateCommentLikes(comment_id,post_id, user_id, liked);
        console.log("Disliked Comment");
      }
    },
    updateCommentLikes(comment_id,post_id, user_id, liked) {
      console.log("update Comment Likes start  ++++");
      this.$store
              .dispatch("updateCommentLikes", {
                comment_id: comment_id,
                post_id: post_id,
                user_id: user_id,
                liked: liked

              })
              .then(response => {
                console.log(
                        "update Comment Likes response in component (3)+++++",
                        response
                );
                console.log("update Comment Likes end +++++++");
              })
              .catch(error => {
                console.log(
                        "error from the server or the browser error(2) ++++++",
                        error
                );
                console.log("update Comment Likes end +++++");
              })
              .finally(() => {
                this.dashboard = this.$store.getters.getDashboardPosts;
                console.log("Finally update Comment Likes +++++", this.dashboard);
              });
    },
    deleteComment(comment_id, post_id, user_id){
      this.crudComment( {
        comment_id: comment_id,
        post_id: post_id,
        user_id: user_id,
        type: 'delete'

      });
    },
    updateComment(comment_id, post_id, user_id, comment_updated){
      this.crudComment( {
        comment_id: comment_id,
        post_id: post_id,
        user_id: user_id,
        comment_updated: comment_updated,
        type: 'update'

      });
    },
    savePostComment(post_id, user_id){
      this.crudComment({
        post_id: post_id,
        user_id: user_id,
        comment_created: this.post_comment_input,
        type: 'create'
      })
    },
    crudComment( payload ) {
      console.log("crud Comment start  ++++");
      this.$store
              .dispatch("crudComment", payload)
              .then(response => {
                console.log(
                        "crud Comment response in component (3)+++++",
                        response
                );
                console.log("crud Comment end +++++++");
              })
              .catch(error => {
                console.log(
                        "error from the server or the browser error(2) ++++++",
                        error
                );
                console.log("crud Comment end +++++");
              })
              .finally(() => {
                this.dashboard = this.$store.getters.getDashboardPosts;
                console.log("Finally crud Comment +++++", this.dashboard);
              });
    },
    chooseImage: function() {
      document.getElementById("image").click();
    },

    chooseVideo: function() {
      document.getElementById("video").click();
    },

    chooseDocument: function() {
      document.getElementById("document").click();
    },

    showModal() {
      this.$refs["modal-3"].show();
    },
    hideModal() {
      this.$refs["modal-3"].hide();
    }
  }
};
</script>

<style scoped>
.card-body {
  padding: 2px !important;
}

.action-intro {
  font-size: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.color-site {
  color: #e75c18;
}

@media (min-width: 762px) {
  .avat {
    width: 64px;
    height: 64px;
  }

  .send-cmt {
    position: relative;
    margin-left: 95%;
    top: -28px;
    cursor: pointer;
  }

  .post-btn {
    border: none !important;
    margin-right: 50px;
  }

  .post-container {
    max-width: 500px;
    max-height: 462px;
  }

  .post-text {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .avat-comment {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 762px) {
  .post-btn {
    border: none !important;
    margin-right: 0px;
  }

  .send-cmt {
    position: relative;
    margin-left: 90%;
    top: -28px;
    cursor: pointer;
  }

  .avat {
    width: 40px;
    height: 40px;
  }

  .avat-comment {
    width: 36px;
    height: 36px;
  }

  .post-text {
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
}

.comment-box {
  margin-left: -40px;
  position: relative;
  background-color: white;
}

.comment-input {
  border-radius: 24px;
  height: 34px;
  width: 315px;
}

.comment {
  width: 100%;
  border: solid 1px #ccc;
  border-radius: 25px;
  background-color: #ddd;
  height: 34px;
  padding-left: 10px;
}
.comment:focus {
  outline: none;
}

.time {
  position: relative;
  margin-left: 80px;
  top: -28px;
}

.border-none {
  border: none;
  height: 100px;
}

.cursor {
  position: relative;
}
.cursor i {
  position: absolute;
  width: 1px;
  height: 20%;
  background-color: gray;
  left: 5px;
  top: 10%;
  animation-name: blink;
  animation-duration: 800ms;
  animation-iteration-count: infinite;
  opacity: 1;
}

.cursor input:focus + i {
  display: none;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.bordder {
  border: 1px solid #e75c18;
  height: 50px;
  padding: 6px;
}

.username {
  color: black;
}

.btn {
  border-radius: 5px;
  text-align: center;
}

.btn:hover {
  background-color: #ccc;
}
</style>

<style>
.lb-grid {
  height: 274px;
  margin-bottom: 8px;
}

.m-up {
  margin-top: -5px;
}

.s-card {
  height: 540px;
  overflow: auto;
  overflow-x: hidden;
  padding: 15px;
}
</style>
