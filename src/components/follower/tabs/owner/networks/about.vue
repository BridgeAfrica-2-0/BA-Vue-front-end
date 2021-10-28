<template>
  <div>
    <b-icon icon="person-fill" class="icon-size" variant="primary"></b-icon>
    <b>
      {{ $t("follower.About") }}
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
                {{ $t("follower.Agriculture") }}
              </p>
              <p>
                <b-icon icon="search" class="primary icon-size"></b-icon>
                {{ $t("follower.Chicken_Seller") }}
              </p>
              <p>
                <b-icon icon="geo-alt-fill" class="primary icon-size"></b-icon>
                {{ $t("follower.Mokolo") }}, {{ $t("follower.Yaounde") }}, {{ $t("follower.Cameroon") }}
              </p>
              <p>
                <b-icon icon="link" class="primary icon-size"></b-icon>
                {{ $t("follower.wwwbusinesscom") }}
              </p>
              <p>
                <b-icon icon="people-fill" class="primary icon-size"></b-icon>
                {{ $t("follower.11M_Community") }}
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
                {{ $t("follower.infobusinesscom") }}
              </p>
              <p>
                <b-icon icon="clock" class="primary icon-size"></b-icon>
                <b-link> {{ $t("follower.Open_now") }}</b-link>
                <br />
                <b-dropdown size="sm" variant="transperent">
                  <template #button-content>
                    {{ $t("follower.10_00AM_7_00PM") }}
                  </template>
                  <b-dropdown-item> {{ $t("follower.10_00AM_7_00PM") }}</b-dropdown-item>
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
      :title="$t('follower.Business_Name')"
      v-model="edit1"
      size="md"
    >
      <b-form> </b-form>
    </b-modal>
    <b-modal
      id="bv-modal-example2"
      hide-footer
      :title="$t('follower.Edit_Address')"
      v-model="edit2"
    >
      <b-form>
        <div class="form-group">
          <label for="username">{{ $t("follower.Busness_Name") }}:</label><br />
          <input
            type="text"
            name="username"
            id="username"
            :placeholder="$t('follower.Busness_Name')"
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label for="alias">{{ $t("follower.Category") }}:</label><br />
          <select id="category" class="form-control ">
            <option value="" selected="" disabled="">{{ $t("follower.Select_Category") }}</option>
            <option>{{ $t("follower.Category") }}1</option>
            <option>{{ $t("follower.Category") }}2</option>
          </select>
        </div>

        <div class="form-group">
          <label for="username">{{ $t("follower.Keywords") }}</label><br />
          <div class="col-md-12 pl-0 pr-0">
            {{ $t("follower.No_Choices") }}

            <input
              type="text"
              name="alias"
              id="alias"
              :placeholder="$t('follower.Enter_your_Keywords')"
              class="form-control"
            />
          </div>
        </div>
        <b-form-group
          id="input-group-1"
          :label="$t('follower.Country')"
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
          :label="$t('follower.City')"
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
          :label="$t('follower.Neigbourhood')"
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
          :label="$t('follower.Phone_Contact')"
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
          :label="$t('follower.Business_Email')"
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
          {{ $t("follower.Modify") }}
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
