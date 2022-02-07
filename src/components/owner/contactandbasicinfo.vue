<template>
  <div>
    <div class="row">
      <h6 class="col-md-12">
        <b>{{ $t("profileowner.Basic_Information") }}</b>
      </h6>

      <hr />
    </div>
    <div class="row mb-1">
      <div class="col-md-4">{{ $t("profileowner.Date_Of_Birth") }}</div>
      <div class="col-md-4">{{ info.user.dob }}</div>
      <div class="col-md-4">
        <button
          type="button"
          class="btn btn-outline-primary float-md-right"
          v-b-modal.dobbb
        >
          {{ $t("profileowner.Edit") }}
        </button>
      </div>

      <b-modal
        id="phonemodal"
        :title="$t('profileowner.Add_Phone_Number')"
        hide-footer
        ref="phonemodal"
        @close="cancel"
      >
        <div class="modal-body">
          <form
            class="form"
            action=""
            method="post"
            @submit.prevent="savePhoneNumber"
          >
            <b-form-input
              class="mt-2 mb-2"
              v-model="newphone"
              :placeholder="$t('profileowner.phone')"
              type="number"
              required
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">
                {{ $t("profileowner.Save") }}
              </button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal
        id="phonemodal1"
        :title="$t('profileowner.Add_Phone_Number')"
        hide-footer
        ref="phonemodal1"
        @close="cancel"
      >
        <div class="modal-body">
          <form
            class="form"
            action=""
            method="post"
            @submit.prevent="savePhone"
          >
            <b-form-input
              class="mt-2 mb-2"
              v-model="info.user.phone"
              :placeholder="$t('profileowner.phone')"
              type="number"
              required
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">
                {{ $t("profileowner.Save") }}
              </button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal
        id="currentcityModal"
        :title="$t('profileowner.Add_current_city')"
        hide-footer
        ref="currentcityModal"
        @close="cancel"
      >
        <div class="modal-body">
          <form
            class="form"
            action=""
            method="post"
            @submit.prevent="saveCurrentCity"
          >
            <b-form-input
              class="mt-2 mb-2"
              :placeholder="$t('profileowner.Current_City')"
              type="text"
              v-model="info.user.city"
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">
                {{ $t("profileowner.Save") }}
              </button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal
        id="hometownModal"
        ref="hometownModal"
        :title="$t('profileowner.Add_home_town')"
        hide-footer
        @close="cancel"
      >
        <div class="modal-body">
          <form
            class="form"
            action=""
            method="post"
            @submit.prevent="saveHomeTown"
          >
            <b-form-input
              class="mt-2 mb-2"
              v-model="info.user.home_town"
              :placeholder="$t('profileowner.home_town')"
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">
                {{ $t("profileowner.Save") }}
              </button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal
        id="websiteModal"
        ref="websiteModal"
        :title="$t('profileowner.Add_a_website')"
        hide-footer
        @close="cancel"
      >
        <div class="modal-body">
          <form
            class="form"
            action=""
            method="post"
            @submit.prevent="saveWebsite"
          >
            <b-form-input
              class="mt-2 mb-2"
              :placeholder="$t('profileowner.Website')"
              v-model="websiteInput"
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">
                {{ $t("profileowner.Save") }}
              </button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal
        id="websiteEModal"
        ref="websiteEModal"
        :title="$t('profileowner.Edit_website')"
        hide-footer
        @close="cancel"
      >
        <div class="modal-body">
          <form
            class="form"
            action=""
            method="post"
            @submit.prevent="saveEWebsite"
          >
            <b-form-input
              class="mt-2 mb-2"
              :placeholder="$t('profileowner.Website')"
              v-model="websiteInput"
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">
                {{ $t("profileowner.Save") }}
              </button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal
        id="sociallinkModal"
        :title="$t('profileowner.Add_A_social_link')"
        hide-footer
        ref="sociallinkModal"
        @close="cancel"
      >
        <div class="modal-body">
          <form
            class="form"
            action=""
            method="post"
            @submit.prevent="saveSocialLink"
          >
            <b-form-input
              class="mt-2 mb-2"
              :placeholder="$t('profileowner.soclial_link')"
              v-model="sociallinkInput"
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">
                {{ $t("profileowner.Save") }}
              </button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal
        id="dobbb"
        ref="dobbb"
        :title="$t('profileowner.Edit_Date_of_Birth')"
        hide-footer
      >
        <div class="modal-body">
          <form class="form-inline" action="" method="post">
            <div class="input-group col-md-12 pl-0 pr-0 mb-4 selec">
              <label class="col-md-3 pl-0 pr-0 control-label">{{
                $t("profileowner.Birth_Year")
              }}</label>
              <div class="col-md-9 pr-0 pl-0">
                <div class="form-group">
                  <b-form-datepicker
                    name="dob"
                    :max="min"
                    id="dob"
                    v-model="birthDate.date"
                    class="text"
                    :locale="this.$i18n.locale"
                    :placeholder="$t('welcome.DOB')"
                  ></b-form-datepicker>
                </div>
              </div>
            </div>
            <div class="fosrm-group text-right w-100">
              <button
                type="button"
                class="btn btn-dark pr-1 mr-3"
                @click="$bvModal.hide('modal-6')"
              >
                {{ $t("profileowner.Cancel") }}
              </button>
              <button
                type="button"
                class="btn btn-primary orange"
                @click="saveBirthDate"
              >
                {{ $t("profileowner.Save") }}
              </button>
            </div>
          </form>
        </div>
      </b-modal>
    </div>
    <div class="row">
      <div class="col-md-4">{{ $t("profileowner.Gender") }}</div>
      <div class="col-md-4">{{ info.user.gender }}</div>
      <div class="col-md-4">
        <button
          type="button"
          class="btn btn-outline-primary float-md-right"
          data-toggle="modal"
          data-target="#genderModal"
          @click="getgender()"
          v-b-modal.modal-7
        >
          {{ $t("profileowner.Edit") }}
        </button>
        <b-modal
          id="modal-7"
          :title="$t('profileowner.Add_Edit_Gender')"
          hide-footer
          ref="modal-7"
          @close="cancel"
        >
          <div class="modal-body">
            <form class="form-inline" action="" method="post">
              <div class="input-group col-md-12 mb-4 selec">
                <label
                  class="col-md-4 control-label"
                  style="align-items: first baseline"
                  for="gender"
                  >{{ $t("profileowner.Gender") }}
                </label>
                <div class="col-md-8 pl-0 pr-0">
                  <select
                    id="gender"
                    class="form-control w-100"
                    v-model="usergen"
                  >
                    <option value="M">{{ $t("profileowner.Male") }}</option>
                    <option value="F">{{ $t("profileowner.Female") }}</option>
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
                  {{ $t("profileowner.Save") }}
                </button>
              </div>
            </form>
          </div>
        </b-modal>
      </div>
    </div>

    <div class="row">
      <h6 class="col-md-12">
        <b>{{ $t("profileowner.Contact_Information") }}</b>
      </h6>
    </div>
    <hr />
    <div class="row mb-1 mt-3">
      <div class="col-md-4">{{ $t("profileowner.default_Phone") }}</div>
      <div class="col-md-4">{{ info.user.phone }}</div>

      <div class="col-md-4">
        <button
          type="button"
          class="btn btn-outline-primary float-md-right"
          data-toggle="modal"
          data-target="#phonemodal1"
          v-b-modal.phonemodal1
        >
          {{ $t("profileowner.Edit") }}
        </button>
      </div>

      <div class="media-body">
        <a data-toggle="modal" data-target="#phonemodal" v-b-modal.phonemodal>
          <fas-icon
            class="primary float-left mr-1 mt-1"
            :icon="['fas', 'plus-circle']"
          />
          {{ $t("profileowner.Add_Contacts") }} </a
        ><br />

        <div v-for="con in info.user_contact" :key="con.id"> 
          <span> {{ con.phone_number }} </span>
          <ul class="website navbar-nav pull-right">
            <li class="nav-item dropdown">
              <b-dropdown
                id="dropdown-dropup"
                dropdown
                variant="primary-outline"
              >
                <b-dropdown-item @click="deleteContact(con.id)">{{
                  $t("profileowner.Delete")
                }}</b-dropdown-item>
              </b-dropdown>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <b>{{ $t("profileowner.Places_you_lived") }}</b>
      </div>
    </div>
    <hr />
    <div class="row mb-4">
      <div class="col-md-4">{{ $t("profileowner.City") }} :</div>
      <div class="col-md-4">{{ info.user.city }}</div>
      <div class="col-md-4">
        <button
          type="button"
          class="btn btn-outline-primary float-md-right"
          data-toggle="modal"
          data-target="#currentcityModal"
          v-b-modal.currentcityModal
        >
          {{ $t("profileowner.Edit") }}
        </button>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-4">{{ $t("profileowner.Home_Town") }} :</div>
      <div class="col-md-4">{{ info.user.home_town }}</div>
      <div class="col-md-4">
        <button
          type="button"
          class="btn btn-outline-primary float-md-right"
          data-toggle="modal"
          data-target="#hometownModal"
          v-b-modal.hometownModal
        >
          {{ $t("profileowner.Edit") }}
        </button>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <h6 class="mb-0">
          <b
            >{{ $t("profileowner.Web") }} &amp;
            {{ $t("profileowner.Social_Links") }}</b
          >
        </h6>
        <hr />
        <div class="media">
          <div class="media-body">
            <a v-b-modal.websiteModal data-target="#websiteModal">
              <fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fas', 'plus-circle']"
              />
              {{ $t("profileowner.Add_a_Website") }}</a
            ><br />

            <div v-for="website in info.user_websites" :key="website.id">
              <fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fas', 'globe']"
              />
              <a
                :href="website"
                @click="redirect(website.website_url)"
                target="_blank"
                >{{ website.website_url }}</a
              >
              <ul class="website navbar-nav pull-right">
                <li class="nav-item dropdown">
                  <b-dropdown
                    id="dropdown-dropup"
                    dropdown
                    variant="primary-outline"
                  >
                    <b-dropdown-item @click="edit('website', website)">{{
                      $t("profileowner.Edit")
                    }}</b-dropdown-item>
                    <b-dropdown-item @click="deleteWebsite(website)">{{
                      $t("profileowner.Delete")
                    }}</b-dropdown-item>
                  </b-dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="media mt-4">
          <!--
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
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * this component is for display contact and basic information of the user 
 * @author Marcellin-dev
 */
