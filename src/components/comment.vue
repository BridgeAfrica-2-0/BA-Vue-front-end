<template>
  <div>
    <b-row class="mt-2">
      <b-col>
          <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          size="2rem"
        ></b-avatar>
        <span class="float-right">
          <b-dropdown size="sm" variant="outline">
            <template class="more" #button-content>
              <b-icon icon="three-dots" aria-hidden="true"></b-icon>
            </template>
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
          </b-dropdown>
        </span>
        <p class="msg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est qui a,
          consectetur explicabo atque totam ea facilis perferendis libero ab
          officiis sint culpa cum similique adipisci doloremque recusandae,
          sapiente minus!
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
                size="2rem"
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
.msg{
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
}
</style>
