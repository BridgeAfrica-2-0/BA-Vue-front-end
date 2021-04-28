<template>
  <div>

  
      <splide :options="options">
    <splide-slide>
       <h6>slide 1 </h6>
    </splide-slide>


    <splide-slide>
       <h6>slide 1 </h6>
    </splide-slide>

    <splide-slide>
     <h6>slide 1 </h6>
    </splide-slide>
  </splide>


  </div>
</template>

<script>
export default {
  props: ["title", "image"],

  data() {
      return {
        options: {
          rewind : true,
          width  : 800,
          gap    : '1rem',
        },
      };
    },
    
};
</script>

<style scoped>



</style>
