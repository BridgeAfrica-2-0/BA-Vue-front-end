<template>
  <header class="position-relative">
    <b-navbar toggleable="lg" variant="faded" type="light">
        <div class="col-md-12 col-lg-2 col-xl-2 text-center">
          <a class="d-inline-block align-top mt-1" href="#">
            <img src="@/assets/logo.png" alt="" class="balogo desktop" loading="lazy" />
            <img src="@/assets/img/BAC-clear-dotted-logo.png" alt="" class="balogo mobile" loading="lazy" />
          </a>
        </div>
      <div class="container p-0">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto text-center">
            <b-nav-item >
              <span class="text-dark font-arvo nav-span"><router-link :to="{name: 'home1'}">Home</router-link></span>
            </b-nav-item>
            <b-nav-item  class="ml-md-3" :class="currentRouteName == 'about' ? 'active' : ''">
              <span class="text-dark font-arvo nav-span"> <router-link :to="{name: 'about'}">About Us</router-link></span>
            </b-nav-item>
            <b-nav-item  class="ml-md-3" :class="currentRouteName == 'contact' ? 'active' : ''">
              <span class="text-dark font-arvo nav-span"> <router-link :to="{name: 'contact'}">Contact Us</router-link> </span>
            </b-nav-item>
            <b-nav-item class="ml-md-3">
              <span class="text-dark font-arvo nav-span"> <router-link :to="{name: 'Login'}">Login </router-link> </span>
            </b-nav-item>
            <b-nav-item  class="ml-md-3">
              <span class="text-dark font-arvo nav-span"> <router-link :to="{name: 'signup'}">Sign Up</router-link> </span>
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

@media (min-width: 992px)
{


.navbar-expand-lg {
    /* flex-flow: row nowrap;
    justify-content: flex-start;
    margin-right: 0px !important; */
    padding-right: 0px;
}
}
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
.container{
  margin-left: 10px !important;
  margin-right: 50px !important;
}

@media only screen and (max-width: 768px) {
  .balogo{
    width: 90px ;
    height: 40px ;
  }
  .desktop{
    display: none;
  }
}


@media only screen and (min-width: 768px) {
  .balogo{
    width: 200px ;
    height: 70px ;
  }
  .mobile{
    display: none;
  }
}
</style>
