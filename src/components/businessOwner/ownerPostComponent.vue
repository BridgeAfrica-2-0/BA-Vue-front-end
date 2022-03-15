<template>
  <div class="p-3 pt-0 card-border my-3" style="position: relative">
    <div class="mt-0">
      <div class="d-inline-flex">
        <span md="1" class="m-0 p-0">
          <!-- <b-avatar
            class="logo-sizee avat"
            :square="'user' == item.poster_type ? false : true"
            variant="primary"
            :src="item.user_picture"
          ></b-avatar> -->
          <b-avatar
            class="p-avater"
            :square="'user' == item.poster_type ? false : true"
            variant="light"
            :src="item.user_picture"
            size="5em"
          ></b-avatar>
        </span>
        <div class="pl-2 pl-md-3 pt-md-2 mt-3 mt-md-0">
          <router-link :to="onRedirect">
            <h5 class="m-0 usernamee">
              {{ item.user_name }}
            </h5>
          </router-link>
          <p class="duration">{{ item.created_at | now }}</p>
        </div>

        <div
          class="toright"
          v-if="
            'dashboard' !== $route.name
              ? !isDisplayInSearch
                ? isYourOwnPost && canBeDelete
                : false
              : false
          "
        >
          <b-dropdown
            variant="link"
            size="sm"
            no-caret
            v-if="show != 'Follower'"
          >
            <template #button-content>
              <b-icon
                icon="three-dots"
                variant="primary"
                aria-hidden="true"
              ></b-icon>
            </template>

            <b-dropdown-item-button variant="info" @click="editPost">
              <b-icon icon="pencil" aria-hidden="true"></b-icon>
              {{ $t("businessowner.Edit") }}
            </b-dropdown-item-button>

            <b-dropdown-item-button variant="danger" @click="deletePost">
              <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
              {{ $t("businessowner.Delete") }}
            </b-dropdown-item-button>
          </b-dropdown>
        </div>
      </div>

      <div class="mt-2 ml-3 p-0">
        <p class="post-text">
          <!--     :text="item.content.details"   -->
          <read-more
            v-if="item.content"
            :more-str="$t('businessowner.read_more')"
            :text="item.content"
            link="#"
            :less-str="$t('businessowner.read_less')"
            :max-chars="200"
          ></read-more>
        </p>
      </div>

      <!-- source post -->
      <div class="mt-2 p-2 post-border" v-if="item.source">
        <div class="d-inline-flex">
          <span md="1" class="m-0 p-0">
            <b-avatar
              class="logo-sizee avat bg-light"
              :square="'user' == item.source.poster_type ? false : true"
              variant="light"
              :src="item.source.logo_path"
            >
            </b-avatar>
          </span>
          <div class="pl-2 pl-md-3 pt-md-2">
            <router-link :to="onRedirect">
              <h5 class="m-0 usernamee">
                {{
                  item.source.user_name
                    ? item.source.user_name
                    : item.source.business_name
                }}
              </h5>
            </router-link>

            <p class="duration">{{ item.source.created_at | now }}</p>
          </div>
        </div>
        <div class="mt-2 ml-3 p-0">
          <p class="post-text">
            <read-more
              v-if="item.source.content"
              :more-str="$t('businessowner.read_more')"
              :text="item.source.content"
              link="#"
              :less-str="$t('businessowner.read_less')"
              :max-chars="200"
            ></read-more>
          </p>
        </div>

        <div v-if="item.source.media.length" class="">
          <span v-for="video in mapVideo(item.source.media)" :key="video">
            <youtube
              class="w-100 videoh"
              :video-id="getId(video)"
              :player-vars="playerVars"
              @playing="playing"
            ></youtube>
          </span>

          <light
            css=" "
            :cells="item.source.media.length"
            :items="mapMedia(item.source.media)"
          ></light>
        </div>
      </div>
      <!-- end source post -->
      <div v-if="item.media.length > 0" class="">
        <span v-for="video in mapvideo()" :key="video">
          <youtube
            class="w-100 videoh"
            :video-id="getId(video)"
            :player-vars="playerVars"
            @playing="playing"
          ></youtube>
        </span>

        <light css=" " :cells="item.media.length" :items="mapmediae()"></light>
      </div>
      <b-row>
        <!--   v-if="item.content.movies.length <= 0"  -->
        <b-col cols="12" class="mt-2">
          <!--  :src="$store.getters.getProfilePicture"  -->
        </b-col>
        <b-col class="mt-1">
          <span
            class="mr-3 cursor"
            @click="onLike"
            v-if="!isMemberNetworkFollower"
            ><b-icon :icon="icon" variant="primary" aria-hidden="true"></b-icon>
            {{ item.likes_count | nFormatter }}
          </span>
          <span class="cursor"
            ><b-icon
              icon="chat-fill"
              variant="primary"
              aria-hidden="true"
            ></b-icon>
            {{ item.comment_count | nFormatter }}
          </span>
          <ShareButton
            :post="item"
            :type="'profile'"
            v-if="profile || !isMemberNetworkFollower || canBeDelete"
          />
        </b-col>
      </b-row>
    </div>

    <div
      class="mt-2 d-inline-flex w-100"
      v-if="
        !isDisplayInSearch
          ? !isMemberNetworkFollower
            ? ((profile && profile.id) == item.post_id ? item.post_id : item.id) &&
              canBeDelete
            : false
          : false
      "
    >
      <div class="m-md-0 p-md-0">
        <b-avatar
          b-avatar
          class="logo-sizee-18 avat img-fluid avat-comment avatar-border bg-light"
          variant="primary"
          :square="'user' == profile.user_type ? false : true"
          :src="profile.profile_picture"
        ></b-avatar>
      </div>

      <div class="p-0 m-0 pr-3 inline-comment" style="position: relative;">
        <textarea-autosize
          :placeholder="$t('businessowner.Post_a_Comment')"
          v-model="comment"
          class="comment py-2 pr-5 pl-3"
          :min-height="30"
          :max-height="47"
          @keypress.enter="onCreateComment"
        />
        <b-spinner
          style="color: rgb(231, 92, 24);"
          class="send-cmt"
          v-if="createCommentRequestIsActive"
        ></b-spinner>
        <fas-icon
          class="primary send-cmt"
          :icon="['fas', 'paper-plane']"
          @click="onCreateComment"
          v-if="comment.trim().length >= 1 && !createCommentRequestIsActive"
        />
      </div>
    </div>

    <Comment
      v-for="comment in comments"
      :key="comment.updated_at"
      :item="comment"
      :uuid="post.post_id ? post.post_id : post.id"
      :onDelete="() => onDelete(comment.id)"
      @update-comment="(text) => onUpdate({ uuid: comment.id, text })"
    />
    
    <Loader v-if="loadComment" />
    <NoMoreData
      v-if="comments.length && !loadComment"
      :hasData="hasData"
      :moreDataTitle="$t('businessowner.Show_more_comments')"
      :noDataTitle="''"
      @click.native="onShowComment"
    />
  </div>
