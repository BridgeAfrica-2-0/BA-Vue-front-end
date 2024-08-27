<template>
  <div>
    <b-row class="mt-2">
      <b-col>
        <b-avatar
          variant="info"
          :src="comment.user_picture"
          class="avat-comment"
        ></b-avatar>
        <span class="float-right post-options">
          <b-dropdown size="sm" variant="outline " class="primary">
            <template class="more" #button-content> </template>
            <b-dropdown-item>{{ $t("network.Edit") }}</b-dropdown-item>
            <b-dropdown-item>{{ $t("network.Delete") }}</b-dropdown-item>
          </b-dropdown>
        </span>
        <p class="msg text">
          <read-more
            :more-str="$t('search.read_more')"
            :text="comment.comment"
            link="#"
            :less-str="$t('search.read_less')"
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
        <span @click="showReply" class="primary ml-2 reply"
          ><b>{{ $t("network.Reply") }}</b></span
        >
        <div v-if="reply">
          <b-row class="mt-2">
            <b-col cols="1" class="p-0">
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                class="avat-comment"
              ></b-avatar>
            </b-col>
            <b-col cols="11">
              <input
                :placeholder="$t('network.Post_a_Comment')"
                class="comment"
                type="text"
                @keypress.enter="onReply"
                v-model="text"
              />
              <b-spinner
                style="color: rgb(231, 92, 24); position: absolute; right: 17px"
                v-if="createPostRequestIsActive"
              ></b-spinner>

              <fas-icon
                class="primary send-cmt"
                :icon="['fas', 'paper-plane']"
                @click="onReply"
                v-if="text.trim().length > 2 && !createPostRequestIsActive"
              />
            </b-col>
            <b-col cols="12" class="mt-4">
              <Comment
                v-for="obj in comments"
                :key="obj.id"
                :item="obj"
                :uuid="uuid"
                type="reply"
              />
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Comment from "./commentReply";
import { commentMixins } from "@/mixins";

export default {
  mixins: [commentMixins],
  props: {
    item: {
      type: Object,
      required: true
    },
    uuid: {
      required: true
    },
    type: {
      type: String,
      required: true,
      validator: function(value) {
        if (["comment"].includes(value)) return true;
      },
      default: function() {
        return "comment";
      }
    }
  },
  components: {
    Comment
  }
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
