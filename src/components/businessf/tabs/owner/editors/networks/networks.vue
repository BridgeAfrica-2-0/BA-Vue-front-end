<template>
  <div class="lalala">
    <b-tabs content-class="mt-3" fill pills>
      <b-tab :title="$t('general.Followers')">
        <Followers />
      </b-tab>
      <b-tab :title="$t('general.Following')">
        <Following />
      </b-tab>
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
