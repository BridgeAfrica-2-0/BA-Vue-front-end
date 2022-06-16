<template>
  <!-- Our Resources -->
  <section class="resources bg-black py-5 px-4">
    <h1 class="text-center h1-text  font-arvo text-light">
      Digital Education to help you make more money online
    </h1>
    <div class="row justify-content-center my-5">
      <div class="col-md-8">
        <div class="d-flex  tabs-resource">
             

              <b-button
              pill
              :variant="selectedResource == 'bridgeafrica' ? 'primary' : 'outline-primary'"
              class="f-12 mr-2"
              @click="changeResource('bridgeafrica')"
              >{{$t("about.Show_All")}}</b-button
            >

             <b-button class="f-12 mr-2"
              pill
              :variant="selectedResource == 'hba' ? 'primary' : 'outline-primary'"
              @click="changeResource('hba')"
              > {{ $t("general.how_to_use_bridgeafrica") }}  </b-button
            >

            <b-button class="f-12 mr-2"
              pill
              :variant="selectedResource == 'Plan' ? 'primary' : 'outline-primary'"
              @click="changeResource('Plan')"
              > {{ $t("general.business_plan") }}  </b-button
            >
            <b-button class="f-12 mr-2"
              pill
              :variant="selectedResource == 'Digital' ? 'primary' : 'outline-primary'"
              @click="changeResource('Digital')"
              >  {{ $t("general.digital_busines") }}  </b-button
            >


              <b-button class="f-12 mr-2"
              pill
              :variant="selectedResource == 'creation' ? 'primary' : 'outline-primary'"
              @click="changeResource('creation')"
              > {{ $t("general.business_creation") }}  </b-button
            >


            
              <b-button class="f-12 mr-2"
              pill
              :variant="selectedResource == 'fufulde' ? 'primary' : 'outline-primary'"
              @click="changeResource('fufulde')"
              >Fufulde</b-button
            >



         
         
         
        </div>
      </div>
    </div>

    <div class="row">
      <div
        v-for="resource in renderResources"
        :key="resource.id"
        class="col-md-4 mt-4 resource-div"
      >
        <div class="resource-img-div">
       
         <b-img-lazy  :src="resource.picture" alt="..." class="resource-img"/>

        </div>
        <div class="resource-title mt-3">
          <p v-if="resource.title.length > 115">
            {{ resource.title.substring(0, 115) }}...
          </p>
          <p v-else>
          <b-link :href="resource.video"> {{ resource.title }}  </b-link> 
          </p>

          <div class="resource-line"></div>
        </div>
      </div>

    <div class="text-center">  
      <div> 
        <b-spinner  v-if="loading" variant="success" class="mt-2" label="Spinning" ></b-spinner>
          </div>
         
 </div>

    </div>
     <div class="text-center">  
      <b-button v-if="show_more"
        class="mt-3 "
        style="width:200px"
              pill
              variant="primary"
              @click="loadMore"
              >{{$t("general.Load_more")}}</b-button
            >

             </div>
  </section>
