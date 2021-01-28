<template>
  <div>
    <b-alert class="alert" show variant="primary">
      <b-icon icon="person-fill" variant="primary"></b-icon>
      <b>
        About
      </b></b-alert
    >
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="BIOGRAPHY" active><Biography /></b-tab>
        <b-tab title="CONTACT & BASIC INFO"> <ContactandInfo /> </b-tab>
        <b-tab title="WORK & EDUCATION"
          ><WorkAndEducation/></b-tab
        >
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Biography from "../biography";
import ContactandInfo from "../contactandbasicinfo";
import WorkAndEducation from "../workandeducation"
export default {
  components: {
    Biography,
    ContactandInfo,
    WorkAndEducation


  },
};
</script>

<style scoped>


@media only screen and (max-width: 600px) {
    .alert{
  width: 100%;
  
}
}

</style>
