
<template>
  <div>
    <head>
      <meta charset="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      <title>Bridge Africa</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />

      <!-- Favicons -->
      <link href="assets/img/favicon.png" rel="icon" />
      <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

      <!-- Google Fonts -->
      <!-- <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      /> -->
    </head>

    <!-- ======= Header ======= -->
    <header id="header" class="fixed-topp">
      <div class="container d-flex align-items-center">
        <!--  <h1 class="logo mr-auto"><a href="index.html">Arsha</a></h1>
      Uncomment below if you prefer to use an image logo -->
        <a href="index.html" class="logo mr-auto"
          ><img src="../assets/img/logobr.png" alt="" class="img-fluid b-logo"
        /></a>

        <!-- <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="http://info.bridgeafrica.com/">About Us</a></li>

            <li>
              <a href="http://info.bridgeafrica.com/contact">Contact Us</a>
            </li>

            <li><a href="#">Login</a></li>

            <li><a href="#">Signup</a></li>
          </ul>
        </nav> -->


      <div>
  <b-navbar toggleable="sm" type="ligth" variant="ligth">
   

    <b-navbar-toggle target="nav-collapse ">
      <template :default=" expanded ">
        <b-icon v-if="expanded" icon="justify" class="couleur" @click="Expanded(1)"></b-icon>
        <b-icon v-else icon="X" class="couleur" @click="Expanded(2)"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto bold" >
       
      <b-nav-item > <router-link to="/">Home</router-link></b-nav-item>
       <b-nav-item href="#">About Us</b-nav-item>
        <b-nav-item href="#">Contact Us</b-nav-item>
         <b-nav-item href="#">About Us</b-nav-item>
         <b-nav-item href="#"><router-link to="/login">Login </router-link></b-nav-item>
        <b-nav-item ><router-link to="/signup">Signup </router-link></b-nav-item>


      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>





        <!-- .nav-menu -->

        <!-- <a
          href="#about"
          class="black d-lg-none"
          style="color: black; font-weight: bold; font-size: 18px"
          >Login</a
        >

        <a
          href="#about"
          class="get-started-btn d-lg-none"
          style="font-size: 18px"
          >Sign Up</a
        > -->
      </div>
    </header>
    <!-- End Header -->

    <div class="container p-0">
      <form class="d-block d-lg-none">
        <div class="mt-3 mr-5 input-group b-shadow">
          <div class="input-group-append color-mobile" style="border: none">
            <span
              class="input-group-text border-left-0 color-mobile"
              style="width: 40px; border-right: none; background-color: white"
            >
              <i
                class="bx bx-search"
                style="color: #e75c18"
                font-scale="1.5"
              ></i>
            </span>
          </div>

          <input
            id="search-ba"
            type="search"
            data-toggle="popover"
            class="form-control search-mobile"
            style="border-left: none"
            placeholder="Find Pharmacy"
            aria-label=""
            data-original-title=""
            title=""
            v-model="word1"
          />
        </div>

        <div class="mt-1 mb-2 input-group b-shadow">
          <div class="input-group-append color-mobile" style="border: none">
            <span
              class="input-group-text border-left-0 color-mobile"
              style="width: 40px; border-right: none; background-color: white"
            >
              <i class="bx bx-map" style="color: #e75c18" font-scale="1.5"> tt</i>
            </span>
          </div>

          <input
            id="search-ba"
            type="search"
            data-toggle="popover"
            class="form-control search-mobile"
            style="border-left: none"
            placeholder="Find Pharmacy"
            aria-label=""
            data-original-title=""
            title=""
            v-model="word2"
          />
        </div>
      </form>
    </div>

    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
      <div class="container">
        <div class="search">
          <div class="topp-div d-none d-md-none d-lg-block">
            <p>
              Empowering Businesses And Consumers With Digital Presence To Buy
              And Sell Online
            </p>
          </div>
        </div>
        <div class="d-none d-lg-block input-block">
          <form class="form-inline input-group b-shadow b-radius">
            <input
              id="search-ba"
              type="search"
              data-toggle="popover"
              class="form-control search-h"
              placeholder="Find Pharmacy"
              aria-label=""
              data-original-title=""
              title=""
            />

            <input
              id="search-location"
              ref="foo"
              type="search"
              list="browsers"
              data-toggle="popover"
              class="form-control search-h"
              placeholder="Where "
              aria-label="search bridge africa"
              data-original-title=""
              title=""
            />

            <datalist id="browsers">
              <option value=" Current Location "></option>
              <option value="Yaounde " />
            </datalist>

            <div
              class="input-group-append"
              style="
                color: white;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
              "
            >
              <span class="input-group-text border-left-0 orange">
                <i class="icofont-search-2 f-20"></i>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- end of hero section -->

    <div
      class="container blec-container shadow"
      style="
        position: absolute;
        margin-top: -50px;
        background: white;
        padding: 0px;
        margin-left: 10px;
      "
    >
      <div class="mobile-top-div d-lg-none p-3">
        <h3 style="font-size: 20px">
          Empowering Businesses And Consumers With Digital Presence To Buy And
          Sell Online
        </h3>
      </div>
    </div>

    <br> <br>
    <section id="about" class="about mt-md-30">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="section-title">
          <h3 class="head-text bridge-header">
            Find Businesses & Institutions
          </h3>
        </div>

        <div class="container">
          <div class="row">
            <div
              class="col-auto col-sm-12 col-md-6 col-lg-3 col-xl-3"
              style="
                padding-top: 15px;
                padding-bottom: 15px;
                padding-right: 15px;
                padding-left: 15px;
              "
            >
              <div
                class="bg-light border rounded shadow card"
                data-bs-hover-animate="pulse"
              >
                <img
                  class="card-img-top"
                  src="../assets/img/agriculture.jpg"
                  style="height: 185px"
                />
                <div class="card-body" style="text-align: center; height: 60px">
                  <h3
                    class="card-title"
                    style="
                      font-family: Antic, sans-serif;
                      color: rgb(81, 87, 94);
                      font-size: 0.99em;
                    "
                  >
                    Agriculture
                  </h3>
                  <p
                    class="card-text"
                    style="
                      font-family: Antic, sans-serif;
                      color: rgb(81, 87, 94);
                    "
                  ></p>
                </div>
              </div>
            </div>
            <div
              class="col-auto col-sm-12 col-md-6 col-lg-3 col-xl-3"
              style="
                padding-top: 15px;
                padding-bottom: 15px;
                padding-right: 15px;
                padding-left: 15px;
              "
            >
              <div
                class="bg-light border rounded shadow card"
                data-bs-hover-animate="pulse"
              >
                <img
                  class="card-img-top"
                  src="../assets/img/ce74c4dcde2b5c0fd027b5208e0cc254.jpeg"
                  style="height: 185px"
                />
                <div class="card-body" style="text-align: center; height: 60px">
                  <h3
                    class="card-title"
                    style="
                      font-family: Antic, sans-serif;
                      color: rgb(81, 87, 94);
                      font-size: 0.99em;
                    "
                  >
                    Mayor Councils
                  </h3>
                  <p
                    class="card-text"
                    style="
                      font-family: Antic, sans-serif;
                      color: rgb(81, 87, 94);
                    "
                  ></p>
                </div>
              </div>
            </div>
            <div
              class="col-auto col-sm-12 col-md-6 col-lg-3 col-xl-3"
              style="
                padding-top: 15px;
                padding-bottom: 15px;
                padding-right: 15px;
                padding-left: 15px;
              "
            >
              <div
                class="bg-light border rounded shadow card"
                data-bs-hover-animate="pulse"
              >
                <img
                  class="card-img-top"
                  src="../assets/img/top-image-nomad-african-restaurants-lower-east-side-NYC-Untapped-Cities.jpg"
                  style="height: 185px"
                />
                <div class="card-body" style="text-align: center; height: 60px">
                  <h3
                    class="card-title"
                    style="
                      font-family: Antic, sans-serif;
                      color: rgb(81, 87, 94);
                      font-size: 0.99em;
                    "
                  >
                    Restaurants
                  </h3>
                  <p
                    class="card-text"
                    style="
                      font-family: Antic, sans-serif;
                      color: rgb(81, 87, 94);
                    "
                  ></p>
                </div>
              </div>
            </div>
            <div
              class="col-auto col-sm-12 col-md-6 col-lg-3 col-xl-3"
              style="
                padding-top: 15px;
                padding-bottom: 15px;
                padding-right: 15px;
                padding-left: 15px;
              "
            >
              <div
                class="bg-light border rounded shadow card"
                data-bs-hover-animate="pulse"
              >
                <img
                  class="card-img-top"
                  src="../assets/img/how-to-become-a-pharmacist-in-South-Africa.png"
                  style="height: 185px"
                />
                <div class="card-body" style="text-align: center; height: 60px">
                  <h3
                    class="card-title"
                    style="
                      font-family: Antic, sans-serif;
                      color: rgb(81, 87, 94);
                      font-size: 0.99em;
                    "
                  >
                    Pharmacies
                  </h3>
                  <p
                    class="card-text"
                    style="
                      font-family: Antic, sans-serif;
                      color: rgb(81, 87, 94);
                    "
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="why-us" class="why-us">
      <div class="container-fluid">
        <div class="row">
          <div
            class="
              col-lg-6 col-md-6
              d-flex
              flex-column
              justify-content-center
              align-items-stretch
              order-2 order-lg-1
              z-index
            "
          >
            <div class="content">
              <h3 class="bridge-header f-30px">
                Business Identities and Online Marketplace
              </h3>
              <p>
                We help businesses to easily create their websites, buy and sell
                online through our online marketplace
                <br />
              </p>

              <div class="text-center w-100">
                <router-link to="login">

                <button
                  class="btn btn-primary mt-5 bridge-btn float-left bridge-btn"
                 
                >
                  Sign up
                </button>
                </router-link>
               
              </div>
            </div>
          </div>

          <div
            class="
              col-lg-6 col-md-6
              align-items-stretch
              order-1 order-lg-2
              img
              o-hidden
            "
          >
            &nbsp;

            <div class="scroll-container">
              <div class="scroll-element js-scroll slide-left">
                <video
                  class="business-vid1"
                  playsinline
                  autoplay
                  muted
                  loop
                  poster="assets/img/Home scroll copy.png"
                  id="Test_Video"
                >
                  <source src="../assets/video/identity.mp4" type="video/mp4" />
                </video>
              </div>
              <div class="scroll-caption hidde" id="hidde">
                <img
                  src="../assets/img/african-farmer.jpg"
                  height="700px"
                  class="d-none d-xl-block taillev1"
                  style="margin-left: -70px"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Why Us Section -->

    <section id="why-us" class="why-us">
      <div class="container-fluid">
        <div class="row">
          <div
            class="
              col-lg-6 col-md-6
              d-flex
              flex-column
              justify-content-center
              align-items-stretch
              order-2 order-lg-1
              z-index
            "
          >
            <div class="content">
              <h3 class="bridge-header">Online Business Databases</h3>
              <p>
                Our online business directory helps to make businesses visible
                and locatable, and enables consumers to search for and compare
                product prices
              </p>

              <div class="text-center w-100">
               <router-link to="login">

                <button
                  class="btn btn-primary mt-5 bridge-btn float-left bridge-btn"
                
                >
                  Sign up
                </button>
               </router-link>
               
              </div>
            </div>
          </div>

          <div
            class="
              col-lg-6 col-md-6
              align-items-stretch
              order-1 order-lg-2
              img
              o-hidden
            "
          >
            &nbsp;

            <video
              class="business-vid1"
              playsinline
              autoplay
              muted
              loop
              poster="assets/img/Home scroll copy.png"
              id="Test_Video2"
            >
              <source src="../assets/video/search.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
    <!-- End Why Us Section -->

    <section id="why-us" class="why-us">
      <div class="container-fluid">
        <div class="row">
          <div
            class="
              col-lg-6 col-md-6
              d-flex
              flex-column
              justify-content-center
              align-items-stretch
              order-2 order-lg-1
              z-index
            "
          >
            <div class="content">
              <h3 class="bridge-header">Community Engagement</h3>
              <p>
                We allow businesses and consumers to follow one another, receive
                notifications and send direct messages
              </p>

              <div class="text-center w-100">
                <router-link to="login">

                <button
                  class="btn btn-primary mt-5 bridge-btn float-left bridge-btn"
                  @click="community"
                >
                  Sign up
                </button>
                </router-link>
              </div>
            </div>
          </div>

          <div
            class="
              col-lg-6 col-md-6
              align-items-stretch
              order-1 order-lg-2
              img
              o-hidden
            "
          >
            &nbsp;

            <video
              class="business-vid1"
              playsinline
              autoplay
              muted
              loop
              poster="assets/img/Home scroll copy.png"
              id="Test_Video3"
            >
              <source src="../assets/video/messaging.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
    <!-- End Why Us Section -->

    <section id="why-us" class="why-us">
      <div class="container-fluid">
        <div class="row">
          <div
            class="
              col-lg-6 col-md-6
              d-flex
              flex-column
              justify-content-center
              align-items-stretch
              order-2 order-lg-1
            "
          >
            <div class="content">
              <h3 class="bridge-header">Online and Offline</h3>
              <p>
                For businesses and consumers in zones of low or no internet
                penetration, our platform works offline via SMS and USSD
              </p>

              <div class="text-center w-100">
                <router-link to="login">

                <button
                  class="btn btn-primary mt-5 bridge-btn float-left bridge-btn"
                  @click="On"
                >
                  Sign up
                </button>
                </router-link>
              </div>
            </div>
          </div>

          <div
            class="
              col-lg-6 col-md-6
              align-items-stretch
              order-1 order-lg-2
              img
              o-hidden
            "
          >
            &nbsp;

            <video
              class="business-vid1"
              playsinline
              autoplay
              muted
              loop
              poster="assets/img/Home scroll copy.png"
              id="Test_Video3"
            >
              <source src="../assets/video/offline.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
    <!-- End Why Us Section -->

    <section id="why-us" class="why-us p-0">
      <div class="container-fluid">
        <div class="row">
          <div
            class="
              col-lg-6 col-md-6
              d-flex
              flex-column
              justify-content-center
              align-items-stretch
              p-0
            "
          >
            <div class="carousel slide" data-ride="carousel" id="carousel-1">
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img
                    class="w-100 d-block ca-img"
                    src="../assets/img/coach.png"
                    alt="Slide Image"
                  />
                  <div class="black-cover"></div>
                </div>
                <div class="carousel-item">
                  <img
                    class="w-100 d-block ca-img"
                    src="../assets/img/coach2.png"
                    alt="Slide Image"
                  />
                  <div class="black-cover"></div>
                </div>
              </div>
              <div>
                <a
                  class="carousel-control-prev"
                  href="#carousel-1"
                  role="button"
                  data-slide="prev"
                  ><span class="carousel-control-prev-icon"></span
                  ><span class="sr-only">Previous</span></a
                ><a
                  class="carousel-control-next"
                  href="#carousel-1"
                  role="button"
                  data-slide="next"
                  ><span class="carousel-control-next-icon"></span
                  ><span class="sr-only">Next</span></a
                >
              </div>
              <ol class="carousel-indicators">
                <li
                  data-target="#carousel-1"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#carousel-1" data-slide-to="1"></li>
              </ol>
            </div>
          </div>

          <div
            class="
              col-lg-6 col-md-6
              align-items-stretch
              order-1 order-lg-2
              img
              text-center
              o-hidden
              p-0
            "
            style="background-color: white"
          >
            &nbsp;

            <div class="content">
              <h3 class="bridge-header">Digital literacy</h3>
              <p>
                We provide face-to-face digital literacy trainings for
                businesses who lack digital know-how through our army of digital
                coaches
              </p>
                <router-link to="login">

              <button class="btn btn-primary mt-5 bridge-btn bridge-btn mb-3">
                See Videos
              </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Why Us Section -->

    <footer id="footer">
      <div class="footer-top black-back">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <div class="row">
                <div class="col-6">
                  <img src="../assets/img/logobr.png" width="200px" alt="" />
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
              <h4 class="bridge-header text-left white">OUR ADRESS</h4>
              <ul class="text-left white">
                <li>International Handicraft Center, Rond-point Intendance</li>

                <li>Yaoundé</li>

                <li>Cameroon</li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links white">
              <h4 class="bridge-header text-left white">USEFULL LINKS</h4>
              <ul class="white">
                <li class="white"><a href="#">Bridgeafricaventures.com</a></li>

                <li class="white"><a href="#">Home</a></li>

                <li class="white">
                  <a href="http://info.bridgeafrica.com">About Us</a>
                </li>

                <li class="white">
                  <a href="http://info.bridgeafrica.com/contact/">Contact Us</a>
                </li>

                <!--   
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                          -->
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4 class="bridge-header text-left white">WORKING HOURS</h4>
              <ul class="white">
                <li>Monday-Friday: 09AM – 05PM</li>

                <li>Saturday: 09AM – 01PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Footer -->

    <!-- <div id="preloader"></div> -->
  </div>
