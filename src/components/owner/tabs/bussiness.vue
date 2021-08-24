<template>
  <div class="p-0 m-0">
    <div class="col-md-12 p-0 ">
      <fas-icon
        class="violet float-left mr-1  icon-size primary"
        :icon="['fas', 'building']"
      />Businesss
      <button
        type="button"
        data-toggle="modal"
        data-target="#addbusinessbtnModal"
        class="btn btn-outline-primary pull-right float-right mb-2"
        style="margin-top: -6px;"
        v-b-modal.modal-1
      >
        Add Business
      </button>

      <hr />

      <b-modal
        id="modal-1"
        ref="modal-1"
        title="Add Bussiness"
        size="lg"
        hide-footer
        @close="cancel"
      >
        <div class="row">
          <div class="col-md-12 mx-0">
            <form id="msform" @submit.prevent="saveBusiness">
              <!-- progressbar -->
              <ul id="progressbar">
                <li class="" id="general" :class="{ active: fieldset1 === 1 }">
                  <strong>General</strong>
                </li>
                <li id="contact" class="" :class="{ active: fieldset1 === 2 }">
                  <strong>Contact</strong>
                </li>
                <li id="location" :class="{ active: fieldset1 === 3 }">
                  <strong>Location</strong>
                </li>
              </ul>
              <!-- fieldsets -->
              <fieldset
                class="position-relative opacity-100"
                v-if="fieldset1 === 1"
              >
                <div class="form-card">
                  <div class="row">
                    <input
                      type="file"
                      accept="image/*"
                      ref="image"
                      style="display:none"
                      @change="saveLogo"
                    />
                    <div class="col-md-6">
                      <div class="image-upload-wrap">
                        <a
                          data-toggle="modal"
                          data-target="#createalbumModal"
                          @click="$refs.image.click()"
                        >
                          <div
                            class="drag-text"
                            v-if="profile_business_input.logo_path === null"
                            style="height: 100%"
                          >
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <h3>Add Logo</h3>
                          </div>
                          <div
                            class="drag-text"
                            v-if="profile_business_input.logo_path !== null"
                            style="height: 100%; width: 100%; padding: 0"
                          >
                            <img
                              :src="logo_path"
                              style="height: 100%; width: 100%"
                            />
                          </div>
                        </a>
                        <div></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username">Business Name:</label><br />
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Busness Name"
                          class="form-control"
                          v-model="profile_business_input.name"
                          required
                        />
                      </div>

                      <div class="form-group">
                        <label for="category">Business Category:</label><br />

                        <b-form-select
                          v-model="profile_business_input.category"
                          :options="categories"
                          class="mb-3"
                          value-field="item"
                          text-field="name"
                          required
                        ></b-form-select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username">Keywords</label><br />
                        <div class="col-md-12 pl-0 pr-0">
                          <input
                            type="text"
                            name="keywords"
                            id="keywords"
                            placeholder="Enter Keyword"
                            class="form-control"
                            required
                            v-model="profile_business_input.keywords"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username"> TimeZone: </label><br />
                        <select
                          id="category"
                          class="form-control"
                          v-model="profile_business_input.timezone"
                        >
                          <option value="" disabled="">Select Timezone</option>
                          <option selected value="(UTC - 09:00) Alaska"
                            >(UTC - 09:00) Alaska</option
                          >
                          <option value="(UTC - 09:00) Alaska2"
                            >(UTC - 09:00) Alaska1</option
                          >
                          <option value="(UTC - 09:00) Alaska3"
                            >(UTC - 09:00) Alaska2</option
                          >
                          <option value="(UTC - 09:00) Alaska4"
                            >(UTC - 09:00) Alaska3</option
                          >
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="username">About</label><br />
                        <textarea
                          type="textarea"
                          name="description"
                          id="description"
                          placeholder="Brief description about your Busness"
                          class="form-control"
                          required
                          v-model="profile_business_input.about_business"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  name="cancel"
                  class="cancel btn btn-dark-gray"
                  value="Cancel"
                  @click="cancel"
                />
                <input
                  type="button"
                  name="next"
                  class="next btn ml-3 btn-outline-primary orange"
                  value="Next Step"
                  @click="advance(2)"
                />
              </fieldset>

              <fieldset
                class="position-relative opacity-100"
                v-if="fieldset1 === 2"
              >
                <div class="form-card">
                  <div class="row">
                    <label
                      class=" pl-0 ml-3 control-label float-left"
                      for="name"
                      >Phone</label
                    >

                    <div class="input-group col-md-12 mb-4 selec">
                      <div
                        class="col-md-12  pl-0 pr-0"
                        v-if="!profile_business_input.hasNoPhone"
                      >
                        <select
                          id="phone1"
                          class="form-control col-md-3 float-left"
                          v-model="profile_business_input.phoneId"
                        >
                          <option selected="+1" value="+1">USA(+1)</option>
                          <option value="+33">FRENC(+33)</option>
                          <option value="+237">CAMEROON(+237)</option>
                          <option value="+91">India(+91)</option>
                        </select>

                        <input
                          id="number"
                          name="number"
                          type="tel"
                          placeholder=""
                          class="form-control col-md-9"
                          v-model="profile_business_input.phone"
                        />
                      </div>

                      <div class="checkbox">
                        <label
                          ><input
                            type="checkbox"
                            value=""
                            v-model="profile_business_input.hasNoPhone"
                          />This business does not have a Phone</label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="row" v-if="!profile_business_input.hasNoPhone">
                    <label
                      class=" pl-0 ml-3 control-label float-left"
                      for="name"
                      >Phone 2</label
                    >

                    <div class="input-group col-md-12 mb-4 selec">
                      <div class="col-md-12  pl-0 pr-0">
                        <select
                          id="country"
                          class="form-control col-md-3 float-left"
                          v-model="profile_business_input.phone2Id"
                        >
                          <option selected value="+1">USA(+1)</option>
                          <option value="+33">FRENCH(+33)</option>
                          <option value="+237">CAMEROON(+237)</option>
                          <option value="+91">India(+91)</option>
                        </select>

                        <input
                          id="tel"
                          name="tel"
                          type="tel"
                          placeholder="Phone 2"
                          class="form-control col-md-9"
                          v-model="profile_business_input.phone2"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-md-12">
                      <div
                        class="form-group"
                        v-if="!profile_business_input.hasNoWebsite"
                      >
                        <label for="alias">Website</label><br />
                        <input
                          type="text"
                          name="Website"
                          id="Website"
                          placeholder="www.Website.comm"
                          class="form-control"
                          v-model="profile_business_input.website"
                        />
                      </div>
                      <div class="checkbox">
                        <label
                          ><input
                            type="checkbox"
                            value=""
                            v-model="profile_business_input.hasNoWebsite"
                          />This business does not have a Website</label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="row mb-5">
                    <div class="col-md-12">
                      <div
                        class="form-group"
                        v-if="!profile_business_input.hasNoEmail"
                      >
                        <label for="alias">Email</label><br />
                        <input
                          type="Email"
                          name="Email"
                          id="Emaisl"
                          placeholder="Email.com"
                          class="form-control"
                          v-model="profile_business_input.email"
                        />
                      </div>
                      <div class="checkbox">
                        <label
                          ><input
                            type="checkbox"
                            value=""
                            v-model="profile_business_input.hasNoEmail"
                          />This business does not have a Email</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  name="cancel"
                  class="cancel btn btn-dark-gray"
                  value="Cancel"
                  @click="cancel"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous ml-3 btn btn-dark"
                  value="Previous"
                  @click="previous(1)"
                />
                <input
                  type="button"
                  name="next"
                  class="next ml-3 btn btn-outline-primary orange"
                  value="Next Step"
                  @click="advance(3)"
                />
              </fieldset>

              <fieldset
                class="position-relative opacity-100"
                v-if="fieldset1 === 3"
              >
                <div class="form-card">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="col-md-6 pl-0">
                        <div class="form-group">
                          <label for="username">City </label><br />
                          <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="City, Country"
                            class="form-control"
                            v-model="profile_business_input.city"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 pl-0">
                        <div class="form-group">
                          <label for="alias">Neighbourhood </label><br />
                          <input
                            type="text"
                            name="alias"
                            id="alias"
                            placeholder="Neighbourhood name"
                            class="form-control"
                            v-model="profile_business_input.neighbourhood"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="username">Three Location Descriptions</label
                        ><br />
                        <div class="col-md-12 pl-0 pr-0">
                          Choix
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26373534.241211604!2d-113.7593 23355 12333!3d36.204849821363666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e43 2360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1597127134108!5m2!1sen!2sin"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        height="350"
                        class="w-100"
                        frameborder="0"
                      ></iframe>
                    </div>
                  </div>
                </div>

                <input
                  type="button"
                  name="cancel"
                  class="cancel btn btn-dark-gray"
                  value="Cancel"
                  @click="cancel"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous ml-3 btn btn-dark"
                  value="Previous"
                  @click="previous(2)"
                />
                <input
                  type="submit"
                  name="Save"
                  class="next ml-3 btn btn-outline-primary save orange"
                  value="Save"
                  @click="advance(4)"
                />
              </fieldset>

              <fieldset>
                <div class="form-card">
                  <h4 class="fs-title text-center">
                    <i aria-hidden="true" class="fa fa-check-circle"></i> Your
                    business identity is successfully created !
                  </h4>

                  <div class="row justify-content-center">
                    <div class="col-9 text-center">
                      <h5>{{ profile_business_input.name }}</h5>
                      <a
                        @click="
                          window.location.replace(
                            profile_business_input.website
                          )
                        "
                        >{{ profile_business_input.website }}</a
                      >
                      <p>
                        <b> {{ profile_business_input.category }} </b>
                      </p>
                      <input
                        type="button"
                        name="Save"
                        class="btn savebtnn orange"
                        value="View Profile"
                        @click="viewProfile"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12 text-left p-3">
                      <div class="col-md-12 float-left border bg-modb p-3">
                        <p class="w-100">
                          <i class="fa fa-info-circle" aria-hidden="true"></i>
                          Get your personalised website<span
                            class="pull-right fontis pt-1"
                            >Cureent Plan Basic (Free)</span
                          >
                        </p>

                        <p class="w-100 fontis">
                          Now you can create personalised website for your
                          business, select from a collection of free and premium
                          templates, connect your domain, premium support and
                          much more exciting features.
                        </p>

                        <a class="pull-right" href="#">View Plans</a>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </b-modal>

      <div class="row mb-4">
        <div class="col">
          <h6 class="mb-0"><b></b></h6>

          <!--
          <hr />


          <div id="btnContainer">
            <button class="btn primary" onclick="listView()">
              <fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fas', 'list']"
              />
              List
            </button>
            <button class="btn activegrid" onclick="gridView()">
              <fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fas', 'th-large']"
              />Grid
            </button>
          </div>

