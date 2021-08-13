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
          <div class="s-card ">
            <div v-for="item in getuser" :key="item.id" >
              <b-row  class="mt-0">
                <b-col cols="12" class="mt-4">
                  <b-row>
                    <b-col cols="2" md="1" class="m-0 p-0">
                      <b-avatar
                        class="d-inline-block avat"
                        variant="primary"
                        :src="item.profilePicture"
                      ></b-avatar>
                    </b-col>
                    <b-col cols="10" md="11" class="pt-2">
                      <h5 class="m-0 font-weight-bolder">
                        {{ item.profileName }}
                        <span class="float-right"> </span>
                      </h5>
                      //cant display time count
                      <p class="duration">{{item.posts.timeCountDOwn}}</p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="12" class="mt-2">
                      <p class="post-text">
                        {{ item.posts.details }}
                      </p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="12" class="mt-2">
                      <div class="">
                        <img
                          class="img-fluid post-container"
                          :src="item.profilePicture"
                          alt="Photo1"
                        />
                      </div>
                    </b-col>
                    <b-col class="mt-1">
                      <span class="mr-3" @click="counts"
                        ><b-icon
                          icon="suit-heart"
                          variant="primary"
                          aria-hidden="true"
                        ></b-icon>
                        //c'ant dispay likeslenght
                   <!--     {{ item.posts.likes.length }}  -->  </span
                      >
                      <span
                        ><b-icon
                          icon="chat-fill"
                          variant="primary"
                          aria-hidden="true"
                        ></b-icon>
                      <!--  {{ item.posts.comments.length }}  --> </span
                      >

                      <span>
                        <fas-icon
                          class="primary ml-3"
                          :icon="['fas', 'share']"
                        />
                      </span>
                    </b-col>
                  </b-row>

                  <b-row class="mt-2">
                    <b-col cols="3" md="1" class="m-md-0 p-md-0">
                      <b-avatar
                        variant="primary"
                        class="img-fluid avat-comment"
                        :src="item.profile"
                      ></b-avatar>
                    </b-col>
                    <b-col cols="9" md="11" class="p-0 m-0 pr-3">
                      <input
                        placeholder="Post a Comment"
                        class="comment"
                        type="text"
                        v-model="com"
                      />

                      <fas-icon
                        class="primary send-cmt"
                        :icon="['fas', 'paper-plane']"
                        @click="commeth"
                      />
                    </b-col>
                  </b-row>

                  <Comment
                    :comments="commentsss"
                    v-if="commentsss.length > 0"
                  />
                  <div v-if="commentsss.length <= 0">no comment</div>
                </b-col>
              </b-row>
            </div>
          </div>
        </h6>
      </span>
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
      imagees: [
        "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
        "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg"
      ],
      imagees3: [
        "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
        "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
        "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg"
      ],

      commentsss: [],
      com: "",
    };
  },

  methods: {
    chooseImage: function() {
      document.getElementById("image").click();
    },
    commeth() {
      this.commentsss.push(this.com);
      this.com = "";
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
    },
    counts() {
      this.postsss.LIKES_NUMBER += 1;
    }
  },

  computed:{

    getuser(){
      return this.$store.state.userData;
    },
    getpost(){
      return this.$store.state.userData.post;
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
