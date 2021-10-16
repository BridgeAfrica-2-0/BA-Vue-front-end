<template>
  <div>
    <b>WorkPlace</b>  
    <hr />
    <b-link class="mt-4 text-decoration-none" v-b-modal.modal-9>
      <b-icon icon="plus" variant="primary"></b-icon>
      Add Workplace</b-link
    >
    <b-list-group-item
      class="d-flex align-items-center mb-4"
      style="border: none"
    >
      <div class="datails t-left">
        <div class="row">
          <div
            class="media border-botmediatom mt-3 mb-4"
            v-for="workPlace in work"
            :key="workPlace.id"
          >
            <!--  <img
              src="@/assets/img/about3.jpg"
              alt="John Doe"
              class="mr-2 picture-size"
            /> -->
            
            <div class="media-body">
              <h6 class="mb-0">
                <b>{{ workPlace.company_name }} ({{workPlace.position}})</b>
              </h6>
              <b>{{ workPlace.start_year }}/{{ workPlace.start_month }}/{{ workPlace.start_day }} - {{ workPlace.end_year }}/{{ workPlace.end_month }}/{{ workPlace.end_day }}</b>
              <p class="mb-1">
                {{ workPlace.job_responsibilities }}
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
                    @click="editt(workPlace)"
                    >Edit</b-dropdown-item
                  >
                  <b-dropdown-item
                    @click="
                      deleteWorkPlace('workPlaces', workPlace.id)
                    "
                    >Delete</b-dropdown-item
                  >
                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </b-list-group-item>




    













    

    <b-modal
      ref="edit-contact"
      id="edit"
      title="edit Workplace "
      @close="cancel"
      @ok="updatesave"
    >
      <div class="div-design">
     <!--   <b-form-select
          class="mb-2"
          size="sm"
          v-model="editData.access"
          :options="options"
        ></b-form-select>  -->
      </div>
      <b-form-input
        class="mt-2"
        v-model="editData.company_name"
        placeholder="Company"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="editData.position"
        placeholder="Position"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="editData.city_town"
        placeholder="City"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="editData.job_responsibilities"
        placeholder="Responsibilities"
      ></b-form-input>
      <b-form-checkbox
        id="checkbox-1"
        v-model="editData.currently_working"
        name="checkbox-1"
        checked="1"
        unchecked="0"
      >
        Currently Working
      </b-form-checkbox>
      <label>Start Date</label>
      <b-form-datepicker
        id="example-datepicker"
        v-model="editData.startDate"
        class="mb-2"
        placeholder="Start Date"
      ></b-form-datepicker>
      <label>End Date</label>
      <b-form-datepicker
        id="example-datepicker"
        v-model="editData.endDate"
        class="mb-2"
        placeholder="End Date"
      ></b-form-datepicker>
    </b-modal>











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
      <label for="startDate">Start Date</label>
      <b-form-datepicker
        id="startDate"
        v-model="workPlaceInput.startDate"
        class="mb-2"
        placeholder="Start Date"
      ></b-form-datepicker>
      <label for="endDate">End Date</label>
      <b-form-datepicker
        id="endDater"
        v-model="workPlaceInput.endDate"
        class="mb-2"
        placeholder="End Date"
      ></b-form-datepicker>
    </b-modal>

    <FlashMessage />

  </div>
</template>

