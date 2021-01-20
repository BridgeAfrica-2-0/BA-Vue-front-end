<template>
  <div>
    <navbar></navbar>
    <head-page></head-page>
    <b-container fluid="sm" class="text-justify mx-auto" style="margin-top: 6rem !important;">
      <b-row>
        <b-col cols="12">
          <b-tabs content-class="mt-3" pills card small fill>
            <b-tab title="Posts" active class="m-0">
              <Post></Post>
            </b-tab>
            <b-tab title="About" class="m-0"><p>I'm the second tab</p></b-tab>
            <b-tab title="Business" class="m-0"><p>I'm the first tab</p></b-tab>
            <b-tab title="Media" class="m-0"><p>I'm the second tab</p></b-tab>
            <b-tab title="Following" class="m-0"><p>I'm the second tab</p></b-tab>
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

export default {
  name: "Home",
  components: {
    navbar,
    headPage,
    Post
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
