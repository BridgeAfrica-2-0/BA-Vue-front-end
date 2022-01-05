<template>
  <div>
    <b-row class="row m-1 mt-4 pb-1 border">
      <b-col cols="12" class="mt-4">
        <b-row>
          <b-col cols="2" md="1" class="m-0 p-0">
            <!-- <b-avatar class="d-inline-block avat" variant="primary" :src="post.profile_picture"></b-avatar> -->
            <b-avatar
          class="p-avater bg-white"
          variant="primary"
          :src="post.profile_picture"
          size="5em"
        ></b-avatar>
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
              ><b-icon :icon="icon" variant="primary" aria-hidden="true"></b-icon>
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
              @keypress.enter="onCreateComment"
            />
            <b-spinner
              style="color: rgb(231, 92, 24); position: absolute; right: 17px"
              v-if="createCommentRequestIsActive"
            ></b-spinner>
            <fas-icon
              class="primary send-cmt"
              :icon="['fas', 'paper-plane']"
              @click="onCreateComment"
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
    </b-row>
  </div>
</template>

<script>
import Comment from '@/components/businessOwner/comment.vue';
import Loader from '@/components/Loader';

import { fromNow, formatNumber } from '@/helpers';

import { NoMoreDataForComment } from '@/mixins';

import { mapGetters } from 'vuex';

export default {
  name: 'postNetwork',
  mixins: [NoMoreDataForComment],
  props: {
    item: {
      type: Object,
      require: true,
    },
  },

  components: {
    Comment,
    Loader,
  },

  filters: {
    fromNow,
    formatNumber,
  },

  computed: {
    ...mapGetters({
      profile: 'auth/profilConnected',
    }),

    icon() {
      return this.post.is_liked ? 'suit-heart-fill' : 'suit-heart';
    },
  },

  created() {
    this.post = this.item;
  },

  data() {
    return {
      toggle: false,
      comments: [],
      loadComment: false,
      comment: '',
      showComment: false,
      processLike: false,
      createCommentRequestIsActive: false,
    };
  },

  methods: {
    onCreateComment: async function () {
      if (!(this.comment.trim().length > 2 && !this.createCommentRequestIsActive)) return false;
      this.createCommentRequestIsActive = true;
      this.loadComment = true;
      const request = await this.$repository.share.createComment({
        post: this.post.post_id,
        data: {
          networkId: this.profile.id,
          comment: this.comment,
        },
      });

      if (request.success) {
        this.page = 1;
        this.onShowComment();
        this.comment = '';
        this.post = {
          ...this.post,
          comment_count: this.post.comment_count + 1,
        };
        this.flashMessage.success({
          message: 'Comment created',
        });
      }

      this.createCommentRequestIsActive = false;
      this.loadComment = false;
    },
    onLike: async function () {
      if (!this.processLike) {
        this.processLike = true;

        const request = await this.$repository.share.postLike({
          post: this.post.post_id,
          network: this.profile.id,
        });

        if (request.success)
          this.post = Object.assign(this.post, {
            is_liked: this.post.is_liked ? 0 : 1,
            likes_count: !this.post.is_liked
              ? this.post.likes_count + 1
              : this.post.likes_count
              ? this.post.likes_count - 1
              : 0,
          });
        this.processLike = false;
      }
    },
    chooseImage: function () {
      document.getElementById('image').click();
    },

    chooseVideo: function () {
      document.getElementById('video').click();
    },

    chooseDocument: function () {
      document.getElementById('document').click();
    },

    showModal() {
      this.$refs['modal-3'].show();
    },
    hideModal() {
      this.$refs['modal-3'].hide();
    },

    onToggle() {
      this.toggle = !this.toggle;
      if (this.toggle) this.onShowComment();
    },

    onShowComment: async function () {
      if (!this.hasData) return false;

      this.loadComment = true;

      const request = await this.$repository.post.fetch({
        uuid: this.post.post_id,
        page: this.page,
      });

      if (request.success) {
        this.comments = [...this.comments, ...request.data];
        this.hasData = request.data.length ? true : false;
        this.page = request.data.length ? this.page + 1 : this.page;
      }

      this.loadComment = false;
    },
  },
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
.bg-white{
  background-color: #ffffff
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
