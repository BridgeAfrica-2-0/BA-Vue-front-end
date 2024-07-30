<template>
  <div>
    <!-- Top Bar with Contact Information and Language Selection -->
<!-- <div class="top-bar d-flex justify-content-between align-items-center">
  <div class="container p-0 m-0">
  <div class="contact-info">
    <span> <img src="../../../public//assets//home/phone.png" class="size2" alt=""> +123 456 7890</span>
    <span><img src="../../../public//assets//home/email.png" class="size2" alt=""> infobridgeafrica.com@gmail.com</span>
    <span class="media-icons">
      <a href="https://twitter.com/bridgeafricacom" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="http://facebook.com/bridgeafricacom" target="_blank"><i class="fab fa-facebook-f"></i></a>
      <a href="https://instagram.com/bridgeafricacom" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="https://www.youtube.com/channel/UC8JjdBDrz7GsqnO7kpEEHvA" target="_blank"><i class="fab fa-youtube"></i></a>
    </span>
  </div>
  <div class="language-selection">
    <b-dropdown variant="ligth">
      <template #button-content>
        <span class="poslang">{{ lang }}</span> <img :src="img" class="size poslang" alt=""> 
      </template>
      <b-dropdown-item @click="change('en')">
        <img src="../../assets/img/about/en.png" class="size" alt=""> EN
      </b-dropdown-item>
      <b-dropdown-item @click="change('fr')">
        <img src="../../assets/img/la-france.png" class="size" alt=""> FR
      </b-dropdown-item>
    </b-dropdown>
  </div>
</div>
</div> -->
<div class="top-bar d-none d-md-flex justify-content-between align-items-center">
  <div class="container p-0 m-0 d-flex justify-content-between align-items-center">
    <div class="contact-info d-flex align-items-center">
      <div>
        <span><img src="../../../public/assets/home/phone.png" class="size2" alt=""> +237697157690</span>
        <span><img src="../../../public/assets/home/email.png" class="size2" alt=""> info@bridgeafrica.com</span>
      </div>
      <div>
        <span class="media-icons">
          <a href="https://twitter.com/bridgeafricacom" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="http://facebook.com/bridgeafricacom" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://instagram.com/bridgeafricacom" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UC8JjdBDrz7GsqnO7kpEEHvA" target="_blank"><i class="fab fa-youtube"></i></a>
        </span>
      </div>
    </div>
    <div class="language-selection">
      <b-dropdown variant="light">
        <template #button-content>
          <span class="poslang">{{ lang }}</span> <img :src="img" class="size poslang" alt=""> 
        </template>
        <b-dropdown-item @click="change('en')">
          <img src="../../assets/img/about/en.png" class="size" alt=""> EN
        </b-dropdown-item>
        <b-dropdown-item @click="change('fr')">
          <img src="../../assets/img/la-france.png" class="size" alt=""> FR
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</div>



    <!-- Header Bar -->
    <div class="container-flex home-nav"> 
      <b-navbar toggleable="lg" class="p-0 ">
        <div class="container p-0 m-0">
          <div class="col-md-12 col-lg-2 col-xl-2 text-center p-0 p-lg-2">
            <a class="d-inline-block align-top mt-1 float-left" href="#">
              <img src="@/assets/logo.png" alt="" class="balogo desktop mobile1" loading="lazy" />
            </a>
          </div>
          
          <div class="d-flex w-100 p-0">
            <b-navbar-toggle target="nav-collapse" class="b-none"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="mr-auto">
                <b-nav-item class="text-center">
                  <span class="font-arvo nav-span">
                    <router-link :to="{ name: 'Bridge-home' }" :class="currentRouteName == 'Bridge-home' ? 'active' : ''">{{ $t("general.Home") }}</router-link>
                  </span>
                  <hr class="mobile navstyle" />
                </b-nav-item>
                <b-nav-item class="ml-md-1 text-center">
                  <span class="font-arvo nav-span">
                    <router-link :to="{ name: 'about' }" :class="currentRouteName == 'about' ? 'active' : ''">{{ $t("general.About_Us") }}</router-link>
                  </span>
                  <hr class="mobile navstyle" />
                </b-nav-item>
                <b-nav-item class="ml-md-1 text-center">
                  <span class="font-arvo nav-span">
                    <router-link :to="{ name: 'contact' }" :class="currentRouteName == 'contact' ? 'active' : ''">{{ $t("general.Contact_Us") }}</router-link>
                  </span>
                  <hr class="mobile navstyle" />
                </b-nav-item>

                <div class="d-block d-lg-none">
                  <b-nav-item v-if="!islogin" class="ml-md-1 text-center">
                    <span class="nav-span">
                      <router-link :to="{ name: 'Login' }">{{ $t("general.Login") }}</router-link>
                    </span>
                    <hr class="mobile navstyle" />
                  </b-nav-item>
                  <b-nav-item v-if="islogin" class="ml-md-1 text-center">
                    <span class="nav-span">
                      <router-link :to="{ name: 'dashboard' }">{{ $t("general.dashboard") }}</router-link>
                    </span>
                    <hr class="mobile navstyle" />
                  </b-nav-item>
                  <b-nav-item class="ml-md-1">
                    <div class="border-right" style="border-right:1px solid black"></div>
                  </b-nav-item>
                  <b-nav-item v-if="!islogin" class="ml-md-1 text-center">
                    <span class="nav-span">
                      <router-link :to="{ name: 'signup' }">{{ $t("general.Sign_Up") }}</router-link>
                    </span>
                    <hr class="mobile navstyle" />
                  </b-nav-item>
                  <b-nav-item v-if="islogin" @click="logout" class="ml-md-1 text-center">
                    <span class="nav-span">{{ $t("general.Logout") }}</span>
                    <hr class="mobile navstyle" />
                  </b-nav-item>
                </div>
              </b-navbar-nav>
            </b-collapse>
            <b-navbar-nav class="mr-auto d-none d-lg-flex">
              <b-nav-item class="ml-md-1">
                <b-input-group class="binput">
                  <b-input-group-prepend @click="Search">
                    <div class="border" style="color:#495057 !important">
                      <b-icon style="color:red" class="mt-2 ml-2" icon="search"></b-icon>
                    </div>
                  </b-input-group-prepend>
                  <b-form-input v-on:keyup.enter='Search' style="border-left:none" type="search" v-model="keyword" placeholder="Search"></b-form-input>
                </b-input-group>
              </b-nav-item>
              <b-nav-item class="ml-md-1 m-auto">
                <span class="nav-span" style="color:#455a64">
                  <b-icon icon="person" font-scale="1.8"></b-icon>
                </span>
              </b-nav-item>
              <b-nav-item v-if="!islogin" class="ml-md-1 m-auto">
                <span class="nav-span">
                  <router-link :to="{ name: 'Login' }">{{ $t("general.Login") }}</router-link>
                </span>
                <hr class="mobile navstyle" />
              </b-nav-item>
              <div class="border-right m-auto" style="height: 20px;"></div>
              <b-nav-item v-if="!islogin" class="ml-md-1 m-auto">
                <span class="nav-span">
                  <router-link :to="{ name: 'signup' }">{{ $t("general.Sign_Up") }}</router-link>
                </span>
                <hr class="mobile navstyle" />
              </b-nav-item>
              <b-nav-item v-if="islogin" class="ml-md-1 m-auto">
                <span class="nav-span">
                  <router-link :to="{ name: 'dashboard' }">{{ $t("general.dashboard") }}</router-link>
                </span>
                <hr class="mobile navstyle" />
              </b-nav-item>
              <b-nav-item v-if="islogin" @click="logout" class="ml-md-1 m-auto">
                <span class="nav-span">{{ $t("general.Logout") }}</span>
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
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      img: require("../../assets/img/about/en.png"),
      lang: "EN",
      keyword: "",
    };
  },
  created() {
    this.islogin = this.$store.getters["auth/isLogged"];
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    islogin() {
      return this.$store.getters["auth/isLogged"];
    },
  },
  methods: {
    ...mapActions({
      Logout: "auth/logout",
    }),
    logout: async function () {
      let loader = this.$loading.show({
        container: this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      const requestForReset = await this.$repository.share.switch(null, "reset");

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
          query: { keyword: this.keyword },
        });
      }
    },
    change(lang) {
      this.$i18n.locale = lang;

      if (lang == "en") {
        this.img = require("../../assets/img/about/en.png");
        this.lang = "English";
      } else {
        this.img = require("../../assets/img/la-france.png");
        this.lang = "French";
      }
    },
  },
};
</script>

