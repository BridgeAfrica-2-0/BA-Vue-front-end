<template>
  <div>
    <b>Education</b>
    <hr />
    <b-link style="text-decoration: none" class="mt-4" v-b-modal.modal-10>
      <b-icon icon="plus" variant="primary"></b-icon>
      Add University Or High School</b-link
    >
    <b-list-group-item
      class="d-flex align-items-center mb-4 "
      style="border: none"
    >
      <b-avatar class="mr-3 avatar"></b-avatar>
      <div class="datails">
        <div class="row">
          <div class="col">
            <span class="mr-auto"> <b>School</b> </span>
            <p>Duration</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              quibusdam harum maxime!
            </p>
          </div>
          <div class="col-1">
            <b-dropdown id="dropdown-dropup" dropdown variant="primary-outline">
              <b-dropdown-item href="#">Edit</b-dropdown-item>
              <b-dropdown-item href="#">Delete</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </b-list-group-item>

    <b-modal ref="add-contact" id="modal-10" title="Add Education ">
      <div style="width: 100px">
        <b-form-select
          class="mb-2"
          size="sm"
          v-model="selected"
          :options="options"
        ></b-form-select>
      </div>
      <b-form-input
        class="mt-2 mb-2"
        v-model="hometown"
        placeholder="School"
      ></b-form-input>
      <b-form-textarea
        id="textarea"
        v-model="description"
        placeholder="Description"
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <b-form-checkbox
        id="checkbox-1"
        v-model="status"
        name="checkbox-1"
        value="duration"
        unchecked-value="not_accepted"
      >
        Graduated
      </b-form-checkbox>
      <label>Duration - From</label>
      <b-form-datepicker
        id="example-datepicker"
        v-model="from"
        class="mb-2"
      ></b-form-datepicker>

      <label>To</label>
      <b-form-datepicker
        id="example-datepicker"
        v-model="to"
        class="mb-2"
      ></b-form-datepicker>
       <b-form-input
        class="mt-2"
        v-model="major"
        placeholder="Major"
      ></b-form-input>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "not_accepted",
      selected: null,
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" },
      ],
    };
  },
};
</script>

<style scoped>
.avatar {
  position: relative;
  top: -50px;
}
@media only screen and (max-width: 600px) {
  .avatar {
    position: relative;
    top: -100px;
  }
}
</style>
