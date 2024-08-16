<template>
  <section class="footer">
   <div class="container">
    <div :class="['subscription-box', { 'footer-subscription': isSmallScreen }]">
      <p style="color: black" class="subs-p">
        <span style="color: #e75c18;">Subscribe to our newsletter</span>
        and be the first to know about new arrivals, exclusive offers, and handicraft.
      </p>
      <form @submit.prevent="subscribe">
        <input type="email" v-model="email" placeholder="Enter your email">
        <b-button type="submit" variant="primary" class="hire-btn"> Subscribe
          <span class="arrow-icon-wrapper">
            <i class="fas fa-arrow-right"></i>
          </span>
        </b-button>
      </form>

    </div>

    <footer id="footer">
      <div class="footer-top black-back">
        <div class="container footer-box">
          <div class="row p-0">
            <div class="col-lg-3 col-md-6 p-0 footer-contact">
              <div class="row">
                <div class="col-8 footer-img-col">
                  <img
                    src="../../assets/img/bavlogo.png"
                    width="250px"
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
              <h4 class="bridge-header text-left white pt-2">
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
              <h4 class="bridge-header text-left white pt-2">
                {{ $t("home.FOLLOW_US") }}
              </h4>
              <ul class="text-left white ">
                <li>
                  <a href="https://twitter.com/bridgeafricacom" class="bridge-icon" target="_blank">
                  <b-icon icon="twitter" class="social-icon" ></b-icon>
                  <span class="social-text">Twitter</span>
                </a>
                </li>
                <li>
                  <a href="http://facebook.com/bridgeafricacom" class=" bridge-icon" target="_blank">
                  <b-icon icon="facebook"  class="social-icon"></b-icon>
                  <span class="social-text">Facebook</span>                  
                </a>
                </li>
                <li>
                  <a href="https://instagram.com/bridgeafricacom" class=" bridge-icon" target="_blank">
                  <b-icon icon="instagram" class="social-icon"></b-icon>
                  <span class="social-text">Instagram</span>
                </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC8JjdBDrz7GsqnO7kpEEHvA" class=" bridge-icon" target="_blank">
                  <b-icon icon="youtube" class="social-icon"></b-icon>
                  <span class="social-text">Youtube</span>
                </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4 class="bridge-header text-left white pt-2">
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
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      isSmallScreen: false,
    };
  },
  methods: {
    async subscribe() {
      if (this.email.trim() === '') {
        alert('Email cannot be empty');
        return;
      }
     
      const newSubscription = {
        email: this.email
      };

      try {
        const response = await axios.post("/guest/news", newSubscription);
        this.flashMessage.show({
          status: "success",
          message: "Subscription successful."
        });
        // Clear the email input after a successful subscription
        this.email = '';
      } catch (error) {
        console.error('Error subscribing:', error);
        this.flashMessage.show({
          status: "error",
          message: "Subscription failed. Please try again."
        });
      }
    },
    handleResize() {
      this.isSmallScreen = window.innerWidth <= 768;
    },
    scrollTo() {
      // Assuming this method is required for some functionality
    }
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
.bridge-icon  {
  background-color: transparent !important;
  color:#FF9E19 !important;
}

.bridge-icon span {
  color: #fff;
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
  text-shadow: 0px 2px 0px #d8d8d8,
             0px 3px 0px rgba(209, 207, 207, 0.15),
             1px 4px 1px rgba(209, 207, 207, 0.15),
             2px 5px 1px rgba(209, 207, 207, 0.15)
}
.hire-btn {
  margin-top: 2%;
  width: 160px;
  height: 46px;
  background: linear-gradient(323.09deg, #E07715 6.03%, #FF9E19 85.15%);
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
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
  max-width: 75%;
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
  font-size: 15px;
}

.over{
  font-weight: 400 !important;
}

#footer .footer-top h4 {
  padding-bottom: 0 !important;
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

@media screen and (max-width: 425px) {

  .footer {
    padding: 0px;
  }

  .footer .container {
    padding: 0 !important;
    margin: 0 !important;
    width: 100%;
  }
  .subscription-box {
    border-radius: 0px;
    margin-top: -70px;
    width: 100%
  }

  .subscription-box.footer-subscription {
    padding: 50px 10px !important;
  }

  .subscription-box p {
    font-size: 21px !important;
    padding: 0 40px;
  }

  .hire-btn {
    height: unset !important;
    font-size: 16px;
  }

  .subscription-box input {
    padding : 19px !important;
    max-width: 65% !important;
  }

  #footer .footer-top {
    padding: 40px 20px 0px 20px !important;
  }

  .footer-contact img {
    width: unset !important;
  }

  .logo-div {
    padding-left: 12px !important;
  }
  
}
</style>
