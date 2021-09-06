<template>
  <div class="welcome" style=" overflow-x: hidden;">
   
 <b-modal id="modal-3" ref="modal-3"  size="lg" title=" Get Started" hide-footer>
      <div>

     

       <h4 class="text-center username"> Hello <b>  {{username}}  </b> let's get started   </h4>   <br />  <br />

       <p class="text">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing  </p>
     

      <b-form-group label="Use BridgeAfirca.com as a"    label-class="text"  >
      <b-form-radio-group
        id="radio-group-1"
        v-model="useas"
        :options="options"
       label-class="username"
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
    
          <input id="profile2" type="file" @change="onFileChange" hidden >
        


          <tab-content title=" Complete Profile "   :before-change="updateUserProfile"  >
            <div class="form-card">              
              <div class="row">
                <div class="col-md-6">

                              <div id="preview">
    <img v-if="img_url" :src="img_url" />

    

  </div>
  <br>
  <div class="text-center">   
    <b-button  v-if="img_url" @click="chooseProfile2()" variant="primary" class="mt-3 text-center">  change Image  </b-button>
   </div>

                  <div class="image-upload-wrap"  v-if="!img_url"  @click="chooseProfile2()">

                     
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#createalbumModal"
                    >
                      <div class="drag-text">
                        <i class="fa fa-plus" > </i>
                        <h3 class="username">Add Profile  Photo</h3>
                      </div>
                    </a>
                    <div></div>
                  </div>


                  
        


                </div>
                <div class="col-md-6">
                  <div class="form-group"  label-class="username">
                    <label for="username" class="username"> DOB :</label><br />
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      placeholder="Busness Name"
                     
                      class="form-control text"
                    />
                  </div>

                  <div class="form-group">
                    <label for="alias" class="username">Gender:</label><br />
                    <select id="category" class="form-control text" label-class="text" >
                      <option value="" selected="" disabled="">
                        Select Gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>other</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="country" class="username">  Country :</label><br />

                      <country-select v-model="country" :country="country" topCountry="US"  class="form-control text" />
  
                    



                  </div>

                  <div class="form-group">
                    <label for="city" class="username"> City :</label><br />
                    <input
                      type="text"
                      name="alias"
                      id="City"
                      placeholder="city"
                      class="form-control text"
                    />
                  </div>

                  <div class="form-group">
                    <label for="Neighbor" class="username"> Neighbor :</label><br />
                    <input
                      type="text"
                      name="alias"
                      id="Neighbor"
                      placeholder="Neighbor"
                      class="form-control text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-content>

          <tab-content title="Follow Businesses"  >
           
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
                        <h3 class="username">Add Profile Photo</h3>
                      </div>
                    </a>
                    <div></div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="username" class="username"> DOB :</label><br />
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      placeholder="Busness Name"
                      class="form-control text"
                    />
                  </div>

                  <div class="form-group">
                    <label for="alias" class="username">Gender:</label><br />
                    <select id="category" class="form-control text">
                      <option value="" selected="" disabled="">
                        Select Gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>other</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="country" class="username"> Country :</label><br />

                      <country-select v-model="country" :country="country" topCountry="US"  class="form-control text" />
  
                    



                  </div>

                  <div class="form-group">
                    <label for="city" class="username"> City :</label><br />
                    <input
                      type="text"
                      name="alias"
                      id="city"
                      placeholder="city"
                      class="form-control text"
                    />
                  </div>

                  <div class="form-group ">
                    <label for="Neighbor" class="username"> Neighbor :</label><br />
                    <input
                      type="text"
                      name="alias"
                      id="Neighbor"
                      placeholder="Neighbor"
                      class="form-control text"
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
                            <h3 class="usernanme">Add Logo</h3>
                          </div>
                        </a>
                        <div></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username" class="username">Busness Name:</label><br />
                        <input
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Busness Name"
                          class="form-control text"
                        />
                      </div>


                      
                      <div class="form-group">
                        <label for="alias" class="username">Category:</label><br />
                        

                        
      <b-form-select
            v-model="category"
            :options="categories"
            class="mb-3"
            value-field="item"
            text-field="name"
          ></b-form-select>

                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="username" class="username">Keywords</label><br />
                        <div class="col-md-12 pl-0 pr-0">
                        <span class="text">  No Choices  </span>

                          <input
                          type="text"
                          name="alias"
                          id="alias"
                          placeholder="Enter  Keywords Alerts"
                          class="form-control text"
                        />

                        </div> 

                    
                      
                        
                   




                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="alias" class="username">Language:</label><br />
                        <select id="category" class="form-control text ">
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
                        <label for="username" class="username">TomeZone:</label><br />
                        <select id="category" class="form-control text">
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
                        <label for="username" class="username">About</label><br />
                        <textarea
                          type="textarea"
                          name="description"
                          id="description"
                          placeholder="Brief description about your Busness"
                          class="form-control text"
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
import Business from "@/components/dasboard/welcomebusinesses";

import Tutorial from "@/components/dasboard/tutorial";

import axios from "axios";

export default {


   data() {
      return {
        useas: '', 
         country: '',
         username:this.$store.state.auth.user.user.name,
         img_url: null,
         profile_pic:null,
    
        options: [
          { text: ' Person', value: 'person' },
          { text: ' Business ', value: 'business' }
          
          
          
        ],


        

       category:'',
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
           { item: "Taxis service", name: "Taxis service" },

      ],
      }
    },




  methods: {


    updateUserProfile: function(){



      let formData = new FormData();
      formData.append('file', this.file);
      

         this.axios.post('http://localhost:8000/api.php',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(data){
              console.log(data.data);
            })
            .catch(function(){
              console.log('FAILURE!!');
            });




        console.log('fuck you niffadge ');

         return true;

    }
    , 
    onComplete: function () {
     

     this.$router.push("/dashboard");
    },


    chooseProfile1: function() {
     
        document.getElementById("profile1").click()
    },


chooseProfile2: function() {
     
        document.getElementById("profile2").click()
    },




     onFileChange(e) {

       this.profile_pic= e.target.files[0]
      const file = e.target.files[0];
      this.img_url = URL.createObjectURL(file);

      console.log( this.img_url);
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


#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}


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




@media only screen and (min-width: 768px){

.text {
    font-size: 14px !important;
     font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;  
}


.username{
   font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;  
}


}




@media only screen and (min-width: 768px){

.text {
    font-size: 14px !important;
     font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;  
}

.username{
   font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;  
}

}




.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1px;
}

 

</style>

<style> 

 .modal-body {
    
    padding: 1px;

   
}


.vue-form-wizard .wizard-icon-circle .wizard-icon-container { 

  background-color: #e75c18 !important;
}


.vue-form-wizard.md .wizard-icon-circle {
  border-color:  #e75c18 !important;
}
  </style>