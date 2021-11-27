<template>
  <div>
    <b-icon icon="person-fill" class="icon-size" variant="primary"></b-icon>
    <b> About </b>

    <hr />

    <b-card>
      <div class="mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.732999183005!2d-74.006227!3d40.710128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sbg!4v1612237569797!5m2!1sen!2sbg"
          height="450"
          frameborder="0"
          class="map mt-1"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>

      <b-row>
        <b-col>
          <b-card class="mb-2">
            <div
              class="edit"
              v-b-modal.biographyModal
              @click="
                business_about_input = JSON.parse(
                  JSON.stringify(business_about)
                )
              "
            >
              <b-icon icon="pencil-fill" variant="primary"></b-icon>
            </div>
            <h4 class="mb-4 text-center username">
              {{ business_about.name }}
            </h4>
            <p class="text-justify text">
              {{ business_about.location_description }}
            </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <b-card-text>
              <div class="edit" v-b-modal.addressBusinessModal>
                <b-icon
                  icon="pencil-fill"
                  variant="primary"
                  @click="load"
                ></b-icon>
              </div>

              <p>
                <b-icon
                  icon="briefcase-fill"
                  class="primary icon-size"
                ></b-icon>
                {{ business_about.category }}
              </p>
              <p>
                <b-icon icon="search" class="primary icon-size"></b-icon>
                {{ business_about.name }}
              </p>
              <p>
                <b-icon icon="geo-alt-fill" class="primary icon-size"></b-icon>
                {{ business_about.address }}, {{ business_about.city }},
                {{ business_about.country }}
              </p>
              <p>
                <b-icon icon="link" class="primary icon-size"></b-icon>
                {{ business_about.website }}
              </p>
              <p>
                <b-icon icon="people-fill" class="primary icon-size"></b-icon>
                {{ business_about.community }}
                {{ business_about.community > 1000 ? "K" : "" }} Community
              </p>
              <p>
                <b-icon
                  icon="telephone-fill"
                  class="primary icon-size"
                ></b-icon>
                {{ business_about.phone }}
              </p>
              <p>
                <b-icon icon="envelope-fill" class="primary icon-size"></b-icon>
                {{ business_about.email }}
              </p>
              <p>
                <b-icon icon="clock" class="primary icon-size"></b-icon>
                <b-link> Open now </b-link>
                <br />
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
                </b-dropdown>
              </p>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-card>

    <b-modal
      id="biographyModal"
      hide-footer
      title="Business Biography"
      size="md"
      ref="biographyModal"
      @close="cancel"
      @ok="validate('editAddress')"
      @keyup="validate('editAddress')"
    >
      <b-form @submit.prevent="validate('modifyBiography')">
        <div class="form-group">
          <label for="title">Bussiness Name:</label><br />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            class="form-control"
            v-model="business_about_input.name"
            required
          />
        </div>

        <div class="form-group">
          <label for="description">Description:</label><br />
          <textarea
            type="text"
            id="description"
            name="description"
            v-model="business_about_input.location_description"
            class="mb-3 form-control"
            placeholder="description"
            required
          ></textarea>
        </div>

        <b-button class="mt-3 btn-block" variant="primary" type="submit">
          Modify
        </b-button>
      </b-form>
    </b-modal>
    <b-modal
      id="addressBusinessModal"
      ref="addressBusinessModal"
      hide-footer
      title="Edit Address"
      size="lg"
      @close="cancel"
      @keyup="validate('editAddress')"
    >
      <b-form @submit.prevent="validate('editAddress')">
        <div class="form-group">
          <label for="username">Business Name:</label><br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Business Name"
            v-model="business_about_input.name"
            class="form-control"
            required
          />
        </div>

        <div class="form-group">
          <label for="alias">Category:</label><br />
          <multiselect
            v-model="multiselecvalue"
            @input="subcategories"
            tag-placeholder="Add this as new tag"
            placeholder="Search or add a tag"
            label="name"
            track-by="id"
            :options="pcategories"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
          ></multiselect>
        </div>

        <div class="form-group">
          <label for="alias">Sub-Category:</label><br />
          <multiselect
            v-model="filterselectvalue"
            tag-placeholder="Add this as new tag"
            placeholder="Search or add a tag"
            label="name"
            track-by="subcategory_id"
            :options="scategories"
            :multiple="true"
            :taggable="true"
            @tag="addFilter"
          ></multiselect>
        </div>

        <label class="typo__label">Fiters</label>
        <div>
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab
                :title="filters.name"
                v-for="filters in filterselectvalue"
                :key="filters.id"
                active
                ><b-card-text>
                  <b-form-group label="Filters" class="colorblack">
                    <b-form-checkbox-group
                      id=""
                      class="colorblack"
                      v-model="select_filterss"
                      name="filters"
                    >
                      <b-form-checkbox
