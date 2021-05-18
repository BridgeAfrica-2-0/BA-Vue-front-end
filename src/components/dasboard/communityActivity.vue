<template>
  <div>
    <b-card class="px-md-3 border shadow "  >

      <span> <h6 class="title">    <b> Post </b>  </h6>   </span>

   <div class="s-card " >
     

      <b-row class="mt-2 m-0 p-0">
        <b-col cols="12" class="mt-4 m-0 p-0" style="margin-right:20px">
          <b-row class="">
            <b-col  md="2" sm="3" cols="3" class="a-center">
              <b-avatar
                class="d-inline-block maleft avat"
                variant="primary"
                src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
               
                
              ></b-avatar>
            </b-col>
            <b-col sm="9" md="10" cols="9" class="pt-2" >
                <div class="m-left">
              <h6 class="m-0 font-weight-bolder name">
                User name here
                
              </h6>
              <p class="name">1h Ago</p>



              <b-row>
            <b-col md="6" sm="12" class="mt-2">
              <p class="text">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.😛
              </p>
            </b-col>


            <b-col md="4"  sm="12" class="mt-2">
                 <img
                class="img-fluid r-image"
                src="@/assets/img/photo1.jpg"
                alt="Photo1"
              />
            </b-col>



          </b-row>











 
          <b-row>
           
            <b-col class="mt-1">
              <span class="mr-3"
                ><b-icon
                  icon="suit-heart"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                23</span
              >
              <span
                ><b-icon
                  icon="chat-fill"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                123</span
              >





              <span style="float:right">
               <!--   <b-link> <u> view more  </u> </b-link>   -->
                
                </span>
              



            </b-col>
          </b-row>




                </div>


            </b-col>
          </b-row>


         
          
        </b-col>
      </b-row>










































   </div>

      
      
    </b-card>
  </div>


  
</template>

<script>
import "@morioh/v-lightbox/dist/lightbox.css";

export default {
  name: "postsDahboard",
  data() {
    return {
      images: [
        "https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg",
        "https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg",
        "https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg",
        "https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg",
        "https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg",
        "https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg",
        "https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg",
        "https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg",
        "https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg",
        "https://i.wifegeek.com/200426/71d3aa60.jpg",
        "https://i.wifegeek.com/200426/d17ce9a0.jpg",
        "https://i.wifegeek.com/200426/7c4deca9.jpg",
        "https://i.wifegeek.com/200426/64672676.jpg",
        "https://i.wifegeek.com/200426/de6ab9c6.jpg",
        "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
        "https://i.wifegeek.com/200426/4085d03b.jpg",
        "https://i.wifegeek.com/200426/177ef44c.jpg",
        "https://i.wifegeek.com/200426/d74d9040.jpg",
        "https://i.wifegeek.com/200426/81e24a47.jpg",
        "https://i.wifegeek.com/200426/43e2e8bb.jpg"
      ],
      imagees: [
        "https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg",
        "https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg"
      ]
    };
  }
};
</script>

<style scoped>



 
@media only screen and (min-width: 768px) {

  

  .title{
    font-size: 20px;
  }


  .name{
     font-size: 16px;
  }

  .text{
     
     font-family:Helvetica Neue ;
     font-size:14px;
  }

  .avat{
    width:64px;
    height: 64px;
  }



.maleft{
      width:64px;
    height: 64px;
      margin-right: -22px;
}

.r-image{
    border-radius: 10px;
    width: 200px;
    height: 200px;
}



 }






 
@media only screen and (max-width: 768px) {

  
  .title{
    font-size: 16px;
  }

  .name{
     font-size: 14px;
  }

  .text{
      font-family:Helvetica Neue ;
     font-size:12px;
  }

  .avat{
    width:64px;
    height: 64px;
  }

  .r-image{
    border-radius: 10px;
    width: 200px;
    
}




   
 }






.logo-img{
  width: 60px;
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







.action-intro {
  font-size: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.color-site {
  color: #e75c18;
}
 .a-center{

   text-align: center;
 }

 


@media only screen and (max-width: 768px) {
   
.maleft{

  margin-right: -22px;
  width: 64px;
    height: 64px;
}
}



.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.25rem;
}

@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
  }
}
@media (min-width: 576px) {
  .lb-grid {
    height: 300px;
  }
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
}
@media (min-width: 1200px) {
  .lb-grid {
    height: 500px;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }
}

.m-left{
    margin-left:-10px;
}




.s-card{
  height:570px; 
  overflow: auto; 
  overflow-x: hidden;

  margin-right: 10px;

}


</style>
