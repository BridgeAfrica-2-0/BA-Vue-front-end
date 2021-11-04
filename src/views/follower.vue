<template>
  <div class="body">
    <span v-if="isloaded">
      <navbar />

      <Profile v-if="info" />

      <notFound v-else />

      <Footer />
    </span>
  </div>
</template>

<script>
import navbar from '@/components/navbar';
import notFound from '@/components/404';
import Profile from '../components/follower/follower';
import Footer from '../components/footer';
export default {
  name: 'Home',
  components: {
    navbar,
    Profile,
    Footer,
    notFound,
  },
  data() {
    return {
      isloaded: false,
    };
  },
  computed: {
    info: function() {
      let user = this.$store.getters['follower/getUserPostIntro'];
      if (this.isloaded) {
        if (Object.keys(user.user).length) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },

    profile: function() {
      return this.$store.getters['follower/getUserPostIntro'];
    },
  },

  created() {
    this.foll_id = this.$route.params.id;

    this.$store
      .dispatch('follower/loadUserPostIntro', this.foll_id)
      .then(response => {
        this.isloaded = true;
      })
      .catch(error => {
        console.log({ error: error });
      });
  },
  methods: {},
};
</script>

<style scoped>
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}

.body {
  overflow-x: hidden;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>
