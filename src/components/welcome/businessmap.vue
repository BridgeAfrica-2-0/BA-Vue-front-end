<template>
  <div style="width: 100%; height: 250px">
    <MglMap
      :accessToken="accessToken"
      :mapStyle.sync="mapStyle"
      :center="center"
      :zoom="zoom"
      style="width: 100%; height: 250px"
    >
      <MglMarker :coordinates="center" color="red" />
    </MglMap>
  </div>
</template>
<script>
import { MglMap, MglMarker } from "vue-mapbox";
export default {
  props: ["center"],
  components: {
    MglMap,
    MglMarker
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/outdoors-v11",
      zoom: 12
    };
  }
};
</script>
<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css");
</style>
