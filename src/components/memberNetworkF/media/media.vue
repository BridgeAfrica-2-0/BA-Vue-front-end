<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab :title="$t('memnetwork.Posts')" active><Posts /></b-tab>
      <b-tab :title="$t('memnetwork.Albums')"><Albums /></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Posts from "./tabs/posts";
import Albums from "./tabs/album";
export default {
  components: {
    Posts,
    Albums
  }
};
</script>

<style></style>
