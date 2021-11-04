<template>
  <div>
    <b-alert show class="primary-bg">
      <b-icon icon="building" class="purple"></b-icon>
      <b>
        Businesses
      </b></b-alert
    >

    <div class="business" v-if="noBusiness == false">
      <Business />
    </div>
    <div v-show="noBusiness" class="no-business">
      <b-container>
        <h2>No Businesses Listed</h2>
        <hr />
      </b-container>
      <p>User Name has no listed any business. Please check back later</p>
    </div>
  </div>
</template>

<script>
import Business from '../business';
export default {
  data() {
    return {
      noBusiness: false,
    };
  },
  components: {
    Business,
  },
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

.purple {
  color: purple;
}
.primary-bg {
  background-color: rgb(242, 242, 242);
  border: none;
}

h2,
p {
  text-align: center;
}

.business {
  min-height: 450px;
}

@media only screen and (max-width: 768px) {
  .no-business {
    width: 100%;
    margin-left: 0px;
  }
}
</style>
