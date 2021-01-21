<template>
  <div>
    <navbar></navbar>
    <head-page></head-page>
    <b-container fluid="md" class="text-justify" style="margin-top: 6rem !important;">
      <b-row>
        <b-col cols="12">
          <b-tabs content-class="mt-3" fill pills card>
            <b-tab title="Posts" active>
              <Post/>
            </b-tab>
            <b-tab title="About"><About/></b-tab>
            <b-tab title="Business"><Businesses/></b-tab>
            <b-tab title="Media"><Media/></b-tab>
            <b-tab title="Following"><Following/></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import headPage from "@/components/headPage";
import Post from "@/components/follower/tabs/posts";
import About from "@/components/follower/tabs/about";
import Media from "@/components/follower/tabs/media";
import Following from "@/components/follower/tabs/following"
import Businesses from "@/components/follower/tabs/businesses";

export default {
  name: "Home",
  components: {
    navbar,
    headPage,
    Post,
    About,
    Media,
    Following,
    Businesses
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
