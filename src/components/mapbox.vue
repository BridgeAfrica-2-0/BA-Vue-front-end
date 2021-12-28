<template>
  <div>
    <MglMap
      :accessToken="accessToken"
      :mapStyle.sync="mapStyle"
      :center="[business.lng, business.lat]"
      :zoom="zoom"
      style="width: 100%; height: 250px"
    >
      <MglMarker :coordinates="[business.lng, business.lat]" color="red">
        <MglPopup>
          <div class="row">
            <div class="px-4 py-2">
              <p class="text-center mb-0">{{ business.name }}</p>
              <p class="text-center mb-0">
                {{ business.address }}
              </p>
            </div>
          </div>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>
<script>
import { MglMap, MglPopup, MglMarker } from "vue-mapbox";
export default {
  props: ["business"],
  components: {
    MglMap,
    MglMarker,
    MglPopup,
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/streets-v11",
      zoom: 12,
    };
  },
};
</script>
<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css");
</style>
