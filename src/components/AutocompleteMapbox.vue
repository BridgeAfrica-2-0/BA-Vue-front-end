<template>
  <div class="map-container">
    <MglMap
      :accessToken="accessToken"
      :zoom="zoom"
      :center="center"
      :mapStyle.sync="mapStyle"
    >
      <MglMarker :coordinates="center" color="blue" />
      <MglGeocoderControl :accessToken="accessToken" @result="handleResult" />
    </MglMap>
  </div>
</template>
<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";
import MglGeocoderControl from "vue-mapbox-geocoder";
export default {
  components: {
    MglMap,
    MglGeocoderControl,
    MglMarker,
  },
  data() {
    return {
      loading: false,
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/streets-v11",
      center: [11.504929555178624, 3.8465173382452815], // Lng,Lat
      zoom: 3,
    };
  },
  created() {
    this.mapbox = Mapbox;
  },
  methods: {
    handleResult(response) {
      console.log(response.result);
      this.center = response.result.center;
      let details = {
        coordinates: response.result.center,
        address: response.result.text,
      };
      this.$emit("get-address-details", details);
    },
  },
};
</script>
<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css");
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css");

@import url("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css");
.map-container {
  width: 100%;
  min-height: 400px;
}
.geocoder {
  position: absolute;
  z-index: 1;
  width: 50%;
  left: 50%;
  margin-left: -25%;
  top: 10px;
}
.mapboxgl-ctrl-geocoder {
  min-width: 100%;
}
</style>