</template>



    

<script>
// import "../assets/vendor/jquery/jquery.min.js";
// import "../assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "../assets/vendor/jquery.easing/jquery.easing.min.js";
// import "../assets/vendor/php-email-form/validate.js";
// import "../assets/vendor/waypoints/jquery.waypoints.min.js";
// import "../assets/vendor/isotope-layout/isotope.pkgd.min.js";
// import "../assets/vendor/venobox/venobox.min.js";
// import "../assets/vendor/owl.carousel/owl.carousel.min.js";
// import "../assets/vendor/aos/aos.js";

import "../assets/js/main.js";
// import "../assets/js/js.js";
export default {

  data(){
    return {
      expanded:true,
      word1:'',
      word2:''
    }
  },


  mounted(){
    
  },

  methods:{

    businessOwner(){
      this.$store
    .dispatch("homeRedirection/businessInfos")
    .then(res => {
      this.$router.push({ name: 'BusinessOwner', params: { id: this.$store.state.homeRedirection.idbissf} })
      console.log(this.$store.state.homeRedirection.idbissf);
    })
    .catch(err =>{
      console.log(err);
    })
    },
    search(){
        this.$router.push({ name: 'Search' })
    },

    community(){
       this.$router.push({ name: 'signup' })
    },

    Expanded(a){
      if(a== 1){
        this.expanded= false;
      }else if(a == 2){
         this.expanded= true;
      }
    }
  }
};
</script>

