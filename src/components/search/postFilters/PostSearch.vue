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

    <!--<b-col col="12" v-if="posts.length">
      <infinite-loading @infinite="postScroll" slot="append" spinner="waveDots">
        <div class="text-red" slot="no-more">No More Request</div>
        <div class="text-red" slot="no-results">No More Request</div>
      </infinite-loading> 
    </b-col>-->
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
    this.getNext();
  },

  methods: {
    ...mapActions({
      postStore: "search/FIND_POST",
      lauchLoader: "search/LOADING",
      page: "search/SET_CURRENT_PAGINATION_PAGE",
    }),

    getNext() {
      window.onscroll = () => {
        try {
          let bottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight;
          console.log(
            document.documentElement.scrollTop,
            window.innerHeight,
            document.documentElement.offsetHeight
          );

          console.log("stest scrool", bottomOfWindow);
          if (bottomOfWindow) {
            this.postScroll();
          }
        } catch (error) {
          console.log(error);
        }
      };
    },

    async postScroll() {
      if (this.callback)
        try {
          //this.lauchLoader(true);
          const request = await this.callback({
            ...this.getStack,
            page: this.getPage,
          });

          if (request.length) {
            console.log("data");
            this.postStore(request);

            //this.page(this.getPage + 1);
          } else {
            console.log("no data");
          }

          //this.lauchLoader(false);
        } catch (error) {
          console.log(error);
          //this.lauchLoader(false);
        }
    },
  },
};
</script>