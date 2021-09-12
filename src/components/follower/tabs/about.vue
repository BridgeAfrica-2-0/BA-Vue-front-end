<template>
  <div>
    <b-icon class="icon" variant="primary" icon="person-fill"></b-icon> About

    <hr />

    <b-card no-body class="desktop">
      <b-tabs pills card vertical>
        <b-tab title="BIOGRAPHY" active><Biography /></b-tab>
        <b-tab title="CONTACT & BASIC INFO"><ContactandInfo /> </b-tab>
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
import ContactandInfo from "../contactAndBasicInfo";
import WorkAndEducation from "../workAndEducation";
export default {
  components: {
    Biography,
    ContactandInfo,
    WorkAndEducation,
  },
};
</script>

<style scoped>
.mobile {
  display: none;
}

.icon {
  height: 24px;
  width: 24px;
}
.primary-bg {
  background-color: rgb(242, 242, 242);
  border: none;
}

span {
  margin-left: 8px;
}

@media only screen and (max-width: 768px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }
  span {
    margin-left: 6px;
  }
}
</style>
