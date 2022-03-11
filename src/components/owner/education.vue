<template>
  <div>
    <b>{{ $t('profileowner.Education') }}</b>


    <hr />
    <b-link style="text-decoration: none" class="mt-4" v-b-modal.educationModal>
      <b-icon icon="plus" variant="primary"></b-icon>
      {{ $t('profileowner.Add_University_Or_High_School') }}</b-link
    >
    <b-list-group-item
      class="d-flex align-items-center mb-4 "
      style="border: none"
    >
      <div class="datails">
        <div
          class="row"
          v-for="education in educations " 
          :key="education.school_name"
        >
          <div class="col">
            <span class="mr-auto">
              <b> {{ education.school_name }}</b>
            </span>
            <span>
           <br>      {{ $t('profileowner.Major') }} : {{ education.major_subjects }} 
            </span>

            <p>
              {{ $t('profileowner.Duration_From') }} {{ education.start_year }} {{ $t('profileowner.To') }}
              {{ education.end_year }}
            </p>
            <p>
              {{ education.description }}
            </p>
          </div>
          <div class="col-1">
            <b-dropdown id="dropdown-dropup" dropdown variant="primary-outline">
              <b-dropdown-item @click="edit(education)"
                >{{ $t('profileowner.Edit') }}</b-dropdown-item
              >
              <b-dropdown-item
                @click="deleteEducation(education.id)"
                >{{ $t('profileowner.Delete') }}</b-dropdown-item
              >
            </b-dropdown>
          </div>
        </div>
      </div>
    </b-list-group-item>




     <b-modal
      ref="updateEducationModal"
      id="updateEducationModal"
      :title="$t('profileowner.Update_Education')"
      @close="cancel"
      @ok="updatesave"
    >
     

     
      <b-form-input
        class="mt-2 mb-2"
        v-model="editData.school_name"
        :placeholder="$t('profileowner.School')"
      ></b-form-input>

      <b-form-checkbox
        id="checkbox-1"
        v-model="editData.is_graduated"
        name="checkbox-1"
        :value="editData.is_graduated ? 1 : 0"
      >
        {{ $t('profileowner.Graduated') }} 
      </b-form-checkbox>
       
      <div class="form-group">
     <label>{{ $t('profileowner.Duration_From') }}</label>  //  {{editData.startDate}}
      
 <DropdownDatepicker  v-model="editData.startDate" :defaultDate="editData.startDate"  :maxDate="today"    style="width:100%"   dropdownClass="form-control mr-1 w-100" class="d-inline-flex" />
      </div>

      <div class="form-group">

 <label>{{ $t('profileowner.To') }}</label>
          
 <DropdownDatepicker  v-model="editData.endDate" :defaultDate="editData.endDate"   :maxDate="today"    style="width:100%"   dropdownClass="form-control mr-1 w-100" class="d-inline-flex" />

      </div>


      <b-form-input
        class="mt-2"
        v-model="editData.major_subjects"
        :placeholder="$t('profileowner.Major')"
      ></b-form-input>
    </b-modal>





    <b-modal
      ref="educationModal"
      id="educationModal"
      :title="$t('profileowner.Add_Education')"
      @close="cancel"
      @ok="save"
    >
     

      <b-form-input
        class="mt-2 mb-2"
        v-model="educationInput.schoolName"
        :placeholder="$t('profileowner.School')"
        required
      ></b-form-input>

      <b-form-checkbox
        id="checkbox-1"
        v-model="educationInput.graduated"
        name="checkbox-1"
        :value="educationInput.graduated ? 1 : 0"
      >
        {{ $t('profileowner.Graduated') }}
      </b-form-checkbox>
     
      
      <div class="form-group">
     <label>{{ $t('profileowner.Duration_From') }}</label>
      
 <DropdownDatepicker  v-model="educationInput.durationFrom"     style="width:100%"   :maxDate="today"   dropdownClass="form-control mr-1 w-100" class="d-inline-flex" />
      </div>

      <div class="form-group">

 <label>{{ $t('profileowner.To') }}</label>
          
 <DropdownDatepicker      v-model="educationInput.durationTo"    style="width:100%"  :maxDate="today"    dropdownClass="form-control mr-1 w-100" class="d-inline-flex" />

      </div>

      <b-form-input
        class="mt-2"
        v-model="educationInput.major"
        :placeholder="$t('profileowner.Major')"
      ></b-form-input>



      
    </b-modal>

    
    
  </div>
</template>

<script>

import { diffBetweenTwoDate } from '@/helpers'
import DropdownDatepicker from 'vue-dropdown-datepicker'; 

