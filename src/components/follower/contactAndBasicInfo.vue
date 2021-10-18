<template>
  <div>
    <BasicInfo />
    <ContactInfo class="mt-3" />
  <!--  <BusinessVisited class="mt-3" /> -->
    <PlacesLived class="mt-3" />
    <WebAndSocials class="mt-3" />
  </div>
</template>

<script>
import BasicInfo from "./basicInfo";
import ContactInfo from "./contactInfo";
//import BusinessVisited from "./businessVisited";
import PlacesLived from "./placesLived";
import WebAndSocials from "./webAndSocial";
export default {
  components: {
    BasicInfo,
    ContactInfo,
  //  BusinessVisited,
    PlacesLived,
    WebAndSocials
  }
};
</script>

<style scoped>
.details {
  display: flex;
}
@media only screen and (max-width: 768px) {
}
</style>
