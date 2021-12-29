<template>
  <div>
    <b>Education</b>

    <hr />
    <b-link style="text-decoration: none" class="mt-4" v-b-modal.educationModal>
      <b-icon icon="plus" variant="primary"></b-icon>
      Add University Or High School</b-link
    >
    <b-list-group-item class="d-flex align-items-center mb-4 " style="border: none">
      <div class="datails">
        <div class="row" v-for="education in educations" :key="education.school_name">
          <div class="col">
            <span class="mr-auto">
              <b>School Name : {{ education.school_name }}</b>
            </span>
            <span>
              <br />
              <b> Major {{ education.major_subjects }} </b>
            </span>

            <p>
              Duration From {{ education.start_year }} To
              {{ education.end_year }}
            </p>
            <p>
              {{ education.description }}
            </p>
          </div>
          <div class="col-1">
            <b-dropdown id="dropdown-dropup" dropdown variant="primary-outline">
              <b-dropdown-item @click="edit(education)">Edit</b-dropdown-item>
              <b-dropdown-item @click="deleteEducation(education.id)">Delete</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </b-list-group-item>

    <b-modal
      ref="updateEducationModal"
      id="updateEducationModal"
      title="Update Education "
      @close="cancel"
      @ok="updatesave"
    >
      <div style="width: 100px">
        <b-form-select class="mb-2" size="sm" v-model="editData.access" :options="options"></b-form-select>
      </div>
      <b-form-input class="mt-2 mb-2" v-model="editData.school_name" placeholder="School"></b-form-input>

      <b-form-checkbox
        id="checkbox-1"
        v-model="editData.is_graduated"
        name="checkbox-1"
        :value="editData.is_graduated ? 1 : 0"
      >
        Graduated
      </b-form-checkbox>
      <label>Duration - From</label>
      <b-form-datepicker id="example-datepicker-1" v-model="editData.startDate" class="mb-2"></b-form-datepicker>

      <label>{{ $t("general.To") }}</label>
      <b-form-datepicker id="example-datepicker" v-model="editData.endDate" class="mb-2"></b-form-datepicker>
      <b-form-input class="mt-2" v-model="editData.major_subjects" placeholder="Major"></b-form-input>
    </b-modal>

    <b-modal ref="educationModal" id="educationModal" title="Add Education " @close="cancel" @ok="save">
      <div style="width: 100px">
        <b-form-select class="mb-2" size="sm" v-model="educationInput.access" :options="options"></b-form-select>
      </div>
      <b-form-input class="mt-2 mb-2" v-model="educationInput.schoolName" placeholder="School"></b-form-input>

      <b-form-checkbox
        id="checkbox-1"
        v-model="educationInput.graduated"
        name="checkbox-1"
        :value="educationInput.graduated ? 1 : 0"
      >
        Graduated
      </b-form-checkbox>
      <label>Duration - From</label>
      <b-form-datepicker
        id="example-datepicker-1"
        v-model="educationInput.durationFrom"
        class="mb-2"
      ></b-form-datepicker>

      <label>{{ $t("general.To") }}</label>
      <b-form-datepicker id="example-datepicker" v-model="educationInput.durationTo" class="mb-2"></b-form-datepicker>
      <b-form-input class="mt-2" v-model="educationInput.major" placeholder="Major"></b-form-input>
    </b-modal>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      editData: [],
      options: [
        { value: null, text: 'Select' },
        { value: 'private', text: 'Private' },
        { value: 'public', text: 'Public' },
      ],
      // educations: [],
      educationInput: {
        access: 'private',
        schoolName: null,
        graduated: false,
        durationFrom: null,
        durationTo: null,
        major: null,
      },
      index: null,
    };
  },
  created() {
    console.log('Load User Profile About Education');
    this.educations = JSON.parse(JSON.stringify(this.$store.getters['profile/getProfileAboutEducationAndWorks']));
  },
  computed: {
    educations() {
      console.log('this.$store.state.profile.profile_about.user_education');
      return this.$store.state.profile.profile_about.user_education;
    },
  },
  methods: {
    cancel() {
      console.log('Cancel Another Action in User  ++++++');
      this.educations = JSON.parse(JSON.stringify(this.$store.getters['profile/getProfileAboutEducationAndWorks']));
      console.log(this.educations);
      this.education = {
        access: 'private',
        schoolName: null,
        graduated: false,
        durationFrom: null,
        durationTo: null,
        major: null,
      };
    },

    updatesave: function() {
      console.log(this.editData);
      this.$store
        .dispatch('profile/updateUserEducation', {
          education: this.editData,
          method: 'PUT',
        })
        .then(response => {
          console.log(response, 'lewsi update new workPlace user end +++++');
        })
        .catch(error => {
          console.log(error, 'lewis not update new workPlace user end error (2) +++++');
        })
        .finally(() => {
          this.$store.dispatch('profile/loadUserProfileAbout', null);
          this.educations = JSON.parse(JSON.stringify(this.$store.getters['profile/getProfileAboutEducationAndWorks']));
          console.log('Lewis Finally update new workplace user +++++', this.educationAndWorks, '+++++++++++');
        });
    },

    save() {
      console.log('Save/Update/Delete Education User Profile About');
      let method = null;
      if (this.index !== null) {
        this.educations[this.index] = this.educationInput;
        method = 'update';
      } else {
        method = 'post';
      }
      this.$store
        .dispatch('profile/updateUserEducation', {
          education: this.educationInput,
          method: method,
        })
        .then(response => {
          console.log(response);
          console.log('save/edit/delete education user end response (3)+++++');
        })
        .catch(error => {
          console.log(error);
          console.log('not save/edit/delete Education user end error(2) +++++');
        })
        .finally(() => {
          this.$store.dispatch('profile/loadUserProfileAbout', null);
          console.log('finally save new website user ');
          this.educations = JSON.parse(JSON.stringify(this.$store.getters['profile/getProfileAboutEducationAndWorks']));
          this.index = null;
          this.educationInput = {
            access: 'private',
            schoolName: null,
            graduated: false,
            durationFrom: null,
            durationTo: null,
            major: null,
          };
          console.log(this.educations);
          this.$refs['educationModal'].hide();
        });
    },

    deleteEducation(education_id) {
      console.log('Lewis delete WorkPlace User Profile About', education_id);

      this.$store
        .dispatch('profile/updateUserEducation', {
          workPlace: education_id,
          method: 'DELETE',
        })
        .then(response => {
          console.log(response, 'Lewis delete new workPlace user end +++++');
        })
        .catch(error => {
          console.log(error, 'not Lewis delete new workPlace user end error (2) +++++');
        })
        .finally(() => {
          this.$store.dispatch('profile/loadUserProfileAbout', null);
          this.educations = JSON.parse(JSON.stringify(this.$store.getters['profile/getProfileAboutEducationAndWorks']));
          console.log('Finally Lewis delete new workplace user +++++', this.educationAndWorks, '+++++++++++');
        });
    },

    edit(value) {
      console.log('this.editData Before Assign', value);
      this.editData = value;
      this.editData['startDate'] = value.start_year;
      this.editData['endDate'] = value.end_year;
      console.log('this.editData Before Update', this.editData);
      this.$refs['updateEducationModal'].show();
    },
  },
};
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
