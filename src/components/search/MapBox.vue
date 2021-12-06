<template>
  <div class="map-container">
    <MglMap
      :accessToken="accessToken"
      :zoom="zoom"
      :center="center"
      :mapStyle="mapStyle"
    >
      <MglMarker
        v-for="(center, key) in points"
        :key="key"
        :coordinates="center.coordinates"
        color="#3ad3ad"
      >
        <MglPopup :coordinates="center.coordinates" anchor="top">
          <div>
            {{ center.title }}
          </div>
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
      center: [3.8465173382452815, 11.504929555178624],
      points: [
        {
          id: 1,
          title: "Jardin zoologique de Mvog-Betsi",
          coordinates: [3.8665862087672718, 11.48759323642662],
        },
        {
          id: 2,
          title: "Carrefour Mvog Mbi",
          coordinates: [3.8533876466294736, 11.533914657070195],
        },
        {
          id: 3,
          title: "Complexe Beac",
          coordinates: [3.8471496894112707, 11.540570084848191],
        },
        {
          id: 4,
          title: "immocam (immobilier du Cameroun)",
          coordinates: [3.833256267559204, 11.558184378580254],
        },
      ],
      zoom: 11,
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
