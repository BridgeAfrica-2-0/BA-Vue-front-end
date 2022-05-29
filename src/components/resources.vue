<template>
  <!-- Our Resources -->
  <section class="resources bg-black py-5 px-4">
    <h1 class="text-center h1-text  font-arvo text-light">
      Digital Education to help you make more money online
    </h1>
    <div class="row justify-content-center my-5">
      <div class="col-md-8">
        <div class="d-flex justify-content-around tabs-resource">
         
         
         
         
        </div>
      </div>
    </div>

    <div class="row">
      <div
        v-for="resource in getResources"
        :key="resource.id"
        class="col-md-4 mt-4 resource-div"
      >
        <div class="resource-img-div">
         <img :src="resource.picture" alt="..." class="resource-img" /> 

          <!-- <b-embed
            type="iframe"
            aspect="16by9"
            :src="resource.video"
            allowfullscreen
            class="s-embed resource-img"
          ></b-embed> -->
        </div>
        <div class="resource-title mt-3">
          <p v-if="resource.title.length > 25">
            {{ resource.title.substring(0, 25) }}...
          </p>
          <p v-else>
          <b-link :href="resource.video"> {{ resource.title }}  </b-link> 
          </p>

          <div class="resource-line"></div>
        </div>
      </div>
    </div>
  </section>
</template>


      
<script>
export default {
  name: "Resources",

  data() {
    return {
      subEmail: "",
      selectedResource: "bridgeafrica",
      
      eng_videos:[
        



     {
          id: "1",
          title: " SELLING ON BRIDGEAFRICA.COM",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod14/EN.jpg",
          video: "https://youtu.be/EwQrPYxYuj8",
        },




         {
          id: "2",
          title: "USING BRIDGEAFRICA.COM AS A CUSTOMER",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod15/EN.jpg",
          video: "https://youtu.be/xkJScXdGP4o",
        },



        
         {
          id: "3",
          title: " HOW TO CREATE A WEBSITE ON BRIDGEAFRICA.COM",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod13/EN.jpg",
          video: "https://youtu.be/Q86VsRmoU0Q",
        },
        

         {
          id: "4",
          title: "packaging",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod4/EN.jpg",
          video: "https://youtu.be/8fOVIxnAK0A",
        },



        {
          id: "5",
          title: "BRANDING",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod5/EN.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },


         {
          id: "6",
          title: "BRANDING",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod2/EN.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },


         {
          id: "7",
          title: "BRANDING",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod3/EN.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },

          {
          id: "8",
          title: "BRANDING",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod6/EN.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },



          {
          id: "9",
          title: "BRANDING",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod7/EN.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },



          {
          id: "10",
          title: "BRANDING",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod8/EN.jpg",
          video: "https://youtu.be/ePeiO76aVAc",
        },





      ],


        fr_videos:[


          {
          id: "1",
          title: "UTILISER BRIDGEAFRICA.COM EN TANT QUE CLIENT",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod2/FR.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
        },


        {
          id: "2",
          title: "UTILISER BRIDGEAFRICA.COM EN TANT QUE CLIENT",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod3/FR.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
        },

   {
          id: "3",
          title: "UTILISER BRIDGEAFRICA.COM EN TANT QUE CLIENT",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod6/FR.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
        },



        {
          id: "4",
          title: "UTILISER BRIDGEAFRICA.COM EN TANT QUE CLIENT",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod7/FR.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
        },



        {
          id: "5",
          title: "UTILISER BRIDGEAFRICA.COM EN TANT QUE CLIENT",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod8/FR.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
        },



         
         {
          id: "6",
          title: "UTILISER BRIDGEAFRICA.COM EN TANT QUE CLIENT",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod15/FR.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
        },



         {
          id: "7",
          title: "VENDRE SUR BRIDGEAFRICA",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod14/FR.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
        },


        {
          id: "8",
          title: "COMMENT CRÉER UN SITE WEB SUR BRIDGEAFRICA.COM",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod13/FR.jpg",
          video: "https://youtu.be/0S8Kc7bgMY8",
        },

         {
          id: "9",
          title: "Emballage",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod4/FR.jpg",
          video: "https://youtu.be/bhpQoA7rp30",
        },


{
          id: "10",
          title: "BRANDING",
          tag: ["bridgeafrica"],
           picture: "assets/images/training/mod5/FR.jpg",
          video: "https://youtu.be/UoppCYEMehM",
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
          console.log(res.tag);
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

  methods: {
    /**
     * this fuction is for change ressources
     * @private
     */
    changeResource(resource) {
      this.selectedResource = resource;
    },
  },
};
</script>

<style scoped>
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
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
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
  object-fit: cover;
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
  margin-top: -39px;
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
</style>