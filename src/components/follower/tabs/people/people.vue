<template>
  <div class="lallaa">
    <b-tabs content-class="mt-3" fill pills>
      <b-tab :title="$t('follower.Followers')"><Followers /></b-tab>
      <b-tab :title="$t('follower.Following')"><Following /></b-tab>
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
  }
};
</script>

<style></style>
