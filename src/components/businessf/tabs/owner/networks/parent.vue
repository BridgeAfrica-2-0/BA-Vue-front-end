

<template>
  <div class=" ">
    <b-card title="" class="">
      <b-container class="a-center">
        <b-avatar
          size="6em"
          src="https://business.bridgeafrica.info/assets/img/pea.jpg"
          class="network-profile-image-profile"
          variant="primary"
        >
        </b-avatar>
       

        <b-icon
              icon="camera"
            
              class=" cursor-pointer network-avatar-icon"
              v-b-modal.modal-4
            ></b-icon>

      </b-container>

      <br />      

      <b-container>
        <b-row>
          <b-col cols="6">
            <h6 class="font-weight-bolder m-0 p-0 a-center">  Maketers Union Network</h6>
          </b-col>
          <b-col cols="6">
            <b-button variant="primary"   size="sm"   @click="addNetwork"   style="width: 120px;"  class="a-center" >
              <b-icon icon="pencil"></b-icon> Edit
            </b-button>
          </b-col>
        </b-row>
      </b-container>

      <br />

      <b-card-text class="text-left">
        

        <b-container>
          <b-row>
            <b-col>
              <p class="a-center"><b-icon icon="globe" variant="primary"></b-icon> Private</p>
            </b-col>
            <b-col>
              <p class="a-center">
                <b-icon icon="people-fill" variant="primary"></b-icon> 3.5K
                Members
              </p>
            </b-col>
          </b-row>
        </b-container>

        <h6 class="mt-2 font-weight-bolder">About</h6>
        <p class="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <span class="d-inline-block float-right">
            <a href="#">lire la Suite</a>
          </span>
        </p>
      </b-card-text>
    </b-card>

    <b-card
      class="mt-4"
      title=""
      header-tag="header"
      footer-tag="footer"
    >

    <h4> <b-icon icon="people" class="i-color">   </b-icon>  Community          <span class="i-color"> 7k </span> </H4> 

     <SidebarCommunity/> 
     
    </b-card>


      
      
     <Invite /> 





    

    <b-modal hide-footer title="Edit network"   size="lg"  v-model="showModal">

      <b-container>  
      <b-form>



    

              <b-form-group
                label-cols-lg="12"
                label="Network Name"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-input id="network_name" placeholder="" required>  </b-form-input>
              </b-form-group>

             
          
               

               <b-form-group
                label-cols-lg="12"
                label=" Brief Description"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>






          <b-form-group
                label-cols-lg="12"
                label="Purpose Of Network"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder=""
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>


           












              <b-form-group
                label-cols-lg="12"
                label="Special Needs"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder=" "
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>


          






            <b-form-group
                label-cols-md="6"
                label="Allow Business to join network"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-checkbox v-model="checked" name="check-button" switch>
                </b-form-checkbox>
              </b-form-group>




        <b-button class="mt-2 " style="float:right" variant="primary" > Update Network</b-button>
      </b-form>




       </b-container>



    </b-modal>




    <b-modal id="modal-4" title="Upload Profile Picture">
              <div class="w3-container">
                <div class="row pb-3">
                  <div
                    class="col-sm-6 text-center"
                    style="border-right:1px solid #dee2e6;"
                  >
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'upload']" />
                    </h1>
                    <div>
                      <input type="file" id="img" name="img" accept="image/*" />
                    </div>
                    <h4>Upload a New picture</h4>
                  </div>

                  <div class="col-sm-6 text-center">
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'edit']" />
                    </h1>
                    <h4>Edit Your New picture</h4>
                  </div>
                </div>
              </div>
            </b-modal>
            

  </div>
</template>

<script>

import SidebarCommunity from "@/components/businessf/tabs/owner/networks/sidebarcommunity";


import Invite from "@/components/businessf/tabs/owner/networks/invite";


export default {
  name: "parent",



  data() {
    return {
      networkShow: true,
      showModal: false,
      text: "",}},

   components: {
    SidebarCommunity,
    Invite,
   
  },


  methods: {
    openNetwork() {
      this.networkShow = false;
    },

    addNetwork() {

      console.log("hello");
      this.showModal = !this.showModal;
    }
  }


};
</script>

<style >


.lala .nav-fill{
   
    margin-top: -19px;
     border: 1px solid rgba(0, 0, 0, 0.125);
  }



.a-center {
  text-align: center;
  align-content: center;
  justify-content: center;

  display: flex;
}
.b-none {
  border-style: none;
}
.t-align{
  text-align: left;
}

 .network-avatar-icon {
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 77px;
    
    margin-left: 80px;
    padding: 0px 0px;
    color: #ffff;
    background: #e75c18;
    border-radius: 25px;
    border: 4px solid #ffff;
}



.i-color{
  color:#e75c18;
}
</style>
