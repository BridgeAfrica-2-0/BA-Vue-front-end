<template>
  <div >
    <b-row>
      <b-col md="4" >
        <Intro/>
        <Invite />
        <Personalise/>
      </b-col>
      <b-col md="8">
       <CreatePost/>
       <Post/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "../intro";
import Invite from "../invite";
import Personalise from "../personalise";
import CreatePost from "../../createPost";
import Post from "../../post";
export default {
  name: "posts",
  components: {
    Intro,
    Invite,
    CreatePost,
    Personalise,
    Post
  }
};
</script>

<style scoped></style>
