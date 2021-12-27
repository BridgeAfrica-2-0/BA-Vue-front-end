<template>
  <div class="map-container">
    <div id="map"></div>
  </div>
</template>
<script>
import Mapbox from "mapbox-gl";
export default {
  props: ["business"],
  data() {
    return {
      loading: false,
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/streets-v11",
      zoom: 7,
    };
  },
  created() {
    this.mapbox = Mapbox;
  },
  mounted() {
    this.initmap();
  },
  methods: {
    initmap() {
      let mapboxgl = this.mapbox;
      mapboxgl.accessToken = this.accessToken;
      var map = new mapboxgl.Map({
        container: "map",
        style: this.mapStyle,
        zoom: this.zoom,
        center: [this.business.lng, this.business.lat],
      });

      map.on("load", () => {
        map.addSource("places", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {
                  description: `<p style="font-weight: bold; text-align: center; margin-bottom: 0px">${this.business.name}</p><p style="text-align: center">${this.business.about_business}</p>`,
                },
                geometry: {
                  type: "Point",
                  coordinates: [this.business.lng, this.business.lat],
                },
              },
            ],
          },
        });

        map.addLayer({
          id: "places",
          type: "circle",
          source: "places",
          paint: {
            "circle-color": "#ff0000",
            "circle-radius": 6,
            "circle-stroke-width": 2,
            "circle-stroke-color": "#ffffff",
          },
        });
        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
        });

        map.on("mouseenter", "places", (e) => {
          map.getCanvas().style.cursor = "pointer";
          const coordinates = e.features[0].geometry.coordinates.slice();
          const description = e.features[0].properties.description;
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
          popup
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
        });

        map.on("mouseleave", "places", () => {
          map.getCanvas().style.cursor = "";
          popup.remove();
        });
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
  min-height: 250px;
}
#map {
  height: 250px;
  width: 100%;
}
.mapboxgl-popup {
  min-width: 100%;
  max-width: 400px;
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
}
</style>
