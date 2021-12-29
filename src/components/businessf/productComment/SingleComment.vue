<template>
  <div class="mb-2">
    <div class="d-flex justify-content-start align-items-start">
      <b-avatar class="mr-2" variant="primary"> </b-avatar>
      <div class="flex-column align-items-start d-flex justify-content-start">
        <div
          class="comment flex-column align-items-start d-flex justify-content-start"
        >
          <div class="user d-flex align-items-start justify-content-between">
            <div>
              <p class="mb-0 font-weight-bold">
                {{ comment.user_name }}
              </p>
              <span class="text-secondary font-weight-thin">{{
                datePublish
              }}</span>
            </div>
            <div class="" v-if="comment.user_name === current_user.name">
              <b-dropdown
                size="lg"
                right
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <b-icon icon="three-dots-vertical"></b-icon>
                </template>
                <b-dropdown-item-button @click="deleteComment">
                  <b-icon
                    variant="purple"
                    class="mr-2"
                    icon="trash-fill"
                    aria-hidden="true"
                  ></b-icon>
                  <span class="text-purple">{{$t('general.Delete')}}</span>
                </b-dropdown-item-button>
              </b-dropdown>
            </div>
          </div>
          <div>
            <p class="mb-0">
              <!-- <a class="font-weignt-bold text-info" href="#"
								>@{{ comment.user_name }}</a
							> -->
              {{ comment.comment }}
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-start align-items-center">
          <div>
            <b-icon variant="primary" icon="heart" class="mr-2"></b-icon
            ><span>{{ comment.likes }}</span>
          </div>
          <b-button variant="link">Reply</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "singleComment",
  props: ["comment", "idproduct"],
  computed: {
    current_user() {
      return {
        name: this.$store.state.auth.user.user.name,
        avatar: this.$store.state.auth.user.user.profile_picture,
      };
    },
    datePublish() {
      return moment(this.comment.created_at).fromNow();
    },
  },
  methods: {
    deleteComment() {
      this.$store
        .dispatch("productComments/deleteComment", {
          idproduct: this.idproduct,
          idcomment: this.comment.comment_id,
        })
        .then(() => {
          this.$emit("deletecomment", this.comment.comment_id);
        });
    },
  },
};
</script>

<style scoped>
/* Single-comment component */
.comment {
  min-height: 30px;
  max-width: 100%;
  display: flex;
  padding: 10px;
  align-items: center;
  color: #333;
  background-color: #f2f2f2;
  border-radius: 30px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  text-align: left;
}
.user {
  width: 100%;
}
/* 
	.comment .avatar {
		align-self: flex-start;
	}

	.comment .avatar > img {
		width: 40px;
		height: 40px;
		border-radius: 100%;
		align-self: start;
	} */

/* .comment .text {
		text-align: left;
		min-height: 30px;
		margin-left: 5px;
	}

	.comment .text span {
		margin-left: 5px;
		min-height: 30px;
	} */
</style>
