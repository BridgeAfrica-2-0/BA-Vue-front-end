<template>
  <div>
    <div id="geocoder"></div>
  </div>
</template>
<script>
import Mapbox from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
export default {
  created() {
    this.mapbox = Mapbox;
  },
  mounted() {
    this.initmap();
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
    };
  },
  methods: {
    initmap() {
      let mapboxgl = this.mapbox;
      mapboxgl.accessToken = this.accessToken;

      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        types: "country,region,place,postcode,locality,neighborhood",
      });

      geocoder.addTo("#geocoder");
      geocoder.on("result", (e) => {
        this.$emit("get-location-details", e.result);
      });
    },
  },
};
</script>
<style scoped>
@import url("https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css");
@import url("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css");
#geocoder {
  z-index: 1;
  border: 1px solid #ced4da;
}
</style>
