<template>
  <div class="about pb-3">
    <header class="position-relative">
      <b-navbar toggleable="lg" variant="faded" sticky="true" type="light">
        <div class="container">
          <div class="col-md-12 col-lg-2 col-xl-2 text-center">
            <a class="d-inline-block align-top mt-1" href="#">
              <img src="@/assets/logo.png" alt="" class="balogo" loading="lazy" />
            </a>
          </div>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto text-center">
              <b-nav-item href="#">
                <span class="text-dark font-arvo nav-span">Home</span>
              </b-nav-item>
              <b-nav-item href="#" class="active ml-md-3">
                <span class="text-dark font-arvo nav-span">About Us</span>
              </b-nav-item>
              <b-nav-item href="#" class="ml-md-3">
                <span class="text-dark font-arvo nav-span">Contact Us</span>
              </b-nav-item>
              <b-nav-item href="#" class="ml-md-3">
                <span class="text-dark font-arvo nav-span">Login</span>
              </b-nav-item>
              <b-nav-item href="#" class="ml-md-3">
                <span class="text-dark font-arvo nav-span">Sign Up</span>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </header>
    <div class="bg-img d-flex align-items-end pb-5 px-2">
      <div class="d-none d-md-block px-5">
        <div class="header-img-text text-light font-rob">
          <p>BRIDGE AFRICA</p>
          <p>VENTURES</p>
        </div>
      </div>
    </div>
    <div class="d-block d-md-none">
      <div class="header-img-text bg-dark text-light font-rob">
        <p>BRIDGE AFRICA</p>
        <p>VENTURES</p>
      </div>
    </div>

    <!-- Welcome -->
    <h2 class="text-center font-poppin header-welcome my-4 welcome-heading">Welcome To Bridge Africa Ventures</h2>
    <div class="row justify-content-center p-2">
      <div class="col-md-7 text-center font-source welcome-text">
        We are a technology firm, on a mission to digitalise businesses and consumers in Africa. Through our
        bridgeafrica.com platform, we help SMEs create websites, gain database visibility, sell online and network. We
        equally manage an online artisanal platform, cameroongallery.com, which helps craft artists sell their goods
        globally. Through our consulting services, we provide expert support to public and private entities.
      </div>
    </div>
    <div class="my-5">
      <div class="row px-md-5 px-2">
        <div class="col-md-6">
          <img
            src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/DSC09065-scaled-1-1024x683.jpg"
            alt="People Image"
          />
        </div>
        <div class="col-md-6 mt-3">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="py-2 px-3" role="tab">
                <!-- <b-button block  variant="info">Accordion 1</b-button> -->
                <span v-b-toggle.accordion-1 class="my-5 mx-3 color-black font-weight-bold text-uppercase"
                  >Our Mission</span
                >
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="color-black">
                    With 87.5% of businesses lacking websites and 99% having never sold online, the digital divide is
                    limiting the economic growth and productivity of businesses in Cameroon and Africa. That is why we
                    are on a mission to see every SME in Africa have a digital identity so they can expand their market
                    space and sell more online.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="py-2 px-3" role="tab">
                <!-- <b-button block  variant="info">Accordion 1</b-button> -->
                <span v-b-toggle.accordion-2 class="my-5 mx-3 color-black font-weight-bold text-uppercase"
                  >Our Vision</span
                >
              </b-card-header>
              <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="color-black">
                    With 87.5% of businesses lacking websites and 99% having never sold online, the digital divide is
                    limiting the economic growth and productivity of businesses in Cameroon and Africa. That is why we
                    are on a mission to see every SME in Africa have a digital identity so they can expand their market
                    space and sell more online.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="py-2 px-3" role="tab">
                <!-- <b-button block  variant="info">Accordion 1</b-button> -->
                <span v-b-toggle.accordion-3 class="my-5 mx-3 color-black font-weight-bold text-uppercase"
                  >Our Strategy</span
                >
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="color-black">
                    With 87.5% of businesses lacking websites and 99% having never sold online, the digital divide is
                    limiting the economic growth and productivity of businesses in Cameroon and Africa. That is why we
                    are on a mission to see every SME in Africa have a digital identity so they can expand their market
                    space and sell more online.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-4">
      <h1 class="color-black text-center font-arvo functionality-heading">Our Functionalities</h1>
      <div class="my-3 row">
        <div class="col-md-6">
          <h3 class="color-black font-arvo site-text mt-5">WELCOME TO BridgeAfrica.com</h3>
          <p class="link-text font-poppin color-black">
            Bridgeafrica.com is a cross-engineered, problems-meet-solutions platform, which helps economic actors in
            Africa to join the digital economy. We help businesses to create their websites, buy and sell online, and to
            gain database visibility. Our platform works offline via SMS for actors in zones of low or no internet
            penetration. In addition to solving tech issues, we solve digital literacy issues faced by the majority of
            businesses
          </p>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 p-0">
              <div class="card container border-0 rounded-0 functionality-div first pb-5 mt-md-5">
                <p class="mt-5 pt-2 text-right">
                  <img
                    src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/about-web-design-icon.png"
                    alt="web design icon"
                    class="functionality-icons"
                  />
                </p>
                <div class="pl-4">
                  <h6 class="font-weight-bold font-mont functionality-div-headings">
                    WEBSITE CREATION
                  </h6>
                  <p class="text-left font-14">
                    We help businesses and institutions easily create websites in under 5 minutes, with little or no
                    technical expertise required
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 p-0">
              <div class="card container border-0 rounded-0 functionality-div second pb-5">
                <p class="mt-5 pt-2 text-right">
                  <img
                    src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/about-phone-book.png"
                    alt="web design icon"
                    class="functionality-icons"
                  />
                </p>
                <div class="pl-4">
                  <h6 class="font-weight-bold font-mont functionality-div-headings">
                    A LOCALISED BUSINESS DIRECTORY
                  </h6>
                  <p class="text-left font-14">
                    Our localised business directory helps to make businesses visible and locatable, and enables
                    consumers to search for and compare product prices. Customers can search based on location,
                    category, price
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 p-0">
              <div class="card container border-0 rounded-0 functionality-div third pb-5">
                <p class="mt-5 pt-2 text-right">
                  <img
                    src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/about-group.png"
                    alt="web design icon"
                    class="functionality-icons"
                  />
                </p>
                <div class="pl-4">
                  <h6 class="font-weight-bold font-mont functionality-div-headings">
                    COMMUNITY ENGAGEMEN
                  </h6>
                  <p class="text-left font-14">
                    Our platform provides community engagement functionalities enabling businesses and consumers to
                    follow one another, receive notifications and send direct messages
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 p-0">
              <div class="card container border-0 rounded-0 functionality-div forth pb-5 mt-md-4">
                <p class="mt-5 pt-2 text-right">
                  <img
                    src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/about-sms.png"
                    alt="web design icon"
                    class="functionality-icons"
                  />
                </p>
                <div class="pl-4">
                  <h6 class="font-weight-bold font-mont functionality-div-headings">
                    OFFLINE ACCESS
                  </h6>
                  <p class="text-left font-14">
                    For businesses and consumers in zones of low or no internet penetration, our platform works offline
                    via SMS and soon by USSD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="color-black text-center font-arvo functionality-heading text-center">Our SERVICES</h1>
    <div class="row">
      <div class="col-md-8 px-md-0">
        <div class="row">
          <div class="col-md-6 px-md-0 pb-0">
            <img
              src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/blocks-image-17.jpg"
              alt="photography"
              class=""
            />
          </div>
          <div class="col-md-6 px-md-0 py-5">
            <div class="container my-md-5">
              <h3 class="text-center color-black font-arvo production-heading font-weight-bold">
                Media production
              </h3>
              <p class="text-md-left text-center production-text color-black">
                Content is king. This is why we create innovative media content to connect businesses.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 p-0">
            <div class="container pt-5 px-5 mt-md-5">
              <h3 class="text-left color-black font-arvo production-heading font-weight-bold">
                Bridge <br />
                Africa.com
              </h3>
            </div>
          </div>
          <div class="col-md-6 pl-0" style="z-index:1010">
            <video
              class="bridge-america-video"
              src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/Bridge-Africa-logo-1.mp4"
              autoplay=""
              loop=""
              muted="muted"
              playsinline=""
              controlslist="nodownload"
            ></video>
          </div>
        </div>
      </div>
      <div class="col-md-4 px-md-0 d-none d-md-block">
        <img
          src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/blocks-image-75-1.jpg"
          alt="image"
          class="only-img"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 p-0">
        <img src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/blocks-image-73-1.jpg" alt="Yello Image" />
      </div>
      <div class="col-md-4 p-0">
        <div class="container my-md-5 px-5">
          <h3 class="text-center color-black font-arvo production-heading font-weight-bold">
            Cameroon Gallery
          </h3>
          <p class="text-md-left text-center production-text color-black">
            Connecting the world to authentic, meticulously made cultural arts and crafts from Cameroon.
          </p>
        </div>
      </div>
      <div class="col-md-4 p-0 bg-primary">
        <div class="container my-md-5 px-5">
          <h3 class="text-center text-light font-arvo production-heading font-weight-bold pt-5">
            Consulting
          </h3>
          <p class="text-md-left text-center production-text text-light">
            We provide media and management consulting services to both public and private entities.
          </p>
        </div>
      </div>
    </div>
  </div>
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
.balogo {
  width: 170px;
}
.nav-item.active .nav-link span {
  color: #e94a47 !important;
}
.nav-span {
  font-size: 14px;
  font-weight: bold;
}
.about {
  margin-left: -6px;
  font-size: 16px;
  overflow-x: hidden;
}
.bg-img {
  background-color: #010000;
  background-image: url(http://info.bridgeafrica.com/wp-content/uploads/2021/07/empower.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 95vh;
}
.header-img-text {
  font-size: 67px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: justify;
  align-content: flex-end;
  align-items: flex-end;
  margin-bottom: 20px;
}
.header-img-text p {
  margin-bottom: -10px;
}
.bg-dark {
  background-color: #000000 !important;
}
.header-welcome {
  font-weight: 900;
}
.welcome-text {
  line-height: 25px;
  color: #000000;
}
.welcome-heading {
  font-size: 23px;
  color: #000000;
}
.color-black {
  color: #000000;
}
.functionality-heading {
  font-size: 45px;
  font-weight: bold;
}
.site-text {
  font-size: 32px;
  letter-spacing: 1.8px;
  font-weight: bold;
}
.link-text {
  line-height: 37px;
  font-size: 24px;
}
.functionality-icons {
  width: 58px;
  height: auto;
}
.functionality-div-headings {
  letter-spacing: 0.8px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
}
.functionality-div {
  transition: all 0.5s;
  color: #000000;
  cursor: pointer;
}
.functionality-div.first {
  background-color: #f5f0f0;
  color: #000000;
}
.functionality-div.second {
  background-color: #e3ebec;
  color: #000000;
}

.functionality-div.first:hover {
  background-color: #ff5c93;
  color: #ffffff;
}
.functionality-div.second:hover {
  background-color: #07bfa5;
  color: #ffffff;
}

.functionality-div.third {
  background-color: #e3ebec;
  color: #000000;
}
.functionality-div.forth {
  background-color: #f5f0f0;
  color: #000000;
}

.functionality-div.third:hover {
  background-color: #5d727e;
  color: #ffffff;
}
.functionality-div.forth:hover {
  background-color: #98de23;
  color: #ffffff;
}
.font-14 {
  font-size: 14px;
}
.production-heading {
  line-height: 69px;
  font-size: 54px;
}
.production-text {
  font-size: 18px;
}
.bridge-america-video {
  max-width: 100%;
  width: 100%;
  margin: 0;
  line-height: 1;
  border: none;
  object-fit: cover;
}
.only-img {
  width: 100%;
  height: 712px;
  max-height: 712px;
}
@media only screen and (max-width: 600px) {
  .header-img-text {
    font-size: 27px;
    padding: 60px 40px;
  }
  .header-img-text p {
    margin-bottom: 0px;
  }
  .bg-img {
    height: 50vh;
  }
  .welcome-heading {
    font-size: 18px;
    line-height: 1.3em;
  }
  .functionality-heading {
    font-size: 32px;
  }
  .site-text {
    font-size: 24px;
  }
  .link-text {
    line-height: 28px;
    font-size: 14px;
  }
  .functionality-flex {
    flex-direction: column;
  }
}
</style>
