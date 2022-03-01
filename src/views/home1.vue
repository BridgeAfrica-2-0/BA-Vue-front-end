<template>
  <div>
    <!-- ======= Header ======= -->

    <site-header class="topbar" />

    <!-- End Header -->

    <div class="container p-0">
      <form class="d-block d-lg-none"  @submit.prevent="getKeyword">
        <div class="mt-3 mr-5 input-group b-shadow">
          <div class="input-group-append color-mobile" style="border: none">
            <span
              class="input-group-text border-left-0 color-mobile"
              style="width: 40px; border-right: none; background-color: white"
            >
              <Button @click.native="getKeyword" media="mobile" />
              <!-- <i
                class="bx bx-search"
                style="color: #e75c18"
                font-scale="1.5"
                @click="getKeyword"
              
              ></i> -->
            </span>
          </div>

          <input
            id="search-ba"
            type="search"
            data-toggle="popover"
            class="form-control search-mobile"
            style="border-left: none"
            :placeholder="$t('home.What_are_you_looking_for')"
            aria-label=""
            data-original-title=""
            title=""
            v-model="credentials.keyword"
              v-on:click="toggleinput()"
          />
        </div>

        <div class="mt-1 mb-2 input-group b-shadow"  style="display: none; "   ref="mobileinput" >
          <div class="input-group-append color-mobile" style="border: none">
            <span
              class="input-group-text border-left-0 color-mobile"
              style="width: 40px; border-right: none; background-color: white;   border:none"
            >
              

              <b-icon style="color: #e75c18" font-scale="1.5" icon="geo-alt">  </b-icon>
            </span>
          </div>
