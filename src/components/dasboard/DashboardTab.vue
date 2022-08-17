<template>
  <div>
   
   <b-card  style=" height: 900px;     padding-bottom: 50px;"  >
      <b-tabs class="pr-2 pl-2" content-class=" p-1" Fill justified  active-nav-item-class="active-tab-item"
        active-tab-class="active-tab">   

          <b-tab title="Activities" title-link-class="title-linkClass"  active>  
             <CommunityActivity />
             <CommunityBactivity v-if="usertype != 'owner'" /> 
            </b-tab>

          <b-tab title="Profile" title-link-class="title-linkClass" > <ProfileSettings /> </b-tab>
          <b-tab title="Settings" title-link-class="title-linkClass" > 
            
            <ProfileSettings />
            
             </b-tab>

        </b-tabs>

  </b-card>
  </div>
</template>

<script>

import CommunityActivity from "@/components/dasboard/communityActivity";

import communityBactivity from "@/components/dasboard/communityBactivity";
import ProfileSettings from "@/components/dasboard/ProfileSettings";

export default {
  name: "activitiDashboard",

  props: ["usertype"],
   components: {
   
     communityBactivity,
     CommunityActivity,
     ProfileSettings,
     
  },
};
</script>

<style scoped></style>
