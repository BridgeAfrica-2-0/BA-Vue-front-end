<template>
  <div class="comments">
    <div class="d-flex justify-content-start align-items-center mb-3">
      <b-avatar class="mr-3" variant="primary"> </b-avatar>
      <div class="reply">
        <input
          type="text border"
          v-model.trim="reply"
          class="reply--text"
          :placeholder="$t('businessowner.Post_a_Comment')"
          maxlength="250"
          required
          @keyup.enter="submitComment"
        />
        <button class="reply--button" @click.prevent="submitComment">
          <i class="fa fa-paper-plane"></i>
        </button>
      </div>
    </div>
    <div :class="comments_wrapper_classes">
      <single-comment
        v-for="comment in comments"
        :comment="comment"
        :key="comment.id"
        :idproduct="idproduct"
        @deletecomment="deleteComment"
      ></single-comment>
    </div>
  </div>
</template>

<script>
import singleComment from "./SingleComment";
export default {
  name: "comments",
  components: {
    singleComment
  },
  data() {
    return {
      reply: ""
    };
  },
  methods: {
    submitComment() {
      if (this.reply !== "") {
        this.$emit("submit-comment", this.reply);
        this.reply = "";
      }
    },
    deleteComment(idcomment) {
      this.$emit("deletecomment", idcomment);
    }
  },
  props: ["comments", "comments_wrapper_classes", "idproduct"]
};
</script>

<style scoped>
/* .comments {
		margin-top: 20px;
		padding: 20px;
		padding-top: 0;
	} */

.comments-wrapper {
  max-height: 350px;
  overflow-y: auto;
  padding-right: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #fff;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  background-color: #fff;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

/* Reply component */
.reply {
  display: flex;
  position: relative;
  align-items: center;
  background-color: #ebebeb;
  border-radius: 30px;
  padding: 0px;
  width: 100%;
}

/* .reply .avatar {
		position: absolute;
	}

	.reply .avatar > img {
		width: 40px;
		height: 40px;
		border-radius: 100%;
	} */

.reply .reply--text {
  min-height: 40px;
  padding: 10px;
  padding-right: 30px;
  margin-right: 0px;
  margin-left: 10px;
  border: 0;
  color: #333;
  width: 100%;
  outline: 0;
  background-color: transparent;
  box-shadow: none;
}

/* .reply input.reply--text:valid {
		margin-right: 71px;
	}

	.reply input.reply--text:valid + .reply--button {
		right: 10px;
	} */

.reply .reply--button {
  position: absolute;
  right: 0px;
  border: none;
  background-color: transparent;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 15px;
  line-height: 1.5;
  border-radius: 30px;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out,
    right 0.25s ease-in-out;
  outline: 0;
}

.reply .reply--button:hover {
  transform: scale(1.2);
}

.reply .reply--button:focus,
.reply .reply--button:active {
  transform: scale(0.9);
}

hr {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
