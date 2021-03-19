<template>
  <div>
    <b>Education</b>
    <hr />
   
    <b-list-group-item class="d-flex align-items-center mb-4 ">
      <div class="">
        <div class="row">
          <div class="media mt-4 mb-4">
            <img
              src="@/assets/img/about2.jpg"
              alt="John Doe"
              class="mr-2"
              style="width:60px;"
            />
            <div class="media-body">
              <h6 class="mb-0"><b>Unversity of south</b></h6>
              <b>7 Feb 2011-Present</b>
              <p class="mb-1">
                Job descrioption dummny textJob descrioption dummny textJob
                descrioption dummny text
              </p>
            </div>
          
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
@media only screen and (max-width: 600px) {
  .avatar {
    position: relative;
    top: -100px;
  }
}
</style>
