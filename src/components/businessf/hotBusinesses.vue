<template>
  <div class="hot mt-2 p-2">
    <b-row>
      <b-col>
        <p><b>{{$t("businessf.Hot_Businesses")}}</b></p>
      </b-col>
      <b-col class="col-2">
        <fas-icon :icon="['fas', 'angle-left']" />
        <fas-icon :icon="['fas', 'angle-right']" />
      </b-col>
    </b-row>

    








    



    <div class="people-style shadow">
      <b-row>
        <b-col md="3"  xl="5"  lg="5" cols="5"  sm="3">
          <div class="center-img" >




              <splide :options="options" class="r-image">
    <splide-slide >
       

            <img
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              
              class="r-image"
            />



    </splide-slide>
              </splide>


          </div>
        </b-col>
        <b-col md="5" cols="7"  lg="7" xl="7"  sm="5">
          <p class="textt">
            <strong class="title"> {{$t("businessf.Super_Car_ltd")}} </strong> <br />
             {{$t("businessf.Car_marketing")}}  
              <br />  {{$t("businessf.20k_Community")}} <br />
            
            <span class="location"> <b-icon-geo-alt class="ico" ></b-icon-geo-alt> {{$t("businessf.Douala_cameroon")}}  </span> <br /> 
            

             {{$t("businessf.super_best_car_seller_in_the_world")}} 
            adipisicing elit. lorem epsep this is  <b-link>Read More</b-link>
          </p>
        </b-col>






        <b-col lg="12" xl="12" md="4" cols="12" sm="4">
          <div class="s-button">
     <b-row>  <b-col md="12"  lg="4"  xl="4" sm="12" cols="4" class="mt-2 text-center">    

            <b-button block size="sm" class="b-background shadow " variant="primary">
                <i class="fas fa-user-plus  fa-lg btn-icon "></i>  <span class="btn-com">{{$t("businessf.Community")}}</span>
            </b-button>   

            </b-col>  

        <b-col md="12"  lg="4"  xl="4" sm="12" cols="4" class="mt-2 text-center">  

           

             <b-button block size="sm" class="b-background shadow " variant="primary">
                <i class="fas fa-envelope   fa-lg btn-icon "></i>  <span class="btn-text">{{$t("businessf.Message")}}</span>
            </b-button>   


            </b-col>  

            <b-col  md="12"  lg="4"  xl="4" sm="12" cols="4"  class="mt-2 text-center">  

              <b-button block size="sm" class="b-background shadow " variant="primary">
                <i class="fas fa-map-marked-alt  fa-lg btn-icon "></i>  <span class="btn-text">{{$t("businessf.Direction")}}</span>
            </b-button> 

           

            </b-col>  
   </b-row>

          </div>
        </b-col>
      </b-row>
    </div>







  </div>
</template>

<script>
export default {};
</script>

<style scoped>


.hot {
  border: solid 1px rgb(214, 214, 214);
  border-radius: 5px;
}

p {
  text-align: left;
}

.yellow {
  background-color: #e75c18;
  color: #fff;
  border: none;
}
.follow {
  background-color: #fff;
  border: solid 1px #ccc;
  color: black;
}

.card {
  color: orange;
}
.text {
  color: #000;
  font-size: 12px;
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





@media only screen and (min-width: 768px) {
.btn-text{

   margin-left: 8px;
}

.btn-com{
  margin-left:4px;
}
.btn-icon{
  margin-top:3px;
}

.center-img{
  margin-right: -60px;
}


}


@media only screen and (max-width: 768px) {

    

    .btn-icon{
  margin-top:3px;
}


.btn-text{

   margin-left: 5px;
}


.btn-com{
  margin-left:3px;
}


}


.btnpngs{
      width: 20px;
    margin-right: 5px;
}

.btn{
  border-radius: 5px;
}


.card {
  color: orange;
}

.s-button {
  align-content: center;
  text-align: center;

  padding: 15px;
}







@media only screen and (max-width: 768px) {
   .a-flex{
     margin-right: -15px;
   }


  .s-button {
  

  padding: 15px;
  margin-top: -15px;
}

.title{
  font-size: 16px;
   color:black;
 
 line-height: 35px;
  font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
}

.textt {
  color: #000;
  
    font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117,114,128,1);
    text-align: left;

Font-weight: normal ;
Line-height:20px ;
font-style:normal;


padding: 1px;
  text-align: left;

  margin-left: -30px;

  margin-right: -5px;

  line-height: 25px;
}

.location{

  margin-bottom: 30px;
}

.btn{
  padding-top: 6px;
  font-size:10px;

  Height : 28px;
Width:85px

}



.r-image {
  border-radius: 8px;

 Height : 100px;
Width:100px

}



}






@media only screen and (min-width: 768px) {

.title{
  font-size: 20px;
   color:black;
 
 line-height: 35px;
  font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
}

.textt {
  color: #000;
  
    font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117,114,128,1);
    text-align: left;

Font-weight: normal ;
Line-height:20px ;
font-style:normal;


padding: 1px;
  text-align: left;

 margin-left: 30px;

  margin-right: -5px;

  line-height: 25px;
}

.location{

  margin-bottom: 30px;
}




.btn{
  padding-top: 6px;
Height : 38px;
Width:110px;
    font-size:12px;
      margin-left: -10px;

 padding-top: 8px;
    

}






.r-image {
  border-radius: 8px;

 Height : 160px;
Width:160px

}



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
  

  display: flex;
}

.ico {
  margin-right: 5px;
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

  
 

  padding: 7px;
}





.btn {
 

  display: flex;

    padding-right: 60px;
}

h4{
  font-size: 15px;
}

}






@media only screen and (max-width: 520px){

.btn {
    display: flex;
    
}
}

@media only screen and (min-width: 992px) and (max-width: 1331px) {

       

       



  .btn{

    width: 98px;
    height: 33px;
    font-size: 12px;
    margin-left: -10px;
    padding-top: 8px;
}


}


</style>
