<template>
  <div>
    <b class="basic">Basic Infomation</b>
    <hr />
    <div class="basic row">
      <div class="col">
        Date Of Birth:
      </div>
      <div class="col">
        {{ info.user.dob }}
      </div>
    </div>
    <div class=" basic row">
      <div class="col">
        Gender:
      </div>
      <div class="col">
        {{ info.user.gender }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateOfBirth: "20/20/2020",  
      gender: "Male"
    };
  },
  methods: {},

   computed:{

    info(){
      return this.$store.state.follower.profileIntro;
    }

  },
};
</script>

<style scoped>
.details {
  display: flex;
}

.basic {
  text-align: left;
  font-family: Helvetica;
  font-size: 14px;
}
@media only screen and (max-width: 768px) {
  .basic {
    margin-left: 20px;
    font-size: 12px;
  }
}
</style>
