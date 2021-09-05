<template>
  <div>
    <b-row>
      <b-col md="4">
        <Intro />
        <Followers />
        <Media />
      </b-col>
      <b-col md="8">
        <Post />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "../../intro";
import Followers from "../../followers";
import Media from "../../media";
import Post from "../../post";
export default {
  name: "posts",
  components: {
    Intro,
    Followers,
    Media,
    Post
  }
};
</script>

<style scoped></style>
