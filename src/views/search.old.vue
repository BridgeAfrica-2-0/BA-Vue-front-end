<template>
  <div>
    <Navbar />

    <b-container fluid>
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
              <small> {{ $t("search.Filter") }}:</small>
            </b-col>
            <b-col>
              <div class="control-size">
                <b-form-select
                  v-model="location"
                  :options="filters"
                  class="mb-3 filter-select with"
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
              <small> {{ $t("search.Category") }}:</small>
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
                {{ $t("search.Show_map") }}
              </b-button>
              <b-button variant="primary" v-if="map" @click="showMap(false)">
                {{ $t("search.Hide_map") }}
              </b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col v-if="selected == 'people'" class="col-5 mb-2">
          <b-row>
            <b-col class="col-3 mt-2">
              <small> {{ $t("search.Workplace") }}:</small>
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
              <small> {{ $t("search.Category") }}:</small>
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
                {{ $t("search.Show_map") }}
              </b-button>
              <b-button variant="primary" v-if="map" @click="showMap(false)">
                {{ $t("search.Hide_map") }}
              </b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col v-if="selected == 'posts'" class="col-5 filter mb-2">
          <b-row>
            <b-col class="col-3 mt-2">
              <small> {{ $t("search.Posted_By") }}:</small>
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
          <div class="uptions">
            <div class="control-size">
              <b-form-select
                v-model="category"
                :options="categories"
                class="mb-3 filter-select"
                value-field="item"
                text-field="name"
              ></b-form-select>
            </div>

            <div class="control-size">
              <b-form-select
                v-model="category"
                :options="categories"
                class="mb-3 filter-select"
                value-field="item"
                text-field="name"
              ></b-form-select>
            </div>

            <div class="control-size">
              <b-form-select
                v-model="category"
                :options="categories"
                class="mb-3 filter-select"
                value-field="item"
                text-field="name"
              ></b-form-select>
            </div>

            <div class="control-size">
              <b-form-select
                v-model="category"
                :options="categories"
                class="mb-3 filter-select"
                value-field="item"
                text-field="name"
              ></b-form-select>
            </div>

            <div class="control-size">
              <b-form-select
                v-model="category"
                :options="categories"
                class="mb-3 filter-select"
                value-field="item"
                text-field="name"
              ></b-form-select>
            </div>

            <b-button
              size="sm"
              variant="primary"
              v-if="!map"
              @click="showMap(true)"
              class="ml-2"
            >
              {{ $t("search.Show_map") }}
            </b-button>
            <b-button
              size="sm"
              variant="primary"
              v-if="map"
              class="ml-2"
              @click="showMap(false)"
            >
              {{ $t("search.Hide_map") }}
            </b-button>
          </div>
        </b-col>
      </b-row>

      <b-row v-if="selected == 'all'">
        <b-col>
          <Businesses />
          <People class="mt-4" />
          <Networks :data="networks" class="mt-4" />
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
              <h3>{{ $t("search.Sponsored_Businesses") }}</h3>
              <div class="s-business">
                <b-row class="ml-3">
                  <div class="left">
                    <b-icon icon="arrow-left-circle"></b-icon>
                  </div>
                  <b-col class="ml-5">
                    <b-row>
                      <b-col cols="4">
                        <SponsoredBusinesses class="ml-2" />
                      </b-col>

                      <b-col cols="4">
                        <SponsoredBusinesses class="ml-2" />
                      </b-col>

                      <b-col cols="4">
                        <SponsoredBusinesses class="ml-2" />
                      </b-col>
                    </b-row>
                  </b-col>
                  <div class="left ml-5">
                    <b-icon icon="arrow-right-circle"></b-icon>
                  </div>
                </b-row>
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
            <b-card class="crd card">
              <span class="title"> </span>
              <span class="ml-5 result "><small>398 {{ $t("search.Results_found") }}</small></span>
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
            <span class="ml-5 result"><small>398 {{ $t("search.Results_found") }}</small></span>

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
              <h3>{{ $t("search.Sponsored_Networks") }}</h3>
              <div class="s-business">
                <b-row class="ml-3">
                  <div class="left">
                    <b-icon icon="arrow-left-circle"></b-icon>
                  </div>
                  <b-col class="ml-5">
                    <b-row>
                      <b-col cols="12" md="4" sm="12">
                        <SponsoredNetwork />
                      </b-col>

                      <b-col cols="12" md="4" sm="12">
                        <SponsoredNetwork />
                      </b-col>

                      <b-col cols="12" md="4" sm="12">
                        <SponsoredNetwork />
                      </b-col>
                    </b-row>
                  </b-col>
                  <div class="left ml-5">
                    <b-icon icon="arrow-right-circle"></b-icon>
                  </div>
                </b-row>
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
            <!--
            <span class="title"> </span>
            <span class="ml-5 result"><small>398 Results found</small></span>

            -->

            <Networks :data="networks" class="mt-4" />
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
            <span class="ml-5 result"><small>398 {{ $t("search.Results_found") }}</small></span>

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
              <h3>{{ $t("search.Sponsored_Businesses") }}</h3>
              <div class="s-business">
                <b-row class="ml-3">
                  <div class="left">
                    <b-icon icon="arrow-left-circle"></b-icon>
                  </div>
                  <b-col class="ml-5">
                    <b-row>
                      <SponsoredBusinesses
                        class="ml-2"
                        v-for="(sbusiness, index) in sponsoredBusinesses"
                        :key="index"
                        :title="sbusiness.title"
                    /></b-row>
                  </b-col>
                  <div class="left ml-5">
                    <b-icon icon="arrow-right-circle"></b-icon>
                  </div>
                </b-row>
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
            <span class="ml-5 result"><small>398 {{ $t("search.Results_found") }}</small></span>
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
//import Footer from "@/components/footer";

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
   // Footer,
  },
  data() {
    return {
      selected: "all",
      location: "any",
      category: "any",
      post: "any",
      map: false,
      networks: [{ type: "minus" }, { type: "plus" }],
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
  width: 100px;
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
  font-size: 20px;
  top: -5px;
  left: 596px;
  color: green;
  font-weight: bold;
}
.control-size {
  position: relative;
  margin-left: 90px;
}

.with {
  position: relative;
  width: 200px;
  left: -140px;
}

.frame {
  border: 0;
}
.crd {
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
}
.uptions {
  display: flex;
  margin-left: 30px;
}
.left {
  background-color: #e75d29;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
  height: 40px;
  padding: 10px;
  color: #fff;
  border-radius: 20px;
  margin-top: 70px;
  cursor: pointer;
  margin-left: 10px;
}
@media only screen and (max-width: 768px) {
  .adds {
    display: none;
  }
  .busi {
    position: relative;
    bottom: 1000px;
  }
  .crd {
    height: 1250px;
  }
  .btn-busi {
    margin-top: 150px;
  }
}
</style>
