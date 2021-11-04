
import { mapGetters, mapActions } from "vuex";

import NotFound from "@/components/NotFoundComponent"
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'


import { formatNumber, fromNow } from "@/helpers";

export const cancelRequest = {
  destroyed() {

  }
}

export const loader = {
  methods: {
    onNotified(text) {
      this.$notify({
        group: "notification",
        title: "Important message",
        type: "warn",
        duration: 5000,
        text,
      });
    },
    ...mapActions({
      setLoaderState: "search/LOADING"
    })
  },
  computed: {
    ...mapGetters({
      loaderState: "search/LOADING"
    })
  },
  data: () => ({
    overlay: null
  }),

}

export const search = {
  components: {
    NotFound,
    ScrollLoader: ClipLoader
  },
  props: {
    title: {
      type: String
    }
  },

  data: () => ({
    haveNotData: false
  }),

  destroyed() {
    console.log("destroy component")
    this.page(1);
    this.$store.commit('search/RESET_RESULT');
    window.removeEventListener('scroll', this.onscroll)
  },

  computed: {
    ...mapGetters({
      callback: "search/GET_CURRENT_PAGINATE_CALLBACK",
      getStack: "search/STACK_VALUE",
    }),
  },
  methods: {
    ...mapActions({
      page: "search/SET_CURRENT_PAGINATION_PAGE",
    }),
  }
}


export const commentMixinsBuisness = {

  data() {
    return {
      reply: false,
      comment: null,
      comments: [],
      text: "",
      createPostRequestIsActive: false,
      loadComment:false
    };
  },
  created() {
    this.comment = this.item;
  },
  computed: {
    icon() {
      return this.comment.is_liked ? "suit-heart-fill" : "suit-heart";
    },
  },

  filters: {
    nFormatter: formatNumber,
    now: fromNow,
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
      this.loadComment = true
      const request = await this.$repository.share.fetchReplyComment({
        post: this.uuid,
        comment: this.comment.comment_id,
        page: 1,
      });


      if (request.success) this.comments = request.data;

      this.loadComment = false
    },

    onReply: async function () {
      if (!(this.text.trim().length > 2 && !this.createPostRequestIsActive))
        return false;

      this.createPostRequestIsActive = true
      this.loadComment = true

      const request = await this.$repository.share.createReplyComment({
        post: this.uuid,
        comment: this.comment.comment_id,
        data: {
          comment: this.text,
          networkId: this.$route.params.id,
        },
      });

      if (request.success) {
        this.onShowReply();
        this.text = "";

        this.comment = Object.assign(this.comment, {
          reply_comment_count: this.comment.reply_comment_count + 1,
        });
      }
      this.createPostRequestIsActive = false
      this.loadComment = false
    },

    showReply() {
      this.reply = !this.reply;
      if (this.reply) this.onShowReply();
    },
  },
}

export const commentMixins = {

  data() {
    return {
      reply: false,
      comment: null,
      comments: [],
      text: "",
      createPostRequestIsActive: false,
    };
  },
  created() {
    this.comment = this.item;
  },
  computed: {
    icon() {
      return this.comment.is_liked ? "suit-heart-fill" : "suit-heart";
    },
  },

  filters: {
    nFormatter: formatNumber,
    now: fromNow,
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
        comment: this.comment.comment_id,
        page: 1,
      });


      if (request.success) this.comments = request.data;
    },

    onReply: async function () {
      if (!(this.text.trim().length > 2 && !this.createPostRequestIsActive))
        return false;

      this.createPostRequestIsActive = true

      const request = await this.$repository.share.createReplyComment({
        post: this.uuid,
        comment: this.comment.comment_id,
        data: {
          comment: this.text,
          networkId: this.$route.params.id,
        },
      });

      if (request.success) {
        this.onShowReply();
        this.text = "";

        this.comment = Object.assign(this.comment, {
          reply_comment_count: this.comment.reply_comment_count + 1,
        });


      }

      this.createPostRequestIsActive = false
    },

    showReply() {
      this.reply = !this.reply;
      if (this.reply) this.onShowReply();
    },
  },
}