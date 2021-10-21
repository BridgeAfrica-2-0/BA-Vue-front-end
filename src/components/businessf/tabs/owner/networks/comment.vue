<template>
  <div>
    <b-row class="mt-2">
      <b-col>
        <b-avatar
          variant="info"
          :src="comment.user_picture"
          class="avat-comment"
        ></b-avatar>
        <span class="float-right">
          <b-dropdown size="sm" variant="outline " class="primary">
            <template class="more" #button-content> </template>
            <b-dropdown-item>Edit</b-dropdown-item>
            <b-dropdown-item>Delete</b-dropdown-item>
          </b-dropdown>
        </span>
        <p class="msg text">
          <read-more
            more-str="read more"
            :text="comment.comment"
            link="#"
            less-str="read less"
            :max-chars="15000"
          >
          </read-more>
        </p>
        <b-icon
          :icon="icon"
          variant="primary"
          aria-hidden="true"
          class="cursor"
          @click="onLike"
        ></b-icon>
        {{ comment.comment_likes | nFormatter }}
        <b-icon
          icon="chat"
          variant="primary"
          aria-hidden="true"
          class="cursor"
        ></b-icon>
        {{ comment.reply_comment_count | nFormatter }}
        <span
          @click="showReply"
          class="primary ml-2 reply"
          v-if="'reply' == type"
          ><b>Reply</b></span
        >
        <div v-if="reply">
          <b-row class="mt-2">
            <b-col cols="1">
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                class="avat-comment"
              ></b-avatar>
            </b-col>
            <b-col cols="11">
              <input placeholder="Post a Comment" class="comment" type="text" />

              <fas-icon
                class="primary send-cmt"
                :icon="['fas', 'paper-plane']"
              />
            </b-col>
            <b-col cols="12" class="mt-4">
              <Comment
                v-for="comment in comments"
                :key="comment.id"
                :item="comment"
              />
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from "moment";
import Comment from "./comment";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    uuid: {
      required: true,
    },
    type: {
      type: String,
      validator: function (value) {
        if (["reply", "comment"].includes(value)) return true;
      },
      default: function () {
        return "comment";
      },
    },
  },
  components: {
    Comment,
  },
  data() {
    return {
      reply: false,
      comment: null,
      comments: [],
    };
  },
  created() {
    this.comment = this.item;
  },
  computed: {
    icon() {
      console.log(this.comment);
      return this.comment.is_liked ? "suit-heart-fill" : "suit-heart";
    },
  },

  filters: {
    nFormatter: function (num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
      }
      return num;
    },
    now: function (date) {
      return moment(date).fromNow();
    },
  },
  methods: {
    onLike: async function () {
      const request = await this.$repository.share.commentLike({
        comment: this.comment.comment_id,
        network: this.$route.params.id,
      });

      if (request.success)
        this.comment = Object.assign(this.comment, {
          is_liked: this.comment.is_liked ? 0 : 1,
          comment_likes: !this.comment.is_liked
            ? this.comment.comment_likes + 1
            : this.comment.comment_likes
            ? this.comment.comment_likes - 1
            : 0,
        });
    },

    onShowReply: async function () {
      const request = await this.$repository.share.fetchReplyComment({
        post: this.uuid,
        comment: this.comment.id,
        page: 1,
      });

      if (request.success) this.comments = request.data;
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
  padding: 20px;
  border-radius: 25px;
  border: solid 1px #ccc;
  margin-left: 40px;
  margin-top: -40px;
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
</style>