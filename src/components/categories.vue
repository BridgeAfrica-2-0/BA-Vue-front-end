<template>
  <section>
    <div class="row">
      <div class="col-md-6 col-lg-6 desktop-image">
        <div class="home-decor">
          <router-link to="/search">
            <h1> {{ $t("general.home_decor") }}</h1>
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 desktop-image">
        <div class="fashion">
          <router-link to="/search">
            <h1> {{ $t("general.fashion") }}</h1>
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 mobile-image">
        <div class="mobile-home-decor">
          <router-link to="/search">
            <h1> {{ $t("general.home_decor") }}</h1>
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import("vue-it-bigger/dist/vue-it-bigger.min.css");
export default {
  name: "Categories"
};
</script>

<style scoped>
.home-decor,
.fashion {
  position: relative;
  background-size: cover;
  height: 700px;
  text-align: center;
  opacity: 0.9;
}

.mobile-home-decor {
  position: relative;
  background-size: cover;
  height: 50vh;
  text-align: center;
  opacity: 0.9;
}

.mobile-home-decor h1 {
  color: #fff;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 26px !important;
}

.home-decor {
  background-image: url("../../public/assets/home/category/category-1.png");
}

.fashion {
  background-image: url("../../public/assets/home/category/category-2.png");
  opacity: 1;
}

.mobile-home-decor {
  background-image: url("../../public/assets/home/category/category-3.png");
  background-size: cover !important;
  background-repeat: no-repeat;
  width: 100%;
  margin: auto;
}

.home-decor h1,
.fashion h1,
.home-decor i,
.fashion i {
  color: #fff;
  position: absolute;
  bottom: 140px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
}

.mobile-home-decor i {
  color: #fff;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 800;
}

.home-decor i {
  bottom: 70px;
  font-weight: 400 !important;
}

.fashion i {
  bottom: 125px;
  font-weight: 400 !important;
}

.mobile-image {
  display: none;
}

@media screen and (max-width: 431px) {
  .desktop-image {
    display: none;
  }

  .mobile-image {
    display: block;
  }
}
</style>