</template>


      
<script>
export default {
  name: "Resources",

  data() {
    return {
      subEmail: "",
      page:0,
      show_more:true,
      loading:false,
      renderResources:[],
      selectedResource: "bridgeafrica",
      
      eng_videos:[
        


         {
          id: "1",
          title: "developing competitive products",
          tag: ["bridgeafrica","Plan"],  
           picture: "assets/images/training/mod1/EN.jpg",
          video: "https://youtu.be/X7ZK3elhVGI",
        },




  {
          id: "2",
          title: "How To Register Your Business",
          tag: ["bridgeafrica",'creation'],
           picture: "assets/images/training/mod2/EN.jpg",
          video: "https://youtu.be/BJ1fRB37XRg",
        },

          {
          id: "3",
          title: "Defining A Business Plan",
          tag: ["bridgeafrica","Plan"],
           picture: "assets/images/training/mod3/EN.jpg",
          video: "https://youtu.be/xE_MDyTftuY",
        },
      
        {
          id: "4",
          title: "packaging",
          tag: ["bridgeafrica","Plan"],
           picture: "assets/images/training/mod4/EN.jpg",
          video: "https://youtu.be/8fOVIxnAK0A",
        },


          {
          id: "5",
          title: "BRANDING",
          tag: ["bridgeafrica","Plan"],
           picture: "assets/images/training/mod5/EN.jpg",
          video: "https://youtu.be/BJtABiNS0LU",
        },


         


       
          {
          id: "6",
          title: "Local And International Logistics",
          tag: ["bridgeafrica","Plan"],
           picture: "assets/images/training/mod6/EN.jpg",
          video: "https://youtu.be/_1DjN9eBjkY",
        },

         {
          id: "7",
          title: "Making Money Online",
          tag: ["bridgeafrica","Digital"],
           picture: "assets/images/training/mod7/EN.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },



          {
          id: "8",
          title: "Digital Marketing",
          tag: ["bridgeafrica","Digital"],
           picture: "assets/images/training/mod8/EN.jpg",
          video: "https://youtu.be/45JO17Wm4vs",
        },



         {
          id: "9",
          title: "UNDERSTANDING DIGITAL PAYMENT SYSTEMS MOBILE MONEY SYSTEMS",
          tag: ["bridgeafrica","Digital"],
           picture: "assets/images/training/mod9/EN.jpg",
          video: "https://youtu.be/A2ioGy5SJXA",
        },


         {
          id: "10",
          title: "IDENTIFYING AND DEVELOPING MARKET LINKS: BUILDING YOUR NETWORK",
          tag: ["bridgeafrica","Digital"],
           picture: "assets/images/training/mod10/EN.jpg",
          video: "https://youtu.be/-SwMF8jqmAk",
        },
     

      {
          id: "11",
          title: " SOCIAL MEDIA MANAGEMENT",
          tag: ["bridgeafrica",'creation'],
           picture: "assets/images/training/mod11/EN.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },

 {
          id: "12",
          title: "KEEPING RECORDS: TRACK YOUR BUSINESS’ PROGRESS",
          tag: ["bridgeafrica",'creation'],
           picture: "assets/images/training/mod12/EN.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },




     {
          id: "13",
          title: " SELLING ON BRIDGEAFRICA.COM",
          tag: ["bridgeafrica","hba",'creation'],
           picture: "assets/images/training/mod14/EN.jpg",
          video: "https://youtu.be/EwQrPYxYuj8",
        },




         {
          id: "14",
          title: "USING BRIDGEAFRICA.COM AS A CUSTOMER",
          tag: ["bridgeafrica","hba",'creation'],
           picture: "assets/images/training/mod15/EN.jpg",
          video: "https://youtu.be/xkJScXdGP4o",
        },



        
         {
          id: "15",
          title: " HOW TO CREATE A WEBSITE ON BRIDGEAFRICA.COM",
          tag: ["bridgeafrica","hba",'creation'],
           picture: "assets/images/training/mod13/EN.jpg",
          video: "https://youtu.be/Q86VsRmoU0Q",
        },
        

       



      
{
          id: "16",
          title: "developing competitive products",
          tag: ["bridgeafrica","Plan"],
           picture: "assets/images/training/mod1/FFU.jpg",
          video: "https://youtu.be/vbgShfVz9Iw",
        },






  {
          id: "17",
          title: "How To Register Your Business",
          tag: ["bridgeafrica",'fufulde'],
           picture: "assets/images/training/mod2/FFU.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },

          {
          id: "18",
          title: "Defining A Business Plan",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod3/FFU.jpg",
          video: "https://youtu.be/96QS4J0b8F4",
        },
      
        {
          id: "19",
          title: "packaging",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod4/FFU.jpg",
          video: "https://youtu.be/BJtABiNS0LU",
        },


          {
          id: "20",
          title: "BRANDING",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod5/FFU.jpg",
          video: "https://youtu.be/qoigtzeTCu8",
        },


         


       
          {
          id: "21",
          title: "Local And International Logistics",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod6/FFU.jpg",
          video: "https://youtu.be/xpPsvHCj1Ss",
        },

         {
          id: "22",
          title: "Making Money Online",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod7/FFU.jpg",
          video: "https://youtu.be/ptsna6yIsZM",
        },



          {
          id: "23",
          title: "Digital Marketing",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod8/FFU.jpg",
          video: "https://youtu.be/oktDhhtOYuo",
        },



         {
          id: "24",
          title: "UNDERSTANDING DIGITAL PAYMENT SYSTEMS MOBILE MONEY SYSTEMS",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod9/FFU.jpg",
          video: "https://youtu.be/xAAaj2R1SYU",
        },


         {
          id: "25",
          title: "IDENTIFYING AND DEVELOPING MARKET LINKS: BUILDING YOUR NETWORK",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod10/FFU.jpg",
          video: "https://youtu.be/oqkGYTzygQE",
        },
     

      {
          id: "26",
          title: " SOCIAL MEDIA MANAGEMENT",
          tag: ["bridgeafrica",'fufulde'],
           picture: "assets/images/training/mod11/FFU.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },

 {
          id: "27",
          title: "KEEPING RECORDS: TRACK YOUR BUSINESS’ PROGRESS",
          tag: ["bridgeafrica",'fufulde'],
           picture: "assets/images/training/mod12/FFU.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },




     {
          id: "28",
          title: " SELLING ON BRIDGEAFRICA.COM",
          tag: ["bridgeafrica",'fufulde'],
           picture: "assets/images/training/mod14/FFU.jpg",
          video: "https://youtu.be/EwQrPYxYuj8",
        },




         {
          id: "29",
          title: "USING BRIDGEAFRICA.COM AS A CUSTOMER",
          tag: ["bridgeafrica",'fufulde'],
           picture: "assets/images/training/mod15/FFU.jpg",
          video: "https://youtu.be/xkJScXdGP4o",
        },



        
         {
          id: "30",
          title: " HOW TO CREATE A WEBSITE ON BRIDGEAFRICA.COM",
          tag: ["bridgeafrica",'fufulde'],
           picture: "assets/images/training/mod13/FFU.jpg",
          video: "https://youtu.be/Q86VsRmoU0Q",
        },
        

       


         




      ],


        fr_videos:[


      
         {
          id: "11",
          title: "développer des produits compétitifs",
          tag: ["bridgeafrica","Plan"],
           picture: "assets/images/training/mod1/FR.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },



          {
          id: "1",
          title: "Comment enregistrer votre entreprise",
          tag: ["bridgeafrica",'creation'],
           picture: "assets/images/training/mod2/FR.jpg",
          video: "https://youtu.be/6njJyiMZA68",
        },


        {
          id: "2",
          title: "Définir un plan d'entreprise",
          tag: ["bridgeafrica","Plan"],
           picture: "assets/images/training/mod3/FR.jpg",
          video: "https://youtu.be/rwxWEiiKS0U",
        },



        

         {
          id: "9",
          title: "Emballage",
          tag: ["bridgeafrica","Plan"],
           picture: "assets/images/training/mod4/FR.jpg",
          video: "https://youtu.be/bhpQoA7rp30",
        },


{
          id: "10",
          title: "BRANDING",
          tag: ["bridgeafrica","Plan"],
           picture: "assets/images/training/mod5/FR.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },

   {
          id: "3",
          title: "Logistique locale et internationale",
          tag: ["bridgeafrica","Plan"],
           picture: "assets/images/training/mod6/FR.jpg",
          video: "https://youtu.be/_1DjN9eBjkY",
        },



        {
          id: "4",
          title: "Gagner de l'argent en ligne",
          tag: ["bridgeafrica","Digital"],
           picture: "assets/images/training/mod7/FR.jpg",
          video: "https://youtu.be/QQuWClPzcuo",
        },



        {
          id: "5",
          title: "Marketing numérique",
          tag: ["bridgeafrica","Digital"],
           picture: "assets/images/training/mod8/FR.jpg",
          video: "https://youtu.be/lZSeQnjzt8o",
        },


          {
          id: "12",
          title: "comprendre le système de paiement numérique",
          tag: ["bridgeafrica","Digital"],
           picture: "assets/images/training/mod9/FR.jpg",
          video: "https://youtu.be/3Vl3bSU-wqQ",
        },


         {
          id: "13",
          title: "IDENTIFIER ET DÉVELOPPER LES LIENS AVEC LE MARCHÉ  CONSTRUIRE VOTRE RÉSEAU",
          tag: ["bridgeafrica","Digital"],
           picture: "assets/images/training/mod10/FR.jpg",
          video: "https://youtu.be/INywx9vMfp4",
        },
     

      {
          id: "14",
          title: "GESTION DES RESEAUX SOCIAUX",
          tag: ["bridgeafrica",'creation'],
           picture: "assets/images/training/mod11/FR.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },

 {
          id: "15",
          title: "TENIR DES REGISTRES SUIVRE LES PROGRÈS DE VOTRE ENTREPRISE",
          tag: ["bridgeafrica",'creation'],
           picture: "assets/images/training/mod12/FR.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },




        {
          id: "8",
          title: "COMMENT CRÉER UN SITE WEB SUR BRIDGEAFRICA.COM",
          tag: ["bridgeafrica","hba",'creation'],
           picture: "assets/images/training/mod13/FR.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
        },


     {
          id: "7",
          title: "VENDRE SUR BRIDGEAFRICA",
          tag: ["bridgeafrica",'hba','creation'],
           picture: "assets/images/training/mod14/FR.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
        },

         
         {
          id: "6",
          title: "UTILISER BRIDGEAFRICA.COM EN TANT QUE CLIENT",
          tag: ["bridgeafrica",'hba','creation'],
           picture: "assets/images/training/mod15/FR.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
        },

       

        {
          id: "16",
          title: "développer des produits compétitifs",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod1/FFU.jpg",
          video: "https://youtu.be/vbgShfVz9Iw",
        },



          {
          id: "17",
          title: "Comment enregistrer votre entreprise",
          tag: ["bridgeafrica",'hba','fufulde'],
           picture: "assets/images/training/mod2/FFU.jpg",
          video: "https://youtu.be/qlJIwRI1AEI",
        },


        {
          id: "18",
          title: "Définir un plan d'entreprise",
          tag: ["bridgeafrica",'hba',"fufulde"],
           picture: "assets/images/training/mod3/FFU.jpg",
          video: "https://youtu.be/96QS4J0b8F4",
        },



        

         {
          id: "19",
          title: "Emballage",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod4/FFU.jpg",
          video: "https://youtu.be/BJtABiNS0LU",
        },


{
          id: "20",
          title: "BRANDING",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod5/FFU.jpg",
          video: "https://youtu.be/qoigtzeTCu8",
        },

   {
          id: "21",
          title: "Logistique locale et internationale",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod6/FFU.jpg",
          video: "https://youtu.be/xpPsvHCj1Ss",
        },



        {
          id: "22",
          title: "Gagner de l'argent en ligne",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod7/FFU.jpg",
          video: "https://youtu.be/ptsna6yIsZM",
        },



        {
          id: "23",
          title: "Marketing numérique",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod8/FFU.jpg",
          video: "https://youtu.be/oktDhhtOYuo",
        },


          {
          id: "24",
          title: "comprendre le système de paiement numérique",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod9/FFU.jpg",
          video: "https://youtu.be/xAAaj2R1SYU",
        },


         {
          id: "25",
          title: "IDENTIFIER ET DÉVELOPPER LES LIENS AVEC LE MARCHÉ : CONSTRUIRE VOTRE RÉSEAU",
          tag: ["bridgeafrica","fufulde"],
           picture: "assets/images/training/mod10/FFU.jpg",
          video: "https://youtu.be/oqkGYTzygQE",
        },
     

      {
          id: "26",
          title: "GESTION DES RESEAUX SOCIAUX",
          tag: ["bridgeafrica",'fufulde'],
           picture: "assets/images/training/mod11/FFU.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },

 {
          id: "27",
          title: "TENIR DES REGISTRES SUIVRE LES PROGRÈS DE VOTRE ENTREPRISE",
          tag: ["bridgeafrica",'fufulde'],
           picture: "assets/images/training/mod12/FFU.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },




        {
          id: "28",
          title: "COMMENT CRÉER UN SITE WEB SUR BRIDGEAFRICA.COM",
          tag: ["bridgeafrica",'fufulde'],
           picture: "assets/images/training/mod13/FFU.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
        },


     {
          id: "29",
          title: "VENDRE SUR BRIDGEAFRICA",
          tag: ["bridgeafrica",'fufulde'],
           picture: "assets/images/training/mod14/FFU.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
        },

         
         {
          id: "30",
          title: "UTILISER BRIDGEAFRICA.COM EN TANT QUE CLIENT",
          tag: ["bridgeafrica",'fufulde'],
           picture: "assets/images/training/mod15/FFU.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
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

@media only screen and (min-width: 768px) {

.tabs-resource{

   scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */

     flex-wrap: nowrap;
    white-space: nowrap;
    overflow: auto;
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
  color: #000000;
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
  height: 275px;
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
  color: #000000;
  text-align: center;
  margin-top: -30px !important;
}
.resource-title p {
  text-align: center;
  font-size: 20px;
  letter-spacing: 0px;
  font-weight: 700;
  font-family: "Arvo";
}
.resource-line {
  border: 1px solid black;
  width: 30%;
  margin: auto;
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
  color: #000000;
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