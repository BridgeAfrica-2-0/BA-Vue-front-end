<template>
  <div>
    <b-tabs content-class="mt-3" fill pills card>
      <b-tab title="Followers (1)"><Followers /></b-tab>
      <b-tab title="Following (1)"><Following /></b-tab>
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
