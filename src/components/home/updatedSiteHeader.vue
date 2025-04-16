<template>
  <div>
    <div class="top-bar d-none d-md-flex justify-content-between align-items-center m-auto">
      <div class="container p-0 m-auto d-flex justify-content-between align-items-center">
        <div class="contact-info d-flex align-items-center">
          <div class="d-flex">
          </div>

          <div>
            <span class="media-icons">
              <a href="https://twitter.com/bridgeafricacom" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="http://facebook.com/bridgeafricacom" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com/bridgeafricacom" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/channel/UC8JjdBDrz7GsqnO7kpEEHvA" target="_blank"><i
                  class="fab fa-youtube"></i></a>
            </span>
          </div>
        </div>
        <div class="language-selection">
          <b-dropdown variant="light">
            <template #button-content>
              <span class="poslang pr-1">{{ lang }}</span>
              <img :src="img" class="size poslang" alt="" />
            </template>
            <b-dropdown-item @click="change('en')">
              <img src="../../assets/img/about/en.png" class="size mr-1" alt="" />
              {{ $t("auth.english") }}
            </b-dropdown-item>
            <b-dropdown-item @click="change('fr')">
              <img src="../../assets/img/la-france.png" class="size mr-1" alt="" />
              {{ $t("auth.french") }}
            </b-dropdown-item>
          </b-dropdown>
        </div>

        <div v-if="countries.length" class="language-selection" data-toggle="modal" data-target="#settings"
          @click="() => isOpen = true">
          <span style="font-size: 14px; color: #000; padding: 0 15px;">
            <img :src="countrySelected?.flag" style="padding-right: 2px; width: 28px !important;" />{{ countrySelected?.code }} | {{ currencySelected?.name }}
            <i class="fa fa-caret-down"></i>
          </span>
        </div>
        <span v-else class="start-loader"></span>
      </div>
    </div>

    <settings-contries :open="isOpen">

    </settings-contries>

    <!-- Header Bar -->
    <div ref="homeNav" class="container-flex home-nav">
      <b-navbar toggleable="lg" class="p-0">
        <div class="container p-0 m-0">
          <div class="col-md-12 col-lg-2 col-xl-2 text-center p-0 py-2">
            <a class="d-inline-block align-top mt-1 float-left mobile1_1" href="#">
              <img src="@/assets/logo.png" alt="" class="balogo desktop mobile1" loading="lazy" />
            </a>
          </div>

          <div class="d-flex w-100 p-0 mobile-search">
            <div class="w-90 mobile-search-input m-auto">
              <div class="d-flex">
                <b-input-group class="binput">
                  <b-input-group-prepend @click="Search">
                    <div class="border" style="
                        color: white !important;
                        background-color: #fff; 
                        border-top-left-radius: 0.25rem !important;
                        border-bottom-left-radius: 0.25rem !important;
                      ">
                      <b-icon style="color: #DDDDDD" class="ml-2" icon="search"></b-icon>
                    </div>
                  </b-input-group-prepend>
                  <b-form-input v-on:keyup.enter="Search" class="search" style="border-left:none" type="search"
                    v-model="keyword" :placeholder="$t('general.search')"></b-form-input>
                </b-input-group>
                <div style="background-color: #E75B17; z-index: 100; border-radius: 6px; cursor: pointer;"
                  @click="Search">
                  <b-icon style="color: #fff" class="mt-2 ml-2 mx-3 search-icon" icon="search"></b-icon>
                </div>
              </div>
            </div>
            <b-navbar-toggle target="nav-collapse" class="b-none"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="mr-auto">
                <b-nav-item class="ml-md-1 text-left w-100 gray">

                  <div v-if="countries.length" class="language-selection  hidden-countries" data-toggle="modal"
                    data-target="#settings" @click="() => isOpen = true">
                    <span style="font-size: 14px; color: #000; padding: 0 15px;">
                      <img :src="countrySelected?.flag" />{{ countrySelected?.code }} {{ currencySelected?.name }}
                      <i class="fa fa-caret-down"></i>
                    </span>
                  </div>
                  <span v-else class="start-loader"></span>
                </b-nav-item>
                <b-nav-item class="text-center">
                  <span class="font-arvo nav-span">
                    <router-link :to="{ name: 'Bridge-home' }" :class="currentRouteName == 'Bridge-home'
                      ? 'active'
                      : 'inactive'
                      ">{{ $t("general.Home") }}</router-link>
                  </span>
                  <hr class="mobile navstyle" />
                </b-nav-item>
                <b-nav-item v-if="islogin" class="ml-md-1 m-auto">
                <span class="nav-span">
                  <router-link class="inactive" :to="{ name: 'dashboard' }">{{
                    $t("general.dashboard")
                    }}</router-link>
                </span>
                <hr class="mobile navstyle" />
              </b-nav-item>
              <b-nav-item class="ml-md-1 m-auto">
                <span class="nav-span">
                  <router-link class="inactive" to="/search">{{
                    $t("general.Market")
                    }}</router-link>
                </span>
                <hr class="mobile navstyle" />
              </b-nav-item>

              <b-nav-item v-if="islogin" @click="logout" class="ml-md-1 m-auto">
                <span class="nav-span">{{ $t("general.Logout") }}</span>
                <hr class="mobile navstyle" />
              </b-nav-item>


              </b-navbar-nav>
            </b-collapse>
            <b-navbar-nav class="mr-auto d-none d-lg-flex">
              <b-nav-item class="ml-md-1">
                <b-input-group class="binput">
                  <b-input-group-prepend @click="Search">
                    <div class="border" style="
                        color: white !important;
                        background-color: #fff; 
                        border-top-left-radius: 0.25rem !important;
                        border-bottom-left-radius: 0.25rem !important;
                      ">
                      <b-icon style="color: #DDDDDD" class="mt-2 ml-2" icon="search"></b-icon>
                    </div>
                  </b-input-group-prepend>
                  <b-form-input v-on:keyup.enter="Search" class="search" style="border-left:none" type="search"
                    v-model="keyword" :placeholder="$t('general.search')"></b-form-input>
                </b-input-group>
              </b-nav-item>
              <b-nav-item class="ml-md-3 m-auto" @click="navigateToCart">
                <span class="cart-icon position-relative" style="color:#455a64">
                  <b-icon icon="cart4" class="icon-size"></b-icon>
                  <span v-if="cartCount > 0" class="badge badge-pill badge-danger position-absolute"
                    style="top: 0; right: 0;">
                    {{ cartCount }}
                  </span>
                </span>
              </b-nav-item>
              <b-nav-item class="ml-md-3 m-auto">
                <b-tooltip v-if="islogin" target="profilepic" variant="light" triggers="hover">
                  {{ user.name }}
                </b-tooltip>
                <div v-if="islogin" class="d-flex align-items-center nav-item gap-1">
                <div  class="nav-item cursor" id="profilepic" triggers="hover" data-toggle="popover">
                  <router-link :to="userOwnPage">
                    <b-avatar variant="light" :src="user.profile_picture"
                      :square="'user' == user.user_type ? false : true" class="logo-sizee"></b-avatar>
                  </router-link>
                </div>
                <div class="nav-item">
                  <a id="other-menu" class="nav-link text-dark arrow-down" style="color: rgba(43, 39, 60, 1) !important;" data-toggle="popover" role="button"
                    data-original-title="" title="">
                  </a>
                  <b-popover target="other-menu" triggers="hover" placement="top">
                    <div class="popover-body">
                      <a v-if="'user' != user.user_type" @click.prevent="switchToProfile" href="#"
                        class="other-menu suggest-item cursor-pointer text-decoration-none text-dark">
                        <span class="mr-2"><fas-icon class="violet search" :icon="['fas', 'user']" /></span>
                        Profile
                      </a>
                      <hr class="h-divider" />

                      <div style="width: 100%" class="d-inline-flex flex-row align-items-center mb-1">
                        <Activity class="w-full" />
                      </div>

                      <router-link :to="{ name: 'orders' }"
                        class="other-menu suggest-item cursor-pointer text-decoration-none text-dark">
                        <span class="mr-2"><fas-icon class="violet search" :icon="['fas', 'cart-arrow-down']" /></span>
                        {{ $t("general.My_orders") }}
                      </router-link>
                      <hr class="h-divider" />

                      <router-link :to="{ name: 'settings' }"
                        class="other-menu suggest-item cursor-pointer text-decoration-none text-dark w-full">
                        <span class="mr-2 w-full" style="display: inline-block;"><fas-icon class="violet search"
                            :icon="['fas', 'cogs']" />
                          {{ $t("general.Account_Settings") }}
                        </span>
                      </router-link>
                      <hr class="h-divider" />
                      <div class="other-menu suggest-item cursor-pointer">
                        <span class="mr-1"><fas-icon class="violet search" :icon="['fas', 'question']" /></span>
                        {{ $t("general.Help_and_Support") }}
                      </div>
                      <hr class="h-divider" />

                      <div class="other-menu suggest-item cursor-pointer">
                        <b-link v-b-toggle="'collapse-2'"><fas-icon class="violet search mr-1"
                            :icon="['fas', 'globe-americas']" />
                          {{ $t("general.Language") }}</b-link>

                        <b-collapse id="collapse-2" class="mt-1">
                          <b-card-text @click="$i18n.locale = 'en'" class="cursor-pointer mb-1">{{ $t("auth.english")
                            }}</b-card-text>
                          <b-card-text @click="$i18n.locale = 'fr'">{{
                            $t("auth.french")
                            }}</b-card-text>
                        </b-collapse>
                      </div>
                      <hr class="h-divider" />
                      <a @click="logout" href="#"
                        class="other-menu suggest-item cursor-pointer text-decoration-none text-dark">
                        <span class="mr-2"><fas-icon class="violet search" :icon="['fas', 'sign-out-alt']" /></span>
                        {{ $t("general.Logout") }}
                      </a>
                    </div>
                  </b-popover>
                </div>
              </div>
             </b-nav-item>
              <b-nav-item v-if="!islogin" class="m-auto">
                <span class="nav-span">
                  <router-link class="inactive" :to="{ name: 'signup' }">{{
                    $t("general.Sign_Up")
                  }}</router-link>
                </span>
                <hr class="mobile navstyle" />
              </b-nav-item>
              <div class="m-auto py-1" style="height: 15px; border-right: 2px solid #282828"></div>
              <b-nav-item v-if="!islogin" class="ml-md-1 m-auto">
                <span class="nav-span">
                  <router-link class="inactive" :to="{ name: 'Login' }">{{
                    $t("general.Login")
                  }}</router-link>
                </span>
                <hr class="mobile navstyle" />
              </b-nav-item>

            </b-navbar-nav>
          </div>
        </div>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import { getGuestIdentifier } from "../../helpers";
