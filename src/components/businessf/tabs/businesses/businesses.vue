<template>
  <div>
    <b-tabs content-class="mt-3" fill pills card>
      <b-tab title="Followers"><Followers /></b-tab>
      <b-tab title="Following"><Following /></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Followers from "./tabs/followers";
import Following from "./tabs/following";
export default {
  components: {
    Followers,
    Following,
  },
};
</script>

<style></style>
