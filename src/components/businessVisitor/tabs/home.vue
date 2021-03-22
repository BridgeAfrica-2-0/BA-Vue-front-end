<template>
  <div >
    <b-row>
      <b-col md="4" >
        <Intro/>

        <hotBusiness/>
        
      </b-col>
      <b-col md="8">
       <Post/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "../bfintro";

import hotBusiness from "../hotBusiness";
import Post from "../ownerPost";
export default {
  name: "posts",
  components: {
    Intro,
  
    hotBusiness,
    Post
  }
};
</script>

<style scoped></style>
