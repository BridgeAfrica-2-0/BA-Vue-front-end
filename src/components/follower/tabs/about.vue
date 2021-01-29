<<<<<<< HEAD
<template>
  <div>
    <b-alert class="alert" show variant="primary">
=======
 <template>
  <div>
    <b-alert show variant="primary">
>>>>>>> de075d57c412525aabae94d7932a6d8651db7b4e
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
<<<<<<< HEAD
          ><WorkAndEducation/></b-tab
        >
=======
          ><WorkAndEducation/></b-tab>
>>>>>>> de075d57c412525aabae94d7932a6d8651db7b4e
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

<<<<<<< HEAD
<style scoped>


@media only screen and (max-width: 600px) {
    .alert{
  width: 100%;
  
}
}

</style>
=======
<style></style>
>>>>>>> de075d57c412525aabae94d7932a6d8651db7b4e
