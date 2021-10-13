
import { mapGetters, mapActions } from "vuex";

import NotFound from "@/components/NotFoundComponent"
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

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
    NotFound,
    Loader: ClipLoader
  },
  props: {
    title: {
      type: String
    }
  },

  data: () => ({
    loading: false,
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
      canScrool: "search/END_INITIAL_REQUEST",
    }),
  },
  methods: {
    ...mapActions({
      lauchLoader: "search/LOADING",
      page: "search/SET_CURRENT_PAGINATION_PAGE",
    }),
  }
}