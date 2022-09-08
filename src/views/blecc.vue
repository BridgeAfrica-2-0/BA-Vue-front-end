<template>
  <div class="">
    <site-header class="topbar" />

    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="orange-bg p-3">
              <div class="row">
                <div class="col-md-6">
                  <h5>
                    Setup your e-commerce shop and sell to millions around you
                    and the world.
                  </h5>

                  <button class="mt-5">Sign Up</button>
                </div>

                <div>image section</div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="bg-gray p-3">
              <p>Find products and services you need, anytime, anywhere</p>
              <br />
              <small class="mt-2">
                98% of businesses in Cameroon have never done business online,
                lacking digital tools and skills.
              </small>
              <br /><br /><br />
              <span class="percent mt-3"> 15% Off </span> <br />
              <br />
              <button>shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="background: #f8f8f8">
      <div class="container">
        <h3>About Us</h3>
        <p>
          98% of businesses in Cameroon have never done business online, lacking
          digital tools and skills. Our platform helps overcome those barriers
          so they can do business locally and internationally. Currently based
          in Cameroon, we plan to expand to the rest of Africa in the next few
          years.
        </p>

        <div class="row">
          <div class="col-md-4">
            <div class="card about-box p-3">
              <h6>Sell worldwide</h6>
              <p>
                All-in-one platform helping businesses in Africa to sell online
                worldwide for the very first time
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card about-box p-3">
              <h6>Buy worldwide</h6>
              <p>
                All-in-one platform helping businesses in Africa to sell online
                worldwide for the very first time
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card about-box p-3">
              <h6>Logistics support</h6>
              <p>
                All-in-one platform helping businesses in Africa to sell online
                worldwide for the very first time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container">
        <div class="market">
          <h3>
            <span class="m-header-color">Buy quality products </span> from our
            Marketplace in Cameroon and around the world
          </h3>
          <p>
            With over 100 categories of products, easily shop from businesses in
            Cameroon anytime, anywhere.
          </p>
          <div>
            <b-button variant="primary" class="float-right moreproducts-btn">
              More Products <b-icon icon="arrow-right"> </b-icon>
            </b-button>
          </div>
          <b-tabs active-nav-item-class="active-tab-item">
            <b-tab
              title="Available in cameroon"
              title-link-class="title-linkClass"
            >
              <products />
            </b-tab>
            <b-tab
              title="Available world wide"
              title-link-class="title-linkClass"
            >
              <products />
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </section>

    <section style="background: #f8f8f8">
      <div class="container ba-business">
        <div class="row">
          <div class="col-md-6">
            <h3>
              <span class="m-header-color">Bridge Africa </span> for Businesses
            </h3>

            <div class="babiz-list">
              <h5>Business Identity and Online Marketplace</h5>
              <p>
                Create your business page and sell to millions around you and
                the world though our online marketplace.
              </p>
            </div>

            <div class="babiz-list">
              <h5>Online business database</h5>
              <p>
                Make your business visible and locatable with the help of our
                business directory to reach a wider market.
              </p>
            </div>

            <div class="babiz-list">
              <h5>Unified back-office</h5>
              <p>
                Use your dashboard to manage all your products, see how your
                business is doing, and engage with your customers.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <img src="assets/home/forbiz.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient">
      <div class="container ba-business">
        <div class="row">
          <div class="col-md-6">
            <img src="assets/home/forbiz.png" alt="" />
          </div>

          <div class="col-md-6">
            <h3>
              <span class="m-header-color">Bridge Africa </span> for customers
            </h3>

            <div class="babiz-list">
              <h5>Large marketplace and digital payment solution.</h5>
              <p>
                We help customers worldwide to buy products and services from
                Cameroon, and seamlessly pay using local and international
                payment solutions.
              </p>
            </div>

            <div class="babiz-list">
              <h5>Localised business directory</h5>
              <p>
                We help you easily find businesses with affordable prices,
                giving you the ability to compare businesses with the best
                pricing around you..
              </p>
            </div>

            <div class="babiz-list">
              <h5>Community engagement</h5>
              <p>
                Follow and communicate with businesses to remain up to date on
                latest offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-whitee">
      <div class="container bafind">
        <div class="row px-md-5 px-2">
          <div class="col-md-5 order-2 order-md-1 pb-3 pt-md-5">
            <video
              width="100%"
              style="max-height: 350px; object-fit: cover"
              controls
              poster="assets/home/quotevid.png"
            >
              <source src="assets/video/intro_video.mp4" type="video/mp4" />
            </video>
          </div>

          <div class="col-md-7 order-1 order-md-2">
            <h3>
              <span> Let’s help you </span> find products and service from
              Cameroon
            </h3>

            <div class="md-layout-item md-small-size-100 m-left">
              <form novalidate @submit.prevent="validateUser">
                <div class="form pt-1 pl-5 pr-5 row">
                  <div class="col-md-12">
                    <b-form-group :class="getValidationClass('pname')" class="">
                      <label for="name" class="">
                        {{ $t("general.looking_for_something") }}
                      </label>
                      <b-form-input
                        id="name"
                        name="name"
                        class="ba-input"
                        v-model="form.pname"
                        placeholder="Looking for something"
                      >
                      </b-form-input>

                      <!-- <span class="error" v-if="!$v.form.pname.required">
                    required
                  </span> -->
                    </b-form-group>
                  </div>

                  <div class="col-md-6">
                    <b-form-group
                      :class="getValidationClass('quantity')"
                      class=""
                    >
                      <label for="qunatity" class="">
                        {{ $t("general.Quantity") }}
                      </label>
                      <b-form-input
                        type="number"
                        id="quantity"
                        name="qunatity"
                        class="ba-input"
                        v-model="form.quantity"
                        placeholder="quantity"
                      >
                      </b-form-input>
                      <!-- <span class="error" v-if="!$v.form.pname.required">
                    required
                  </span> -->
                    </b-form-group>
                  </div>

                  <div class="col-md-6">
                    <b-form-group :class="getValidationClass('name')" class="">
                      <label for="uname" class="">
                        {{ $t("general.full_name") }}
                      </label>
                      <b-form-input
                        type="text"
                        id="uname"
                        name="uname"
                        class="ba-input"
                        v-model="form.name"
                        placeholder="quantity"
                      >
                      </b-form-input>
                      <!-- <span class="md-error" v-if="!$v.form.name.required">
                    {{ $t("auth.First_Name_is_required") }}
                  </span> -->
                    </b-form-group>
                  </div>

                  <div class="col-md-6">
                    <b-form-group :class="getValidationClass('email')" class="">
                      <label for="email" class="">
                        {{ $t("general.Email") }}
                      </label>

                      <b-form-input
                        type="email"
                        id="email"
                        name="email"
                        class="ba-input"
                        v-model="form.email"
                        placeholder="email"
                      >
                      </b-form-input>
                      <!-- <span class="error" v-if="!$v.form.email.required">
                    required
                  </span> -->
                    </b-form-group>
                  </div>

                  <div class="col-md-6">
                    <b-form-group :class="getValidationClass('tel')" class="">
                      <label for="tel" class="">
                        {{ $t("general.Tel") }}
                      </label>

                      <b-form-input
                        type="text"
                        id="tel"
                        name="tel"
                        class="ba-input"
                        v-model="form.tel"
                        placeholder="Phone"
                      >
                      </b-form-input>
                      <!-- <span class="error" v-if="!$v.form.tel.required">
                    required
                  </span> -->
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-button
                      type="submit"
                      variant="primary"
                      block
                      class="mb-3 request-quote"
                    >
                      {{ $t("general.Request_For_Quotation") }}
                    </b-button>
                  </div>
                  <div></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-whitee">
      <div class="container explore-network">
        <h3><span> Explore </span> Networks</h3>
        <p>
          Our network accounts can help you work with key sectors of Cameroon's
          business spectrum
        </p>

        <div class="row">
          <div class="col-md-6">
            <div class="card h-100 p-3">
              <div class="row">
                <div class="col-6">
                  <h5>Textile Artisans of Cameroon</h5>
                  <p>{{ $t("general.our_network_accounts") }}</p>
                  <b-button variant="primary"> View More </b-button>
                </div>
                <div class="col-6">
                  <b-img-lazy
                    class="explore-network-img"
                    src="assets/images/fashion-designing-schools-in-cameroon-1.jpg"
                    alt="alternative"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 p-3">
              <div class="row">
                <div class="col-6">
                  <h5>PEA-Jeunes ({{ $t("general.agriculture") }})</h5>
                  <p>{{ $t("general.get_in_touch_with") }}</p>
                  <b-button variant="primary"> View More </b-button>
                </div>
                <div class="col-6">
                  <b-img-lazy
                    class="explore-network-img"
                    src="assets/images/csm_senegal-agriculture-food_georges_gobet_afp_35f00077fb_1.jpg"
                    alt="alternative"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-whitee"> 
      <div class="container resources"> 
        <div class="row"> 
        <div class="col-10"> 
        <h3> <span> Digital Education  </span>  to help you make more money online </h3>
         <p> Use our specially designed training curriculum to help enhance your entrepreneurial and digital skills, learn how to properly use your bridgeafrica.com online shop, and comfortably engage in global e-commerce.   </p>
          </div>

          <div class="col-2 text-center m-auto"> 
             <b-icon icon="chevron-left" font-scale="2"> </b-icon>  <b-icon icon="chevron-right" font-scale="2"> </b-icon>
          </div>

        </div> 

         <Resources />

      </div>
   </section>


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
import Products from "../components/site/products";
import VLazyImage from "v-lazy-image/v2";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { SemipolarSpinner } from "epic-spinners";
import axios from "axios";

