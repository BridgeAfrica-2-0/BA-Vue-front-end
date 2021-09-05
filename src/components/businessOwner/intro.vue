<template>
  <div>
    <b-card title="" header-tag="header" footer-tag="footer">
      <div style="float:right" class="edit" @click="editContact">
        <b-icon icon="pencil-fill" variant="primary"></b-icon>
      </div>
      <h6 class="mb-2"><b>Intro</b></h6>

      <b-card-text>
        <p>
          <b-icon icon="briefcase-fill" class="primary icon-size"></b-icon>
          Agriculture
        </p>
        <p>
          <b-icon icon="search" class="primary icon-size"></b-icon> Chicken
          Seller
        </p>
        <p>
          <b-icon icon="geo-alt-fill" class="primary icon-size"></b-icon>
          Mokolo, Yaounde, Cameroon
        </p>
        <p>
          <b-icon icon="link" class="primary icon-size"></b-icon>
          www.business.com
        </p>
        <p>
          <b-icon icon="people-fill" class="primary icon-size"></b-icon> 1.1M
          Community
        </p>
        <p>
          <b-icon icon="telephone-fill" class="primary icon-size"></b-icon>
          +1(542) 565- 536
        </p>
        <p>
          <b-icon icon="envelope-fill" class="primary icon-size"></b-icon>
          info@business.com
        </p>
        <p>
          <b-icon icon="clock" class="primary icon-size"></b-icon>
          <b-link> Open now</b-link>
          <br />
          <b-dropdown size="sm" variant="transperent">
            <template #button-content>
              10:00AM - 7:00PM
            </template>
            <b-dropdown-item> 10:00AM - 7:00PM</b-dropdown-item>
          </b-dropdown>
        </p>
      </b-card-text>

      <GmapMap :center="center" :zoom="12" style="width:100%;  height: 250px;">
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center = m.position"
        />
      </GmapMap>
    </b-card>

    <b-modal
      id="bv-modal-example2"
      hide-footer
      title="Edit Address"
      v-model="edit2"
    >
      <b-form>
        <div class="form-group">
          <label for="username">Busness Name:</label><br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Busness Name"
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label for="alias">Category:</label><br />

          <b-form-select
            v-model="category"
            :options="categories"
            class="mb-3"
            value-field="item"
            text-field="name"
          ></b-form-select>
        </div>

        <div class="form-group">
          <label for="username">Keywords</label><br />
          <div class="col-md-12 pl-0 pr-0">
            No Choices

            <input
              type="text"
              name="alias"
              id="alias"
              placeholder="Enter your Keywords"
              class="form-control"
            />
          </div>
        </div>
        <b-form-group
          id="input-group-1"
          label="Country"
          label-for="input-1"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="City"
          label-for="input-2"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Neigbourhood"
          label-for="input-2"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Phone Contact"
          label-for="input-2"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            v-model="telephone"
            type="tel"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Business Email"
          label-for="input-2"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            v-model="email"
            type="email"
            required
          ></b-form-input>
        </b-form-group>
        <b-button
          class="mt-3 btn-block"
          variant="primary"
          @click="validate('bv-modal-example2')"
        >
          Modify
        </b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
      markers: [],
      places: [],

      category: "",
      categories: [
        { item: "Professional_and_home_service", name: "Professionals" },
        { item: "Agriculture ", name: "Agriculture " },
        { item: "Restaurant ", name: " Restaurant " },
        { item: "Electronics ", name: "Electronics " },
        { item: "Handicrafts", name: "Handicrafts" },
        { item: "clothing", name: "clothing" },
        { item: "Mechanics", name: "Mechanics" },
        { item: "Health_unit ", name: "Health unit " },
        { item: "Bars", name: "Bars" },
        { item: "Hair_and_beauty ", name: "Hair and beauty " },
        { item: "Real_estate ", name: "Real_estate " },
        { item: "Travelling ", name: "Travelling " },
        { item: "Hotels", name: "Hotels" },
        { item: "station", name: " station  " },
        { item: "Mayor_concils", name: "Mayor_concils" },
        { item: "Taxis service", name: "Taxis service" }
      ],

      edit1: false,
      edit2: false,
      leftTitle: "About Mapoure Agrobusiness",
      textToo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
        "              Asperiores temporibus, rerum iste id obcaecati quae odit accusamus\n" +
        "              reprehenderit, ipsa nam laudantium pariatur. Harum, soluta. Nam\n" +
        "              accusantium hic numquam architecto debitis. Lorem ipsum dolor sit\n" +
        "              amet consectetur adipisicing elit. Asperiores temporibus, rerum\n" +
        "              iste id obcaecati quae odit accusamus reprehenderit, ipsa nam\n" +
        "              laudantium pariatur. Harum, soluta. Nam accusantium hic numquam\n" +
        "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
        "              quae odit accusamus reprehenderit, ipsa nam laudantium pariatur.\n" +
        "              Harum, soluta. Nam accusantium hic numquam architecto debitis.",
      workedAt: "Current or Last Organization",
      lastEducation: "Last Education",
      homeTown: "Dummy",
      cityName: "Dummy",
      followed: "525",
      telephone: "+1 (234) 567-8974",
      email: "info@businessname.com"
    };
  },
  methods: {
    /**
     * Used to edit biography
     * @return void
     */
    editBio() {
      this.edit1 = !this.edit1;
    },
    /**
     * Used to edit contact info
     * @return void
     */
    editContact() {
      this.edit2 = !this.edit2;
    },

    /**
     *
     * @param idForm
     */
    validate(idForm) {
      this.$bvModal.hide(idForm);
    }
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .primary {
    margin-right: 6px;
    font-size: 12px !important;
  }

  .card-text {
    font-size: 14px !important;
  }
}

@media (min-width: 768px) {
  .primary {
    margin-right: 8px;
    font-size: 14px !important;
  }

  .card-text {
    font-size: 14px !important;
  }
}
</style>

<style>
.icon-size {
  width: 24px;
  height: 24px;
}
</style>