<<<<<<< HEAD
                      class="colorblack"
=======
                        class="colorblack"
>>>>>>> 4d6df2670bce3f8f1b9cdc061b702bdce641c396
                        v-for="fil in filters.filters"
                        :key="fil.id"
                        :value="fil.id"
                      >
                        {{ fil.name }}
                      </b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>

        <div class="form-group">
          <label for="username">Keywords</label><br />
          <div class="col-md-12 pl-0 pr-0">
            No Choices

            <input
              type="text"
              name="alias"
              id="alias"
              placeholder="Enter your Keywords"
              v-model="business_about_input.keywords"
              class="form-control"
              required
            />
          </div>
        </div>
        <b-form-group
          id="input-group-1"
          label="Country"
          label-for="input-1"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            type="text"
            v-model="business_about_input.country"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="City"
          label-for="input-2"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            type="text"
            v-model="business_about_input.city"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Neigbourhood"
          label-for="input-2"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            type="text"
            v-model="business_about_input.address"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Website"
          label-for="input-2"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            type="text"
            v-model="business_about_input.website"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Phone Contact"
          label-for="input-2"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            v-model="business_about_input.phone"
            type="tel"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Business Email"
          label-for="input-2"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            v-model="business_about_input.email"
            type="email"
            placeholder="Enter your email"
            required
          ></b-form-input>
        </b-form-group>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="12"
              label="Business Hours"
              label-size="md"
              label-class=" pt-0 "
              class="mb-0"
            >
              <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
                <b-form-radio-group
                  class="a-text text"
                  :options="['Always Open', 'Open for selected hours']"
                  name="open"
                  :aria-describedby="ariaDescribedby"
                  v-model="open"
                  disabled
                ></b-form-radio-group>
                <br />
                <b-container>
                  <b-row v-for="day in dayOfWorks" :key="day.day">
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text text"
                        name="works"
                        v-model="day.check"
                        :checked="day.check"
                      >
                        {{ day.day }}</b-form-checkbox
                      ></b-col
                    >

                    <b-col
                      ><b-form-input
                        name="start"
                        type="text"
                        v-model="day.opening_time"
                        :required="day.check ? 'required' : null"
                      ></b-form-input
                    ></b-col>
                    --
                    <b-col
                      ><b-form-input
                        name="end"
                        type="text"
                        v-model="day.closing_time"
                        :required="day.check ? 'required' : null"
                      ></b-form-input
                    ></b-col>
                  </b-row>
                  <br />
                </b-container>
              </b-form-group>
            </b-form-group>
          </b-container>
        </div>

        <b-button class="mt-3 btn-block" variant="primary" type="submit">
          Modify
        </b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