import { validationMixin } from "vuelidate";
import { required, sameAs, email, minLength } from "vuelidate/lib/validators";
import Resources from "../components/resources";
export default {
  components: {
    SiteHeader,
    Products,Resources
    // SiteFooter
  },
  data() {
    return {
      expanded: true,
      location: "",
      word1: "",
      word2: "",

      showblock: true,
      showfadde: false,
      showfaddeB: true,

      placeholder: this.$t("home.Location"),
      img1: require("../assets/img/coach.png"),

      form: {
        pname: null,
        tel: null,
        name: null,
        quantity: null,
        email: null,
      },

      userSaved: false,
      sending: false,
      lastUser: null,
    };
  },

  mixins: [validationMixin],
  validations: {
    form: {
      pname: {
        required,
      },

      name: {
        required,
      },

      tel: {
        required,
      },
    },
  },

  props: {
    credentials: {
      type: Object,
      default: function () {
        return {
          keyword: "",
          placeholder: this.$t("home.All"),
        };
      },
    },
  },

  created() {
    window.addEventListener("load", this.onWindowLoad);
    this.getLocation();
  },

  computed: {
    ...mapGetters({
      hasLauchNetworkRequest: "social/INIT",
      user: "auth/profilConnected",
      auth: "auth/user",
      neigbourhoods: "auth/cities",
    }),

    query() {
      return this.credentials.location;
    },
  },

  watch: {
    word2(newQuery) {
      axios.get(`visitor/search/city?city=${newQuery}`).then(({ data }) => {
        this.$store.commit("auth/setCities", data.data);
      });
    },
  },

  methods: {
    onWindowLoad() {
      this.showfadde = true;

      setTimeout(() => {
        this.loadfinish();
      }, 2000);
    },

    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },

    saveData() {
      this.$router.push({
        name: "quote",
        query: {
          name: this.form.pname,
          email: this.form.email,
          tel: this.form.tel,
          pname: this.form.pname,
          quantity: this.form.quantity,
        },
      });
    },

    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.saveData();
      }
    },

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
          query: { keyword: this.credentials.keyword, location: this.word2 },
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
};
</script>

