<template>
    <div class="container-flex"> 

   
     

      <div class=" mt-3 product-slide">
        <splide :options="options" class="r-image">
          <splide-slide v-for="item in hotbiz" class="p-4" :key="item.id">
            <div class="hotbizz text-center">
              <b-img :src="item.picture" class="p-image" />

              <div class="hotbizcontent">
                <div class="text-center hotbizname">
                  <router-link :to="'business/' + item.id">
                  <h6 class="mt-4"> {{item.price}} </h6> 
                  </router-link>
                   </div>
              </div>

            </div>
          </splide-slide>
        </splide>
      </div>
    </div>

   

</template>
<script>
export default {
  data(){
    return {

        
      options: {
        rewind: true,
        autoplay: true,
        perPage: 5,
        pagination: false,
        type: "loop",
        perMove: 1,

        breakpoints: {
          760: {
            perPage: 2,
            gap: "0rem",
          },
          992: {
            perPage: 3,
            gap: "1rem",
          },
        },
      },
     
      hotbiz: [
        {
          id: "516",
          picture: "assets/home/products/img1.png",
        
          price: "$100 ",
         },

        {
          id: "3711",
          picture: "assets/home/products/img2.png",
           price: "$100 ",
         
        },

        {
          id: "3712",
          picture: "assets/home/products/img3.png",
         
           price: "$100 ",
        },

        {
          id: "76",
          picture: "assets/home/products/img4.png",
          
           price: "$100 ",
        
        },

        {
          id: "3705",
          picture: "assets/home/products/img5.png",
        
           price: "$100 ",
         },

        {
          id: "3709",
          picture: "assets/home/products/img1.png",
           price: "$100 ",
        },

       

       
      ],


    }
  },
  computed: {
   
  },

  methods:{

   
  }
};
</script>


<style scoped>
  
  .p-image{
    height: 150px;
    object-fit: contain;
  }

</style>


<style>
@media only screen and (min-width: 768px) {
  .product-slide .splide__arrow--prev {
    width: 40px !important;
    height: 40px !important;
  }

  .product-slide .splide__arrow--next {
    width: 40px !important;
    height: 40px !important;
  }

}

@media only screen and (max-width: 768px) {
  .product-slide .splide__arrow--prev {
    width: 30px !important;
    height: 30px !important;
  }

  .product-slide .splide__arrow--next {
    width: 30px !important;
    height: 30px !important;
  }

 
}



</style>
