<template>
  <div>
         <b-row>
      <b-col cols="12" class="mx-auto">
        <b-input-group class="mb-2 px-md-3 mx-auto">
          <b-input-group-prepend is-text>
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            aria-label="Text input with checkbox"
            placeholder="Search Something"
          ></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <br/>

    <br/>



  



  <b-row> 
<b-col md="12" lg="6">  
    <CommunityBusiness/>

 </b-col>


  <b-col md="12" lg="6">  
   <CommunityBusiness/>

 </b-col>

     </b-row>


  </div>
</template>

<script>
import CommunityBusiness from "../../communitybusiness"
export default {
  components:{
      CommunityBusiness
  }
}
</script>

<style>

</style>