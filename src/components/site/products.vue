<template>
    <div class="container-flex"> 

   
     

      <div class=" mt-3 product-slide">
        <splide :options="options" class="r-image">
          <splide-slide v-for="item in hotbiz" class="p-4" :key="item.id">
            <div class="hotbizz text-center">
              <b-img-lazy :src="item.picture" class="r-image" />

              <div class="hotbizcontent">
                <div class="text-center hotbizname">
                  <router-link :to="'business/' + item.id">
                  <h5 class="mt-4"> {{item.price}} </h5> 
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
        perPage: 4,
        pagination: false,
        type: "loop",
        perMove: 1,

        breakpoints: {
          760: {
            perPage: 2,
            gap: "0rem",
          },
          992: {
            perPage: 2,
            gap: "1rem",
          },
        },
      },
     
      hotbiz: [
        {
          id: "516",
          picture: "assets/images/AFRICAN CULTURE.jpg",
          name: "African Tradition",
          price: "$100 ",
          description:
            "Production de vêtements africains de toutes les régions du Cameroun, avec une spécialisation dans les vêtements des champs.",
        },

        {
          id: "3711",
          picture: "assets/images/bibi.jpg",
           price: "$100 ",
          name: "Vin Bibi",
          description: "Production de vin blanc moueleux",
        },

        {
          id: "3712",
          picture: "assets/images/silas.jpg",
          name: "Silas Construction",
           price: "$100 ",
          description:
            "Silas Construction peut répondre à tous vos besoins en matière de construction. ",
        },

        {
          id: "76",
          picture: "assets/images/emma.jpg",
          name: "Emma Fashion",
           price: "$100 ",
          description: "Embroidery , hand-made",
        },

        {
          id: "3705",
          picture: "assets/images/GERAR.jpg",
          name: "Gerar Fashion",
           price: "$100 ",
          description:
            "Customisation des bijoux, sac et chaussures avec du tissu pagne et formation sur la customisation",
        },

        {
          id: "3709",
          picture: "assets/images/edo.jpg",
          name: "Saveurs du Lapin",
           price: "$100 ",
          description:
            "Entreprise de production de viande de lapin et autres produits connexes.",
        },

        {
          id: "3272",
          picture: "assets/images/aissa.jpg",
           price: "$100 ",
          name: "Aissa Couture",

          description:
            "Spécialité du tissu tissé, chemises, pantalon, décoration, set de table et autres.",
        },

        {
          id: "3708",
          picture: "assets/images/okapi.jpg",
          name: "OKAPI",
           price: "$100 ",
          description:
            "OKAPI est spécialisé dans la transformation de fruits exotiques en jus naturelles et dérivés. Elle innove dans la conception de nouvelles saveurs originales.",
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

  .product-slide .splide__arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 2em;

    height: 2em;
    border-radius: 0px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
    opacity: 0.7;
    background: #ccc;
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

  .product-slide .splide__arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 2em;

    height: 2em;
    border-radius: 0px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
    opacity: 0.7;
    background: #ccc;
  }
}



</style>