-->

          <b-row v-for="business in profile_business" :key="business.id">
            <b-col md="12" lg="6" class="p-0">
              <div class="people-style shadow">
                <b-row>
                  <b-col md="3" xl="3" lg="5" cols="5" sm="3">
                    <div class="center-img">
                      <splide :options="options" class="r-image">
                        <splide-slide cl>
                          <img :src="business.logo_path" class="r-image" />
                        </splide-slide>
                      </splide>
                    </div>
                  </b-col>

                  <b-col md="5" cols="7" lg="7" xl="9" sm="5">
                    <p class="textt text">
                      <strong class="title"> {{ business.name }} </strong>
                      <br />
                      {{ business.category }}
                      <br />
                      {{
                        business.community >= 1000000
                          ? business.community / 1000000 + "M"
                          : business.community >= 1000
                          ? business.community / 1000 + "K"
                          : business.community
                      }}
                      Community <br />

                      <span class="location">
                        <b-icon-geo-alt class="ico"></b-icon-geo-alt>
                        {{ business.city }}
                        {{ business.country }}
                      </span>
                      <br />
                    </p>

                    <p>
                      {{ business.about_business }} <b-link>Read More</b-link>
                    </p>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bussiness",
  data() {
    return {
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
        { item: "Taxis service", name: "Taxis service" }
      ],
      fieldset1: 1,
      profile_business_input: {
        logo_path: null,
        name: "Super Car ltd",
        category: "Car marketing",
        keywords: null,
        timezone: null,
        about_business:
                "super best car seller in the world adipisicing elit. lorem epsep this is, ar seller in the world adipisicing elit. lorem epsep this is",
        phone: null,
        phoneId: null,
        phone2: null,
        phone2Id: null,
        hasNoPhone: true,
        website: null,
        hasNoWebsite: true,
        email: null,
        hasNoEmail: true,
        city: "Douala",
        country: "Cameroon",
        neighbourhood: null,
        community: 2000000000
      },
      profile_business: []
    };
  },
  created() {
    console.log("Load User Profile Business start+++++++");
    this.$store
      .dispatch("loadUserProfileBusiness", null)
      .then(response => {
        console.log(response);
        console.log("Load User Profile Business end response (3) +++++++");
      })
      .catch(error => {
        console.log("Error from server or from browser error (2)++++");
        console.log(error);
      })
      .finally(() => {
        console.log("Finally Load User Profile Business response (1) +++++++");
        this.profile_business = JSON.parse(
          JSON.stringify(this.$store.getters.getProfileBusiness)
        );
        console.log(this.profile_business);
        console.log("Load User Profile Business end+++++++");
      });
  },
  computed: {
    logo_path() {
      console.log(this.profile_business_input.logo_path);
      return URL.createObjectURL(
              this.profile_business_input.logo_path.get("media")
      );
    }
  },
  methods: {
    advance(value) {
      this.fieldset1 = value;
      if (value === 4) {
        // setTimeout(() => {
        //   this.$refs["modal-1"].hide();
        //   this.fieldset1 = 1;
        // }, 2000);
        this.saveBusiness();
      }
    },
    previous(value) {
      this.fieldset1 = value;
    },
    cancel() {
      console.log("Cancelled Add Business +++++");
      this.$refs["modal-1"].hide();
      this.profile_business_input = {
        logo_path: null,
        name: null,
        category: null,
        keywords: null,
        timezone: null,
        about_business: null,
        phone: null,
        phoneId: null,
        phone2: null,
        phone2Id: null,
        hasNoPhone: true,
        website: null,
        hasNoWebsite: true,
        email: null,
        hasNoEmail: true,
        city: null,
        country: null,
        neighbourhood: null
      };
      this.fieldset1 = 1;
    },
    saveBusiness() {
      console.log("Save New Business ++++++");
      console.log(this.profile_business_input);
      this.$store
        .dispatch("updateUserProfileBusiness", {
          business: this.profile_business_input
        })
        .then(response => {
          console.log("save new profile business after response (3) +++++");
          console.log(response);
          console.log("save new profile business endd ++++");
        })
        .catch(error => {
          console.log("error from browser or server error(2)");
          console.log(error);
        })
        .finally(() => {
          console.log("finally save new business user ");
          this.profile_business = JSON.parse(
            JSON.stringify(
              this.$store.getters.getProfileBusiness
            )
          );
          this.cancel();
        });
    },
    saveLogo(event) {
      console.log("Save Logo Business ");
      const fd = new FormData();
      fd.append("media", event.target.files[0]);
      this.profile_business_input.logo_path = fd;
    },
    viewProfile() {
      console.log("View Profile Clicked");
    }
  }
};
</script>

