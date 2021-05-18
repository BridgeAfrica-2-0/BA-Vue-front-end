<template>
  <div>
    <b-card class="border shadow card " style="height:250px">
     
      <span>    
      
          <h3 class="name">    
               <b>   Profile  </b>
                <h6 class="float-right text-success font-weight-bolder">
                  <b-button variant="outline-primary upgrade-btn" size="sm"
                    ><b-icon-star></b-icon-star> &nbsp;&nbsp;Upgrade
                    Plan</b-button
                  >
                </h6>
              </h3>
             


      </span>


              <div class="d-flex col-md-12 mt-2">
    <b-avatar class="p-avater" variant="primary" src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg" size="5em"></b-avatar>
                             
               



                <div class="text-lost">
                 <h6> <b class="name">  Profile's Name </b> </h6>
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

 
@media only screen and (min-width: 768px) {

  .upgrade-btn{

    width:146px;
    height: 38px;
  }

  .name{
    font-size: 20px;
  }

   .text-lost { 
    font-size: 14px;

     flex-basis: 90%;
  padding-left: 30px;
 
  font-family: Helvetica Neue, 
 }
 }



 @media only screen and (max-width: 768px) {

  .upgrade-btn{

    width:126px;
    height: 33px;
    
  }

  .card{
    padding:5px;
    padding-top: 10px;

  }

  

   .name{
    font-size: 16px;
  }

  .text-lost { 
    font-size: 12px;

     flex-basis: 100%;
  padding-left: 10px;
 
  font-family: Helvetica Neue, 
 }

 }

h6{
  font-size: 12px;
}
.picture {
  border-radius: 10px;
  width: 190px;
  flex-basis: 40%;
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
