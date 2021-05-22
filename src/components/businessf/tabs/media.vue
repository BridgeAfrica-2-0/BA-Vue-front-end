<template>
  <div>
    <b-card show variant="primary">
      <b-icon icon="image" class="primary"></b-icon>
      <b>
        Media
      </b>
      <b-tabs content-class="mt-3">
        <b-tab title="Posts" active><Posts /></b-tab>
        <b-tab title="Albums"><Album /></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>     

<script>
import Posts from "../posts";
import Album from "../albums";
export default {
  components: {
    Posts,
    Album
  }
};
</script>

<style></style>
