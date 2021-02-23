<template>
  <div>
    <Navbar />
    <b-container>
      <b-row class="mt-3">
        <b-col class="col-2">
          <b-form-select
            v-model="selected"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="name"
          ></b-form-select>
        </b-col>
        <b-col class="col-5 filter">
          <b-row>
            <b-col class="col-4 mt-2">
              <small> Filter Location:</small>
            </b-col>
            <b-col>
              <b-form-select
                v-model="location"
                :options="filters"
                class="mb-3 filter-select"
                value-field="item"
                text-field="name"
              ></b-form-select>
            </b-col>
          </b-row>
        </b-col>
        <b-col v-if="selected == 'business'" class="col-5 mr-1 filter mb-2">
          <b-row>
            <b-col class="col-4 mt-2">
              <small> Category:</small>
            </b-col>
            <b-col>
              <b-form-select
                v-model="location"
                :options="filters"
                class="mb-3 filter-select"
                value-field="item"
                text-field="name"
              ></b-form-select>
            </b-col>
          </b-row>
        </b-col>
        <b-col v-if="selected == 'business'">
          <b-form-checkbox
            id="checkbox-1"
            v-model="map"
            name="checkbox-1"
            value="accepted"
            @click="showMap"
            unchecked-value="not_accepted"
          >
            Show Map
          </b-form-checkbox>
        </b-col>
      </b-row>

      <b-row v-if="selected == 'all'">
        <b-col>
          <Businesses />
          <People class="mt-4" />
          <Networks class="mt-4" />
          <Posts class="mt-4" />
          <Marketplace class="mt-4 mb-2" />
        </b-col>
        <b-col class="col-3">
          <Advertisement />
        </b-col>
      </b-row>

      <b-col v-if="selected == 'business'">
        <b-row>
          <b-col>
            <b-card>
              <h3>Sponsored Businesses</h3>
              <div class="s-business">
                <SponsoredBusinesses
                  class="ml-2"
                  v-for="(sbusiness, index) in sponsoredBusinesses"
                  :key="index"
                />
              </div>
            </b-card>
          </b-col>
          <b-col class="col-2" v-if="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.732999183005!2d-74.006227!3d40.710128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sbg!4v1611866634082!5m2!1sen!2sbg"
              width="290"
              height="200"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </b-col>
        </b-row>
        <b-row class="mt-3 mb-2">
          <b-col>
            <b-card>
              <span class="title"> All Businesses</span>
              <span class="ml-5 result"><small>398 Results found</small></span>
              <Business class="mb-3" />
              <Business class="mb-3" />
              <Business class="mb-3" />
              <Business class="mb-3" />
              <Business class="mb-3" />
            </b-card>
          </b-col>
          <b-col class="col-3">
            <Advertisement />
          </b-col>
        </b-row>
      </b-col>
    </b-container>
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
import Businesses from "@/components/search/businesses";
import Advertisement from "@/components/search/advertisement";
import Networks from "@/components/search/networks";
import Posts from "@/components/search/posts";
import People from "@/components/search/people";
import Marketplace from "@/components/search/marketplace";
import SponsoredBusinesses from "@/components/search/sponsoredBusiness";
import Business from "@/components/follower/business";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default {
  components: {
    Businesses,
    Advertisement,
    Networks,
    Marketplace,
    Posts,
    People,
    SponsoredBusinesses,
    Business,
    Navbar,
    Footer,
  },
  data() {
    return {
      selected: "all",
      location: "any",
      map: false,
      options: [
        { item: "all", name: "All" },
        { item: "business", name: "Business" },
        { item: "people", name: "People" },
        { item: "network", name: "Network" },
        { item: "marketplace", name: "Markeplace", notEnabled: true },
        { item: "posts", name: "Posts" },
      ],
      filters: [
        { item: "any", name: "Any" },
        { item: "yaounde", name: "Yaounde, Cameroon" },
        { item: "dhaka ", name: "Dhaka, Bangladesh" },
        { item: "new york", name: "New York, United States" },
        { item: "douala", name: "Douala, Cameroon" },
        { item: "karachi", name: "Karachi, Pakistan" },
      ],
      sponsoredBusinesses: [
        { title: "Business 1" },
        { title: "Business 2" },
        { title: "Business 3" },
        { title: "Business 4" },
      ],
    };
  },
  methods:{
    showMap(){
        this.map = !this.map
    }
  }

};
</script>

<style scoped>
.filter {
  border-left: 1px solid #ccc;
  height: 40px;
}
.filter-select {
  margin-left: -70px;
}
.s-business {
  display: flex;
  flex-wrap: wrap;
}
.title {
  font-size: 30px;
}
.result {
  position: relative;
  top: -5px;
  color: orange;
}
</style>
