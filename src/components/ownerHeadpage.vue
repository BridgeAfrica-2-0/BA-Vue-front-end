<template>
  <div>
    <b-container fluid>
      <img
        src="@/assets/img/banner.jpg"
        class="img-fluid  banner"
        alt="Kitten"
      />



      <div  class="container-fluid">
        <b-row class="mt-md-2">
          <b-col cols="8" md="6" class="m-0 p-0">
            <b-avatar
              src="https://placekitten.com/400/300"
              class=" float-left avat mr-2 mr-xl-5 mr-lg-5"
              badge-variant="primary"
              badge-offset="10px"
             
            >
            </b-avatar>

            <b-icon
              icon="camera-fill"
              class="avatar-header-icon btn cursor-pointer size"
              v-b-modal.modal-4
            ></b-icon>









            <div class="">
              <div class="text-box">
                <span>
                  <h6
                    class=" m-0 p-0 ml-3   profile-name"
                  > 
                  <b>  User Name  </b>   <br /> <span> 1.5k Community </span>
                  </h6>
                  
                  
                </span>





               


              </div>
            </div>





            
            <b-modal id="modal-4" title="Upload Profile Picture">
              <div class="w3-container">
                <div class="row pb-3">
                  <div
                    class="col-sm-6 text-center"
                    style="border-right:1px solid #dee2e6;"    @click="chooseProfile1()"
                  >
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'upload']" />
                    </h1>
                    <div>
                      <input type="file" id="profile-imag" hidden name="img" accept="image/*" />
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











            <!-- second modal box  to edit the big cover photo -->





            
            <b-modal id="coverphoto" title="Upload Profile Picture">
              <div class="w3-container">
                <div class="row pb-3">
                  <div
                    class="col-sm-6 text-center"
                    style="border-right:1px solid #dee2e6;"   @click="chooseProfile2()"
                  >
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'upload']" />
                    </h1>
                    <div>
                      <input type="file" hidden id="cover-imag" name="img" accept="image/*" />
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


          </b-col>

          <b-col cols="4" md="6" class="">
            <div class="my-auto options">
              <span class="float-right">

                <b-button variant="primary" class="edit-btn  d-none d-md-inline"   v-b-modal.coverphoto > <fas-icon class="mr-2" :icon="['fas', 'pencil-alt']" size="lg" />   Edit </b-button>
                
                
                <b-dropdown id="dropdown-1" class="float-right options dot-btn mt-2 mt-sm-2 mt-md-0" no-caret variant="outline-primary">
                  <template #button-content>
                    <b-icon-three-dots></b-icon-three-dots>
                  </template>



    

                  <b-dropdown-item    v-b-modal.coverphoto
                    > Change Cover</b-dropdown-item
                  >



                  <b-dropdown-item
                    >Invite Friends On Bridge Africa</b-dropdown-item
                  >



                  <b-dropdown-item>View As</b-dropdown-item>
                </b-dropdown>
              </span>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ownerheadPage",


methods: {
  
  chooseProfile2: function() {
     
        document.getElementById("cover-imag").click()
    },


     chooseProfile1: function() {
     
        document.getElementById("profile-imag").click()
    },


}

};

</script>

<style scoped>


.text-box {
  margin-top: 1.5rem;
  text-align: left;
}

.position-loup {
  display: none;
}

.img-avatar {
  width: 6em;
  height: 6em;
  margin-top: 10px;
}

@media (max-width: 575.98px) {
 
  .camera{
    width: 10px;
  }

  .avatar-header-icon {
    width: 25px;
    height: 25px;
    position: absolute;
    left: 63px;
    top: 51px;    
    background-color: #e75c18;
    color: white;
    border-radius: 24px;
    padding: 4px;
  }

  .text-box {
    margin: 0px;
    margin-top: 7px;
    text-align: left;
  }

  .position-loup {
    margin-top: -27px;
    display: inherit;
  }
}
@media (max-width: 768px) {

  .options{
margin-right: -8px;
  }
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
@media (min-width: 1400px) {


  .header-group {
    float: right;
    margin-top: -20px;
    margin-right: 20px;
  }
}




@media (max-width: 760px) {

  .avatar-header-icon {
   width: 25px;
    height: 25px;
  position: absolute;
  left: 47px;
    top: 27px;
  background-color: #e75c18;
  color: white;
  border-radius: 24px;
  padding: 6px;
}

  .banner{
        height: 180px;
       
  }


  
  .avat{
    width: 64px;
    height: 64px;
  }


.profile-name{
     
     font-size: 14px;
     font-family: Arial, Helvetica, sans-serif;
  }



.dot-btn{
   height:33px ;
   margin-left: 3px;
}


.edit-btn{

  width:112px;
   height:33px ;
   background-color: #e4c229;
   border-color:#e4c229 ;

}

  
}



@media (min-width: 760px) {

  .profile-name{
     
     font-size: 16px;
     font-family: Arial, Helvetica, sans-serif;
  }

  .avatar-header-icon {
  width: 2em;
  height: 2em;
  position: absolute;
  left: 87px;
  top: 51px;
  background-color: #e75c18;
  color: white;
  border-radius: 24px;
  padding: 6px;
}

  .avat{
    width: 102px;
    height: 102px;
  }
  .banner{
        height: 426px;
       
  }


.edit-btn{

  width:146px;
   height:40px ;
   background-color: #e4c229;
   border-color:#e4c229 ;

}

.edit-btn:hover{
 
  border-color:#e4c229 ;
}

.edit-btn:focus{
 
  border-color:#e4c229 ;
}

.edit-btn:active{
 
  border-color:#e4c229 ;
}


.dot-btn{
   height:40px ;
   margin-left: 3px;
}
  
}



</style>
