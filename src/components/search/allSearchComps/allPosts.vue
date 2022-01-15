<template>
  <div>
    <div>
      <b-spinner
        v-if="loader"
        variant="primary"
        :label="$t('search.Spinning')"
      ></b-spinner>

      <b-alert v-if="posts.total == 0" show variant="warning"
        ><a href="#" class="alert-link">
          {{ $t("search.No_data_available_for_that_search") }}!
        </a></b-alert
      >

      <Post
        v-for="item in posts.data"
        :key="item.updated_at"
        :post="item"
        :mapvideo="() => mapvideo(item.media)"
        :mapmediae="() => mapmediae(item.media)"
        :businessLogo="item.logo_path"
        :editPost="(f) => f"
        :deletePost="(f) => f"
        :isDisplayInSearch="true"
      />
    </div>
  </div>
</template>

<script>
import Comment from "@/components/businessOwner/comment.vue";
import Loader from "@/components/Loader";

import { fromNow, formatNumber } from "@/helpers";

import { NoMoreDataForComment } from "@/mixins";

import { mapGetters } from "vuex";

import Post from "@/components/businessOwner/ownerPostComponent.vue";

export default {
  name: "postNetwork",
  mixins: [NoMoreDataForComment],
  computed: {
    posts() {
      return this.$store.getters["allSearch/getPosts"];
    },
    loader() {
      return this.$store.getters["allSearch/getLoader"];
    },

    ...mapGetters({
      profile: "auth/profilConnected",
    }),
  },

  components: {
    Post,
  },

  methods: {
    mapmediae(media) {
      let mediaarr = [];

      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type != "video") {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },

    checkMediaType(media) {
      return media.split("/")[0];
    },

    mapvideo(media) {
      let mediaarr = [];

      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type == "video") {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },
  },
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}

.border {
  border: 1px solid #eaeef1;
  border-radius: 16px;
}
.action-intro {
  font-size: 1rem;
}

.row.sub-sidebar-2.pending-post-view {
  background-color: #8bd06c;
  border-color: #000;
  border: solid 3px;
}

.color-site {
  color: #e75c18;
}

@media (min-width: 762px) {
  .avat {
    width: 64px;
    height: 64px;
  }

  .post-container {
    height: 462px;
  }

  .post-text {
    font-size: 14px;
  }

  .avat-comment {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 762px) {
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
.send-cmt {
  position: relative;
  margin-left: 95%;
  top: -28px;
  cursor: pointer;
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

.post-btn {
  border: none !important;
  margin-right: 50px;
}

.m-up {
  margin-top: -5px;
}
