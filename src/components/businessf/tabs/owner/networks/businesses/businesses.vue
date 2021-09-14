<template>
  <div class="lalala">
    <b-tabs content-class="mt-3" fill pills>
      <b-tab title="Followers">
        <Followers :followers="businesses.Business_followers" />
      </b-tab>
      <b-tab title="Following">
        <Following :followings="businesses.Business_following" />
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
  },
  props: ["businesses"]
};
</script>

<style></style>
