<template>
  <div>
    <b-row class="mt-2 px-4">
      <b-col :class="`${proccesEdit ? 'd-flex' : ''}`">
        <b-avatar
          variant="info"
          :src="item.picture"
          :class="`${
            'user' == item.user_type ? 'rounded-circle' : 'square'
          } avat-comment b-r`"
        ></b-avatar>

        <div class="msg text" v-if="!proccesEdit">
          <span
            class="float-right"
            style="margin-right: -10px"
            v-if="isEditMode"
          >
            <b-dropdown size="sm" variant="outline primary " class="primary">
              <template class="more" #button-content> </template>
              <b-dropdown-item @click="toggle">Edit</b-dropdown-item>
              <b-dropdown-item @click="onDelete">Delete</b-dropdown-item>
            </b-dropdown>
          </span>

          <p class="username mb-0 b" v-if="!proccesEdit">
            <router-link
              :to="{ name: 'Follower', params: { id: comment.user_id } }"
            >
              {{ comment.name }}
            </router-link>
          </p>
          <read-more
            more-str="read more"
            :text="item.comment"
            link="#"
            less-str="read less"
            :max-chars="15000"
          >
          </read-more>
        </div>

        <!-- Edit message -->
        <p
          class="p-0 m-0 pl-3 msg text inline-comment"
          style="background: transparent; border: 1px solid transparent"
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


        <span v-if="!proccesEdit" @click="showReply" class="ml-2 reply">
          <i class="fs-12">{{ item.updated_at | date }}</i>
        </span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { commentMixinsBuisness, NoMoreDataForComment } from "@/mixins";
import { date, formatNumber } from "@/helpers";

export default {
  mixins: [commentMixinsBuisness, NoMoreDataForComment],
  data() {
    return {
      proccesEdit: false,
      updateCommentText: false,
      replyLoading: false,
    };
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

    toggle() {
      const status = !this.proccesEdit;

      if (!status) this.updateCommentText = "";
      else this.updateCommentText = this.comment.comment;

      this.proccesEdit = status;
    },
    onEscape() {
      if (this.processEdit) return this.toggle();
      return false;
    },
  },

  filters: {
    date,
    nFormatter: formatNumber,
  },

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
      required: true,
      validator: function (value) {
        if (["reply"].includes(value)) return true;
      },
      default: function () {
        return "reply";
      },
    },
  },
};
</script>
<style scoped>
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