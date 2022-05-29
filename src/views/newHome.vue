<template>
  <div>
    <nav
      id="navbarExample"
      class="navbar navbar-expand-lg fixed-top navbar-light"
      aria-label="Main navigation"
    >
      <div class="container">
        <div style="display: contents" class="d-contents d-lg-none">
          <router-link to="/search">
            <a class="nav-link d-block d-lg-none">
              <b-icon
                icon="search"
                style="float: left"
                font-scale="3"
                variant="primary"
              ></b-icon
            ></a>
          </router-link>

          <router-link to="/">
            <a class="d-block d-lg-none" rel="home" style="margin-left: -15%">
              <span class="logo" style="min-width: 148px"
                ><img   id="mwhitelogo"
                  src="https://home.maxinemoffett.com/wp-content/uploads/thegem-logos/logo_d2ecc795468a764490859da0a01cd521_1x.png"
                />

                 <img  class="d-none"  id="mblacklogo" width="148px"
                      src="assets/images/black_logo.png"
                    />

              </span>
            </a>
          </router-link>

          <a href="#">
            <button
              class="navbar-toggler p-0 border-0 mr-3 white mt-2"
              type="button"
              id="navbarSideCollapse"
              aria-label="Toggle navigation"
            >
                   <fas-icon
                   
                    class="primary"
                    :icon="['fa', 'bars']"
                    size="lg"
                  />   
                  
            </button>  
          </a>
        </div>

        <div
          class="navbar-collapse offcanvas-collapse"
          id="navbarsExampleDefault"
        >
          <ul
            id="primary-menu"
            class="navbar-nav ms-auto navbar-nav-scroll no-responsive"
          >
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link active" aria-current="page" href="#header">{{
                  $t("general.Home")
                }}</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'about' }">
                <a class="nav-link" href="#services">
                  {{ $t("general.About_Us") }}
                </a></router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'contact' }">
                <a class="nav-link" href="#details"
                  >{{ $t("general.Contact_Us") }}
                </a>
              </router-link>
            </li>

            <li class="nav-item">
              
                <a class="nav-link" href="#details"
                  >  
                </a>
            
            </li>


            <li class=" nav-item menu-item-logo d-none d-lg-block">
              <div class="site-logo" style="width: 164px">
                <a href="https://home.maxinemoffett.com/" rel="home">
                  <span class="logo" style="min-width: 148px; margin-left:30%"
                    ><img  class="" id="whitelogo"
                      src="https://home.maxinemoffett.com/wp-content/uploads/thegem-logos/logo_d2ecc795468a764490859da0a01cd521_1x.png"
                    />

                    <img class="d-none" id="blacklogo"
                      src="assets/images/black_logo.png"
                    />

                  </span>
                </a>
              </div>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'signup' }">
                <a class="nav-link" href="#features">{{
                  $t("general.Sign_Up")
                }}</a>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'Login' }">
                <a class="nav-link" href="#features">{{
                  $t("general.Login")
                }}</a>
              </router-link>
            </li>

            <!-- <li class="nav-item">
              <router-link to="search">
                <a class="nav-link" href="#features">
                  <b-icon
                    icon="search"
                    style="float: left"
                    font-scale="1.5"
                    class="margin-top:5px"
                  ></b-icon
                ></a>
              </router-link>
            </li> -->

            <li class="nav-item">
              <b-dropdown variant="ligth white">
                <template #button-content>
                  <img :src="img" class="size poslang" alt="" />
                  <span class="poslang mt-2"></span>
                </template>
                <b-dropdown-item @click="change('en')">
                  <img
                    src="../assets/img/about/en.png"
                    class="size poslang"
                    alt=""
                  />
                  EN</b-dropdown-item
                >
                <b-dropdown-item @click="change('fr')"
                  ><img
                    src="../assets/img/la-france.png"
                    class="size poslang"
                    alt=""
                  />
                  FR</b-dropdown-item
                >
              </b-dropdown>
            </li>
          </ul>
          <!-- <span class="nav-item">
              <a class="btn-solid-sm" href="#contact">Get quote</a>
          </span> -->
        </div>
      </div>
    </nav>
      <div id="loading" @click="closeLoad">

         <semipolar-spinner
  :animation-duration="2000"
  :size="65"
  :color="'#ff1d5e'"
  class="loading-image"