<!-- 
          <input
            id="search-ba"
            type="search"
            data-toggle="popover"
            class="form-control search-mobile"
            style="border-left: none"
            :placeholder="$t('home.Location')"
            aria-label=""
            data-original-title=""
            title=""
            v-on:click="toggleinput()"
            v-model="word2"
          /> -->


           


               <vue-bootstrap-typeahead
                v-model="word2"
                :data="neigbourhoods"
                :minMatchingChars="0"
                :maxMatches="10"
              
                :serializer="(item) => item.name"
                :placeholder="placeholder"
                class="search-hh m-wheree"
              />




          <button class="button" @click="getKeyword" >GO</button>  
        </div>
      </form>
    </div>

    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
      <div class="container">
        <div class="search">
          <div class="topp-div d-none d-md-none d-lg-block">
            <p>
              {{
                $t(
                  "home.Empowering_Businesses_And_Consumers_With_Digital_Presence_To_Buy_And_Sell_Online"
                )
              }}
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
              aria-label=""
              data-original-title=""
              title=""
              :placeholder="$t('home.What_are_you_looking_for')"
              v-model="credentials.keyword"
            />

             
             

             <vue-bootstrap-typeahead
                v-model="word2"
                :data="neigbourhoods"
                :minMatchingChars="0"
                :maxMatches="10"
              
                :serializer="(item) => item.name"
                :placeholder="placeholder"
                class="search-hh w-44"
              />

            <slot name="button">
              <Button @click.native="getKeyword" media="desktop" />
            </slot>
            <!-- <div
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
            </div> -->
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
      "
    >
      <div class="mobile-top-div d-lg-none p-2">
        <h3 style="font-size: 20px">
          {{
            $t(
              "home.Empowering_Businesses_And_Consumers_With_Digital_Presence_To_Buy_And_Sell_Online"
            )
          }}
        </h3>
      </div>
    </div>

    <br />
    <br />
    <section id="about" class="about mt-md-30">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="section-title">
          <h3 class="head-text bridge-header">
            {{ $t("home.Find_Businesses_Institutions") }}
          </h3>
        </div>

        <div class="container">
          <div class="row">
            <div
              class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
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
                     ;
                      color: rgb(81, 87, 94);
                      font-size: 0.99em;
                    "
                  >
                    {{ $t("home.Agriculture") }}
                  </h3>
                  <p
                    class="card-text"
                    style="
                     ;
                      color: rgb(81, 87, 94);
                    "
                  ></p>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
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
                     ;
                      color: rgb(81, 87, 94);
                      font-size: 0.99em;
                    "
                  >
                    {{ $t("home.Mayor_Councils") }}
                  </h3>
                  <p
                    class="card-text"
                    style="
                     ;
                      color: rgb(81, 87, 94);
                    "
                  ></p>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
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
                     ;
                      color: rgb(81, 87, 94);
                      font-size: 0.99em;
                    "
                  >
                    {{ $t("home.Restaurants") }}
                  </h3>
                  <p
                    class="card-text"
                    style="
                     ;
                      color: rgb(81, 87, 94);
                    "
                  ></p>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
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
                     ;
                      color: rgb(81, 87, 94);
                      font-size: 0.99em;
                    "
                  >
                    {{ $t("home.Pharmacies") }}
                  </h3>
                  <p
                    class="card-text"
                    style="
                     ;
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
    <!-- <div class="w-100 text-light"  id="animation"   >  .</div> -->
    <section id="why-us" class="why-us">
      <div class="container-fluid" id="anim">
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
                {{ $t("home.Business_Identities_and_Online_Marketplace") }}
              </h3>
              <p>
                {{
                  $t("home.We_help_businesses_to_easily_create_their_websites")
                }},
                {{
                  $t("home.buy_and_sell_online_through_our_online_marketplace")
                }}
                <br />
              </p>

              <div class="text-center w-100">
                <router-link :to="{ name: 'signup' }">
                  <button
                    class="btn btn-primary mt-5 bridge-btn float-left bridge-btn"
                  >
                    {{ $t("home.Sign_up") }}
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

            <!-- <div class="scroll-container "  >
             
                 <div class="taille scroll-element js-scroll slide-left">
                <video
                  class="business-vid1 size_video1"
                  playsinline
                  autoplay
                  muted
                  loop
                  poster="assets/img/Home scroll copy.png"
                  id="Test_Video"
                 
                >
                  <source muted preload="metadata" src="../assets/video/identity.mp4" type="video/mp4" />
                </video>
              </div>
              <div class="scroll-caption  hidde" id="hidde">
                <img
                  src="../assets/img/african-farmer.jpg"
                  height="700px"
                  class="d-none d-xl-block taillev1"
                  
                  alt=""
                />
              </div>
            </div> -->

            <div class="scroll-container ">
              <div class="scroll-element js-scroll slide-left text-center">
                <video
                  class="business-vid1"
                  playsinline
                  autoplay
                  muted
                  loop
                  poster="assets/img/Home scroll copy.png"
                  id="Test_Video"
                >
                  <source muted preload="metadata" src="../assets/video/identity.mp4" type="video/mp4" />
                </video>
              </div>
              <div class="scroll-caption hidde " id="hidde">
                <img
                  src="../assets/img/african-farmer.jpg"
                  height="700px"
                  class="d-none d-xl-block"
                  style="height: 700px; margin-left: -300px;"
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
              <h3 class="bridge-header">
                {{ $t("home.Online_Business_Databases") }}
              </h3>
              <p>
                {{
                  $t(
                    "home.Our_online_business_directory_helps_to_make_businesses_visible_and_locatable"
                  )
                }}
                ,
                {{
                  $t(
                    "home.and_enables_consumers_to_search_for_and_compare_product_prices"
                  )
                }}
              </p>

              <div class="text-center w-100">
                <router-link :to="{ name: 'signup' }">
                  <button
                    class="btn btn-primary mt-5 bridge-btn float-left bridge-btn"
                  >
                    {{ $t("home.Sign_up") }}
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
              <source muted preload="metadata" src="../assets/video/search.mp4" type="video/mp4" />
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
              <h3 class="bridge-header">
                {{ $t("home.Community_Engagement") }}
              </h3>
              <p>
                {{
                  $t(
                    "home.We_allow_businesses_and_consumers_to_follow_one_another"
                  )
                }}
                ,
                {{ $t("home.receive_notifications_and_send_direct_messages") }}
              </p>

              <div class="text-center w-100">
                <router-link :to="{ name: 'signup' }">
                  <button
                    class="btn btn-primary mt-5 bridge-btn float-left bridge-btn"
                  >
                    {{ $t("home.Sign_up") }}
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
              <source muted preload="metadata" src="../assets/video/messaging.mp4" type="video/mp4" />
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
              <h3 class="bridge-header">{{ $t("home.Online_and_Offline") }}</h3>
              <p>
                {{
                  $t(
                    "home.For_businesses_and_consumers_in_zones_of_low_or_no_internet_penetration"
                  )
                }},
                {{ $t("home.our_platform_works_offline_via_SMS_and_USSD") }}
              </p>

              <div class="text-center w-100">
                <router-link :to="{ name: 'signup' }">
                  <button
                    class="btn btn-primary mt-5 bridge-btn float-left bridge-btn"
                  >
                    {{ $t("home.Sign_up") }}
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
              <source muted preload="metadata" src="../assets/video/offline.mp4" type="video/mp4" />
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
            <!-- <div class="carousel slide" data-ride="carousel" id="carousel-1">
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
                  ><span class="sr-only">{{ $t('home.Previous') }}</span></a
                ><a
                  class="carousel-control-next"
                  href="#carousel-1"
                  role="button"
                  data-slide="next"
                  ><span class="carousel-control-next-icon"></span
                  ><span class="sr-only">{{ $t('home.Next') }}</span></a
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
            </div> -->

            <div>
              <b-carousel
                id="carousel-no-animation"
                style="text-shadow: 0px 0px 2px #000"
                no-animation
                indicators
                img-width="1024"
                img-height="480"
              >
                <b-carousel-slide caption="" :img-src="img1"></b-carousel-slide>
                <b-carousel-slide
                  caption=""
                  :img-src="require('../assets/img/coach2.png')"
                ></b-carousel-slide>
                <!-- <b-carousel-slide
      caption="Third Slide"
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Fourth Slide"
      img-src="https://picsum.photos/1024/480/?image=23"
    ></b-carousel-slide> -->
              </b-carousel>
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
              <h3 class="bridge-header">{{ $t("home.Digital_literacy") }}</h3>
              <p>
                {{
                  $t("home.We_provide_face_to_face_digital_literacy_trainings")
                }}
                {{
                  $t(
                    "home.for_businesses_who_lack_digital_know_how_through_our_army_of_digital_coaches"
                  )
                }}
              </p>
              <router-link :to="{ name: 'signup' }">
                <button class="btn btn-primary mt-5 bridge-btn bridge-btn mb-3">
                  {{ $t("home.See_Videos") }}
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Why Us Section -->
    <SiteFooter />

    <!-- <div id="preloader"></div> -->
  </div>
