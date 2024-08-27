<template>
  <div>
    <fas-icon
      class="violet mr-2 pt-1 icon-size primary"
      :icon="['fas', 'file-image']"
    />Media

    <hr />

    <b-tabs content-class="mt-3" pills>
      <b-tab title="Posts" active> <Images :images="ownerpostimages" /> </b-tab>
      <b-tab title="Albums"> <Album :albums="owneralbums" /> </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Album from "./album";
import Images from "./images";
export default {
  name: "mediaNetwork",
  components: {
    Album,
    Images
  },
  data: function() {
    return {
      url: null,
      index: 0
    };
  },
  computed: {
    ownerpostimages() {
      return this.$store.state.networkProfileMedia.ownerpostimages;
    },
    owneralbums() {
      return this.$store.state.networkProfileMedia.owneralbums;
    }
  },
  mounted() {
    this.url = this.$route.params.id;
    this.ownerPostImages();
    this.ownerAlbums();
  },
  methods: {
    onClick(i) {
      this.index = i;
    },
    ownerPostImages() {
      this.$store
        .dispatch("networkProfileMedia/getImages", this.url)
        .then(() => {
          console.log("ohh year");
        })
        .catch(err => {
          console.log({ err: err });
        });
    },
    ownerAlbums() {
      this.$store
        .dispatch("networkProfileMedia/getAlbums", this.url)
        .then(() => {
          console.log("ohh year");
        })
        .catch(err => {
          console.log({ err: err });
        });
    }
  }
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
  .image-wrap {
    border: 4px dashed #e75c18;
    position: relative;
    position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 20%;
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
    width: 19.1%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
  .image-wrap {
    border: 4px dashed #e75c18;
    position: relative;
    position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
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
  .image-wrap {
    border: 4px dashed #e75c18;
    position: relative;
    position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
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
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
  .image-wrap {
    border: 4px dashed #e75c18;
    position: relative;
    position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}
.drag-textt {
  text-align: center;
  font-weight: 100;
  text-transform: uppercase;
  color: #000;
}
</style>
