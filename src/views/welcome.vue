<template>
  <div>
   







    <b-modal id="modal-3" ref="modal-3"  size="lg" title=" Get Started" hide-footer>
      <div>

     

       <h4 class="t-center">    Welcome On Bridge Africa   </h4>   <br />  <br />

       <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing  </p>
     

      <b-form-group label="Use BridgeAfirca.com as a">
      <b-form-radio-group
        id="radio-group-1"
        v-model="useas"
        :options="options"
      
        name="radio-options"
      ></b-form-radio-group>
    </b-form-group>



    <b-button variant="outline-primary" class=""  @click="choseModal" >    Continue  </b-button>


        
      </div>


    </b-modal>





    




    <b-modal id="modal-1" ref="modal-1"  size="lg" title=" Get Started" hide-footer>
      <div>

        <form-wizard @on-complete="onComplete" 
        color="#e75c18"
         >
          <tab-content title=" Complete Profile ">
            <div class="form-card">
              <div class="row">
                <div class="col-md-6">
                  <div class="image-upload-wrap"  @click="chooseProfile2()">

                      <input id="profile2" type="file" hidden>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#createalbumModal"
                    >
                      <div class="drag-text">
                        <i class="fa fa-plus" ></i>
                        <h3>Add Profile  Photo</h3>
                      </div>
                    </a>
                    <div></div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="username"> DOB :</label><br />
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      placeholder="Busness Name"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group">
                    <label for="alias">Gender:</label><br />
                    <select id="category" class="form-control">
                      <option value="" selected="" disabled="">
                        Select Gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>other</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="country"> Country :</label><br />

                      <country-select v-model="country" :country="country" topCountry="US"  class="form-control" />
  
                    



                  </div>

                  <div class="form-group">
                    <label for="city"> City :</label><br />
                    <input
                      type="text"
                      name="alias"
                      id="city"
                      placeholder="city"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group">
                    <label for="Neighbor"> Neighbor :</label><br />
                    <input
                      type="text"
                      name="alias"
                      id="Neighbor"
                      placeholder="Neighbor"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-content>

          <tab-content title="Follow Businesses">
           
              <div class="div-h">
                <Business />
              </div>
          
          </tab-content>

          <tab-content title="Follow People">
            
              <div class="div-h">
                <People />
              </div>
           
          </tab-content>

          <tab-content title="Tutorial">
           
              <div class="div-h">
                <Tutorial />
              </div>
            
          </tab-content>
        </form-wizard>
      </div>
    </b-modal>
























        <b-modal id="modal-2" ref="modal-2"  size="lg" title=" Get Started" hide-footer>
      <div>
        <form-wizard @on-complete="onComplete">
          <tab-content title=" Complete Profile ">
            
            <div class="form-card">
              <div class="row">
                <div class="col-md-6">
                  <div class="image-upload-wrap"  @click="chooseprofile1()">

                      <input id="profile1" type="file" hidden>

                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#createalbumModal"
                    >
                      <div class="drag-text" >
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        <h3>Add Profile Photo</h3>
                      </div>
                    </a>
                    <div></div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="username"> DOB :</label><br />
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      placeholder="Busness Name"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group">
                    <label for="alias">Gender:</label><br />
                    <select id="category" class="form-control">
                      <option value="" selected="" disabled="">
                        Select Gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>other</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="country"> Country :</label><br />

                      <country-select v-model="country" :country="country" topCountry="US"  class="form-control" />
  
                    



                  </div>

                  <div class="form-group">
                    <label for="city"> City :</label><br />
                    <input
                      type="text"
                      name="alias"
                      id="city"
                      placeholder="city"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group">
                    <label for="Neighbor"> Neighbor :</label><br />
                    <input
                      type="text"
                      name="alias"
                      id="Neighbor"
                      placeholder="Neighbor"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-content>














       <tab-content title="Business Indentity">      
         
         
         
         
         
         
         
                <div class="form-card">
                  <div class="row">
                    <div class="col-md-6">
                   

                        <div class="image-upload-wrap"  @click="chooselogo()">

                      <input id="logo" type="file" hidden>

                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#createalbumModal"
                        >
                          <div class="drag-text">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <h3>Add Logo</h3>
                          </div>
                        </a>
                        <div></div>
                      </div>
                    </div>
                    <div class="col-md-6">
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
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
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
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="alias">Language:</label><br />
                        <select id="category" class="form-control ">
                          <option value="" selected="" disabled=""
                            >Select Language</option
                          >
                          <option>English</option>
                          <option>Hindi</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username">TomeZone:</label><br />
                        <select id="category" class="form-control ">
                          <option value="" selected="" disabled=""
                            >Select Timezone</option
                          >
                          <option>(UTC - 09:00) Alaska</option>
                          <option>(UTC - 09:00) Alaska1</option>
                          <option>(UTC - 09:00) Alaska2</option>
                          <option>(UTC - 09:00) Alaska3</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="username">About</label><br />
                        <textarea
                          type="textarea"
                          name="description"
                          id="description"
                          placeholder="Brief description about your Busness"
                          class="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
               
             


         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
                </tab-content>


          <tab-content title="Follow Businesses">
           
              <div class="div-h">
                <Business />
              </div>
          
          </tab-content>

          <tab-content title="Follow People">
            
              <div class="div-h">
                <People />
              </div>
           
          </tab-content>

          <tab-content title="Tutorial">
           
              <div class="div-h">
                <Tutorial />
              </div>
            
          </tab-content>
        </form-wizard>
      </div>
    </b-modal>
  </div>
