<template>
  <div>
    <b-row>
      <b-col md="12" lg="5" xl="4">
        <Intro />

        <comunitiDashboard />
      </b-col>

      <b-col md="8" lg="7" xl="8">
        <Post />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "@/components/businessf/intro";
import comunitiDashboard from "@/components/businessOwner/tabs/comunitiDashboard";

import Post from "../ownerPost";
export default {
  name: "posts",
  components: {
    Intro,

    comunitiDashboard,

    Post
  }
};
</script>

<style scoped>
.buynow {
  width: 120px;
  margin-bottom: -80px;
  margin-left: -10px;
  position: relative;
}
</style>
