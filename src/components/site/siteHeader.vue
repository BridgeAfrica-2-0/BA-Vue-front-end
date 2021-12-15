<template>
  <header class="position-relative">
    <b-navbar toggleable="lg" variant="faded" type="light">
      <div class="container">
        <div class="col-md-12 col-lg-2 col-xl-2 text-center">
          <a class="d-inline-block align-top mt-1" href="#">
            <img src="@/assets/img/BAC-clear-dotted-logo.png" alt="" class="balogo" loading="lazy" />
          </a>
        </div>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto text-center">
            <b-nav-item href="#">
              <span class="text-dark font-arvo nav-span">{{ $t("general.Home") }}</span>
            </b-nav-item>
            <b-nav-item href="/about" class="ml-md-3" :class="currentRouteName == 'about' ? 'active' : ''">
              <span class="text-dark font-arvo nav-span">{{ $t("general.About_Us") }}</span>
            </b-nav-item>
            <b-nav-item href="/contact" class="ml-md-3" :class="currentRouteName == 'contact' ? 'active' : ''">
              <span class="text-dark font-arvo nav-span">{{ $t("general.Contact_Us") }}</span>
            </b-nav-item>
            <b-nav-item href="#" class="ml-md-3">
              <span class="text-dark font-arvo nav-span">{{ $t("general.Login") }}</span>
            </b-nav-item>
            <b-nav-item href="#" class="ml-md-3">
              <span class="text-dark font-arvo nav-span">{{ $t("general.Sign_Up") }}</span>
            </b-nav-item>

            
              <b-nav-item href="#" class="ml-md-3 font-weight-bold">
                  <b-card-text
                    @click="$i18n.locale = 'en'"
                    class="text-dark font-arvo cursor-pointer mb-1 fw-bold"
                    >{{ $t("auth.english") }}
                    </b-card-text
                  >
              </b-nav-item>

              <b-nav-item href="#" class="ml-md-3 font-weight-bold">
                  <b-card-text @click="$i18n.locale = 'fr'" class="text-dark font-arvo cursor-pointer mb-1 ">{{
                    $t("auth.french")
                  }}
              </b-card-text>

          </b-nav-item>

          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>
<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
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

.nav-span {
  font-size: 14px;
  font-weight: bold;
}

.nav-item.active .nav-link span {
  color: #e75c18 !important;
}
.nav-item:hover .nav-link span {
  color: #e75c18 !important;
}


@media only screen and (max-width: 768px) {
  .balogo{
    width: 80px ;
    height: 50px ;
  }
}


@media only screen and (min-width: 768px) {
  .balogo{
    width: 100px ;
    height: 80px ;
  }
}
</style>
