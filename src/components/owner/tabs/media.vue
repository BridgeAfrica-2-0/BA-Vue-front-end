<template>
  <div>
    <fas-icon
      class="violet mr-2 pt-1 icon-size primary"
      :icon="['fas', 'file-image']"
    />Media
    <hr />

    <b-tabs content-class="mt-3" pills>
      <b-tab title="Posts" active>
        <images />
      </b-tab>

      <b-tab title="Albums">
        <album />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Album from "./media/album.vue";
import Images from "./media/images.vue";

export default {
  components: {
    Album,
    Images
  }
}; 
</script>
