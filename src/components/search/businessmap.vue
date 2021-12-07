<template>
  <div class="map-container">
    <MglMap
      :accessToken="accessToken"
      :zoom="zoom"
      :center="center"
      :mapStyle="mapStyle"
    >
      <MglMarker
        v-for="business in business.data"
        :key="business.id"
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
      </MglMarker>
    </MglMap>
  </div>
</template>
<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";
import { mapGetters, mapActions } from "vuex";

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
      center: [11.504929555178624, 3.8465173382452815], // Lng,Lat
      zoom: 3,
      total: 0,
      per_page: 10,
      list: [],
      currentPage: 1,
      nextLoad: false,
      title: this.$t("search.No_Business_Found"),

      options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,
        type: "loop",
        perMove: 1,
      },
    };
  },
  created() {
    this.mapbox = Mapbox;
  },
  computed: {
    ...mapGetters({
      searchstate: "business/getSearchState",
      business: "business/getBusiness",
      sponsorbusiness: "business/getSponsorBusinesses",
      prodLoader: "business/getloadingState",
    }),
  },

  mounted() {
    this.getBusiness();
  },
  methods: {
    count(number) {
      if (number >= 1000000) {
        return number / 1000000 + "M";
      }
      if (number >= 1000) {
        return number / 1000 + "K";
      } else return number;
    },

    ...mapActions({
      findBusiness: "business/FIND_BUSINESS",
      nextPage: "business/NEXT_PAGE",
    }),

    getBusiness() {
      console.log("business search mounted");
      this.$store.commit("business/setLoading", true);

      this.findBusiness({})
        .then((res) => {
          console.log("business list: ");
          console.log(this.business);
          this.$store.commit("business/setLoading", false);

          this.total = this.business.total;
        })
        .catch((err) => {
          this.$store.commit("business/setLoading", false);

          console.error(err);
        });
    },

    changePage(value) {
      console.log("next page loading ");

      this.$store.commit("business/setLoading", true);
      this.currentPage = value;

      this.nextPage(this.currentPage)
        .then((res) => {
          console.log("business list: ");
          console.log(this.business);
          this.prodLoader = false;
        })
        .catch((err) => {
          this.prodLoader = false;
          this.total = this.business.total;
          console.error(err);
        });
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
</style>