/>

   </div>
    <header id="header" class="header">

    

      <div class="container herro">
        <div class="row">
          <div class="col-lg-7 col-xl-6">
            <div class="text-container">
              <h1 class="h1-large">
                {{ $t("general.homepage_landing") }}
              </h1>

              <div>
                <b-input-group class="mb-2 float-right">
                  <b-form-input
                    aria-label="Text input with checkbox"
                    v-model="keyword"
                    :placeholder="$t('businessowner.Search_Something')"
                    class="search-form"
                  ></b-form-input>

                  <b-input-group-prepend is-text class="" @click="search">
                    <b-icon-search class="border-none p-20"></b-icon-search>
                  </b-input-group-prepend>
                </b-input-group>

                <div class="d-inlin-flex mt-5 cat-btns">
                  <b-button
                    @click="searchCategory('agriculture')"
                    class="cat-btn ml-1"
                  >
                    {{ $t("general.agriculture") }}
                  </b-button>
                  <b-button
                    @click="searchCategory('handicraft')"
                    class="cat-btn ml-1"
                  >
                    {{ $t("general.handicraft") }}
                  </b-button>
                  <b-button
                    @click="searchCategory('Tailors')"
                    class="cat-btn ml-1"
                  >
                    {{ $t("general.Tailors") }}
                  </b-button>
                  <b-button
                    @click="searchCategory('hair_dresser')"
                    class="cat-btn ml-1"
                  >
                    {{ $t("general.hair_dresser") }}
                  </b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-xl-6"></div>
        </div>
      </div>
    </header>

    <!-- about section -->

    <div class="about_bg p-5">
      <h1 class="h1-text mt-5 text-center white"> ABOUT US </h1>
      <h6 class="text-center white mt-3">
        Helping small and medium busineses get online and sale to he world
      </h6>

      <div class="container mb-md-5">
        <div class="row">
          <div class="col-md-4 p-0 text-center">
            <div class="p-5 about-box1">
              <div class="rounded-circle icon-tbg">
                <b-icon icon="heart" class="white mt-3"></b-icon>
              </div>

             
              <p class="mt-3 white">
               All in 1 platform for businesess to create a digital presence to promote their products and service
              </p>
            </div>
          </div>

          <div class="col-md-4 p-0 text-center">
            <div class="p-5 about-box1">
              <div class="rounded-circle icon-tbg">
                <b-icon icon="credit-card" class="white mt-3"></b-icon>
                
              </div>

              
              <p class="mt-3 white">
                Supporting real Time financial transactions and logistics
              </p>
            </div>
          </div>

          <div class="col-md-4 p-0 text-center">
            <div class="p-5 about-box1">
              <div class="rounded-circle icon-tbg">
                <b-icon icon="search" class="white mt-3"></b-icon>
              </div>

              <!-- <h5 class="mt-5 white">To-Do_Task</h5> -->
              <p class="mt-3 white">
                Connecting customers ad busineses so they can find real matches
              </p>
            </div>
          </div>

    
        </div>
      </div>
    </div>

        
    <div class="container">  
         
          <img src="assets/images/abou.png"  class="" style="margin-top:-90px" /> 
           </div>
