<template>
  <div>
    <b-row>
      <b-col md="12" lg="5" xl="4" class="mobile-center">
        <Intro />
        <Media />
        <Followers  />
        <HotBusiness  class="mb-md-3"  />
      </b-col>

      <b-col md="8" lg="7" xl="8">
        <Post />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "../intro";
import Followers from "@/components/businessOwner/tabs/comunitiDashboard";
import HotBusiness from "../hotBusinesses";
import Post from "../ownerPost";
import Media from "../../media";
export default {
  name: 'posts',
  components: {
    Intro,
    Followers,
    HotBusiness,
    Post,
    Media,
  },

  methods : {

    
  }
};
</script>

<style scoped>   


 @media only screen and (min-width: 1200px) {
 .postpadding{

  padding-left:70px;
  padding-right:60px
 }
 }

 @media only screen and (max-width: 768px) {
 mobile-padding{

       padding: 4px;
    padding-left: 16px;
 }
 }
 </style>
