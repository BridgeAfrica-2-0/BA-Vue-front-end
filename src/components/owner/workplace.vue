<template>
  <div>
    <b>{{ $t('profileowner.WorkPlace') }}</b>  
    <hr />
    <b-link class="mt-4 text-decoration-none" v-b-modal.modal-9>
      <b-icon icon="plus" variant="primary"></b-icon>
      {{ $t('profileowner.Add_Workplace') }} 
    </b-link>

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


            <div class="media-body">
              <h6 class="mb-0">
                <b>{{ workPlace.company_name }} ({{workPlace.position}})</b>
              </h6>
              <b v-if="workPlace.end_year || workPlace.end_month || workPlace.end_day">{{ workPlace.start_year }}/{{ workPlace.start_month }}/{{ workPlace.start_day }} - {{ workPlace.end_year }}/{{ workPlace.end_month }}/{{ workPlace.end_day }}</b>
              <b v-else>{{ workPlace.start_year }}/{{ workPlace.start_month }}/{{ workPlace.start_day }}</b>
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
                    >{{ $t('profileowner.Edit') }}</b-dropdown-item
                  >
                  <b-dropdown-item
                    @click="deleteWorkPlace(workPlace.id)"
                  >{{ $t('profileowner.Delete') }}</b-dropdown-item
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
      :title="$t('profileowner.edit_Workplace') "
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
        :placeholder="$t('profileowner.Company')"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="editData.position"
        :placeholder="$t('profileowner.Position')"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="editData.city_town"
        :placeholder="$t('profileowner.City')"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="editData.job_responsibilities"
        :placeholder="$t('profileowner.Responsibilities')"
      ></b-form-input>
      <b-form-checkbox
        id="checkbox-1"
        v-model="editData.currently_working"
        name="checkbox-1"
        checked="1"
        unchecked="0"
      >
        {{ $t('profileowner.Currently_Working') }}
      </b-form-checkbox>
      <label>{{ $t('profileowner.Start_Date') }}</label>
      <b-form-datepicker
        id="example-datepicker"
        v-model="editData.startDate"
        class="mb-2"
        :placeholder="$t('profileowner.Start_Date')"
      ></b-form-datepicker>
      <label v-if="!editData.currently_working">{{ $t('profileowner.End_Date') }}</label>
      <b-form-datepicker
        v-if="!editData.currently_working"
        id="example-datepicker"
        v-model="editData.endDate"
        class="mb-2"
        :placeholder="$t('profileowner.End_Date')"
      ></b-form-datepicker>
    </b-modal>

    <b-modal
      ref="add-contact"
      id="modal-9"
      :title="$t('profileowner.Add_Workplace') "
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
        :placeholder="$t('profileowner.Company')"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="workPlaceInput.position"
        :placeholder="$t('profileowner.Position')"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="workPlaceInput.cityTown"
        :placeholder="$t('profileowner.City')"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="workPlaceInput.jobResponsibilities"
        :placeholder="$t('profileowner.Responsibilities')"
      ></b-form-input>
      <b-form-checkbox
        id="checkbox-1"
        v-model="workPlaceInput.currentlyWorking"
        name="checkbox-1"
        :checked="workPlaceInput.currentlyWorking === 1 ? true : false"
      >
        {{ $t('profileowner.Currently_Working') }}
      </b-form-checkbox>
      <label for="startDate">{{ $t('profileowner.Start_Date') }}</label>
      <b-form-datepicker
        id="startDate"
        v-model="workPlaceInput.startDate"
        class="mb-2"
        :placeholder="$t('profileowner.Start_Date')"
      ></b-form-datepicker>
      <label v-if="!workPlaceInput.currentlyWorking" for="endDate">{{ $t('profileowner.End_Date') }}</label>
      <b-form-datepicker
        v-if="!workPlaceInput.currentlyWorking"
        id="endDater"
        v-model="workPlaceInput.endDate"
        class="mb-2"
        :placeholder="$t('profileowner.End_Date')"
      ></b-form-datepicker>
    </b-modal>

    

  </div>
</template>

<script>
import { diffBetweenTwoDate } from '@/helpers'
export default {

  data() {
    return {
      editData:[],
      options: [
        { value: null, text: this.$t('profileowner.Select') },
        { value: "private", text: this.$t('profileowner.Private') },
        { value: "public", text: this.$t('profileowner.Public') },
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
    }
  },

  created() {
    this.educationAndWorks.workPlaces = this.work
  },

  computed:{
    work(){
      return this.$store.state.profile.profile_about.user_experience;
    },

     workk(){
      return this.$store.state.profile.profile_about;
    }
  },

  watch:{
    "workPlaceInput.endDate": function(value){

      if (this.workPlaceInput.endDate && 
          this.workPlaceInput.startDate) {
        const diff = diffBetweenTwoDate(this.workPlaceInput.endDate, this.workPlaceInput.startDate)
      
        if (diff <= 0){
          this.flashMessage.show({
            status: "error",
            message: "the end date must not be greater than the start date",
            blockClass: "custom-block-class",
          })
        }
      }
    }
  },

  methods: {

    editt(value){

      console.log("this.editData Before Assign", value)
       this.editData = value;
       this.editData['startDate'] = value.start_day+'-'+value.start_month+'-'+value.start_year;
       if(value.currently_working){
         this.editData['endDate'] = value.end_day+'-'+value.end_month+'-'+value.end_year;
       } else{
         console.log('falseeeeeeee')
         this.editData['endDate'] = null;
       }
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
       this.$store
        .dispatch("profile/updateUserWorkPlaces", {
          workPlace: this.editData,
          method: 'PUT',
        })
        .then((response) => {
          console.log( response, "lewsi save/update/delete new workPlace user end +++++" );
        })
        .catch((error) => {
          console.log( error, "lewis not save/update/delete new workPlace user end error (2) +++++");
        })
        .finally(() => {
          this.$store.dispatch("profile/loadUserProfileAbout", null);
          this.educationAndWorks = JSON.parse(
            JSON.stringify(
              this.$store.getters["profile/getProfileAboutEducationAndWorks"]
            )
          );
          console.log("Lewis Finally save/update/delete new workplace user +++++", this.educationAndWorks, "+++++++++++");
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
          console.log( response, "save/update/delete new workPlace user end +++++" );
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
          console.log("Finally save/update/delete new workplace user +++++", this.educationAndWorks, "+++++++++++");
          this.$refs["add-contact"].hide();
        });
    },
    
    deleteWorkPlace(workPlace_id) {

       console.log("Lewis delete WorkPlace User Profile About", workPlace_id);

      this.$store
        .dispatch("profile/updateUserWorkPlaces", {
          workPlace: workPlace_id,
          method: 'DELETE',
        })
        .then((response) => {
          console.log( response, "Lewis delete new workPlace user end +++++" );
        })
        .catch((error) => {
          console.log( error, "not Lewis delete new workPlace user end error (2) +++++");
          // this.educationAndWorks.workPlaces = this.work;
          // this.work = this.$store.state.profile.profile_about.user_experience;
        })
        .finally(() => {
          this.$store.dispatch("profile/loadUserProfileAbout", null);
          this.educationAndWorks = JSON.parse(
            JSON.stringify(
              this.$store.getters["profile/getProfileAboutEducationAndWorks"]
            )
          );
          console.log("Finally Lewis delete new workplace user +++++", this.educationAndWorks, "+++++++++++");
        });

    },

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