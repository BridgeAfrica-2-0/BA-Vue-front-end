<template>
  <div>
    <b-card>
      <b-row>
        <b-col>
          <b-card class="mb-2">
            <h4>About Mapoure Agrobusiness</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores temporibus, rerum iste id obcaecati quae odit accusamus
              reprehenderit, ipsa nam laudantium pariatur. Harum, soluta. Nam
              accusantium hic numquam architecto debitis. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Asperiores temporibus, rerum
              iste id obcaecati quae odit accusamus reprehenderit, ipsa nam
              laudantium pariatur. Harum, soluta. Nam accusantium hic numquam
              architecto debitis. Asperiores temporibus, rerum iste id obcaecati
              quae odit accusamus reprehenderit, ipsa nam laudantium pariatur.
              Harum, soluta. Nam accusantium hic numquam architecto debitis.
            </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <b-card-text>
              






              <p>
          <b-icon icon="briefcase-fill" variant="primary"></b-icon>  category :
          Business category
        </p>
       
        

        <p>
          <b-icon icon="geo-alt-fill" variant="primary"></b-icon> Current City
          Name:Dummy
        </p>
        
        <p>
          <b-icon icon="people-fill" variant="primary"></b-icon> Followed by:
          525
        </p>
        <p>
        <b-icon icon="geo-alt-fill" variant="primary"></b-icon> 
          Word1, Word2, Word3
        </p>



              <p>
                <b-icon icon="phone-fill" variant="primary"></b-icon> +1 (234)
                567-8974
              </p>
              <p>
                <b-icon icon="envelope-fill" variant="primary"></b-icon>
                info@businessname.com
              </p>
              <p>
                <b-icon icon="clock" variant="primary"></b-icon>
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
    </b-card>

    <b-modal hide-footer title="Edit About" v-model="edit1">
      <b-form>
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <b-button class="mt-2" variant="primary"> Edit</b-button>
      </b-form>
    </b-modal>
    <b-modal hide-footer title="Edt Address" v-model="edit2">
      <b-form>
        <b-form-input class="mt-2" v-model="text" placeholder="Worked at"></b-form-input>
        <b-form-input class="mt-2" v-model="text" placeholder="Studied at"></b-form-input>
        <b-form-input class="mt-2" v-model="text" placeholder="Home Town"></b-form-input>
        <b-form-input class="mt-2" v-model="text" placeholder="Current City"></b-form-input>
        <b-form-input class="mt-2" v-model="text" placeholder="Contact"></b-form-input>
        <b-form-input class="mt-2" v-model="text" placeholder="Email"></b-form-input>
        <b-button class="mt-2" variant="primary"> Edit</b-button>
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
    };
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

h4, p{
  text-align: left;
}
</style>
