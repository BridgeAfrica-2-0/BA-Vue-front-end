<template>
  <section class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-10 col-sm-offset-1 text-center">
            <div class="four_zero_four_bg">
             
            </div>
            <div class="contant_box_404">
              <h3 class="h2">{{$t("welcome.Look_like_you_re_lost")}}</h3>
              <p>{{$t("welcome.the_page_you_are_looking_for_not_avaible")}}!</p>
              <router-link to="dashboard">
                <md-button class="bt link_404 btn-primary">
                  {{$t("welcome.Go_to_Home")}}
                </md-button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>  

<script>
export default {};
</script>
<style scoped>
.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo", serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;

  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  margin-top: -50px;
}
</style>
