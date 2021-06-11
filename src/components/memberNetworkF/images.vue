<template>
  <div>
 









<div class="row">
          <div class="container-fluid">
            <div class="img-gall">
              <a href="#!"
                ><img
                  class="card-img btn p-0"
                  src="@/assets/img/m1.jpg"
                  alt=""
                  v-b-modal.modal-8
              /></a>

              <b-modal id="modal-8" title="Details">
                <img class="card-img" src="@/assets/img/m1.jpg" alt="" />
                <h4>Post Title</h4>
                <p class="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum
                  quam, doloribus id sit consequuntur tempora molestiae
                  blanditiis.
                </p>
              </b-modal>
              


            </div>
            <div class="img-gall">
              <a href="#!"
                ><img
                  class="card-img btn p-0"
                  src="@/assets/img/m2.jpg"
                  alt=""
                  v-b-modal.modal-a
              /></a>

              <b-modal id="modal-a" title="Details">
                <img class="card-img" src="@/assets/img/m2.jpg" alt="" />
                <h4>Post Title</h4>
                <p class="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum
                  quam, doloribus id sit consequuntur tempora molestiae
                  blanditiis.
                </p>
              </b-modal>
             
            </div>


            
            <div class="img-gall">
              <a href="#!"
                ><img
                  class="card-img btn p-0"
                  src="@/assets/img/m3.jpg"
                  alt=""
                  v-b-modal.modal-b
              /></a>

              <b-modal id="modal-b" title="Details">
                <img class="card-img" src="@/assets/img/m3.jpg" alt="" />
                <h4>Post Title</h4>
                <p class="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum
                  quam, doloribus id sit consequuntur tempora molestiae
                  blanditiis.
                </p>
              </b-modal>
           
            </div>
            <div class="img-gall">
              <a href="#!"
                ><img class="card-img" src="@/assets/img/m4.jpg" alt=""
              /></a>
            

            </div>
            <div class="img-gall">
              <a href="#!"
                ><img class="card-img" src="@/assets/img/m5.jpg" alt=""
              /></a>
             


            </div>
            <div class="img-gall">
              <a href="#!"
                ><img class="card-img" src="@/assets/img/m6.jpg" alt=""
              /></a>
             


            </div>
            <div class="img-gall">
              <a href="#!"
                ><img class="card-img" src="@/assets/img/m7.jpg" alt=""
              /></a>
             
            </div>
           
            <div class="img-gall">
              <a href="#!"
                ><img class="card-img" src="@/assets/img/m8.jpg" alt=""
              /></a>
             
            </div>
          </div>
        </div>


  


  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    /**
     *
     * @param i
     */
    onClick(i) {
      this.index = i;
    }
  },
  data: function() {
    return {
      images: [
        "https://placekitten.com/801/800",
        "https://placekitten.com/802/800",
        "https://placekitten.com/803/800",
        "https://placekitten.com/804/800",
        "https://placekitten.com/805/800",
        "https://placekitten.com/806/800",
        "https://placekitten.com/807/800",
        "https://placekitten.com/808/800",
        "https://placekitten.com/809/800"
      ],
      imagees: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
        "https://i.wifegeek.com/200426/5fa51df3.jpg",
        "https://i.wifegeek.com/200426/663181fe.jpg",
        "https://i.wifegeek.com/200426/2d110780.jpg",
        "https://i.wifegeek.com/200426/e73cd3fa.jpg",
        "https://i.wifegeek.com/200426/15160d6e.jpg",
        "https://i.wifegeek.com/200426/d0c881ae.jpg",
        "https://i.wifegeek.com/200426/a154fc3d.jpg",
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
      index: 0
    };
  }
};
</script>



<style>
.text-design {
  align-items: first baseline;
}

.drop-color {
  color: black;
}



@media (min-width: 960px) {

.img-gall {
 
  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}



.img-gall{
    position: relative;
    margin: 5px;
    float: left;
     width: 18.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}

@media (min-width: 1400px) {
  .lb-grid {
    height: 274px;
    margin-bottom: 8px;
  }
}




.img-gall{
    position: relative;
    margin: 5px;
    float: left;
    width: 18.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}

}



@media only screen and (min-width:768px) and (max-width: 1331px) {

   
   

.img-gall {

  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}


.img-gall{
    position: relative;
    margin: 5px;
    float: left;
    width: 31%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}






}

@media (max-width: 762px) {


.img-gall {

  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}


.img-gall{
    position: relative;
    margin: 5px;
    float: left;
    width: 47%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}


}





</style>


