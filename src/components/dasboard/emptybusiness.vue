import Business from '@/components/dasboard/communitybusiness';
import Businesses from '@/components/follower/tabs/businesses';
<template>
  <div>
    <b-card class="border shadow " style="height:250px">
     <span> <h4> My Businesses  </h4>  </span>


     <div> 
         
         <b-row> 
             
              <b-col>     
             
              <img class="img-fluid picture" src="@/assets/icons/business.png" width="170px" />
             
               </b-col> 
               


               <b-col>  

                   <div class="p-top">     
                       <br/>
                   <h6> No Business  </h6>   
             
             <b-button variant="primary"> Get a website  </b-button>

                   </div>
             
               </b-col> 


                </b-row>   </div>  
      
        
         






        
      
    </b-card>
  </div>
</template>

<script>


export default {
  name: "emptybusiness",
 
  
};
</script>

<style scoped>

.p-top{
    padding-top: 20px;
    text-align: left;
    align-content: left;
}

</style>
