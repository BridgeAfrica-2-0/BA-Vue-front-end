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

    <div infinite-wrapper>
      <div style="overflow: auto">
        <People
          v-for="(people, index) in peoples"
          :people="people"
          :key="index"
        />
        <NotFound v-if="!peoples.length" :title="title" />
        <infinite-loading
          @infinite="peopleScroll"
          spinner="circles"
          v-if="peoples.length"
        >
          <div class="text-red" slot="no-more">No More Request</div>
          <div class="text-red" slot="no-results">No More Request</div>
        </infinite-loading>
      </div>
    </div>
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

  destroyed() {
    this.page(1);
  },
  computed: {
    ...mapGetters({
      peoples: "search/GET_RESULT_USER",
      canScrool: "search/END_INITIAL_REQUEST",
      getPage: "search/GET_CURRENT_PAGINATION_PAGE",
    }),
  },

  methods: {
    ...mapActions({
      userStore: "search/FIND_USER",
      lauchLoader: "search/LOADING",
      page: "search/SET_CURRENT_PAGINATION_PAGE",
    }),

    async peopleScroll($state) {
      console.log("yes");
      try {
        this.lauchLoader(true);
        this.busy = true;
        const request = await this.callback({
          ...this.getStack,
          page: this.getPage,
        });

        if (request.length) {
          $state.loaded();
          this.userStore(request);
          //this.page(this.getPage + 1);
        } else $state.complete();

        this.lauchLoader(false);
      } catch (error) {
        console.log(error);
        this.lauchLoader(false);
      }
    },
  },
};
</script>