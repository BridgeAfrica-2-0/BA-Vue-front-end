<template>
  <div >

    
    <b-card class="border-0">




     

     <div class=" border shadow   p-tab">

      <b-tabs  pills content-class="mt-3  f-left ">
        <b-tab title="People" active>


 
     <div>

       <b-row>  
         <b-col> 
      <b-tabs fill pills content-class="mt-3  f-left m-up">

        <b-tab title="Followers" active>

          <div  class="s-card">    <b-row>  <b-col>  <b-container >  <People />   </b-container>   </b-col> <b-col>  <b-container>   <People />   </b-container>   </b-col>    </b-row>   </div>

         
         
        </b-tab>

        <b-tab title="Following"> 
      <div class="s-card">    <b-row>  <b-col>   <b-container > <People />   </b-container >  </b-col> <b-col>   <b-container >  <People />    </b-container >  </b-col>    </b-row>   </div>

        
        
        </b-tab>
      </b-tabs>
      </b-col>
        </b-row>
    </div>

         
        </b-tab>

        <b-tab title="Businesses">
        
        
     <div>
      <b-tabs fill pills content-class="mt-3  f-left m-up">
        <b-tab title="Followers" active>

       
        
         <div class="s-card">    <b-row>  <b-col>   <b-container >  <Business />    </b-container >  </b-col> <b-col>   <b-container > <Business />    </b-container >  </b-col>    </b-row>   </div>
 
         
        </b-tab>

        <b-tab title="Following">
        
        
         <div class="s-card">    <b-row>  <b-col>  <b-container>  <Business />   </b-container>   </b-col> <b-col>  <b-container>  <Business />    </b-container >   </b-col>    </b-row>   </div>
 
        </b-tab>
      </b-tabs>
    </div>



        </b-tab>
      </b-tabs>
    </div>























    </b-card>
  </div>
</template>

<script>


import People from "@/components/dasboard/communityMember";
import Business from "@/components/dasboard/communitybusiness";


export default {
  name: "comunitiDashboard",

   components: {
    People,
    Business,
    
    
    
  },


};
</script>

<style scoped>
.avatar-size {
  width: 90px;
}
  .p-tab{
    padding: 15px;
    padding-left: 15px;
  }

  m-tabs{

    margin: 20px;
  }

  .s-card{
  height:350px; 
  overflow: auto; 
  overflow-x: hidden;

}


.m-up{

  margin-top:-5px;
}

</style>
