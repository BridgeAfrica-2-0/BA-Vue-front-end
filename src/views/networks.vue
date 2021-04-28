<template>
  <div  style="overflow-y: hidden;">
    <navbar />
   


<div   class="container-fluid lynetowrk">
   
  <ly-tab
    v-model="selectedId"
    :items="items"
    :options="options"
    @change="handleChange">
  </ly-tab>
  </div>

   <div class="demo container-fluid">
  



 
  <div  class="mt-3" v-if="selectedId == '0'" >   <b-row>
                <b-col   class=" ">
                  <Parent />
                </b-col>



                <b-col xl="9" class="order-sm-0 mt-sm-10 mt-md-10 mt-xl-0  marg-tap">
                  <Default />
                </b-col>
              </b-row>    
              
              
   </div> 






    <div class="mt-3" v-if="selectedId == '1'" >  
              
               <Inbox />  
   </div> 







 <div class="mt-3" v-if="selectedId == '2'" >  
                   
           <Notification />      
              
   </div> 




   

 <div class="mt-3" v-if="selectedId == '3'" >  
                   
           <MemberShip />    
              
   </div> 








 <div class="mt-3" v-if="selectedId == '4'" >  
                   
          <PendingPost />
              
   </div> 









 <div class="mt-3" v-if="selectedId == '5'" > 

          <KeywordAlert />
              
   </div> 








 <div class="mt-3" v-if="selectedId == '6'" >  
                   
          <Roles />    
              
   </div> 







 <div class="mt-3" v-if="selectedId == '7'" >  
                   
           <Settings />   
              
   </div> 










</div>











    <Footer />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Default from "@/components/businessf/tabs/owner/networks/defaultNetworks";
import MemberShip from "@/components/businessf/tabs/owner/networks/memberShip";
import KeywordAlert from "@/components/businessf/tabs/owner/networks/keywordAlert";
//import PendingFeedback from "@/components/businessf/tabs/owner/networks/pendingFeedback";
import PendingPost from "@/components/businessf/tabs/owner/networks/pendingPost";
import Settings from "@/components/businessf/tabs/owner/networks/settings";
import Inbox from "@/components/businessf/tabs/owner/networks/inbox";
import Notification from "@/components/businessf/tabs/owner/networks/notification";

import Roles from "@/components/businessf/tabs/owner/networks/roles";

import LyTab from "@/tab/src/index.vue";

import Parent from "@/components/businessf/tabs/owner/networks/parent";

export default {
  name: "networks",
  components: {
    PendingPost,
    // PendingFeedback,
    Settings,
    KeywordAlert,
    MemberShip,
    Notification,
    Roles,
    LyTab,
    Default,
    Inbox,
    navbar,
    Footer,
    Parent
  },

   data () {
    return {
      selectedId: 0,
      bottomSelectedId: 0,
      items: [
        {label: 'Home ', icon: 'fas fa-home'},
       
        {label: 'Inbox' , icon: 'fas fa-comments'},
        {label: 'Notification' , icon: 'fas fa-bell'},
        {label: 'Member Request',  icon: 'fas  fa-user-plus'},
        {label: 'Pending Post' , icon: 'fas fa-sync'},   
        
        {label: 'Keyword Alert' , icon: 'fas fa-exclamation-triangle'},   
        {label: 'Roles' , icon: 'fas fa-user-cog'},
         {label: 'Settings' , icon: 'fas fa-cog'},
        
      ],
      options: {
        activeColor: '#32a400'
      },
     
    }
  },

  methods: {
    handleChange (item, index) {
      console.log(item, index)
    }
  }



};
</script>

<style  >




@media only screen and (max-width: 1500px) {

  
.marg-tap{
  margin-top:20px;
}


/** 
  
.lynetowrk .ly-tab-active-bar {
    position: absolute;
    bottom: 3px;
    left: 0;
    width: 30px;
    height: 3px;
    border-radius: 4px;
    background-color: yellow;
    
    display: none;
}





.ly-tab-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
    border-style: solid;
    border-width: 1px;
   
    border-radius: 10px;
    padding-top: 5px;
    padding-bottom: 5px;

    width: 170px;
   
}
*/



}

  

 .m-top{



  margin-top:50px;
}




.m-badge {
  margin-top: -10px;
}


.tabs {
  width: 100%;
}
.full-width {
  width: 100%;
}

.bongo .nav {
   
    background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  
}

.a-left {
  align-content: left;
}

.nav-text {
  cursor: pointer;
}

.tt-color {
 
  padding-top: 8px;
}

.tab-title-class {
  color: #ffffff !important;
}

.box-item{
     
       border-bottom: 1px solid red;
    background-color:white;
}

.yaya{
   
   
    border-bottom: 1px solid red;
    background-color:white;
}

.active-nav-item-class{

    color: #fff;
   
    border-bottom: 1px solid red;
}





.a-box{

margin-left:-15px;

}


</style>
