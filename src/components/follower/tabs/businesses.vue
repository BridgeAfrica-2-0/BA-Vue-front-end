<template>
  <div>
  
      <fas-icon class="primary mr-2 pt-1 icon-size primary" :icon="['fas', 'handshake']" /> Businesses
       
        <hr /> 






    <div class="business" v-if="noBusiness == false">

      

     <b-row>   <b-col lg="6">   
      <Business />    </b-col>      
      
        <b-col lg="6">  
      <Business />     </b-col>   
      
          </b-row>


 
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
import Business from "../business";
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

.icon {
  height: 24px;
  width: 24px;
}

span {
  margin-left: 8px;
}
.primary-bg {
  background-color: rgb(242, 242, 242);
  border: none;
}

h2,
p {
  text-align: center;
  font-size: 12px;
  font-family: Helvetica;
}

@media only screen and (max-width: 768px) {
  p {
    font-size: 12px;
    font-family: Helvetica;
  }
  span {
    margin-left: 6px;
  }
}
</style>