import settingsContries from "@/components/SetupContries"
import { LocalisationMixins } from "@/mixins"
import _ from "lodash";
import { onInitializer2 } from "@/helpers/index";
import Activity from "@/components/ShowActivity.vue";
export default {
  mixins: [LocalisationMixins],
  components: {
    Activity,
    settingsContries,
  },
  data() {
    return {
      keyword: "",
      scrollPosition: 0,
      country: "",
      currency: "",
      img: null,
      lang: '',
      currencies: [],
      isOpen: false,
      countries: []
    };
  },

  created() {
    const currentLang = this.$i18n.locale;
    if (currentLang == 'en') {
      this.img = require("../../assets/img/about/en.png");
      this.lang = 'English'
    } else {
      this.img = require("../../assets/img/la-france.png");
      this.lang = 'Français'
    }
    this.loadCountries();
    if(this.islogin)
    {
      this.init();
      this.userOwnPage = this.onRedirect();
    }
  },


  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    islogin() {
      return this.$store.getters["auth/isLogged"];
    },
    cartCount() {
      return this.$store.getters["cart/getNumberOfItem"]
    },
    ...mapGetters({
      auth: "auth/user",
      user: "auth/profilConnected",
    }),
  },
  mounted() {
    this.fetchCartCount();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    change(lang) {
      this.$i18n.locale = lang;

      if (lang == 'en') {
        this.img = require("@/assets/img/about/en.png");
        this.lang = 'English'
      } else {
        this.img = require("@/assets/img/la-france.png");
        this.lang = 'Français'
      }
    },
    async loadCountries() {
  try {
    const countriesData = await onInitializer2();
    if (countriesData.length > 0) {
      this.countries = countriesData;
    } else {
      console.error("No countries data available.");
    }
  } catch (error) {
    console.error("Error loading countries:", error);
  }
},

switchToProfile: async function () {
      let loader = this.$loading.show({
        container: this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      const response = await this.$repository.share.switch(null, "reset");

      if (response.success) {
        this.profile({ ...this.auth.user, user_type: "user" });
        this.$router.push({
          name: "profile_owner",
        });
      }

      loader.hide();
    },
    handleScroll() {

      this.scrollPosition = window.scrollY;

      const targetElement = this.$refs.homeNav;

      if (this.scrollPosition > 50) {
        targetElement.classList.add("fixed-top");
      } else {
        targetElement.classList.remove("fixed-top");
      }
    },
    ...mapActions({
      Logout: "auth/logout",
      setBusiness: "social/FIND_USER_BUSNESS",
      profile: "auth/profilConnected",
      setNetworks: "social/FIND_USER_NETWORK",
    }),
    logout: async function () {
      let loader = this.$loading.show({
        container: this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18"
      });

      const requestForReset = await this.$repository.share.switch(
        null,
        "reset"
      );

      if (requestForReset.success) {
        const response = await this.$repository.notification.logOut();

        if (response.success) {
          loader.hide();
          this.Logout();
        }
        return false;
      }
      loader.hide();
    },
    Search() {
      if (!this.keyword) return false;

      if (this.$route.name != "Search") {
        this.$router.push({
          name: "GlobalSearch",
          query: { keyword: this.keyword }
        });
      }
    },

    navigateToCart() {
      this.$router.push("/cart");
    },
    async fetchCartCount() {
      try {
        let guest_identifier = getGuestIdentifier();
        const url = this.islogin ? "cart/total" : `guest/cart/total?guest_identifier=${guest_identifier}`;
        const response = await axios.get(url);
        this.$store.commit('cart/addNewItem', { items: response.data.data.totalItems, add: false })
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    },
    navLink(type) {
      const link = {
        home: () => {
          return this.profile ? { name: "dashboard" } : { name: "Bridge-home" };
        },
      };
      try {
        return link[type]();
      } catch (error) {
        throw new Error(error);
      }
    },
    getNetworks: async function () {
      let request = await this.$repository.share.getNetworks();
      if (request.success) this.setNetworks(request.data);
    },

    getBusiness: async function () {
      let request = await this.$repository.share.getBusiness();
      if (request.success) this.setBusiness(request.data);
    },
    init() {
      try {
        if (!this.hasLauchNetworkRequest) {
          this.getNetworks();
          this.getBusiness();
        }
      } catch (error) {
        console.log(error);
      }
    },
   

    gotoProfile() {
      this.$router.push("profile_owner");
    },
    onRedirect() {
      const link = {
        network: () => ({
          name: "networks",
          params: { id: this.user.slug ? this.user.slug : this.user.user_slug },
        }),
        business: () => ({
          name: "BusinessOwner",
          params: { id: this.user.slug ? this.user.slug : this.user.user_slug },
        }),
        user: () => ({ name: "profile_owner" }),
      };
      return link[this.user.user_type]();
    },
  }
};
</script>

<style scoped>
.logout-span {
  margin-left: 10px;
  color: black;
  cursor: pointer;
}

.auth-class {
  justify-content: end;
  display: flex;
  margin-right: 20px;
  margin-top: 20px;
}

li .nav-link:hover {
  background-color: none !important;
}

.form-control:focus {
  color: initial !important;
  background-color: #fff !important;
  border-color: #ced4da !important;
  outline: initial !important;
  box-shadow: none !important;
}

.search::placeholder {
  color: #dddddd;
}

.search:hover {
  color: black !important;
}

#user-icon {
  width: 20px !important;
  height: 20px !important;
}

.contact-info .btn-light {
  background-color: #f2f2f2 !important;
  border-color: #f2f2f2 !important;
}

.d-flex img {
  width: 18px !important;
  height: 18px !important;
}

#mail-icon {
  width: 28px !important;
  height: 25px !important;
  margin-top: 6px;
}

