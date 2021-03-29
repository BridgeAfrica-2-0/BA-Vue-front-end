<template>
  <div>
    <b-card class="border shadow " style="height:250px">
     
      <span>    
      
          <h3 class="">    <img class="img-fluid picture" src="@/assets/icons/person.png" style="width: 60px;" /> 
                 Profile
                <h6 class="float-right text-success font-weight-bolder">
                  <b-button variant="outline-primary" size="sm"
                    ><b-icon-star></b-icon-star> &nbsp;&nbsp;Upgrade
                    Plan</b-button
                  >
                </h6>
              </h3>
             


      </span>


              <div class="d-flex col-md-12 mt-2">
    <b-avatar class="p-avater" variant="primary" src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg" size="7em"></b-avatar>
                             
               



                <div class="text-lost">
                 <h4> <b>  Profile's Name </b> </h4>
                  <p class="mb-1">
                    1.1M Community
                    <span class="float-right"
                      >Current Plan:
                      <span class="text-success">Basic</span></span
                    >
                  </p>
                  
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
                 
                </div>
              </div>
        
         






        
      
    </b-card>
  </div>
</template>

<script>


export default {
  name: "profile",
 
  
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
