<template>
  <div>
    <b-alert show variant="primary">
      <b-icon icon="person-fill" variant="primary"></b-icon>
      <b>
        About
      </b></b-alert
    >
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="BIOGRAPHY" active><Biography /></b-tab>
        <b-tab title="CONTACT & BASIC INFO"> </b-tab>
        <b-tab title="WORK & EDUCATION"><WorkAndEducation /></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Biography from "../biography";

export default {
  components: {
    Biography,


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
