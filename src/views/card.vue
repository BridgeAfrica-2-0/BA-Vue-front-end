<template>
  <div class="container">
      <navbar />
    <div class="row">
      <div class="col-12 col-md-9">
        <hr />
        <div class="row">
          <div class="col"><h3 class="mx-5">PRODUCT DETAILS</h3></div>
          <div class="col">
            <div class="row desktop">
              <h3 class="mx-5">Quantity</h3>
              <h3 class="mx-5">price</h3>
              <h3 class="mx-5">Total</h3>
            </div>
          </div>
        </div>
        <hr />
        <div v-for="i in 4" :key="i">
          <div class="row ">
            <div class="col-4 col-md-3">
              <splide :options="{ rewind: true }" class="r-img">
                <splide-slide cl v-for="(im, index) in img" :key="index">
                  <img :src="img[index]" class="r-img" />
                </splide-slide>
              </splide>
            </div>

            <div class="col-8 col-md-4 text-end text-start bold ">
              <div class="row">
                <div class="col-5 p-0"><h3>Name of item :</h3></div>
                <div class="col"><h3 class="h3">product name</h3></div>
              </div>

              <div class="row">
                <div class="col-5 p-0"><h3>product ID :</h3></div>
                <div class="col"><h3 class="h3">8653536</h3></div>
              </div>

              <div class="row">
                <div class="col-5 p-0">
                  <h3 class="">description:</h3>
                </div>
                <div class="col">
                  <h3 class="h3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime quibusdam consequuntur sequi itaque..
                  </h3>
                </div>
              </div>
            </div>
            <div class="row line"></div>
            <div class="col marg5">
              <div class="row ">
                <div class="col-4 p-0 bg-y ">
                  <input type="number" value="2" class="numbersize marg1" />
                </div>
                <div class="col text-success p-0 "><h3 class="marg2">5000 XAF</h3></div>
                <div class="col p-0 text-success  text-center"><h3 class="marg3">10000 XAF</h3></div>
                <div class="col-1 p-0  ">
                  <fas-icon
                    class="couleur search  marg4"
                    :icon="['fas', 'trash-alt']"
                  />
                </div>
              </div>
            </div>
          </div> <hr>
        </div>
      </div>
      <div class=" line"></div>
      <div class="col-12 col-md-3 color">
        <h3 class="my-2">ORDER SUMMARY</h3>
        <hr />
        <div class="row">
          <div class="col">
            <h3>ITEMS 2</h3>
          </div>
          <div class="col">
            <h3>10000 XAF</h3>
          </div>
        </div>
        <br />
        <form action="">
          SHIPPING
          <input type="text" class="form-control" />
          PROMO CODE
          <input type="text" class="form-control" />
          <button class="btn btncolor shadow"><h3>Apply</h3></button>
        </form>
        <br />
        <hr />
        <br />

        <div class="row">
          <div class="col"><h3>TOTAL COST</h3></div>
          <div class="col"><h3>22000 XAF</h3></div>
        </div>
        <button class="btn btn1 form-control shadow"><h3>CHECKOUT</h3></button>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
export default {
  components : {navbar}, 
  data() {
    return {
      img: ["http://urlr.me/YMQXD", "https://placekitten.com/400/300"],
    };
  },
};
</script>
<style scoped>

@media only screen and (max-width: 1201px) {
  .desktop{
    display: none;
  }
  .color {
  background-color: #c5c5c546;
  margin-top: 15px;
  /* height: 500px; */
  
}

.marg1{
  margin-left: 180px;
}
.marg2{
   margin-left: 90px;
   /* padding-left: 2px; */
}

.marg5{
  margin-top: -20px ;
}
h3 {
  font-size: 12px;
  font-weight: bold;
}
.h3 {
  font-weight: normal;
}
.numbersize {
  width: 40px;
  height: 20px;
}
.line{
  width: 100%;
}

.btncolor {
  background-color: #e75c18;
  /* margin-top: 10px;
  height: 30px;
  width: 120px; */
  color: white;
  line-height: 10px;
}
.btn1 {
  background-color: #e75c18;
  /* margin-top: 10px;
  height: 30px; */

  color: white;
  line-height: 10px;
}
.couleur {
  color: red;
}

.r-img {
  border-radius: 5px;
  height: 150px;
  
}

}


/* style for desktop ------------------------------------ */
@media only screen and (min-width: 1200px) {
h3 {
  font-size: 14px;
  font-weight: bold;
}
.h3 {
  font-weight: normal;
}
.color {
  background-color: #c5c5c546;
  margin-top: 15px;
  height: 500px;
}
.btncolor {
  background-color: #e75c18;
  margin-top: 10px;
  height: 30px;
  width: 120px;
  color: white;
  line-height: 10px;
}
.btn1 {
  background-color: #e75c18;
  margin-top: 10px;
  height: 30px;

  color: white;
  line-height: 10px;
}
.couleur {
  color: red;
}
.r-img {
  border-radius: 5px;
  height: 150px;
  width: 190px;
}
.numbersize {
  width: 40px;
  height: 20px;
}
}
</style>