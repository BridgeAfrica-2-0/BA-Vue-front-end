<template>
  <div>
    <b-card class=" border shadow " style="height:500px">
      <h6 class="title"> 
        <fas-icon class="icons" :icon="['fas', 'video']" /> {{ $t('dashboard.Tutorial') }}
      </h6>

       <VuePerfectScrollbar class="scroll-area s-card"  :settings="settings"  @ps-y-reach-end="loadMore" >
         
         <div class="row  m-0">    


      <div
        v-for="(resource, i) in renderResources"
        :key="i"
        class="col-md-6 mt-1 resource-div"
      >
        <div class="resource-img-div" @click="openGallery(i)"  >
       
         <b-img-lazy   :src="resource.thumb" alt="..." class="resource-img"/>

        </div>
        <div class="mt-1 text-center">
          <p v-if="resource.title.length > 115" class="text-center">
            {{ resource.title.substring(0, 115) }}...
          </p>
          <p v-else>
          <b-link  id="youtubelink" href="#youtubelink" class="text-center"> {{ resource.title }}  </b-link> 
          </p>

          <div class="resource-line"></div>
        </div>
      </div>
  </div>
  </VuePerfectScrollbar>
</b-card>


    <LightBox 
      ref="lightbox"
      :media="renderResources"
      :show-caption="true"
      :show-light-box="false"
    ></LightBox>
    
  </div>
</template>





      
<script>

import LightBox from 'vue-it-bigger'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import('vue-it-bigger/dist/vue-it-bigger.min.css')