<!-- 
    <div class="container-flex">
      <div class="row">
        <div class="col-md-6 about-bg order-2 order-md-1">
          <div class="about-pic" />
        </div>

        <div class="col-md-6 pr-100 pl-100 order-1 order-md-2">
          <div style="vertical-align: middle" class="pt-100">
            <h1 class="text-center mb-20 pb-25">
              {{ $t("general.about_us") }}
            </h1>

            <p class="text">
              We are a technology firm, on a mission to digitalise businesses
              and consumers in Africa. Through this platform, we help SMEs
              create websites, gain database visibility, sell online and
              network. We equally manage an online artisanal platform,
              cameroongallery.com, which helps craft artists sell their goods
              globally. Through our consulting services, we provide expert
              support to public and private entities.
            </p>

            <div class="text-center m-2 p-2 m-md-5 p-md-5">
              <b-button variant="outline-primary">
                {{ $t("general.view_more") }}
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- end about section -->

    <!-- start explore Busineses -->
    <div class="pb-100 pt-100">
      <div class="text-center pb-100">
        <h1 class="h1-text">{{ $t("general.explore_biz") }}</h1>
      </div>

      <div class="hotbiz">
        <splide :options="options" class="r-image">
          <splide-slide v-for="item in hotbiz" :key="item.id">
            <div class="hotbizz text-center">
              <img :src="item.picture" class="r-image" />

              <div class="hotbizcontent">
                <div class="text-center hotbizname">
                  <router-link :to="'business/' + item.id">
                    {{ item.name }}
                  </router-link>

                  <div class="text-center"><hr class="primary divider" /></div>
                </div>

                <div class="text text-center">
                  {{ item.description.slice(0, 100) }}
                </div>
              </div>
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>
    <!-- end explore busineses -->

    <!-- african print titles -->

    <div class="africanprints-overlay">
      <div class="africanprints">
        <div class="container text-center">
          <h1 class="h1-text white p-2 p-md-5">
            {{ $t("general.helping_small_medium_size_biz") }}
          </h1>
        </div>
      </div>
    </div>
    <!-- end african print title -->

    <!-- how bridge works -->

    <div class="container">
      <h1 class="h1-text p-3 text-center">
        {{ $t("general.how_ba_works_for_biz") }}
      </h1>
    </div>

    <div class="hbaworks container">
      <div class="row">
        <div class="col-md-6 text-center">
          <div class="container">
            <img
              style="margin-top: -150px"
              src="https://home.maxinemoffett.com/wp-content/uploads/2022/05/Group-3809-1-579x1024.png"
              alt=""
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="container">
            <div class="d-inline-flex mt-5">
              <span class="p-2 m-2 mr-4">
                <h3 class="hbaworks-icon">
                  <fas-icon
                    variant="primary"
                    class="primary home-icon"
                    :icon="['fa', 'briefcase']"
                  
                  />
                </h3>
              </span>
              <span>
                <h3 class="hbaworks-header font-16 font-poppin">
                  {{ $t("general.business_identity_and_online_marketplace") }}
                </h3>
                <p class="hba-works-text font-14 font-poppin">
                  {{ $t("general.we_help_you_easily_create") }} .
                </p>
              </span>
            </div>
            <br />
            <br />
            <div class="d-inline-flex mt-5 font-poppin">
              <span class="p-2 m-2 mr-4">
                <h3 class="hbaworks-icon">
                  <fas-icon
                    variant="primary home-icon"
                    class="primary"
                    :icon="['fas', 'database']"
                    
                  />
                </h3>
              </span>
              <span>
                <h3 class="hbaworks-header font-16 font-poppin">
                  {{ $t("general.online_business_database") }}
                </h3>
                <p class="hba-works-text font-14 font-poppin">
                  {{ $t("general.make_your_business_visible") }} .
                </p>
              </span>
            </div>

            <br />
            <br />
            <div class="d-inline-flex mt-5">
              <span class="p-2 m-2 mr-4">
                <h3 class="hbaworks-icon">
                  <fas-icon
                    variant="primary"
                    class="primary home-icon"
                    :icon="['fas', 'comments']"
                    
                  />
                </h3>
              </span>
              <span>
                <h3 class="hbaworks-header font-16 font-poppin">
                  {{ $t("general.community_engageMent") }}
                </h3>
                <p class="hba-works-text font-14 font-poppin">
                  {{ $t("general.engage_with_your_customers") }} .
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- african print titles -->

    <div class="africanprints-overlay" style="margin-top: -200px">
      <div class="africanprints">
        <div class="container text-center">
          <h1 class="h1-text white p-1 p-md-5">
            {{ $t("general.helping_small_medium_size_biz") }}
          </h1>
        </div>
      </div>
    </div>
    <!-- end african print title -->

    <div class="container">
      <h1 class="h1-text p-1 p-md-3 text-center">
        {{ $t("general.how_ba_works_for_cus") }}
      </h1>
    </div>

    <div class="hbaworks container">
      <div class="row">
        <div class="col-md-4">
          <div class="container text-right">
            <div class="d-inline-flex mt-5">
              <span>
                <h3 class="hbaworks-header font-16 font-poppin">
                  {{ $t("general.finding_business_online") }}
                </h3>
                <p class="hba-works-text font-14 font-poppin">
                  {{ $t("general.we_help_you_easily") }} .
                </p>
              </span>

              <span class="p-2 m-2 mr-4">
                <h3 class="hbaworks-icon">
                  <b-icon icon="search" class="home-icon" variant="primary"></b-icon>
                </h3>
              </span>
            </div>
            <br />
            <br />
            <div class="d-inline-flex mt-5">
              <span>
                <h3 class="hbaworks-header font-16 font-poppin">
                  {{ $t("general.large_market_place") }}
                </h3>
                <p class="hba-works-text font-14 font-poppin">
                  {{ $t("general.with_our_marketplace") }} .
                </p>
              </span>

              <span class="p-2 m-2 mr-4">
                <h3 class="hbaworks-icon">
                  <b-icon icon="shop" class="home-icon" variant="primary"></b-icon>
                </h3>
              </span>
            </div>
          </div>
        </div>
        <div class="col-md-4 text-center">
           
           
           <img transition="fade" :src="images[currentNumber]" />

         

        </div>
        <div class="col-md-4">
          <div class="container text-left">
            <div class="d-inline-flex mt-5">
              <span class="p-2 m-2 mr-4">
                <h3 class="hbaworks-icon">
                  <b-icon icon="chat" scale="1" variant="primary"></b-icon>
                </h3>
              </span>

              <span>
                <h3 class="hbaworks-header font-16 font-poppin">
                  {{ $t("general.communicate_with_businese") }}
                </h3>
                <p class="hba-works-text font-14 font-poppin">
                  {{ $t("general.we_help_you_directly_communicate") }}.
                </p>
              </span>
            </div>
            <br />
            <br />
            <div class="d-inline-flex mt-5">
              <span class="p-2 m-2 mr-4">
                <h3 class="hbaworks-icon">
                  <b-icon
                    icon="credit-card"
                    scale="1"
                    variant="primary"
                  ></b-icon>
                </h3>
              </span>

              <span>
                <h3 class="hbaworks-header font-16 font-poppin">
                  {{ $t("general.payment_method") }}
                </h3>
                <p class="hba-works-text font-14 font-poppin">
                  {{ $t("general.we_provide_you_with_a_wide_range") }} .
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- end how bride africa works -->

    <!-- advance account section -->

    <div class="bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="container">
              <h1 class="h1-text p-md-3 text-center text-md-left white mt-2">
                {{ $t("general.create_an_advance_account") }}
              </h1>
            </div>
          </div>

          <div class="col-md-6"><hr class="mt-0 mt-md-5 primary" /></div>
        </div>

        <div class="row">
          <div class="col-md-7">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="d-inline-flex mt-5">
                    <span class="p-2 m-2 mr-4">
                      <b-icon
                        icon="credit-card"
                        scale="3"
                        variant="primary"
                      ></b-icon>
                    </span>

                    <span>
                      <h3 class="hbaworks-header white font-16 font-poppin">
                        {{ $t("general.online_buying_system") }}
                      </h3>
                      <p class="hba-works-text white font-14 font-poppin">
                        {{ $t("general.sell_get_paid_and_recieive") }}
                      </p>
                    </span>
                  </div>

                  <div class="d-inline-flex mt-5">
                    <span class="p-2 m-2 mr-4">
                      <b-icon
                        icon="card-list"
                        scale="3"
                        class=""
                        variant="primary"
                      ></b-icon>
                    </span>

                    <span>
                      <h3 class="hbaworks-header white font-16 font-poppin">
                        {{ $t("general.unlimited_listing") }}
                      </h3>
                      <p class="hba-works-text white font-1 font-poppin">
                        {{ $t("general.add_as_many_product") }} .
                      </p>
                    </span>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="d-inline-flex mt-5">
                    <span class="p-2 m-2 mr-4">
                      <b-icon
                        icon="search"
                        scale="3"
                        class=""
                        variant="primary"
                      ></b-icon>
                    </span>

                    <span>
                      <h3 class="hbaworks-header white font-16 font-poppin">
                        {{ $t("general.rank_top_on_search") }}
                      </h3>
                      <p class="hba-works-text white font-14 font-poppin">
                        {{ $t("general.business_on_advance") }} .
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 advance-account-fit">
            <img
              class="quotes advance_pic"
              src="assets/images/digital1.jpg"
              alt="alternative"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- end advance account section -->
    <!-- start explore network section -->

    <div class="pt-100">
      <div class="text-center pb-100">
        <h1 class="h1-text">{{ $t("general.explore_network") }}</h1>

        <p class="text font-14 font-poppin">
          {{ $t("general.our_network_accounts") }}
        </p>
      </div>
    </div>

    <div class="container">
      <div>
        <div class="row">
          <div class="col-md-6 pl-21 pr-21">
            <h2 class="expln-header">Textile Artisans of Cameroon</h2>

            <p class="font-14 font-poppin">
              {{ $t("general.explore_tailors12") }} .
            </p>

            <div class="text-center m-2 p-2 p-md-2">
              <b-button variant="outline-primary">
                {{ $t("general.view_more") }}
              </b-button>
            </div>
          </div>

          <div class="col-md-6 pl-126 pr-21">
            <img
              class="quotes"
              src="https://home.maxinemoffett.com/wp-content/uploads/2022/05/fashion-designing-schools-in-cameroon-1.jpg"
              alt="alternative"
            />
          </div>
        </div>
      </div>

      <div>
        <div class="row">
          <div class="col-md-7 p-0 order-2 order-md-1">
            <img
              class="quotes"
              src="https://home.maxinemoffett.com/wp-content/uploads/2022/05/csm_senegal-agriculture-food_georges_gobet_afp_35f00077fb_1.jpg"
              alt="alternative"
            />
          </div>

          <div class="col-md-5 order-1 order-md-2">
            <h2 class="expln-header mt-2">
              PEA-Jeunes ({{ $t("general.agriculture") }})
            </h2>

            <p class="font-14 font-poppin">
              {{ $t("general.get_in_touch_with") }}.
            </p>

            <div class="text-center m-2 p-2 p-md-2">
              <b-button variant="outline-primary"
                >{{ $t("general.view_more") }}
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- end explore network section -->

    <!-- resources section -->
    <Resources />

    <!-- video section  -->

    <!-- start explore Busineses -->
    <div class="pb-100 pt-100">
      <div class="text-center pb-100">
        <h1 class="h1-text">{{ $t("general.entre_hotspot") }}</h1>
      </div>

      <b-modal id="videomodal" size="xl" hide-footer ref="videomodal">
        <div class="w3-container text-center">
          <!-- <b-spinner
            v-if="show_loader"
            variant="primary"
            class="mt-100"
          ></b-spinner> -->

          <div :class="{ 'd-none': show_loader }"></div>
          <b-embed
            type="iframe"
            aspect="16by9"
            :src="selected_video"
            allowfullscreen
            class="s-embed resource-img"
          ></b-embed>
        </div>
      </b-modal>

      <div class="hotbiz">
        <splide :options="optionss" class="r-image">
          <splide-slide v-for="item in videos" :key="item.id">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="card video-card">
                    <h3>{{ item.name }}</h3>
                    <br />
                    <br />
                    <span>
                      <b-link
                        v-b-modal.videomodal
                        @click="playVideo(item.video)"
                      >
                        {{ $t("general.play_video") }}
                      </b-link>
                      <br />
                      <hr class="primary" />
                    </span>
                  </div>
                </div>

                <div class="col-md-8">
                  <div class="biz-konnect-video">
                    <img
                      class="quotes biz-cover"
                      :src="item.picture"
                      alt="alternative"
                    />

                    <div>
                      <b-icon
                        v-b-modal.videomodal
                        @click="playVideo(item.video)"
                        icon="play-circle"
                        scale="3"
                        class="play-icon"
                      ></b-icon>
                    </div>

                    <!-- <iframe
          width="1440"
          :src="item.video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> -->
                  </div>
                </div>
              </div>
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>

    <Newsletter class="mt-100" />
    <SiteFooter />
  </div>