</template>

<script>

import { mapMutations } from "vuex";
import { formatNumber, fromNow } from "@/helpers";

import Loader from "@/components/Loader";
import { ShareButton } from "@/components/shareButton";

import { NoMoreDataForComment, isYourOwnPostMixins } from "@/mixins";

import Comment from "./comment";
import light from "../lightbox";


export default {
  name: "ownerPostComponent",
  mixins: [NoMoreDataForComment, isYourOwnPostMixins],
  components: {
    Comment,
    light,
    Loader,
    ShareButton,
  },

  props: {
    post: {},
    usertype: {
      default: () => null,
    },
    isDisplayInSearch: {
      type: Boolean,
      default: () => false,
    },
    mapvideo: {},
    mapmediae: {},
    businessLogo: {},
    editPost: {},
    deletePost: {},
    canBeDelete: {
      type: Boolean,
      default: () => true,
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

  data: () => ({
    item: null,
    comments: [],
    comment: "",
    showComment: false,
    processLike: false,
    createCommentRequestIsActive: false,
    loadComment: false,
    commentHasLoad: false,

    strategy: null,
  }),


  created() {
    this.item = this.post;
    this.posterID = this.post.poster_id
      ? this.post.poster_id
      : this.post.user_id;

    this.strategy = {
      user: () => {
        return "user" == (this.profile && this.profile.user_type) &&
          "user" == this.post.poster_type && (this.profile && this.profile.id) == this.posterID
          ? { name: "profile_owner" }
          : { name: "Follower", params: { id: this.posterID } };
      },

      business: () => {
        return "business" == (this.profile && this.profile.user_type) &&
          "business" == this.post.poster_type &&
          (this.profile && this.profile.id) == this.posterID
          ? { name: "BusinessOwner", params: { id: this.posterID } }
          : { name: "BusinessFollower", params: { id: this.posterID } };
      },

      network: () => {
        return "network" == (this.profile && this.profile.user_type) &&
          "business" == this.post.poster_type &&
          (this.profile && this.profile.id) == this.posterID
          ? { name: "networks", params: { id: this.posterID } }
          : { name: "networks", params: { id: this.posterID } };
      },
    };
    if (!this.isDisplayInSearch) this.comments = this.post.comments;
  },

  filters: {
    nFormatter: formatNumber,
    now: fromNow,
  },

  computed: {
    onRedirect() {
      return this.strategy[this.post.poster_type]();
    },

    show() {
      return this.$route.name;
    },
    icon() {
      return this.post.is_liked ? "suit-heart-fill" : "suit-heart";
    },
    isMemberNetworkFollower() {
      return "memberNetworkFollower" == this.$route.name ? true : false;
    },
  },

  methods: {
    mapMedia(media) {
      let mediaarr = [];

      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type != "video") {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },

    mapVideo(media) {
      let mediaarr = [];

      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type == "video") {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },

    checkMediaType(media) {
      return media.split("/")[0];
    },

    ...mapMutations({
      addNewComment: "networkProfile/updatePost",
    }),

    getId(video_url) {
      return this.$youtube.getIdFromUrl(video_url);
    },

    toggle() {
      if (!this.canBeDelete) return false;
      this.showComment = !this.showComment;
    },

    onDelete: async function(uuid) {
      const request = await this.$repository.post.delete(uuid);

      if (request.success) {
        this.comments = this.comments.filter((e) => e.id != uuid);
        this.item.comment_count -= 1;

        this.flashMessage.show({
          status: "success",
          blockClass: "custom-block-class",
          message: this.$t("general.Comment_Deleted"),
        });
      } else {
        this.flashMessage.show({
          status: "error",
          blockClass: "custom-block-class",
          message: this.$t("general.Something_wrong_happen_Try_again"),
        });
      }
    },

    onUpdate: async function({ uuid, text }) {
      let data = { comment: text };

      if (
        [
          "NetworkEditors",
          "networks",
          "Membar Network Follower",
          "memberNetwork",
        ].includes(this.$route.name)
      )
        data = Object.assign(data, { networkId: this.profile.id });

      const request = await this.$repository.post.update({ uuid, data });

      if (request.success) {
        this.comments = this.comments.map((e) =>
          e.id == uuid ? { ...request.data } : { ...e }
        );

        this.flashMessage.show({
          status: "success",
          blockClass: "custom-block-class",
          message: this.$t("general.Comment_Updated"),
        });
      } else {
        this.flashMessage.show({
          status: "error",
          blockClass: "custom-block-class",
          message: request.data,
        });
      }
    },

    onLike: async function() {

      if (!this.profile) {
        this.flashMessage.show({
          status: "error",
          blockClass: "custom-block-class",
          message: "You must loggin to perform that action",
        });

        return false
      }

      if (this.isDisplayInSearch) return false;

      if (!this.canBeDelete) return false;

      if (!this.processLike) {
        this.processLike = true;

        const request = await this.$repository.share.postLike({
          post: this.post.post_id ? this.post.post_id : this.post.id,
          network: this.$route.params.id
            ? this.$route.params.id
            : this.profile.id,
        });

        if (request.success)
          this.item = Object.assign(this.post, {
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
      
      if (
        !(this.comment.trim().length >= 1 && !this.createCommentRequestIsActive)
      )
        return false;

      this.createCommentRequestIsActive = true;

      let data = { comment: this.comment };

      if (["networks", "NetworkEditors"].includes(this.$route.name))
        data = Object.assign(data, { networkId: this.$route.params.id });

      const request = await this.$repository.share.createComment({
        post: this.post.post_id ? this.post.post_id : this.post.id,
        data,
      });

      if (request.success) {
        this.comments = [request.data, ...this.comments];
        this.comment = "";
        this.item.comment_count += 1;
        this.flashMessage.success({
          message: this.$t("businessowner.Post_created"),
        });
      }

      this.createCommentRequestIsActive = false;
    },

    onShowComment: async function() {
      if (!this.hasData) return false;

      this.loadComment = true;

      const request = await this.$repository.post.fetch({
        uuid: this.post.post_id ? this.post.post_id : this.post.id,
        page: this.page,
      });

      if (request.success) {
        if (this.commentHasLoad)
          this.comments = [...this.comments, ...request.data];
        else {
          this.commentHasLoad = true;
          this.comments = request.data;
        }
        this.hasData = request.data.length ? true : false;
        this.page = request.data.length ? this.page + 1 : this.page;
      }

      this.loadComment = false;
    },
  },
};
</script>
<style>
.card-border {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
.avatar-border {
  border-radius: 50px !important;
}
.post-border {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10px;
}
.cursor {
  cursor: pointer;
}
.h-lg-250 {
  height: 350px !important;
}

.lb-item {
  background-size: auto;
}
</style>

<style scoped>
.m13 {
  margin-bottom: -13px;
}

.textarea {
  padding: 5px;
  box-sizing: border-box;
}

.custom-block-class {
  position: absolute;
  z-index: 1;
}

.logo-sizee {
  width: 70px !important;
  height: 70px !important;
  object-fit: cover;
}

.logo-sizee-18 {
  width: 50px !important;
  height: 50px !important;
  object-fit: cover;
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

  .videoh {
    height: 200px !important;
  }
}
.inline-comment {
  width: 95%;
}

@media (min-width: 762px) {
  .videoh {
    height: 400px !important;
  }

  .usernamee {
    font-weight: 600;
    font-size: 20px;
    color: black;
  }

  .avat {
    width: 64px;
    height: 64px;
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

.send-cmt {
  position: absolute;
  top: 14px;
  right: 19px;
  cursor: pointer;
}

@media (max-width: 762px) {
  .commentt[data-v-41fcb621] {
    width: 98%;
    border: solid 1 px #ccc;
    border-radius: 25 px;
    background-color: #ddd;
    height: 34 px;
    padding-left: 10 px;
    margin-left: 2%;
  }
 
  .post-btn {
    border: none !important;
    margin-right: 0px;
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
  width: 100%;
  border: solid 1px #ccc;
  border-radius: 25px;
  background-color: #ddd;
  height: 34px;
  padding-left: 10px;
  margin-left: 2%;
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

.duration {
  font-weight: 400;
  font-size: 15px;
  color: black;
}

.usernamee:hover {
  color: #e75c18;
}
</style>
<style>
@media (max-width: 762px) {
  .usernamee {
    font-weight: 600;
    font-size: 15px;
    color: black;
  }

  .videoh {
    height: 200px !important;
  }
}

@media (min-width: 762px) {
  .videoh {
    height: 400px !important;
  }
}

.custom-block-class {
  position: absolute;
  z-index: 1;
}
.post-text p {
  margin: 0px;
}

.toright {
  position: absolute;
  right: 6%;
  /* border: 1px solid #e75c18; */
}
.toright:hover {
  color: white;
  /* border: 1px solid #ddd; */
}
</style>
