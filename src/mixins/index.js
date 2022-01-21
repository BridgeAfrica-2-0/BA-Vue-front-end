
import { mapGetters, mapActions, mapMutations } from "vuex";
import { formatNumber, fromNow } from "@/helpers";

import NotFound from "@/components/NotFoundComponent"
import NoMoreData from "@/components/businessOwner/PaginationMessage"
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'


export { Redis, Pusher } from './notifications.mixins'

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

export const NoMoreDataForComment = {
  components: {
    NoMoreData
  },
  data: () => ({
    hasData: true,
    page: 1
  })
}

export const WhoIsIt = {
  computed: {
    ...mapGetters({
      profile: 'auth/profilConnected',
      token: 'auth/getAuthToken'
    })
  },

  methods: {
    ...mapMutations({
      auth: 'auth/profilConnected',
    }),
    async getAuth() {

      const type = ([
        'NetworkEditors',
        'networks',
        "Membar Network Follower",
        "memberNetwork",].includes(this.$route.name)) ? this.$route.params.id : null

      const response = await this.$repository.share.WhoIsConnect({ networkId: type, type });
      if (response.success) this.auth(response.data);
      
    },
  },

  created() {
    this.getAuth()
  }
}

export const knowWhoIsConnected = {

  methods: {
    ...mapMutations({
      auth: 'auth/profilConnected',
    }),
    async getAuth() {
      const type = ([
        'NetworkEditors',
        'networks',
        "Membar Network Follower",
        "memberNetwork"].includes(this.$route.name)) ? this.$route.params.id : null

      const response = await this.$repository.share.WhoIsConnect({ networkId: type, type });

      if (response.success) this.auth(response.data);
    },
  },

  created() {
    this.getAuth()
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
      loadComment: false,
      replyCommentHasBeload: false,
      loading: false
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
      let data = { comment: this.comment.id }

      if ([
        'NetworkEditors',
        'networks',
        "Membar Network Follower",
        "memberNetwork",].includes(this.$route.name))
        data = Object.assign(data, { network: this.profile.id })

      const request = await this.$repository.share.commentLike(data);

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
      this.loadComment = true;
      const request = await this.$repository.share.fetchReplyComment({
        post: this.uuid,
        comment: this.comment.id,
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

      let data = { comment: this.text }
      if ([
        'NetworkEditors',
        'networks',
        "Membar Network Follower",
        "memberNetwork",].includes(this.$route.name))
        data = Object.assign(data, { networkId: this.profile.id })

      const request = await this.$repository.share.createReplyComment({
        post: this.uuid,
        comment: this.comment.id,
        data
      });

      if (request.success) {
        this.comments = [request.data, ...this.comments]

        this.text = "";

        this.comment = Object.assign(this.comment, {
          reply_comment_count: this.comment.reply_comment_count + 1,
        });
      }

      this.createPostRequestIsActive = false
      this.loadComment = false
    },

    showReply() {
      const state = !this.reply;
      this.reply = state

      if (!this.replyCommentHasBeload)
        this.replyCommentHasBeload = true

      if (state) this.onShowReply();
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
        comment: this.comment.id,
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
        comment: this.comment.id,
        page: 1,
      });


      if (request.success) this.comments = request.data;
    },

    onReply: async function () {
      if (!(this.text.trim().length > 2 && !this.createPostRequestIsActive))
        return false;

      this.createPostRequestIsActive = true

      let data = { comment: this.text }

      if ([
        'NetworkEditors',
        'networks',
        "Membar Network Follower",
        "memberNetwork",].includes(this.$route.name))
        data = Object.assign(data, { networkId: this.$route.params.id });

      const request = await this.$repository.share.createReplyComment({
        post: this.uuid,
        comment: this.comment.id,
        data
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

export const isYourOwnPostMixins = {

  computed: {
    isYourOwnPost() {
      return (this.profile.id == this.item.user_id) && (this.profile.user_type == this.item.poster_type)
    },
    ...mapGetters({
      profile: 'auth/profilConnected',
    }),

  }
}

export const PostComponentMixin = {

  methods: {
    checkMediaType(media) {
      return media.split('/')[0];
    },
    
    mapmediae(media) {
      let mediaarr = [];

      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type != 'video') {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },

    mapvideo(media) {
      let mediaarr = [];
      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type == 'video') {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },
  }
}

export const AllPostFeatureMixin = {
  mixins: [PostComponentMixin],
}


export const defaultCoverImage = {

  data: () => ({
    limit: 1117,
    currentAuthType: null,
    strategy: null,
    isMobile: false,
    placeholderImage: null
  }),

  created() {
    this.strategy = {
      mobile:{
        
        business: () =>  {
          this.placeholderImage = '/covers/business-msg-en.png'
          return "fr" == this.$i18n.locale
            ? ['/covers/business-one.png','/covers/business-two.jpg','/covers/business-tree.jpg']
            : ['/covers/business-one.png','/covers/business-two.jpg','/covers/business-tree.jpg']
        },
        
        profile: () => { 
          return "fr" == this.$i18n.locale
          ? ['/covers/profile mobile FR.png']
          : ['/covers/profile mobile.png']
        }

      },

      desktop:{
        
        business: () =>  {
          this.placeholderImage = '/covers/business-msg-en.png'
          return "fr" == this.$i18n.locale
            ? ['/covers/business-one.png','/covers/business-two.jpg','/covers/business-tree.jpg']
            : ['/covers/business-one.png','/covers/business-two.jpg','/covers/business-tree.jpg']
        },
        
        profile: () => {
          return "fr" == this.$i18n.locale
          ? ['/covers/profile FR.png']
          : ['/covers/profile.png']
        }
      }
    }

    window.addEventListener("resize", this.onChangeSize);
  },

  destroyed() {
    window.removeEventListener("resize", this.onChangeSize);
  },

  watch: {
    "$i18n.locale": function(){

    }
  },

  computed:{
    
    getPlaceHolderImage(){
      return this.placeholderImage;
    },

    getCustomCover(){
      try{
        return this.strategy[this.isMobile ? "mobile" : "desktop"][this.currentAuthType]()
      }catch(error){
        console.log(error)
      }  
    }
  },
  
  methods: {
    onChangeSize(e) {
      const newWidth = document.documentElement.clientWidth;
      this.updateStatus(newWidth)
    },

    updateStatus(width){
      this.isMobile = (width <= this.limit) ? true : false
    },

  }
}

export const ResizeMediaImage = {

  computed: {
    getStyle() {
      return ['network'].includes(this.type) ? "width: 226px !important;height: 226px !important" : "width: 250px !important;height: 250px !important"
    }
  },

  data:() => ({
    style: null
  }),

  mounted() {
    window.addEventListener("resize", this.onResize);
  },

  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },


  methods: {
    onResize(){
      const newWidth = document.documentElement.clientWidth;
      //console.log(newWidth)
    }
  }
}