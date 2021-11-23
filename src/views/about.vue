<template>
  <div class="about">
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
    <!-- Section About -->

    <div class="container-fluid mt-2">
      <div class="row">
        <div class="col-md-6 pt-md-5">
          <div class="my-5">
            <h1 class="color-black text-center font-arvo about-heading text-center pt-4">ABOUT</h1>
            <h1 class="color-black mt-md-4 text-center font-arvo about-heading text-center">BRIDGE AFRICA.COM</h1>
          </div>
          <div class="video pl-md-5 py-5">
            <video
              class="elementor-video my-4"
              src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/sceen-video.mp4"
              autoplay=""
              loop=""
              muted="muted"
              playsinline=""
              controlslist="nodownload"
            ></video>
            <p class="text-center color-black font-weight-bold video-desc pt-5">
              A 3-in-1 platform that integrates SMEs into the Digital Economy through website creation, database
              integration, and networking. Currently in its 3rd iteration, we are rebuilding to turn bridgeafrica.com
              into a 4-in-1 tool by adding an online market place and improve the user interface.
            </p>
          </div>
        </div>
        <div class="col-md-3 pr-md-0">
          <div class="d-none d-md-block">
            <img
              src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/tissu-choisit.jpg"
              alt="black image"
              class="black-img"
            />
          </div>
          <div class="our-wins bg-black">
            <h4 class="font-arvo text-center font-weight-bold text-light py-4">Our Wins</h4>
            <div class="container pb-3">
              <p class="text-left text-light">
                Bridgeafrica.com was voted <b>App of the Year</b> by the International Telecommunication Union for its
                contribution towards the realisation of SDGs 1 and 8.
              </p>
              <p class="text-left text-light">
                We have worked with the United Nation’s IFAD to <b>digitalise 750 agricultural SMEs</b> across 4 regions
                in Cameroon.
              </p>
              <p class="text-left text-light">
                We currently have over <b>7,000 users</b> and are working to expand to Africa.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 pl-md-0">
          <div class="specific-main-div px-3">
            <h5 class="text-md-left text-center  specific-heading">BRIDGE</h5>
            <h5 class="text-md-left text-center specific-heading">AFRICA.COM</h5>
            <h5 class="text-md-left text-center specific-heading">SPECIFIC INFO</h5>
            <p>
              Businesses in Africa still suffer from the digital divide, which limits their integration into the digital
              economy. To break these barriers, our bridgeafrica.com platform enables the 87.5% of businesses that lack
              websites to easily get one online and offline via SMS; while our localised business directory makes them
              visible. Our online marketplace will also enable the 99% of businesses that had never sold online to
              engage in e-commerce.
            </p>
          </div>
          <div class="d-none d-md-block yellow-img">
            <img
              data-v-e7ab893a=""
              src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/blocks-image-73-1.jpg"
              alt="Yello Image"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Our Resources -->

    <!-- WELCOME TO BIZ KONNECT -->
    <section class="mt-4 p-3">
      <h1 class="color-black text-center font-arvo functionality-heading text-center">WELCOME TO BIZ KONNECT</h1>
      <div class="container text-center">
        Our weekly Biz Konnect TV show, running for more than 1 year now and aired on Cameroon’s national television
        channel (CRTV), promotes SMEs that are on bridgeafrica.com, and is an ideal vitrine to give nation-wide
        visibility to entrepreneurs
      </div>
      <div class="biz-konnect-video">
        <iframe
          width="1440"
          src="https://www.youtube.com/embed/EEsHZTkWNIU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- Blog -->

    <div class="bg-black mb-md-5 py-5">
      <h1 class="text-center font-arvo text-light">Our Blog</h1>
      <div class="row px-4">
        <div class="col-md-4 mt-3">
          <div class="blog-img-div position-relative">
            <img src="https://bridgeafricaventures.com/wp-content/uploads/2021/07/post3.jpg" alt="..." />
            <h5>Creating the Next Generation of Leaders at Your Company (Demo)</h5>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="blog-img-div position-relative">
            <img src="https://bridgeafricaventures.com/wp-content/uploads/2021/07/post3.jpg" alt="..." />
            <h5>Creating the Next Generation of Leaders at Your Company (Demo)</h5>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="blog-img-div position-relative">
            <img src="https://bridgeafricaventures.com/wp-content/uploads/2021/07/post3.jpg" alt="..." />
            <h5>Creating the Next Generation of Leaders at Your Company (Demo)</h5>
          </div>
        </div>
    
        <div class="col-md-4 mt-3">
          <div class="blog-img-div position-relative">
            <img src="https://bridgeafricaventures.com/wp-content/uploads/2021/07/post3.jpg" alt="..." />
            <h5>Creating the Next Generation of Leaders at Your Company (Demo)</h5>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="blog-img-div position-relative">
            <img src="https://bridgeafricaventures.com/wp-content/uploads/2021/07/post3.jpg" alt="..." />
            <h5>Creating the Next Generation of Leaders at Your Company (Demo)</h5>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="blog-img-div position-relative">
            <img src="https://bridgeafricaventures.com/wp-content/uploads/2021/07/post3.jpg" alt="..." />
            <h5>Creating the Next Generation of Leaders at Your Company (Demo)</h5>
          </div>
        </div>
      </div>
    </div>

    <!-- Team -->

    <div class="mt-5">
      <h1 class="color-black text-center font-arvo functionality-heading text-center letter-spacing">MEET OUR TEAM</h1>
      <div class="row justify-content-center p-5">
        <div class="col-md-3 m-3 border border-dark team-div px-5 pt-5">
          <img
            src="http://info.bridgeafrica.com/wp-content/uploads/2020/02/lorenzo-thegem-person-160.png"
            alt="img"
            class="rounded-circle d-block m-auto team-img"
          />
          <p class="text-center team-name color-black mt-5">Lorenzo Tencati</p>
          <p class="text-center team-position color-black">Advisory Board to CEO</p>
        </div>

        <div class="col-md-3 m-3 border border-dark team-div px-5 pt-5">
          <img
            src="http://info.bridgeafrica.com/wp-content/uploads/2020/02/bruno.png"
            alt="img"
            class="rounded-circle d-block m-auto team-img"
          />
          <p class="text-center team-name color-black mt-5">Ittia Bruno</p>
          <p class="text-center team-position color-black">COO</p>
        </div>

        <div class="col-md-3 m-3 border border-dark team-div px-5 pt-5">
          <img
            src="http://info.bridgeafrica.com/wp-content/uploads/2020/02/lengweh-blaise-thegem-person.png"
            alt="img"
            class="rounded-circle d-block m-auto team-img"
          />
          <p class="text-center team-name color-black mt-5">Lengweh Blaise</p>
          <p class="text-center team-position color-black">CTO</p>
        </div>

        <div class="col-md-3 m-3 border border-dark team-div px-5 pt-5">
          <img
            src="http://info.bridgeafrica.com/wp-content/uploads/2020/02/arlet.jpg"
            alt="img"
            class="rounded-circle d-block m-auto team-img"
          />
          <p class="text-center team-name color-black mt-5">Arlette Moussang</p>
          <p class="text-center team-position color-black">Editor</p>
        </div>

        <div class="col-md-3 m-3 border border-dark team-div px-5 pt-5">
          <img
            src="http://info.bridgeafrica.com/wp-content/uploads/2020/02/eunice.jpg"
            alt="img"
            class="rounded-circle d-block m-auto team-img"
          />
          <p class="text-center team-name color-black mt-5">Abre Eunice</p>
          <p class="text-center team-position color-black">Administrative Assistant</p>
        </div>

        <div class="col-md-3 m-3 border border-dark team-div px-5 pt-5">
          <img
            src="http://info.bridgeafrica.com/wp-content/uploads/2020/02/maxines.png"
            alt="img"
            class="rounded-circle d-block m-auto team-img"
          />
          <p class="text-center team-name color-black mt-5">Maxine Meffo</p>
          <p class="text-center team-position color-black">Co-founder</p>
        </div>
      </div>
    </div>

    <!-- Subscribe -->

    <section class="subscribe container">
      <div class="row">
        <div class="col-md-4 px-md-0 d-none d-md-block">
          <img src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/contact2.png" alt="Women" class="sub-img" />
        </div>
        <div class="col-md-4 px-md-0">
          <div class="bg-black sub-div d-flex flex-column justify-content-center">
            <h5 class="text-light font-arvo text-center">SUBSCRIBE FOR NEWSLETTER</h5>
            <h2 class="text-light font-arvo text-center sub-heading">STAY IN TOUCH</h2>
            <b-form-input
              v-model="subEmail"
              placeholder="Your Email Address"
              class="sub-input d-block mx-auto my-3"
            ></b-form-input>

            <b-button pill variant="primary" class="font-arvo sub-btn d-block mx-auto py-md-2 mt-md-3"
              >Subscribe To News</b-button
            >
          </div>
        </div>
        <div class="col-md-4 px-md-0 d-none d-md-block">
          <img
            src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/Gem-Lane-contact.jpg"
            alt="Calling Man"
            class="sub-img"
          />
        </div>
      </div>
    </section>

    <!-- Contact Us Form -->
    <section class="contact-us-form mt-3">
      <div class="d-flex justify-content-center">
        <img
          src="http://info.bridgeafrica.com/wp-content/uploads/2021/07/BAV-horizontal-white-2048x733.png"
          alt="Logo"
          class="contact-img"
        />
      </div>
      <h5 class="text-light font-arvo text-center mt-5 text-capitalize contact-heading px-2">
        digitalzins busingess and consumers in afica
      </h5>
      <h3 class="text-light text-center font-arvo text-uppercase contact-heading my-5">
        Contact US
      </h3>
      <div class="row mx-md-4 mx-2">
        <div class="col-md-4">
          <b-form-input
            v-model="contact.name"
            placeholder="Name*"
            class="sub-input d-block mx-auto my-3 contact-input name"
          ></b-form-input>
        </div>
        <div class="col-md-4">
          <b-form-input
            v-model="contact.email"
            placeholder="Email*"
            class="sub-input d-block mx-auto my-3 contact-input email"
          ></b-form-input>
        </div>
        <div class="col-md-4">
          <b-form-input
            v-model="contact.website"
            placeholder="Website*"
            class="sub-input d-block mx-auto my-3 contact-input website"
          ></b-form-input>
        </div>
        <div class="col-md-12">
          <b-form-textarea
            id="textarea"
            v-model="contact.msg"
            placeholder="Enter something..."
            rows="3"
            min-rows="6"
            class="sub-input my-3 contact-msg"
          ></b-form-textarea>
        </div>
        <div class="col-md-2 my-5">
          <b-button variant="primary" class="font-weight-bold font-arvo text-uppercase btn-block"
            >Submit Message</b-button
          >
        </div>
      </div>
    </section>

    <!-- Social Icons -->

    <section class="social-icons py-5">
      <h2 class="text-light font-arvo text-center font-weight-bold text-capitalize">
        Visit us on social media platforms
      </h2>
      <div class="row justify-content-center my-5">
        <div class="col-md-7">
          <p class="text-center font-mont text-light font-weight-bold">
            We hope you enjoy our products and services as much as we enjoy offering them to you. If you have any
            questions or comments, please don’t hesitate to contact us. via the media below.
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="d-flex flex-row justify-content-around">
            <a href="https://twitter.com/bridgeafricacom" target="_blank" class="social-icon">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="http://facebook.com/bridgeafricacom" target="_blank" class="social-icon">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC8JjdBDrz7GsqnO7kpEEHvA" target="_blank" class="social-icon">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://twitter.com/bridgeafricacom" target="_blank" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->

    <section class="footer">
      <div class="container">
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
            <h5 class="font-arvo text-center text-md-leftfont-weight-bold ">
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
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      subEmail: '',
      contact: {
        name: '',
        email: '',
        website: '',
        msg: '',
      },
    };
  },
};
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
.bg-black {
  background-color: #000000;
  color: #000000;
}
.color-white {
  color: #ffffff;
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
.about-heading {
  font-size: 36px;
  font-weight: bold;
}
.video-desc {
  margin-top: 50px;
  line-height: 35px;
  font-size: 16px;
}
.black-img {
  width: 100%;
  height: 700px;
  object-fit: cover;
}
.specific-heading {
  font-size: 24px;
  font-weight: 400;
}
.specific-main-div {
  min-height: 700px;
  padding-top: 250px;
}
.specific-main-div p {
  line-height: 30px;
}
.yellow-img img {
  width: 100%;
  height: 385px;
}
.biz-konnect-video {
  margin-top: 30px;
}
.biz-konnect-video iframe {
  min-height: 100vh;
}
.letter-spacing {
  letter-spacing: 0.05em;
  color: #332f2f;
}
.team-name {
  font-size: 24px;
}
.team-position {
  margin-top: 20px;
  font-size: 12px;
  font-weight: bold;
}
.team-div {
  transition: all 0.5s;
  cursor: pointer;
  border-bottom: 6px solid #e94a47 !important;
}
.team-div:hover {
  background-color: #cecece;
}
.team-img {
  height: 130px;
  width: 130px;
}
.sub-img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
.sub-div {
  width: 100%;
  min-height: 350px;
}
.sub-heading {
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-top: 10px;
}
.sub-input {
  background-color: #181828;
  border: none;
  color: #ffffff;
  outline: none;
  width: 84%;
  padding: 14px;
}
.sub-input:focus {
  background-color: #181828;
  border: none;
  color: #ffffff;
  outline: none;
  width: 84%;
  box-shadow: none;
}
.sub-btn {
  width: 84%;
  font-size: 19px;
  letter-spacing: 0.05em;
  font-weight: bold;
}
.contact-us-form {
  width: 100%;
  min-height: 100vh;
  background-image: url(http://info.bridgeafrica.com/wp-content/uploads/2021/07/blocks-image-05.jpg);
}
.contact-img {
  margin-top: 5.5rem;
  width: 35%;
}
.contact-heading {
  letter-spacing: 0.05em;
}
.contact-input {
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 16px 18px;
  background-position: 98% 50%;
  cursor: auto;
  width: 100%;
}
.contact-input.name {
  background-image: url('../assets/icons/user.png');
}
.contact-input.email {
  background-image: url('../assets/icons/envelope.png');
}
.contact-input.website {
  background-image: url('../assets/icons/world-wide-web.png');
}
.contact-msg {
  width: 100%;
}
.social-icons {
  background-image: url('http://info.bridgeafrica.com/wp-content/uploads/2021/07/shiny-dust-on-black-background-overlay-layer-7YKB5W3-scaled-1.jpg');
  width: 100%;
  min-height: 50vh;
}
.social-icon {
  font-size: 62px;
  text-decoration: none;
  color: #b6c5c8;
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
.blog-img-div h5 {
  color: #ffffff;
  text-align: center;
  position: absolute;
  bottom: 10px;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.blog-img-div {
  width: 100%;
  height: 250px;
  overflow: hidden;
  cursor: pointer;

  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.blog-img-div img {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.blog-img-div:hover img {
  opacity: 0.6;
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}
.blog-img-div:hover h5 {
  top: 125px;
}
.blog-img-div .share-icon {
  font-size: 16px;
  color: #000000;
}
.blog-img-div:hover .share-icon {
  display: block;
}
@media only screen and (max-width: 660px) {
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
  .video-desc {
    margin-top: 0;
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
  .specific-main-div {
    min-height: 100px;
    padding-top: 50px;
  }
  .yellow-img img {
    width: 100%;
    height: 0;
  }
  .biz-konnect-video iframe {
    min-height: 40vh;
  }
  .contact-img {
    width: 85%;
  }
  .social-icon {
    font-size: 36px;
  }
  .footer-icon-text {
    left: 50%;
    top: 30px;
  }
  .footer-icons-div {
    width: 100%;
  }
}
</style>