<style scoped>
.container
{
  max-width: 1440px;;
}
.top-bar {
  background-color: #F2F2F2;
  padding: 5px 200px;
  border-bottom: 1px solid #dee2e6;
}
.contact-info span {
  margin-right: 35px;
  display: inline-flex;
  align-items: center;
}
.contact-info i {
  margin-right: 5px;
  color: #8C8C8C;
}
.contact-info a {
  margin-left: 10px;
  color: #FF9E19;
}
.media-icons i {
  color: #FF9E19;
  margin-left: 15px;
}
.contact-info a:hover {
  color: #FF9E19;
}
.size {
  height: 15px;
  width: 15px;
}
.size2 {
  height: 20px;
  width: 20px;
}
.poslang {
  margin-right: 10px;
  margin-left: -10px;
}
.media-icon {
  color: #FF9E19;
}

.language-selection {
  margin-right: 10px;
}

.binput {
  background: #fafafa;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 35px rgb(0 0 0 / 11%);
  border-radius: 5px;
}

a {
  color: #455a64 !important;
}

@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

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
  color: #282828;
}

.nav-item.active .nav-link span {
  color: #e75c18 !important;
}

.nav-item:hover .nav-link span {
  color: #e75c18 !important;
}

.active {
  color: #e75c18 !important;
}

.container {
  margin-left: 10px !important;
  margin-right: 50px !important;
}

@media only screen and (max-width: 768px) {
  .pos {
    margin-top: -20px;
  }

  .mobile1 {
    width: 140px !important;
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
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    position: absolute !important;
    top: 18px !important;
    right: 13px !important;
  }

  .poslang {
    margin-right: 10px;
    margin-left: -10px;
  }
}

@media only screen and (min-width: 768px) {
  .balogo {
    width: 165px;
  }

  .mobile {
    display: none;
  }
}

@media (max-width: 768px) {
  .top-bar {
    padding: 5px 20px; 
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
</style>
