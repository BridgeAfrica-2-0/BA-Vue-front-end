<template>
  <div>
    <div class="row">
      <div class="container-fluid">


          <div class="img-gall" v-for="image in album.media" :key="image.id">
            <a href="#!"
              ><b-img
                class="card-img btn p-0"
                thumbnail
                fluid 
                rounded
                :src="image.media_url"
                alt="image-img"
                v-b-modal="'modal-'+image.id"
                v-bind="imageProps"
              ></b-img>
            </a>
            <b-modal hide-footer :id="'modal-'+image.id" title="Details">
              <img class="card-img" :src="image.media_url" alt="media_img" />
            </b-modal>
  
          </div>
         
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["album"],
  data: function() {
    return {
      show_url:null,
      url:null,
      img_url: null,
      image_details:null,
    
      index: 0,
      imageProps: {  width: 205, height: 205}
    };
  },
  methods: {
    /**
     *
     * @param i
     */
    onClick(i) {
      this.index = i;
    },



    showPic(image) {    
      console.log(image);
      this.image_details = image;
      this.$refs["Details"].show();
    },
   
  },
};
</script>

<style>
.text-design {
  align-items: first baseline;
}
.drop-color {
  color: black;
}
@media (min-width: 960px) {
  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }
  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 18.7%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
  @media (min-width: 1400px) {
    .lb-grid {
      height: 274px;
      margin-bottom: 8px;
    }
  }
  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 18.7%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1331px) {
  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }
  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 31%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}
@media (max-width: 762px) {
  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }
  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 47%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}
</style>