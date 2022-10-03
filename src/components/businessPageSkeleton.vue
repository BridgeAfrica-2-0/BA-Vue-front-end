<template>
  <div>
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <div class="border r-image ">
          <div class="row p-0 h-100">
            <b-col cols="12" md="6" xl="4" class="p-0 border border-bottom-none">
                  <b-skeleton-img   height="450px" class="r-image" animation="fade"></b-skeleton-img>
            </b-col>

             <b-col cols="12" md="6" xl="4" class="d-none d-md-block p-0 border border-bottom-none">
                  <b-skeleton-img   height="450px" class="r-image" animation="fade"></b-skeleton-img>
            </b-col>

             <b-col cols="12" md="6" xl="4" class="d-none d-md-none d-xl-block p-0 border border-bottom-none">
                  <b-skeleton-img  height="450px" class="r-image" animation="fade"></b-skeleton-img>
            </b-col>


           
          </div>
        </div>

        <div class="container d-flex mt-5 mb-5">   
            <b-skeleton-img  height="100px" width="100px"  class="r-image mr-2" animation="fade"></b-skeleton-img>
           <div class=" mr-auto mt-auto mb-auto p-2">  <b-skeleton width="200px"></b-skeleton>
            <b-skeleton width="200px"></b-skeleton>  <b-skeleton width="200px"></b-skeleton> 
             </div>  

             <div class="ml-auto d-none d-md-flex mt-auto mb-auto "> 
           <span class="p-2">   <b-skeleton width="120px" height="40px" type="button" ></b-skeleton> </span>
           <span class="p-2">   <b-skeleton  width="120px" height="40px"  type="button"></b-skeleton></span>
             </div>

        </div>

        <div class="container mt-5 mb-5"> <b-skeleton width="100%"></b-skeleton>  </div>
         <div class="container"> 
        <div class="row"> 
            <div class="col-md-4 border p-2 d-none d-md-block">
                <div class="pb-2"> 
                <b-skeleton width="100%"></b-skeleton> 
                <b-skeleton width="100%"></b-skeleton>
                 </div>

                  <div class="pb-3"> 
                <b-skeleton width="100%"></b-skeleton> 
                <b-skeleton width="100%"></b-skeleton>
                 </div>

                  <div class="pb-3"> 
                <b-skeleton width="100%"></b-skeleton> 
                <b-skeleton width="100%"></b-skeleton>
                 </div>

                <div class="pb-3"> 
                <b-skeleton width="100%"></b-skeleton> 
                <b-skeleton width="100%"></b-skeleton>
                 </div>
            </div>
             <div class="col-md-8"> 
                 
                  <div class="border people-style border h-100 p-2">
          <div class="row">
            <b-col md="3" cols="4" sm="3" class="my-auto">
              <b-skeleton animation="fade" type="avatar" class="p-avater ml-2"></b-skeleton>
            </b-col>
            <b-col
              md="8"
              cols="8"
              sm="8"
              class="mt-2"
              style="margin-left: -15px"
            >
              <b-skeleton  animation="fade" class="" width="85%"></b-skeleton>
              <b-skeleton animation="fade" width="55%"></b-skeleton>

              <b-skeleton animation="fade" width="90%"></b-skeleton>
            </b-col>

          
          </div>

            <div class="mt-2 p-3">
                
                 <b-skeleton class="" width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>

              <b-skeleton width="90%"></b-skeleton>
            </div>
        </div>
            </div> 
            </div>
         </div>
         
      </template>
    </b-skeleton-wrapper>
  </div>
</template>


      
<script>
import axios from "axios";

export default {
  name: "skeletonComponent",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>



<style scoped>

 .r-image{
    height: 452px;
 }

</style>



<style scoped>
.people-style {
 
 border-radius: 10px;
  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
}

@media only screen and (max-width: 768px) {
  .p-avater {
    
    margin-top: 3px;
  }

  .people-style {
  
     border-radius: 10px;
    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    margin-right: 5px;
    margin-left: 5px;
  }
}

@media only screen and (max-width: 520px) {
  .p-avater {
 
    margin-top: 3px;
  }

  .people-style {

     border-radius: 10px;
    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    margin-right: 5px;
    margin-left: 5px;
  }
}

@media only screen and (min-width: 764px) {
  .p-avater {
    width: 95px;
    height: 95px;
    margin-bottom: -4px;
    margin-left: -5px;
  }
}

@media only screen and (min-width: 764px) and (max-width: 991.18px) {
  .center {
    text-align: left;
  }
}

@media only screen and (max-width: 762px) {
  .p-avater {
    width: 75px;
    height: 75px;
    margin-bottom: -8px;
    margin-left: -5px;
    margin-top: -4px;
  }
}
</style>