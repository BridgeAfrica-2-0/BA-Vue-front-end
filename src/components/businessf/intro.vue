<template>
  <div>
    <b-card title="" header-tag="header" footer-tag="footer">
      <h6 class="mb-2">
        <b>{{ $t("businessf.Intro") }}</b>
      </h6>

      <b-card-text>
        <p>
          <b-icon icon="briefcase-fill" class="primary h_icon"></b-icon>
          <span v-for="cat in business_intro.category" :key="cat.id">
            {{ cat.name }}
          </span>
        </p>
        <p>
          <b-icon icon="search" class="primary h_icon"></b-icon>
          <!-- <span v-for="(keyword, index) in business_intro.keywords" :key="index"
            >{{ keyword }},
          </span> -->
          <span> {{ business_intro.name }} </span>
        </p>
        <p>
          <b-icon icon="geo-alt-fill" class="primary h_icon"></b-icon>
          {{ business_intro.address }},
          {{
            business_intro.country != null ? business_intro.country[0].name : ""
          }}
        </p>
        <p>
          <b-icon icon="link" class="primary h_icon"></b-icon>
          {{ business_intro.website }}
        </p>

        <!-- <p>
          <b-icon icon="link" class="primary"></b-icon>
          {{ $t("businessf.www_business_com") }}
        </p> -->

        <p>
          <b-icon icon="people-fill" class="primary h_icon"></b-icon>
          {{ business_intro.community }}
          {{ $t("businessf.Community") }}
        </p>
        <p>
          <b-icon icon="clock" class="primary h_icon"></b-icon>
          <b-link> {{ $t("businessf.Open_now") }}</b-link>
          <br />
          <b-dropdown size="sm" variant="transperent">
            <template #button-content> 10:00AM - 7:00PM </template>
            <b-dropdown-item> 10:00AM - 7:00PM</b-dropdown-item>
          </b-dropdown>
        </p>
      </b-card-text>
      <MglMap
        :accessToken="accessToken"
        :mapStyle.sync="mapStyle"
        v-if="business_intro.lng && business_intro.lat"
        :center="[business_intro.lng, business_intro.lat]"
        :zoom="zoom"
        style="width: 100%; height: 250px"
      >
        <MglMarker
          :coordinates="[business_intro.lng, business_intro.lat]"
          color="red"
        >
          <MglPopup :showed="true" :closeButton="false">
            <div class="row">
              <div class="px-4 py-2 dialog-div">
                <p class="mb-0 dialog-text">{{ business_intro.name }}</p>
                <p class="mb-0 dialog-text">
                  {{ business_intro.address }}
                </p>
              </div>
            </div>
          </MglPopup>
        </MglMarker>
      </MglMap>
    </b-card>
  </div>
</template>

<script>
import { MglMap, MglPopup, MglMarker } from "vue-mapbox";
import { isGuestUser } from "@/helpers";
export default {
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/outdoors-v11",
      coordinates: [11.504929555178624, 3.8465173382452815], // Lng,Lat
      zoom: 11,
      isGuestUser: isGuestUser()
    };
  },

  components: {
    MglMap,
    MglMarker,
    MglPopup
  },
  computed: {
    business_intro() {
      return this.isGuestUser
        ? this.$store.state.businessGuest.businessInfo
        : this.$store.state.businessOwner.businessInfo;
    }
  }
};
</script>

<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css");
.h_icon {
  font-size: 28px;
  margin-right: 10px;
}

.dialog-div {
  min-width: 200px;
}
.dialog-text {
  font-size: 15px;
  font-weight: bold;
}
</style>
