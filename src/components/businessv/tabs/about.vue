<template>
  <div>
    <b-card>
      <div>
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
            <h4 class="mb-4 text-center">
               <b-icon icon="person-fill" class="primary mr-2"></b-icon>
              <b>{{ leftTitle }}</b>
            </h4>
            <p class="txt">
              {{ textToo }}
            </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
       
            <b-card-text>
              <p>
                <b-icon icon="briefcase-fill" class="primary"></b-icon> Work
                at: {{ workedAt }}
              </p>
              <p>
                <b-icon icon="book-fill" class="primary"></b-icon> Studied at:
                {{ lastEducation }}
              </p>
              <p>
                <b-icon icon="house-fill" class="primary"></b-icon> Home Town
                Name: {{ homeTown }}
              </p>
              <p>
                <b-icon icon="geo-alt-fill" class="primary"></b-icon> Current
                City Name: {{ cityName }}
              </p>
              <p>
                <b-icon icon="people-fill" class="primary"></b-icon> Followed
                by: {{ followed }}
              </p>
              <p>
                <b-icon icon="phone-fill" class="primary"></b-icon>
                {{ telephone }}
              </p>
              <p>
                <b-icon icon="envelope-fill" class="primary"></b-icon>
                {{ email }}
              </p>
              <p>
                <b-icon icon="clock" class="primary"></b-icon>
                <span class="ml-2 btn-item">Open Now</span>
              </p>
              <p>
                <b-dropdown
                  size="sm"
                  variant="outline"
                  text="6:00AM - 7:00PM"
                  class="ml-2"
                >
                  <b-dropdown-item-button
                    >6:00AM - 7:00PM</b-dropdown-item-button
                  >
                  <b-dropdown-item-button
                    >6:00AM - 7:00PM</b-dropdown-item-button
                  >
                </b-dropdown>
              </p>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-card>

  
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
        "              quae odit accusamus reprehenderit, ipsa nam laudantium pariatur.\n" +
        "              Harum, soluta. Nam accusantium hic numquam architecto debitis.",
      workedAt: "Current or Last Organization",
      lastEducation: "Last Education",
      homeTown: "Dummy",
      cityName: "Dummy",
      followed: "525",
      telephone: "+1 (234) 567-8974",
      email: "info@businessname.com",
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
    },
  },
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

.mobile {
  display: none;
}
@media only screen and (max-width: 768px) {
.txt{
  text-align: left;
}
}
</style>