</template>

<script>
/**
 * this page is the home page of the system
 */
import SiteFooter from "../components/site/siteFooter";
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
//import "../assets/js/main.js";
// import "../assets/js/js.js";
import Button from "@/components/ButtonNavBarFind.vue";
import SiteHeader from "../components/site/siteHeader";
import VLazyImage from "v-lazy-image/v2";
import { mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
export default {
  components: { Button, SiteHeader, SiteFooter,VueBootstrapTypeahead },
  data() {
    return {
      expanded: true,
      location: "",
      word1: "",
      word2: "",
      placeholder:this.$t('home.Location'),
      img1: require("../assets/img/coach.png"),
    };
  },

  props: {
    credentials: {
      type: Object,
      default: function() {
        return {
          keyword: "",
          placeholder: this.$t("home.All"),
        };
      },
    },
  },

  created(){
   
    this.getLocation();

  },



   computed: {
    ...mapGetters({
      hasLauchNetworkRequest: "social/INIT",
      user: "auth/profilConnected",
      auth: "auth/user",
      neigbourhoods: "auth/neigbourhoods",
    }),

    query(){

      return this.credentials.location;
    }
  },


  watch:{

     word2(newQuery) {
      axios
        .get(`neighborhoods/${newQuery}`)
        .then(({ data }) => {
          this.$store.commit("auth/setneigbourhoods", data.data);
        });
    },
  },

  methods: {


     ...mapActions({
     
      getGeo: "business/getGeo",
      getNeigbourhoods: "auth/neigbourhoods",
     
    }),


   toggleinput() {
      this.$refs.mobileinput.style.display = "inline-flex";
  
       
      
    },

     getLocation() {
      const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.getGeo({ lat: latitude, lng: longitude });

        //time to get some neighbourhood mother fuckers ?lat=3.87374300&lng=11.49966000
        this.getNeigbourhoods({ lat: latitude, lng: longitude });    
      };

      const error = (err) => {
        console.log(error);
      };

      // This will open permission popup
      navigator.geolocation.getCurrentPosition(success, error);
    },


    businessOwner() {
      this.$store
        .dispatch("homeRedirection/businessInfos")
        .then((res) => {
          this.$router.push({
            name: "BusinessOwner",
            params: { id: this.$store.state.homeRedirection.idbissf },
          });
          console.log(this.$store.state.homeRedirection.idbissf);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    search() {
      this.$router.push({ name: "Search" });
    },

    community() {
      this.$router.push({ name: "signup" });
    },

    Expanded(a) {
      if (a == 1) {
        this.expanded = false;
      } else if (a == 2) {
        this.expanded = true;
      }
    },

   

  /**
   * this fuction id for make a search 
   * @private
   */
    getKeyword() {
      console.log(this.credentials.keyword, "---mm");
      if (!this.credentials.keyword) return false;

      if (this.$route.name != "Search") {
        console.log("the keyword is: ", this.credentials.keyword);
        // this.$store
        //   .dispatch("allSearch/SEARCH", {
        //     keyword: this.credentials.keyword,
        //   })
        //   .catch((err) => {
        //     console.log("Error erro!");
        //   });

        this.$router.push({
          name: "GlobalSearch",
          query: { keyword: this.credentials.keyword, location:this.word2 },
        });
      }
    },

    animation() {
      console.log("annimation----");
      var id = null;
      var elem = document.getElementById("Test_Video");
      var pos = 0;
      clearInterval(id);
      id = setInterval(frame, 5);
      function frame() {
        if (pos == 50) {
          clearInterval(id);
        } else {
          pos++;
          // elem.style.top = pos + 'px';

          elem.style.zIndex = "1";
          elem.style.left = pos + "px";
          if (pos == 50) {
            // document.getElementById("animation").removeEventListener("scroll")
            elem.style.left = 0 + "px";
          }
        }
      }
    },
  },
  mounted() {
    //     document.getElementById("animation").addEventListener("scroll", () => {
    //     this.animation();
    // });

    // document.getElementById("animation").addEventListener("scroll", () => {
    // this.animation();
    // window.removeEventListener("scroll")
    // });

    var v = document.getElementById("Test_Video");

    var v2 = document.getElementById("Test_Video2");

    var v3 = document.getElementById("Test_Video3");

    v.playbackRate = 0.8;
    v2.playbackRate = 0.8;
    v3.playbackRate = 0.8;

    const scrollElements = document.querySelectorAll(".js-scroll");

    const scrollElements2 = document.querySelectorAll(".hidde");

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      // console.log(document.documentElement.clientHeight);

      return (
        elementTop <= 30 / dividend
        //( 100) / dividen
      );
    };

    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop >
        (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };

    const displayScrollElement2 = (element) => {
      element.classList.add("js-scrolll");
    };

    const hideScrollElement2 = (element) => {
      element.classList.remove("js-scrolll");
    };

    const hideScrollElement = (element) => {
      element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el);
        }
      });

      scrollElements2.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement2(el);
        } else if (elementOutofView(el)) {
          hideScrollElement2(el);
        }
      });
    };

    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });
  },
};
</script>

