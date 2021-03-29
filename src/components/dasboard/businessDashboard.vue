<template>
  <div>
    <b-card class="border shadow " style="height:400px">
     
      <span>    
      
          <h3 class="mb-3">
                  <img class="img-fluid picture" src="@/assets/icons/bus.png" style="width: 60px;" /> 

                Business
                <h6 class="float-right text-success font-weight-bolder">
                  <b-button variant="outline-primary" size="sm"
                    ><b-icon-star></b-icon-star> &nbsp;&nbsp;Upgrade
                    Plan</b-button
                  >
                </h6>
              </h3>
             


      </span>


              <div class="d-flex col-md-12 mt-2">
                <img class="img-fluid picture" src="@/assets/img/photo2.jpg" />
                <div class="text-lost">
                  <b>Business Name 1</b>
                  <p class="mb-1">
                    1.1M Community
                    <span class="float-right"
                      >Current Plan:
                      <span class="text-success">Basic</span></span
                    >
                  </p>
                  <p class="mb-1 mb-3">Categorie Name Here</p>
                  <p class="mb-1">
                    <b-icon-person-fill
                      class="text-primary"
                    ></b-icon-person-fill>
                    Visit Profile
                  </p>
                  <p class="mb-1 ">
                    <b-icon-chat-fill class="text-primary"></b-icon-chat-fill>
                    Message
                    <span class="badge rounded-pill bg-primary float-right mt-1"
                      >3</span
                    >
                  </p>
                  <p class="mb-1 ">
                    <b-icon-bell-fill class="text-primary"></b-icon-bell-fill>
                    Notifications
                    <span class="badge rounded-pill bg-primary float-right mt-1"
                      >9</span
                    >
                  </p>
                  <p class="mb-1 ">
                    <b-icon-globe class="text-primary"></b-icon-globe>
                    Visit Website
                  </p>
                  <p class="mb-1 ">
                    <b-icon-shop class="text-primary"></b-icon-shop>
                    Market Place
                  </p>
                </div>
              </div>
        
         






        
      
    </b-card>
  </div>
</template>

<script>


export default {
  name: "businessDashboard",
 
  
};
</script>

<style scoped>
.picture {
  border-radius: 10px;
  width: 190px;
  flex-basis: 40%;
}

.text-lost {
  flex-basis: 90%;
  padding-left: 30px;
}

.colum {
  justify-content: space-around;
}

.chart {
  display: block;
  height: 315px;
  width: 400px;
}

.text-design {
  line-height: 40px;
}
</style>
