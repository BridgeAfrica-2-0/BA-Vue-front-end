<template>

<div>   

   <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <div class="border people-style shadow h-100">
  <div class="row">
  
     <b-col md="3" cols="4" sm="3" class="my-auto" > <b-skeleton type="avatar"  class="p-avater" ></b-skeleton>   </b-col> 
 <b-col md="8" cols="8" sm="8" class="mt-2" style="margin-left:-15px">
          <b-skeleton class="" width="85%"></b-skeleton>
          <b-skeleton width="55%"></b-skeleton>
         
           <b-skeleton width="90%"></b-skeleton>
 </b-col>
  </div>
        </div>
      </template>

   
    </b-skeleton-wrapper>

    </div> 
    
      </template>


      
<script>
import axios from "axios";

export default {
  name: "PeopleSkeletonComponent",
  props: {
    loading: {
      type: Boolean,
      default:false
    },
  },

};
</script>

<style scoped>


.people-style {
  border-top-left-radius: 40px;

  border-bottom-left-radius: 40px;

  border-top-right-radius: 45px;

  border-bottom-right-radius: 45px;

  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
}



@media only screen and (max-width: 768px) {
  .p-avater {
    margin-right: -15px;
    margin-top: 3px;
  }

  
  .people-style {
    border-top-left-radius: 40px;

    border-bottom-left-radius: 40px;

    border-top-right-radius: 45px;

    border-bottom-right-radius: 45px;

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
    margin-right: -15px;
    margin-top: 3px;
  }


  .people-style {
    border-top-left-radius: 40px;

    border-bottom-left-radius: 40px;

    border-top-right-radius: 45px;

    border-bottom-right-radius: 45px;

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