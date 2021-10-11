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
    <NotFound v-if="!posts.length" :title="title" />
    <Post v-for="(post, index) in posts" :post="post" :key="index" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Sponsor from "@/components/search/sponsoredBusiness";
import { loader, search } from "@/mixins";

import Post from "@/components/search/posts";

export default {
  mixins: [loader, search],
  components: {
    Sponsor,
    Post,
  },

  computed: {
    ...mapGetters({
      posts: "search/GET_RESULT_POST",
      getPage: "search/GET_CURRENT_PAGINATION_PAGE",
      getStack: "search/STACK_VALUE",
    }),
  },

  mounted() {
    window.addEventListener("scroll", this.onscroll);
  },

  methods: {
    ...mapActions({
      postStore: "search/FIND_POST",
      lauchLoader: "search/LOADING",
      page: "search/SET_CURRENT_PAGINATION_PAGE",
    }),

    onscroll: async function (event) {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;

      if (
        this.callback &&
        (bottomOfPage || pageHeight < visible) &&
        !this.endLoading &&
        !this.loadingHasActivated
      ) {
        this.lauchLoader(true);
        const request = await this.callback({
          ...this.getStack,
          page: this.getPage,
        });

        if (request.length) {
          this.postStore(request);
          this.page(this.getPage + 1);
        } else this.endLoading = true;

        console.log("At the bottom");
        this.lauchLoader(false);
      }
    },
  },
};
</script>