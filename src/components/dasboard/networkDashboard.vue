<template>
  <div>
    <b-card>
      <h2 class="p-3 bg-light shadow-sm mb-4 my-auto">
        <fas-icon
          class="text-primary mr-2 pt-1"
          :icon="['fas', 'users']"
        />Networks
        <h6 class="float-right text-success font-weight-bolder">
          46 results Founds
        </h6>
      </h2>
      <div class=" row border shadow pt-3 pb-3 pl-0 mb-4">
        <div class="col-md-6 mb-3">
          <div class="row">
            <div class="d-flex col-md-12 colum">
              <img class="img-fluid picture" src="@/assets/img/photo2.jpg" />
              <div>
                <b>Network Name</b>
                <p class="mb-1 mt-3">Public</p>
                <p class="mb-1">87k Membres</p>
                <p class="mb-1">Bussiness Name</p>
              </div>
              <div class="d-flex my-auto">
                <span class="pull-right my-auto">
                  <b-button variant="outline-primary" size="sm"
                    ><b-icon-plus-circle></b-icon-plus-circle>
                    &nbsp;&nbsp;Join</b-button
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="row">
            <div class="d-flex col-md-12 colum">
              <img class="img-fluid picture" src="@/assets/img/photo2.jpg" />
              <div>
                <b>Network Name</b>
                <p class="mb-1 mt-3">Public</p>
                <p class="mb-1">87k Membres</p>
                <p class="mb-1">Bussiness Name</p>
              </div>
              <div class="d-flex my-auto">
                <span class="pull-right my-auto">
                  <b-button variant="outline-primary" size="sm"
                    ><b-icon-plus-circle></b-icon-plus-circle>
                    &nbsp;&nbsp;Join</b-button
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="row">
            <div class="d-flex col-md-12 colum">
              <img class="img-fluid picture" src="@/assets/img/photo2.jpg" />
              <div>
                <b>Network Name</b>
                <p class="mb-1 mt-3">Public</p>
                <p class="mb-1">87k Membres</p>
                <p class="mb-1">Bussiness Name</p>
              </div>
              <div class="d-flex my-auto">
                <span class="pull-right my-auto">
                  <b-button variant="outline-primary" size="sm"
                    ><b-icon-plus-circle></b-icon-plus-circle>
                    &nbsp;&nbsp;Join</b-button
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="row">
            <div class="d-flex col-md-12 colum">
              <img class="img-fluid picture" src="@/assets/img/photo2.jpg" />
              <div>
                <b>Network Name</b>
                <p class="mb-1 mt-3">Public</p>
                <p class="mb-1">87k Membres</p>
                <p class="mb-1">Bussiness Name</p>
              </div>
              <div class="d-flex my-auto">
                <span class="pull-right my-auto">
                  <b-button variant="outline-primary" size="sm"
                    ><b-icon-plus-circle></b-icon-plus-circle>
                    &nbsp;&nbsp;Join</b-button
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" row border shadow pt-4 pb-3 pl-0 mb-4 mt-3">
        <div class="col-md-6 mb-3">
          <div class="row">
            <div class="col-md-12 p-2">
              <h4 class="font-weight-bolder text-design">
                Use Bridge Africa as Yourself or as one of your businesses
              </h4>
              <b-form-select
                v-model="selected"
                :options="options"
              ></b-form-select>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3 pl-4">
          <div class="row">
            <div class="col-md-12 p-2 ml-2">
              <h4 class="bg-light shadow-sm my-auto mb-2">
                <b-icon-geo-alt class="text-primary"></b-icon-geo-alt> Get
                Directions
              </h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.732999183005!2d-74.006227!3d40.710128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sbg!4v1612237569797!5m2!1sen!2sbg"
                height="160"
                frameborder="0"
                class="map mt-1 w-75"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "networkDashboard",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Owner's Name" },
        { value: "a", text: "Business Name 1" },
        { value: "b", text: "Business Name 2" },
        { value: "c", text: "Business Name 3" }
      ]
    };
  }
};
</script>

<style scoped>
.picture {
  border-radius: 10px;
  width: 190px;
}

.colum {
  justify-content: space-around;
}

.text-design {
  line-height: 40px;
}
</style>
