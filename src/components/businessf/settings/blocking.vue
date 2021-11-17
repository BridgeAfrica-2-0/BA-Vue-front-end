<template>
  <b-container>
    <b-container class="bv-example-row">
      <p class="t-left">
        {{$t("businessf.Blocked_users_can_no_longer_see_things_you_post_on_your_business")}}, 
        {{$t("businessf.invite_your_business_to_networks")}}, 
        {{$t("businessf.start_a_conversation")}}, 
        {{$t("businessf.or_follow_your_business")}}.
      </p>
    </b-container>

    <b-container class="bv-example-row">
      <b-list-group>
        <b-list class="d-flex align-items-center m-list">
          <b-avatar class="mr-3" size="4em"></b-avatar>
          <span class="mr-auto">J. Circlehead</span>
          <span class="mr-auto"><b-link href="#">{{$t("businessf.Unblock")}}</b-link></span>
        </b-list>

        <b-list class="d-flex align-items-center">
          <b-avatar
            variant="primary"
            text="BV"
            class="mr-3"
            size="4em"
          ></b-avatar>
          <span class="mr-auto">itz blec blec</span>
          <span class="mr-auto"><b-link href="#">{{$t("businessf.Unblock")}}</b-link></span>
        </b-list>

        <b-list class="d-flex align-items-center m-list">
          <b-avatar class="mr-3" size="4em"></b-avatar>
          <span class="mr-auto">J. Circlehead</span>
          <span class="mr-auto"><b-link href="#">{{$t("businessf.Unblock")}}</b-link></span>
        </b-list>

        <b-list class="d-flex align-items-center">
          <b-avatar
            variant="primary"
            text="BV"
            class="mr-3"
            size="4em"
          ></b-avatar>
          <span class="mr-auto">itz blec blec</span>
          <span class="mr-auto"><b-link href="#">{{$t("businessf.Unblock")}}</b-link></span>
        </b-list>
      </b-list-group>
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