</template>

<script>
import axios from "axios";
import Newsletter from "../components/newsletter";
import Resources from "../components/resources";
import SiteFooter from "../components/site/siteFooter";
 import { SemipolarSpinner} from 'epic-spinners';
export default {
  components: {
    Newsletter,
    SiteFooter,
    Resources,
    SemipolarSpinner
  },

  data() {
    return {
      images: ['https://home.maxinemoffett.com/wp-content/uploads/elementor/thumbs/Frame-3757-poppczshscggt8jfy8jjrq86hv1d65q8coghrc3z2y.png',  'https://home.maxinemoffett.com/wp-content/uploads/elementor/thumbs/Frame-3759-poppdcy8g0yhbs0bte8bqmwmt98i5x6h2hlah7kgj4.png'],
      currentNumber: 0,

      hotbiz: [

        {
          id: "516",
          picture: "assets/images/AFRICAN CULTURE.jpg",
          name: "African Tradition",
          description:
            "Production of african wear from all regions of Cameroon, with specialty in the grassfield attire",
        },


        {
          id: "3711",
          picture: "assets/images/bibi.jpg",
          name: "Vin Bibi",
          description:
            "Production de vin blanc moueleux",
        },


    {
          id: "3712",
          picture: "assets/images/silas.jpg",
          name: "Silas Construction",
          description:
            "Silas Construction  can handle all your construction needs. We offer residential construction, commercial construction, construction ",
        },





         {
          id: "36",
          picture: "assets/images/emma.jpg",
          name: "Emma Fashion",
          description:
            "Embroidery , hand-made",
        },




        {
          id: "3705",
          picture: "assets/images/GERAR.jpg",
          name: "Gerar Fashion",
          description:
            "Customisation des bijoux, sac et chaussures avec du tissu pagne et formation sur la customisation",
        },
  
        {
          id: "3272",
          picture: "assets/images/edo.jpg",
          name: "Saveurs du Lapin",
          description:
            "Spécialité du tissu tissé, chemises, pantalon, décoration, set de table et autres.",
        },

        {
          id: "3709",
          picture: "assets/images/aissa.jpg",
          
          name: "Aissa Couture",
          description:
            "Entreprise de production de viande de lapin et autres produits connexes.",
        },

        {
          id: "3708",
          picture: "assets/images/okapi.jpg",
          name: "OKAPI",
          description:
            "OKAPI est spécialisé dans la transformation de fruits exotiques en jus naturelles et dérivés. Elle innove dans la conception de nouvelles saveurs originales.",
        },
      ],

      videos: [
        {
          video: "https://www.youtube.com/embed/CrjFkoU5eqs",
          picture: "assets/images/biz/africa.jpg",
          name: "African Culture",
        },

        {
          video: "https://www.youtube.com/embed/7XZ4SAKiQMM",
          picture: "assets/images/biz/Vin BIBI.jpg",
          name: "Vin Bibi",
        },

        {
          video: "https://www.youtube.com/embed/1eIXf4Nu-F0",
          picture: "assets/images/biz/Gerar Fashion.jpg",
          name: "Gerar Fashion",
        },

        {
          video: "https://www.youtube.com/embed/vO53J95E2GA",
          picture: "assets/images/biz/EDO RAISSA.jpg",
          name: "Edo Raissa",
        },

        {
          video: "https://www.youtube.com/embed/7XZ4SAKiQMM",
          picture: "assets/images/biz/OKAPI.jpg",
          name: "Okapi",
        },

        {
          video: "https://www.youtube.com/embed/xyD30G01nOg",
          picture: "assets/images/biz/aissa.jpg",
          name: "ETS Aissa ",
        },


         {
          video: "https://www.youtube.com/embed/BqgkXMUm858",
          picture: "assets/images/biz/silas.jpg",
          name: "George Silas",
        },


         {
          video: "https://www.youtube.com/embed/7aIMDB6_tWg",
          picture: "assets/images/biz/ema.jpg",
          name: "Emma Fashion",
        },
      ],
      selected_video: "",
      show_loader: false,
      

      options: {
        rewind: true,
        autoplay: true,
        perPage: 3,
        pagination: false,
        type: "loop",
        perMove: 1,

        breakpoints: {
          760: {
            perPage: 1,
            gap: "0rem",
          },
          992: {
            perPage: 2,
            gap: "1rem",
          },
        },
      },

      optionss: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,
        type: "loop",
        perMove: 1,
      },
      img: require("../assets/img/about/en.png"),
      lang: "EN",
      keyword: "",
      timer: null
    };
  },

  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute("src", "/assets/js/scripts.js");
    document.head.appendChild(externalScript);
     
     this.startRotation();

    this.loadbusineses();
  },

 

 


  methods: {

    startRotation: function() {
            this.timer = setInterval(this.next, 10000);
        },

        next: function() {
          if(this.currentNumber == 1){   
           
           this.currentNumber = 0

          }else{
              this.currentNumber = 1
          }
        }
        ,


        closeLoad(){
    this.removeFadeOut(document.getElementById('loading'), 2000);
        },


       removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";

    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
}
,

    search() {
      if (!this.keyword) return false;

      if (this.$route.name != "Search") {
        this.$router.push({
          name: "GlobalSearch",
          query: { keyword: this.keyword },
        });
      }
    },

    searchCategory(cat) {
      let keyword = this.$t("general." + cat);

      this.$router.push({
        name: "GlobalSearch",
        query: { keyword: keyword },
      });
    },

    change(lang) {
      this.$i18n.locale = lang;

      if (lang == "en") {
        this.img = require("../assets/img/about/en.png");
        this.lang = "EN";
      } else {
        this.img = require("../assets/img/la-france.png");
        this.lang = "FR";
      }
    },
    playVideo(video) {
      this.selected_video = video;
      this.show_loader = true;

      setTimeout(() => {
        this.show_loader = false;
      }, 10000);
    },

    loadbusineses() {
      let url = "guest/profile/hot/business/";

      axios
        .get(url)
        .then(({ data }) => {
          //   if (data.data.length) {
          //    //this.hotbiz=data.data;
          //   }
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.home-icon{
  font-size: 35px;
}

.fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}

#loading {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.8;
  background-color: white;
  z-index: 99;
}

#loading-image {
  z-index: 100;
}


