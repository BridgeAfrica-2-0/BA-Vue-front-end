<template>
  <div>
    <MglMap
      :accessToken="accessToken"
      :mapStyle.sync="mapStyle"
      :center="[business.lng, business.lat]"
      :zoom="zoom"
      style="width: 100%; height: 250px"
    >
      <MglMarker :coordinates="[business.lng ,business.lat ]" color="red">
        <MglPopup :showed="true" :closeButton="false">
          <div class="row">
            <div class="px-4 py-2 dialog-div">
              <p class="mb-0 dialog-text">{{ business.name }}</p>
              <p class="mb-0 dialog-text">
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
/** 
  *this component is for display  the mapbox in the system  
*/
import { MglMap, MglPopup, MglMarker } from "vue-mapbox";
export default {
  /**
   * this props contains the data that will be displayed by the mapbox
   * @public
   */
  props: ["business"],
  components: {
    MglMap,
    MglMarker,
    MglPopup,
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/outdoors-v11",
      zoom: 12,
    };
  },
};
</script>
<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css");

.dialog-div{
  min-width: 200px;
}
.dialog-text{
  font-size: 15px;
  font-weight: bold;
}
</style>
