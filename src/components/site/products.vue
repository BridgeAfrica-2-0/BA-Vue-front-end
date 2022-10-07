<template>
    <div class="container-flex"> 
      <div class=" mt-3 product-slide">
        <splide :options="options" class="r-image">
          <splide-slide  v-for="item in render_products" class="p-4" :key="item.id">
           
            <div @click="gotoBproduct(item)" class="hotbizz text-center">
              <b-img    :src="item.picture" class="p-image" />

              <div class="hotbizcontent">
                <div class="text-center hotbizname">
                 
                  <h6  @click="gotoBproduct(item)" role="button" class="mt-4"> {{item.price}} </h6> 
                
                   </div>
              </div>

            </div>
          </splide-slide>
        </splide>
      </div>

   

    </div>

   

</template>
<script>
import axios from "axios";

export default {
  components: {
  
  },

  data(){
    return {
      
       options: {
        rewind: true,
        autoplay: false,
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
     products:[],
      hotbiz: [
          {
          id: "516",
          picture: "https://store.bridgeafrica.com/wp-content/uploads/2022/09/6-768x768.jpg",
          link:"https://store.bridgeafrica.com/product/african-elephants-animal-5-panel-canvas-art-wall-decor/",
          price: "$170 ",
         },

        {
          id: "3721",
          picture: "https://store.bridgeafrica.com/wp-content/uploads/2022/09/gjk-768x724.jpg",
           price: "$80 ",
           link:"https://store.bridgeafrica.com/product/contemporary-footstool-and-ottomans-pouf-boost/"
         
        },

        {
          id: "3712",
          picture: "https://store.bridgeafrica.com/wp-content/uploads/2022/09/sofa.jpg",
          link:"https://store.bridgeafrica.com/product/contemporary-footstool-and-ottomans-pouf-boost-2/",
           price: "$80 ",
        },

        {
          id: "76",
          picture: "https://store.bridgeafrica.com/wp-content/uploads/2022/09/miroir-rond-dore-d81-1000-2-33-204172_1.jpg",
          link:"https://store.bridgeafrica.com/product/single-large-natural-brown-juju-hat-top-quality-feather-wall-hanging-home-decor-handmade-wall-art-hanging-wall-art/",
           price: "$180 ",
        
        },

        {
          id: "3705",
          picture: "https://store.bridgeafrica.com/wp-content/uploads/2022/09/telechargement-11.png",
          link:"https://store.bridgeafrica.com/product/single-large-natural-brown-juju-hat-top-quality-feather-wall-hanging-home-decor-handmade-wall-art-hanging-wall-art-2/",
           price: "$180 ",
         },

        {
          id: "3709",
          picture: "https://store.bridgeafrica.com/wp-content/uploads/2022/09/1.jpg",
          link:"https://store.bridgeafrica.com/product/single-large-red-juju-hats-top-quality-feather-wall-hanging-home-decor-handmade-wall-art-hanging-wall/",
           price: "$180 ",
        },


         {
          id: "3710",
          picture: "https://store.bridgeafrica.com/wp-content/uploads/2022/09/4.jpg",
          link:"https://store.bridgeafrica.com/product/single-large-yellow-juju-hat-top-quality-feather-wall-hanging-home-decor-handmade-wall-art-hanging-wall-art/",
           price: "$180 ",
        },


         {
          id: "3711",
          picture: "https://store.bridgeafrica.com/wp-content/uploads/2022/09/258105_d8c3752399cf4cb88f8b24b8ff98bf91_mv2.jpg",
          link:" https://store.bridgeafrica.com/product/single-white-large-juju-hats-best-price-online-top-quality-premium-silky-juju-hat-feather-wall-hanging-home-decor/",
           price: "$180 ",
        },

         {
          id: "3722",
          picture: "https://store.bridgeafrica.com/wp-content/uploads/2022/09/THT.jpg",
          link:"https://store.bridgeafrica.com/product/single-white-large-juju-hats-best-price-online-top-quality-premium-silky-juju-hat-feather-wall-hanging-home-decor-2/",
           price: "$180 ",
        },
   
      ],


    }
  },

  props:{
    type:{}
  },

  computed: {
     
     render_products(){
      let produ=[];
       if(this.type=="cameroon"){
         produ=this.products;
       }else{
        produ=this.hotbiz;
       }

       return produ;
     }
  },

 created(){
    
 
    axios.get('guest/home/products').then(({ data }) => {
           
          this.products=data.data;
        })
        .catch((err) => {
          console.log({ err: err });
        }); 
         
 }, 

  methods:{
 gotoBproduct(pro){
  console.log(pro.link);
  
   window.location.href =pro.link;
  
 },
  

  },


  


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