.advance_pic{
  height: 450px;
  object-fit: cover;
}


.mt-100 {
  margin-top: 100px;
}

.icon-tbg {
  border: 1.5px solid white;
  text-align: center;
  width: 50px;
  height: 50px;
  vertical-align: middle;
  align-content: center;
  margin-left: 40%;
}

.about-box1:hover .icon-tbg {
  background: rgb(255, 255, 255, 0.15);
}

.about-box1::hover .icon-tbg,
.about-box1:hover ~ .icon-tbg {
  color: #fff;
  background-color: #000;
}

.about-box1:hover {
  opacity: 0.5;
  background: rgb(255, 255, 255, 0.15);
}

.poslang {
  width: 20px !important;
}

.mt-100 {
  margin-top: 100px;
}

.bg-dark {
  background-color: #000000 !important;
}


.font-14 {
  font-size: 14px !important;
}

.font-16 {
  font-size: 16px !important;
  font-weight: bold;
}

.video-container {
  padding-top: 50px;
  padding-bottom: 50px;
}

.biz-konnect-video {
  top: 0;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  background-color: #783dff;
  opacity: 1;
  z-index: -1;
}

.biz-cover {
  opacity: 0.8;
}

.biz-konnect-video iframe {
  min-height: 100vh;
}

.hotbizcontent {
  padding: 25px;
}

