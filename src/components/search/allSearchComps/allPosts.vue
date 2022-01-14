<template>
  <div>
    <div>
      <b-spinner v-if="loader" 
                 variant="primary" 
                 :label="$t('search.Spinning')"></b-spinner>

      <b-alert v-if="posts.total == 0" show variant="warning"
        ><a href="#" class="alert-link">
          {{$t("search.No_data_available_for_that_search")}}!
        </a></b-alert
      > 


      <Post
        v-for="item in posts.data"
        :key="item.updated_at"
        :post="item"
        :mapvideo="() => mapvideo(item.media)"
        :mapmediae="() => mapmediae(item.media)"
        :businessLogo="item.logo_path"
        :editPost="f => f"
        :deletePost="f => f"
        :isDisplayInSearch="true"
      />

      <!-- <b-row class="m-1 mt-4" v-for="(post, index) in posts.data" :key="index">
     
    
        <b-col cols="12" class="mt-4">
          <b-row>
            <b-col cols="2" md="1" class="m-0 p-0">
              <b-avatar class="d-inline-block avat" variant="primary" :src="post.profile_picture"></b-avatar>
            </b-col>
            <b-col cols="10" md="11" class="pt-2">
              <h5 class="m-0 font-weight-bolder">{{ post.name }}</h5>
              <p class="duration">{{ post.created_at | fromNow }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2">
              <p class="post-text">{{ post.content }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2" v-if="post.media.length">
              <div class="" v-if="1 === post.media.length">
                <img class="img-fluid post-container" :src="post.media[0]" alt="Photo1" />
              </div>
              <lightbox :cells="post.media.length" :items="post.media" v-else></lightbox>
            </b-col>
            <b-col class="mt-1">
              <span class="mr-3 cursor" 
                ><b-icon :icon="post.is_liked ? 'suit-heart-fill' : 'suit-heart'" variant="primary" aria-hidden="true"></b-icon>
                {{ post.likes_count | formatNumber }}</span
              >
              <span class="cursor">
                <b-icon icon="chat-fill" variant="primary" aria-hidden="true"></b-icon>
                {{ post.comment_count | formatNumber }}</span
              >
            </b-col>
          </b-row>
          <div class="mt-2 d-inline-flex w-100" v-if="toggle">
            <div class="m-md-0 p-md-0">
              <b-avatar variant="primary" square :src="post.profile_picture" class="img-fluid avat-comment"></b-avatar>
            </div>

            <div class="p-0 m-0 pr-3 inline-comment" style="width: 100%">
              <input
                :placeholder="$t('search.Post_a_Comment')"
                class="comment"
                type="text"
                v-model="comment"
                @keypress.enter="onCreateComment(post)"
              />
              <b-spinner
                style="color: rgb(231, 92, 24); position: absolute; right: 17px"
                v-if="createCommentRequestIsActive"
              ></b-spinner>
              <fas-icon
                class="primary send-cmt"
                :icon="['fas', 'paper-plane']"
                @click="onCreateComment(post)"
                v-if="comment.trim().length > 2 && !createCommentRequestIsActive"
              />
            </div>
          </div>
          <Comment v-for="(comment, index) in comments" :key="index" :item="comment" :uuid="post.post_id" />
          <Loader v-if="loadComment" />
          <NoMoreData
            v-if="comments.length && !loadComment"
            :hasData="hasData"
            @click.native="onShowComment"
            :moreDataTitle="'Show more post'"
            :noDataTitle="'No post'"
          />
        </b-col>
      </b-row> -->
    </div>
  </div>
</template>

<script>
import Comment from '@/components/businessOwner/comment.vue';
import Loader from '@/components/Loader';

import { fromNow, formatNumber } from '@/helpers';

import { NoMoreDataForComment } from '@/mixins';

import { mapGetters } from 'vuex';

import Post from "@/components/businessOwner/ownerPostComponent.vue";

export default {
  name: 'postNetwork',
  mixins: [NoMoreDataForComment],
  
  computed: {
    posts() {
      return this.$store.getters["allSearch/getPosts"];
    },
    loader() {
      return this.$store.getters["allSearch/getLoader"];
    },

     ...mapGetters({
      profile: 'auth/profilConnected',
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
