<template>
  <div class="dashboard-tab">
  
   <b-card  style=" height: 900px;overflow: hidden;padding-bottom: 50px;"  >
      <b-tabs lazy class="pr-2 pl-2" content-class=" p-1" Fill justified  active-nav-item-class="active-tab-item"
        active-tab-class="active-tab">   
       
          <b-tab title="Activities" title-link-class="title-linkClass"  active>  
             <CommunityActivity v-if="usertype == 'owner'" />
             <communityBactivity v-if="usertype != 'owner'" /> 
            </b-tab>

          <b-tab title="Profile" title-link-class="title-linkClass" >
             <ProfileDetails v-if="usertype == 'owner'" /> 
             <ProfileBdetails v-if="usertype != 'owner'"/> </b-tab>
          <b-tab title="Settings" title-link-class="title-linkClass" >
             <ProfileSettings v-if="usertype == 'owner'" /> 
             <ProfileBsettings v-if="usertype != 'owner'"/> </b-tab>

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

import ProfileBsettings from "@/components/dasboard/ProfileBsettings";
import ProfileBdetails from "@/components/dasboard/ProfileBdetails";

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
     ProfileBsettings,
     ProfileBdetails
     
  },
};
</script>

<style scoped></style>
