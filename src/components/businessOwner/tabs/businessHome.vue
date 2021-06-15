<template>
  <div>
    <b-row>
      <b-col md="12" lg="5" xl="4" >
        <Intro />
     
      <comunitiDashboard />
      
       <br /> 



      <b-card>    

      <img
        src="@/assets/img/upgrade.png"
        class="img-fluid  banner"
        alt="Kitten"
      />

      </b-card>
      </b-col>

      <b-col md="8"  lg="7"  xl="8">
        <Post />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "../intro";
import comunitiDashboard from "./comunitiDashboard";
//import Personalise from "./personalise";
import Post from "../ownerPost";
export default {
  name: "posts",
  components: {
    Intro,

    comunitiDashboard,
   // Personalise,
    Post
  }
};
</script>

<style scoped></style>


