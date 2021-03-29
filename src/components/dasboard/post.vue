<template>
  <div>
    <b-card class="px-md-3 border shadow "  >

      <span> <h4>   <img class="img-fluid picture" src="@/assets/icons/post.png" style="width: 60px;" />  Post  <h6 style="float:right">   <b-link> <u> see all </u>  </b-link>    </h6>  </h4>   </span>


     

     <div  class="s-card"> 

      <b-row class="mt-2 m-0 p-0">
        <b-col cols="12" class="mt-4 m-0 p-0">
          <b-row class="">
            <b-col cols="2" md="2">
              <b-avatar
                class="d-inline-block mt-1"
                variant="info"
                src="https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg"
                size="5em"
              ></b-avatar>
            </b-col>
            <b-col cols="10" md="10" class="pt-2" >
                <div class="m-left">
              <h6 class="m-0 font-weight-bolder">
                User name here
                
              </h6>
              <p>1h Ago</p>



              <b-row>
            <b-col cols="8" class="mt-2">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.😛
              </p>
            </b-col>


            <b-col cols="4" class="mt-2">
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
                  <b-link> <u> view more  </u> </b-link>
                
                </span>
              



            </b-col>
          </b-row>




                </div>


            </b-col>
          </b-row>


         
          
        </b-col>
      </b-row>














































      <b-row class="mt-2 m-0 p-0">
        <b-col cols="12" class="mt-4 m-0 p-0">
          <b-row class="">
            <b-col cols="2" md="2">
              <b-avatar
                class="d-inline-block mt-1"
                variant="info"
                src="https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg"
                size="5em"
              ></b-avatar>
            </b-col>
            <b-col cols="10" md="10" class="pt-2" >
                <div class="m-left">
              <h6 class="m-0 font-weight-bolder">
                User name here
                
              </h6>
              <p>1h Ago</p>



              <b-row>
            <b-col cols="8" class="mt-2">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.😛
              </p>
            </b-col>


            <b-col cols="4" class="mt-2">
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
                  <b-link> <u> view more  </u> </b-link>
                
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
.action-intro {
  font-size: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.color-site {
  color: #e75c18;
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

.r-image{
    border-radius: 10px;
}



.s-card{
  height:550px; 
  overflow: auto; 
  overflow-x: hidden;
  padding-left:20%;
  padding-right:20%;

}


</style>
