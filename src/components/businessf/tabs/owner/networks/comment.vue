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
        <span @click="showReply" class="primary ml-2 reply"><b>Reply</b></span>
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
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      reply: false,
    };
  },

  computed: {
    icon() {
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
          is_liked: 1,
          comment_likes: !this.comment.is_liked
            ? this.comment.comment_likes + 1
            : this.comment.comment_likes
            ? this.comment.comment_likes - 1
            : 0,
        });
    },
    showReply() {
      this.reply = !this.reply;
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