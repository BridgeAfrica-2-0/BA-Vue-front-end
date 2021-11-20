<template>
  <!-- <div>
    <b class="place">Places you lived</b>
    <hr />

    <p class="place">
      <b> Current City</b>
    </p>
    <p class="place"> {{info.user.city}}</p>

    <hr />

    <p class="place"> 
      <b> Home City</b>
    </p>

    <p class="place">  {{info.user.city}} </p>
  </div>  -->

  <div>
    <b class="basic">{{ $t('profilefollower.Places_you_lived') }}</b>
    <hr />
    <div class="basic row">
      <div class="col">
        {{ $t('profilefollower.Current_City') }}:
      </div>
      <div class="col">
        {{info.user.city}}
      </div>
    </div>
    <div class=" basic row">
      <div class="col">
         {{ $t('profilefollower.Home_City') }}:
      </div>
      <div class="col">
        {{ info.user.home_town }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
   computed:{

    info(){
      return this.$store.state.follower.profileIntro;
    }

  },
};
</script>

<style scoped>
p {
  font-size: 14px;
  font-family: Helvetica;
}
@media only screen and (max-width: 768px) {
  .place {
    margin-left: 20px;
  }
  p {
    font-size: 12px;
    font-family: Helvetica;
  }
}
</style>
