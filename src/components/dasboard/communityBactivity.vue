<template>
  <div>
    <b-card class="px-md-3 border shadow">
      <span>
        <h6 class="title mt-3">
          <fas-icon
            class="icons icon-color"
            :icon="['fab', 'readme']"
            size="lg"
          />
          <b> {{ $t("dashboard.Post") }} </b>
        </h6>
      </span>

      <div class="s-card">
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

        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      </div>
    </b-card>
  </div>
</template>

<script>
import { isYourOwnPostMixins } from "@/mixins";
import Post from "@/components/businessOwner/ownerPostComponent";
import axios from "axios";

export default {
  name: "postNetwork",
  mixins: [isYourOwnPostMixins],
  components: {
    Post,
  },
  data() {
    return {
      page: 1,
      post: this.$store.state.businessOwner.ownerPost,
      url: null,
      delete: [],
      edit_description: null,
      edit_image: null,
      edit_id: null,

      fullPage: false,
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


    infiniteHandler($state) {
      axios
        .get(
          "profile/dashboard/post/business/" + this.businessId + "/" + this.page
        )
        .then(({ data }) => {
          // commit('ownerPost', data.data);
          //  console.log(data);
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

    chooseImage: function () {
      document.getElementById("image").click();
    },

    chooseVideo: function () {
      document.getElementById("video").click();
    },

    chooseDocument: function () {
      document.getElementById("document").click();
    },

    showModal() {
      this.$refs["modal-3"].show();
    },
    hideModal() {
      this.$refs["modal-3"].hide();
    },
  },

  computed: {
    imageProfile() {
      return "yoo";
    }, 

    business_logo() {
      return this.$store.state.businessOwner.businessInfo.logo_path;
    },

    businessId() {
      return this.$store.state.dashboard.dBusinessId;
    },

    owner_post() {
      console.log(this.$store.state.dashboard.bdasboard_post);
      return this.$store.state.dashboard.bdasboard_post;
    },

    profileNamePost() {
      return "yoo";
    },
  },
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
