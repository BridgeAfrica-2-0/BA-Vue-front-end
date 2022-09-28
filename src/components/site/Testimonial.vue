<template> 
<div> 

    

    <div class="container testimony ">
      

      <div>
        <splide :options="toptions" class="text-center p-md-5 rounded-b">
          <splide-slide v-for="testi in ctestimonials" :key="testi.Id">
            <div
              style=""
              class=" testi-back
                text-center
                p20px
                pl-md-5
                pr-md-5
                mr-md-5
                ml-md-5
                mt-2
                d-md-flex
                pt-5 pb-5
              "
            >
              <b-avatar :src="testi.image" size="8rem"></b-avatar>
              <div class="pl-3 pr-3 mt-2">

                 <p class="pr-2 pl-3 mt-2 text-left w-100 gem-testimonial-text">
                  {{ testi.testimoney }}
                </p>

                <h4
                  class="
                    gem-testimonial-name
                    pl-3
                    mt-1
                    mb-1
                    text-center text-md-left
                  "
                >
                  {{ testi.name }}
                </h4>
              
               
              </div>
            </div>

          </splide-slide>
        </splide>
      </div>
    </div>


 </div>
</template>

<script>
export default {
  data(){
    return {

        
      toptions: {
        rewind: true,
        autoplay: false,
        perPage: 1,
        pagination: false,
        type: "loop",
        perMove: 1,

        breakpoints: {
          760: {
            perPage: 1,
            gap: "0rem",
          },
          992: {
            perPage: 1,
            gap: "1rem",
          },
        },
      },
 
    ctestimonials: [

        {
          id: 5,
          image: "assets/images/testi/godlove.jpeg",
          name: "Godlove Rafa",
          testimoney: "Bridge Africa played a major role in moving my business forward with the creation of a website and all of the networking opportunities that it offered to me.I now have a bigger client-base as customers can easily find me online",
        },

       {
          id: 7,
          image: "assets/images/testi/godlove.jpeg",
          name: "Alima Leila",
          testimoney: "I am restaurant owner and I can tell you, with Bridge Africa I am able to find food supplies like vegetables, chickens, oil and more at great prices",
        },


        {
          id: 6,

          name: "Lele Fadimatou",
          image: "assets/images/testi/fadimatou.jpeg",
          testimoney: "I have been selling custom-made accessories for years now. Meeting Bridge Africa has completely revolutionized the way I do business. I no longer need to rely on customers who come to my shop, but can now sell to customers worldwide. ",
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
.testi-back{
  background: #FFFFFF;
 box-shadow: 0px 4px 10px rgba(187, 187, 187, 0.25);
 border-radius: 20px;
}
</style>

<style>
@media only screen and (min-width: 768px) {
  .testimony .splide__arrow--prev {
    width: 40px !important;
    height: 40px !important;
  }

  .testimony .splide__arrow--next {
    width: 40px !important;
    height: 40px !important;
  }

}

@media only screen and (max-width: 768px) {
  .testimony .splide__arrow--prev {
    width: 30px !important;
    height: 30px !important;
  }

  .testimony .splide__arrow--next {
    width: 30px !important;
    height: 30px !important;
  }

 
}

</style>


