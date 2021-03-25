<template>
  <div>

   





   <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      
      style="text-shadow: 1px 1px 2px #333; border-radius:10px;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Welcome On Bridge Africa"
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Welcome On Bridge Africa!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
     

    
    </b-carousel>

    
  </div>






  </div>
</template>







<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
   
  }
</script>





<style >


.d-block.img-fluid {

    max-width: 100%;
    height: 300px;

    border-radius: 10px;

}




</style>
