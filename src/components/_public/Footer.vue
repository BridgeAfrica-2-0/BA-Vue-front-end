<template>
  <div class="p-footer-container ">
    <div class="footer-up"></div>
    <div class="footer-content elt flex-centered">
      <div class="fc--details">
        <img src="@/assets/_public/imgs/logo_short.png" alt="LOGO" />
        <p>
          Lorem Ipsum is simply dummy text of the and typesetting industry.
          Lorem Ipsum is dummy text of the printing.
        </p>
        <span
          class="icon-list flex-centered"
          v-for="elt in address"
          :key="elt.id"
        >
          <i class="far" :class="elt.icon"></i>
          <span>{{ elt.value }}</span>
        </span>

        <div class="icon-container flex-centered">
          <i
            v-for="elt in socials"
            :key="elt.id"
            class="fab"
            :class="elt.icon"
          ></i>
        </div>
      </div>
      <div class="fc--link">
        <h3 class="f--title">Company</h3>
        <ul>
          <li v-for="elt in companyLinks" :key="elt.id">
            <span class="deco">{{ elt.label }}</span>
          </li>
        </ul>
      </div>
      <div class="fc--link">
        <h3 class="f--title">Customer Care</h3>
        <ul>
          <li v-for="elt in customerCareLinks" :key="elt.id">
            <span class="deco">{{ elt.label }}</span>
          </li>
        </ul>
      </div>
      <div class="fc--other">
        <h3 class="f--title">Newsletter</h3>
        <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
        <div class="news--form">
          <input type="text" name="" id="" placeholder="Your email" />
          <span class="flex-centered"><i class="fas fa-paper-plane"></i></span>
        </div>
        <h3 class="f--title mt-custom">We Accept</h3>
        <img src="@/assets/_public/imgs/payment.png" alt="Payments" />
      </div>
    </div>
    <div class="footer-button">
      <p class="elt">All right reserved &copy; Bridge Africa {{ year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: [
        {
          icon: "fa-map-marker",
          value: "Rond-point Intendance",
        },
        { icon: "fa-phone", value: "(+237) 612-345-678" },
        { icon: "fa-envelope", value: "info@bridgeafrica.com" },
      ],
      socials: [
        { icon: "fa-facebook", uri: "#" },
        { icon: "fa-twitter", uri: "#" },
        { icon: "fa-linkedin", uri: "#" },
        { icon: "fa-youtube", uri: "#" },
      ],
      companyLinks: [
        { label: "Home", uri: "#" },
        { label: "About Us", uri: "#" },
        { label: "Contact Us", uri: "#" },
      ],
      customerCareLinks: [
        { label: "Login", uri: "#" },
        { label: "Register", uri: "#" },
        { label: "FAQ", uri: "#" },
        { label: "My Account", uri: "#" },
      ],

      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss">
$brandImageName: "brand2.jpg";
$pColor: #e75c18;

.f--title {
  font-weight: 600;
  font-size: 1.4rem;
  margin: 1rem 0;
  font-family: "Josefin" !important;
}
.mt-custom {
  margin-top: 2rem;
}

.p-footer-container {
  background-color: #171b2a;
  color: #ffffff;
  padding: 0;
  padding-top: 2.3rem;
  overflow: hidden;
  font-family: "Josefin-slab";
  font-size: 1.2rem;

  .footer-content {
    padding: 1.5rem 0;
    align-items: start;
    margin: auto;

    .fc--details {
      width: 40%;
      display: flex;
      flex-direction: column;

      img {
        width: 60px;
      }

      p {
        margin: 1.5rem 2%;
        margin-top: 2rem;
        width: 80%;
      }

      .icon-list {
        margin: 0.5rem 0;
        margin-left: 2%;
        width: 80%;
        font-size: 0.95rem;
        font-family: "Josefin-slab";
        justify-content: start;
        align-items: start;

        i {
          display: inline-block;
          margin-right: 8px;

          color: #ffffff99;
        }
      }

      .icon-container {
        width: 40%;
        margin-left: 2%;
        margin-top: 1.3rem;
        margin-bottom: 1.5rem;
        justify-content: start;

        i {
          font-size: 1.1rem;
          color: $pColor;
          margin-right: 10px;
        }
      }
    }

    .fc--link {
      width: 17%;
      margin: 0 2rem;

      ul {
        li {
          list-style-type: none;
          margin: 0.8rem 0;
          font-weight: 500;
          font-size: 1.1rem;
        }
      }
    }

    .fc--other {
      width: 25%;

      .news--form {

        display: flex;

        input {
          background-color: #fff;
          border: none;
          font-family: "Josefin-slab";
          color: #181828 !important;
          padding: 1rem 0.8rem;

          &:focus {
            outline: none !important;
          }
        }

        span {
          background-color: $pColor;
          padding: 0 1.2rem;
          i {
            color: #ffffff !important;
          }
        }
      }
    }
  }

  .footer-button {
    background-color: #282b38;
    margin: 0;
    display: flex;
    align-items: center;
    padding: 1.5rem 5rem;

    p {
      margin: auto;
      font-size: 1.1rem;
    }
  }
}
</style>
