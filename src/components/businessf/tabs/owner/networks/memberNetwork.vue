<template>
  <div class="mt-3">
    <div>
      <b-tabs pills content-class="mt-3 f-left">
        <b-tab :title="$t('network.People')" active> 
          <People /> 
        </b-tab>
        <b-tab :title="$t('network.Businesses')"> 
          <Businesses /> 
        </b-tab>
        <b-tab :title="$t('network.Network')"> 
          <Networks /> 
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import People from "./people/people";
import Businesses from "./businesses/businesses";

export default {
  name: "memberNetwork",
  components: {
    People,
    Businesses
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" }
      ]
    };
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
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
