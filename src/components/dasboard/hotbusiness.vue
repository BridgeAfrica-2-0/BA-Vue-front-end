
<template>
  <div>

      <b-card class="border shadow "> 

        <span> <h4>   <img class="img-fluid picture" src="@/assets/icons/bus.png" style="width: 60px;" /> <span class="pop">  HOT BUSINESSES  </span>  </h4>   </span>




           <div class=" s-card  p-tab">

                  

  






















    <div class="people-style shadow">
      <b-row>
        <b-col md="5" xl="3" lg="5" cols="5"  sm="5">
          <div style="height: 100%;">
            <img
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              width="100%"
              height="90%"
              class="r-image"
            />
          </div>
        </b-col>
        <b-col md="6" cols="7" sm="7">
          <p class="text">
            <strong> Super Car ltd </strong> <br />
            <strong> Category : </strong> Car marketing <br />
            <strong> Community : </strong> 20k <br />
            <strong> Location :</strong> cameroon <br />
            <strong> Keyword :</strong> car,swag <br />

            <strong>About:</strong> super best car seller in the world
            adipisicing elit. <b-link>Read More</b-link>
          </p>
        </b-col>






        <b-col lg="12" md="12" xl="3" cols="12" sm="12">
          <div class="s-button">
     <b-row>  <b-col md="4"  lg="4"  xl="12" sm="4" cols="4" class="mt-md-2">    

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="plus-circle"> </b-icon> Community
            </b-button>

            </b-col>  

        <b-col md="4"  lg="4"  xl="12" sm="4" cols="4" class="mt-md-2">  

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="chat"> </b-icon> Message
            </b-button>

            </b-col>  

            <b-col  md="4"  lg="4"  xl="12" sm="4" cols="4"  class="mt-md-2">  

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon-geo-alt ></b-icon-geo-alt>  Direction
            </b-button>

            </b-col>  
   </b-row>

          </div>
        </b-col>
      </b-row>
    </div>

























           </div>
           

</b-card>

  </div>
</template>

<script>
export default {
  props: ["title", "image"]
};
</script>

<style scoped>


@media only screen and (max-width: 400px) {
.pop{
  font-size: 15px;
  color: #000;
}
}
.card {
  color: orange;
}

.s-button {
  align-content: center;
  text-align: center;

  padding: 15px;
}
.text {
  color: #000;
  font-size: 15px;

  text-align: left;

  margin-left: -15px;

  margin-right: -15px;
}
.stock {
  color: green;
}

.b1 {
  width: 100px;
  margin-left: -20px;
}

.b2 {
  width: 120px;

  margin-left: -15px;
}

.btn {
  font-size: 13px;

  display: flex;
}

.ico {
  margin-right: 5px;
}

.r-image {
  border-radius: 8px;
}



@media only screen and (min-width: 768px) {
  .people-style {
  border-top-left-radius: 5px;

  border-bottom-left-radius: 5px;

  border-top-right-radius: 5px;

  border-bottom-right-radius: 5px;

  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;

  margin-right: 8px;
 

  padding: 7px;
}

}




@media only screen and (max-width: 768px) {
  .people-style {
  border-top-left-radius: 5px;

  border-bottom-left-radius: 5px;

  border-top-right-radius: 5px;

  border-bottom-right-radius: 5px;

  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;

  margin-right: 8px;
 

  padding: 7px;
}



.text {
  color: #000;
  font-size: 10px;

  text-align: left;

  margin-left: -15px;

  margin-right: -15px;
}



.btn {
  font-size: 8px;

  display: flex;

    padding-right: 60px;
}

h4{
  font-size: 15px;
}

}

</style>
