<template>
  <div>
    <div class="row">
      <h6 class="col-md-12"><b>Basic Information</b></h6>

      <hr />
    </div>
    <div class="row mb-1">
      <div class="col-md-4">Date Of Birth</div>
      <div class="col-md-4">{{ info.user.dob }}</div>
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

      <b-modal id="phonemodal" title="Add Phone Number" hide-footer ref="phonemodal" @close="cancel">
        <div class="modal-body">
          <form class="form" action="" method="post" @submit.prevent="savePhoneNumber">
            <b-form-input
              class="mt-2 mb-2"
              v-model="info.user.phone"
              placeholder="phone"
              type="text"
              required
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">Save</button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal id="currentcityModal" title="Add current city" hide-footer ref="currentcityModal" @close="cancel">
        <div class="modal-body">
          <form class="form" action="" method="post" @submit.prevent="saveCurrentCity">
            <b-form-input
              class="mt-2 mb-2"
              placeholder="current city"
              type="text"
              v-model="info.user.city"
            ></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">Save</button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal id="hometownModal" ref="hometownModal" title="Add home town" hide-footer @close="cancel">
        <div class="modal-body">
          <form class="form" action="" method="post" @submit.prevent="saveHomeTown">
            <b-form-input class="mt-2 mb-2" v-model="info.user.home_town" placeholder="home town"></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">Save</button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal id="websiteModal" ref="websiteModal" title="Add a website" hide-footer @close="cancel">
        <div class="modal-body">
          <form class="form" action="" method="post" @submit.prevent="saveWebsite">
            <b-form-input class="mt-2 mb-2" placeholder="Website" v-model="websiteInput"></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">Save</button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal id="websiteEModal" ref="websiteEModal" title="Edit website" hide-footer @close="cancel">
        <div class="modal-body">
          <form class="form" action="" method="post" @submit.prevent="saveEWebsite">
            <b-form-input class="mt-2 mb-2" placeholder="Website" v-model="websiteInput"></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">Save</button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal id="sociallinkModal" title="Add A social link" hide-footer ref="sociallinkModal" @close="cancel">
        <div class="modal-body">
          <form class="form" action="" method="post" @submit.prevent="saveSocialLink">
            <b-form-input class="mt-2 mb-2" placeholder="soclial link" v-model="sociallinkInput"></b-form-input>

            <div class="fosrm-group text-right w-100">
              <button type="submit" class="btn btn-primary orange">Save</button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal id="modal-6" ref="model-6" title="Edit Date of Birth" hide-footer @close="cancel">
        <div class="modal-body">
          <form class="form-inline" action="" method="post">
            <div class="input-group col-md-12 pl-0 pr-0 mb-4 selec">
              <label class="col-md-3 pl-0 pr-0 control-label">Birth Year</label>
              <div class="col-md-9 pr-0 pl-0">
                <div class="form-group">
                  <b-form-datepicker id="example-datepicker" v-model="birthDate.date" class="mb-2"></b-form-datepicker>
                </div>
              </div>
            </div>
            <div class="fosrm-group text-right w-100">
              <button type="button" class="btn btn-dark pr-1" @click="cancel">
                cancel
              </button>
              <button type="button" class="btn btn-primary orange" @click="saveBirthDate">
                Save
              </button>
            </div>
          </form>
        </div>
      </b-modal>
    </div>
    <div class="row">
      <div class="col-md-4">Gender</div>
      <div class="col-md-4">{{ info.user.gender }}</div>
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
        <b-modal id="modal-7" title="Add/Edit Gender" hide-footer ref="modal-7" @close="cancel">
          <div class="modal-body">
            <form class="form-inline" action="" method="post">
              <div class="input-group col-md-12 mb-4 selec">
                <label class="col-md-4 control-label" style="align-items: first baseline" for="gender">Gender </label>
                <div class="col-md-8 pl-0 pr-0">
                  <select id="gender" class="form-control w-100" v-model="basicInfo.gender">
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </div>
              </div>
              <!-- End number In input-->
              <div class="fosrm-group text-right w-100">
                <button type="button" class="btn btn-primary orange" @click="saveGender">
                  Save
                </button>
              </div>
            </form>
          </div>
        </b-modal>
      </div>
    </div>

    <div class="row">
      <h6 class="col-md-12"><b>Contact Information</b></h6>
    </div>
    <hr />
    <div class="row mb-1 mt-3">
      <div class="col-md-4">Phone</div>
      <div class="col-md-4">{{ info.user.phone }}</div>
      <div class="col-md-4">
        <button
          type="button"
          class="btn btn-outline-primary float-md-right"
          data-toggle="modal"
          data-target="#phonemodal"
          v-b-modal.phonemodal
        >
          Edit
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12"><b>Places you lived</b></div>
    </div>
    <hr />
    <div class="row mb-4">
      <div class="col-md-4">City :</div>
      <div class="col-md-4">{{ info.user.city }}</div>
      <div class="col-md-4">
        <button
          type="button"
          class="btn btn-outline-primary float-md-right"
          data-toggle="modal"
          data-target="#currentcityModal"
          v-b-modal.currentcityModal
        >
          Edit
        </button>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-4">Home Town :</div>
      <div class="col-md-4">{{ info.user.home_town }}</div>
      <div class="col-md-4">
        <button
          type="button"
          class="btn btn-outline-primary float-md-right"
          data-toggle="modal"
          data-target="#hometownModal"
          v-b-modal.hometownModal
        >
          Edit
        </button>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <h6 class="mb-0"><b>Web &amp; Social Links</b></h6>
        <hr />
        <div class="media">
          <div class="media-body">
            <a v-b-modal.websiteModal data-target="#websiteModal">
              <fas-icon class="primary float-left mr-1 mt-1" :icon="['fas', 'plus-circle']" />
              Add a Website</a
            ><br />

            <div v-for="website in info.user_websites" :key="website.id">
              <fas-icon class="primary float-left mr-1 mt-1" :icon="['fas', 'globe']" />
              <a :href="website" @click="redirect(website.website_url)" target="_blank">{{ website.website_url }}</a>
              <ul class="website navbar-nav pull-right">
                <li class="nav-item dropdown">
                  <b-dropdown id="dropdown-dropup" dropdown variant="primary-outline">
                    <b-dropdown-item @click="edit('website', website)">Edit</b-dropdown-item>
                    <b-dropdown-item @click="deleteWebsite(website)">Delete</b-dropdown-item>
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
import moment from 'moment';
export default {
  data() {
    return {
      websiteId: null,
      basicInfo: {
        dateOfBirth: { day: '12', month: '1', year: '2000' },
        gender: 'M',
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
    };
  },
  created() {
    this.basicInfo = JSON.parse(JSON.stringify(this.$store.getters['profile/getProfileAboutBasicInfos']));
    console.log('Load User birth Date start ++++++', this.basicInfo);
    this.$store
      .dispatch('profile/loadUserBasicInfosBirthDate', null)
      .then(response => {
        console.log('load user birth date response (3) ++++', response);
        console.log('Load User BirthDate end+++++++');
      })
      .catch(error => {
        console.log('Error from server or from browser error (2) ++++', error);
      })
      .finally(() => {
        this.basicInfo = JSON.parse(JSON.stringify(this.$store.getters['profile/getProfileAboutBasicInfos']));
        console.log('Load User birth Date end ++++++', this.basicInfo);
      });
  },
  computed: {
    birthDate() {
      let dob = this.info.user.dob;
      let check = moment(dob, 'YYYY/MM/DD');
      var month = check.format('M');
      var day = check.format('D');
      var year = check.format('YYYY');
      var date = year + '-' + month + '-' + day;
      return { date: date };
    },
    info() {
      return this.$store.state.profile.profileIntro;
    },
  },
  methods: {
    cancel() {
      console.log('Cancel edit birth date user  ++++++');
      this.basicInfo = JSON.parse(JSON.stringify(this.$store.getters['profile/getProfileAboutBasicInfos']));
      this.phoneInput = null;
    },
    saveBirthDate() {
      console.log('this.birthDate STARTTTTT');
      console.log(this.birthDate);
      this.$store
        .dispatch('profile/updateUserBasicInfosBirthDate', {
          dateOfBirth: this.birthDate,
        })
        .then(response => {
          console.log('save new birth date user response (3) +++++', response);
          console.log('save new birth date user end +++++');
          this.$store
            .dispatch('profile/loadUserPostIntro', null)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log('not save new birth date user end error (2) +++++', error);
        })
        .finally(() => {
          this.$refs['model-6'].hide();
        });
    },
    saveGender() {
      console.log('save new gender user start +++++');
      console.log(this.basicInfo.gender);
      this.$store
        .dispatch('profile/updateUserBasicInfosGender', {
          gender: this.basicInfo.gender,
        })
        .then(response => {
          this.$store
            .dispatch('profile/loadUserPostIntro', null)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
          console.log('save new gender user response (3)', response);
        })
        .catch(error => {
          console.log(error, 'not save new birth date user end error( 2 ) +++++');
        })
        .finally(() => {
          console.log('finally save new gender user ');
          this.$refs['modal-7'].hide();
        });
    },
    savePhoneNumber() {
      this.$store
        .dispatch('profile/updateUserBasicInfosMobilePhones', {
          mobilePhones: this.info.user.phone,
        })
        .then(response => {
          console.log('update phone user response (3) ++++', response);
        })
        .catch(error => {
          console.log(error, 'not save new mobilePhones user end error(2) +++++');
        })
        .finally(() => {
          console.log('finally save new mobilePhones user ++++++ ');
          this.$refs['phonemodal'].hide();
        });
    },
    saveCurrentCity() {
      console.log('save new current City user start +++++');
      console.log(this.basicInfo.currentCity);
      this.$store
        .dispatch('profile/updateUserBasicInfosCurrentCity', {
          currentCity: this.info.user.city,
        })
        .then(response => {
          console.log('save new current city user response (3) ++++++', response);
        })
        .catch(error => {
          console.log('not save new mobilePhones user end error (2) +++++++', error);
        })
        .finally(() => {
          console.log('finally save new current city user ');
          this.basicInfo = JSON.parse(JSON.stringify(this.$store.getters['profile/getProfileAboutBasicInfos']));
          console.log(this.basicInfo);
          this.$refs['currentcityModal'].hide();
        });
    },
    saveHomeTown() {
      this.$store
        .dispatch('profile/updateUserBasicInfosHomeTown', {
          homeTown: this.info.user.home_town,
        })
        .then(response => {})
        .catch(error => {
          console.log(error, 'not save new homeTown user end error (2)+++++');
        })
        .finally(() => {
          this.$store
            .dispatch('profile/loadUserPostIntro', null)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
          this.$refs['hometownModal'].hide();
        });
    },
    saveWebsite() {
      this.$store
        .dispatch('profile/updateUserBasicInfosWebsites', {
          websites: this.websiteInput,
        })
        .then(response => {
          console.log('save new websites user response (3) ++++++', response);
          console.log('save new websites user end +++++');
        })
        .catch(error => {
          console.log(error, 'not save new websites user end error (2) +++++');
        })
        .finally(() => {
          this.$store
            .dispatch('profile/loadUserPostIntro', null)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
          this.$refs['websiteModal'].hide();
        });
    },
    deleteWebsite(website) {
      console.log('save new websites user start +++++');
      console.log(website);
      this.$store
        .dispatch('profile/deleteUserBasicInfosWebsites', {
          id: website.id,
        })
        .then(response => {
          console.log('save new websites user response (3) ++++++', response);
        })
        .catch(error => {
          console.log(error, 'not save new websites user end error (2) +++++');
        })
        .finally(() => {
          console.log('finally save new website user ');
          this.$store.dispatch('profile/loadUserPostIntro', null);
          this.$refs['websiteEModal'].hide();
        });
    },
    saveEWebsite() {
      console.log('save new websites user start +++++');
      this.$store
        .dispatch('profile/updateUserBasicInfosEWebsites', {
          websites: this.websiteInput,
          id: this.websiteId,
        })
        .then(response => {
          console.log('save new websites user response (3) ++++++', response);
          console.log('save new websites user end +++++');
        })
        .catch(error => {
          console.log(error, 'not save new websites user end error (2) +++++');
        })
        .finally(() => {
          console.log('finally save new website user ');
          this.$store.dispatch('profile/loadUserPostIntro', null);
          this.$refs['websiteEModal'].hide();
        });
    },
    saveSocialLink() {
      console.log('save new sociallinks  user start +++++');
      if (this.basicInfo.socialLinks.includes(this.sociallinkInput)) {
        console.log('Duplication of sociallink  +++++++');
      } else if (this.index !== null) {
        this.basicInfo.socialLinks[this.index] = this.sociallinkInput;
      } else {
        console.log('No Duplication of sociallink +++++++');
        this.basicInfo.socialLinks.push(this.sociallinkInput);
      }
      this.sociallinkInput = null;
      console.log(this.basicInfo.socialLinks);
      this.$store
        .dispatch('profile/updateUserBasicInfosSocialLinks', {
          socialLinks: this.basicInfo.socialLinks,
        })
        .then(response => {
          console.log();
          console.log('save new socialLinks user response (3) ++++++', response);
          console.log('save new socialLinks user end +++++');
        })
        .catch(error => {
          console.log(error, 'not save new socialLinks user end error(2) +++++');
        })
        .finally(() => {
          console.log('finally save new socialLink user ');
          this.basicInfo = JSON.parse(JSON.stringify(this.$store.getters['profile/getProfileAboutBasicInfos']));
          console.log(this.basicInfo);
          this.$refs['sociallinkModal'].hide();
        });
    },
    deleteElement(type, value) {
      switch (type) {
        case 'website':
          this.basicInfo.websites = this.basicInfo.websites.filter(website => {
            return website !== value;
          });
          break;
        case 'socialLink':
          this.basicInfo.socialLinks = this.basicInfo.socialLinks.filter(socialLink => {
            return socialLink !== value;
          });
          break;
        default:
          console.log('No Correspondance');
          break;
      }
    },
    edit(type, value) {
      switch (type) {
        case 'website':
          console.log('edit website');
          this.index = this.info.user_websites.findIndex(website => {
            return website === value;
          });
          console.log(this.index);
          this.websiteInput = value.website_url;
          this.websiteId = value.id;
          this.$refs['websiteEModal'].show();
          break;
        case 'socialLink':
          console.log('edit socialLink');
          this.index = this.basicInfo.socialLinks.findIndex(socialLink => {
            return socialLink === value;
          });
          console.log(this.index);
          this.sociallinkInput = value;
          this.$refs['sociallinkModal'].show();
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
