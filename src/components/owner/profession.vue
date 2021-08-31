<template>
  <div>
    <b>Profession</b>
    <hr />
    <b-link class="mt-4 doc" v-b-modal.modal-11>
      <b-icon icon="plus" variant="primary"></b-icon>
      Add Profession</b-link
    >
    <b-list-group-item class="d-flex align-items-center mb-4 b-none">
      <div class="datails">
        <div class="row">
          <div class="col">
            <span class="mr-auto"> <b>Profession</b> </span>
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

    <b-modal ref="add-contact" id="modal-11" title="Add Profession">
      <div class="width">
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
        placeholder="Profession"
      ></b-form-input>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" }
      ]
    };
  }
};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
}

.width {
  width: 100px;
}

.b-none {
  border: none;
}

.doc {
  text-decoration: none;
}
</style>
