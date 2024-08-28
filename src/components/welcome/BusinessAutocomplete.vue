<template>
  <div>
    <div id="map"></div>
    <div id="geolocation" class="geolocation"></div>
  </div>
</template>
<script>
import Mapbox from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
export default {
  props: ["region"],
  created() {
    this.mapbox = Mapbox;
  },
  mounted() {
    this.initmap();
  },
  data() {
    return {
      loading: false,
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/outdoors-v11",
      center: [11.504929555178624, 3.8465173382452815], // Lng,Lat
      zoom: 5
    };
  },
  methods: {
    initmap() {
      let mapboxgl = this.mapbox;
      mapboxgl.accessToken = this.accessToken;

      var map = new mapboxgl.Map({
        container: "map",
        style: this.mapStyle,
        zoom: this.zoom,
        center: this.center
      });

      var regon = this.region ? this.region[0].name.toLowerCase() : "centre";
      regon = regon.charAt(0).toUpperCase() + regon.slice(1);
      console.log(this.region);
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        countries: "cm",
        placeholder: "Address",
        filter: function(item) {
          return item.context.some(i => {
            return i.text === regon;
          });
        }
      });
      geocoder.addTo("#geolocation");
      geocoder.on("result", e => {
        this.$emit("business-instance-location", e.result);
      });
    }
  }
};
</script>

<style scoped>
@import url("https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css");
@import url("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css");
#geolocation {
  z-index: 1;
  /* margin: 20px; */
}
.mapboxgl-ctrl-geocoder {
  min-width: 100%;
}
body {
  margin: 0;
  padding: 0;
}
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