export default {
  data() {
    return {
      editData:[],
       today :new Date().toISOString().slice(0, 10),
      options: [
        { value: null, text: this.$t('profileowner.Select') },
        { value: "private", text: this.$t('profileowner.Private') },
        { value: "public", text: this.$t('profileowner.Public') }
      ],
      educationInput: {
        access: "private",
        schoolName: null,
        graduated: false,
        durationFrom: null,
        durationTo: null,
        major: null
      },
      index: null
    }
  },

components:{DropdownDatepicker},

  created() {
    this.educations = JSON.parse(
      JSON.stringify(
        this.$store.getters['profile/getProfileAboutEducationAndWorks']
      )
    );
  },

  watch:{
    "educationInput.durationTo": function(value){

      if (this.educationInput.durationTo && this.educationInput.durationFrom){
        const diff = diffBetweenTwoDate(this.educationInput.durationTo, this.educationInput.durationFrom)
        
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

  computed:{
    educations(){
      return this.$store.state.profile.profile_about.user_education;
    },
  },
  methods: {

     flashErrors(errors) {
      let err = "";
      Object.values(errors).forEach((element) => {
        err = element[0];
      });

      return err;
    },

    cancel() {
      console.log("Cancel Another Action in User  ++++++");
      this.educations = JSON.parse(  
        JSON.stringify(
          this.$store.getters['profile/getProfileAboutEducationAndWorks']
        )
      );
      console.log(this.educations);
      this.education = {
        access: "private",
        schoolName: null,
        graduated: false,
        durationFrom: null,
        durationTo: null,
        major: null
      };
    },

      updatesave: function(){
      console.log(this.editData);
       this.$store
        .dispatch("profile/updateUserEducation", {
          education: this.editData,
          method: 'PUT',
        })
        .then((response) => {
          console.log( response, "lewsi update new workPlace user end +++++" );
        })
        .catch((error) => {
          console.log( error, "lewis not update new workPlace user end error (2) +++++");
        })
        .finally(() => {
          this.$store.dispatch("profile/loadUserProfileAbout", null);
          this.educations = JSON.parse(
            JSON.stringify(
              this.$store.getters["profile/getProfileAboutEducationAndWorks"]
            )
          );
          console.log("Lewis Finally update new workplace user +++++", this.educationAndWorks, "+++++++++++");
        });
		},

    validate(){ 
      if(!this.educationInput.schoolName ){
        this.flashMessage.show({
            status: "error",
            message: "name of school is required",
            blockClass: "custom-block-class",
          }) 
          return 1;
      }else if(!this.educationInput.durationFrom){
        this.flashMessage.show({
            status: "error",
            message: "start date  is required",
            blockClass: "custom-block-class",
          })
           return 1;
      } else if(!this.educationInput.durationTo){
         this.flashMessage.show({
            status: "error",
            message: "end date is required",
            blockClass: "custom-block-class",
          })
           return 1;
      }
     
     else { return 0;}
    },

    save(bvModalEvt) {
       bvModalEvt.preventDefault();
        this.validate();
        if(this.validate() == 1){
          return
        }
      console.log("Save/Update/Delete Education User Profile About");
      let method = null;
      if (this.index !== null) {
        this.educations[this.index] = this.educationInput;
        method = "update";
      } else {
        method = "post";
      }
      this.$store
        .dispatch("profile/updateUserEducation", {
          education: this.educationInput,
          method: method
        })
        .then(response => {
          console.log(response);
          console.log("save/edit/delete education user end response (3)+++++");
          this.$refs["educationModal"].hide();

          this.flashMessage.show({
            status: "success",
            message: "Your school or university have been added",
            blockClass: "custom-block-class",
          })

        })
        .catch(err => {


         if (err.response.status == 422) {
               
                console.log(err.response.data.message);

                this.flashMessage.show({
                  status: "error",

                  message: this.flashErrors(err.response.data.errors),
                  blockClass: "custom-block-class",
                });
              } else{    



           this.flashMessage.show({
            status: "error",
            message: "can not add education",
            blockClass: "custom-block-class",
          })

           }


        })
        .finally(() => {
          this.$store.dispatch("profile/loadUserProfileAbout", null);
          console.log("finally save new website user ");
          this.educations = JSON.parse(
            JSON.stringify(
              this.$store.getters['profile/getProfileAboutEducationAndWorks']
            )
          );
          this.index = null;
          this.educationInput = {
            access: "private",
            schoolName: '',
            graduated: false,
            durationFrom: '',
            durationTo: '',
            major: ''
          };
          console.log(this.educations);
          this.$refs["educationModal"].hide();
        });
    },


    deleteEducation(education_id) {

       console.log("Lewis delete WorkPlace User Profile About", education_id);

      this.$store
        .dispatch("profile/updateUserEducation", {
          workPlace: education_id,
          method: 'DELETE',
        })
        .then((response) => {
          console.log( response, "Lewis delete new workPlace user end +++++" );
        })
        .catch((error) => {
          console.log( error, "not Lewis delete new workPlace user end error (2) +++++");
        })
        .finally(() => {
          this.$store.dispatch("profile/loadUserProfileAbout", null);
          this.educations = JSON.parse(
            JSON.stringify(
              this.$store.getters["profile/getProfileAboutEducationAndWorks"]
            )
          );
          console.log("Finally Lewis delete new workplace user +++++", this.educationAndWorks, "+++++++++++");
        });

    },

   
    edit(value) {
       console.log("this.editData Before Assign", value)
       this.editData = value;
       this.editData['startDate'] = value.start_year;
       this.editData['endDate'] = value.end_year;
       console.log("this.editData Before Update", this.editData)
       this.$refs["updateEducationModal"].show(); 
    }
  }
}
</script>

<style scoped>
.avatar {
  position: relative;
  top: -50px;
}
@media only screen and (max-width: 768px) {
  .avatar {
    position: relative;
    top: -100px;
  }
}
</style>