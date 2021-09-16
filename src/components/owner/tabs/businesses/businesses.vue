<template>
  <div class="lalala">
    <b-tabs content-class="mt-3" fill pills>
      <b-tab title="Followers"
        ><Followers :followers="business !== null ? business.business_followers : null"
      /></b-tab>
      <b-tab title="Following"
        ><Following :followings=" business !== null ? business.business_following : null"
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
  props: ["business"],
  created() {
    console.log('++++++++++++++++++',  this.business )
  }
};
</script>

<style></style>
