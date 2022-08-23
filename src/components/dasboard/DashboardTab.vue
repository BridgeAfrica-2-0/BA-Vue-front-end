<template>
  <div>
  
   <b-card  style=" height: 900px;     padding-bottom: 50px;"  >
      <b-tabs class="pr-2 pl-2" content-class=" p-1" Fill justified  active-nav-item-class="active-tab-item"
        active-tab-class="active-tab">   
       
          <b-tab title="Activities" title-link-class="title-linkClass"  active>  
             <CommunityActivity v-if="usertype == 'owner'" />
             <communityBactivity v-if="usertype != 'owner'" /> 
            </b-tab>

          <b-tab title="Profile" title-link-class="title-linkClass" > <ProfileDetails /> </b-tab>
          <b-tab title="Settings" title-link-class="title-linkClass" > 
            
            <ProfileSettings />
            
             </b-tab>

        </b-tabs>

  </b-card>
  </div>
</template>

<script>

import CommunityActivity from "@/components/dasboard/communityActivity";
import ProductBactivities from "@/components/dasboard/ProductBactivities";
import communityBactivity from "@/components/dasboard/communityBactivity";
import ProfileSettings from "@/components/dasboard/ProfileSettings";

import ProfileDetails from "@/components/dasboard/ProfileDetails";

export default {
  name: "activitiDashboard",

  props:{
    usertype:{
     
      required: true,
    }
  },

 
   components: {
   
     communityBactivity,
     CommunityActivity,
     ProfileSettings,
     ProfileDetails,
     
  },
};
</script>

<style scoped></style>
