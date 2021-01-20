<template>
  <div>
    <navbar></navbar>
    <head-page></head-page>
    <b-container fluid="md" class="text-justify" style="margin-top: 6rem !important;">
      <b-row>
        <b-col cols="12">
          <b-tabs content-class="mt-3" fill pills card>
            <b-tab title="Posts" active>
              <Post></Post>
            </b-tab>
            <b-tab title="About"><About/></b-tab>
            <b-tab title="Business"><p>I'm the first tab</p></b-tab>
            <b-tab title="Media"><p>I'm the second tab</p></b-tab>
            <b-tab title="Following"><p>I'm the second tab</p></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import headPage from "@/components/headPage";
import Post from "@/components/tabs/posts";
import About from "@/components/tabs/about";

export default {
  name: "Home",
  components: {
    navbar,
    headPage,
    Post,
    About
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
