<template> 
<div> 

    

    <div class="container ">
      

      <div>
        <splide :options="toptions" class="text-center card p-md-5 rounded-b">
          <splide-slide v-for="testi in ctestimonials" :key="testi.Id">
            <div
              style=""
              class="
                text-center
                p20px
                pl-md-5
                pr-md-5
                mr-md-5
                ml-md-5
                mt-2
                d-md-flex
              "
            >
              <b-avatar :src="testi.image" size="8rem"></b-avatar>
              <div class="pl-3 pr-3 mt-2">
                <h2
                  class="
                    gem-testimonial-name
                    pl-3
                    mt-1
                    mb-1
                    text-center text-md-left
                  "
                >
                  {{ testi.name }}
                </h2>
                <p class="pr-2 pl-3 mt-2 text-left w-100 gem-testimonial-text">
                  {{ testi.testimoney }}
                </p>
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
          id: 4,
          name: "Kaneka Taylor",
          image: "assets/images/testi/taylor.jpg",
          testimoney: this.$t("general.as_a_busy_mother"),
        },

        {
          id: 5,
          image: "assets/images/testi/f6b.jpg",
          name: " yvon Eboto",
          testimoney: this.$t("general.i_am_a_restaurant_owner"),
        },

        {
          id: 6,

          name: "Sharon Vetti",
          image: "assets/images/testi/vetti.jpg",
          testimoney: this.$t("general.with_ba_i_was_able_sew"),
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




