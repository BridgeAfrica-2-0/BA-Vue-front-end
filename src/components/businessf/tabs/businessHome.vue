<template>
  <div >
    <b-row>
      <b-col md="4" >
        <Intro/>
        <Invite />
        <Personalise/>
      </b-col>
      <b-col md="8">
       <Chat/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "../intro";
import Invite from "../invite";
import Personalise from "../personalise"
import Chat from "../chat";
export default {
  name: "posts",
  components: {
    Intro,
    Invite,
    Chat,
    Personalise
  }
};
</script>

<style scoped></style>