<style>


@import "../assets/vendor/bootstrap/css/bootstrap.min.css" ; 
 @import "../assets/vendor/boxicons/css/boxicons.min.css" ;
@import "../assets/vendor/remixicon/remixicon.css" ;
@import "../assets/vendor/venobox/venobox.css" ;

@import "../assets/css/style1.css" ;


/* @import "../assets/css/style.css"; */
@import "../assets/vendor/aos/aos.css" ;
@import "../assets/vendor/owl.carousel/assets/owl.carousel.min.css";
@import "../assets/vendor/icofont/icofont.min.css";
@import url("https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i");

.couleur{
  color: #e75c18 ;
  
}
.bold{
  font-weight: bold;
  font-size: 16px;
}
.taillev1{
  height: 504px !important;
}
.blec-container {
  position: absolute;
  margin-top: -50px;
  background: white;
  padding: 0px;
  margin-left: 10px;
}

#footer {
  background-color: transparent;
  padding: 0px;
}

.nav-menu a:hover,
.nav-menu .active > a,
.nav-menu li:hover > a {
  color: #e75c18 !important;
}

.b-shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.get-started-btn {
  border-color: transparent !important;
}

.o-hidden {
  overflow-x: hidden;
}

.bridge-header {
  color: black !important;
}

.bridge-icon {
  background-color: #e75c18 !important;
  color: white;
}

