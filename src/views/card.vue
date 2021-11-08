<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <hr />
        <div class="row">
          <div class="col"><h3 class="mx-5">PRODUCT DETAILS</h3></div>
          <div class="col">
            <div class="row">
              <h3 class="mx-5">Quantity</h3>
              <h3 class="mx-5">price</h3>
              <h3 class="mx-5">Total</h3>
            </div>
          </div>
        </div>
        <hr />

        <div class="row">
          <div class="col-3">
            <splide :options="{ rewind: true }" class="r-img">
              <splide-slide cl v-for="(im, index) in img" :key="index">
                <img :src="img[index]" class="r-img" />
              </splide-slide>
            </splide>
          </div>

          <div class="col-4 text-end text-start bold">
            <div class="row "> 
                <div class="col-5 p-0"> <h3>Name of item  :</h3> </div>
                <div class="col"> <h3 class="">product name</h3> </div>
                </div>

                <div class="row"> 
                    <div class="col-5 p-0"><h3>product ID :</h3></div>
                    <div class="col"><h3 class="">8653536</h3> </div>
                </div>

                <div class="row">
                    <div class="col-5 p-0 ">
                        <h3 class="">description:</h3> 
                    </div>
                    <div class="col">
                        <h3 class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam consequuntur sequi itaque, nostrum odio nobis magnam distinction</h3>
                    </div>
                </div>
            
           
          </div>
          <div class="col bg-primary"> 
              <div class="row">
                  <div class="col "><input type="number" class="numbersize"></div>
                  <div class="col text-success p-0">5000 XAF</div>
                  <div class="col p-0">10000 XAF</div>
                  <div class="col p-0">tra</div>
              </div>
          </div>

        </div>
      </div>

      <div class="col-3 color">
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
export default {
    data() {
       return{
           img: ["http://urlr.me/YMQXD", "https://placekitten.com/400/300"],
       } 
    },
}
</script>
<style scoped>
h3 {
  font-size: 14px;
  font-weight: bold;
}
.color {
  background-color: #c5c5c546;
  margin-top: 15px;
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
.r-img {
  border-radius: 5px;
  height: 150px;
  width: 190px;
}
.numbersize{
    width: 40px;
    height: 20px;
}
</style>