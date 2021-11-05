<template>
  <div class="body">
    <navbar />
    <Profile />
    <Footer />
    <span class="display-inline">
        <b-link @click="$i18n.locale = 'en'"> {{ $t("auth.english") }}</b-link>
        <span class="vl"></span>
        <b-link class="ml-2" @click="$i18n.locale = 'fr'">
          {{ $t("auth.french") }}
        </b-link>
      </span>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import Profile from "../components/follower/follower";
import Footer from "../components/footer";
export default {
  name: "Home",
  components: {
    navbar,
    Profile,
    Footer
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
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
