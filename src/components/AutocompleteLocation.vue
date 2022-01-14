<template>
  <div class="map-container">
    <div id="map"></div>
    <div id="geocoder" class="geocoder"></div>
  </div>
</template>
<script>
import Mapbox from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
export default {
  props: ["region"],
  data() {
    return {
      loading: false,
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/outdoors-v11",
      center: [11.504929555178624, 3.8465173382452815], // Lng,Lat
      zoom: 5,
    };
  },
  created() {
    this.mapbox = Mapbox;
  },
  mounted() {
    this.initmap();
  },
  methods: {
    handleResult(response) {
      console.log(response.result);
      let details = {
        coordinates: response.result.center,
        address: response.result.text,
      };
      this.$emit("get-address-details", details);
    },
    initmap() {
      let mapboxgl = this.mapbox;
      mapboxgl.accessToken = this.accessToken;
      var map = new mapboxgl.Map({
        container: "map",
        style: this.mapStyle,
        zoom: this.zoom,
        center: this.center,
      });
      console.log(this.region);
      var regon =
        this.region && this.region.length > 0
          ? this.region[0].name.toLowerCase()
          : "centre";
      regon = regon.charAt(0).toUpperCase() + regon.slice(1);
      console.log(this.region);
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        countries: "cm",
        placeholder: "Address",
        filter: function(item) {
          return item.context.some((i) => {
            return i.text === regon;
          });
        },
      });

      document.getElementById("geocoder").appendChild(geocoder.onAdd(map));

      geocoder.on("result", (e) => {
        let response = e.result;
        let details = {
          coordinates: response.center,
          address: response.place_name,
        };
        this.$emit("get-address-details", details);
      });
    },
  },
};
</script>
<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css");
@import url("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css");
.map-container {
  width: 100%;
  min-height: 400px;
}
#map {
  height: 100%;
  width: 100%;
}

.geocoder {
  position: absolute;
  z-index: 1;
  width: 74vw;
  left: 50%;
  margin-left: -49.5%;
  top: 10px;
}
.mapboxgl-ctrl-geocoder {
  min-width: 100%;
}
#map {
  margin-top: 65px;
}
#map {
  height: 100%;
  width: 100%;
}
</style>
