<template>
  <div>
    <div class="container-fluid " style="padding:0px">
     



   <div class="splide">

    <splide :options="options" class="banner r-image"   >
   

   <splide-slide >
       

            <img
              src="https://centremultisports.org/app/uploads/2019/10/gym-fit-poids-deadlift-bar.jpg"
              
              class="r-image"
            />



    </splide-slide>


     <splide-slide >
       
       
            <img
              src="https://cdn.radiofrance.fr/s3/cruiser-production/2018/11/6583a0b6-5d2a-4f3b-a167-1391597c28be/801x410_gettyimages-961177712.jpg"
              
              class="r-image"
            />



    </splide-slide>


      <splide-slide >
       

            <img
              src="https://www.theislandhotel.eu/wp-content/uploads/sites/4/2015/12/The-Gym-2-1.jpg"  
              
              class="r-image"
            />



    </splide-slide>





   


              </splide>

   </div>

<b-button class=" float-right see-all">
      See All
    </b-button>

   

     
      <div  class="container-fluid logo-container">
        <b-row class="mt-md-2">
          <b-col cols="8" md="6" class="m-0 p-0">
            <b-avatar
              src="https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg"
              class=" float-left   mt-2 mr-2 mr-xl-5 mr-lg-5 round-coner  logo_avat"
              badge-variant="primary"
              badge-offset="10px"
             square
              rounded
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
                  <b>  Heavy Gym  </b>   <br /> <span class="community"> 1.5k Community </span>
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


          breakpoints: {
          "760": {
            perPage: 1,
            gap: "0rem",
          },
          "992": {
            perPage: 2,
            gap: "1rem",
          },
        },


        
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
margin-right: -5px;
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




@media (max-width: 762px) {

  .avatar-header-icon {
   width: 25px;
    height: 25px;
  position: absolute;
  left: 65px;
    top: 65px;
  background-color: #e75c18;
  color: white;
  border-radius: 24px;
  padding: 6px;
}

  .banner{
        height: 180px;
       
  }


  
  .logo_avat{
    width: 78px;
    height: 78px;
  }


.profile-name{
     
     font-size: 16px;
    
  }

.community{

    
     font-size: 12px;
     
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
     
     font-size: 20px;
   
     margin-left: 20px;
  }

  
.community{

    
     font-size: 14px;
    
}


  .avatar-header-icon {
  width: 2em;
  height: 2em;
  position: absolute;
  left: 100px;
  top: 100px;
  background-color: #e75c18;
  color: white;
  border-radius: 24px;
  padding: 6px;
}

  .logo_avat{
    width: 120px;
    height: 120px;
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





@media (min-width: 768px) {

       
       
.r-image{
height:426px ;
object-fit: cover;
width: 100%;

  background-size: contain;
}


.logo-container{

     padding-left: 73px;
     padding-right: 63px;
}





.see-all {
  height: 48px;
  width: 174px;
 position: relative;
  margin-top: -100px;
  left: -20px;
  background-color: transparent;
  color: #fff;
  border: solid 2px white;
  font-weight: bold;
}
.see-all:hover {
  background-color: rgba(220, 220, 220, 0.398);
  color: #fff;
  border: solid 2px white;
}



}






@media (max-width: 760px) {

       
       
.r-image{
 height: 180px;
object-fit: cover;
width: 100%;

  background-size: contain;
}




.see-all {
  height: 38px;
  width: 91px;
 position: relative;
  margin-top: -100px;
  left: -20px;
  background-color: transparent;
  color: #fff;
  border: solid 2px white;
  font-weight: bold;
}
.see-all:hover {
  background-color: rgba(220, 220, 220, 0.398);
  color: #fff;
  border: solid 2px white;
}





}


</style>


<style>  

@media only screen and (max-width: 768px) {
.container-fluid{
   padding-right: 10px;
    padding-left: 10px;
}
}

 </style>
