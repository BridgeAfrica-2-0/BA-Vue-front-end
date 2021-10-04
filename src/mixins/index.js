import { mapGetters } from "vuex";
import NotFound from "@/components/NotFoundComponent"

export const loader = {
  components: {
    NotFound
  },
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
    loading: function (newValue, oldValue) {

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