import moment from "moment";
import axios from 'axios';
export default {
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const maxDate = new Date(today);
    return {
      min: moment().subtract(18, "years").format("YYYY-MM-DD"),
      moment: moment,
      max: maxDate,
      websiteId: null,
      usergen: null,
      basicInfo: {
        dateOfBirth: { day: "12", month: "1", year: "2000" },
        gender: "M",
        mobilePhones: [],
        currentCity: null,
        homeTown: null,
        websites: [],
        socialLinks: [],
      },
      phoneInput: null,
      websiteInput: null,
      sociallinkInput: null,
      index: null,
      newphone: null
    };
  },
  created() {
    this.basicInfo = JSON.parse(
      JSON.stringify(this.$store.getters["profile/getProfileAboutBasicInfos"])
    );
    console.log("Load User birth Date start ++++++", this.basicInfo);
    this.$store
      .dispatch("profile/loadUserBasicInfosBirthDate", null)
      .then((response) => {
        console.log("load user birth date response (3) ++++", response);
        console.log("Load User BirthDate end+++++++");
      })
      .catch((error) => {
        console.log("Error from server or from browser error (2) ++++", error);
      })
      .finally(() => {
        this.basicInfo = JSON.parse(
          JSON.stringify(
            this.$store.getters["profile/getProfileAboutBasicInfos"]
          )
        );
        console.log("Load User birth Date end ++++++", this.basicInfo);
      });
  },
  computed: {
    birthDate() {
      let dob = this.info.user.dob;
      let check = moment(dob, "YYYY/MM/DD");
      var month = check.format("M");
      var day = check.format("D");
      var year = check.format("YYYY");
      var date = year + "-" + month + "-" + day;
      return { date: date };
    },
    info() {
      return this.$store.state.profile.profileIntro;
    },
  },
  methods: {

/**
 * this method is for delete contact of the user 
 * @private
 */
deleteContact(id){
      console.log("---",id)
      
      this.$store.dispatch("profile/deleteContact", id)
      .then(res => {
        this.$store.dispatch("profile/loadUserPostIntro", null);
      });
    
    },
    /**
     * this method is for get the gender and display well
     * @private
     */
    getgender() {
      if (this.info.user.gender == "female") {
        this.usergen = "F";
      } else {
        this.usergen = "M";
      }
    },

    /**
     * this method is for cancel
     * @private
     */
    cancel() {
      console.log("Cancel edit birth date user  ++++++");
      this.basicInfo = JSON.parse(
        JSON.stringify(this.$store.getters["profile/getProfileAboutBasicInfos"])
      );
      this.phoneInput = null;
    },

    /**
     * this method is for update date of birth
     * @private
     */
    saveBirthDate() {
      console.log("this.birthDate STARTTTTT");
      console.log(this.birthDate);
      this.$store
        .dispatch("profile/updateUserBasicInfosBirthDate", {
          dateOfBirth: this.birthDate,
        })
        .then((response) => {
          this.$store
            .dispatch("profile/loadUserPostIntro", null)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {})
        .finally(() => {
          this.$refs["dobbb"].hide();
        });
    },

     /**
     * this method is for update gender
     * @private
     */
    saveGender() {
      console.log("save new gender user start +++++");
      console.log(this.basicInfo.gender);
      this.$store
        .dispatch("profile/updateUserBasicInfosGender", {
          gender: this.usergen,
        })
        .then((response) => {
          this.$store
            .dispatch("profile/loadUserPostIntro", null)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
          console.log("save new gender user response (3)", response);
        })
        .catch((error) => {
          console.log(
            error,
            "not save new birth date user end error( 2 ) +++++"
          );
        })
        .finally(() => {
          console.log("finally save new gender user ");
          this.$refs["modal-7"].hide();
        });
    },

    /**
     * this method is for update principal phone number
     * @private
     */
    savePhone(){
      console.log('--',this.info.user.phone);
      let data = { phone: this.info.user.phone}
      axios.post('profile/update-phone', data)
      .then(res => {
        console.log(res)
        this.$store.dispatch("profile/loadUserPostIntro", null);
         this.$refs["phonemodal1"].hide()
      })
      .catch(err => {
        console.log(err)
      })
    },

    /**
     * this method is for update secondary phones numbers
     * @private
     */
    savePhoneNumber() {
      this.$store
        .dispatch("profile/updateUserBasicInfosMobilePhones", {
          mobilePhones: this.newphone,
        })
        .then((response) => {
          this.$store.dispatch("profile/loadUserPostIntro", null);
          console.log("update phone user response (3) ++++", response);
           this.$store.dispatch("profile/loadUserPostIntro", null);
        })
        .catch((error) => {
          console.log(
            error,
            "not save new mobilePhones user end error(2) +++++"
          );
        })
        .finally(() => {
          console.log("finally save new mobilePhones user ++++++ ");
          this.$refs["phonemodal"].hide();
        });
    },

    /**
     * this method is for update principal currency city
     * @private
     */
    saveCurrentCity() {
      console.log("save new current City user start +++++");
      console.log(this.basicInfo.currentCity);
      let data = {city: this.info.user.city,}
      this.$store
        .dispatch("profile/updateUserBasicInfosCurrentCity", data)
        .then((response) => {
            console.log("----------teststst")
           this.$store.dispatch("profile/loadUserPostIntro", null);
          console.log(
            "save new current city user response (3) ++++++",
            response
          );
        })
        .catch((error) => {
          console.log(
            "not save new mobilePhones user end error (2) +++++++",
            error
          );
        })
        .finally(() => {
          console.log("finally save new current city user ");
          this.basicInfo = JSON.parse(
            JSON.stringify(
              this.$store.getters["profile/getProfileAboutBasicInfos"]
            )
          );
          console.log(this.basicInfo);
          this.$refs["currentcityModal"].hide();
        });
    },

    /**
     * this method is for update principal home town
     * @private
     */
    saveHomeTown() {
      this.$store
        .dispatch("profile/updateUserBasicInfosHomeTown", {
          homeTown: this.info.user.home_town,
        })
        .then((response) => {})
        .catch((error) => {
          console.log(error, "not save new homeTown user end error (2)+++++");
        })
        .finally(() => {
          this.$store
            .dispatch("profile/loadUserPostIntro", null)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
          this.$refs["hometownModal"].hide();
        });
    },

    /**
     * this method is for add  website
     * @private
     */
    saveWebsite() {
      this.$store
        .dispatch("profile/updateUserBasicInfosWebsites", {
          websites: this.websiteInput,
        })
        .then((response) => {
          console.log("save new websites user response (3) ++++++", response);
          console.log("save new websites user end +++++");
          this.flashMessage.show({
            status: "success",
            message: response.data.message
          })
           this.$refs["websiteModal"].hide();
        })
        .catch((error) => {
          console.log(error, "not save new websites user end error (2) +++++" );
          this.flashMessage.show({
            status: "error",
            message: error.response.data.errors.webUrl[0]
          })
        })
        .finally(() => {
          this.$store
            .dispatch("profile/loadUserPostIntro", null)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
         
        });
    },

    /**
     * this method is for delete website
     * @private
     */
    deleteWebsite(website) {
      console.log("save new websites user start +++++");
      console.log(website);
      this.$store
        .dispatch("profile/deleteUserBasicInfosWebsites", {
          id: website.id,
        })
        .then((response) => {
          console.log("save new websites user response (3) ++++++", response);
        })
        .catch((error) => {
          console.log(error, "not save new websites user end error (2) +++++");
        })
        .finally(() => {
          console.log("finally save new website user ");
          this.$store.dispatch("profile/loadUserPostIntro", null);
          this.$refs["websiteEModal"].hide();
        });
    },

    /**
     * this method is for save website
     * @private
     */
    saveEWebsite() {
      console.log("save new websites user start +++++");
      this.$store
        .dispatch("profile/updateUserBasicInfosEWebsites", {
          websites: this.websiteInput,
          id: this.websiteId,
        })
        .then((response) => {
          console.log("save new websites user response (3) ++++++", response);
          console.log("save new websites user end +++++");
        })
        .catch((error) => {
          console.log(error, "not save new websites user end error (2) +++++");
        })
        .finally(() => {
          console.log("finally save new website user ");
          this.$store.dispatch("profile/loadUserPostIntro", null);
          this.$refs["websiteEModal"].hide();
        });
    },

    /**
     * this method is for add social link
     * @private
     */
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
        .dispatch("profile/updateUserBasicInfosSocialLinks", {
          socialLinks: this.basicInfo.socialLinks,
        })
        .then((response) => {
          console.log();
          console.log(
            "save new socialLinks user response (3) ++++++",
            response
          );
          console.log("save new socialLinks user end +++++");
        })
        .catch((error) => {
          console.log(
            error,
            "not save new socialLinks user end error(2) +++++"
          );
        })
        .finally(() => {
          console.log("finally save new socialLink user ");
          this.basicInfo = JSON.parse(
            JSON.stringify(
              this.$store.getters["profile/getProfileAboutBasicInfos"]
            )
          );
          console.log(this.basicInfo);
          this.$refs["sociallinkModal"].hide();
        });
    },

    /**
     * this method is for delete website, social link 
     * @private
     */
    deleteElement(type, value) {
      switch (type) {
        case "website":
          this.basicInfo.websites = this.basicInfo.websites.filter(
            (website) => {
              return website !== value;
            }
          );
          break;
        case "socialLink":
          this.basicInfo.socialLinks = this.basicInfo.socialLinks.filter(
            (socialLink) => {
              return socialLink !== value;
            }
          );
          break;
        default:
          console.log("No Correspondance");
          break;
      }
    },

    /**
     * this method is for edit website, social link, 
     * @private
     */
    edit(type, value) {
      switch (type) {
        case "website":
          console.log("edit website");
          this.index = this.info.user_websites.findIndex((website) => {
            return website === value;
          });
          console.log(this.index);
          this.websiteInput = value.website_url;
          this.websiteId = value.id;
          this.$refs["websiteEModal"].show();
          break;
        case "socialLink":
          console.log("edit socialLink");
          this.index = this.basicInfo.socialLinks.findIndex((socialLink) => {
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
    },
  },
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