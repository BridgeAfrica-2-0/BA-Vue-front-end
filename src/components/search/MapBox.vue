<template>
  <div class="map-container">
    <MglMap
      :accessToken="accessToken"
      :zoom="zoom"
      :center="center"
      :mapStyle="mapStyle"
    >
      <MglMarker :coordinates="center" color="#3ad3ad">
        <MglPopup :coordinates="center" anchor="top">
          <div>Hello, I'm popup!</div>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>
<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";
export default {
  components: {
    MglMap,
    MglMarker,
    MglPopup,
  },
  data() {
    return {
      loading: false,
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/streets-v11",
      center: [3.8755099880783974, 11.556446782307379],
      zoom: 8,
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
