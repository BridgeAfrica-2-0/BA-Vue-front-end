<template>
  <b-row class="mt-2 ml-4">
    <b-col>
      <b-avatar
        variant="info"
        :src="comment.picture"
        :class="`${
          'user' == comment.user_type ? 'rounded-circle' : ''
        } avat-comment b-r`"
      ></b-avatar>

      <div class="msg text" v-if="!isEditMode">
        <span class="float-right" style="margin-right: -10px">
          <b-dropdown size="sm" variant="outline primary " class="primary">
            <template class="more" #button-content> </template>
            <b-dropdown-item @click="toggle">Edit</b-dropdown-item>
            <b-dropdown-item @click="onDelete">Delete</b-dropdown-item>
          </b-dropdown>
        </span>

        <p class="username mb-0" v-if="!isEditMode">
          <router-link :to="{ name: 'Follower', params: { id: comment.id } }">
            {{ comment.name }} <i class="fs-12">{{ comment.created_at | date }}</i>
          </router-link>
        </p>

        <read-more
          v-if="!isEditMode"
          more-str="read more"
          :text="comment.comment"
          link="#"
          less-str="read less"
          :max-chars="15000"
          class="mb-1 text-left"
        >
        </read-more>
      </div>

      <!-- Edit message -->
      <p class="p-0 m-0 pr-3 inline-comment msg text" v-if="isEditMode">
        <input
          placeholder="Edit a Comment"
          class="comment"
          type="text"
          v-model="text"
          @keypress.enter="onProcess"
          v-on:blur="toggle"
        />
        <b-spinner
          style="color: rgb(231, 92, 24); position: absolute; right: 17px"
          v-if="loading"
        ></b-spinner>
        <fas-icon
          class="primary send-cmt"
          :icon="['fas', 'paper-plane']"
          @click="onProcess"
          v-if="text.trim().length >= 1 && !loading"
        />
      </p>
      <!-- End Edit message -->

      <span v-if="!isEditMode">
        <b-icon
          :icon="icon"
          variant="primary"
          aria-hidden="true"
          @click="onLike"
          class="cursor"
        ></b-icon>
        {{ comment.comment_likes | nFormatter }}
      </span>

      <span v-if="!isEditMode" @click="showReply" class="primary ml-2 reply"
        ><b>Reply</b></span
      >

      <div v-if="reply">
        <b-row class="mt-2">
          <b-col cols="1">
            <b-avatar
              v-if="(comment.user_type = 'user')"
              variant="info"
              :src="comment.picture"
              class="avat-comment"
            ></b-avatar>
            <b-avatar
              v-else
              variant="info"
              square
              :src="comment.picture"
              class="avat-comment"
            ></b-avatar>
          </b-col>
          <b-col cols="11"
            ><input
              placeholder="Post a Comment"
              class="comment"
              type="text"
              @keypress.enter="onReply"
              v-model="text"
            />
            <b-spinner
              style="color: rgb(231, 92, 24); position: absolute; right: 17px"
              v-if="loading"
            ></b-spinner>
            <fas-icon
              class="primary send-cmt"
              :icon="['fas', 'paper-plane']"
              @click="onReply"
              v-if="text.trim().length > 2 && !loading"
            />
          </b-col>
          <b-col cols="12" class="mt-4 ml-3 mr-3">
            <Loader v-if="loadComment" />
            <Reply
              v-for="(obj, index) in comments"
              :key="index"
              :item="obj"
              :uuid="uuid"
              type="reply"
            />

            <NoMoreData
              v-if="comments.length && !loadComment"
              :hasData="hasData"
              @click.native="onShowReply"
              :moreDataTitle="'Show more comments'"
              :noDataTitle="'No comment'"
            />
          </b-col>
        </b-row>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import Reply from "./commentReply.vue";
import Loader from "@/components/Loader";

import { commentMixinsBuisness, NoMoreDataForComment } from "@/mixins";
import { date, formatNumber } from "@/helpers";

export default {
  mixins: [commentMixinsBuisness, NoMoreDataForComment],

  components: {
    Reply,
    Loader,
  },

  props: ["item", "uuid", "profileID", "onDelete"],

  data() {
    return {
      reply: false,
      processEdit: false,
      text: "",
      loading: false,
      proccesEdit: false,
    };
  },

  filters: {
    date,
    nFormatter: function (value) {
      // return (this.proccesEdit ? (this.isYourComment ? true : false) : false)
      //   ? ""
      //   : formatNumber(value);
      return formatNumber(value);
    },
  },

  computed: {
    isYourComment() {
      return (
        this.profile.id == this.comment.id &&
        this.profile.user_type == this.comment.user_type
      );
    },

    isEditMode() {
      return this.proccesEdit ? (this.isYourComment ? true : false) : false;
    },
  },
  methods: {
    onProcess() {
      this.$emit("update-comment", this.text);
    },

    toggle() {
      if (!this.proccesEdit) this.text = "";
      else this.text = this.comment.comment;

      this.proccesEdit = !this.proccesEdit;
    },
    showReply() {
      this.reply = !this.reply;

      if (this.reply) this.onShowReply();
    },
  },
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
.msg {
  background-color: #ddd;
  padding: 10px 20px 0px;
  border-radius: 25px;
  border: solid 1px #ccc;
  margin-left: 40px;
  margin-top: -40px;
  width: 93%;
}
.reply {
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.comment {
  width: 100%;
  border: solid 1px #ccc;
  border-radius: 25px;
  background-color: #ddd;
  height: 35px;
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
@media only screen and (max-width: 768px) {
  .send-cmt {
    margin-left: 88%;
  }

  .avat-comment {
    width: 40px;
    height: 40px;
  }
}

@media only screen and (min-width: 768px) {
  .avat-comment {
    width: 36px;
    height: 36px;
  }
}
</style>


<style>
#readmore {
  color: #e75c18;
}

.b-r {
  border-radius: 0% !important;
}
.fs-12{
  font-size: 12px;
}
</style>