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

      <b-modal id="modal-1" title="Add Bussiness" size="lg" hide-footer>
        <div class="row">
          <div class="col-md-12 mx-0">
            <form id="msform">
              <!-- progressbar -->
              <ul id="progressbar">
                <li class="active" id="general"><strong>General</strong></li>
                <li id="contact" class="" v-bind:class="{ active: fieldset5 }">
                  <strong>Contact</strong>
                </li>
                <li
                  id="location"
                  class=""
                  v-bind:class="{ active: fieldset2, active: fieldset3 }"
                >
                  <strong>Location</strong>
                </li>
              </ul>
              <!-- fieldsets -->
              <fieldset class="position-relative opacity-100" v-if="fieldset1">
                <div class="form-card">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="image-upload-wrap">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#createalbumModal"
                        >
                          <div class="drag-text">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <h3>Add Logo</h3>
                          </div>
                        </a>
                        <div></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username">Busness Name:</label><br />
                        <input
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Busness Name"
                          class="form-control"
                        />
                      </div>

                      <div class="form-group">
                        <label for="category">Business Category:</label><br />

                        <b-form-select
                          v-model="category"
                          :options="categories"
                          class="mb-3"
                          value-field="item"
                          text-field="name"
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
                            name="username"
                            id="username"
                            placeholder="Enter Keyword"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username"> TomeZone: </label><br />
                        <select id="category" class="form-control ">
                          <option value="" selected="" disabled=""
                            >Select Timezone</option
                          >
                          <option>(UTC - 09:00) Alaska</option>
                          <option>(UTC - 09:00) Alaska1</option>
                          <option>(UTC - 09:00) Alaska2</option>
                          <option>(UTC - 09:00) Alaska3</option>
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
                />
                <input
                  type="button"
                  name="next"
                  class="next btn ml-3 btn-outline-primary orange"
                  value="Next Step"
                  v-on:click="closeOne"
                />
              </fieldset>

              <fieldset class="position-relative opacity-100" v-if="fieldset2">
                <div class="form-card">
                  <div class="row">
                    <label
                      class=" pl-0 ml-3 control-label float-left"
                      for="name"
                      >Phone</label
                    >

                    <div class="input-group col-md-12 mb-4 selec">
                      <div class="col-md-12  pl-0 pr-0">
                        <select
                          id="country"
                          class="form-control col-md-3 float-left"
                        >
                          <option>USA(+1)</option>
                          <option>USA(+1)</option>
                          <option>USA(+1)</option>
                          <option>India(+91)</option>
                        </select>

                        <input
                          id="tel"
                          name="tel"
                          type="tel"
                          placeholder=""
                          class="form-control col-md-9"
                        />
                      </div>

                      <div class="checkbox">
                        <label
                          ><input type="checkbox" value="" />This business does
                          not have a Phone</label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="row">
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
                        >
                          <option>USA(+1)</option>
                          <option>USA(+1)</option>
                          <option>USA(+1)</option>
                          <option>India(+91)</option>
                        </select>

                        <input
                          id="tel"
                          name="tel"
                          type="tel"
                          placeholder=""
                          class="form-control col-md-9"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="alias">Website</label><br />
                        <input
                          type="text"
                          name="Website"
                          id="Website"
                          placeholder="www.Website.comm"
                          class="form-control"
                        />
                        <div class="checkbox">
                          <label
                            ><input type="checkbox" value="" />This business
                            does not have a Website</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row mb-5">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="alias">Email</label><br />
                        <input
                          type="Email"
                          name="Email"
                          id="Emaisl"
                          placeholder="Email.com"
                          class="form-control"
                        />
                        <div class="checkbox">
                          <label
                            ><input type="checkbox" value="" />This business
                            does not have a Email</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  name="cancel"
                  class="cancel btn btn-dark-gray"
                  value="Cancel"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous ml-3 btn btn-dark"
                  value="Previous"
                />
                <input
                  type="button"
                  name="next"
                  class="next ml-3 btn btn-outline-primary orange"
                  value="Next Step"
                  v-on:click="closeTwo"
                />
              </fieldset>

              <fieldset class="position-relative opacity-100" v-if="fieldset3">
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
                            placeholder="Neighbourhood name, City, Country"
                            class="form-control"
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
                />
                <input
                  type="button"
                  name="previous"
                  class="previous ml-3 btn btn-dark"
                  value="Previous"
                />
                <input
                  type="button"
                  name="Save"
                  class="next ml-3 btn btn-outline-primary save orange"
                  value="Save"
                  v-on:click="closeThree"
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
                      <h5>Business Name Here</h5>
                      <a href="#">http://business.com</a>
                      <p><b>Business Category </b></p>
                      <input
                        type="button"
                        name="Save"
                        class="btn savebtnn orange"
                        value="View Profile"
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

          <b-row>
            <b-col md="12" lg="6" class="p-0">
              <div class="people-style shadow">
                <b-row>
                  <b-col md="3" xl="3" lg="5" cols="5" sm="3">
                    <div class="center-img">
                      <splide :options="options" class="r-image">
                        <splide-slide cl>
                          <img
                            src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
                            class="r-image"
                          />
                        </splide-slide>
                      </splide>
                    </div>
                  </b-col>

                  <b-col md="5" cols="7" lg="7" xl="9" sm="5">
                    <p class="textt text">
                      <strong class="title"> Super Car ltd </strong> <br />
                      Car marketing
                      <br />
                      20k Community <br />

                      <span class="location">
                        <b-icon-geo-alt class="ico"></b-icon-geo-alt> Douala
                        cameroon
                      </span>
                      <br />

                      super best car seller in the world adipisicing elit. lorem
                      epsep this is <b-link>Read More</b-link>
                    </p>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col md="12" lg="6" class="p-0">
              <div class="people-style shadow">
                <b-row>
                  <b-col md="3" xl="3" lg="5" cols="5" sm="3">
                    <div class="center-img">
                      <splide :options="options" class="r-image">
                        <splide-slide cl>
                          <img
                            src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
                            class="r-image"
                          />
                        </splide-slide>
                      </splide>
                    </div>
                  </b-col>

                  <b-col md="5" cols="7" lg="7" xl="9" sm="5">
                    <p class="textt text">
                      <strong class="title"> Super Car ltd </strong> <br />
                      Car marketing
                      <br />
                      20k Community <br />

                      <span class="location">
                        <b-icon-geo-alt class="ico"></b-icon-geo-alt> Douala
                        cameroon
                      </span>
                      <br />

                      super best car seller in the world adipisicing elit. lorem
                      epsep this is <b-link>Read More</b-link>
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
      category: "",
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

      fieldset1: true,
      fieldset2: false,
      fieldset3: false,
      fieldset4: false,
      fieldset5: false,
    };
  },
  methods: {
    closeOne() {
      this.fieldset1 = false;
      this.fieldset2 = true;
      this.fieldset3 = false;
      this.fieldset4 = false;
      this.fieldset5 = true;
    },
    closeTwo() {
      this.fieldset1 = false;
      this.fieldset2 = false;
      this.fieldset3 = true;
      this.fieldset4 = false;
      this.fieldset5 = this.fieldset4 || this.fieldset3;
    },
    closeThree() {
      this.fieldset1 = false;
      this.fieldset2 = false;
      this.fieldset3 = false;
      this.fieldset4 = true;
    },
  },
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
