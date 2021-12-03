<template>
  <div>
    <h6>
      {{ $t("search.Sponsored_Result") }}
      <fas-icon class="icons" :icon="['fas', 'exclamation-circle']" size="lg" />
    </h6>

    <div>
      <Sponsor />
    </div>
    <h6>
      <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
      {{ $t("search.People") }}
    </h6>
    <ShareButton :post="{ post_id: 1, user_id: 1 }" type="profile" />

    <Loader v-if="!pageHasLoad || loaderState" />
    <NotFound v-if="!peoples.length && !loaderState" :title="title" />

    <div v-else>
      <People
        v-for="(people, index) in peoples"
        :people="people"
        :key="index"
      />
    </div>

    <p class="text-center" v-if="haveNotData">{{ $t("search.Not_Data") }}</p>
    <ScrollLoader
      :loading="loadingIsActive"
      color="#ced4da"
      v-if="this.getKeywork"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

import { loader, search } from "@/mixins";

import Sponsor from "@/components/search/sponsoredBusiness";
import People from "@/components/search/people";

import { ShareButton } from "@/components/shareButton";

import Loader from "@/components/Loader";

export default {
  mixins: [loader, search],
  components: {
    Sponsor,
    People,
    ShareButton,
    Loader,
  },

  data: () => ({
    pageHasLoad: false,
  }),

  computed: {
    ...mapGetters({
      peoples: "search/GET_RESULT_USER",
      canScrool: "search/END_INITIAL_REQUEST",
      getPage: "search/GET_CURRENT_PAGINATION_PAGE",
      getKeywork: "search/POST_KEYWORD",
    }),

    loadingIsActive: function () {
      return this.loaderState && this.peoples.length ? true : false;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.onscroll);
  },

  created() {
    this.getAuth();
    this.init();
  },

  methods: {
    ...mapActions({
      userStore: "search/FIND_USER",
      page: "search/SET_CURRENT_PAGINATION_PAGE",
      setCallback: "search/SET_CURRENT_PAGINATE_CALLBACK",
      stack: "search/STACK_VALUE",
    }),

    ...mapMutations({
      auth: "auth/profilConnected",
    }),

    async getAuth() {
      const type = ["NetworkEditors", "networks"].includes(this.$route.name)
        ? this.$route.params.id
        : null;

      const response = await this.$repository.share.WhoIsConnect({
        networkId: type,
        type,
      });
      if (response.success) this.auth(response.data);
    },

    init: async function () {
      this.stack({
        data: {
          keyword: "",
        },
        page: 1,
      });
      this.setLoaderState(true);
      this.setCallback(this.$repository.search.findUserByParam);

      const request = await this.$repository.search.findUserByParam({
        data: {
          keyword: "",
        },
        page: 1,
      });

      if (request.success) {
        if (request.data.length) {
          this.userStore(request.data);
          this.page(this.getPage + 1);
        }
      }

      this.pageHasLoad = true;
      this.setLoaderState(false);
    },

    onscroll: async function () {
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
        console.log("on scrool");
        const request = await this.callback({
          ...this.getStack,
          page: this.getPage,
        });

        if (request.success) {
          if (request.data.length) {
            this.userStore(request.data);
            this.page(this.getPage + 1);
          } else this.haveNotData = true;
        }

        this.setLoaderState(false);
      }
    },
  },
};
</script>