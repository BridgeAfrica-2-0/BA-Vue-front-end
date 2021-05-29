<template>

  <div >


    
 <div class="d-block d-md-none"  >
   



 </div>





   
    <div class="mt-3  d-block d-md-none" v-if="selectedIdd == '2'" >  
          <Notification />  
           
   </div> 



   
    <div class="mt-3  d-block d-md-none" v-if="selectedIdd == '3'" >  
            <MemberShip />  
           
   </div> 





    <div class="mt-3  d-block d-md-none" v-if="selectedIdd == '4'" >  
            <PendingPost />
           
   </div> 




    <div class="mt-3  d-block d-md-none" v-if="selectedIdd == '5'" >  
           <KeywordAlert />
           
   </div> 





    <div class="mt-3 d-block d-md-none" v-if="selectedIdd == '6'" >  
            <Roles />
           
   </div> 



<div class="mt-3 d-block d-md-none" v-if="selectedIdd == '7'" >  
             <Settings />
           
   </div> 












  

   <b-row class="center-content d-none d-md-block">    <b-col cols="10">    





    

      <div class="bv-example-row">   
        
        <div>
          <b-tabs pills  v-model="tabIndex"    vertical  class="itzlala"   nav-wrapper-class="w-15" >
            <b-tab  title="Notifications">
             

              <b-card-text> <Notification /> </b-card-text
            ></b-tab>


            


             <b-tab title="MemberShip Request" >
             

              <b-card-text> <MemberShip /> </b-card-text
            ></b-tab>         



          
            <b-tab title="Pending Post">
              
              <b-card-text> <PendingPost /> </b-card-text
            ></b-tab>






            <b-tab title="Keyword Alert">                       
             
              <b-card-text> <KeywordAlert /> </b-card-text
            ></b-tab>

            <b-tab title="Business Roles">
              
              <b-card-text> <Roles /> </b-card-text
            ></b-tab>



           



  
            <b-tab title="Settings">
             
              <b-card-text> <Settings /> </b-card-text
            ></b-tab>






            


          </b-tabs>



          
        </div>
      </div>

      <br />

      <br />


       </b-col>    <b-col cols="2">    </b-col>   </b-row>
   
  </div>
</template>

<script>



import Roles from "@/components/businessf/tabs/owner/networks/roles";

import MemberShip from "@/components/businessf/tabs/owner/networks/memberShip";
import KeywordAlert from "@/components/businessf/tabs/owner/networks/keywordAlert";

import PendingPost from "@/components/businessf/tabs/owner/networks/pendingPost";

import Notification from "@/components/businessf/tabs/owner/networks/notification";

import Settings from "@/components/businessf/tabs/owner/networks/settings";



export default {
  name: "settings",

   props: ["currenttab"],

  
  

   watch: { 




currenttab: {
    immediate: true,
    handler(newVal) {
        
      console.log(newVal)

      
           if(newVal==3){
            
            this.selectedIdd ="3";

            this.tabIndex="1"

            
            
           }


             if(newVal==2){
            
           this.selectedIdd ="2";
            this.tabIndex="0";
       
            
           }


           

  if(newVal==4){
            
            this.selectedIdd ="4";
           this.tabIndex="2";
            
           }





           
  if(newVal==5){

    
            
            this.selectedIdd ="5";
           this.tabIndex="3";
            
           }





             
  if(newVal==6){

    
            
            this.selectedIdd ="6";
           this.tabIndex="4";
            
           }




  
  if(newVal==7){

    
            
            this.selectedIdd ="7";
           this.tabIndex="5";
            
           }








    },
  },


   },

  components: {
   
    Roles,
    Notification,
 
    
    MemberShip,
    KeywordAlert,
    PendingPost,
    Settings
   
   
  },



 data() {
    return {
      size: 0,
      tabIndex: 1,
       selectedIdd: 0,
      bottomSelectedId: 0,
       items: [
        {label: 'Notification' },
       
        {label: 'MemberShip Request' },
        
         {label: 'PendingPost '}, 
         
         {label: 'Keyword Alert'},

        {label: 'Roles' }, 

        {label: 'Settings'},
        
      ],
      options: {
        activeColor: '#1d98bd'
      },

     
    



    }
  },

 
  methods: {

   
  },
  
};
</script>

<style scoped>

.border-none{
  border: none;
}
.card-header {
  background-color: white;
}

.b-bottom {
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 10px;

  border-bottom: 0.5px solid;
  border-color: gray;
}

.b-bottomn {
  margin-top: -20px;
  margin-bottom: 30px;
  padding-bottom: 10px;
}

.card-header {
  background-color: white;
}

.f-right {
  float: right;
}


@media only screen and (max-width: 768px) {

.t-color {

  font-size: 16px;

}



}



.f-left {
  float: left;
}

.tabs {
  width: 100%;
}

.a-button-l {
  margin-bottom: 1000px;
  align-content: right;
  float: right;
}
.a-text {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}

@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}



.center-content{


  padding-right: 20px;
  padding-left: 20px;

}   


.w-15{
  width: 15%;
}

.card-text{          

  margin-left: 100px;       
}



.t-color:hover{

  color:#cc4d0d;
}


t-color:focus {

  color:#f1eae7;
}

t-color.active {

  color:#f1eae7;
}


.nav-link:hover, .nav-link:focus {
    text-decoration: none;
}


</style>

<style> 

@media only screen and (max-width: 768px) {
 .itzlala .nav-link {
    display: block;
    padding: 4px;
}}




   </style>
