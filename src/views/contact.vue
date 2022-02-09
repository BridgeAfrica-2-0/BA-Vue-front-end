<template>
  <div class="contact">
    <!-- Navbar -->
    <site-header />

    <!-- Map -->
    <MglMap
      :accessToken="accessToken"
      :mapStyle.sync="mapStyle"
      :center="coordinates"
      :zoom="zoom"
      class="map-frame"
    >
      <MglMarker :coordinates="coordinates" color="red">
        <MglPopup :showed="isShowing" :closeButton="false">
          <div class="row">
            <div class="px-4 py-2 dialog-div">
              <p class="mb-0 dialog-text">
                {{ $t("general.International_Handricraft_Center") }}, Rond-point
                Intendance, Yaound<span>é, {{ $t("general.Cameroon") }}</span>
              </p>
            </div>
          </div>
        </MglPopup>
      </MglMarker>
    </MglMap>

    <!-- Keep In Touch -->

    <section class="keep-in-touch">
      <div class="keep-in-touch-header">
        <h1 class="font-arvo text-light text-center">
          {{ $t("general.KEEP_IN_TOUCH") }}
        </h1>
      </div>
    </section>

    <section class="container address">
      <div class="row">
        <div class="col-md-4 p-md-0">
          <div class="address-div">
            <img
              src="../assets/maps-and-flags.png"
              alt="..."
              class="address-img"
            />
            <h5 class="text-primary font-arvo text-center">
              ADDRESS
            </h5>
            <p class="text-center address-text">
              {{ $t("general.International_Handricraft_Center") }}, Rond-point
              Intendance, Yaound<span>é, {{ $t("general.Cameroon") }}</span>
            </p>
          </div>
        </div>

        <div class="col-md-4 p-md-0">
          <div class="address-div">
            <img src="../assets/cell-phone.png" alt="..." class="address-img" />
            <h5 class="text-primary font-arvo text-center">
              {{ $t("general.PHONE") }}
            </h5>
            <p class="text-center address-text">
              {{ $t("general.Mobile") }}: +273 697 157 690
            </p>
          </div>
        </div>

        <div class="col-md-4 p-md-0">
          <div class="address-div">
            <img
              src="../assets/paper-plane.png"
              alt="..."
              class="address-img"
            />
            <h5 class="text-primary font-arvo text-center">
              {{ $t("general.EMAIL") }}
            </h5>
            <p class="text-center address-text">
              info@bridgeafrica.com
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Component -->

    <contact />

    <!-- Footer -->

    <site-footer />
  </div>
</template>
<script>
/**
 * this component is for contact us view 
 */
import Contact from "../components/site/contact";
import SiteFooter from "../components/site/siteFooter";
import SiteHeader from "../components/site/siteHeader";
import { MglMap, MglPopup, MglMarker } from "vue-mapbox";
export default {
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/outdoors-v11",
      zoom: 14,
      coordinates: [11.520389461010724, 3.867377201341806],
      isShowing: true
    };
  },
  components: {
    Contact,
    SiteFooter,
    SiteHeader,
    MglMap,
    MglMarker,
    MglPopup,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.font-arvo {
  font-family: "Arvo", serif;
}
.font-rob {
  font-family: "Roboto", Sans-serif;
}
.font-poppin {
  font-family: "Poppins", sans-serif;
}
.font-source {
  font-family: "Source Sans Pro", sans-serif;
}
.font-mont {
  font-family: "Montserrat", sans-serif;
}
.balogo {
  width: 170px;
}
.contact {
  margin-left: -6px;
  font-size: 16px;
  overflow-x: hidden;
}
.map-frame {
  width: 100%;
  height: 100vh;
}

.dialog-div {
  min-width: 200px;
}
.dialog-text {
  font-size: 15px;
  font-weight: bold;
}
.keep-in-touch {
  background-image: url("../assets/contact-image.jpeg");
  width: 96%;
  min-height: 50vh;
  margin: auto;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.keep-in-touch-header {
  padding: 7rem 0;
}

.keep-in-touch-header h1 {
  line-height: 69px;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.address {
  margin-top: -15vh;
  width: 100%;
  min-height: 55vh;
  background-color: #f0f3f2;
}
.address-div {
  padding-top: 5rem;
  padding-bottom: 2rem;
  border-right: 1px solid #d3d3d3;
  min-height: 55vh;
  width: 100%;
}
.address-img {
  width: 48px;
  display: block;
  margin: auto;
  /* margin-top: 4.8rem; */
  margin-bottom: 2rem;
}
.address-text {
  color: #99a9b5;
  line-height: 25px;
  font-size: 16px;
  font-family: "Source Sans Pro";
  padding-top: 3rem;
}
.address-text span {
  font-size: 14pt;
}
@media only screen and (max-width: 660px) {
  .keep-in-touch {
    width: 100%;
  }

  .keep-in-touch-header h1 {
    font-size: 24px;
  }
  .address {
    min-height: 40vh;
    width: 90%;
    margin: auto;
    margin-top: -15vh;
  }
  .address-div {
    border-right: none;
    border-bottom: 1px solid #d3d3d3;
  }
}
</style>
