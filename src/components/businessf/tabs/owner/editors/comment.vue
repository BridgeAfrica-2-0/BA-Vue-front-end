<template>
  <div>
    <b-row class="mt-2">
      <b-col>
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="avat-comment"
        ></b-avatar>
        <span class="float-right">
          <b-dropdown size="sm" variant="outline " class="primary">
            <template class="more" #button-content> </template>
            <b-dropdown-item> Edit </b-dropdown-item>
            <b-dropdown-item>Delete</b-dropdown-item>
          </b-dropdown>
        </span>
        <p class="msg text">
          <read-more
            more-str="read more"
            :text="msg"
            link="#"
            less-str="read less"
            :max-chars="15000"
          >
          </read-more>
        </p>
        <b-icon icon="suit-heart" variant="primary" aria-hidden="true"></b-icon>
        23
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
export default {
  data() {
    return {
      reply: false,

      msg: " Lorem Ipsum has been the industry's   this is do goodfive centuries, but  the leap into electronic      this is do goodfive centuries, but  the leap into electronic        this is do goodfive centuries, but  the leap into electronic  this sis sit tit typesetting",
    };
  },
  methods: {
    showReply() {
      this.reply = !this.reply;
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