.bridge-btn {
  color: white;
  background-color: #e75c18 !important;
  border-color: #e75c18 !important;

  border: 0;
  padding: 12px 34px;
  color: #fff;
  transition: 0.4s;
  border-radius: 10px;
}

.bridge-btn:hover {
  color: #fff;
  background-color: #cc4d0d !important;
  border-color: #cc4d0d !important;
}

.tcho {
  width: 300px;
}

.coach1 {
  width: 300px;
}

.coach2 {
  width: 300px;
  margin-left: 8px;
}

.mobile-top-div {
  font-family: poppins, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  color: #2b273c;
  text-align: center;
}

@media only screen and (max-width: 968px) {
  .mt-md-30 {
    margin-top: 20px;
  }
}

@media only screen and (min-width: 768px) {
  .input-block {
    padding-left: 200px !important;
    padding-right: 200px;
  }

  .topp-div {
    width: 40%;
    padding: 15px;
    background-color: white;
    margin: 10px;

    margin-bottom: 100px;

    font-family: poppins, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 25px;
    line-height: 40px;
    color: #2b273c;
    float: right;

    margin-top: 16%;
  }

  .search-h {
    height: 50px;
  }

  .ca-img {
    height: 400px;
  }

  .business-vid {
    width: 1000px;
    margin-left: -50%;
    z-index: 1;
    position: relative;
  }

  .business-vid1 {
    height: 704px;
    width: 396px;
    z-index: 1;
    position: relative;
  }

  #hero {
    background: url("../assets/img/aficansmile.jpg"),
      linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(114, 95, 95, 0) 100%);

    height: 650px;
    background-size: cover;
  }
}

