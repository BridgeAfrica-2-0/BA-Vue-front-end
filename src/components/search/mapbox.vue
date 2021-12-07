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
          <div class="py-4">
            <div class="d-flex justify-content-center flex-column">
              <img :src="center.img" alt="..." class="img-map" />
              <span class="text-center">
                {{ center.title }}
              </span>
            </div>
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
          img: "https://picsum.photos/200/300",
          coordinates: [3.8665862087672718, 11.48759323642662],
        },
        {
          id: 2,
          title: "Carrefour Mvog Mbi",
          img: "https://picsum.photos/200",
          coordinates: [3.8533876466294736, 11.533914657070195],
        },
        {
          id: 3,
          title: "Complexe Beac",
          img: "https://picsum.photos/200/300",
          coordinates: [3.8471496894112707, 11.540570084848191],
        },
        {
          id: 4,
          title: "immocam (immobilier du Cameroun)",
          img: "https://picsum.photos/200",
          coordinates: [3.833256267559204, 11.558184378580254],
        },
      ],
      zoom: 11,
    };
  },
  created() {
    this.mapbox = Mapbox;
  },
};
</script>
<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css");
.map-container {
  width: 100%;
  min-height: 600px;
}
.img-map {
  width: 200px;
  height: 100px;
  object-fit: cover;
}
</style>
