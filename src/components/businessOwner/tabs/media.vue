<template>
  <div>
    <fas-icon class="violet mr-2 pt-1 icon-size primary" :icon="['fas', 'file-image']" />Media

    <hr />

    <b-tabs lazy content-class="mt-3" pills>
      <b-tab title="Posts" active> <Images /> </b-tab>
      <b-tab title="Albums"> <Album /> </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Album from './album';
import Images from './images';
import axios from 'axios';
export default {
  components: {
    Album,
    Images,
  },
  methods: {
    onClick(i) {
      this.index = i;
    },

    //function to get albums

    getAlbums() {
      this.$store
        .dispatch('businessOwner/getAlbums', this.url_data)
        .then(() => {
          console.log('hey yeah');
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

    getImages() {
      this.$store
        .dispatch('businessOwner/getImages', this.url_data)
        .then(() => {
          console.log('hey yeah');
        })
        .catch(err => {
          console.log({ err: err });
        });
    },
  },

  mounted() {
    this.url_data = this.$route.params.id;
    this.getAlbums();
    this.getImages();
  },
  data: function() {
    return {
      url_data: null,
      images: [
        'https://placekitten.com/801/800',
        'https://placekitten.com/802/800',
        'https://placekitten.com/803/800',
        'https://placekitten.com/804/800',
        'https://placekitten.com/805/800',
        'https://placekitten.com/806/800',
        'https://placekitten.com/807/800',
        'https://placekitten.com/808/800',
        'https://placekitten.com/809/800',
      ],
      imagees: [
        'https://i.wifegeek.com/200426/f9459c52.jpg',
        'https://i.wifegeek.com/200426/5ce1e1c7.jpg',
        'https://i.wifegeek.com/200426/5fa51df3.jpg',
        'https://i.wifegeek.com/200426/663181fe.jpg',
        'https://i.wifegeek.com/200426/2d110780.jpg',
        'https://i.wifegeek.com/200426/e73cd3fa.jpg',
        'https://i.wifegeek.com/200426/15160d6e.jpg',
        'https://i.wifegeek.com/200426/d0c881ae.jpg',
        'https://i.wifegeek.com/200426/a154fc3d.jpg',
        'https://i.wifegeek.com/200426/71d3aa60.jpg',
        'https://i.wifegeek.com/200426/d17ce9a0.jpg',
        'https://i.wifegeek.com/200426/7c4deca9.jpg',
        'https://i.wifegeek.com/200426/64672676.jpg',
        'https://i.wifegeek.com/200426/de6ab9c6.jpg',
        'https://i.wifegeek.com/200426/d8bcb6a7.jpg',
        'https://i.wifegeek.com/200426/4085d03b.jpg',
        'https://i.wifegeek.com/200426/177ef44c.jpg',
        'https://i.wifegeek.com/200426/d74d9040.jpg',
        'https://i.wifegeek.com/200426/81e24a47.jpg',
        'https://i.wifegeek.com/200426/43e2e8bb.jpg',
      ],
      index: 0,
    };
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
