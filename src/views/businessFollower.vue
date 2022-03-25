<template>
  <div  style="overflow-x: clip;">
    <span v-if="isloaded">
      <navbar />
      <Business :key="foll_id"  class="wahala" />
      <Footer />
    </span>
  </div>
</template> 

<script>
import navbar from "@/components/navbar";
import Business from "../components/businessf/business";
import Footer from "../components/footer";

export default {
  name: "Home",
  props: ['isGuestUser'],
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
      tabs: ["#post", "#about", "#business", "#media", "#community"],
    };
  },

  beforeRouteUpdate(to, from, next) {

    this.foll_id = to.params.id;
    next();
  },

  
  created() {
    this.foll_id = this.$route.params.id;
    this.isloaded = true;
    if (!this.isGuestUser) {
    this.$store
      .dispatch("businessOwner/roleCheck", this.foll_id)
      .then((data) => {
        this.isloaded = true;
      })
      .catch((error) => {
        if (error.response.status == 404) {
          this.$router.push({ name: "notFound" });
        }
      });
    }

    //add guest user flag
    if (this.isGuestUser) {
      localStorage.setItem('isGuestUser', true);
    }
  },

  watch: {
    $route(to, from) {
      this.tabIndex = this.tabs.findIndex((tab) => tab === to.hash);

    },
  },
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