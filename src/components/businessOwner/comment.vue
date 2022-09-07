<template>
  <b-row class="my-4 ml-1 ml-md-2 ml-xl-4 blaa" @keydown="onEscape">
    <b-col :class="`${proccesEdit ? 'd-flex' : ''}`">
      <b-avatar
        variant="light"
        :src="comment.picture"
        :square="'user' == comment.user_type ? false : true"
        class="avat-comment b-r bg-light"
      ></b-avatar>

      <div class="msg text" v-if="!proccesEdit">
        <span class="float-right post-options" style="margin-right: -10px" v-if="'dashboard' !== $route.name ? isEditMode :false">
          <b-dropdown size="sm" variant="outline primary " no-caret class="primary">
            <template class="more" #button-content> <div class="post-options-btn rounded-circle">  <b-icon icon="three-dots-vertical" class="m-auto"> </b-icon>  </div></template>
            <b-dropdown-item @click.prevent="() => {reply = false; toggle()}"> {{ $t("businessowner.Edit") }} </b-dropdown-item>
            <b-dropdown-item @click.prevent="onDelete">{{ $t("businessowner.Delete") }}</b-dropdown-item>
          </b-dropdown>
        </span>

        <p class=" mb-0" v-if="!proccesEdit">
          <router-link
            :to="{ name: 'Follower', params: { id: comment.user_id } }" class="card-title"
          >
            {{ comment.name }}
          </router-link>
        </p>

        <read-more
          :more-str="$t('businessowner.read_more')"
          :text="comment.comment"
          link="#"
          :less-str="$t('businessowner.read_less')"
          :max-chars="15000"
          class=" text-left"
        >
        </read-more>
      </div>

      <!-- Edit message -->
      <div
        class="p-0 m-0 pl-3 msg text inline-comment"
        style="
          background: transparent;
          border: 1px solid transparent;
          width: 100%;
          position:relative
        "
        v-if="proccesEdit"
      >
        <textarea-autosize
          placeholder="Edit a Comment"
          class="comment py-2 pr-5 pl-3"
          type="text"
          style="background: transparent"
          v-model="updateCommentText"
          @keypress.enter="onProcess"
          :max-height="47"
        />
        
        <b-spinner
          style="color: rgb(231, 92, 24);"
          class="send-cmt"
          v-if="replyLoading"
        ></b-spinner>
        <fas-icon
          class="primary send-cmt"
          :icon="['fas', 'paper-plane']"
          @click="onProcess"
          v-if="updateCommentText.trim().length >= 1 && !replyLoading"
        />
      </div>

      <p class="fs-12" v-if="proccesEdit">
        <a href="#" @click.prevent="toggle">{{ $t('network.Cancel') }}</a>
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
        <b class="primary mr-3">{{ $t("businessowner.Reply") }}</b>
        <i class="fs-12">{{ comment.updated_at | date }}</i>
      </span>

      <div v-if="reply">
        <b-row class="mt-2">
          <b-col cols="1" class="p-0">
            <b-avatar
              v-if="(comment.user_type = 'user')"
              variant="light"
              :src="comment.picture"
              class="avat-comment"
            ></b-avatar>
            <b-avatar
              v-else
              variant="light"
              square
              :src="comment.picture"
              class="avat-comment"
            ></b-avatar>
          </b-col>
          <b-col cols="11">
            <textarea-autosize
              :placeholder="$t('general.Reply_comment')"
              class="comment py-2 pr-5 pl-3"
              type="text"
              @keypress.enter="onReply"
              v-model="text"
              :max-height="47"
            />
            <b-spinner
              class="send-cmt"
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
          <b-col cols="12" class="mt-1 ml-3 mr-3">
            <Reply
              v-for="obj in comments"
              :key="obj.updated_at"
              :item="obj"
              :uuid="uuid"
              :onDelete="() => onDeleteReply(obj.id)"
              @update-reply-comment="(text) => onUpdate({ uuid: obj.id, text })"
              type="reply"
            />

            <NoMoreData
              v-if="comments.length && !loadComment"
              :hasData="hasData"
              @click.native="onShowReply"
              :moreDataTitle="$t('businessowner.Show_more_comments')"
              :noDataTitle="$t('businessowner.No_comment')"
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
      updateCommentText: ""
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
          message: this.$t('general.Comment_Deleted'),
        });
      } else {
        this.flashMessage.show({
          status: "error",
          blockClass: "custom-block-class",
          message: this.$t('general.Something_wrong_happen_Try_again'),
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
          message: this.$t('general.Comment_Updated'),
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
          message: this.$t('general.Try_to_write_something'),
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

    onUpdate: async function ({ uuid, text }) {
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
      console.log(request);
      if (request.success) {
        this.comments = this.comments.map((e) =>
          e.id == uuid ? { ...request.data } : { ...e }
        );

        this.flashMessage.show({
          status: "success",
          blockClass: "custom-block-class",
          message: this.$t('general.Comment_Updated'),
        });
      } else {
        this.flashMessage.show({
          status: "error",
          blockClass: "custom-block-class",
          message: request.data,
        });
      }
    },
  },
};
</script>

<style scoped>
.post-options-btn{
  height: 30px;
  width: 30px;
  display: flex;
  background: white;

}
.cursor {
  cursor: pointer;
}

.post-options{
  
   opacity: 0;
}

.msg:hover .post-options{
  opacity: 1;
}

.square {
  border-radius: none !important;
}

.fs-12 {
  font-size: 15px;
}
.msg {
  background-color: #ddd;
  padding: 10px 20px 0px;
  border-radius: 25px;
  border: solid 1px #ccc;
  margin-left: 40px;
  margin-top: -40px;
  width: 90%;
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
  overflow: hidden;
}
.comment:focus {
  outline: none;
}

.send-cmt {
  position: absolute;
  top: 14px;
  right: 19px;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  
  .avat-comment {
    width: 40px;
    height: 40px;
     margin-right: 2px !important;
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

.blaa .b-avatar-img{
  margin-right: 2px !important;
}
</style>