.top-bar {
  background-color: #f2f2f2;
  border-bottom: 1px solid #dee2e6;
}

.contact-info span {
  margin-right: 25px;
  display: inline-flex;
  align-items: center;
}

.contact-info i {
  margin-right: 5px;
  color: #8c8c8c;
}

.contact-info a {
  margin-left: 10px;
  color: #ff9e19;
}

.media-icons i {
  color: #ff9e19;
  margin-left: 15px;
}

.contact-info a:hover {
  color: #ff9e19;
}

.size {
  height: 15px;
  width: 15px;
}

.size2 {
  height: 20px;
  width: 20px;
  color: #8c8c8c !important;
}

.poslang {
  margin-right: 10px;
  margin-left: -10px;
  font-weight: 600 !important;
}

.media-icon {
  color: #ff9e19;
}

.language-selection {
  margin-right: 10px;
}

.binput {
  background: #fafafa;
  border: 1px solid #e7e7e7;
  border-radius: 6px;
}

a {
  color: #455a64 !important;
}

.mobile-search-input {
  display: none;
}

@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.b-none {
  border: none !important;
}

.size {
  height: 15px;
  width: 15px;
}

@media (min-width: 992px) {
  .poslang {
    /* margin-bottom: 10px; */
  }

  .navbar-expand-lg {
    padding-right: 0px;
    justify-content: center;
  }
}


