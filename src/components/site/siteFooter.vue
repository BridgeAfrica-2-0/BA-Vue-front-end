<template>
  <section class="footer">
   

    <footer id="footer">
      <div class="footer-top black-back">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <div class="row">
                <div class="col-8 footer-img-col">
                  <img
                    src="../../assets/img/bavlogo.png"
                    width="200px"
                    class="size px-n1 px-md-0"
                    alt=""
                  />
                </div>
              </div>

              <div class="social-links mt-3 text-left">
                <a href="https://twitter.com/bridgeafricacom" class="twitter bridge-icon" target="_blank"
                  >     <b-icon icon="twitter"  class="twitter bridge-icon" > </b-icon>  </a> 
                <a href="http://facebook.com/bridgeafricacom" class="facebook bridge-icon" target="_blank"
                  >  <b-icon icon="facebook"  class="facebook bridge-icon" > </b-icon>  </a>
                <a href="https://instagram.com/bridgeafricacom" class="instagram bridge-icon" target="_blank"
                  >  <b-icon icon="instagram"  class=" instagram bridge-icon" > </b-icon>   </a>

                <a href="https://www.youtube.com/channel/UC8JjdBDrz7GsqnO7kpEEHvA" class="youtube bridge-icon" target="_blank"
                  >  <b-icon icon="youtube"  class="youtube bridge-icon" > </b-icon>    </a>
              </div>

              <br />

              <span style="float: left">
                <span style="color: #e75c18">©2021</span> Bridge Africa
              </span>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4 class="bridge-header text-left white">
                {{ $t("home.OUR_ADDRESS") }}
              </h4>
              <ul class="text-left white">
                <li>
                  {{ $t("home.International_Handicraft_Center") }},
                  {{ $t("home.Rond_point_Intendance") }}
                </li>

                <li>{{ $t("home.Yaounde") }}</li>

                <li>{{ $t("home.Cameroon") }}</li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links white">
              <h4 class="bridge-header text-left white">
                {{ $t("home.USEFUL_LINKS") }}
              </h4>
              <ul class="white">
                <li class="white over">bridgeafricaventures.com</li>

                <li class="white ">
                 

                   <router-link class="over" :to="{ name: 'newHome' }">{{
                    $t("home.Home")
                  }}</router-link>
                </li>

                <li class="white ">
                  <router-link class="over" :to="{ name: 'about' }">{{
                    $t("home.About_Us")
                  }}</router-link>
                </li>

                <li class="white ">
                  <router-link class="over" :to="{ name: 'contact' }">{{
                    $t("home.Contact_Us")
                  }}</router-link>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4 class="bridge-header text-left white">
                {{ $t("home.WORKING_HOURS") }}
              </h4>
              <ul class="white">
                <li>
                  {{ $t("home.Monday") }}-{{ $t("home.Friday") }}:
                  {{ $t("home.09AM_05PM") }}
                </li>

                <li>{{ $t("home.Saturday") }}: {{ $t("home.09AM_01PM") }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
/**
 * this component is the footer of the site page of the system 
 */
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.footer {
  margin-top: 2px !important;
      margin-bottom: 2px !important;
      padding:2px;
  width: 100%;
  min-height: 30vh;
  background-color: #000000;
  color: #ffffff;
}
.footer-icon-text {
  /* top: 15px; */
  left: 30%;
}
.footer-icons {
  font-size: 32px;
  text-decoration: none;
  color: #e75c18;
}
.footer-icons-div {
  width: 70%;
}
.color-white {
  color: #ffffff;
}

.over:hover{
  color: #e75c18 !important;
}


@media only screen and (max-width: 768px) {
  img{

    margin-left: -31px;
  }
}
@media only screen and (max-width: 660px) {
  .footer-icons-div {
    width: 100%;
  }
  .footer-img-col {
    padding-left: 10;
  }
}

</style>
