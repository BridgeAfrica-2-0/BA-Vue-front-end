<template>
  <div>
    <b>Basic Infomation</b> {{ info }}
    <hr />
    <div class="row">
      <div class="col">
        Date Of Birth:
      </div>
      <div class="col">
        {{ dateOfBirth }}
      </div>
      <b-button class="edit-btn mb-2" variant="outline-primary" v-b-modal.modal-1>Edit </b-button>
      <b-modal hide-footer id="modal-1" title="Date Of Birth">
        <div>
          <label>Choose a date</label>
          <b-form @submit="add">
            <div class="row">
              <div class="col">
                <b-form-datepicker
                  id="example-datepicker"
                  v-model="dateOfBirth"
                  class="mb-2"
                  required
                ></b-form-datepicker>
              </div>
              <div class="col-4">
                <b-form-select class="mb-2" size="sm" v-model="selected" :options="options" required></b-form-select>
              </div>
            </div>
            <b-button class="ml-2 mt-2 button-design" type="submit" variant="primary">Add</b-button>
          </b-form>
        </div>
      </b-modal>
    </div>
    <div class="row">
      <div class="col">
        Gender:
      </div>
      <div class="col">
        {{ gender }}
      </div>
      <b-button class="edit-btn mb-2" variant="outline-primary" v-b-modal.modal-2>Edit </b-button>
      <b-modal hide-footer id="modal-2" title="Gender">
        <b-form>
          <div>
            <div class="row">
              <div class="col">
                <b-form-select class="mb-2" size="sm" v-model="gender" :options="genders" required></b-form-select>
              </div>
              <div class="col-4">
                <b-form-select class="mb-2" size="sm" v-model="selected" :options="options" required></b-form-select>
              </div>
            </div>
          </div>
          <b-button class="ml-2 mt-2 button-design" type="submit" variant="primary">Add</b-button>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateOfBirth: '',
      gender: null,
      selected: null,

      options: [
        { value: null, text: 'Select' },
        { value: 'private', text: 'Private' },
        { value: 'public', text: 'Public' },
      ],
      genders: [
        { value: null, text: 'Select' },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
      ],
    };
  },
  methods: {},
  computed: {
    info() {
      return this.$store.state.profile.profile_about;
    },
  },
};
</script>

<style scoped>
.details {
  display: flex;
}

.button-design {
  position: relative;
  left: 400px;
}

@media only screen and (max-width: 600px) {
}
</style>
