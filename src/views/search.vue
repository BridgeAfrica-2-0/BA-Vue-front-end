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
        <b-col v-if="selected != 'marketplace'" class="col-5 filter">
          <b-row>
            <b-col class="col-4 mt-2">
              <small> Filter:</small>
            </b-col>
            <b-col>
              <div class="control-size">
                <b-form-select
                  v-model="location"
                  :options="filters"
                  class="mb-3 filter-select"
                  value-field="item"
                  text-field="name"
                ></b-form-select>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col v-if="selected == 'business'" class="col-5 filter mb-2">
          <b-row>
            <b-col class="col-3 mt-2">
              <small> Category:</small>
            </b-col>
            <b-col>
              <div class="control-size">
                <b-form-select
                  v-model="category"
                  :options="categories"
                  class="mb-3 filter-select"
                  value-field="item"
                  text-field="name"
                ></b-form-select>
              </div>
            </b-col>
            <b-col>
              <b-button variant="primary" v-if="!map" @click="showMap(true)">
                Show map
              </b-button>
              <b-button variant="primary" v-if="map" @click="showMap(false)">
                Hide map
              </b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col v-if="selected == 'people'" class="col-5 mb-2">
          <b-row>
            <b-col class="col-3 mt-2">
              <small> Workplace:</small>
            </b-col>
            <b-col>
              <div class="control-size">
                <b-form-select
                  v-model="category"
                  :options="categories"
                  class="mb-3 filter-select"
                  value-field="item"
                  text-field="name"
                ></b-form-select>
              </div>
            </b-col>
            <b-col>
              <div class="control-size">
                <b-form-select
                  v-model="category"
                  :options="categories"
                  class="mb-3 filter-select"
                  value-field="item"
                  text-field="name"
                ></b-form-select>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col v-if="selected == 'network'" class="col-5 filter mb-2">
          <b-row>
            <b-col class="col-3 mt-2">
              <small> Category:</small>
            </b-col>
            <b-col>
              <div class="control-size">
                <b-form-select
                  v-model="category"
                  :options="categories"
                  class="mb-3 filter-select"
                  value-field="item"
                  text-field="name"
                ></b-form-select>
              </div>
            </b-col>
            <b-col>
              <b-button variant="primary" v-if="!map" @click="showMap(true)">
                Show map
              </b-button>
              <b-button variant="primary" v-if="map" @click="showMap(false)">
                Hide map
              </b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col v-if="selected == 'posts'" class="col-5 filter mb-2">
          <b-row>
            <b-col class="col-3 mt-2">
              <small> Posted By:</small>
            </b-col>
            <b-col>
              <div class="control-size">
                <b-form-select
                  v-model="post"
                  :options="posts"
                  class="mb-3 filter-select"
                  value-field="item"
                  text-field="name"
                ></b-form-select>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col v-if="selected == 'marketplace'" class="col filter mb-2">
          <b-row>
            <b-col class=" mt-2">
              <small> Type:</small>
            </b-col>
            <b-col>
              <div class="control-size">
                <b-form-select
                  v-model="category"
                  :options="categories"
                  class="mb-3 filter-select"
                  value-field="item"
                  text-field="name"
                ></b-form-select>
              </div>
            </b-col>
            <b-col class=" mt-2">
              <small> category:</small>
            </b-col>
            <b-col>
              <div class="control-size">
                <b-form-select
                  v-model="category"
                  :options="categories"
                  class="mb-3 filter-select"
                  value-field="item"
                  text-field="name"
                ></b-form-select>
              </div>
            </b-col>
            <b-col class=" mt-2">
              <small> Price:</small>
            </b-col>
            <b-col>
              <div class="control-size">
                <b-form-select
                  v-model="category"
                  :options="categories"
                  class="mb-3 filter-select"
                  value-field="item"
                  text-field="name"
                ></b-form-select>
              </div>
            </b-col>
            <b-col class=" mt-2">
              <small> Stock:</small>
            </b-col>
            <b-col>
              <div class="control-size">
                <b-form-select
                  v-model="category"
                  :options="categories"
                  class="mb-3 filter-select"
                  value-field="item"
                  text-field="name"
                ></b-form-select>
              </div>
            </b-col>
            <b-col class=" mt-2">
              <small> Condition:</small>
            </b-col>
            <b-col>
              <div class="control-size">
                <b-form-select
                  v-model="category"
                  :options="categories"
                  class="mb-3 filter-select"
                  value-field="item"
                  text-field="name"
                ></b-form-select>
              </div>
            </b-col>
            <b-col class=" mt-2">
              <small> Business:</small>
            </b-col>
            <b-col>
              <div class="">
                <b-form-select
                  v-model="category"
                  :options="categories"
                  class="mb-3 filter-select"
                  value-field="item"
                  text-field="name"
                ></b-form-select>
              </div>
            </b-col>
            <b-col>
              <b-button variant="primary" v-if="!map" @click="showMap(true)">
                Show map
              </b-button>
              <b-button variant="primary" v-if="map" @click="showMap(false)">
                Hide map
              </b-button>
            </b-col>
          </b-row>
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
        <b-col class="col-3 adds">
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
                  :title="sbusiness.title"
                />
              </div>
            </b-card>
          </b-col>
          <b-col class="col-2" v-if="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.732999183005!2d-74.006227!3d40.710128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sbg!4v1611866634082!5m2!1sen!2sbg"
              width="400"
              height="500"
              frameborder="0"
              class="frame"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </b-col>
        </b-row>
        <b-row class="mt-3 mb-2">
          <b-col>
            <b-card class="crd">
              <span class="title"> </span>
              <span class="ml-5 result"><small>398 Results found</small></span>
              <Business class="mb-3" />
              <Business class="mb-3 btn-busi" />
            </b-card>
          </b-col>
          <b-col class="col-3 adds">
            <Advertisement class="adds" />
          </b-col>
        </b-row>
      </b-col>
      <b-col v-if="selected == 'people'">
        <b-row class="mt-3 mb-2">
          <b-col>
            <span class="title"> </span>
            <span class="ml-5 result"><small>398 Results found</small></span>

            <People class="mt-4" />
          </b-col>
          <b-col class="col-3 adds">
            <Advertisement class="adds" />
          </b-col>
        </b-row>
      </b-col>
      <b-col v-if="selected == 'network'">
        <b-row>
          <b-col>
            <b-card>
              <h3>Sponsored Networks</h3>
              <div class="s-business">
                <SponsoredNetwork
                  class="ml-2"
                  v-for="(sbusiness, index) in sponsoredBusinesses"
                  :key="index"
                  :title="sbusiness.title"
                />
              </div>
            </b-card>
          </b-col>
          <b-col class="col-2" v-if="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.732999183005!2d-74.006227!3d40.710128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sbg!4v1611866634082!5m2!1sen!2sbg"
              width="400"
              height="500"
              frameborder="0"
              class="frame"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </b-col>
        </b-row>
        <b-row class="mt-3 mb-2">
          <b-col>
            <span class="title"> </span>
            <span class="ml-5 result"><small>398 Results found</small></span>
            <Networks class="mt-4" />
          </b-col>
          <b-col class="col-3 adds">
            <Advertisement class="adds" />
          </b-col>
        </b-row>
      </b-col>
      <b-col v-if="selected == 'posts'">
        <b-row class="mt-3 mb-2">
          <b-col>
            <span class="title"> </span>
            <span class="ml-5 result"><small>398 Results found</small></span>

            <Posts class="mt-4" />
          </b-col>
          <b-col class="col-3 adds">
            <Advertisement class="adds" />
          </b-col>
        </b-row>
      </b-col>
      <b-col v-if="selected == 'marketplace'">
        <b-row>
          <b-col>
            <b-card>
              <h3>Sponsored Businesses</h3>
              <div class="s-business">
                <SponsoredBusinesses
                  class="ml-2"
                  v-for="(sbusiness, index) in sponsoredBusinesses"
                  :key="index"
                  :title="sbusiness.title"
                />
              </div>
            </b-card>
          </b-col>
          <b-col class="col-2" v-if="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.732999183005!2d-74.006227!3d40.710128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sbg!4v1611866634082!5m2!1sen!2sbg"
              width="400"
              height="500"
              frameborder="0"
              class="frame"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </b-col>
        </b-row>
        <b-row class="mt-3 mb-2">
          <b-col>
            <span class="title"> </span>
            <span class="ml-5 result"><small>398 Results found</small></span>
            <Marketplace class="mt-4 mb-2" />
          </b-col>
          <b-col class="col-3 aads">
            <Advertisement class="adds" />
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
import SponsoredNetwork from "@/components/search/sponsoredNetwork";
import Business from "@/components/search/businessmain";
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
    SponsoredNetwork,
    Business,
    Navbar,
    Footer,
  },
  data() {
    return {
      selected: "all",
      location: "any",
      category: "any",
      post: "any",
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
        { item: "any", name: "Location: Any" },
        { item: "yaounde", name: "Yaounde, Cameroon" },
        { item: "dhaka ", name: "Dhaka, Bangladesh" },
        { item: "new york", name: "New York, United States" },
        { item: "douala", name: "Douala, Cameroon" },
        { item: "karachi", name: "Karachi, Pakistan" },
      ],
      categories: [
        { item: "any", name: "Any" },
        { item: "restaurant", name: "Restaurant" },
        { item: "home service", name: "Home Services" },
        { item: "auto service", name: "Auto Services" },
        { item: "argiculture", name: "Agriculture" },
        { item: "technology", name: "Technology" },
      ],
      posts: [
        { item: "any", name: "Any" },
        { item: "people", name: "People I am following" },
        { item: "business", name: "Businesses i am following" },
        { item: "networks", name: "Networks I am following" },
      ],
      sponsoredBusinesses: [
        { title: "Business 1" },
        { title: "Business 2" },
        { title: "Business 3" },
        { title: "Business 4" },
      ],
    };
  },
  methods: {
    showMap(arg) {
      this.map = arg;
      console.log("worker");
    },
  },
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
.control-size {
  width: 90%;
  margin-left: 20px;
}

.frame {
  border: 0;
}
@media only screen and (max-width: 768px) {
  .adds {
    display: none;
  }
  .busi {
    position: relative;
    bottom: 1000px;
  }
  .crd{
   height: 1250px;
  }
  .btn-busi{
    margin-top: 150px;
  }
}
</style>