</template>

<script>


import People from "@/components/dasboard/suggestedpeople";
import Business from "@/components/dasboard/communitybusiness";

import Tutorial from "@/components/dasboard/tutorial";

export default {


   data() {
      return {
        useas: '', 
         country: '',
    
        options: [
          { text: ' Person', value: 'person' },
          { text: ' Business ', value: 'business' }
          
          
          
        ]
      }
    },




  methods: {
    onComplete: function () {
     

     this.$router.push("/dashboard");
    },


    chooseProfile1: function() {
     
        document.getElementById("profile1").click()
    },


chooseProfile2: function() {
     
        document.getElementById("profile2").click()
    },



chooselogo: function() {
   
        document.getElementById("logo").click()
    },




    showModal() {
        this.$refs['modal-3'].show()
      },
      hideModal() {
        this.$refs['modal-3'].hide()
      },

      choseModal(){
        
        
       this.hideModal();
       console.log(this.useas);

        if(this.useas == 'person'){
             
             console.log('hello');
           this.$refs['modal-1'].show();
        }else{
         this.$refs['modal-2'].show() ;
       }

      }

  },

  mounted() {
      this.showModal();
    },

  

   components: {
    
    People,
    Business,
    Tutorial
    
  },



  
  
  
};
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
</script>




<style>


.wizard-icon-container{

  background-color: black;

}

@media only screen and (max-width: 768px) {


.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle {
    position: relative;
   

    top: 20px;
    height: 1px;

}



.vue-form-wizard .wizard-icon-circle .wizard-icon-container {
   
    border-radius: 60%;
}





.stepTitle{
  font-size: 14px;
    line-height: 1;
    padding-top: 10px;
    padding-bottom: 10px;
}


.vue-form-wizard.md .wizard-icon-circle {
    width: 40px;
    height: 40px;
    font-size: 24px;
}

.vue-form-wizard.md .wizard-icon-circle {
  width: 30px;
  height: 30px;
  font-size: 18px;
}

.vue-form-wizard .wizard-card-footer {
  padding: 0 0px;
}


.vue-form-wizard .wizard-tab-content {
    min-height: 100px;
     padding: 0px 0px 0px; 
}

}


.wizard-header {
  display: none;
}

</style>