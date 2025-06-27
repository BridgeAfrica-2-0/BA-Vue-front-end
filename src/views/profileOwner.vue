<template>
  <div class="mx-auto" style="overflow-x: clip;">
    <navbar></navbar>
    <head-page></head-page>
    <ProfileCover />
    <div class="container text-justify corps prof center-content wahala">
      <b-row class="">
        <b-col cols="12" class="p-3">
          <CustomTabs
            v-model="tabIndex"
            :tabs="[
              { title: 'Likes', slot: 'likes' },
              { title: $t('profileowner.About'), slot: 'about' },
              { title: 'Boutique', slot: 'boutique' },
              { title: $t('profileowner.Posts'), slot: 'posts' },
              { title: $t('profileowner.Media'), slot: 'media' },
              { title: $t('profileowner.Community'), slot: 'community' }
            ]"
          >
            <template #likes><Likes /></template>
            <template #about><About /></template>
            <template #boutique><Boutique /></template>
            <template #posts
              ><Post @on:media="value => goToMedia(value)"
            /></template>
            <template #media><Media type="profile"/></template>
            <template #community><Following /></template>
          </CustomTabs>
        </b-col>
      </b-row>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import headPage from "@/components/ownerHeadpage";
import Post from "@/components/owner/tabs/posts";
import About from "@/components/owner/tabs/about";
import Media from "@/components/owner/tabs/media";
import Networks from "@/components/owner/tabs/networks";
import Following from "@/components/owner/tabs/memberNetwork";
import Bussiness from "@/components/owner/tabs/bussiness";
import Likes from "../components/owner/tabs/likes.vue";
import Boutique from "../components/owner/tabs/boutique.vue";
import ProfileCover from "../components/site/profile-cover.vue";
import SiteFooter from "../components/site/siteFooter.vue";
import CustomTabs from "../components/site/customTabs.vue";
import boutique from "../components/owner/tabs/boutique.vue";
import { mapGetters, mapMutations } from "vuex";

import { WhoIsIt } from "@/mixins";

export default {
  name: "profileOwner",
  mixins: [WhoIsIt],
  components: {
    Following,
    navbar,
    ProfileCover,
    headPage,
    Post,
    About,
    Media,
    Likes,
    SiteFooter,
    Boutique,
    CustomTabs
  },
  data() {
    return {
      tabIndex: 0,
      tabs: [
        "#likes",
        "#about",
        "#boutique",
        "#post",
        "#business",
        "#media",
        "#community"
      ]
    };
  },

  watch: {
    $route(to, from) {
      console.log(to.hash);
      this.tabIndex = this.tabs.findIndex(tab => tab === to.hash);
    },

    tabIndex(newvalue) {
      localStorage.setItem("profileTab", newvalue);
    }
  },

  methods: {
    ...mapMutations({
      auth: "auth/profilConnected"
    }),

    goToMedia(value) {
      if (value) this.tabIndex = 2;

      console.log("go to media");
    },

    async getAuth() {
      const response = await this.$repository.share.switch(null, "reset");

      if (response.success) this.auth({ ...this.user.user, user_type: "user" });
    },

    ownerPost() {
      this.$store
        .dispatch("UserProfileOwner/ownerPost", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    }
  },
  computed: {
    ...mapGetters({
      user: "auth/user"
    })
  },

  created() {
    let loader = this.$loading.show({
      container: this.$refs.formContainer,
      canCancel: true,
      onCancel: this.onCancel,
      color: "#e75c18"
    });
    this.getAuth();

    // Always default to 0 (Likes) if nothing valid is found
    let found = 0;
    if (this.$route.hash) {
      const idx = this.tabs.findIndex(tab => tab === this.$route.hash);
      if (idx !== -1) found = idx;
    } else {
      let tab = localStorage.getItem("profileTab");
      if (tab !== null && !isNaN(Number(tab))) {
        found = Number(tab);
      }
    }
    this.tabIndex = found;

    this.$store
      .dispatch("profile/loadUserPostIntro", null)
      .then(response => {
        loader.hide();
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        loader.hide();
      });
  },
  mounted() {
    this.$store
      .dispatch("profile/Tcommunity", null)
      .then(response => {})
      .catch(error => {
        console.log({ error: error });
      });
  }
};
</script>

<style scoped>
@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
  }
  .corps {
    margin-top: 2rem !important;
  }
}
@media (min-width: 576px) {
  .lb-grid {
    height: 300px;
  }
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
}
@media (min-width: 1200px) {
  .lb-grid {
    height: 500px;
  }
  .corps {
    margin-top: 2rem !important;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }

  .corps {
    margin-top: 2rem !important;
  }

  .toto {
    font-size: x-large;
    font-weight: 600;
  }
}

/* @media (min-width: 768px) {
  .center-content {
    padding-left: 64px;
    padding-right: 64px;
  }
} */
</style>
