import { mapGetters } from "vuex";

export const loader = {
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
            console.log('mixins', this.loading)
            if (newValue)
                this.overlay = this.$loading.show({
                    container: this.$refs.formContainer,
                    canCancel: true,
                });
            else
                this.overlay.hide()
        }
    }
}