.divider {
  margin-left: 35%;
  margin-right: 35%;
}

.hotbizname {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
}

.hotbizz:hover {
  background-color: orange;
  opacity: 0.8;
}

.r-image {
  height: 450px !important;
}

.pl-21 {
  padding-left: 21px;
}

.pl-126 {
  padding-left: 121px;
}

.pr-21 {
  padding-right: 21px;
}
.h1-large {
  color: white;
  font-weight: 600;
}
.pl-100 {
  padding-left: 100px;
}

.pr-100 {
  padding-right: 100px;
}
.pb-25 {
  padding-bottom: 25px;
}

.p-100 {
  padding: 100px;
}

.pb-100 {
  padding-bottom: 100px;
}
.h1-text {
  font-style: normal;
  color: black;
  font-weight: 700;
}

.pt-100 {
  padding-top: 100px;
}

.play-icon {
  position: absolute;
  margin-top: -30%;
  margin-left: 50%;
  color: white;
}
.mb-20 {
  margin-bottom: 20px;
}

.cat-btns {
  text-align: left;
}
.cat-btn:hover {
  background: #e75c18;
  border-color: #e75c18;
}

.cat-btn:active {
  background: #e75c18;
  border-color: #e75c18;
}
.cat-btn:focus {
  background: #e75c18;
  border-color: #e75c18;
}
@media (min-width: 768px) {
  .herro {
    margin-top: 190px;
  }

  .expln-header {
    font-size: 36px;
    color: black;
    font-weight: 700;
    text-transform: uppercase;
  }

  .advance-account-fit {
    margin-top: -95px;
  }
  .cat-btn {
    background: white;
    opacity: 0.9px;
    border-radius: 5px;
    font-size: 14px;
  }

  .video-card {
    height: 70%;
    width: 100%;
    float: right;
    top: 20%;
    right: -150px;
    align-items: center;
    display: flex;
    vertical-align: middle;
    padding-top: 15%;
    position: absolute;

    z-index: 999;
  }
}

