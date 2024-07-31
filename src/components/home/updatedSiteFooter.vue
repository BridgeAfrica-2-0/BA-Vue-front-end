<template>
  <section class="footer">
   <div class="container">
    <div :class="['subscription-box', { 'footer-subscription': isSmallScreen }]">
      <p style="color: black;" class="subs-p">
        <span style="color: #e75c18;">Subscribe to our newsletter</span>
        and be the first to know about new arrivals, exclusive offers, and handicraft.
      </p>
      <form @submit.prevent="subscribe">
        <input type="email" v-model="email" placeholder="Enter your email" required>
        <b-button @click="scrollTo" variant="primary" class="hire-btn"> Subscribe
          <span class="arrow-icon-wrapper">
            <i class="fas fa-arrow-right"></i>
          </span>
        </b-button>
      </form>
    </div>

    <footer id="footer">
      <div class="footer-top black-back">
        <div class="container footer-box">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <div class="row">
                <div class="col-8 footer-img-col">
                  <img
                    src="../../assets/img/bavlogo.png"
                    width="227px"
                    class="size px-n1 px-md-0"
                    alt=""
                  />
                </div>
                <div class="col-9 logo-div">
                  <p class="white">
                  International Handicraft Center,
                  Rond-point Intendance, Yaounde 
                  Cameroon
                  </p>
                  <p style="color: #FF9E19;">
                    bridgeafricaventures.com
                  </p>
                </div>
              </div>


              <br />
            </div>

            <div class="col-lg-3 col-md-6 footer-links white">
              <h4 class="bridge-header text-left white">
                {{ $t("home.USEFUL_LINKS") }}
              </h4>
              <ul class="white">
                <li class="white">
                  <router-link class="over" :to="{ name: 'Bridge-home' }">{{
                    $t("home.Home")
                  }}</router-link>
                </li>
                <li class="white ">
                  <router-link class="over" :to="{ name: 'about' }">{{
                    $t("home.About_Us")
                  }}</router-link>
                </li>
                <li class="white ">
                  <router-link class="over" :to="{ name: 'contact' }">{{
                    $t("home.Contact_Us")
                  }}</router-link>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4 class="bridge-header text-left white">
                {{ $t("home.FOLLOW_US") }}
              </h4>
              <ul class="text-left white ">
                <li>
                  <a href="https://twitter.com/bridgeafricacom" class="bridge-icon" target="_blank">
                  <b-icon icon="twitter" ></b-icon>
                </a>
                <span class="social-text">Twitter</span>
                </li>
                <li>
                  <a href="http://facebook.com/bridgeafricacom" class=" bridge-icon" target="_blank">
                  <b-icon icon="facebook" ></b-icon>
                </a>
                <span class="social-text">Facebook</span>
                </li>
                <li>
                  <a href="https://instagram.com/bridgeafricacom" class=" bridge-icon" target="_blank">
                  <b-icon icon="instagram" ></b-icon>
                </a>
                <span class="social-text">Instagram</span>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC8JjdBDrz7GsqnO7kpEEHvA" class=" bridge-icon" target="_blank">
                  <b-icon icon="youtube" ></b-icon>
                </a>
                <span class="social-text">Youtube</span>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4 class="bridge-header text-left white">
                {{ $t("home.WORKING_HOURS") }}
              </h4>
              <ul class="white">
                <li>
                  {{ $t("home.Monday") }}-{{ $t("home.Friday") }}:
                  {{ $t("home.09AM_05PM") }}
                </li>
                <li>{{ $t("home.Saturday") }}: {{ $t("home.09AM_01PM") }}</li>
                <li>Sunday: Off</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
   </div>
  
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      isSmallScreen: false,
    };
  },
  methods: {
    subscribe() {
      // Handle subscription logic
      console.log('Subscribed with:', this.email);
    },
    handleResize() {
      this.isSmallScreen = window.innerWidth <= 768;
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.footer h4 {
		margin-right: auto;
		margin-left: auto;
	}
.logo-div
{
  text-align: left;
  margin-top: 10px;
  padding-left: 20px;
}
.social-link a {
  font-size: 18px;
  display: inline-block;
  background: #333;
  color: #fff;
  line-height: 0.1;
  padding: 8px 0;
  border-radius: 50%;
  text-align: center;
  width: 16px;
  height: 16px;
  transition: 0.3s;
  margin-right: 10px;
}
.footer-links ul a {
  color: white;
  transition: 0.3s;
  display: inline-block;
  line-height: 0;
}
.footer-links h4{
  font-size: 18px !important;
}
.bridge-icon {
  background-color: transparent !important;
  color:#FF9E19 !important;
}
.social-text{
  margin-left: 15px;
}
.subs-btn {
  border-radius: 30px;
}
.subs-p{
  font-size: 30px;
  font-weight: bold; 
  line-height: 1.5;
}
.hire-btn {
  margin-top: 2%;
  width: 174px;
  height: 46px;
  background: linear-gradient(323.09deg, #E07715 6.03%, #FF9E19 85.15%);
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.arrow-icon-wrapper {
  background-color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0;
  margin-left: auto;
}
.arrow-icon-wrapper i {
  color: #FF6200;
}

.footer {
  overflow: visible;
  margin-top: 2px !important;
  padding: 2px;
  width: 100%;
  align-content: end;
  background-color: #000000;
  color: #ffffff;
}

.subscription-box {
  background-color: #fff;
  padding: 60px 150px 30px 150px;
  box-shadow: 0 0 10px rgba(193, 194, 206, 0.8);
  text-align: center;
  z-index: 10;
  max-width: 100%;
  border-radius: 5px;
  border: 1px solid #C1C2CE;
  margin-top: -220px;
}
.subscription-box.footer-subscription {
  position: static;
  transform: none;
  box-shadow: none;
  padding: 20px 10px;
}
.subscription-box p {
  line-height: 1.5;
}
.subscription-box h2 {
  margin: 0 0 10px;
  font-size: 1.5em;
}
.subscription-box p {
  margin: 0 0 20px;
}
.subscription-box form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.subscription-box input[type="email"] {
  padding: 10px;
  width: 100%;
  max-width: 60%;
  margin-bottom: 10px;
  border: 1px solid #E7E7E7;
  border-radius: 3px;
}
.subscription-box input[type="email"]::placeholder {
  color: #C7C7C7;
}
.subscription-box button {
  padding: 10px 20px;
  background-color: #FF9E19;
  border: none;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
}
.subscription-box button:hover {
  background-color: #e68a00;
}

.footer-icon-text {
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
.color-white {
  color: #ffffff;
}
.over:hover {
  color: #e75c18 !important;
}
.white{
  font-size: 16px;
}

.over{
  font-weight: 500 !important;
}

@media only screen and (max-width: 768px) {
  .footer-box {
    margin: 10% 5%;
  }
  .subscription-box{
    width: 100%;
  }
}

@media only screen and (max-width: 660px) {
  .footer-icons-div {
    width: 100%;
  }
  .subs-p{
  font-size: 20px;
  font-weight: bold; 
  line-height: 1.5;
   }
  .footer-img-col {
    padding-left: 10px;
  }
  .subscription-box p {
    font-size: 1.2em;
  }
  .subscription-box{
    width: 100%;
  }
}

@media only screen and (max-width: 480px) {
  .subs-p{
  font-size: 20px;
  font-weight: bold; 
  line-height: 1.5;
   }
  .subscription-box{
    width: 100%;
  }
  .subscription-box p {
    font-size: 1em;
  }
  .hire-btn {
    font-size: 0.9em;
  }
  .footer-box {
    margin: 15% 2%;
  }
  .footer-top {
    padding: 20px 10px;
  }
  .footer-contact img {
    width: 150px;
  }
}
</style>
