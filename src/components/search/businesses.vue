<template>
  <div>
    <b-card class="card">
      <b-row>
        <b-col>
          <h4>Businesses</h4>
        </b-col>
        <b-col class="col">
          <b-link class="lnk">See All</b-link>
        </b-col>
      </b-row>
      <div>
        <Businesses class="busi" />
        <Businesses class="mb-2" />
      </div>
    </b-card>
  </div>
</template>

<script>
import Businesses from "./businessmain";
export default {
  components: {
    Businesses,
  },
};
</script>

<style scoped>
.button {
  margin-left: 120px;
}
.lnk {
  margin-left: 260px;
}
p {
  margin-left: -210px;
}
@media only screen and (max-width: 768px) {
  .button {
    margin-left: 0px;
  }
  .lnk {
    margin-left: 65px;
  }
  p {
    margin-left: -50px;
  }
  .card{
    height: 1020px;
  }
  .busi{
    margin-bottom: 160px;
  }
}
</style>
