<template>
  <div>
    <div class="row">
      <h6 class="col-md-12"><b>Basic Information</b></h6>
      <hr />
    </div>
    <div class="row mb-1">
      <div class="col-md-4">Date Of Birth</div>
      <div class="col-md-4">{{ birthDate }}</div>
      <div class="col-md-4">
        <button
          type="button"
          class="btn btn-outline-primary float-md-right"
          data-toggle="modal"
          data-target="#dobModal"
          v-b-modal.modal-6
        >
          Edit
        </button>
      </div>

      <b-modal
        id="phonemodal"
        title="Add Phone Number"
        hide-footer
        ref="phonemodal"
        @close="cancel"
      >
        <div class="modal-body">
          <form class="form" action="" method="post" @submit.prevent="savePhoneNumber">
            <b-form-input
              class="mt-2 mb-2"
              v-model="phoneInput"
              placeholder="phone"
              type="text"
              required
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">
                Save
              </button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal
        id="currentcityModal"
        title="Add current city"
        hide-footer
        ref="currentcityModal"
        @close="cancel"
      >
        <div class="modal-body">
          <form class="form" action="" method="post" @submit.prevent="saveCurrentCity">
            <b-form-input
              class="mt-2 mb-2"
              placeholder="current city"
              type="text"
              v-model="basicInfo.currentCity"
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">
                Save
              </button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal
        id="hometownModal"
        ref="hometownModal"
        title="Add home town"
        hide-footer
        @close="cancel"
      >
        <div class="modal-body">
          <form class="form" action="" method="post" @submit.prevent="saveHomeTown">
            <b-form-input
              class="mt-2 mb-2"
              v-model="basicInfo.homeTown"
              placeholder="home town"
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">
                Save
              </button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal
        id="websiteModal"
        ref="websiteModal"
        title="Add a website"
        hide-footer
        @close="cancel"
      >
        <div class="modal-body">
          <form class="form" action="" method="post" @submit.prevent="saveWebsite">
            <b-form-input
              class="mt-2 mb-2"
              placeholder="Website"
              v-model="websiteInput"
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">
                Save
              </button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal
        id="sociallinkModal"
        title="Add A social link"
        hide-footer
        ref="sociallinkModal"
        @close="cancel"
      >
        <div class="modal-body">
          <form class="form" action="" method="post" @submit.prevent="saveSocialLink">
            <b-form-input
              class="mt-2 mb-2"
              placeholder="soclial link"
              v-model="sociallinkInput"
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">
                Save
              </button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal
        id="modal-6"
        ref="model-6"
        title="Edit Date of Birth"
        hide-footer
        @close="cancel"
      >
        <div class="modal-body">
          <form class="form-inline" action="" method="post">
            <div class="input-group col-md-12 pl-0 pr-0 mb-4 selec">
              <label class="col-md-3 pl-0 pr-0 control-label"
                >Birth Day / Month</label
              >
              <div class="col-md-3 pr-0 pl-0">
                <div class="form-group">
                  <select
                    id="DOBDay"
                    class="form-control"
                    v-model="basicInfo.dateOfBirth.date_1.day"
                  >
                    <option>- Day -</option>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23"> 23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3 pr-0 pl-0">
                <div class="form-group">
                  <select
                    name="DOBMonth"
                    class="form-control"
                    v-model="basicInfo.dateOfBirth.date_1.month"
                  >
                    <option>- Month -</option>
                    <option selected value="January">January</option>
                    <option value="Febuary">Febuary</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3 pl-0 pr-0">
                <div class="form-group pull-right mb-3">
                  <select
                    id="country_"
                    class="form-control"
                    v-model="basicInfo.dateOfBirth.date_1.access"
                  >
                    <option value="" disabled="">Select</option>
                    <option value="public">Public</option>
                    <option selected value="private">Private</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="input-group col-md-12 pl-0 pr-0 mb-4 selec">
              <label class="col-md-3 pl-0 pr-0 control-label">Birth Year</label>
              <div class="col-md-6 pr-0 pl-0">
                <div class="form-group">
                  <select
                    name="DOBYear"
                    class="form-control w-100"
                    v-model="basicInfo.dateOfBirth.date_2.year"
                  >
                    <option>Year</option>
                    <option selected value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3 pl-0 pr-0">
                <div class="form-group pull-right mb-3">
                  <select
                    id="country"
                    class="form-control "
                    v-model="basicInfo.dateOfBirth.date_2.access"
                  >
                    <option value="" disabled="">Select</option>
                    <option selected value="public">Public</option>
                    <option value="private">Private</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="fosrm-group text-right w-100">
              <button type="button" class="btn btn-dark" @click="cancel">
                cancel
              </button>
              <button
                type="button"
                class="btn btn-primary orange"
                @click="saveBirthDate"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </b-modal>
    </div>
    <div class="row">
      <div class="col-md-4">Gender</div>
      <div class="col-md-4">
        {{ basicInfo.gender === "M" ? "Male" : "Female" }}
      </div>
      <div class="col-md-4">
        <button
          type="button"
          class="btn btn-outline-primary float-md-right"
          data-toggle="modal"
          data-target="#genderModal"
          v-b-modal.modal-7
        >
          Edit
        </button>
        <b-modal
          id="modal-7"
          title="Add/Edit Gender"
          hide-footer
          ref="modal-7"
          @close="cancel"
        >
          <div class="modal-body">
            <form class="form-inline" action="" method="post">
              <div class="input-group col-md-12 mb-4 selec">
                <label
                  class="col-md-4 control-label"
                  style="align-items: first baseline;"
                  for="gender"
                  >Gender</label
                >
                <div class="col-md-8 pl-0 pr-0">
                  <select
                    id="gender"
                    class="form-control w-100"
                    v-model="basicInfo.gender"
                  >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </div>
              </div>
              <!-- End number In input-->
              <div class="fosrm-group text-right w-100">
                <button
                  type="button"
                  class="btn btn-primary orange"
                  @click="saveGender"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </b-modal>
      </div>
    </div>
    <div class="row mb-4 mt-3">
      <div class="col">
        <h6 class="mb-0"><b>Contact Information</b></h6>
        <hr />
        <div class="row mt-3 mb-3">
          <div class="col-md-4">Mobile Phone</div>
          <br />
          <div
            class="col-md-4"
            v-for="phone in basicInfo.mobilePhones"
            :key="phone"
          >
            {{ phone }}
          </div>
        </div>
        <a v-b-modal.phonemodal data-target="#phonemodal">
          + Add Other Phones</a
        >
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <h6 class="mb-0"><b>Places you lived</b></h6>
        <h6
          class="mb-0"
          v-if="basicInfo.currentCity !== null && basicInfo.currentCity !== ''"
        >
          <b>City : {{ basicInfo.currentCity }}</b>
        </h6>
        <h6
          class="mb-0"
          v-if="basicInfo.homeTown !== null && basicInfo.homeTown !== ''"
        >
          <b>Home Town : {{ basicInfo.homeTown }}</b>
        </h6>
        <hr />

        <a
          v-b-modal.currentcityModal
          data-target="#currentcityModal"
          v-if="
            basicInfo.currentCity !== null &&
              basicInfo.currentCity !== '' &&
              basicInfo.currentCity.length !== 0
          "
        >
          <fas-icon
            class="primary float-left mr-1 mt-1"
            :icon="['fas', 'plus-circle']"
          />
          Update your current city</a
        >
        <a v-b-modal.currentcityModal data-target="#currentcityModal" v-else>
          <fas-icon
            class="primary float-left mr-1 mt-1"
            :icon="['fas', 'plus-circle']"
          />
          Add your current city</a
        >
        <br />
        <div>
          <a
            v-b-modal.hometownModal
            data-target="#hometownModal"
            v-if="
              basicInfo.homeTown !== null &&
                basicInfo.homeTown !== '' &&
                basicInfo.homeTown.length !== 0
            "
          >
            <fas-icon
              class="primary float-left mr-1 mt-1"
              :icon="['fas', 'plus-circle']"
            />
            Update your home town</a
          >
          <a v-b-modal.hometownModal data-target="#hometownModal" v-else>
            <fas-icon
              class="primary float-left mr-1 mt-1"
              :icon="['fas', 'plus-circle']"
            />
            Add your home town</a
          >
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <h6 class="mb-0"><b>Web &amp; Social Links</b></h6>
        <hr />
        <div class="media">
          <div class="media-body">
            <a v-b-modal.websiteModal data-target="#websiteModal">
              <fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fas', 'plus-circle']"
              />
              Add a Website</a
            ><br />

            <div v-for="website in basicInfo.websites" :key="website">
              <fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fas', 'globe']"
              />
              <a :href="website" @click="redirect(website)" target="_blank">{{
                website
              }}</a>
              <ul class="website navbar-nav pull-right">
                <li class="nav-item dropdown">
                  <b-dropdown
                    id="dropdown-dropup"
                    dropdown
                    variant="primary-outline"
                  >
                    <b-dropdown-item @click="edit('website', website)"
                      >Edit</b-dropdown-item
                    >
                    <b-dropdown-item @click="deleteElement('website', website)"
                      >Delete</b-dropdown-item
                    >
                  </b-dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="media mt-4">
          <div class="media-body">
            <a v-b-modal.sociallinkModal data-target="#sociallinkModal">
              <fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fas', 'plus-circle']"
              />
              Add a social link</a
            ><br />
            <a href="#"></a><br />
            <div v-for="socialLink in basicInfo.socialLinks" :key="socialLink">
              <a :href="website" @click="redirect(socialLink)" target="_blank"
                ><fas-icon
                  class="primary float-left mr-1 mt-1"
                  :icon="['fab', 'instagram']"
                />
                {{ socialLink }}</a
              >
              <ul class="website navbar-nav pull-right">
                <li class="nav-item dropdown">
                  <b-dropdown
                    id="dropdown-dropup"
                    dropdown
                    variant="primary-outline"
                  >
                    <b-dropdown-item @click="edit('socialLink', socialLink)"
                      >Edit</b-dropdown-item
                    >
                    <b-dropdown-item @click="delet('socialLink', socialLink)"
                      >Delete</b-dropdown-item
                    >
                  </b-dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicInfo: {
        dateOfBirth: { day: "12", month: "1", year: "2000" },
        gender: "M",
        mobilePhones: [],
        currentCity: null,
        homeTown: null,
        websites: [],
        socialLinks: []
      },
      phoneInput: null,
      websiteInput: null,
      sociallinkInput: null,
      index: null
    };
  },
  created() {
    this.basicInfo = JSON.parse(
      JSON.stringify(this.$store.getters.getProfileAboutBasicInfos)
    );
    console.log("Load User birth Date start ++++++", this.basicInfo);

    this.$store
      .dispatch("loadUserBasicInfosBirthDate", null)
      .then(response => {
        console.log("load user birth date response (3) ++++", response);
        console.log("Load User BirthDate end+++++++");
      })
      .catch(error => {
        console.log("Error from server or from browser error (2) ++++", error);
      })
      .finally(() => {
        this.basicInfo = JSON.parse(
          JSON.stringify(this.$store.getters.getProfileAboutBasicInfos)
        );
        console.log("Load User birth Date end ++++++", this.basicInfo);
      });
  },
  computed: {
    birthDate() {
      return (
        this.basicInfo.dateOfBirth.date_1.day +
        "-" +
        this.basicInfo.dateOfBirth.date_1.month +
        "-" +
        this.basicInfo.dateOfBirth.date_2.year
      );
    }
  },
  methods: {
    cancel() {
      console.log("Cancel edit birth date user  ++++++");
      this.basicInfo = JSON.parse(
        JSON.stringify(this.$store.getters.getProfileAboutBasicInfos)
      );
      this.phoneInput = null;
    },
    saveBirthDate() {
      console.log("save new birth date user start +++++");
      console.log(this.basicInfo.dateOfBirth);
      this.$store
        .dispatch("updateUserBasicInfosBirthDate", {
          dateOfBirth: this.basicInfo.dateOfBirth
        })
        .then(response => {
          console.log("save new birth date user response (3) +++++", response);
          console.log("save new birth date user end +++++");
        })
        .catch(error => {
          console.log("not save new birth date user end error (2) +++++", error);
        })
        .finally(() => {
          this.basicInfo = JSON.parse(
            JSON.stringify(this.$store.getters.getProfileAboutBasicInfos)
          );
          console.log(this.basicInfo);
          this.$refs["model-6"].hide();
        });
    },
    saveGender() {
      console.log("save new gender user start +++++");
      console.log(this.basicInfo.gender);
      this.$store
        .dispatch("updateUserBasicInfosGender", {
          gender: this.basicInfo.gender
        })
        .then(response => {
          console.log("save new gender user response (3)", response);
        })
        .catch(error => {
          console.log(error, "not save new birth date user end error( 2 ) +++++");
        })
        .finally(() => {
          console.log("finally save new gender user ");
          this.basicInfo = JSON.parse(
            JSON.stringify(this.$store.getters.getProfileAboutBasicInfos)
          );
          console.log(this.basicInfo);
          this.$refs["modal-7"].hide();
        });
    },
    savePhoneNumber() {
      console.log("save new phone Number user start +++++");
      if (this.basicInfo.mobilePhones.includes(this.phoneInput)) {
        console.log("Phone Number In Duplication  +++++++");
      } else {
        console.log("Phone Number Not In Duplication +++++++");
        this.basicInfo.mobilePhones.push(this.phoneInput);
      }
      this.phoneInput = null;
      console.log(this.basicInfo.mobilePhones);
      this.$store
        .dispatch("updateUserBasicInfosMobilePhones", {
          mobilePhones: this.basicInfo.mobilePhones
        })
        .then(response => {
          console.log("save new phone number user response (3) ++++", response);
        })
        .catch(error => {
          console.log(error, "not save new mobilePhones user end error(2) +++++");
        })
        .finally(() => {
          console.log("finally save new mobilePhones user ++++++ ");
          this.basicInfo = JSON.parse(
            JSON.stringify(this.$store.getters.getProfileAboutBasicInfos)
          );
          console.log(this.basicInfo);
          this.$refs["phonemodal"].hide();
        });
    },
    saveCurrentCity() {
      console.log("save new current City user start +++++");
      console.log(this.basicInfo.currentCity);
      this.$store
        .dispatch("updateUserBasicInfosCurrentCity", {
          currentCity: this.basicInfo.currentCity
        })

        .then(response => {
          console.log("save new current city user response (3) ++++++", response);
        })
        .catch(error => {
          console.log("not save new mobilePhones user end error (2) +++++++", error);
        })
        .finally(() => {
          console.log("finally save new current city user ");
          this.basicInfo = JSON.parse(
            JSON.stringify(this.$store.getters.getProfileAboutBasicInfos)
          );
          console.log(this.basicInfo);
          this.$refs["currentcityModal"].hide();
        });
    },
    saveHomeTown() {
      console.log("save new home Town  user start +++++");
      console.log(this.basicInfo.homeTown);
      this.$store
        .dispatch("updateUserBasicInfosHomeTown", {
          homeTown: this.basicInfo.homeTown
        })
        .then(response => {
          console.log("save new current home town user response (3) ++++++", response);
        })
        .catch(error => {
          console.log(error, "not save new homeTown user end error (2)+++++");
        })

        .finally(() => {
          console.log("finally save new current Home Town user ");
          this.basicInfo = JSON.parse(
            JSON.stringify(this.$store.getters.getProfileAboutBasicInfos)
          );
          console.log(this.basicInfo);
          this.$refs["hometownModal"].hide();
        });
    },
    saveWebsite() {
      console.log("save new websites user start +++++");
      if (this.basicInfo.websites.includes(this.websiteInput)) {
        console.log("Duplication of website  +++++++");
      } else if (this.index !== null) {
        this.basicInfo.websites[this.index] = this.websiteInput;
      } else {
        console.log("website don't duplicate +++++++++");
        this.basicInfo.websites.push(this.websiteInput);
      }
      this.websiteInput = null;

      console.log(this.basicInfo.websites);
      this.$store
        .dispatch("updateUserBasicInfosWebsites", {
          websites: this.basicInfo.websites
        })
        .then(response => {
          console.log("save new websites user response (3) ++++++", response);
          console.log("save new websites user end +++++");
        })
        .catch(error => {
          console.log(error, "not save new websites user end error (2) +++++");
        })
        .finally(() => {
          console.log("finally save new website user ");
          this.basicInfo = JSON.parse(
            JSON.stringify(this.$store.getters.getProfileAboutBasicInfos)
          );
          console.log(this.basicInfo);
          this.$refs["websiteModal"].hide();
        });
    },
    saveSocialLink() {
      console.log("save new sociallinks  user start +++++");
      if (this.basicInfo.socialLinks.includes(this.sociallinkInput)) {
        console.log("Duplication of sociallink  +++++++");
      } else if (this.index !== null) {
        this.basicInfo.socialLinks[this.index] = this.sociallinkInput;
      } else {
        console.log("No Duplication of sociallink +++++++");
        this.basicInfo.socialLinks.push(this.sociallinkInput);
      }
      this.sociallinkInput = null;

      console.log(this.basicInfo.socialLinks);
      this.$store
        .dispatch("updateUserBasicInfosSocialLinks", {
          socialLinks: this.basicInfo.socialLinks
        })
        .then(response => {
          console.log();
          console.log("save new socialLinks user response (3) ++++++", response);
          console.log("save new socialLinks user end +++++");
        })
        .catch(error => {
          console.log(error, "not save new socialLinks user end error(2) +++++");
        })
        .finally(() => {
          console.log("finally save new socialLink user ");
          this.basicInfo = JSON.parse(
            JSON.stringify(this.$store.getters.getProfileAboutBasicInfos)
          );
          console.log(this.basicInfo);
          this.$refs["sociallinkModal"].hide();
        });
    },
    deleteElement(type, value) {
      switch (type) {
        case "website":
          this.basicInfo.websites = this.basicInfo.websites.filter(website => {
            return website !== value;
          });
          this.$store.state.userData[0].profile_about.basicInfo = this.basicInfo;
          break;
        case "socialLink":
          this.basicInfo.socialLinks = this.basicInfo.socialLinks.filter(
            socialLink => {
              return socialLink !== value;
            }
          );
          this.$store.state.userData[0].profile_about.basicInfo = this.basicInfo;
          break;
        default:
          console.log("No Correspondance");
          break;
      }
    },
    edit(type, value) {
      switch (type) {
        case "website":
          console.log("edit website");
          this.index = this.basicInfo.websites.findIndex(website => {
            return website === value;
          });
          console.log(this.index);
          this.websiteInput = value;
          this.$refs["websiteModal"].show();
          break;
        case "socialLink":
          console.log("edit socialLink");
          this.index = this.basicInfo.socialLinks.findIndex(socialLink => {
            return socialLink === value;
          });

          console.log(this.index);
          this.sociallinkInput = value;
          this.$refs["sociallinkModal"].show();
      }
    },
    redirect(website) {
      console.log(website);
      window.location.replace(website);
    }
  }
};
</script>

<style scoped>
.details {
  display: flex;
}

ul.website {
  display: inline;
}
@media only screen and (max-width: 768px) {
}
</style>
