<template>
  <div>
    <b-card class="card">
      <b-row>
        <b-col>
          <h4>
             <img class="img-fluid picture logo-img" src="@/assets/icons/bus.png"  /> 
            <span class="ml-2">BUSINESSES</span>
          </h4>
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

.card {
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
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
  .card {
    height: 1250px;
  }
  .busi {
    margin-bottom: 160px;
  }
}





.logo-img{

  width: 40px;
}


h4{
  font-size: 15px;
}
@media only screen and (max-width: 768px) {
  


h4{
  font-size: 15px;
}


.logo-img{
  width: 30px;
}
.see-all-link{
  font-size: 10px;
}

}



</style>
