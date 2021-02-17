<template>
  <div>
    <b-card>
      <b-row class="mb-1">
        <b-col>
          <b-avatar class="mr-3"></b-avatar>
          <span><b-link>J. Circlehead</b-link></span>
          <p class="ml-5">
            Cameroon,
            <span class="desktop"
              ><b-icon icon="house" variant="primary"></b-icon> 2,
              <b-icon icon="globe" variant="primary"></b-icon> 3,
              <b-icon icon="people" variant="primary"></b-icon> 3,
            </span>
          </p>
        </b-col>
        <b-col class="col-2 options">
          <b-button variant="outline-primary">Unfollow</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-avatar class="mr-3"></b-avatar>
          <span><b-link>J. Circlehead</b-link></span>
          <p class="ml-5">
            Cameroon,
            <span class="desktop"
              ><b-icon icon="house" variant="primary"></b-icon> 2,
              <b-icon icon="globe" variant="primary"></b-icon> 3,
              <b-icon icon="people" variant="primary"></b-icon> 3,
            </span>
          </p>
        </b-col>
        <b-col class="col-2 options">
          <b-button variant="outline-primary">Unfollow</b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .options {
    position: relative;
    left: -75px;
  }
}
</style>
