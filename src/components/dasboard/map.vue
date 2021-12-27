<template>
  <div>
    <b-card class=" border shadow pr-3" style="height:350px">
      <h6 class="title">
        <fas-icon class="icons" :icon="['fas', 'map-marker-alt']" size="lg" />
        <b>  {{$t('dashboard.get_direction').toUpperCase()}} </b>
      </h6>

      <div>
        <GmapMap
          :center="center"
          :zoom="12"
          style="width:100%;  height: 250px;"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center = m.position"
          />
        </GmapMap>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
      markers: [],
      places: []
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style scoped>
.picture {
  border-radius: 10px;
  width: 190px;
}

.colum {
  justify-content: space-around;
}

.text-design {
  line-height: 40px;
}

.map {
  width: 100%;
}
</style>

<style>
@media only screen and (min-width: 768px) {
  .title {
    font-size: 20px;
  }
}

@media only screen and (max-width: 768px) {
  .title {
    font-size: 16px;
  }
}
</style>
