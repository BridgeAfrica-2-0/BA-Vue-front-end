<template>
 <div v-if="islogin" >

    <h6>
      {{ $t("search.Sponsored_Result") }}
      <fas-icon class="icons" :icon="['fas', 'exclamation-circle']" size="lg" />
    </h6>
  
    <div>
      <Sponsor />
    </div>
    <h6>
      <fas-icon class="icons" :icon="['fab', 'readme']" size="lg" />
      {{ $t("search.Posting") }}
    </h6>
  
    <Postskeleton :loading="loaderState" />
     <Postskeleton :loading="loaderState" />
     <div class="text-center">  
    <Loader v-if="!pageHasLoad || loaderState" />
     </div>
    <NotFound v-if="!posts.length && !loaderState" :title="title" />
    <div v-else>
      <Post
        v-for="(item, index) in posts"
        :key="index"
        :post="item"
        :mapvideo="() => mapvideo(item.media)"
        :mapmediae="() => mapmediae(item.media)"
        :businessLogo="item.logo_path"
        :editPost="(f) => f"
        :deletePost="(f) => f"
        :isDisplayInSearch="true"
      />
    </div>
    <ScrollLoader
      :loading="loadingIsActive"
      color="#ced4da"
      v-if="this.getKeywork"
    />


  </div>

   <div v-else> 
    <login />
  </div>


</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

import Sponsor from "@/components/search/sponsoredBusiness";
import { loader, search, PostComponentMixin } from "@/mixins";
import Postskeleton from "@/components/Postskeleton";
import Post from "@/components/businessOwner/ownerPostComponent";
import Loader from "@/components/Loader";
import login from "@/components/search/login";

export default {
  mixins: [loader, search, PostComponentMixin],
  components: {
    Sponsor,
    Post,
    login, Postskeleton,
        Loader,
  },

  data: () => ({
    pageHasLoad: false,
    islogin:true,
  }),

  destroyed() {
    if (this.$route.query.uuid) {
      let query = Object.assign({}, this.$route.query);
      delete query.uuid;
      this.$router.replace({ query });
    }
  },

  watch:{
    "$store.state.search.page":function(newVal){
      if ( 1 == newVal)
        this.haveNotData = false
    }
  },

  computed: {
    ...mapGetters({
      posts: "search/GET_RESULT_POST",
      getPage: "search/GET_CURRENT_PAGINATION_PAGE",
      getStack: "search/STACK_VALUE",
      getKeywork: "search/POST_KEYWORD",
    }),

    loadingIsActive: function () {
      return this.loaderState && this.posts.length ? true : false;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.onscroll);
  },

  created() {

    this.islogin=this.$store.getters["auth/isLogged"];

    if (this.$store.getters["auth/isLogged"])
      this.getAuth();
    
    if (this.$route.query.uuid) {
      this.singlePost();
      return true;
    }

    
    this.init();
  },

  methods: {
    ...mapActions({
      postStore: "search/FIND_POST",
      page: "search/SET_CURRENT_PAGINATION_PAGE",
      setCallback: "search/SET_CURRENT_PAGINATE_CALLBACK",
      stack: "search/STACK_VALUE",
    }),

    ...mapMutations({
      auth: "auth/profilConnected",
    }),

    async singlePost() {
      this.setLoaderState(true);
      const response = await this.$repository.post.single({
        uuid: this.$route.query.uuid,
      });

      if (response.success) {
        this.setLoaderState(false);
        this.postStore(response.data);
      }
    },

    async getAuth() {
      const type = [
        "NetworkEditors",
        "networks",
        "Membar Network Follower",
        "memberNetwork",
      ].includes(this.$route.name)
        ? this.$route.params.id
        : null;

      const response = await this.$repository.share.WhoIsConnect({
        networkId: type,
        type,
      });
      if (response.success) this.auth(response.data);

      this.pageHasLoad = true;
    },

    init: async function () {
      this.stack({
        data: {
          keyword: "",
        },
        page: 1,
      });
      this.setLoaderState(true);

      this.setCallback(this.$repository.search.findPostByKeyword);

      const request = await this.$repository.search.findPostByKeyword({
        data: {
          keyword: this.$route.query.keyword ? this.$route.query.keyword : "",
        },
        page: 1,
      });

      if (request.success) {
        if (request.data.length) {
          this.postStore(request.data);
          this.page(this.getPage + 1);
        }
      }
      this.pageHasLoad = true;
      this.setLoaderState(false);
    },

    onscroll: async function (event) {
      if (!this.getKeywork) return false;
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;

      if (
        this.callback &&
        (bottomOfPage || pageHeight < visible) &&
        !this.loaderState &&
        !this.haveNotData
      ) {
        this.setLoaderState(true);

        const request = await this.callback({
          ...this.getStack,
          page: this.getPage,
        });

        if (request.success) {
          if (request.data.length) {
            this.postStore(request.data);
            this.page(this.getPage + 1);
          } else this.haveNotData = true;
        }

        this.setLoaderState(false);
      }
    },
  },
};
</script>