export default {
  name: "Resources",

 components: {
    LightBox,
    VuePerfectScrollbar
  },
  
  data() {
    return {
      subEmail: "",
      page:0,
      show_more:true,
      loading:false,
      renderResources:[],
      selectedResource: "bridgeafrica",
       settings: {
        maxScrollbarLength: 60
      },
      
      eng_videos:[
        


         {
         
          type: 'youtube',
          title: "Developing competitive products",
          tag: ["bridgeafrica","Plan"],  
          thumb: "assets/images/training/mod1/EN.jpg",
          id: "X7ZK3elhVGI",
        },




  {
        
          type: 'youtube',
          title: "How To Register Your Business",
          tag: ["bridgeafrica",'creation'],
           thumb: "assets/images/training/mod2/EN.jpg",
          id: "BJ1fRB37XRg",
        },

          {
         
          type: 'youtube',
          title: "Defining A Business Plan",
          tag: ["bridgeafrica","Plan"],
           thumb: "assets/images/training/mod3/EN.jpg",
          id: "xE_MDyTftuY",
        },
      
        {
         
          type: 'youtube',
          title: "packaging",
          tag: ["bridgeafrica","Plan"],
           thumb: "assets/images/training/mod4/EN.jpg",
          id: "8fOVIxnAK0A",
        },


          {
         
          type: 'youtube',
          title: "Branding",
          tag: ["bridgeafrica","Plan"],
           thumb: "assets/images/training/mod5/EN.jpg",
          id: "BJtABiNS0LU",
        },


         


       
          {
         
          type: 'youtube',
          title: "Local And International Logistics",
          tag: ["bridgeafrica","Plan"],
           thumb: "assets/images/training/mod6/EN.jpg",
          id: "_1DjN9eBjkY",
        },

         {
         
          type: 'youtube',
          title: "Making Money Online",
          tag: ["bridgeafrica","Digital"],
           thumb: "assets/images/training/mod7/EN.jpg",
          id: "ePeiO76aVAc",
        },



          {
         
          type: 'youtube',
          title: "Digital Marketing",
          tag: ["bridgeafrica","Digital"],
           thumb: "assets/images/training/mod8/EN.jpg",
          id: "45JO17Wm4vs",
        },



         {
          
          type: 'youtube',
          title: "Understanding Digital Payment System Mobile Money System",
          tag: ["bridgeafrica","Digital"],
           thumb: "assets/images/training/mod9/EN.jpg",
          id: "A2ioGy5SJXA",
        },


         {
         
          type: 'youtube',
          title: "IDENTIFYING AND DEVELOPING MARKET LINKS BUILDING YOUR NETWORK",
          tag: ["bridgeafrica","Digital"],
           thumb: "assets/images/training/mod10/EN.jpg",
          id: "-SwMF8jqmAk",
        },
     

      {
          
          type: 'youtube',
          title: " SOCIAL MEDIA MANAGEMENT",
          tag: ["bridgeafrica",'creation'],
           thumb: "assets/images/training/mod11/EN.jpg",
          id: "ePeiO76aVAc",
        },

 {
         
          type: 'youtube',
          title: "KEEPING RECORDS TRACK YOUR BUSINESS’ PROGRESS",
          tag: ["bridgeafrica",'creation'],
           thumb: "assets/images/training/mod12/EN.jpg",
          id: "ePeiO76aVAc",
        },




     {
         
          type: 'youtube',
          title: " SELLING ON BRIDGEAFRICA.COM",
          tag: ["bridgeafrica","hba",'creation'],
           thumb: "assets/images/training/mod14/EN.jpg",
          id: "EwQrPYxYuj8",
        },




         {
         
          type: 'youtube',
          title: "USING BRIDGEAFRICA.COM AS A CUSTOMER",
          tag: ["bridgeafrica","hba",'creation'],
           thumb: "assets/images/training/mod15/EN.jpg",
          id: "xkJScXdGP4o",
        },



        
         {
         
          type: 'youtube',
          title: " HOW TO CREATE A WEBSITE ON BRIDGEAFRICA.COM",
          tag: ["bridgeafrica","hba",'creation'],
           thumb: "assets/images/training/mod13/EN.jpg",
          id: "Q86VsRmoU0Q",
        },
        

       



      
{
         
          type: 'youtube',
          title: "developing competitive products",
          tag: ["bridgeafrica","Plan"],
           thumb: "assets/images/training/mod1/FFU.jpg",
          id: "vbgShfVz9Iw",
        },






  {
          
          type: 'youtube',
          title: "How To Register Your Business",
          tag: ["bridgeafrica",'fufulde'],
           thumb: "assets/images/training/mod2/FFU.jpg",
          id: "ePeiO76aVAc",
        },

          {
        
          type: 'youtube',
          title: "Defining A Business Plan",
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod3/FFU.jpg",
          id: "96QS4J0b8F4",
        },
      
        {
         
          title: "packaging",
          type: 'youtube',
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod4/FFU.jpg",
          id: "BJtABiNS0LU",
        },


          {
         
          title: "Branding",
          type: 'youtube',
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod5/FFU.jpg",
          id: "qoigtzeTCu8",
        },


         


       
          {
        
          type: 'youtube',
          title: "Local And International Logistics",
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod6/FFU.jpg",
          id: "xpPsvHCj1Ss",
        },

         {
         
          type: 'youtube',
          title: "Making Money Online",
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod7/FFU.jpg",
          id: "ptsna6yIsZM",
        },



          {
         
          type: 'youtube',
          title: "Digital Marketing",
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod8/FFU.jpg",
          id: "oktDhhtOYuo",
        },



         {
        
          type: 'youtube',
          title: "UNDERSTANDING DIGITAL PAYMENT SYSTEMS MOBILE MONEY SYSTEMS",
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod9/FFU.jpg",
          id: "xAAaj2R1SYU",
        },


         {
        
          type: 'youtube',
          title: "IDENTIFYING AND DEVELOPING MARKET LINKS: BUILDING YOUR NETWORK",
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod10/FFU.jpg",
          id: "oqkGYTzygQE",
        },
     

      {
        
          type: 'youtube',
          title: " SOCIAL MEDIA MANAGEMENT",
          tag: ["bridgeafrica",'fufulde'],
           thumb: "assets/images/training/mod11/FFU.jpg",
          id: "ePeiO76aVAc",
        },

 {
        
          type: 'youtube',
          title: "KEEPING RECORDS TRACK YOUR BUSINESS’ PROGRESS",
          tag: ["bridgeafrica",'fufulde'],
           thumb: "assets/images/training/mod12/FFU.jpg",
          id: "ePeiO76aVAc",
        },




     {
        
          type: 'youtube',
          title: " SELLING ON BRIDGEAFRICA.COM",
          tag: ["bridgeafrica",'fufulde'],
           thumb: "assets/images/training/mod14/FFU.jpg",
          id: "EwQrPYxYuj8",
        },




         {
       
          type: 'youtube',
          title: "USING BRIDGEAFRICA.COM AS A CUSTOMER",
          tag: ["bridgeafrica",'fufulde'],
           thumb: "assets/images/training/mod15/FFU.jpg",
          id: "xkJScXdGP4o",
        },



        
         {
         
          type: 'youtube',
          title: " HOW TO CREATE A WEBSITE ON BRIDGEAFRICA.COM",
          tag: ["bridgeafrica",'fufulde'],
           thumb: "assets/images/training/mod13/FFU.jpg",
          id: "Q86VsRmoU0Q",
        },
        

       


         




      ],


        fr_videos:[


      
         {
        
          type: 'youtube',
          title: "développer des produits compétitifs",
          tag: ["bridgeafrica","Plan"],
           thumb: "assets/images/training/mod1/FR.jpg",
          id: "ePeiO76aVAc",
        },



          {
         
          type: 'youtube',
          title: "Comment enregistrer votre entreprise",
          tag: ["bridgeafrica",'creation'],
           thumb: "assets/images/training/mod2/FR.jpg",
          id: "6njJyiMZA68",
        },


        {
         
          type: 'youtube',
          title: "Définir un plan d'entreprise",
          tag: ["bridgeafrica","Plan"],
           thumb: "assets/images/training/mod3/FR.jpg",
          id: "rwxWEiiKS0U",
        },



        

         {
        
          type: 'youtube',
          title: "Emballage",
          tag: ["bridgeafrica","Plan"],
           thumb: "assets/images/training/mod4/FR.jpg",
          id: "bhpQoA7rp30",
        },


{
        
          type: 'youtube',
          title: "Branding",
          tag: ["bridgeafrica","Plan"],
           thumb: "assets/images/training/mod5/FR.jpg",
          id: "ePeiO76aVAc",
        },

   {
         
          type: 'youtube',
          title: "Logistique locale et internationale",
          tag: ["bridgeafrica","Plan"],
           thumb: "assets/images/training/mod6/FR.jpg",
          id: "_1DjN9eBjkY",
        },



        {
        
          type: 'youtube',
          title: "Gagner de l'argent en ligne",
          tag: ["bridgeafrica","Digital"],
           thumb: "assets/images/training/mod7/FR.jpg",
          id: "QQuWClPzcuo",
        },



        {
         
          type: 'youtube',
          title: "Marketing numérique",
          tag: ["bridgeafrica","Digital"],
           thumb: "assets/images/training/mod8/FR.jpg",
          id: "lZSeQnjzt8o",
        },


          {
        
          type: 'youtube',
          title: "comprendre le système de paiement numérique",
          tag: ["bridgeafrica","Digital"],
           thumb: "assets/images/training/mod9/FR.jpg",
          id: "3Vl3bSU-wqQ",
        },


         {
          
          type: 'youtube',
          title: "IDENTIFIER ET DÉVELOPPER LES LIENS AVEC LE MARCHÉ  CONSTRUIRE VOTRE RÉSEAU",
          tag: ["bridgeafrica","Digital"],
           thumb: "assets/images/training/mod10/FR.jpg",
          id: "INywx9vMfp4",
        },
     

      {
         
          type: 'youtube',
          title: "GESTION DES RESEAUX SOCIAUX",
          tag: ["bridgeafrica",'creation'],
           thumb: "assets/images/training/mod11/FR.jpg",
          id: "ePeiO76aVAc",
        },

 {
         
          type: 'youtube',
          title: "TENIR DES REGISTRES SUIVRE LES PROGRÈS DE VOTRE ENTREPRISE",
          tag: ["bridgeafrica",'creation'],
           thumb: "assets/images/training/mod12/FR.jpg",
          id: "ePeiO76aVAc",
        },




        {
         
          type: 'youtube',
          title: "COMMENT CRÉER UN SITE WEB SUR BRIDGEAFRICA.COM",
          tag: ["bridgeafrica","hba",'creation'],
           thumb: "assets/images/training/mod13/FR.jpg",
          id: "0S8Kc7bgMY8",
        },


     {
         
          type: 'youtube',
          title: "VENDRE SUR BRIDGEAFRICA",
          tag: ["bridgeafrica",'hba','creation'],
           thumb: "assets/images/training/mod14/FR.jpg",
          id: "0S8Kc7bgMY8",
        },

         
         {
         
          type: 'youtube',
          title: "UTILISER BRIDGEAFRICA.COM EN TANT QUE CLIENT",
          tag: ["bridgeafrica",'hba','creation'],
           thumb: "assets/images/training/mod15/FR.jpg",
          id: "0S8Kc7bgMY8",
        },

       

        {
         
          type: 'youtube',
          title: "développer des produits compétitifs",
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod1/FFU.jpg",
          id: "vbgShfVz9Iw",
        },



          {
        
          type: 'youtube',
          title: "Comment enregistrer votre entreprise",
          tag: ["bridgeafrica",'hba','fufulde'],
           thumb: "assets/images/training/mod2/FFU.jpg",
          id: "qlJIwRI1AEI",
        },


        {
        
          type: 'youtube',
          title: "Définir un plan d'entreprise",
          tag: ["bridgeafrica",'hba',"fufulde"],
           thumb: "assets/images/training/mod3/FFU.jpg",
          id: "96QS4J0b8F4",
        },



        

         {
        
          title: "Emballage",
          type: 'youtube',
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod4/FFU.jpg",
          id: "BJtABiNS0LU",
        },


{
         
          title: "Branding",
          type: 'youtube',
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod5/FFU.jpg",
          id: "qoigtzeTCu8",
        },

   {
        
          type: 'youtube',
          title: "Logistique locale et internationale",
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod6/FFU.jpg",
          id: "xpPsvHCj1Ss",
        },



        {
         
          type: 'youtube',
          title: "Gagner de l'argent en ligne",
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod7/FFU.jpg",
          id: "ptsna6yIsZM",
        },



        {
        
          type: 'youtube',
          title: "Marketing numérique",
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod8/FFU.jpg",
          id: "oktDhhtOYuo",
        },


          {
       
          type: 'youtube',
          title: "comprendre le système de paiement numérique",
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod9/FFU.jpg",
          id: "xAAaj2R1SYU",
        },


         {
          
          type: 'youtube',
          title: "IDENTIFIER ET DÉVELOPPER LES LIENS AVEC LE MARCHÉ : CONSTRUIRE VOTRE RÉSEAU",
          tag: ["bridgeafrica","fufulde"],
           thumb: "assets/images/training/mod10/FFU.jpg",
          id: "oqkGYTzygQE",
        },
     

      {
         
          type: 'youtube',
          title: "GESTION DES RESEAUX SOCIAUX",
          tag: ["bridgeafrica",'fufulde'],
           thumb: "assets/images/training/mod11/FFU.jpg",
          id: "ePeiO76aVAc",
        },

 {
         
          type: 'youtube',
          title: "TENIR DES REGISTRES SUIVRE LES PROGRÈS DE VOTRE ENTREPRISE",
          tag: ["bridgeafrica",'fufulde'],
           thumb: "assets/images/training/mod12/FFU.jpg",
          id: "ePeiO76aVAc",
        },




        {
          
          type: 'youtube',
          title: "COMMENT CRÉER UN SITE WEB SUR BRIDGEAFRICA.COM",
          tag: ["bridgeafrica",'fufulde'],
           thumb: "assets/images/training/mod13/FFU.jpg",
          id: "0S8Kc7bgMY8",
        },


     {
         
          type: 'youtube',
          title: "VENDRE SUR BRIDGEAFRICA",
          tag: ["bridgeafrica",'fufulde'],
           thumb: "assets/images/training/mod14/FFU.jpg",
          id: "0S8Kc7bgMY8",
        },

         
         {
         
          type: 'youtube',
          title: "UTILISER BRIDGEAFRICA.COM EN TANT QUE CLIENT",
          tag: ["bridgeafrica",'fufulde'],
           thumb: "assets/images/training/mod15/FFU.jpg",
          id: "0S8Kc7bgMY8",
        },



      


        




      ],


    };
  },

  computed: {
    getResources() {
      if (this.selectedResource == "all") {
        return this.resources;
      }
      return this.resources.filter((res) => {
        if (res.tag.includes(this.selectedResource)) {
         
          return res;
        }
      });
    },

  
  


    resources(){

      if(this.$i18n.locale == 'en'){ 
        return this.eng_videos;
      }
      else{
   return this.fr_videos;
      }
    }
  },

  mounted(){
    this.loadMore()
  },


  methods: {
    /**
     * this fuction is for change ressources
     * @private
     */
    changeResource(resource) {
      this.selectedResource = resource;
     

      this.page=0;
      this.show_more=true;
      this.renderResources=[]
       this.loadMore()
    },

     openGallery(index) {

      console.log(index);
      console.log("yoooo");
      this.$refs.lightbox.showImage(index);
    },

    loadMore(){
      this.loading=true;

      setTimeout(() => {
        this.loading=false;
        }, 1000);


    

    if(this.page==1){ 

         this.renderResources.push(...this.getResources.slice(6,12)); 

      if(this.getResources.length>7){
             this.show_more=true;
          }else{
             this.show_more=false;
           
          }
           }


          else if(this.page==2){ 

             this.renderResources.push(...this.getResources.slice(12,18)); 

      if(this.getResources.length>13){
             this.show_more=true;
          }else{
             this.show_more=false;
           
          }
           }



           else if(this.page==3){ 
              this.renderResources.push(...this.getResources.slice(18,24)); 
      if(this.getResources.length>19){
             this.show_more=true;
          }else{
             this.show_more=false;
           
          }
           }


            else if(this.page==4){ 
               this.renderResources.push(...this.getResources.slice(24,30)); 
      if(this.getResources.length>25){
             this.show_more=true;
          }else{
             this.show_more=false;
           
          }
           }  else if(this.page==0){ 

    this.renderResources.push(...this.getResources.slice(0,6)); 

    if(this.getResources.length>6){
             this.show_more=true;
          }else{
             this.show_more=false;
           
          }

}
  else{
                 this.show_more=false;
           }

           

        this.page=this.page+1

    }
  },  
};


