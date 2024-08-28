<template>
  <div class="map-container">
    <MglMap
      :accessToken="accessToken"
      :zoom="zoom"
      :center="center"
      :mapStyle.sync="mapStyle"
      @load="onMapLoad"
    >
      <MglMarker
        v-for="(business, key) in businessesItems.data"
        :key="business.id"
        :coordinates="[business.lng, business.lat]"
      >
        <div class="marker" slot="marker">
          <div>B{{ key + 1 }}</div>
        </div>
        <MglPopup :coordinates="[business.lng, business.lat]">
          <div class="py-4 navig">
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
        v-for="(product, key) in productBlock"
        :key="product.id"
        :coordinates="[product.business_lng, product.business_lat]"
      >
        <div class="marker" slot="marker">
          <div>M{{ key + 1 }}</div>
        </div>
        <MglPopup
          :coordinates="[product.business_lng, product.business_lat]"
          @open="filtre(product.business_id)"
        >
          <div class="py-4 navig">
            <div
              class="d-flex justify-content-center flex-column pointer "
              v-for="item in FilterProduct"
              :key="item.id"
            >
              <img :src="product.picture" alt="..." class="img-map" />
              <h6 class="text-center my-3">
                {{ item.name }}
              </h6>

              <read-more
                :more-str="$t('search.read_more')"
                class="readmore"
                :text="item.description"
                link="#"
                :less-str="$t('search.read_less')"
                :max-chars="50"
              >
              </read-more>

              <!-- <p>{{ item.description }}</p> -->
              <div class="d-flex justify-content-around">
                <p class="font-weight-bold">Price</p>
                <p>{{ item.price }} Fcfa</p>
              </div>
            </div>
          </div>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>
<script>
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  components: {
    MglMap,
    MglMarker,
    MglPopup
  },
  props: [
    "businesses",
    "products",
    "networks",
    "defaultLocation",
    "isSearched"
  ],
  data() {
    return {
      filterProduct: null,
      loading: false,
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/outdoors-v11",
      center: [11.504929555178624, 3.8465173382452815], // Lng,Lat
      zoom: 12
    };
  },
  watch: {
    isSearched: {
      immediate: true,
      handler(newValue, oldValue) {
        this.updateMapPosition({ location: this.defaultLocation });
      }
    }
  },
  methods: {
    filtre(id) {
      this.filterProduct = this.products.filter(elem => {
        return elem.business_id == id;
      });
    },
    gotoBusiness(id) {
      this.$router.push(`/business/${id}`);
    },
    onMapLoad({ map }) {
      map.resize();
      map.on("idle", function() {
        map.resize();
      });
    },

    filtrer(data, key) {
      let result = [...new Map(data.map(x => [key(x), x])).values()];
      return result;
    },
    updateMapPosition({ location }) {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${process.env.VUE_APP_MAPBOX_TOKEN}`;
      axios
        .get(endpoint)
        .then(res => {
          if (typeof res.data.features[0]["center"] !== "undefined") {
            this.center = res.data.features[0]["center"];
          }
        })
        .catch(err => {
          console.log({ err: err });
        });
    }
  },
  computed: {
    ...mapGetters({
      businessesItems: "business/getBusiness"
    }),
    businessesItems() {
      return this.$store.getters["allSearch/getBusinesses"];
    },
    FilterProduct() {
      return this.filterProduct;
    },
    productBlock() {
      return this.filtrer(this.products, it => it.business_id);
    }
  },
  mounted() {
    let products = [
      { nom: "lele", id: 1 },
      { nom: "lele1", id: 1 },
      { nom: "lele", id: 2 }
    ];
    let unique = [];
    const subject = [...new Set(products)];
    let rand = Math.floor(Math.random() * 10000) / 100000000;
  }
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
  /* border-radius: 200px !important;
  max-height: 100px !important;
  */
}
.navig {
  max-height: 200px;
  overflow-y: auto;
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
