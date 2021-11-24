<template>
  <header class="position-relative">
    <b-navbar toggleable="lg" variant="faded" type="light">
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
            <b-nav-item href="#" class="ml-md-3" :class="currentRouteName == 'about' ? 'active' : ''">
              <span class="text-dark font-arvo nav-span">About Us</span>
            </b-nav-item>
            <b-nav-item href="#" class="ml-md-3" :class="currentRouteName == 'contact' ? 'active' : ''">
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
  color: #e94a47 !important;
}
.nav-item:hover .nav-link span {
  color: #e94a47 !important;
}
</style>
