<template>
  <div>
    <!--    <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>-->
    <b-tabs content-class="mt-3">
      <b-tab title="Posts" active>
        <b-row>
          <b-col cols="4" v-for="(image, i) in images" :key="i" class="p-3 m-0">
            <img class="img-fluid" :src="image" @click="onClick(i)" />
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="Albums">
        <b-row>
          <b-col cols="3" v-for="(image, i) in 6" :key="i">
            <lightbox :cells="1" :items="images"></lightbox>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    onClick(i) {
      this.index = i;
    }
  },
  data: function() {
    return {
      images: [
        "https://placekitten.com/801/800",
        "https://placekitten.com/802/800",
        "https://placekitten.com/803/800",
        "https://placekitten.com/804/800",
        "https://placekitten.com/805/800",
        "https://placekitten.com/806/800",
        "https://placekitten.com/807/800",
        "https://placekitten.com/808/800",
        "https://placekitten.com/809/800"
      ],
      imagees: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
        "https://i.wifegeek.com/200426/5fa51df3.jpg",
        "https://i.wifegeek.com/200426/663181fe.jpg",
        "https://i.wifegeek.com/200426/2d110780.jpg",
        "https://i.wifegeek.com/200426/e73cd3fa.jpg",
        "https://i.wifegeek.com/200426/15160d6e.jpg",
        "https://i.wifegeek.com/200426/d0c881ae.jpg",
        "https://i.wifegeek.com/200426/a154fc3d.jpg",
        "https://i.wifegeek.com/200426/71d3aa60.jpg",
        "https://i.wifegeek.com/200426/d17ce9a0.jpg",
        "https://i.wifegeek.com/200426/7c4deca9.jpg",
        "https://i.wifegeek.com/200426/64672676.jpg",
        "https://i.wifegeek.com/200426/de6ab9c6.jpg",
        "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
        "https://i.wifegeek.com/200426/4085d03b.jpg",
        "https://i.wifegeek.com/200426/177ef44c.jpg",
        "https://i.wifegeek.com/200426/d74d9040.jpg",
        "https://i.wifegeek.com/200426/81e24a47.jpg",
        "https://i.wifegeek.com/200426/43e2e8bb.jpg"
      ],
      index: 0
    };
  }
};
</script>

<style>
.test {
  width: 100px;
  height: 100px;
  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}

@media (min-width: 1400px) {
  .lb-grid {
    height: 274px;
    margin-bottom: 8px;
  }
}
</style>
