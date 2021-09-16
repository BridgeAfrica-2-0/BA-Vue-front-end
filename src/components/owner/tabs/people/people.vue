<template>
  <div class="lalala">
    <b-tabs content-class="mt-3" fill pills>
      <b-tab title="Followers"
        ><Followers :followers="people !== null ? people.user_followers : null"
      /></b-tab>
      <b-tab title="Following"
        ><Following :followings="people !== null ? people.user_following : null"
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
