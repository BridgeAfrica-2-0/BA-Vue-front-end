<template>
  <div>
    <b>Business Visited</b>
    <hr />
    <div class="row">
      <div class="col">
        <b-list-group-item class="d-flex align-items-center mb-4 " style="border: none">
          <b-avatar class="mr-3"></b-avatar>
          <div class="datails">
            <div class="row">
              <div class="col">
                <span class="mr-auto"> <b>Business Name Here</b> </span>
                <p>Category Name here - 1.1 M Followers</p>
              </div>
              <div class="col-1">
                <b-dropdown
                  id="dropdown-dropup"
                  dropdown
                  variant="primary-outline"
                  style="position: relative; left:320px"
                >
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
            <b-link style="text-decoration: none">Get Directions</b-link>
          </div>
        </b-list-group-item >
        <b-link style="text-decoration: none" class="mt-4 " v-b-modal.modal-5>
          <b-icon icon="plus" variant="primary"></b-icon>Add Other
          Businesses</b-link
        >
        <b-modal class="modal w-25" hide-footer id="modal-5" title="Add other Business" >
         <b-form>
            <div>
            <div class="row">
              <div class="col">
                <b-form-input
                  v-model="business"
                  placeholder="Business"
                  required
                ></b-form-input>
              </div>
              <div class="col">
                <b-form-select
                  class="mb-2"
                  size="sm"
                  v-model="selected"
                  :options="options"
                  required
                ></b-form-select>
              </div>
            </div>
          </div>
          <b-button
          class="ml-2 mt-2"
          style="position:relative;"
          type="submit"
          variant="primary"
          >Add</b-button
        >
         </b-form>
        </b-modal>
      </div>
    </div>
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
        { value: "public", text: "Public" },
      ],
    };
  },
};
</script>

<style scoped>
.details {
  display: flex;
}
@media only screen and (max-width: 600px) {
}
</style>
