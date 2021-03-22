<template>
  <div>
    <b-alert show variant="primary">
      <b-icon icon="building" variant="primary"></b-icon>
      <b>
        Businesses
      </b></b-alert
    >

    <div v-if="noBusiness == false">
      <Business />
    </div>
    <div v-if="noBusiness" class="no-business">
      <b-container>
        <h2>No Businesses Listed</h2>
        <hr />
      </b-container>
      <p>User Name has no listed any business. Please check back later</p>
    </div>
  </div>
</template>

<script>
import Business from "../business";
export default {
  data() {
    return {
      noBusiness: false
    };
  },
  components: {
    Business
  }
};
</script>

<style scoped>
.no-business {
  border: 1px solid #ccc;
  width: 50%;
  height: 40%;
  padding: 40px;
  margin-left: 270px;
}

h2,
p {
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .no-business {
      width: 100%;
    margin-left: 0px;
  }
}
</style>
