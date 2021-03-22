<template>
  <div class="mx-auto">
    <navbar></navbar>
    <head-page class="mt-header"></head-page>
    <b-container fluid="md" class="text-justify mx-auto mt-3">
      <b-row>
        <b-col cols="12">
          <b-tabs content-class="mt-3" pills card small fill>
            <b-tab title="Posts" active>
              <Post />
            </b-tab>
            <b-tab title="About"><About /></b-tab>
            <b-tab title="Business" class="m-0 p-0"
              ><bussiness></bussiness
            ></b-tab>
            <b-tab title="Media"><Media /></b-tab>
            <b-tab title="Following" class="m-0 p-0"
              ><following></following>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import headPage from "@/components/headPage";
import Post from "@/components/owner/tabs/posts";
import About from "@/components/owner/tabs/about";
import Media from "@/components/owner/tabs/media";
import Following from "@/components/owner/tabs/following";
import Bussiness from "@/components/owner/tabs/bussiness";

export default {
  name: "profileOwner",
  components: {
    Bussiness,
    Following,
    navbar,
    headPage,
    Post,
    About,
    Media
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
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
    margin-top: 6rem !important;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }

  .corps {
    margin-top: 6rem !important;
  }

  .toto {
    font-size: x-large;
    font-weight: 600;
  }
}
</style>
