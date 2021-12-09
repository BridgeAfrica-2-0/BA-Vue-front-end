<template>
  <section class="footer">
     <!-- <div class="container">
      <div class="row">
        <div class="col-md-3 py-4">
          <div class="d-flex position-relative">
            <img
              width="963"
              height="380"
              src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/logo.png"
              alt="LogoF"
            />
            <h3 class="text-light font-arvo position-absolute footer-icon-text font-weight-bold">
              Bridge <br />
              Africa
            </h3>
          </div>
          <div class="footer-icons-div d-flex flex-row justify-content-around my-4">
            <a href="https://twitter.com/bridgeafricacom" target="_blank" class="footer-icons">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="http://facebook.com/bridgeafricacom" target="_blank" class="footer-icons">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC8JjdBDrz7GsqnO7kpEEHvA" target="_blank" class="footer-icons">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://twitter.com/bridgeafricacom" target="_blank" class="footer-icons">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <p class="text-center text-md-left"><span class="text-primary">&copy; 2021</span> Bridge Africa</p>
        </div>
        <div class="col-md-3 py-4">
          <h5 class="font-arvo text-center text-md-left font-weight-bold ">
            OUR ADDRESS
          </h5>
          <p class="mt-5 font-weight-bold text-center text-md-left">
            International Handicraft Center, Rond-point Intendance
          </p>
          <p class="mb-1 font-weight-bold text-center text-md-left">
            Yaoundé
          </p>
          <p class="font-weight-bold text-center text-md-left">Cameroon</p>
        </div>
        <div class="col-md-3 py-4">
          <h5 class="font-arvo text-center text-md-left font-weight-bold">
            USEFUL LINK
          </h5>
          <p class="mt-5">
            <a href="#" class="color-white d-block font-weight-bold text-center text-md-left">
              BRIDGEAFRICA.COM
            </a>
            <a href="#" class="color-white d-block font-weight-bold text-center text-md-left">
              BRIDGEAFRICA.COM
            </a>

            <a href="#" class="color-white d-block font-weight-bold text-center text-md-left">
              ABOUT US
            </a>
            <a href="#" class="color-white d-block font-weight-bold text-center text-md-left">
              CONTACT US
            </a>
          </p>
        </div>
        <div class="col-md-3 py-4">
          <h5 class="font-arvo text-left font-weight-bold text-center text-md-left">
            WORKING HOURS
          </h5>
          <p class="mt-5 text-center text-md-left">
            Monday-Friday: 09AM – 05PM
          </p>
          <p class="text-center text-md-left">
            Saturday: 9AM – 01PM
          </p>
        </div>
      </div>
    </div>  -->
 
    <footer id="footer">
      <div class="footer-top black-back">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <div class="row">
                <div class="col-6">
                  <img src="../..//assets/img/logobr.png" width="200px" alt="" />
                </div>

                <div class="col-6 bblogo">Bridge Africa</div>
              </div>

              <div class="social-links mt-3 text-left">
                <a href="#" class="twitter bridge-icon"
                  ><i class="bx bxl-twitter"></i
                ></a>
                <a href="#" class="facebook bridge-icon"
                  ><i class="bx bxl-facebook"></i
                ></a>
                <a href="#" class="instagram bridge-icon"
                  ><i class="bx bxl-instagram"></i
                ></a>

                <a href="#" class="youtube bridge-icon"
                  ><i class="bx bxl-youtube"></i
                ></a>
              </div>

              <br />

              <span style="float: left">
                <span style="color: #e75c18">©2021</span> Bridge Africa
              </span>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4 class="bridge-header text-left white">{{ $t('home.OUR_ADRESSE') }}</h4>
              <ul class="text-left white">
                <li>{{ $t('home.International_Handicraft_Center') }}, {{ $t('home.Rond_point_Intendance') }}</li>

                <li>{{ $t('home.Yaounde') }}</li>

                <li>{{ $t('home.Cameroon') }}</li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links white">
              <h4 class="bridge-header text-left white">{{ $t('home.USEFULL_LINKS') }}</h4>
              <ul class="white">
                <li class="white"><a href="#">Bridgeafricaventures.com</a></li>

                <li class="white"><a href="#">{{ $t('home.Home') }}</a></li>

                <li class="white">
                  <router-link :to="{name: 'about'}">{{ $t('home.About_Us') }}</router-link>
                </li>

                <li class="white">
                  <router-link :to="{name: 'contact'}">{{ $t('home.Contact_Us') }}</router-link>
                </li>

              
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4 class="bridge-header text-left white">{{ $t('home.WORKING_HOURS') }}</h4>
              <ul class="white">
                <li>{{ $t('home.Monday') }}-{{ $t('home.Friday') }}: {{ $t('home.09AM_05PM') }}</li>

                <li>{{ $t('home.Saturday') }}: {{ $t('home.09AM_01PM') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
.font-arvo {
  font-family: 'Arvo', serif;
}
.font-rob {
  font-family: 'Roboto', Sans-serif;
}
.font-poppin {
  font-family: 'Poppins', sans-serif;
}
.font-source {
  font-family: 'Source Sans Pro', sans-serif;
}
.font-mont {
  font-family: 'Montserrat', sans-serif;
}
.footer {
  margin-top: 2px;
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
@media only screen and (max-width: 660px) {
  .footer-icons-div {
    width: 100%;
  }
}
</style>
