<template>
  <div v-if="profession">
    <b class="profession">Profession</b> 
    <hr />
      <div class="datails">
       
            <span class="mr-auto"> {{profession}} </span>
         
      </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" }
      ]
    };
  },

  computed:{

    profession(){
      return this.$store.state.follower.profileIntro.user.profession;
    }
  }

};
</script>
<style scoped>
.profession {
  font-size: 14px;
  font-family: Helvetica;
}

p {
  font-size: 14px;
  font-family: Helvetica;
}
@media only screen and (max-width: 768px) {
  .profession {
    font-size: 12px;
  }
  p {
    font-size: 12px;
    font-family: Helvetica;
  }
}
</style>
