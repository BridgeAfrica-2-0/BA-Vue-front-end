<template>
  <div>
    <b-alert show variant="primary">
      <b-icon icon="person-fill" variant="primary"></b-icon>
      <b>
        About
      </b></b-alert
    >
    <b-card no-body>
       <b-tabs pills card vertical class="desktop">
        <b-tab title="BIOGRAPHY" active><Biography/></b-tab>
        <b-tab title="CONTACT & BASIC INFO"> <ContactandInfo/> </b-tab>
        <b-tab title="WORK & EDUCATION"><WorkAndEducation/></b-tab>
      </b-tabs>

      <b-tabs class="mobile">
        <b-tab title="BIOGRAPHY" active><Biography/></b-tab>
        <b-tab title="CONTACT & BASIC INFO"> <ContactandInfo class="mt-2"/> </b-tab>
        <b-tab title="WORK & EDUCATION"><WorkAndEducation class="mt-2" /></b-tab>
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
    WorkAndEducation
  }
};
</script>

<style scoped>
.mobile {
  display: none;
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
