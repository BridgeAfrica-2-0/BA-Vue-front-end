<template>
  <div>
    <b class="work">{{ $t("follower.WorkPlace") }}</b>
    <hr />     

<div
          class="row"
          v-for="workPlace in work "   
          :key="workPlace.id"
        >

    <b-list-group-item class="d-flex align-items-center mb-4 item  border-none">
    <!--  <b-avatar class="mr-3 avatar"></b-avatar> -->
     

      <div class="media-body">
              <h6 class="mb-0">
                <b>{{ workPlace.company_name }} ({{workPlace.position}})</b>
              </h6>
              <b>{{ workPlace.start_year }}/{{workPlace.start_month}}/{{workPlace.start_day}} -   {{ workPlace.end_year }}/{{workPlace.end_month}}/{{workPlace.end_day}}</b>
              <p class="mb-1">
                {{ workPlace.job_responsibilities }}
              </p>
            </div>

    </b-list-group-item>


</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed:{
       work(){
      return this.$store.state.follower.profileIntro.user_experience;
    },

     workk(){
      return this.$store.state.follower.profile_about;
    }}
};
</script>

<style scoped>
.item {
  border: none;
}
.avatar {
  position: relative;
  top: -28px;
}
.work {
  font-size: 14px;
  font-family: Helvetica;
}
p {
  font-size: 14px;
  font-family: Helvetica;
}
@media only screen and (max-width: 768px) {
  .avatar {
    position: relative;
    top: -40px;
  }
  .work {
    margin-left: 20px;
    font-size: 12px;
    font-family: Helvetica;
  }
  p {
    font-size: 12px;
    font-family: Helvetica;
  }
}
</style>
