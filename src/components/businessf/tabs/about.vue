<template>
  <div>
    <div class="mb-3" v-if="hasLoad">
      <mapbox :coordinates="[business_about.lng, business_about.lat]" />
      <!-- <MglMap
        :accessToken="accessToken"
        :mapStyle.sync="mapStyle"
        :center="[business_about.lng, business_about.lat]"
        :zoom="zoom"
        style="width: 100%; height: 450px"
      >
        <MglMarker
          :coordinates="[business_about.lng, business_about.lat]"
          color="red"
        />
      </MglMap> -->
    </div>
    <b-row ref="about" v-if="hasLoad">
      <b-col>
        <div class="p-4">
          <p>
            <b-icon icon="briefcase-fill" class="primary icon"></b-icon>
            <span v-for="category in business_about.category" :key="category.id"
              >{{ category.name }},
            </span>
          </p>
          <p>
            <b-icon icon="search" class="primary icon"></b-icon>
            <span>{{ business_about.name }}</span>
          </p>
          <p>
            <b-icon icon="geo-alt-fill" class="primary icon"></b-icon>
            <span
              >{{ business_about.address }}, {{ business_about.city }},
              {{ business_about.country[0].name }}</span
            >
          </p>
          <p>
            <b-icon icon="link" class="primary icon"></b-icon>
            <span>{{ business_about.website }}</span>
          </p>
          <p>
            <b-icon icon="people-fill" class="primary icon"></b-icon>
            <span>{{ nFormatter(business_about.community) }} Community</span>
          </p>
          <p>
            <b-icon icon="telephone-fill" class="primary icon"></b-icon>
            <span>{{ business_about.phone }}</span>
          </p>
          <p>
            <b-icon icon="envelope-fill" class="primary icon"></b-icon>
            <span> {{ business_about.email }}</span>
          </p>
          <p>
            <b-icon icon="clock" class="primary icon"></b-icon>
            <span
              ><b-link> Open now</b-link>

              <b-dropdown size="sm" variant="transperent">
                <template #button-content>
                  {{ hoursOpen }}
                </template>
                <b-dropdown-item
                  v-for="day in business_about.business_open_hours"
                  :key="day.day"
                  @click="selectHour(day)"
                >
                  {{ day.opening_time }}AM -
                  {{ day.closing_time }}PM</b-dropdown-item
                >
              </b-dropdown></span
            >
          </p>
        </div>
      </b-col>
      <b-col>
        <div class="mb-2 p-4">
          <h4 class="mb-4 text-center">
            <b-icon icon="info-circle-fill" class="primary mr-2"></b-icon>
            <b>{{ business_about.name }}</b>
          </h4>
          <p class="txt">
            {{ business_about.about_business }}
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { MglMap, MglMarker } from "vue-mapbox";
import mapbox from "@/components/mapbox";
export default {
  components: {
    mapbox,
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/streets-v11",
      coordinates: [11.504929555178624, 3.8465173382452815], // Lng,Lat
      zoom: 12,
      business_id: null,
      business_about: [],
      hasLoad: false,

      edit1: false,
      edit2: false,
      openNow: null,
      dayOfWorks: [
        { day: "Monday", opening_time: null, closing_time: null, check: false },
        {
          day: "Tuesday",
          opening_time: null,
          closing_time: null,
          check: false,
        },
        {
          day: "Wednesday",
          opening_time: null,
          closing_time: null,
          check: false,
        },
        {
          day: "Thursday",
          opening_time: null,
          closing_time: null,
          check: false,
        },
        { day: "Friday", opening_time: null, closing_time: null, check: false },
        {
          day: "Saturday",
          opening_time: null,
          closing_time: null,
          check: false,
        },
        { day: "Sunday", opening_time: null, closing_time: null, check: false },
      ],

      textToo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
        "              Asperiores temporibus, rerum iste id obcaecati quae odit accusamus\n" +
        "              reprehenderit, ipsa nam laudantium pariatur. Harum, soluta. Nam\n" +
        "              accusantium hic numquam architecto debitis. Lorem ipsum dolor sit\n" +
        "              amet consectetur adipisicing elit. Asperiores temporibus, rerum\n" +
        "              iste id obcaecati quae odit accusamus reprehenderit, ipsa nam\n" +
        "              laudantium pariatur. Harum, soluta. Nam accusantium hic numquam\n" +
        "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
        "              quae odit accusamus reprehenderit, ipsa nam laudantium pariatur.\n" +
        "              Harum, soluta. Nam accusantium hic numquam architecto debitis.",
      workedAt: "Current or Last Organization",
      lastEducation: "Last Education",
      homeTown: "Dummy",
      cityName: "Dummy",
      followed: "525",
      telephone: "+1 (234) 567-8974",
      email: "info@businessname.com",
    };
  },

  created() {
    let loader = this.$loading.show({
      container: this.$refs.about,
      canCancel: true,
      onCancel: this.onCancel,
      color: "#e75c18",
    });
    this.business_id = this.$route.params.id;
    console.log("Load Business About start +++++");
    this.$store
      .dispatch("businessOwner/loadUserBusinessAbout", {
        business_id: this.business_id,
      })
      .then((response) => {
        // this.dayOfWorks = this.initialize(this.dayOfWorks);
        loader.hide();
        this.hasLoad = true;
      })
      .catch((error) => {
        console.log("error from the server or browser error(2) ++++", error);
      })
      .finally(() => {
        this.business_about = JSON.parse(
          JSON.stringify(this.$store.getters["businessOwner/getBusinessAbout"])
        );
        loader.hide();
        this.hasLoad = true;
      });
  },

  computed: {
    hoursOpen() {
      console.log();
      return this.openNow === null
        ? "Nothing"
        : this.openNow.opening_time +
            " AM - " +
            this.openNow.closing_time +
            " PM";
    },
  },

  mounted() {
    this.business_id = this.$route.params.id;
  },

  methods: {
    editBio() {
      this.edit1 = !this.edit1;
    },

    editContact() {
      this.edit2 = !this.edit2;
    },

    validate(idForm) {
      this.$bvModal.hide(idForm);
    },
    selectHour(day) {
      this.openNow = day;
    },

    nFormatter: function(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
      }
      return num;
    },
  },
};
</script>

<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css");
.map {
  border: 0;
  width: 100%;
}

.btn-item {
  color: green;
}
.icon {
  height: 24px;
  width: 24px;
}
.edit {
  position: relative;
  left: 98%;
  cursor: pointer;
}

p {
  text-align: left;
  font-family: Helvetica;
  font-size: 14px;
}
span {
  margin-left: 8px;
}
.mobile {
  display: none;
}
@media only screen and (max-width: 768px) {
  .txt {
    text-align: left;
    font-family: Helvetica;
    font-size: 14px;
  }
  p {
    font-size: 12px;
  }
  span {
    margin-left: 6px;
  }
}
</style>