<style scoped>
.logo-img {
  width: 60px;
}

@media only screen and (max-width: 768px) {
  .btn {
    font-size: 10px;
  }

  .text-lost {
    flex-basis: 70%;
    padding-left: 10px;
    font-size: 12px;
  }

  h4 {
    font-size: 15px;
  }

  .logo-img {
    width: 30px;
  }
  .see-all-link {
    font-size: 10px;
  }
}

.picture {
  border-radius: 10px;
  width: 48%;
  flex-basis: 40%;
}

.text-lost {
  flex-basis: 90%;
  padding-left: 30px;
}

.colum {
  justify-content: space-around;
}

.chart {
  display: block;
  height: 315px;
  width: 400px;
}

.text-design {
  line-height: 40px;
}

.bg-dark {
  background-color: #3d8d79 !important;
}

@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
  }
  .corps {
    margin-top: 2rem !important;
  }
}
@media (min-width: 576px) {
  .lb-grid {
    height: 300px;
  }
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
}
@media (min-width: 1200px) {
  .lb-grid {
    height: 500px;
  }
  .corps {
    margin-top: 6rem !important;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }

  .corps {
    margin-top: 6rem !important;
  }
}

@media only screen and (min-width: 768px) {
  .center-img {
    margin-right: -60px;
  }
}

.card {
  color: orange;
}

.s-button {
  align-content: center;
  text-align: center;

  padding: 15px;
}

@media only screen and (max-width: 768px) {
  .a-flex {
    margin-right: -15px;
  }

  .title {
    font-size: 16px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 12px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: -30px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .r-image {
    border-radius: 8px;

    height: 100px;
    width: 100px;
  }
}

@media only screen and (min-width: 768px) {
  .title {
    font-size: 20px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 12px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: 30px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .r-image {
    border-radius: 8px;

    height: 160px;
    width: 160px;
  }
}

.stock {
  color: green;
}

.ico {
  margin-right: 5px;
}

@media only screen and (min-width: 768px) {
  .people-style {
    border-top-left-radius: 5px;

    border-bottom-left-radius: 5px;

    border-top-right-radius: 5px;

    border-bottom-right-radius: 5px;

    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    margin-right: 8px;

    padding: 7px;
  }
}

@media only screen and (max-width: 768px) {
  .people-style {
    border-top-left-radius: 5px;

    border-bottom-left-radius: 5px;

    border-top-right-radius: 5px;

    border-bottom-right-radius: 5px;

    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    margin-right: 8px;

    padding: 7px;
  }
}
</style>
