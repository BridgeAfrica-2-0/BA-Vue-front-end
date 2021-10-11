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
      <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
      People
    </h6>

    <NotFound v-if="!peoples.length" :title="title" />

    <People v-for="(people, index) in peoples" :people="people" :key="index" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { loader, search } from "@/mixins";

import Sponsor from "@/components/search/sponsoredBusiness";
import People from "@/components/search/people";

export default {
  mixins: [loader, search],
  components: {
    Sponsor,
    People,
  },

  computed: {
    ...mapGetters({
      peoples: "search/GET_RESULT_USER",
      canScrool: "search/END_INITIAL_REQUEST",
      getPage: "search/GET_CURRENT_PAGINATION_PAGE",
    }),
  },
  mounted() {
    window.addEventListener("scroll", this.onscroll);
  },
  methods: {
    ...mapActions({
      userStore: "search/FIND_USER",
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
          this.userStore(request);
          this.page(this.getPage + 1);
        } else this.endLoading = true;

        console.log("At the bottom");
        this.lauchLoader(false);
      }
    },
  },
};
</script>