<template>
  <div>
    <span v-if="isloaded">
      <navbar />
      <Business />
      <Footer />
    </span>
  </div>
</template>

<script>
import navbar from '@/components/navbar';
import Business from '../components/businessf/business';
import Footer from '../components/footer';

export default {
  name: 'Home',
  components: {
    navbar,
    Business,
    Footer,
  },
  data() {
    return {
      tabIndex: null,
      foll_id: null,
      isloaded: false,
      tabs: ['#post', '#about', '#business', '#media', '#community'],
    };
  },
  created() {
    this.foll_id = this.$route.params.id;

    this.$store
      .dispatch('businessOwner/roleCheck', this.foll_id)
      .then((data) => {
        this.isloaded = true;
      })
      .catch((error) => {
        console.log({ error: error });

        console.log(error.response.status);

        if (error.response.status == 404) {
          this.$router.push({ name: 'notFound' });
        }
      });
  },

  watch: {
    $route(to, from) {
      console.log(to.hash);
      this.tabIndex = this.tabs.findIndex((tab) => tab === to.hash);

      console.log(from);
    },
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}

@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>