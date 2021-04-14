<template>
  <div class="">
  
    <navbar />
   

     


<div   class="container-fluid">
   
  <ly-tab
    v-model="selectedId"
    :items="items"
    :options="options"
    @change="handleChange">
  </ly-tab>








  </div>




   
    <div class="mt-3" v-if="selectedId == '0'" >  
              
             <Business/>   
   </div> 







    <div class="mt-3" v-if="selectedId == '1'" >  
              
              <Inbox />  
   </div> 






    <div class="mt-3" v-if="selectedId == '2'" >  
              
            <Notification />
           
   </div> 







    <div class="mt-3" v-if="selectedId == '3'" >  
              
            <Pending />
   </div> 








    <div class="mt-3" v-if="selectedId == '4'" >  
              
              <Insight />
   </div> 




   
    <div class="mt-3" v-if="selectedId == '5'" >  
              
             <Settings /> 
   </div> 
















    <Footer />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import Business from "../components/businessOwner/business";
import Pending from "../components/businessOwner/pending";
import Insight from "../components/businessOwner/insight";
import Notification from "../components/businessOwner/notification";
import Settings from "../components/businessOwner/settings";

import Inbox from "../components/businessOwner/inbox";

import Footer from "../components/footer";
export default {
  name: "Home",
  components: {
    navbar,
    Business,
    Pending,
    Settings,
    Insight,
    Inbox,
    Notification,
    Footer
  },
  data() {
   return {
      selectedId: 0,
      bottomSelectedId: 0,
      items: [
        {label: 'Home ', icon: 'fas fa-home'},
       
        {label: 'Inbox' , icon: 'fas fa-comments'},
        {label: 'Notification' , icon: 'fas fa-bell'},
        {label: 'Pending' , icon: 'fas fa-sync'}, 
        {label: 'Insight' , icon: 'fas fa-chart-line'},  
        {label: 'Settings' , icon: 'fas fa-cog'},
        
      ],
      options: {
        activeColor: '#1d98bd'
      },
     
    
     
    }
  },
  computed: {},
 
  methods: {
    handleChange (item, index) {
      console.log(item, index)
    }
  }
};
</script>

<style scoped>
.mar-left{
  margin-left: 25px;
}
.tabs {
  width: 100%;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}




.a-left{
  align-content: left;
}

.nav-text {
  cursor: pointer;
}



.tab-title-class {
    color: #ffffff !important;  
}



@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>

<style>  
  
.business-owner-tab .nav-link {

    display: block;
    padding: 0.5rem 1rem;
    padding-top: 1px;
   
    padding-bottom: 1px;
    padding: 1px;
        padding-right: 1px;
        padding-left: 1px;
    text-align: center;
    padding-left: 10px;
    padding-right: 25px;
    border: 1px solid gray;
  

}


.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    
    background-color: #e6e6e6;
}



    </style>
