<template>
  <div>
    <b class="place">Places you lived</b>
    <hr />
    <p class="place"><b>Cameroon, South Africa</b></p>
    <p class="place">
      Current City
    </p>
    <hr />
    <p class="place"><b>New York, United States</b></p>
    <p class="place">
      Home City
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .place {
    margin-left: 20px;
  }
}
</style>
