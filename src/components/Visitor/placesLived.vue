<template>
  <div>
    <b>Places you lived</b>
    <hr />
    <p><b>Cameroon, South Africa</b></p>
    <p>
      Current City
    </p>
    
    <b-modal id="modal-6" title="Add other places">
      <div>
        <div class="row">
          <div class="col">
            <b-form-input v-model="city" placeholder="City"></b-form-input>
            <b-form-input
              class="mt-2"
              v-model="hometown"
              placeholder="Hometown"
            ></b-form-input>
          </div>
          <div class="col-4">
            <b-form-select
              class="mb-2"
              size="sm"
              v-model="selected"
              :options="options"
            ></b-form-select>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      city: "",
      hometown: "",
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" }
      ]
    };
  }
};
</script>

<style></style>
