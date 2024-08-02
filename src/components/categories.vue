<template>
  <section>  
    <div class="row">
      <div class="col-md-6 col-lg-6">
        <div class="home-decor">
          <h1>Home Decor</h1>
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
      <div class="col-md-6 col-lg-6">
        <div class="fashion">
          <h1>Fashion</h1>
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import("vue-it-bigger/dist/vue-it-bigger.min.css");
export default {
  name: "Categories",
  components: {},
  data() {},
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>  
.home-decor, .fashion {
  position: relative;
  background-size: cover;
  height: 700px;
  text-align: center;
  opacity: 0.9;
}

.home-decor {
  background-image: url('../../public/assets/home/category/category-1.png');
}

.fashion {
  background-image: url('../../public/assets/home/category/category-2.png');
  opacity: 1
}

.home-decor h1, .fashion h1,
.home-decor i, .fashion i {
  color: #fff;
  position: absolute;
  bottom: 140px;  
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
}

.home-decor i, .fashion i {
  bottom: 125px;  
  font-weight: 400 !important;
}

</style>
