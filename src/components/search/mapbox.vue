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
          <div>B{{ key + 1 }}</div>
        </div>
        <MglPopup :coordinates="[business.lng, business.lat]">
          <div class="py-4">
            <div
              class="d-flex justify-content-center flex-column pointer"
              @click="gotoBusiness(business.id)"
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
      <MglMarker
        v-for="(product, key) in products"
        :key="product.id"
        :coordinates="[product.business_lng, product.business_lat]"
      >
        <div class="marker" slot="marker">
          <div>M{{ key + 1 }}</div>
        </div>
        <MglPopup :coordinates="[product.business_lng, product.business_lat]">
          <div class="py-4">
            <div class="d-flex justify-content-center flex-column pointer">
              <img :src="product.picture" alt="..." class="img-map" />
              <h6 class="text-center my-3">
                {{ product.name }}
              </h6>
              <p>{{ product.description }}</p>
              <div class="d-flex justify-content-around">
                <p class="font-weight-bold">Price</p>
                <p>{{ product.price }} Fcfa</p>
              </div>
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
  props: ["businesses", "products", "networks"],
  data() {
    return {
      loading: false,
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/outdoors-v11",
      center: [11.504929555178624, 3.8465173382452815], // Lng,Lat
      zoom: 12,
    };
  },
  created() {
    this.mapbox = Mapbox;
  },
  mounted() {
    setTimeout(() => {
      console.log("Business => ".this.businesses);
      console.log("Products => ".this.products);
      console.log("networks => ".this.networks);
    }, 5000);
  },
  methods: {
    gotoBusiness(id) {
      this.$router.push(`/business/${id}`);
    },
  },
};
</script>
<style scoped>
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
  font-size: 13px;
}
.pointer {
  cursor: pointer;
}

.ico {
  margin-right: 5px;
}
</style>