@media (max-width: 768px) {
  .expln-header {
    font-size: 18px;
    color: black;
    font-weight: 700;
    text-transform: uppercase;
  }

  .pl-126 {
    padding-left: 0px;
  }

  .pr-21 {
    padding-right: 0px;
  }

  .h1-text {
    font-size: 18px;
  }
  .herro {
    margin-top: 220px;
  }
  .cat-btn {
    background: white;
    opacity: 0.9px;
    border-radius: 5px;
    font-size: 12px;
    padding: 5px;
  }

  .video-card {
    align-items: center;
    display: flex;
    vertical-align: middle;
    padding-top: 5px;
  }

  .pl-21 {
    padding-left: 21px;
  }

  .h1-large {
    color: white;
    font-weight: 600;
  }
  .pl-100 {
    padding-left: 50px;
  }

  .pr-100 {
    padding-right: 50px;
  }
  .pb-25 {
    padding-bottom: 25px;
  }

  .p-100 {
    padding: 50px;
  }

  .pb-100 {
    padding-bottom: 50px;
  }
}

.search-form {
  height: 50px;
  opacity: 0.9px;
  border-radius: 5px 0px 0px 5px;
}

.input-group-text {
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  background: #e75c18;
  border-radius: 0px 5px 5px 0px;
  border-color: #e75c18;
}
.fixed-top {
  background: transparent;
}

.header {
  height: 100vh;
}

/* #primary-menu.no-responsive {
    text-align: left;
    white-space: nowrap;
    display: inline-block;
    font-size: 0;
    margin: 0 -20px;
} */

@media (min-width: 768px) {
  .navbar-collapse ul {
    padding: 0;
    display: table;
    width: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .navbar-collapse ul li {
    display: table-cell;
  }

  .pl-126 {
    padding-left: 121px;
  }

  .pr-21 {
    padding-right: 21px;
  }

  #navbarsExampleDefault {
    padding-left: 1px;
    padding-right: 1px;
  }
}

.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
  border: 1px solid;
}

.font-poppin {
  font-family: poppins;
}

.nav-link {
  text-transform: capitalize;
}

.nav-item{
  text-align: center;
}
</style>

<style>
.navbar-light .navbar-nav .nav-link {
  color: white !important;
}

.black-text .nav-item .nav-link {
  color: black !important;
}
</style>
