<template>
  <div>
    <h6>
      Sponsored Result
      <fas-icon class="icons" :icon="['fas', 'exclamation-circle']" size="lg" />
    </h6>

    <div>
      <Sponsor />
    </div>
    <h6>
      <fas-icon class="icons" :icon="['fab', 'readme']" size="lg" />
      Posting
    </h6>
    <Loader v-if="!pageHasLoad || loaderState" />
    <NotFound v-if="!posts.length && !loaderState" :title="title" />
    <div v-else>
      <Post v-for="(post, index) in posts" :post="post" :key="index" />
    </div>

    <p class="text-center" v-if="haveNotData">Not Data</p>
    <ScrollLoader :loading="loadingIsActive" color="#ced4da" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Sponsor from '@/components/search/sponsoredBusiness';
import { loader, search } from '@/mixins';

import Post from '@/components/search/posts';
import Loader from '@/components/Loader';

export default {
  mixins: [loader, search],
  components: {
    Sponsor,
    Post,
    Loader,
  },

  data: () => ({
    pageHasLoad: false,
  }),

  computed: {
    ...mapGetters({
      posts: 'search/GET_RESULT_POST',
      getPage: 'search/GET_CURRENT_PAGINATION_PAGE',
      getStack: 'search/STACK_VALUE',
    }),

    loadingIsActive: function() {
      return this.loaderState && this.posts.length ? true : false;
    },
  },

  mounted() {
    window.addEventListener('scroll', this.onscroll);
  },

  created() {
    this.init();
  },

  methods: {
    ...mapActions({
      postStore: 'search/FIND_POST',
      page: 'search/SET_CURRENT_PAGINATION_PAGE',
      setCallback: 'search/SET_CURRENT_PAGINATE_CALLBACK',
      stack: 'search/STACK_VALUE',
    }),

    init: async function() {
      this.stack({
        data: {
          keyword: '',
        },
        page: 1,
      });
      this.setLoaderState(true);

      this.setCallback(this.$repository.search.findPostByKeyword);

      const request = await this.$repository.search.findPostByKeyword({
        data: {
          keyword: '',
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

    onscroll: async function(event) {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;

      if (this.callback && (bottomOfPage || pageHeight < visible) && !this.loaderState && !this.haveNotData) {
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
