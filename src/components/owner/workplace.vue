<template>
  <div>
    <b>WorkPlace</b>
    <hr />
    <b-link class="mt-4 text-decoration-none" v-b-modal.modal-9>
      <b-icon icon="plus" variant="primary"></b-icon>
      Add Workplace</b-link
    >
    <b-list-group-item
      class="d-flex align-items-center mb-4 "
      style="border: none"
    >
      <div class="datails t-left">
        <div class="row">
          <div
            class="media border-botmediatom mt-3 mb-4"
            v-for="workPlace in educationAndWorks.workPlaces"
            :key="workPlace.id"
          >
            <img
              src="@/assets/img/about3.jpg"
              alt="John Doe"
              class="mr-2 picture-size"
            />
            <div class="media-body">
              <h6 class="mb-0">
                <b>{{ workPlace.companyName }}</b>
              </h6>
              <b>{{ workPlace.companyName }} - {{ workPlace.startDate }}</b>
              <p class="mb-1">
                {{ workPlace.jobResponsibilities }}
              </p>
            </div>
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown
                  id="dropdown-dropup"
                  dropdown
                  variant="primary-outline"
                >
                  <b-dropdown-item
                    @click="edit('workPlaces', workPlace.companyName)"
                    >Edit</b-dropdown-item
                  >
                  <b-dropdown-item
                    @click="delet('workPlaces', workPlace.companyName)"
                    >Delete</b-dropdown-item
                  >
                </b-dropdown>
              </li>
            </ul>
          </div>

          <!--          <div class="media mb-4">-->
          <!--            <img-->
          <!--              src="@/assets/img/about1.jpg"-->
          <!--              alt="John Doe"-->
          <!--              class="mr-2 picture-size"-->
          <!--            />-->
          <!--            <div class="media-body">-->
          <!--              <h6 class="mb-0"><b>Ericson Pvt Ltd. Team Lead</b></h6>-->
          <!--              <b>Team Lead - 7 Feb 2011</b>-->
          <!--              <p class="mb-1">-->
          <!--                Job descrioption dummny textJob descrioption dummny textJob-->
          <!--                descrioption dummny text-->
          <!--              </p>-->
          <!--            </div>-->
          <!--            <ul class="navbar-nav pull-right">-->
          <!--              <li class="nav-item dropdown">-->
          <!--                <b-dropdown-->
          <!--                  id="dropdown-dropup"-->
          <!--                  dropdown-->
          <!--                  variant="primary-outline"-->
          <!--                >-->
          <!--                  <b-dropdown-item href="#">Edit</b-dropdown-item>-->
          <!--                  <b-dropdown-item href="#">Delete</b-dropdown-item>-->
          <!--                </b-dropdown>-->
          <!--              </li>-->
          <!--            </ul>-->
          <!--          </div>-->
        </div>
      </div>
    </b-list-group-item>

    <b-modal
      ref="add-contact"
      id="modal-9"
      title="Add Workplace "
      @close="cancel"
      @ok="save"
    >
      <div class="div-design">
        <b-form-select
          class="mb-2"
          size="sm"
          v-model="workPlaceInput.access"
          :options="options"
        ></b-form-select>
      </div>
      <b-form-input
        class="mt-2"
        v-model="workPlaceInput.companyName"
        placeholder="Company"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="workPlaceInput.position"
        placeholder="Position"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="workPlaceInput.cityTown"
        placeholder="City"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="workPlaceInput.jobResponsibilities"
        placeholder="Responsibilities"
      ></b-form-input>
      <b-form-checkbox
        id="checkbox-1"
        v-model="workPlaceInput.currentlyWorking"
        name="checkbox-1"
        :checked="workPlaceInput.currentlyWorking === 1 ? true : false"
      >
        Currently Working
      </b-form-checkbox>
      <label>Start Date</label>
      <b-form-datepicker
        id="example-datepicker-1"
        v-model="workPlaceInput.startDate"
        class="mb-2"
        placeholder="Start Date"
      ></b-form-datepicker>
      <label>End Date</label>
      <b-form-datepicker
        id="example-datepicker"
        v-model="workPlaceInput.endDate"
        class="mb-2"
        placeholder="End Date"
      ></b-form-datepicker>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" }
      ],
      educationAndWorks: {
        workPlaces: [],
        professions: [],
        educations: []
      },
      workPlaceInput: {
        companyName: null,
        cityTown: null,
        position: null,
        jobResponsibilities: null,
        currentlyWorking: false,
        startDate: null,

        endDate: null,
        access: "public"
      },
      educationInput: null,
      professionInput: null,
      index: null
    };
  },
  created() {
    console.log(
      "Load User Profile About Works Places ++++++++++++"
    );
    this.educationAndWorks = JSON.parse(
      JSON.stringify(this.$store.getters.getProfileAboutEducationAndWorks)
    );
  },
  methods: {
    cancel() {
      console.log("Cancel Another Action in User  ++++++");
      this.educationAndWorks = JSON.parse(
        JSON.stringify(this.$store.getters.getProfileAboutEducationAndWorks)
      );
      console.log(this.educationAndWorks);
      //this.professionInput = null;
      this.workPlaceInput = {
        companyName: null,
        cityTown: null,
        position: null,
        jobResponsibilities: null,
        currentlyWorking: false,
        startDate: null,
        endDate: null,
        access: "private"
      };
      //this.education = null;
      //this.$refs["model-6"].hide();
    },
    save() {
      let method = null;
      console.log("Save New WorkPlace User Profile About");
      if (this.index !== null) {
        this.educationAndWorks.workPlaces[this.index] = this.workPlaceInput;
        method = 'update';
      } else {
        //this.educationAndWorks.workPlaces.push(this.workPlaceInput);
        method = 'post';
      }

      this.$store
        .dispatch("updateUserWorkPlaces", {
          workPlace: this.workPlaceInput,
          method: method
        })
        .then(response => {
          console.log("save new workplace user response (3) ++++++");
          console.log(response);
          console.log("save new workPlace user end +++++");
          //this.$store.state.userData[0].profile_about.educationAndWorks = this.educationAndWorks;
        })
        .catch(error => {
          console.log(error);
          //this.$store.state.userData[0].profile_about.educationAndWorks = this.educationAndWorks;
          //this.cancel();
          console.log("not save new workPlace user end error (2) +++++");
        })

        .finally(() => {
          console.log("finally save new workplace user ");
          this.educationAndWorks = JSON.parse(
                  JSON.stringify(this.$store.getters.getProfileAboutEducationAndWorks)
          );
          this.workPlaceInput = {
            companyName: null,
            cityTown: null,
            position: null,
            jobResponsibilities: null,
            currentlyWorking: false,
            startDate: null,
            endDate: null,
            access: "private"
          };
          this.index = null;
          console.log(this.educationAndWorks);
          this.$refs["add-contact"].hide();
        });
    },
    // save_7() {
    //   console.log("save new sociallinks  user start +++++");
    //   if (this.basicInfo.socialLinks.includes(this.sociallinkInput)) {
    //     console.log("Duplication de sociallink  +++++++");
    //   } else if (this.index !== null) {
    //     this.basicInfo.socialLinks[this.index] = this.sociallinkInput;
    //     this.$store.state.userData[0].profile_about.basicInfo = this.basicInfo;
    //   } else {
    //     console.log("Non Duplication de sociallink +++++++");
    //     this.basicInfo.socialLinks.push(this.sociallinkInput);
    //   }
    //   this.sociallinkInput = null;
    //
    //   console.log(this.basicInfo.socialLinks);
    //   this.$store
    //     .dispatch("updateUserBasicInfosSocialLinks", {
    //       socialLinks: this.basicInfo.socialLinks
    //     })
    //     .then(response => {
    //       console.log(response);
    //       console.log("save new socialLinks user end +++++");
    //       this.$store.state.userData[0].profile_about.basicInfo = this.basicInfo;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       this.$store.state.userData[0].profile_about.basicInfo = this.basicInfo;
    //       //this.cancel()
    //       console.log("not save new socialLinks user end +++++");
    //     });
    //   this.$refs["sociallinkModal"].hide();
    // },
    delet(type, value) {
      switch (type) {
        case "workPlaces":
          console.log("delete one workplace");
          this.educationAndWorks.workPlaces = this.educationAndWorks.workPlaces.filter(
            workPlace => {
              return workPlace.companyName !== value;
            }
          );
          console.log(value);
          this.$store.state.userData[0].profile_about.educationAndWorks = this.educationAndWorks;
          console.log(this.educationAndWorks.workPlaces);
          break;
        case "educations":
          this.educationAndWorks.educations = this.educationAndWorks.educations.filter(
            education => {
              return education !== value;
            }
          );
          this.$store.state.userData[0].profile_about.educationAndWorks = this.educationAndWorks;
          break;
        case "professions":
          this.educationAndWorks.professions = this.educationAndWorks.professions.filter(
            profession => {
              return profession !== value;
            }
          );
          this.$store.state.userData[0].profile_about.educationAndWorks = this.educationAndWorks;
          break;
        default:
          console.log("Aucune Correspondance");
          break;
      }
    },
    edit(type, value) {
      switch (type) {
        case "workPlaces":
          console.log("edit workPlace");
          this.index = this.educationAndWorks.workPlaces.findIndex(
            workPlace => {
              return workPlace.companyName === value;
            }
          );
          console.log(this.index);
          this.workPlaceInput = this.educationAndWorks.workPlaces[this.index];
          this.$refs["add-contact"].show();
          break;
        case "educations":
          console.log("edit education");
          this.index = this.educationAndWorks.educations.findIndex(
            education => {
              return education.id === value;
            }
          );
          console.log(this.index);
          this.educationInput = this.educationAndWorks.educations[this.index];
          this.$refs["educationModal"].show();
          break;
        case "professions":
          console.log("edit professions");
          this.index = this.educationAndWorks.professions.findIndex(
            profession => {
              return profession.id === value;
            }
          );
          console.log(this.index);
          this.professionInput = this.educationAndWorks.professions[this.index];
          this.$refs["professionModal"].show();
          break;
        default:
          console.log("Aucune Correspondance");
          break;
      }
    }
  }
};
</script>

<style scoped>
.avatar {
  position: relative;
  top: -50px;
}

.div-design {
  width: 100px;
}

.picture-size {
  width: 60px;
}

@media only screen and (max-width: 600px) {
  .avatar {
    position: relative;
    top: -100px;
  }
}

.t-left {
  text-align: left;
}
</style>