<style>
.request-quote {
  width: 416.64px;

  text-align: center;
}

.bg-whitee {
  background: white;
}

.ba-input {
  background: #fafafa;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
}

.bafind h3 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
}

.bafind h3 span {
  color: #e75b17;
}

.resources h3{
    font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
}

.resources h3 span {
   color: #e75b17;
}

.resources p{
  font-size: 16px;
line-height: 26px;
}

.explore-network h3 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
}
.explore-network-img {
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.explore-network h3 span {
  color: #e75b17;
}

.babiz-list:hover {
  border-left: solid 4px #e75b17;
}

.bg-white {
  background: white;
}

.bg-gradient {
  background: linear-gradient(278.76deg, #000000 1.01%, #434343 99%);
}

.moreproducts-btn {
}
.orange-bg {
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border-radius: 10px;
  height: 520px;
}

.about-box {
  height: 411px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(187, 187, 187, 0.25);
  border-radius: 20px;
}

.market h3 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
}

.market h3 .m-header-color {
  color: #e75b17;
}

.market p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}

.ba-business h3 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
}

.ba-business p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}

.ba-business h5 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  align-items: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.ba-business h3 .m-header-color {
  color: #e75b17;
}
.orange-bg h6 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;

  display: flex;
  align-items: center;

  color: #000000;
}

.orange-bg h5 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 44px;
  /* or 110% */
  color: #ffffff;
}

.orange-bg button {
  width: 207px;
  height: 52px;
  background: #ffffff;
  border-radius: 5px;
  color: #e75b17;
  border-color: #ffffff;
}

.orange-bg p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}

.bg-gray {
  height: 520px;
  background: linear-gradient(323.09deg, #1f1f1f 6.03%, #424242 85.15%);
  border-radius: 10px;
  color: white;
}

.bg-gray p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
}

.bg-gray small {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}

.bg-gray .percent {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 44px;
}

.bg-gray button {
  width: 207px;
  height: 52px;
  background: #ffffff;
  border-radius: 5px;
  color: #e75b17;
  border-color: #ffffff;
}
</style>
