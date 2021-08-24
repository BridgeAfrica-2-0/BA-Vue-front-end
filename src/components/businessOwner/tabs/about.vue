<template>
  <div>
    <b-icon icon="person-fill" class="icon-size" variant="primary"></b-icon>
    <b>
      About
    </b>

    <hr />

    <b-card>
      <div class="mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.732999183005!2d-74.006227!3d40.710128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sbg!4v1612237569797!5m2!1sen!2sbg"
          height="450"
          frameborder="0"
          class="map mt-1"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>

      <b-row>
        <b-col>
          <b-card class="mb-2">
            <div class="edit" @click="editBio">
              <b-icon icon="pencil-fill" variant="primary"></b-icon>
            </div>
            <h4 class="mb-4 text-center username">{{ leftTitle }}</h4>
            <p class="text-justify text">
              {{ textToo }}
            </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <b-card-text>
              <div class="edit" @click="editContact">
                <b-icon icon="pencil-fill" variant="primary"></b-icon>
              </div>

              <p>
                <b-icon
                  icon="briefcase-fill"
                  class="primary icon-size"
                ></b-icon>
                Agriculture
              </p>
              <p>
                <b-icon icon="search" class="primary icon-size"></b-icon>
                Chicken Seller
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
                <b-icon icon="people-fill" class="primary icon-size"></b-icon>
                1.1M Community
              </p>
              <p>
                <b-icon
                  icon="telephone-fill"
                  class="primary icon-size"
                ></b-icon>
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
          </b-card>
        </b-col>
      </b-row>
    </b-card>

    <b-modal
      id="bv-modal-example1"
      hide-footer
      title="Business Name"
      v-model="edit1"
      size="md"
    >
      <b-form> </b-form>
    </b-modal>
    <b-modal
      id="bv-modal-example2"
      hide-footer
      title="Edit Address"
      v-model="edit2"
      size="lg"
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
          label="Phone 2"
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

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="12"
              label="Business Hours"
              label-size="md"
              label-class=" pt-0 "
              class="mb-0"
            >
              <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
                <b-form-radio-group
                  class="a-text text"
                  :options="['Always Open', 'Open for selected hours']"
                  :aria-describedby="ariaDescribedby"
                ></b-form-radio-group>
                <br />
                <b-container>
                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text text"
                        name=""
                        value=""
                      >
                        Monday</b-form-checkbox
                      ></b-col
                    >

                    <b-col><b-form-input name=""></b-form-input></b-col>-
                    -<b-col><b-form-input name=""></b-form-input></b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text text"
                        name=""
                        value=""
                      >
                        Tuesday</b-form-checkbox
                      ></b-col
                    >
                    <b-col><b-form-input name=""></b-form-input></b-col>- -
                    <b-col><b-form-input name=""></b-form-input></b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text text"
                        name=""
                        value=""
                      >
                        Wednesday</b-form-checkbox
                      ></b-col
                    >
                    <b-col><b-form-input name=""></b-form-input></b-col>- -
                    <b-col><b-form-input name=""></b-form-input></b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text a-text text"
                        name=""
                        value=""
                      >
                        Thursday</b-form-checkbox
                      ></b-col
                    >
                    <b-col><b-form-input name=""></b-form-input></b-col>- -
                    <b-col><b-form-input name=""></b-form-input></b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text text"
                        name=""
                        value=""
                      >
                        Friday
                      </b-form-checkbox></b-col
                    >
                    <b-col><b-form-input name=""></b-form-input></b-col>- -
                    <b-col><b-form-input name=""></b-form-input></b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text text"
                        name=""
                        value=""
                      >
                        Saterday
                      </b-form-checkbox></b-col
                    >
                    <b-col><b-form-input name=""></b-form-input></b-col>- -
                    <b-col><b-form-input name=""></b-form-input></b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        name=""
                        class="a-text text"
                        value=""
                      >
                        Sunday</b-form-checkbox
                      ></b-col
                    >
                    <b-col><b-form-input name=""></b-form-input></b-col>- -
                    <b-col><b-form-input name=""></b-form-input></b-col>
                  </b-row>
                  <br />
                </b-container>
              </b-form-group>
            </b-form-group>
          </b-container>
        </div>

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
      edit1: false,
      edit2: false,

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
        "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
        "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
        "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
        "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
        "              quae odit accusamus reprehenderit, ipsa nam laudantium pariatur.\n" +
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
.map {
  border: 0;
  width: 100%;
}

.btn-item {
  color: green;
}

.edit {
  position: relative;
  left: 98%;
  cursor: pointer;
}

h4,
p {
  text-align: left;
}

@media (min-width: 762px) {
  .primary {
    margin-right: 6px;
  }
}

@media (min-width: 762px) {
  .primary {
    margin-right: 8px;
  }
}

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
