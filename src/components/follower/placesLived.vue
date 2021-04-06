<template>
  <div>
    <b class="place">Places you lived</b>
    <hr />

    <p class="place">
      Current City
    </p>
    <p class="place"><b>Cameroon, South Africa</b></p>
    
    <hr />

    <p class="place">
      Home City
    </p>
    
    <p class="place"><b>New York, United States</b></p>
    
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
  .place{
    margin-left: 20px;
  }
}
</style>
