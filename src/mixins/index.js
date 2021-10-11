
import { mapGetters, mapActions } from "vuex";

import NotFound from "@/components/NotFoundComponent"

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
  },
  computed: {
    ...mapGetters({
      loading: 'search/LOADING'
    })
  },

  data: () => ({
    overlay: null
  }),
  watch: {
    loading: function (newValue) {
      if (newValue) {
        this.overlay = this.$loading.show({
          container: this.$refs.formContainer,
          canCancel: true,
        });
      } else {
        this.overlay.hide()
      }

    }
  }
}

export const search = {
  components: {
    NotFound
  },
  props: {
    title: {
      type: String
    }
  },

  data: () => ({
    endLoading: false
  }),

  destroyed() {
    this.page(1);
    this.$store.commit('search/RESET_RESULT')
    window.removeEventListener('scroll', this.onscroll)
  },

  computed: {
    ...mapGetters({
      callback: "search/GET_CURRENT_PAGINATE_CALLBACK",
      getStack: "search/STACK_VALUE",
      canScrool: "search/END_INITIAL_REQUEST",
      loadingHasActivated: "search/LOADING",
    }),
  },
  methods: {
    ...mapActions({
      lauchLoader: "search/LOADING",
      page: "search/SET_CURRENT_PAGINATION_PAGE",
    }),
  }
}