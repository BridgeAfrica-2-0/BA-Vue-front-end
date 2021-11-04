<template>
  <div>
    <b-card>
      <b-tabs content-class="mt-3" pills>
        <b-tab title="People" active><People /></b-tab>
        <b-tab title="Businesses"><Businesses /></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import People from './people/people';
import Businesses from './businesses/businesses';
export default {
  components: {
    People,
    Businesses,
  },
};
</script>

<style scoped>
.btn {
  background-color: #fff;
  color: #e75c18;
  border: solid 1px #e75c18;
}

.btn:hover {
  color: #fff;
  border: none;
  background-color: #e75c18;
}
@media only screen and (max-width: 768px) {
  .options {
    position: relative;
    left: -75px;
  }
}
</style>
