<template>
  <div>
    <b-row>


       <b-col md="12" lg="5" xl="4" >


       <Intro/>
       <Followers/>
       <Media/>
      </b-col>



         <b-col md="8"  lg="7"  xl="8">


       <Post/>


      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "../../intro";
import Followers from "../sidebarcommunity";
import Media from "../../media";
import Post from "./owner_post"
export default {
  name: "posts",
  components :{
    Intro,
    Followers,
    Media,
    Post
  }
};
</script>

<style scoped></style>
