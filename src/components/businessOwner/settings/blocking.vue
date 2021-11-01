<template>
  <b-container>
    <b-container class="bv-example-row">
      <p class="t-left text">
        {{$t("businessowner.Blocked_users_can_no_longer_see_things_you_post_on_your_business")}}, 
        {{$t("businessowner.invite_your_business_to_networks")}}, 
        {{$t("businessowner.start_a_conversation")}}, 
        {{$t("businessowner.or_follow_your_business")}}.
      </p>
    </b-container>

    <b-container class="bv-example-row text">
      <b-li-group>
        <b-li class="d-flex align-items-center m-list">
          <b-avatar class="mr-3" size="4em"></b-avatar>
          <span class="mr-auto username">J. Circlehead</span>
          <span class=""><b-link href="#">{{$t("businessowner.Unblock")}}</b-link></span>
        </b-li>
       <hr width="100%" />

        <b-li class="d-flex align-items-center">
          <b-avatar
            text="BV"
            class="mr-3"
            size="4em"
          ></b-avatar>
          <span class="mr-auto username">itz blec blec</span>
          <span class=""><b-link href="#">{{$t("businessowner.Unblock")}}</b-link></span>
        </b-li>

         <hr width="100%" />

        <b-li class="d-flex align-items-center m-list">
          <b-avatar class="mr-3" size="4em"></b-avatar>
          <span class="mr-auto username">J. Circlehead</span>
          <span class=""><b-link href="#">{{$t("businessowner.Unblock")}}</b-link></span>
        </b-li>
        <hr width="100%" />


        <b-li class="d-flex align-items-center">
          <b-avatar
            variant="primary"
            text="BV"
            class="mr-3"
            size="4em"
          ></b-avatar>
          <span class="mr-auto username">itz blec blec</span>
          <span class=""><b-link href="#">{{$t("businessowner.Unblock")}}</b-link></span> 
         
        </b-li>
        <hr width="100%" />


      </b-li-group>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "blocking"
};
</script>

<style scoped>
.m-list {
  margin-bottom: 15px;
  margin-top: 10px;
}
.t-left {
  text-align: left;
}
.a-text {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}

@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>
