<template>
  <div>
    <b-row>
      <b-col md="4">
        <Intro />
        <Invite />
        <Personalise />
      </b-col>
      <b-col md="8">
       <Post/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "../intro";
import Invite from "../invite";
import Personalise from "../personalise";
import Post from "../ownerPost";
export default {
  name: "posts",
  components: {
    Intro,
    Invite,

    Personalise,
    Post
  }
};
</script>

<style scoped></style>