.nav-span {
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #282828 !important;
}

.cart-icon {
  color: #e75c18 !important;
  position: relative;
}

.badge {
  position: absolute;
  top: -10px !important;
  right: -10px !important;
  font-size: 10px;
  padding: 0.25em 0.5em;
}

.icon-size {
  font-size: 1.7rem !important;
}

.nav-item.active .nav-link span {
  color: #e75c18 !important;
}

.nav-item:hover .nav-link span {
  color: #e75c18 !important;
}

.inactive {
  color: #282828 !important;
}

.active {
  color: #e75c18 !important;
}

@media only screen and (max-width: 768px) {
  .pos {
    margin-top: -20px;
  }

  .mobile1 {
    width: 140px !important;
  }

  .mobile1_1 {
    margin-left: 50px !important;
  }

  .balogo {
    width: 70px;
  }

  .desktop {
    /* display: none; */
    width: 200px;
  }

  .navstyle {
    width: 130%;
    margin-left: -13px;
    margin-bottom: -10px;
  }

  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    /* position: absolute !important; */
    top: 18px !important;
    right: auto !important;
  }

  .mobile-nav {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    position: absolute !important;
    top: 18px !important;
    right: 13px !important;
  }

  .poslang {
    margin-right: 10px;
    margin-left: -10px;
  }

  .bg-customer {
    background-color: red !important
  }
}

