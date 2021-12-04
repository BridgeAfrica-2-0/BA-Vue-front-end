<template>
  <b-row class="my-4 ml-4" @keydown="onEscape">
    <b-col :class="`${proccesEdit ? 'd-flex' : ''}`">
      <b-avatar
        variant="info"
        :src="comment.picture"
        :class="`${
          'user' == comment.user_type ? 'rounded-circle' : 'square'
        } avat-comment b-r`"
      ></b-avatar>

      <div class="msg text" v-if="!proccesEdit">
        <span class="float-right" style="margin-right: -10px" v-if="isEditMode">
          <b-dropdown size="sm" variant="outline primary " class="primary">
            <template class="more" #button-content> </template>
            <b-dropdown-item @click="toggle">Edit</b-dropdown-item>
            <b-dropdown-item @click="onDelete">Delete</b-dropdown-item>
          </b-dropdown>
        </span>

        <p class="username mb-0" v-if="!proccesEdit">
          <router-link
            :to="{ name: 'Follower', params: { id: comment.user_id } }"
          >
            {{ comment.name }}
          </router-link>
        </p>

        <read-more
          v-if="!proccesEdit"
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
      <p
        class="p-0 m-0 pl-3 msg text inline-comment"
        style="
          background: transparent;
          border: 1px solid transparent;
          width: 100%;
        "
        v-if="proccesEdit"
      >
        <input
          placeholder="Edit a Comment"
          class="comment"
          type="text"
          style="background: transparent"
          v-model="updateCommentText"
          @keypress.enter="onProcess"
        />
        <b-spinner
          style="color: rgb(231, 92, 24); position: absolute; right: 17px"
          v-if="replyLoading"
        ></b-spinner>
        <fas-icon
          class="primary send-cmt"
          :icon="['fas', 'paper-plane']"
          @click="onProcess"
          v-if="updateCommentText.trim().length >= 1 && !replyLoading"
        />
      </p>

      <p class="fs-12" v-if="proccesEdit">
        <a href="#" @click.prevent="toggle">Cancel</a>
      </p>

      <!-- End Edit message -->

      <span v-if="!proccesEdit">
        <b-icon
          :icon="icon"
          variant="primary"
          aria-hidden="true"
          @click="onLike"
          class="cursor"
        ></b-icon>
        {{ comment.comment_likes | nFormatter }}
      </span>

      <span v-if="!proccesEdit" @click="showReply" class="ml-2 reply">
        <b class="primary mr-3">Reply</b>
        <i class="fs-12">{{ comment.updated_at | date }}</i>
      </span>

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
              placeholder="Reply a Comment"
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
            <Reply
              v-for="(obj, index) in comments"
              :key="index"
              :item="obj"
              :uuid="uuid"
              :onDelete="onDeleteReply"
              @update-comment="(text) => onUpdateReply({ uuid: comment.id, text })"
              type="reply"
            />

            <NoMoreData
              v-if="comments.length && !loadComment"
              :hasData="hasData"
              @click.native="onShowReply"
              :moreDataTitle="'Show more reply comments'"
              :noDataTitle="'No reply comment'"
            />

            <Loader v-if="loadComment" />
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
      replyLoading: false,
      proccesEdit: false,
    };
  },

  filters: {
    date,
    nFormatter: formatNumber,
  },

  computed: {
    isYourComment() {
      return (
        this.profile.id == this.comment.user_id &&
        this.profile.user_type == this.comment.user_type
      );
    },

    isEditMode() {
      return this.isYourComment ? true : false;
    },
  },
  
  methods: {
    onDeleteReply: async function (uuid) {
      const request = await this.$repository.post.delete(uuid);

      if (request.success) {
        this.comments = this.comments.filter((e) => e.id != uuid);
        this.item.comment_count -= 1;

        this.flashMessage.show({
          status: "success",
          blockClass: "custom-block-class",
          message: "Comment Deleted",
        });
      } else {
        this.flashMessage.show({
          status: "error",
          blockClass: "custom-block-class",
          message: "Something wrong happen. Try again",
        });
      }
    },

    onUpdateReply: async function ({ uuid, text }) {
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
          message: "Comment Updated",
        });
      } else {
        this.flashMessage.show({
          status: "error",
          blockClass: "custom-block-class",
          message: request.data,
        });
      }
    },

    onProcess() {
      if (!this.updateCommentText.trim().length) {
        this.flashMessage.show({
          status: "error",
          blockClass: "custom-block-class",
          message: "Try to write something",
        });
        return false;
      }
      this.replyLoading = true;
      this.$emit("update-comment", this.updateCommentText);

      this.toggle();
      this.replyLoading = false;
    },

    onEscape() {
      if (this.processEdit) return this.toggle();

      return false;
    },

    toggle() {
      const status = !this.proccesEdit;

      if (!status) this.updateCommentText = "";
      else this.updateCommentText = this.comment.comment;

      this.proccesEdit = status;
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

.square {
  border-radius: none !important;
}

.fs-12 {
  font-size: 12px;
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
.fs-12 {
  font-size: 12px;
}
</style>