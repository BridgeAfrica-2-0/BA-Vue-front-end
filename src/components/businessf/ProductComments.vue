<template>
  <div id="productComments">
    <b-container fluid>
      <b-row>
        <b-col cols="12 mb-3">
          <div class="d-flex justify-content-start align-items-center">
            <div>
              <b-icon variant="primary" icon="heart" class="mr-2"></b-icon
              ><span>12</span>
            </div>
            <div class="ml-3">
              <b-icon variant="primary" icon="chat-fill" class="mr-2"></b-icon
              ><span>{{ comments.length }}</span>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="comments-outside">
            <comments
              :comments_wrapper_classes="[
                'custom-scrollbar',
                'comments-wrapper',
              ]"
              :comments="comments"
              @submit-comment="submitComment"
              :idproduct="idproduct"
              @deletecomment="handleDeleteComment"
            ></comments>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Comments from "./productComment/Comments.vue";

export default {
  name: "ProductComments",
  components: {
    Comments,
  },
  props: {
    idproduct: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      likes: 15,
      creator: {
        avatar: "http://via.placeholder.com/100x100/a74848",
        user: "exampleCreator",
      },
      current_comment_page: 1,
      loadComments: [],
    };
  },
  computed: {
    comments() {
      return this.loadComments;
    },
  },
  methods: {
    handleDeleteComment(idcomment) {
      this.loadComments = this.loadComments.filter(
        (el) => el.comment_id !== idcomment
      );
    },
    submitComment: function(reply) {
      // this.comments.push({
      //   id: this.comments.length + 1,
      //   user: this.current_user.user,
      //   avatar: this.current_user.avatar,
      //   text: reply,
      // });
      const comment = {
        idproduct: this.idproduct,
        text: reply,
      };

      this.$store.dispatch("productComments/postComment", comment).then(() => {
        this.$store
          .dispatch("productComments/getComments", {
            id: this.idproduct,
            page: this.current_comment_page,
          })
          .then((data) => {
            this.loadComments = data;
            console.log(this.loadComments);
          });
      });
    },
  },
  created() {
    this.$store.dispatch("productComments/getProductLikes", this.idproduct);
  },
  beforeMount() {
    this.$store
      .dispatch("productComments/getComments", {
        id: this.idproduct,
        page: this.current_comment_page,
      })
      .then((data) => {
        this.loadComments = data;
        console.log(this.loadComments);
      });
  },
};
</script>

<style>
/* #productComments {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

a {
  text-decoration: none;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ececec;
  margin: 1em 0;
  padding: 0;
}

/* .comments-outside {
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
		margin: 0 auto;
		max-width: 600px;
	} */

.comments-header {
  background-color: #c8c8c8;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: #333;
  min-height: 80px;
  font-size: 20px;
}

.comments-header .comments-stats span {
  margin-left: 10px;
}

.post-owner {
  display: flex;
  align-items: center;
}

.post-owner .avatar > img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}

.post-owner .username {
  margin-left: 5px;
}

.post-owner .username > a {
  color: #333;
}
</style>
