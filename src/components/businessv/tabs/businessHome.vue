<template>
  <div>
    <b-row>
      <b-col md="4">
        <Intro />
        <Personalize />
        <Invite />
        <HotBusiness />
      </b-col>
      <b-col md="8">
        <Post />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "../intro";
import Invite from "../invite";
import HotBusiness from "../hotBusinesses";
import Post from "../../post";
import Personalize from "../personalizeWeb";
export default {
  name: "posts",
  components: {
    Intro,
    Invite,
    HotBusiness,
    Post,
    Personalize
  }
};
</script>

<style scoped></style>
