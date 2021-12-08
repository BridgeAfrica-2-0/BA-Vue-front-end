<template>
  <div class="map-container">
    <MglMap
      :accessToken="accessToken"
      :zoom="zoom"
      :center="center"
      :mapStyle.sync="mapStyle"
    >
      <MglMarker
        v-for="(business, key) in businesses"
        :key="business.id"
        :coordinates="[business.lng, business.lat]"
      >
        <div class="marker" slot="marker">
          <div>{{ key + 1 }}</div>
        </div>
        <MglPopup :coordinates="[business.lng, business.lat]" anchor="top">
          <div class="py-4">
            <div
              class="d-flex justify-content-center flex-column pointer"
              @click="gotoBusiness(business.id)"
            >
              <img :src="business.logo_path" alt="..." class="img-map" />
              <h6 class="text-center my-3">
                {{ business.name }}
              </h6>
            </div>
          </div>
        </MglPopup>
      </MglMarker>

      <!-- <MglMarker
        v-for="network in networks"
        :key="network.id"
        :coordinates="[business.lng, business.lat]"
        color="#3ad3ad"
      >
        <MglPopup :coordinates="[business.lng, business.lat]" anchor="top">
          <div class="py-4">
            <div class="d-flex justify-content-center flex-column">
              <img :src="business.logo_path" alt="..." class="img-map" />
              <span class="text-center">
                {{ business.name }}
              </span>
            </div>
          </div>
        </MglPopup>
      </MglMarker> -->
      <!-- <MglMarker
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
      </MglMarker> -->
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
  props: ["businesses", "networks"],
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
    console.log(this.mapbox);
  },
  methods: {
    gotoBusiness(id) {
      this.$router.push(`/business/${id}`);
    },
  },
};
</script>
<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css");
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css");
.map-container {
  width: 100%;
  min-height: 100vh;
}
.img-map {
  width: 200px;
  height: 100px;
  object-fit: cover;
}
.mapboxgl-popup-content {
  border-radius: 20px !important;
}
.marker {
  border-radius: 100% 100% 100% 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: #3ad3ad;
  border: 2px solid #ffffff;
  transition: all 0.5s;
}
.marker:hover div {
  background-color: #ffffff;
  border-color: #3ad3ad;
  color: #3ad3ad;
}
.marker div {
  display: flex;
  justify-content: center;
  background-color: #3ad3ad;
  color: #ffffff;
  height: 20px;
  width: 20px;
  border-radius: 100% 100% 100% 0;
  margin: auto;
  margin-top: 3px;
  transition: all 0.5s;
  font-weight: bold;
  font-size: 14px;
}
.pointer {
  cursor: pointer;
}
</style>