<script>
export default {
  data() {
    return {
      editData:[],
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" },
      ],
      educationAndWorks: {
        workPlaces: this.work,
        professions: [],
        educations: [],
      },
      workPlaceInput: {
        companyName: null,
        cityTown: null,
        position: null,
        jobResponsibilities: null,
        currentlyWorking: false,
        startDate: null,
        endDate: null,
        access: "public",
      },
      educationInput: null,
      professionInput: null,
      index: null,
    };
  },
  created() {
    console.log("Load User Profile About Education and Works Places");
    this.educationAndWorks.workPlaces = this.work
  },

  computed:{
    work(){
      console.log("this.$store.state.profile.profile_about.user_experience");
      return this.$store.state.profile.profile_about.user_experience;
    },

     workk(){
       console.log("this.$store.state.profile.profile_about");
      return this.$store.state.profile.profile_about;
    }

  },
  methods: {

    editt(value){

      console.log("this.editData Before Assign", value)
       this.editData = value;
       this.editData['startDate'] = value.start_day+'-'+value.start_month+'-'+value.start_year;
       this.editData['endDate'] = value.end_day+'-'+value.end_month+'-'+value.end_year;
       console.log("this.editData Before Update", this.editData)
       this.$refs["edit-contact"].show(); 
    },
    cancel() {
      console.log("Cancel Another Action in User  ++++++");
      this.educationAndWorks.workPlaces = this.workPlaces;
      
      console.log(this.educationAndWorks);
      this.workPlaceInput = {
        companyName: null,
        cityTown: null,
        position: null,
        jobResponsibilities: null,
        currentlyWorking: false,
        startDate: null,
        endDate: null,
        access: "private",
      };
    },


     updatesave: function(){
      console.log(this.editData);
        let formData = new FormData();
        formData.append("companyName", this.editData.company_name);
        formData.append("cityTown", this.editData.city_town);
        formData.append("position", this.editData.position);
        formData.append("jobResponsibilities", this.editData.job_responsibilities);
        formData.append("currentlyWorking", this.editData.currently_working);
        formData.append("startDate", this.editData.startDate);
        formData.append("endDate", this.editData.endDate);
        formData.append("access", "public");
      this.axios.post("userIntro/updateWorking/"+this.editData.id, formData)
      .then(() => {
        console.log('ohh yeah');
        this.$store.dispatch("profile/loadUserProfileAbout", null);
        this.flashMessage.show({
          status: "success",
          message: "Workplace Updated"
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: "Unable to Update Workplace"
        });
      });
		},

    save() {
      console.log("Save/edit/delete WorkPlace User Profile About");
      console.log(this.workPlaceInput);
      let method = "";
      if (this.index !== null) {
        this.educationAndWorks.workPlaces[this.index] = this.workPlaceInput;
        method = "PUT";
      } else {
        this.educationAndWorks.workPlaces.push(this.workPlaceInput);
        method = "POST";
      }

      this.$store
        .dispatch("profile/updateUserWorkPlaces", {
          workPlace: this.workPlaceInput,
          method: method,
        })
        .then((response) => {
          console.log(
            response,
            "save/update/delete new workPlace user end +++++"
          );
        })
        .catch((error) => {
          console.log( error, "not save/update/delete new workPlace user end error (2) +++++");
          this.$store.dispatch("profile/loadUserProfileAbout", null);
          // this.educationAndWorks.workPlaces = this.work;
          // this.work = this.$store.state.profile.profile_about.user_experience;
        })
        .finally(() => {
          this.educationAndWorks = JSON.parse(
            JSON.stringify(
              this.$store.getters["profile/getProfileAboutEducationAndWorks"]
            )
          );
          console.log(
            "Finally save/update/delete new workplace user +++++",
            this.educationAndWorks,
            "+++++++++++"
          );
          this.$refs["add-contact"].hide();
        });
    },
    
    deleteWorkPlace() {
      this.axios.delete("userIntro/updateWorking/"+this.editData.id)
      .then(() => {
        console.log('ohh yeah');
        this.displayEditor();
        this.flashMessage.show({
          status: "success",
          message: "WorkPlace Deleted"
        });
          
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: "Unable To Delete WorkPlace"
        });
      });
    },
    // deleteWorkPlace(type, value) {
    //   switch (type) {
    //     case "workPlaces":
    //       console.log("delete one workplace");
    //       this.educationAndWorks.workPlaces =
    //         this.educationAndWorks.workPlaces.filter((workPlace) => {
    //           return workPlace.companyName !== value;
    //         });
    //       this.$store.state.userData[0].profile_about.educationAndWorks =
    //         this.educationAndWorks;
    //       break;
    //     case "educations":
    //       this.educationAndWorks.educations =
    //         this.educationAndWorks.educations.filter((education) => {
    //           return education !== value;
    //         });
    //       this.$store.state.userData[0].profile_about.educationAndWorks =
    //         this.educationAndWorks;
    //       break;
    //     case "professions":
    //       this.educationAndWorks.professions =
    //         this.educationAndWorks.professions.filter((profession) => {
    //           return profession !== value;
    //         });
    //       this.$store.state.userData[0].profile_about.educationAndWorks =
    //         this.educationAndWorks;
    //       break;
    //     default:
    //       console.log("No Correspondance");
    //       break;
    //   }
    // },
    edit(type, value) {
      switch (type) {
        case "workPlaces":
          console.log("edit workPlace +++++++");
         
          this.workPlaceInput = this.work[value];
          this.$refs["add-contact"].show();      
          break;
        case "educations":
          console.log("edit education");
          this.index = this.educationAndWorks.educations.findIndex(
            (education) => {
              return education.id === value;
            }
          );
          this.educationInput = this.educationAndWorks.educations[this.index];
          this.$refs["educationModal"].show();
          break;
        case "professions":
          console.log("edit professions");
          this.index = this.educationAndWorks.professions.findIndex(
            (profession) => {
              return profession.id === value;
            }
          );
          this.professionInput = this.educationAndWorks.professions[this.index];
          this.$refs["professionModal"].show();
          break;
        default:
          console.log("No Correspondance");
          break;
      }
    },
  },
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