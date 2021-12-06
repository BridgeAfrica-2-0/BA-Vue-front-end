<template>
  <div class="map-container">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
  </div>
</template>
<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";
export default {
  components: {
    MglMap,
  },
  data() {
    return {
      loading: false,
      location: "",
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      map: {},
    };
  },
  created() {
    this.mapbox = Mapbox;
  },
  // mounted() {
  //   console.log(process.env.VUE_APP_MAPBOX_TOKEN);
  //   this.initMap();
  // },
  // methods: {
  //   initMap() {
  //     try {
  //       mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;
  //       this.map = new mapboxgl.Map({
  //         container: "map",
  //         style: "mapbox://styles/mapbox/streets-v11",
  //         center: this.center,
  //       });
  //     } catch (err) {
  //       console.log("map error", err);
  //     }
  //   },
  // },
};
</script>
<style scoped>
.map-container {
  width: 100%;
  min-height: 600px;
}
</style>