</script>  

<style scoped>

.text-capitalised{
  text-transform: uppercase
}

@media only screen and (min-width: 768px) {

.tabs-resource{

   scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */

     flex-wrap: nowrap;
    white-space: nowrap;
    overflow: auto;
    justify-content: center;
}

}


@media only screen and (max-width: 768px) {
     
     .tabs-resource{

   scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */

     flex-wrap: nowrap;
    white-space: nowrap;
    overflow: auto;
    padding-left: auto;
}


}



 
 .tabs-resource::-webkit-scrollbar {
    display: none;
  }


@media (max-width: 768px) {
.h1-text{

font-size: 18px;
}}

.bg-black {
  background-color: #000000;
  
}
.color-white {
  color: #ffffff;
}

.resource-div {
  transition: all 0.5s;
  cursor: pointer;
}
.resource-div:hover .resource-img-div .resource-img {
  opacity: 0.6;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.resource-div:hover .resource-title .resource-line {
  width: 50%;
}

.resource-img-div {

  width: 100%;
  overflow: hidden;
}
.resource-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.resource-title {
  padding: 30px 0;
  background-color: #ffffff;
 
  text-align: center;
  margin-top: -30px !important;
  text-transform: uppercase;
}
.resource-title p {
  text-align: center;
  font-size: 20px;
  letter-spacing: 0px;
  font-weight: 700;
  font-family: "Arvo";
  text-transform: uppercase;
}
.resource-line {
  border: 1px solid black;
  width: 30%;
  margin: auto;
      margin-top: -10px;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.mt-md-4,
.my-md-4 {
  margin-top: 0rem !important;
}

@media only screen and (max-width: 660px) {
  .header-img-text {
    font-size: 27px;
    padding: 60px 40px;
  }
  .resource-title {
  padding: 30px 0;
  background-color: #ffffff;
 
  text-align: center;
  margin-top: -100px;
}

  .header-img-text p {
    margin-bottom: 0px;
  }
  .bg-img {
    height: 50vh;
  }
  .video-desc {
    margin-top: 0;
  }
  .welcome-heading {
    font-size: 18px;
    line-height: 1.3em;
  }
  .functionality-heading {
    font-size: 32px;
  }
  .site-text {
    font-size: 24px;
  }
  .link-text {
    line-height: 28px;
    font-size: 14px;
  }
  .functionality-flex {
    flex-direction: column;
  }
  .specific-main-div {
    min-height: 100px;
    padding-top: 50px;
  }
  .yellow-img img {
    width: 100%;
    height: 0;
  }
  .biz-konnect-video iframe {
    min-height: 40vh;
  }
  .contact-img {
    width: 85%;
  }
  .social-icon {
    font-size: 36px;
  }
  .footer-icon-text {
    left: 50%;
    top: 30px;
  }
}

.f-12{
  font-size: 12px;
}




</style>

<style >
  .vib-container:hover .vib-hidden {
  opacity: 1 !important;
}
</style>




<style scoped>
@media only screen and (min-width: 768px) {
  

  .text {
    font-size: 14px;
  }

}

@media only screen and (max-width: 768px) {
  

  .text {
    font-size: 12px;
  }

  .embed-responsive-16by9 {
    height: 150px !important;
  }
}

.embed-responsive-16by9 {
  height: 200px;
}
.s-embed {
  border-radius: 10px;
}

.s-card {
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
}
</style>
