<template>
  <div>
    <navbar></navbar>
    <head-page></head-page>
    <b-container fluid="md" class="text-justify mx-auto mt-4 corps">
      <b-row>
        <b-col cols="12">
          <b-tabs content-class="mt-3" pills card small fill>
            <b-tab title="Posts" active>
              <Post />
            </b-tab>
            <b-tab title="About"><About /></b-tab>
            <b-tab title="Business"><p>I'm the second tab</p></b-tab>
            <b-tab title="Media"><Media /></b-tab>
            <b-tab title="Following"><p>I'm the second tab</p></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import headPage from "@/components/headPage";
import Post from "@/components/owner/tabs/posts";
import About from "@/components/owner/tabs/about";
import Media from "@/components/owner/tabs/media";
import Footer from "@/components/footer";

export default {
  name: "Home",
  components: {
    navbar,
    headPage,
    Post,
    About,
    Media,
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
.corps {
  margin-top: 2rem !important;
}
</style>
