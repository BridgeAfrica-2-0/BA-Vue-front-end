import Business from '@/components/dasboard/communitybusiness';
import Businesses from '@/components/follower/tabs/businesses';
<template>
  <div>
    <b-card class="border shadow " style="height:250px">
     <span> <h4>    <img class="img-fluid picture" src="@/assets/icons/bus.png" style="width: 60px;" />  My Businesses  </h4>  </span>


     <div> 
         
         <b-row> 
             
            
               


               <b-col>  

                   <div class="p-top">     
                       <br/>
                   <h6> No Business  </h6>   
             
             <b-button variant="primary"> Add Business  </b-button>

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
    text-align: center;
    align-content: center;
}

</style>
