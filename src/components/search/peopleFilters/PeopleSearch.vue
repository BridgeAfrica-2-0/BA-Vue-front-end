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
      <ShareButton />

      People
    </h6>

    <NotFound v-if="!peoples.length" :title="title" />
    <div v-else>
      <People
        v-for="(people, index) in peoples"
        :people="people"
        :key="index"
      />
    </div>
    <p class="text-center" v-if="haveNotData">Not Data</p>
    <Loader :loading="loading" color="#ced4da"></Loader>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { loader, search } from "@/mixins";

import Sponsor from "@/components/search/sponsoredBusiness";
import People from "@/components/search/people";
import { ShareButton } from "@/components/shareButton";

export default {
  mixins: [loader, search],
  components: {
    Sponsor,
    People,
    ShareButton,
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
        !this.loading &&
        !this.haveNotData
      ) {
        this.loading = true;

        const request = await this.callback({
          ...this.getStack,
          page: this.getPage,
        });

        if (request.success) {
          if (request.data.length) {
            this.userStore(request);
            this.page(this.getPage + 1);
          } else this.haveNotData = true;
        }

        this.loading = false;
      }
    },
  },
};
</script>