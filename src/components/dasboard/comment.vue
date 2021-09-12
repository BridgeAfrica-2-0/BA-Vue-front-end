<template>
  <b-col cols="12">
    <b-row class="mt-2">
      <b-col cols="12">
        <b-row class="mt-2">
          <b-col cols="3" md="1" class="m-md-0 p-md-0">
            <b-avatar
              variant="primary"
              class="img-fluid avat-comment"
              :src="commentData.logo"
            ></b-avatar>
          </b-col>
          <b-col cols="9" md="11" class="p-0 m-0 pr-3 icon" v-if="edited">
              <span class="float-right ">
                <b-dropdown size="sm" variant="outline " class="primary">
                  <template class="more" #button-content> </template>
                  <b-dropdown-item
                          @click="
                      (edited = !edited), updateComment(comment.id, post_id, 5)
                    "
                  >
                    {{ edited ? 'Save' : 'Edit'}}
                  </b-dropdown-item>
                  <b-dropdown-item @click="deleteComment(comment.id, post_id)"
                  >Delete</b-dropdown-item
                  >
                </b-dropdown>
              </span>
              <textarea placeholder="Post a Comment" v-model="comment_input" style="height: 200px" class="comment" type="text" multiple="10"/>
              <!--            <fas-icon class="primary send-cmt" :icon="['fas', 'paper-plane']"/>-->
          </b-col>
            <b-col cols="9" md="11" class="p-0 m-0 pr-3" v-else>
                <span class="float-right">
                      <b-dropdown size="sm" variant="outline " class="primary">
                        <template class="more" #button-content> </template>
                        <b-dropdown-item
                                @click="
                            (comment_input = comment.description), (edited = !edited)
                          "
                        >
                          Edit
                        </b-dropdown-item>
                        <b-dropdown-item @click="deleteComment(comment.id, post_id)"
                        >Delete</b-dropdown-item
                        >
                      </b-dropdown>
                    </span>
                <p class="msg text">
                    <read-more
                            more-str="read more"
                            :text="comment.description"
                            link="#"
                            less-str="read less"
                            :max-chars="15000"
                            v-if="!edited"
                    >
                    </read-more>
                </p>
            </b-col>
        </b-row>
      </b-col>
      <b-col cols="12">
        <!--        <b-avatar-->
        <!--          variant="info"-->
        <!--          :src="commentData.logo"-->
        <!--          class="avat-comment"-->
        <!--        ></b-avatar>-->
<!--                  <span class="float-right">-->
<!--                      <b-dropdown size="sm" variant="outline " class="primary">-->
<!--                        <template class="more" #button-content> </template>-->
<!--                        <b-dropdown-item-->
<!--                                @click="-->
<!--                            (comment_input = comment.description), (edited = !edited)-->
<!--                          "-->
<!--                        >-->
<!--                          Edit-->
<!--                        </b-dropdown-item>-->
<!--                        <b-dropdown-item @click="deleteComment(comment.id, post_id)"-->
<!--                        >Delete</b-dropdown-item-->
<!--                        >-->
<!--                      </b-dropdown>-->
<!--                    </span>-->
<!--                  <p class="msg text">-->
<!--                      <read-more-->
<!--                              more-str="read more"-->
<!--                              :text="commentData.description"-->
<!--                              link="#"-->
<!--                              less-str="read less"-->
<!--                              :max-chars="15000"-->
<!--                              v-if="!edited"-->
<!--                      >-->
<!--                      </read-more>-->
<!--                  </p>-->

        <b-icon
          @click="likeComment(commentData.id, post_id, 5)"
          :icon="comment_.liked_comment ? 'suit-heart-fill' : 'suit-heart'"
          variant="primary"
          aria-hidden="true"
        ></b-icon>
        {{ comment.likes.length }}
        <span @click="showReply" class="primary ml-2 reply"><b>Reply</b></span>
        <div v-if="reply">
          <b-row class="mt-2">
            <b-col cols="1">
              <b-avatar
                variant="info"
                :src="comment.logo"
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
        <div>
          <Comment v-for="reply in comment.replies" :key="reply.id" :comment="reply"/>
        </div>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  emits: ["likeComment", "deleteComment", "updateComment"],
  props: ["comment", "post_id"],
  created() {
    this.commentData = this.comment;
  },
  data() {
    return {
      commentData: this.comment,
      reply: false,
      time: 0,
      comment_input: null,
      edited: false
    };
  },
  computed: {
    comment_() {
      // if( this.commentData !== null ){
      //   this.commentDataMethod();
      // }
      return this.commentData;
    }
  },
  methods: {
    showReply() {
      this.reply = !this.reply;
    },
    likeComment(comment_id, post_id, user_id) {
      this.commentData.liked_comment = !this.commentData.liked_comment;
      this.$emit(
        "likeComment",
        comment_id,
        post_id,
        user_id,
        this.commentData.liked_comment
      );
    },
    deleteComment(comment_id, post_id) {
      this.$emit("deleteComment", comment_id, post_id, 5);
    },
      updateComment(comment_id, post_id){
        this.$emit( "updateComment", comment_id, post_id, 5, this.comment_input.trim() );
        this.comment_input = null;
      }
  }
};
</script>

<style scoped>
.msg {
  background-color: #ddd;
  padding: 20px;
  border-radius: 25px;
  border: solid 1px #ccc;
}

.icon {
    position: relative;
}

.icon > span {
    position: absolute;
    right: 2rem;
    top: auto;
    bottom: auto;
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
