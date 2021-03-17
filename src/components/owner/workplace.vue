<template>
  <div>
    <b>WorkPlace</b>
    <hr />
    <b-link class="mt-4 text-decoration-none" v-b-modal.modal-9>
      <b-icon icon="plus" variant="primary"></b-icon>
      Add Workplace</b-link
    >
    <b-list-group-item class="d-flex align-items-center mb-4 ">
      <div class="">
        <div class="row">
          <div class="media border-botmediatom mt-3 mb-4">
            <img
              src="@/assets/img/about3.jpg"
              alt="John Doe"
              class="mr-2 picture-size"
            />
            <div class="media-body">
              <h6 class="mb-0"><b>Coca Cla Pvt Ltd. Team Lead</b></h6>
              <b>Team Lead - 7 Feb 2011</b>
              <p class="mb-1">
                Job descrioption dummny textJob descrioption dummny textJob
                descrioption dummny text
              </p>
            </div>
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown
                  id="dropdown-dropup"
                  dropdown
                  variant="primary-outline"
                >
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>

          <div class="media mb-4">
            <img
              src="@/assets/img/about1.jpg"
              alt="John Doe"
              class="mr-2 picture-size"
            />
            <div class="media-body">
              <h6 class="mb-0"><b>Ericson Pvt Ltd. Team Lead</b></h6>
              <b>Team Lead - 7 Feb 2011</b>
              <p class="mb-1">
                Job descrioption dummny textJob descrioption dummny textJob
                descrioption dummny text
              </p>
            </div>
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown
                  id="dropdown-dropup"
                  dropdown
                  variant="primary-outline"
                >
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </b-list-group-item>

    <b-modal ref="add-contact" id="modal-9" title="Add Workplace ">
      <div class="div-design">
        <b-form-select
          class="mb-2"
          size="sm"
          v-model="selected"
          :options="options"
        ></b-form-select>
      </div>
      <b-form-input
        class="mt-2"
        v-model="hometown"
        placeholder="Company"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="hometown"
        placeholder="Position"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="hometown"
        placeholder="City"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="hometown"
        placeholder="Responsibilities"
      ></b-form-input>

      <b-form-checkbox
        id="checkbox-1"
        v-model="status"
        name="checkbox-1"
        value="duration"
        unchecked-value="not_accepted"
      >
        Currently Working
      </b-form-checkbox>
      <label>Duration</label>

      <b-form-datepicker
        id="example-datepicker"
        v-model="duration"
        class="mb-2"
      ></b-form-datepicker>
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
        { value: "public", text: "Public" }
      ]
    };
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
</style>
