<template >
  <div>
    <navbar />
    <div class="container body">
      <h1>Order Details</h1>

      
        <div class="card my-2">
          <div class="card-body row">
            <div class="col">
              <span class="marge">
                <span class="gras">Order</span>
                <span class="text-success order">#12324253</span> <br />
              </span>
              <span class="flou marge1">yaoundé 12/12/2021 12H00</span>
            </div>
            <div class="col">
              <span class="margtotal"> Total : 199500 Fcfa </span>
            </div>
          </div>
        </div>

        <div class="card my-1">
          <div class="card-body row">
            <div class="col">
              <span class="mr-2 row"
                ><fas-icon class="violet search" :icon="['fas', 'cart-arrow-down']"
              />  Card</span>
               <span class="row ">
                  <span class="my-1 col"> sold by: marcellin , danaz</span>
                <span class="mr-3 row"
                ><fas-icon class="violet search" :icon="['fas', 'envelope']"
              />  Chat Now</span>
               </span>
            </div>
           
          </div>
        </div>


        

        <div class="card my-1">
          <div class="card-body ">
            <div class="row container mx-5">

                  <b-avatar size="15px" id="a1" class="avatar bg-success" text=" "></b-avatar>
                  <b-progress :value="value" :max="max"  variant= "success" class="mb-3 size" > </b-progress>
                

                  <b-avatar size="15px" id="a1" class="avatar bg-success" text=" "></b-avatar>
                   <b-progress :value="value" :max="max"  variant= "success" class="mb-3 size"></b-progress>

                  <b-avatar size="15px" id="a1" class="avatar bg-success " text=" "></b-avatar>
                  <b-progress :value="value" :max="max" variant= "success " class="mb-3 size"></b-progress>

                  <b-avatar size="15px" id="a1" class="avatar bg-success" text=" "></b-avatar>
                   <b-progress :value="value" :max="max" variant= "success" class="mb-3 size"></b-progress>
                   
            </div>
            <div class="row">
                <span  class="col-3">payment made</span>
                <span  class="col-2 text-start ">processing</span>
                <span  class="col-2 text-start">complete</span>
                <span  class="col-2 text-center">receive</span>
            </div>
                  
            
              <div class="justify-content-between row my-5" v-for="i in 2" :key="i">
              <div class="col-3">
                <splide :options="{ rewind: true }" class="r-img">
                  <splide-slide cl v-for="(im, index) in img" :key="index">
                    <img :src="img[index]" class="r-img" />
                  </splide-slide>
                </splide>
              </div>

              <div class="col-2 text-end text-start bold" >
                <h3>Name:</h3>
                <h3>product ID :</h3>

                <h3>Quantity:</h3>
                <h3>price :</h3>
                <h3>shipping cost:</h3>
                <h3>total cost :</h3>
              </div>

              <div class="col-3 text-start">
                <h3>sneaker</h3>
                <h3>#125FF55 </h3>
                <h3>4</h3>
                <h3>2000 Fcfa</h3>
                <h3>1000 Fcfa</h3>
                <h3>9000 Fcfa</h3>
              </div>

              <div class="col" id="hidedesktop1">
                <h3 class="bold1">status</h3>
                <h3 class="text-success">{{ i }}</h3>
              </div>

              

              <div class="justify-content-center container row">
                <br />
              </div>

              <div class="justify-content-center container row">
                <br />
              </div>
            </div>
                   
            
            </div>
           
          </div>

        <div class="row my-1">
            <div class="col-6 ">
                <div class="card ">
                    <div class="card-body row">
                        <span>shipping Adress</span>
                        <br><br><br>
                    
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="card ">
                    <div class="card-body ">
                        <div class="col bold">
                          <span class="row"> <span class="col"><h3>Total summary : </h3></span> <span class="col">10000 Fcfa</span></span>
                          <span class="row"> <span class="col"><h3>Total price : </h3></span>  <span class="col">15000 Fcfa</span></span>
                          <span class="row"> <span class="col"><h3>total shipping fee : </h3></span><span class="col"> 1600 Fcfa</span></span>
                        </div>
                        <div class="row"><hr class="hr" /> </div>
                       
                       <div class="row bold"> 
                           <span class="col"><h3>Total : </h3></span> <span class="col"> 20000 Fcfa</span>
                       </div>
                    </div>
                </div>
            </div>

            <!-- <div class="col-6 my-1">
                <div class="card ">
                    <div class="card-body row">
                
                    
                    </div>
                </div>
            </div> -->

            <!-- <div class="col-6">
                <div class="card ">
                    <div class="card-body row">
                
                    
                    </div>
                </div>
            </div>
             -->
            
        </div>
     

      <br> <br> <br>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
export default {
  components: { navbar },
  data() {
      return {
        value: 100,
        max: 50,
        img: ["http://urlr.me/YMQXD", "https://placekitten.com/400/300"],
      }
    }
};
</script>

<style scoped>
.body {
  background-color: rgba(213, 214, 214, 0.473);
}
.marge {
  margin-right: 380px;
}
.marge1 {
  margin-right: 300px;
}
.margtotal {
  margin-left: 350px;
}
.hr{
    height: 0.1px;
    width: 500px;
    background-color: rgb(243, 232, 232);
}

/* style de la navigation  */

.progress{
  width: 200px;
}
.size{
  height: 5px;
  margin-top: 5px;
  margin-left: -3px;
  margin-right: -3px;
}
.made{
  margin-top: 10px;
}

/* style de l'affichage des produits */

.r-img {
  border-radius: 5px;
  height: 150px;
  width: 250px;
}
.bold h3 {
  font-weight: bold !important;
}
.bold1 {
  font-weight: bold;
}
h3 {
  font-size: 14px;
  /* font-weight: bold; */
}

</style>