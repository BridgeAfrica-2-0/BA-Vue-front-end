<template>
  <div class="body" ref="wrapper">
    <navbar />
    <div v-if="isloaded"  >
      <Profile  :key="foll_id"  v-if="info || isBblock==0" class="wahala" />
      <notFound v-else />
      <Footer />   
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import notFound from "@/components/404";
import Profile from "../components/follower/follower";
import Footer from "../components/footer";
export default {
  name: "Home",
  components: {
    navbar,
    Profile,
    Footer,
    notFound,
  },
  data() {
    return {
      isloaded: false,
      foll_id:'',
    };
  },
  computed: {
    info: function () {
      let user = this.$store.getters["follower/getUserPostIntro"];
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

    profile: function () {
      return this.$store.getters["follower/getUserPostIntro"];
    },
  },

   beforeRouteUpdate(to, from, next) {

    this.foll_id = to.params.id;
    next();
  },

  created() {

    let loader = this.$loading.show({
      container: this.$refs.wrapper,
      canCancel: true,
      onCancel: this.onCancel,
      color: "#e75c18",
    });

    this.foll_id = this.$route.params.id;

    this.$store
      .dispatch("follower/loadUserPostIntro", this.foll_id)
      .then((response) => {
        this.isloaded = true;
        loader.hide()
      })
      .catch((error) => {
        loader.hide()
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
