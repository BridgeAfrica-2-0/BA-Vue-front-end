<template>
  <div class="lalala">
    <b-tabs content-class="mt-3" fill pills>
      <b-tab title="Followers"
        ><Followers :followers="people.followers"
      /></b-tab>
      <b-tab title="Following"
        ><Following :followings="people.followings"
      /></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Followers from "./tabs/followers";
import Following from "./tabs/following";
export default {
  components: {
    Followers,
    Following
  },
  props: ["people"]
};
</script>

<style></style>
