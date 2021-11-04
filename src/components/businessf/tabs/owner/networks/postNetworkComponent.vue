<template>
  <b-row class="mt-4">
    <b-col cols="12" class="mt-4">
      <b-row>
        <b-col cols="2" md="1" class="m-0 p-0">
          <b-avatar class="d-inline-block avat" variant="primary" :src="post.logo_path"></b-avatar>
        </b-col>
        <b-col cols="10" md="11" class="pt-2">
          <h5 class="m-0 font-weight-bolder">
            {{ post.bussines_name }}
            <span class="float-right" v-if="isOwner || createDeleteRequestIsActive">
              <b-dropdown variant="outline-primary" size="sm" no-caret>
                <template #button-content>
                  <b-icon icon="three-dots" aria-hidden="true"></b-icon>
                </template>
                <b-dropdown-item-button variant="info" @click="editPost()">
                  <b-icon icon="pencil" aria-hidden="true"></b-icon>
                  Edit
                </b-dropdown-item-button>

                <b-dropdown-item-button variant="danger" @click="removePost">
                  <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                  Delete
                </b-dropdown-item-button>
              </b-dropdown>
            </span>
          </h5>
          <p class="duration">{{ post.created_at | now }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="mt-2">
          <p class="post-text">
            <read-more
              more-str="read more"
              :text="post.content"
              link="#"
              less-str="read less"
              :max-chars="200"
            ></read-more>
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col v-if="post.media.length" cols="12" class="mt-2">
          <div class="">
            <lightbox
              :cells="post.media.length"
              :items="
                post.media.map(function(a) {
                  return a.media_url;
                })
              "
            ></lightbox>
          </div>
        </b-col>
        <!--   v-if="post.content.movies.length <= 0"  -->
        <b-col cols="12" class="mt-2">
          <!--  :src="$store.getters.getProfilePicture"  -->
        </b-col>
        <b-col class="mt-1">
          <span @click="onLike" class="mr-3 cursor"
            ><b-icon :icon="icon" variant="primary" aria-hidden="true"></b-icon>
            {{ post.likes_count | nFormatter }}
          </span>
          <span class="cursor" @click="() => (showComment = !showComment)"
            ><b-icon icon="chat-fill" variant="primary" aria-hidden="true"></b-icon>
            {{ post.comment_count | nFormatter }}
          </span>
          <span class="cursor">
            <ShareButton type="network" :post="{ post_id: post.post_id, user_id: post.user_id }" />
          </span>
        </b-col>
      </b-row>

      <!--  :src="$store.getters.getProfilePicture"  -->
      <b-row class="mt-2">
        <b-col cols="3" md="1" class="m-md-0 p-md-0">
          <b-avatar variant="primary" class="img-fluid avat-comment"></b-avatar>
        </b-col>
        <b-col cols="9" md="11" class="p-0 m-0 pr-3">
          <input
            placeholder="Post a Comment"
            class="comment"
            type="text"
            v-model="comment"
            @keypress.enter="onCreateComment"
          />
          <b-spinner
            style="color: rgb(231, 92, 24); position: absolute; right: 17px"
            v-if="createPostRequestIsActive"
          ></b-spinner>
          <fas-icon
            class="primary send-cmt"
            :icon="['fas', 'paper-plane']"
            @click="onCreateComment"
            v-if="comment.trim().length > 2 && !createPostRequestIsActive"
          />
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="12" class="mt-4" v-if="showComment">
      <Comment v-for="comment in comments" :key="comment.id" :item="comment" :uuid="post.id" type="comment" />
    </b-col>
  </b-row>
</template>

<script>
import { mapMutations } from 'vuex';
import Comment from './comment';
import { ShareButton } from '@/components/shareButton';
import { formatNumber, fromNow } from '@/helpers';

export default {
  name: 'postNetworkComponent',
  props: {
    item: {
      type: Object,
      required: true,
    },
    isOwner: {
      type: Boolean,
      required: true,
    },
    editPost: {
      required: true,
    },
    deletePost: {
      required: true,
    },
  },
  components: {
    Comment,
    ShareButton,
  },

  created() {
    this.post = this.item;
  },

  data() {
    return {
      post: null,
      comments: [],
      showComment: false,
      loadComment: false,
      processLike: false,
      createPostRequestIsActive: false,
      createDeleteRequestIsActive: false,
      comment: '',
    };
  },

  computed: {
    icon() {
      return this.post.is_liked ? 'suit-heart-fill' : 'suit-heart';
    },
  },

  watch: {
    showComment: function(newValue) {
      if (newValue) {
        this.onShowComment();
        this.loadComment = true;
      }
    },
  },

  filters: {
    nFormatter: formatNumber,
    now: fromNow,
  },

  methods: {
    ...mapMutations({
      addNewComment: 'networkProfile/updatePost',
    }),

    removePost: async function() {
      this.createDeleteRequestIsActive = true;
      this.createDeleteRequestIsActive = await this.deletePost();
    },

    onLike: async function() {
      if (!this.processLike) {
        this.processLike = true;

        const request = await this.$repository.share.postLike({
          post: this.post.id,
          network: this.$route.params.id,
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

    onCreateComment: async function() {
      if (!(this.comment.trim().length > 2 && !this.createPostRequestIsActive)) return false;
      this.createPostRequestIsActive = true;
      const request = await this.$repository.share.createComment({
        post: this.post.id,
        data: {
          networkId: this.$route.params.id,
          comment: this.comment,
        },
      });

      if (request.success) {
        this.onShowComment();
        this.comment = '';
        this.addNewComment({ action: 'add:comment:count', uuid: this.post.id });
        this.post = {
          ...this.post,
          comment_count: this.post.comment_count + 1,
        };
        this.flashMessage.success({
          message: 'Post created',
        });
      }

      this.createPostRequestIsActive = false;
    },

    onShowComment: async function() {
      const request = await this.$repository.post.fetch({
        uuid: this.post.id,
        page: 1,
      });

      if (request.success) this.comments = request.data;
    },
  },
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
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
}
.upload-cancel:hover {
  color: orange;
  font-size: 24px;
}

.oorange {
  color: red;
  font-size: 20px;
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
    font-size: 12px;
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
</style>
<style>
.custom-block-class {
  position: absolute;
  z-index: 1;
}
</style>