.z-index {
  z-index: 1;
}

.f-30 {
  font-size: 30px;
}

@media only screen and (max-width: 768px) {
  .topp-div {
    width: 40%;
    padding: 15px;
    background-color: white;
    margin: 10px;

    margin-bottom: 100px;

    font-family: poppins, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #2b273c;
    float: right;
    /* margin-top: 16%; */
    margin-bottom: -20%;
  }

  .search {
    vertical-align: middle;
    margin-left: -10px;
    margin-right: -10px;
  }

  .search-h {
    height: 50px;
  }

  .ca-img {
    height: 300px;
  }

  #hero {
    background: url("../assets/img/aficansmile.jpg"),
      linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(114, 95, 95, 0) 100%);

    height: 310px;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .business-vid1 {
    height: 700px;

    margin-left: -10%;

    z-index: 1;
    position: relative;
  }
}

.search-mobile {
  border-left: none;
}

.head-text {
  font-size: 24px;
  margin: 0 0 20px 0;
  padding: 0;
  line-height: 1;
  font-weight: 600;
  color: #37517e;
}

#header .logo img {
  max-height: 70px;
}

.orange {
  background-color: #e75c18;
  color: white;
}

.f-20 {
  font-size: 20px;
}

.hot-h {
  height: 299px;
  overflow: hidden;
}

