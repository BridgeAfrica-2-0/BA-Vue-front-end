<template>
  <div>
    <Navbar />

    <div class="container-fluid">
      <caroussel />

      <b-card class="border mb-3 ">
        <b-container>
          <b-row>
            <b-col cols="12" md="10">
              <b-input-group class="my-auto input-size ">
                <select id="category" class="form-control br-0">
                  <option value="" selected="" disabled="">
                    Sort
                  </option>
                  <option>Latest</option>
                  <option>Popular</option>
                  <option>Rating</option>
                </select>

                <b-form-input
                  id="inline-form-input-name"
                  class="br-0"
                  placeholder="Search "
                ></b-form-input>

                <gmap-autocomplete class="br">
                  <template v-slot:input="slotProps">
                    <b-form-input
                      prepend-inner-icon="place"
                      placeholder="Location Of Event"
                      ref="input"
                      class="br"
                      v-on:listeners="slotProps.listeners"
                      v-on:attrs="slotProps.attrs"
                    >
                    </b-form-input>
                  </template>
                </gmap-autocomplete>
              </b-input-group>
            </b-col>

            <b-col cols="12" md="2" class="t-center mt-2">
              <b-button variant="primary" block>
                <b-icon icon="search"></b-icon> Search
              </b-button>
            </b-col>
          </b-row>

          <b-dropdown
            text="Primary"
            variant="outline-primary"
            no-caret
            class="m-2 float-right d-blockk"
          >
            <template #button-content>
              <span> Filter <b-icon icon="filter"> </b-icon> </span>
            </template>

            <b-dropdown-item href="">Agriculture</b-dropdown-item>

            <b-dropdown-item href="#">Handicfrafts</b-dropdown-item>
            <b-dropdown-item href="#">Electronics</b-dropdown-item>

            <b-dropdown-item href="#">Restaurant</b-dropdown-item>

            <b-dropdown-item href="#">clothing</b-dropdown-item>
          </b-dropdown>
        </b-container>
      </b-card>

      <b-row>
        <b-col md="3">
          <b-card class="border  h-100  d-mobile">
            <h4>Shop By Category</h4>

            <br />

            <h5 v-for="option in options" :key="option.value" class="mt-2">
              {{ option.text }}
            </h5>
          </b-card>
        </b-col>
        <b-col>
          <div style="height: 700px;overflow-y: scroll;"><Market /></div>
        </b-col>
      </b-row>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Market from "@/components/market/market";

import caroussel from "@/components/market/caroussel";
export default {
  components: {
    Navbar,
    Footer,
    Market,
    caroussel,
  },
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "Agriculture", value: "Agriculture" },
        { text: "Handicfraft", value: "Handicfraft" },
        { text: "Electronics", value: "Electronics" },
        { text: "Restaurant", value: "Restaurant" },
<<<<<<< HEAD
        { text: "clothing", value: "clothing" },
      ],
    };
  },
=======
        { text: "clothing", value: "clothing" }
      ]
    };
  }
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
};
</script>

<style scoped>
.t-center {
  text-align: center;
  align-content: center;
}

.d-blockk {
  display: none;
}

@media only screen and (max-width: 768px) {
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
