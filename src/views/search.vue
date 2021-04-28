<template>
  <div>
    <div class="searchnav">
      <b-row>
        <b-col cols="3">
          <img
            src="@/assets/balogo.png"
            width="30%"
            height="50%"
            class="logo-image"
          />
        </b-col>

        <b-col class="a-center">
          <b-input-group class="my-auto input-size">
            <b-form-input
              id="inline-form-input-name"
              class="input-size"
              placeholder="Search Bridge Africa"
            ></b-form-input>

            <template #append>
              <b-input-group-text class="b-groupe"
                ><strong class="color-sit">
                  <b-icon-search></b-icon-search> </strong
              ></b-input-group-text>
            </template>

            <b-form-input
              id="inline-form-input-name"
              class="input-size"
              placeholder="My location"
            ></b-form-input>
          </b-input-group>
        </b-col>

        <b-col cols="1"> </b-col>
      </b-row>
    </div>

    <div class="container searchly">
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="optionsnav"
        activeColor="#1d98bd"
        @change="handleChange"
      >
      </ly-tab>
    </div>

    <div class="container-flex mt-3 p-3">
      <b-row class="p-3">
        <b-col cols="2">
          <div id="all" class="ml-3">
            <h6>Filters</h6>

            <b-form-group
              label-cols-lg="3"
              label="Location"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
            </b-form-group>
            <b-form-select v-model="selected">
              <b-form-select-option value="a">
                My Location
              </b-form-select-option>
            </b-form-select>

            <br />

            <hr />

            <b-form-group
              label-cols-lg="12"
              label="Neighbourhood"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-form-checkbox id="" class="a-text" name="" value="">
                Buea</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                Tiko</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                Limbe</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                MUtengene</b-form-checkbox
              >
            </b-form-group>

            <br />

            <hr />

            <b-form-group
              label-cols-lg="12"
              label="Distance"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-form-checkbox id="" class="a-text" name="" value="">
                3km</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                9km</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                15km</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                25km</b-form-checkbox
              >
            </b-form-group>
          </div>
        </b-col>

        <b-col cols="6">


          <div class="container-flex"   >
             <b-card>

               <!--filter for all takes just two fields at a time  -->

               <div id="all" v-if="selectedId == '0'"  >
              <h6>Sponsored Businesses</h6>


              <Sponsor />

              <h6>Businesses</h6>

              <Business />

              <span class="float-right mb-3"> see more </span> <br />

              <hr />

              <h6>People</h6>

              <People />
              <span class="float-right mb-3"> see more </span> <br />

              <hr />

              <h6>Network</h6>

              <Network />
              <span class="float-right mb-3"> see more </span> <br />

              <hr />

              Market

              <Market />

              <span class="float-right mb-3"> see more </span> <br />

              <hr />

              <h6>Post</h6>

              <Post />

              <span class="float-right mb-3"> see more </span> <br />

              <hr />

               </div>

              <!--  select just businesses      -->

              <div id="businesses" v-if="selectedId == '1'" >

             
              <h6>Businesses</h6>

              <Business />

              <Business />

              <Business />

              <Business />


              </div>

              <!-- filter out only people -->



              <div id="people" v-if="selectedId == '2'" >

             
              <h6>People</h6>

              <People />

              <People />

              <People />

              <People />


              </div>


              <!-- filter out just the network  -->



              <div id="people" v-if="selectedId == '3'" >

             
              <h6>Networks</h6>

              <Network />

              <Network />

              <Network />

              <Network />


              </div>

              <!-- Filter out just the market place -->


              <div id="people" v-if="selectedId == '4'" >

             
              <h6>Market</h6>

              <Market />

              <Market />

              <Market />

              <Market />


              </div>



              <!-- Filter out just the post  -->


              <div id="people" v-if="selectedId == '5'" >

             
              <h6>Post</h6>

              <Post />

              <Post />

              <Post />

              <Post />


              </div>












              
               






            </b-card>
          </div>

     






        </b-col>

        <b-col cols="4"> <Map /> </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import LyTab from "@/tab/src/index.vue";

import Map from "@/components/search/map";

import Business from "@/components/search/business";
import People from "@/components/search/people";
import Network from "@/components/search/network";
import Post from "@/components/search/posts";
import Market from "@/components/search/market";

import Sponsor from "@/components/search/sponsoredBusiness";

export default {
  components: {
    LyTab,
    Map,
    Business,
    Sponsor,
    People,
    Network,
    Post,
    Market,

    // Footer,
  },
  data() {
    return {
      selected: "all",
      selectedId: 0,
      bottomSelectedId: 0,
      location: "any",
      category: "any",
      post: "any",
      map: false,

      items: [
        { label: "All " },

        { label: "Business" },
        { label: "People" },
        { label: "Network" },
        { label: "Market" },
        { label: "Post" },
      ],
      optionsnav: {
        activeColor: "#1d98bd",
      },
    };
  },

  methods: {
    handleChange(item, index) {
      console.log(item, index);
    },
  },
};
</script>

<style scoped>
.input-size {
  height: 55px;
}

.logo-image {
  margin-left: 50px;
}

.input-group-text {
  background-color: white;
}

.a-center {
  margin-right: 200px;
  margin-left: -100px;
}

.searchnav {
  margin: 3px;
}

.t-center {
  text-align: center;
  align-content: center;
}

.d-blockk {
  display: none;
}

@media only screen and (min-width: 768px) {
  .d-mobile {
    display: none;
  }

  .d-blockk {
    display: block;
  }
}

.m-30 {
  margin-left: -30px;
}

.br-0 {
  border-radius: 0px;
  height: 50px;
}

.br {
  border: 1px solid #ced4da;
}
</style>
