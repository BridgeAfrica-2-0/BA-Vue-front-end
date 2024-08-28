<template>
  <div>
    <b-alert show class="primary-bg">
      <b-icon class="purple" icon="person-fill"></b-icon>
      <b>
        {{ $t("general.About") }}
      </b></b-alert
    >
    <b-card no-body class="desktop">
      <b-tabs pills card vertical>
        <b-tab title="BIOGRAPHY" active><Biography /></b-tab>
        <b-tab title="CONTACT & BASIC INFO"><ContactAndInfo /> </b-tab>
        <b-tab title="WORK & EDUCATION"><WorkAndEducation /></b-tab>
      </b-tabs>
    </b-card>
    <b-card no-body class="mobile p-2">
      <b-tabs pills card justified>
        <b-tab title="BIOGRAPHY" active><Biography /></b-tab>
        <b-tab title="CONTACT & BASIC INFO"><ContactAndInfo /> </b-tab>
        <b-tab title="WORK & EDUCATION"><WorkAndEducation /></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Biography from "../biography";
import ContactAndInfo from "../contactAndBasicInfo";
import WorkAndEducation from "../workAndEducation";
export default {
  components: {
    Biography,
    ContactAndInfo,
    WorkAndEducation
  }
};
</script>

<style scoped>
.mobile {
  display: none;
}

.purple {
  color: purple;
}
.primary-bg {
  background-color: rgb(242, 242, 242);
  border: none;
}

@media only screen and (max-width: 768px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>
