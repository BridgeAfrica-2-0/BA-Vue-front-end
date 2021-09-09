<template>
  <div>
    <b-row>
      <b-col md="12" lg="5" xl="4">
        <Intro />
        <Media />
        <Followers />
        <HotBusiness />
      </b-col>

      <b-col md="8" lg="7" xl="8">
        <Post />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "../intro";
import Followers from "./comunitiDashboard";
import HotBusiness from "../hotBusinesses";
import Post from "../ownerPost";
import Media from "../../media";
export default {
  name: "posts",
  components: {
    Intro,
    Followers,
    HotBusiness,
    Post,
    Media
  }
};
</script>

<style scoped></style>