<style>
/* @import "../assets/vendor/bootstrap/css/bootstrap.min.css";
@import "../assets/vendor/boxicons/css/boxicons.min.css";
@import "../assets/vendor/remixicon/remixicon.css";
@import "../assets/vendor/venobox/venobox.css"; */

@import "../assets/css/style1.css";

/* @import "../assets/css/style.css"; */
/* @import "../assets/vendor/aos/aos.css";
@import "../assets/vendor/owl.carousel/assets/owl.carousel.min.css";
@import "../assets/vendor/icofont/icofont.min.css"; */
@import url("https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i");

.zoomInUp {
  background-color: #cc4d0d;
}
.couleur {
  color: #e75c18;
}

.button {
  background-color: #ffffff;
  border-color: #cc4d0d ;
  border: solid 2px ;
  color: #cc4d0d;

  
}
.bold {
  font-weight: bold;
  font-size: 16px;
}
.taillev1 {
  height: 670px !important;
  width: 400px;
  margin-left: 130px;
  margin-right: 190px;
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
  /* font-family: poppins, Helvetica Neue, Helvetica, Arial, sans-serif; */
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

  .hidde {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  .scroll-container {
    width: 1000px !important;
  }
  .d-xl-block {
    display: block !important;
    /* margin-left: 100px !important; */

    /* height: 530px !important;
    width: 390px */
  }
  .taille {
    height: 704px;
  }

  .sizeimg {
    border: solid;
    margin-left: -190px;
    margin-right: -20px;
  }
  .size_video1 {
    width: 400px !important;
    height: 700px !important;
  }

  .bridge-btn {
    width: 124px;
    height: 48px;
  }
  .b-logo {
    width: 100px !important;
    height: 70px !important;
  }
  .size_nav {
    font-size: 14px !important;
    color: #343a40 !important;
  }
  .text_box {
    font-size: 25px !important;
    /* height: 166px !important;
    width: 500px !important; */
  }
  .input-block {
    padding-left: 50px !important;
    padding-right: 50px;
    font-size: 14px !important ;
  }

  .topp-div {
    width: 40%;
    padding: 15px;
    background-color: white;
    margin: 10px;

    margin-bottom: 100px;

    /* font-family: poppins, Helvetica Neue, Helvetica, Arial, sans-serif; */
    font-weight: 700;
    font-size: 25px;
    line-height: 40px;
    color: #2b273c;
    float: right;

    margin-top: 16%;
  }

  .search-h {
    height: 50px !important;
    font-size: 24px !important;
    /* width: 30px !important; */
  }

  .ca-img {
    height: 400px;
  }

  .business-vid {
    width: 1000px;
    /* margin-left: -50%; */
    z-index: 1;
    position: relative;
  }

  .business-vid1 {
    height: 704px !important;
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

.why-us .content p {
  font-size: 25px !important;
  color: #454343;
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

    /* font-family: poppins, Helvetica Neue, Helvetica, Arial, sans-serif; */
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

    /* margin-left: -10%; */

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
  margin-left: 200px;
  height: 700px !important;
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

.w-44 {
  width: 44%;
}


@media only screen and (min-width: 768px) {
  .search-hh .form-control {
    height: 48px !important;
    margin-bottom: 0;
    border-radius: 0px;
    border-bottom: hidden;
  }
}


.m-wheree{
   width: 77.8%;
    padding: 0px;
    margin: 0px;
    border-radius: 0px;
    border: none;
}

.m-wheree input{
  border: none;
}



</style>
