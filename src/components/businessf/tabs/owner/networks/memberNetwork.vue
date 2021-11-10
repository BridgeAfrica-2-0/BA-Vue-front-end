<template>
  <div class="mt-3">
    <div>
      <b-tabs pills content-class="mt-3 f-left">
        <b-tab title="People" active> 
          <People /> 
        </b-tab>
        <b-tab title="Businesses"> 
          <Businesses /> 
        </b-tab>
        <b-tab title="Network"> 
          <Networks /> 
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import People from "./people/people";
import Businesses from "./businesses/businesses";
import Networks from "./networks/networks";

export default {
  name: "memberNetwork",
  components: {
    People,
    Businesses,
    Networks
  },
};
</script>

<style scoped>
hr {
  border: solid 1px dimgray;
}

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

.f-left {
  text-align: left;
  align-content: left;
}
@media only screen and (max-width: 768px) {
  .options {
    position: relative;
    left: -75px;
  }
}
</style>
