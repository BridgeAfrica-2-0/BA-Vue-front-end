
// import * as firebase from 'firebase/app';

// import 'firebase/messaging';

import { mapGetters, mapActions, mapMutations } from "vuex";
import { formatNumber, fromNow } from "@/helpers";

import NotFound from "@/components/NotFoundComponent"
import NoMoreData from "@/components/businessOwner/PaginationMessage"
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'


export const notification = {
  data() {
    return {
      title: '',
      from: '',
      subject: '',
      userimg: '',
      currentMessage: '',
    };
  },

  methods: {
    receiveMessage() {
      // console.log("call echo firebase")
      // try {
      //   firebase.messaging().onMessage((payload) => {
      //     // debugger
      //     this.currentMessage = payload;
      //     console.log(this.currentMessage);
      //     let message;
      //     message = payload.data.username + ':\n\n' + payload.data.message;
      //     this.setNotificationBoxForm(payload.data.shipmentWallNumber, payload.data.username, payload.data.message);
      //     console.log(message);
      //   });
      // } catch (e) {
      //   console.log(e);
      // }
    },

    setNotificationBoxForm(title, from, subject) {
      this.title = title;
      this.from = from;
      this.subject = subject;

      const message = `<span><b>${this.from}</b></span><br>${this.subject}`;

      // this.$notify({
      //   group: 'foo',
      //   type: 'success',
      //   title: this.title,
      //   text: message,
      //   duration: 5000,
      // });
    },
  },

  created() {
    console.info('create notification info');
  },
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
      loadComment: false
    };
  },

  created() {
    this.comment = this.item;
  },

  computed: {
    ...mapGetters({
      profile: 'auth/profilConnected',
    }),
    icon() {
      return this.comment.is_liked ? "suit-heart-fill" : "suit-heart";
    },
  },

  filters: {
    nFormatter: formatNumber,
    now: fromNow,
  },

  methods: {
    ...mapMutations({
      auth: 'auth/profilConnected',
    }),

    onLike: async function () {
      const request = await this.$repository.share.commentLike({
        comment: this.comment.comment_id,
        network: this.profile.id,
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
        page: this.page,
      });

      if (request.success) {
        this.comments = [...this.comments, ...request.data];
        this.hasData = request.data.length ? true : false;
        this.page = request.data.length ? this.page + 1 : this.page;
      }

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
          networkId: this.profile.id,
        },
      });

      if (request.success) {
        this.page = 1
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

export const NoMoreDataForComment = {
  components: {
    NoMoreData
  },
  data: () => ({
    hasData: true,
    page: 1
  })
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
        network: this.profile.id,
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
          networkId: this.profile.id,
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

export const system = {

  methods: {
    ...mapMutations({
      newNotificationBusiness: "notification/NEW_BUSINESS_NOTIFICATION",
      newNotificationProfile: "notification/NEW_PROFILE_NOTIFICATION",
      newNotificationNetwork: "notification/NEW_NETWORK_NOTIFICATION",
    }),

    notification() {
      window.Echo.private('chat')
        .listen('MessageSent', (e) => {
          console.log(e)
        });
    }
  },

  ready() {
    var channel = this.$pusher.subscribe('dashboard');

    channel.bind('user.log', ({ log }) => {
      console.log(`User ${log.user.name} has ${log.action} at ${log.time}`);
    });
  },

  created() {
    console.log("call echo larave-echo")
    // this.notification()
  }
}