//import moment from "moment";
export default {
  data() {
    return {
      business_id: null,
      categories: [
        { item: "Professional_and_home_service", name: "Professionals" },
        { item: "Agriculture ", name: "Agriculture " },
        { item: "Restaurant ", name: " Restaurant " },
        { item: "Electronics ", name: "Electronics " },
        { item: "Handicrafts", name: "Handicrafts" },
        { item: "clothing", name: "clothing" },
        { item: "Mechanics", name: "Mechanics" },
        { item: "Health_unit ", name: "Health unit " },
        { item: "Bars", name: "Bars" },
        { item: "Hair_and_beauty ", name: "Hair and beauty " },
        { item: "Real_estate ", name: "Real_estate " },
        { item: "Travelling ", name: "Travelling " },
        { item: "Hotels", name: "Hotels" },
        { item: "station", name: " station  " },
        { item: "Mayor_concils", name: "Mayor_concils" },
        { item: "Taxis service", name: "Taxis service" },
      ],
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
      business_about: {
        name: "TONTON LA FORCE",
        logo_path: "http://localhost:8000/storage",
        category: "Hourse Marketing",
        keywords: null,
        language: null,
        location_description:
          "Tempore quo soluta voluptates quis. Doloremque autem minus ut nisi molestias maiores cum. Et assumenda velit expedita et et sint sed in.",
        website: null,
        community: 6,
        phone: null,
        email: null,
        business_open_hours: [
          {
            day: "monday",
            opening_time: "09:05:12",
            closing_time: "15:06:18",
          },
          {
            day: "tuesday",
            opening_time: "07:05:38",
            closing_time: "14:05:43",
          },
        ],
        region: null,
        address: null,
        city: null,
        country: null,
        lat: -56.200329,
        lng: -6.249487,
      },
      business_about_input: {
        name: "TONTON LA FORCE",
        logo_path: "http://localhost:8000/storage",
        category: "Hourse Marketing",
        keywords: null,
        language: null,
        location_description:
          "Tempore quo soluta voluptates quis. Doloremque autem minus ut nisi molestias maiores cum. Et assumenda velit expedita et et sint sed in.",
        website: null,
        community: 6,
        phone: null,
        email: null,
        business_open_hours: [
          {
            day: "monday",
            opening_time: "09:05:12",
            closing_time: "15:06:18",
          },
          {
            day: "tuesday",
            opening_time: "07:05:38",
            closing_time: "14:05:43",
          },
        ],
        region: null,
        address: null,
        city: null,
        country: null,
        lat: -56.200329,
        lng: -6.249487,
      },
      openNow: null,
      open: null,
    };
  },
  watch: {
    open(value) {
      console.log("change open value ", value);
    },
    dayOfWorks: {
      handler(newValue, oldValue) {
        let num = 0;
        newValue.map((day) => {
          if (day.check) {
            num = num + 1;
          }
        });
        if (num >= 7) {
          this.open = "Always Open";
        } else {
          this.open = "Open for selected hours";
        }
        console.log(newValue);
        console.log(oldValue);
      },
      deep: true,
    },
  },
  created() {
    console.log("Load Business About start +++++");
    this.$store
      .dispatch("businessOwner/loadUserBusinessAbout", {
        business_abobusiness_id: this.business_about_input,
        business_id: this.business_id,
      })
      .then((response) => {
        console.log(
          response,
          "load business about response end response (3) ++++"
        );
        this.dayOfWorks = this.initialize(this.dayOfWorks);
        console.log(this.business_about);
      })
      .catch((error) => {
        console.log("error from the server or browser error(2) ++++", error);
      })
      .finally(() => {
        this.business_about = JSON.parse(
          JSON.stringify(this.$store.getters["businessOwner/getBusinessAbout"])
        );
        console.log(this.business_about);
      });
  },
  mounted() {
    this.business_id = this.$route.params.id;
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

    // business_about_input(){
    //   this.business_about_input = JSON.parse(
    //     JSON.stringify(this.business_about)
    //   );
    //   return this.business_about_input;
    // }
  },
  methods: {
    selectHour(day) {
      this.openNow = day;
    },
    initialize(daysOfWorks) {
      const zdaysOfWorks = daysOfWorks.map((day) => {
        this.open =
          this.business_about.business_open_hours.length >= 7
            ? "Always Open"
            : "Open for selected hours";
        this.business_about.business_open_hours.map((dayOpen) => {
          if (day.day.toLowerCase() === dayOpen.day.toLowerCase()) {
            day.closing_time = dayOpen.closing_time;
            day.opening_time = dayOpen.opening_time;
            day.check = true;
          }
        });
        return day;
      });
      console.log(zdaysOfWorks);
      return zdaysOfWorks;
    },
    cancel() {
      console.log("cancel method ");
      this.business_about_input = JSON.parse(
        JSON.stringify(this.business_about)
      );
    },
    /**
     *
     * @param idForm
     */
    validate(type) {
      switch (type) {
        case "modifyBiography":
          console.log(
            "vuex store +++++ " +
              this.$store.getters["businessOwner/getBusinessAbout"]
          );
          console.log(this.$store.getters["businessOwner/getBusinessAbout"]);
          console.log("Modify Business Biography start++++");
          console.log("-------",this.business_about_input.about_business);
          console.log("-----"+this.business_id);
          this.test();
          var data = {  business_id: this.business_id,
          data : {
              about_business: this.business_about_input.about_business,
             
              name: this.business_about_input.name
              }
            } ;
          this.$store
            .dispatch("businessOwner/updateBusinessBiographie",data )
            .then((response) => {
              console.log(
                "fetch finished on the database response (3) ",
                response
              );
              console.log("Modify Business Biography end++++");
            })
            .catch((error) => {
              console.log(
                error,
                "Modify Business Biography end error (2) ++++"
              );
            })
            .finally(() => {
              console.log("Finally Modify Business About Biography  +++++");
              this.business_about = JSON.parse(
                JSON.stringify(
                  this.$store.getters["businessOwner/getBusinessAbout"]
                )
              );
              console.log(this.business_about);
              this.$refs["biographyModal"].hide();
            });
          break;
        case "editAddress":
          console.log("edit address business");
          this.test();
          console.log(this.business_about_input);
          this.$store
            .dispatch("businessOwner/updateUserBusinessAbout", {
              business_about: this.business_about_input,
              business_id: this.business_id,
            })
            .then((response) => {
              console.log(
                "update user business about response ++++++",
                response
              );
              this.business_about =
                this.$store.getters["businessOwner/getBusinessAbout"];
              console.log("update user business about end");
            })
            .catch((error) => {
              console.log(error, "update user business about end++++");
            })
            .finally(() => {
              console.log("Finally Update Business About Biography  +++++");
              this.business_about = JSON.parse(
                JSON.stringify(
                  this.$store.getters["businessOwner/getBusinessAbout"]
                )
              );
              console.log(this.business_about);
              this.$refs["addressBusinessModal"].hide();
              this.$refs["biographyModal"].hide();
            });
          break;
        default:
          console.log("No Correspondance");
          break;
      }
    },
    test() {
      let businessAddress = this.dayOfWorks.filter((day) => {
        return day.check === true;
      });
      if (businessAddress.length > 0) {
        businessAddress = businessAddress.map((day) => {
          return [day.day, day.opening_time, day.closing_time];
        });
      } else {
        businessAddress = [];
      }
      console.log(this.business_about_input.business_open_hours);
      this.business_about_input.business_open_hours = businessAddress;
    },
    load() {
      this.business_about_input = JSON.parse(
        JSON.stringify(this.business_about)
      );
    },
  },
};
</script>

<style scoped>
.map {
  border: 0;
  width: 100%;
}
.btn-item {
  color: green;
}
.edit {
  position: relative;
  left: 98%;
  cursor: pointer;
  display: inline-block;
}
h4,
p {
  text-align: left;
}
@media (min-width: 762px) {
  .primary {
    margin-right: 6px;
  }
}
@media (min-width: 762px) {
  .primary {
    margin-right: 8px;
  }
}
@media (max-width: 768px) {
  .primary {
    margin-right: 6px;
    font-size: 12px !important;
  }
  .card-text {
    font-size: 14px !important;
  }
}
@media (min-width: 768px) {
  .primary {
    margin-right: 8px;
    font-size: 14px !important;
  }
  .card-text {
    font-size: 14px !important;
  }
}
</style>