@media only screen and (min-width: 768px) {
  .balogo {
    width: 165px;
  }

  .language-selection.hidden-countries {
    display: none !important
  }


.gray {
  background-color: #dddada !important;
  display: none !important
}

  .bg-customer {
    background-color: #f8f8f8 !important
  }

  .mobile {
    display: none;
  }
}

@media (max-width: 768px) {
  .top-bar {
    padding: 5px 20px;
  }

  .bg-customer {
    display: none
  }

  .contact-info span {
    margin-right: 15px;
  }


  .media-icons i {
    margin-left: 10px;
  }


}

@media (max-width: 576px) {
  .top-bar {
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 20px;
  }

  .hidden-countries {
    display: block !important
  }

  .gray {
  background-color: #dddada !important;
  display: block !important
}

  .bg-customer {
    background-color: red !important
  }

  .contact-info {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-info span {
    margin-bottom: 10px;
    margin-right: 0;
  }

  .media-icons {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 10px;
  }

  .media-icons i {
    margin-left: 0;
    margin-right: 10px;
  }
}

@media screen and (max-width: 431px) {
  .mobile1_1 {
    margin-left: 30px !important;
  }

  .mobile-search-input {
    display: block;
    padding-bottom: 10px;
    width: 90%;
  }

  .balogo {
    margin-left: 20px !important;
  }

  .mobile-search-input .binput {
    /* width: 90%;
    margin: auto;; */
  }

  #nav-collapse {
    width: 100%;
  }

  .mobile-search {
    flex-direction: column;
  }

  .search-icon {
    font-size: 18px;
    margin-top: 12px !important;
  }

  .search {
    margin-left: 0 !important;
  }

  .border {
    display: flex;
    align-items: center;
  }
}
</style>
<style scoped>
.start-loader {
  width: 45px;
  border: 0 !important;
  border-radius: 0 !important;
  height: 25px;
  color: #e75c18;
  aspect-ratio: .75;
  --c: no-repeat linear-gradient(#e75c18 0 0);
  background:
    var(--c) 0% 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
  background-size: 20% 43%;
  animation: l5 1s infinite linear;
}

@keyframes l5 {
  20% {
    background-position: 0% 50%, 50% 100%, 100% 100%
  }

  40% {
    background-position: 0% 0%, 50% 50%, 100% 100%
  }

  60% {
    background-position: 0% 100%, 50% 0%, 100% 50%
  }

  80% {
    background-position: 0% 100%, 50% 100%, 100% 0%
  }
}
</style>
<style>
.text-dark {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: rgba(43, 39, 60, 1) !important;
  text-align: left;
}
</style>