<template>
  <div>
    <b-card title="" header-tag="header" footer-tag="footer">

       <div  style="float:right" class="edit" @click="editContact">    
             <b-icon icon="pencil-fill" variant="primary"></b-icon>
            </div>
      <h6 class="mb-2"><b>Intro</b></h6>

      <b-card-text>
        <p>
          <b-icon icon="briefcase-fill" class="primary"></b-icon> Agriculture
        </p>
        <p><b-icon icon="search" class="primary"></b-icon> Chicken Seller</p>
        <p>
          <b-icon icon="geo-alt-fill" class="primary"></b-icon> Mokolo, Yaounde,
          Cameroon
        </p>
        <p><b-icon icon="link" class="primary"></b-icon> www.business.com</p>
        <p>
          <b-icon icon="people-fill" class="primary"></b-icon> 1.1M Community
        </p>
        <p>
          <b-icon icon="telephone-fill" class="primary"></b-icon>
          +1(542) 565- 536
        </p>
        <p>
          <b-icon icon="envelope-fill" class="primary"></b-icon>
          info@business.com
        </p>
        <p>
          <b-icon icon="clock" class="primary"></b-icon>
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





            <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 250px;'
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
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
                        <select id="category" class="form-control ">
                          <option value="" selected="" disabled=""
                            >Select Category</option
                          >
                          <option>Category1</option>
                          <option>Category2</option>
                        </select>
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
          label="Worked At"
          label-for="input-1"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            v-model="workedAt"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Studied At"
          label-for="input-2"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            v-model="lastEducation"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Home Town"
          label-for="input-2"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            v-model="homeTown"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Current City"
          label-for="input-2"
          label-size="sm"
        >
          <b-form-input
            id="input-1"
            class="mt-1"
            v-model="cityName"
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


 .primary{
            
           margin-right: 8px;
    }



</style>> 
    
   
