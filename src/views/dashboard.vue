<template>
  <div>
    <navbar></navbar>

   

    <div class="text-justify  p-card" >



       <CarousselDashboard />   <br/>


       <b-row> 
         
         <b-col cols="6">  <b-input-group class="my-auto input-size ">n   
            <template #append>
              <b-input-group-text class=" b-groupe  shadow "
                ><strong class="color-sit">
                  <b-icon-search></b-icon-search> </strong
              ></b-input-group-text>
            </template>
   
    <b-form-input
      id="inline-form-input-name"
      class=" border shadow  w-50 "
      placeholder="Search Bridge Africa"
    ></b-form-input>
    </b-input-group>
    
      </b-col>   
         
            <b-col cols="3">   


<b-input-group class="my-auto input-size">
            <template #append>
              <b-input-group-text class=" b-groupe shadow "
                ><strong class="color-sit">
                  <b-icon icon="chevron-down">  </b-icon> </strong
              ></b-input-group-text>
            </template>
    
    <b-form-select
      id="inline-form-custom-select-pref"
      class=" w-25 wi-25 border shadow "
      :options="['All', 'Business', 'Network', 'Post']"
      :value="null"
    ></b-form-select>

    </b-input-group>
  </b-col>     
            
              <b-col cols="3"> 
                
                


<b-input-group class="my-auto input-size">
            <template #append>
              <b-input-group-text class=" b-groupe  shadow "
                ><strong class="color-sit">
                 <b-icon icon="chevron-down">  </b-icon> </strong
              ></b-input-group-text>
            </template>
    
    <b-form-select
      id="inline-form-custom-select-pref"
      class=" w-25 wi-25 border shadow "
      :options="['All', 'Business', 'Network', 'Post']"
      :value="null"
    ></b-form-select>

    </b-input-group>


   </b-col>    
              
                </b-row>












<br/>





       <b-row> 
         
         <b-col cols="6">  

      </b-col>   
         
            <b-col cols="3">   


<b-input-group class="my-auto input-size">
            <template #append>
              <b-input-group-text class=" b-groupe shadow "
                ><strong class="color-sit">
                   <b-icon icon="chevron-down">  </b-icon> </strong
              ></b-input-group-text>
            </template>
    
    <b-form-select
      id="inline-form-custom-select-pref"
      class=" w-25 wi-25 border shadow "
      :options="['All', 'Business', 'Network', 'Post']"
      :value="null"
    ></b-form-select>

    </b-input-group>
  </b-col>     


            
     <b-col cols="3"> 
                
             <div  class="a-center"  >   

         <b-form-checkbox
      id="checkbox-1"
     
      name="checkbox-1"
     
    >
      Show Map
    </b-form-checkbox>

    </div>





   </b-col>    
              
                </b-row>






<br/>

      <BusinessAndPeople  />

        

        <br/>


   <SelectBH />

   <br/>

    <div>  <b-row>  <b-col>  <Profile /> </b-col> <b-col>  <EmptyBusiness /> </b-col> </b-row>        </div>

<br/>

     
        <network-dashboard ></network-dashboard>

      <br/>

      



          <div>  <b-row>  <b-col>  <SelectBusiness /> </b-col> <b-col>  <Map /> </b-col> </b-row>        </div>

    
<br/>
           <div>  <b-row>  <b-col>  <BusinessDashboard /> </b-col> <b-col>  <Insights /> </b-col> </b-row> 
                  </div>
                   <br/>

       
        <comuniti-dashboard class="m-component"></comuniti-dashboard>  <br/>


        <div>  <b-row>  <b-col cols="8">  <CommunityActivity /> </b-col> <b-col cols="4">  <Tutorial /> </b-col> </b-row>        </div><br/>
        
         <div>  <b-row>  <b-col>  <Hotbusiness /> </b-col> <b-col>  <Popularnetwork /> </b-col> </b-row>        </div>
     
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import CarousselDashboard from "@/components/dasboard/carousselDashboard";
import NetworkDashboard from "@/components/dasboard/networkDashboard";
import BusinessDashboard from "@/components/dasboard/businessDashboard";
import ComunitiDashboard from "@/components/dasboard/comunitiDashboard";
import Insights from "@/components/dasboard/insights";
import CommunityActivity from "@/components/dasboard/communityActivity";

import Tutorial from "@/components/dasboard/tutorial";

import Profile from "@/components/dasboard/profile";


import SelectBH from "@/components/dasboard/selectbusinessh";



import BusinessAndPeople from "@/components/dasboard/businessandpeople";

import SelectBusiness from "@/components/dasboard/selectbusiness";
import Map from "@/components/dasboard/map";

import EmptyBusiness from "@/components/dasboard/emptybusiness";

import Popularnetwork from "@/components/dasboard/popularnetwork";
import Hotbusiness from "@/components/dasboard/hotbusiness";

export default {
  name: "dashboard",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  components: {
    ComunitiDashboard,
    BusinessDashboard,
    NetworkDashboard,
    CommunityActivity,
    Tutorial,
    Insights,
    Popularnetwork,
    Hotbusiness,
    SelectBusiness,
    Map,
    BusinessAndPeople,
    EmptyBusiness,
    SelectBH,
    Profile,

    CarousselDashboard,
    Navbar
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>

.p-card{

  margin: 50px;
  
  border: 0px;
}

.search-form{
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: right;
  
}


.m-component{
  margin: -20px;
}

.w-50 {
  width:50%;
  height: 50px;
  
}


.wi-25{
  width:25%;
  height:50px;
}


.b-groupe{

  background-color:orangered;

border-top-right-radius: 15px;
border-bottom-right-radius: 15px;
border-style: none;
color: white;


}



.custom-select{
  background:white;
}

.color-sit{
  color: white;
}



select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}

.a-center{
  align-content: center;
  text-align: center;

margin-top: 15px;
}

</style>
