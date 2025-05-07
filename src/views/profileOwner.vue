<template>
  <base-layout>
    <template v-slot:main>
      <div class="mx-auto" style="overflow-x: clip;">
      
        <head-page></head-page>
        <div class="container text-justify corps prof center-content wahala">
          <b-row class="">
            <b-col cols="12" class="p-3">
              <b-tabs content-class="mt-3" pills small fill lazy v-model="tabIndex">
                <b-tab :title="$t('profileowner.Posts')" href="#post">
                  <Post @on:media="value => goToMedia(value)" />
                </b-tab>
                <b-tab :title="$t('profileowner.About')" href="#about">
                  <About />
                </b-tab>

                <b-tab :title="$t('profileowner.Media')" href="#media">
                  <Media type="profile" />
                </b-tab>

                <b-tab :title="$t('profileowner.Business')" href="#business" class="m-0 p-0">
                  <Bussiness />

                </b-tab>

                <b-tab :title="$t('profileowner.Networks')">
                  <Networks />
                </b-tab>

                <b-tab :title="$t('profileowner.Community')" href="#community" class="m-0 p-0">
                  <Following />
                </b-tab>
              </b-tabs>
            </b-col>
          </b-row>
        </div>
      </div>
    </template>
  </base-layout>
</template>

<script>
import navbar from "@/components/navbar";
import Footer from "@/components/footer";
import headPage from "@/components/ownerHeadpage";
import Post from "@/components/owner/tabs/posts";
import About from "@/components/owner/tabs/about";
import Media from "@/components/owner/tabs/media";
import Networks from "@/components/owner/tabs/networks";
import Following from "@/components/owner/tabs/memberNetwork";
import Bussiness from "@/components/owner/tabs/bussiness";
import { mapGetters, mapMutations } from "vuex";

import { WhoIsIt } from "@/mixins";

import BaseLayout from "@/layouts/Layout"

export default {
  name: "profileOwner",
  mixins: [WhoIsIt],
  components: {
    BaseLayout,
    Bussiness,
    Following,
    headPage,
    Post,
    About,
    Media,
    Networks
  },
  data() {
    return {
      tabIndex: null,
      tabs: ["#post", "#about", "#business", "#media", "#community"]
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
    if (this.$route.hash) {
      this.tabIndex = this.tabs.findIndex(tab => tab === this.$route.hash);
    } else {
      let tab = localStorage.getItem("profileTab");

      if (tab) {
        this.tabIndex = tab;
      }
    }

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
      .then(response => { })
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
