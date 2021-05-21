<template>
  <div>
    <div class="container-fluid " style="padding:0px">
     





    <splide :options="options" class="banner r-image"   >
   

   <splide-slide >
       

            <img
              src="https://static.urbandaddy.com/uploads/assets/image/articles/standard/aed53a6039374131366519494838fda2.png"
              
              class="r-image"
            />



    </splide-slide>


     <splide-slide >
       
       
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sweet-potato-dishes-2-1567007230.png?crop=0.502xw:1.00xh;0.274xw,0&resize=640:*"
              
              class="r-image"
            />



    </splide-slide>


      <splide-slide >
       

            <img
              src="https://static.urbandaddy.com/uploads/assets/image/articles/standard/425f67e10d41d132d59d475bb3c1ae78.jpg"  
              
              class="r-image"
            />



    </splide-slide>





   


              </splide>







      <!--
      <div class="photo-btns">
        <b-button class="sm" size="sm">
          <b-icon icon="plus"></b-icon>Add Photos</b-button
        >
        <b-button class="ml-2" size="sm">See All</b-button>
      </div>

      -->

     
      <div  class="container-fluid">
        <b-row class="mt-md-2">
          <b-col cols="8" md="6" class="m-0 p-0">
            <b-avatar
              src="https://placekitten.com/400/300"
              class=" float-left avat  mt-2 mr-2 mr-xl-5 mr-lg-5 round-coner"
              badge-variant="primary"
              badge-offset="10px"
             square
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
                  <b>  Business Name  </b>   <br /> <span> 1.5k Community </span>
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
    </div>
  
    <br />
  </div>
</template>

<script>
export default {
  name: "headPageOwner",

  
   data() {
      return {
        options: {
          rewind : true,
          autoplay: true,
          perPage: 3,
          pagination:false,
        
          
          type   : 'loop',
          perMove: 1,


        
        },
      };
    },
};
</script>

<style scoped>




.mpbar{

    margin-left: 50px;
    margin-right: 50px;
}






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

.round-coner{
  border-radius: 4px;
}





@media (min-width: 760px) {

       
       
.r-image{
height:426px ;
object-fit: cover;
width: 100%;

  background-size: contain;
}


}






@media (max-width: 760px) {

       
       
.r-image{
 height: 180px;
object-fit: cover;
width: 100%;

  background-size: contain;
}


}


</style>
