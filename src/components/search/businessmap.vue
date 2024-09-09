<template>
  <div class="map-container">
    <MglMap
      :accessToken="accessToken"
      :zoom="zoom"
      :center="center"
      :mapStyle="mapStyle"
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
              @click="gotoBusiness(business.slug)"
            >
              <img :src="business.logo_path" alt="..." class="img-map" />
              <h6 class="text-center my-3">
                {{ business.name }}
              </h6>
              <span v-for="cat in business.category" :key="cat.name">
                {{ cat.name }}
              </span>
              <span>
                <b-icon-geo-alt class="ico"></b-icon-geo-alt>
                {{ business.city }}
                <span
                  class="ml-2"
                  v-for="nie in business.neigborhood"
                  :key="nie.id"
                >
                  {{ nie.name }}
                </span>
              </span>
              <read-more
                :more-str="$t('search.read_more')"
                class="readmore"
                :text="business.about_business"
                link="#"
                :less-str="$t('search.read_less')"
                :max-chars="100"
              >
              </read-more>
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
  props: ["businesses"],
  components: {
    MglMap,
    MglMarker,
    MglPopup
  },
  data() {
    return {
      loading: false,
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/outdoors-v11",
      center: [11.504929555178624, 3.8465173382452815], // Lng,Lat
      zoom: 12,
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
        perMove: 1
      }
    };
  },
  created() {
    this.islogin = this.$store.getters["auth/isLogged"];
    this.mapbox = Mapbox;
  },
  computed: {
    islogin() {
      return this.$store.getters["auth/isLogged"];
    },
    ...mapGetters({
      searchstate: "business/getSearchState",
      businessess: "business/getBusiness",
      sponsorbusiness: "business/getSponsorBusinesses",
      prodLoader: "business/getloadingState"
    })
  },

  mounted() {
    this.islogin = this.$store.getters["auth/isLogged"];
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

    findBusiness(payload) {
      if (this.isLogin) {
        return this.$store.dispatch("business/FIND_BUSINESS", payload);
      } else {
        return this.$store.dispatch(
          "business/FIND_BUSINESS_FOR_GUEST_USER",
          payload
        );
      }
    },
    nextPage(payload) {
      return this.$store.dispatch("business/NEXT_PAGE", payload);
    },

    getBusiness() {
      console.log("business search mounted");
      this.$store.commit("business/setLoading", true);

      this.findBusiness({})
        .then(res => {
          console.log("business list: ");
          console.log(this.business);
          this.$store.commit("business/setLoading", false);

          this.total = this.business.total;
          this.changePage();
        })
        .catch(err => {
          this.$store.commit("business/setLoading", false);

          console.error(err);
        });
    },

    changePage() {
      console.log("next page loading ");

      this.$store.commit("business/setLoading", true);
      this.currentPage = this.businessPage;

      this.nextPage(this.currentPage)
        .then(res => {
          console.log("business list: ");
          console.log(this.business);
          this.prodLoader = false;
        })
        .catch(err => {
          this.prodLoader = false;
          this.total = this.business.total;
          console.error(err);
        });
    }
  }
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