.fixed-topp {
  margin-top: 1px;
  margin-bottom: 1px;
}

.why-us .content h3 {
  font-weight: 400;
  font-size: 50px !important;
}

.why-us .content p {
  font-size: 20px;
  color: #454343;
}

/* second part -------------------- */
@import url("https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@300&display=swap");

/*General styling for structure*/
body {
  margin: 0;
  font-family: "Merriweather Sans", sans-serif;
}

.container {
  max-width: 1280px;
  width: 95%;
  margin: 0 auto;
}

header h2 {
  font-weight: 400;
}

.scroll-container {
  min-height: 450px;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.scroll-element,
.scroll-caption {
  width: 50%;
}

.scroll-element {
  min-height: 300px;
  height: 100%;
  background-color: white;
}

.scroll-caption {
  margin: 1rem;
}

footer {
  text-align: center;
  padding: 0.5rem 0;
  background-color: #faddad;
}

footer p {
  font-size: 0.75rem;
  margin: 0.25rem 0;
  color: #221133;
}

footer a {
  text-decoration: none;
  color: inherit;
}

@media screen and (max-width: 650px) {
  .scroll-container,
  .scroll-container:nth-of-type(even) {
    flex-direction: column;
    align-content: inherit;
  }

  .scroll-element {
    height: 100%;
  }

  .scroll-element,
  .scroll-caption {
    width: 100%;
  }
}

/**Styling scrollable elements*/

.js-scroll {
  opacity: 1;
  transition: opacity 500ms;
}

.js-scrolll {
  opacity: 1;
  transition: opacity 500ms;
}

.js-scrollnot {
  opacity: 1;
  transition: opacity 500ms;
}

.js-scroll.scrolled {
  opacity: 1;
}

.scrolled.fade-in {
  animation: fade-in 2s ease-in-out both;
}

.scrolled.fade-in-bottom {
  animation: fade-in-bottom 1s ease-in-out both;
}

.scrolled.slide-left {
  animation: slide-in-left 2s ease-in-out both;
}

.scrolled.slide-right {
  animation: slide-in-right 1s ease-in-out both;
}

/* ----------------------------------------------
 * Generated by Animista on 2021-2-11 23:32:31
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* thirt part ----------------------------- */

.black-back {
  background-color: black !important;
}

.white {
  color: white !important;
}

.bblogo {
  font-size: 30px;
  margin-left: -90px;
  color: white;
}
</style>