<template>
  <div>
    <b class="social">{{ $t("profilefollower.Web_Soial_Links") }}</b>
    <hr />

    <!-- {{info}}  -->

    <div v-for="website in info.user_websites" :key="website.id">
      <fas-icon class="primary float-left mr-1 mt-1" :icon="['fas', 'globe']" />
      <a
        :href="website"
        @click="redirect(website.website_url)"
        target="_blank"
        >{{ website.website_url }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      socialSelected: null,
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" }
      ],
      socials: [
        { value: null, text: "Select" },
        { value: "instagram", text: "Instagram" },
        { value: "facebook", text: "FaceBook" },
        { value: "twitter", text: "Twitter" },
        { value: "google-plus", text: "Google+" }
      ]
    };
  },

  computed: {
    info() {
      return this.$store.state.follower.profileIntro;
    }
  }
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: #e75c18;
  font-size: 14px;
}
.link-1 {
  text-decoration: none;
  position: relative;
  font-size: 14px;
  top: 10px;
}
.social {
  font-size: 14px;
  font-family: Helvetica;
}
@media only screen and (max-width: 768px) {
  .social {
    margin-left: 20px;
    font-size: 12px;
    font-family: Helvetica;
  }
}
</style>
