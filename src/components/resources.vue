<template>

  


      <!-- Our Resources -->
    <section class="resources bg-black py-5 px-4">
      <h1 class="text-center font-arvo text-light">  Digital Education to help you make more money online  </h1>
      <div class="row justify-content-center my-5">
        <div class="col-md-8">
          <div class="d-flex justify-content-around tabs-resource">
            <b-button
              pill
              :variant="selectedResource == 'all' ? 'primary' : 'outline-primary'"
              @click="changeResource('all')"
              >{{$t("about.Show_All")}}</b-button
            >
            <b-button
              pill
              :variant="selectedResource == 'bridgeafrica' ? 'primary' : 'outline-primary'"
              @click="changeResource('bridgeafrica')"
              >bridgeafrica.com</b-button
            >
            <b-button
              pill
              :variant="selectedResource == 'cameroon' ? 'primary' : 'outline-primary'"
              @click="changeResource('cameroon')"
              >Cameroon Gallery</b-button
            >
            <b-button
              pill
              :variant="selectedResource == 'cunsulting' ? 'primary' : 'outline-primary'"
              @click="changeResource('cunsulting')"
              >{{$t("about.Consulting")}}</b-button
            >
            <b-button
              pill
              :variant="selectedResource == 'media' ? 'primary' : 'outline-primary'"
              @click="changeResource('media')"
              >{{$t("about.Media_Production")}}</b-button
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div v-for="resource in getResources" :key="resource.id" class="col-md-4 mt-4 resource-div">
          <div class="resource-img-div">
            <img :src="resource.img_url" alt="..." class="resource-img" />
          </div>
          <div class="resource-title">
            <p v-if="resource.title.length > 25">{{ resource.title.substring(0, 25) }}...</p>
            <p v-else>
              {{ resource.title }}
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
      subEmail: '',
      selectedResource: 'all',
      resources: [
        {
          id: '1',
          title: this.$t('general.HOW_TO_USE_BRIDGEAFRICA'),
          img_url:
            require('../assets/img/about/WSIS-thumbnail-1024x592-1-thegem-portfolio-masonry-img11.png'),
          tag: ['bridgeafrica', 'cameroon', 'cunsulting', 'media'],
        },
        {
          id: '2',
          title: this.$t("general.BETA_LAUNCH_OF_BRIDGEAFRICA"),
          img_url:
            require('../assets/img/about/THINDFDF-1024x743-1-thegem-portfolio-masonry-img12.png'),
          tag: ['bridgeafrica', 'cameroon'],
        },
        {
          id: '3',
          title: this.$t('general.Partners_with_Pea'),
          img_url:
            require('../assets/img/about/mapoure-1024x576-1-thegem-portfolio-masonry-14.png'),
          tag: ['bridgeafrica', 'media'],
        },
        {
          id: '4',

          title: 'BridgeAfrica.com Gives Digital Literacy Training (Demo)',
          img_url: require('../assets/img/about/000000-img15.png'),

          tag: ['cunsulting', 'media'],
        },
        {
          id: '5',
          title: this.$t('general.Cameroon_Gallery_Commercial'),
          img_url:
            require('../assets/img/about/caeroon-gallery-thegem-portfolio-masonry-16.jpg'),
          tag: ['cameroon', 'media'],
        },
      ],
    };},

  computed: {
    getResources() {
      if (this.selectedResource == 'all') {
        return this.resources;
      }
      return this.resources.filter(res => {
        if (res.tag.includes(this.selectedResource)) {
          return res;
        }
      });
    },
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
}
.resource-title p {
  text-align: center;
  font-size: 20px;
  letter-spacing: 0px;
  font-weight: 700;
  font-family: 'Arvo';
}
.resource-line {
  border: 1px solid black;
  width: 30%;
  margin: auto;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.mt-md-4, .my-md-4 {
    margin-top: 0rem !important;
}

@media only screen and (max-width: 660px) {
  .header-img-text {
    font-size: 27px;
    padding: 60px 40px;
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
  }}

</style>