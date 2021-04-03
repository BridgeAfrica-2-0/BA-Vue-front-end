<template>
<div>
  <b-card show variant="primary">
    <b-tabs content-class="mt-3">
      <b-tab title="Posts" active><network-posts /></b-tab>
      <b-tab title="Albums"><albums-posts /></b-tab>
    </b-tabs>
  </b-card>
</div>
</template>

<script>
import NetworkPosts from "@/components/businessf/tabs/owner/networks/posts";
import AlbumsPosts from "@/components/businessf/tabs/owner/networks/albums";

export default {
name: "mediaNetwork",
  components: {AlbumsPosts, NetworkPosts}
}
</script>

<style scoped>

</style>