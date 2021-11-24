<template>
  <div>
    <b-card class="border shadow">
      <span>
        <h6 class="title mt-3">
          <fas-icon class="icons icon-color" :icon="['fab', 'readme']" size="lg" />
          <b>{{ $t('dashboard.Posts') }} </b>
        </h6>
      </span>

      <div class="s-card">
        <!-- <div v-for="item in owner_post" :key="item.post_id">
          <div class="mt-2">
            <div class="d-inline-flex">
              <span md="1" class="m-0 p-0">
                <b-avatar class="d-inline-block avat" variant="primary" :src="item.profile_picture"></b-avatar>
              </span>
              <div class="pl-2 pl-md-3 pt-md-2">
                <h5 class="m-0 usernamee">
                  {{ item.name }}
                </h5>
                <p class="durationn">{{ moment(item.created_at).fromNow() }}</p>
              </div>

              <div class="toright pt-2"></div>
            </div>
            <div class="m-0 p-0">
              <p class="post-text">
                <read-more
                  v-if="item.content"
                  more-str="read more"
                  :text="item.content"
                  link="#"
                  less-str="read less"
                  :max-chars="200"
                ></read-more>
              </p>
            </div>

            <div v-if="item.media.length > 0" class="">
              <span v-for="video in mapvideo(item.media)" :key="video">
                <youtube
                  class="w-100 videoh"
                  :video-id="getId(video)"
                  :player-vars="playerVars"
                  @playing="playing"
                ></youtube>
              </span>

              <light css=" " :cells="item.media.length" :items="mapmediae(item.media)"></light>

              <light
                css=" "
                :cells="item.media.length"
                :items="
                  item.media.map(function (a) {
                    return a.media_url;
                  })
                "
              ></light>
            </div>
            <b-row>
              <b-col cols="12" class="mt-2">
              </b-col>
              <b-col class="mt-1">
                <span class="mr-3"
                  ><b-icon icon="suit-heart" variant="primary" aria-hidden="true"></b-icon>
                  {{ nFormatter(item.likes_count) }}
                </span>
                <span
                  ><b-icon icon="chat-fill" variant="primary" aria-hidden="true"></b-icon>
                  {{ nFormatter(item.comment_count) }}
                </span>

                <span>
                  <fas-icon class="primary ml-3" :icon="['fas', 'share']" />
                </span>
              </b-col>
            </b-row>
          </div>

          <div class="mt-2 d-inline-flex w-100">
            <div class="m-md-0 p-md-0">
              <b-avatar variant="primary" :src="info.user.profile_picture" class="img-fluid avat-comment"></b-avatar>
            </div>

            <div class="p-0 m-0 pr-3 inline-comment">
              <input placeholder="Post a Comment" class="comment" type="text" />

              <fas-icon class="primary send-cmt" :icon="['fas', 'paper-plane']" />
            </div>
          </div>

          <Comment v-for="comment in item.comments" :key="comment.id" :comment="comment" />
          <hr />
        </div> -->

        <Post
          v-for="(item, index) in owner_post"
          :key="index"
          :post="item"
          :mapvideo="() => mapvideo(item.media)"
          :mapmediae="() => mapmediae(item.media)"
          :businessLogo="item.logo_path"
          :editPost="(f) => f"
          :deletePost="(f) => f"
        />

        <infinite-loading :identifier="infiniteId" ref="infiniteLoading" @infinite="infiniteHandler"></infinite-loading>
      </div>
    </b-card>
  </div>
</template>

<script>
import { PostComponentMixin } from '@/mixins';
import Post from '@/components/businessOwner/ownerPostComponent';

export default {
  name: 'postNetwork',
  mixins: [PostComponentMixin],
  components: {
    Post,
  },
  data() {
    return {
      playerVars: {
        autoplay: 0,
      },
      page: 1,
      infiniteId: +new Date(),

      url: null,
      delete: [],
      edit_description: null,
      edit_image: null,
      edit_id: null,

      fullPage: false,

      createPost: {
        postBusinessUpdate: '',
        movies: [],
        hyperlinks: [],
      },
      isSubmitted: false,
      fileImageArr: [],
    };
  },

  methods: {
    mapmediae(media) {
      let mediaarr = [];

      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type != 'video') {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },

    getId(video_url) {
      return this.$youtube.getIdFromUrl(video_url);
    },

    mapvideo(media) {
      let mediaarr = [];

      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type == 'video') {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },

    checkMediaType(media) {
      return media.split('/')[0];
    },

    nFormatter(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
      }
      return num;
    },

    infiniteHandler($state) {
      let url = 'profile/dashboard/post/user/' + this.page;

      this.$store
        .dispatch('follower/loadMore', url)

        .then(({ data }) => {
          console.log(data);
          if (data.data.length) {
            this.page += 1;

            this.owner_post.push(...data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
  },
  computed: {
    imageProfile() {
      return 'yoo';
    },

    info: function () {
      return this.$store.getters['follower/getUserPostIntro'];
    },

    owner_post() {
      return this.$store.state.follower.ownerPost;
    },
  },
  mounted() {
    this.url = this.$route.params.id;
  },
};
</script>

<style >
.h-lg-250 {
  height: 350px !important;
}

.lb-item {
  background-size: auto;
}
</style>

<style scoped>
.custom-block-class {
  position: absolute;
  z-index: 1;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload-cancel {
  z-index: 1;
  margin-top: -40%;
  float: right;
  margin-left: -10px;
  right: -97%;
  position: relative;
}

.upload-cancel:hover {
  color: orange;
  font-size: 24px;
}

.oorange {
  color: red;
  font-size: 20px;
  background: white;
  border-radius: 50%;
}

.h300px {
  height: 300px;
  overflow-x: hidden;
}

#preview img {
  object-fit: cover;
  width: 100% !important;
  height: 200px !important;
}

.pending-post-view {
  background-color: #8bd06c;
  border-color: #000;
  border: solid 3px;
}
.action-intro {
  font-size: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.row.sub-sidebar-2.pending-post-view {
  background-color: #8bd06c;
  border-color: #000;
  border: solid 3px;
}
.color-site {
  color: #e75c18;
}
@media (max-width: 762px) {
  .usernamee {
    font-weight: 600;
    font-size: 15px;
    color: black;
  }
}
.inline-comment {
  width: 95%;
}

@media (min-width: 762px) {
  .usernamee {
    font-weight: 600;
    font-size: 20px;
    color: black;
  }

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
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
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
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
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
  width: 90%;
  border: solid 1px #ccc;
  border-radius: 25px;
  background-color: #ddd;
  height: 34px;
  padding-left: 10px;
  margin-left: 8%;
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
  width: 2px;
  height: 20%;
  background-color: gray;
  left: 5px;
  top: 10%;
  animation-name: blink;
  animation-duration: 1200ms;
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
  border: 1px solid gray;
  height: 50px;
  padding: 6px;
  border-radius: 10px;
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
.lb-grid {
  height: 274px;
  margin-bottom: 8px;
}
.post-btn {
  border: none !important;
  margin-right: 50px;
}
.m-up {
  margin-top: -5px;
}
.is-valid {
  border-color: green;
}
.is.invalid {
  border-color: red;
}

.durationn {
  font-weight: 400;
  font-size: 15px;
  color: black;
}
</style>
<style>
.custom-block-class {
  position: absolute;
  z-index: 1;
}
.post-text p {
  margin: 0px;
}
.toright {
  position: absolute;
  right: 1%;
}
</style>