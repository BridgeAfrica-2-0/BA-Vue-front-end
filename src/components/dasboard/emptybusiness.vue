import Business from '@/components/dasboard/communitybusiness';
import Businesses from '@/components/follower/tabs/businesses';
<template>
  <div>
    <b-card class="border shadow " style="height:250px">
     <span> <h6 class="mybusi"> <fas-icon class="icons" :icon="['fas', 'hands-helping']" size="lg" /> <b>  My Businesses  </b> </h6>  </span>


     <div> 
         
         <b-row> 
             
            
               


               <b-col>  

                   <div class="p-top">     
                       <br/>
                   <h6> No Business  </h6>   
             
             <b-button variant="primary" class="busi-btn"> Add Business  </b-button>

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

 @media only screen and (min-width: 768px) {
     .busi-btn{
         width:133px;
         height: 38px;
         font-family: Helvetica Neue;
     }  


     .mybusi{
       font-size: 20px;

     }
 }


  @media only screen and (max-width: 768px) {
     .busi-btn{
         width:112px;
         height: 38px;
         font-family: Helvetica Neue;

          font-size: 12px;
     }  


     .mybusi{
       font-size: 12px;

     }
 }

</style>
