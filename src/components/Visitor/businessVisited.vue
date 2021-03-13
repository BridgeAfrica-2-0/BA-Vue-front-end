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
                <p>Category Name here - 1.1 M Community</p>
              </div>
              <div class="col-1">
               
              </div>
            </div>
            <b-link style="text-decoration: none">Get Directions</b-link>
          </div>
        </b-list-group-item >
       
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
