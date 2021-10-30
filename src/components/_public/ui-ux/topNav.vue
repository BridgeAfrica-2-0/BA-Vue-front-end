<template>
  <div class="top-nav">
    <div class="tn--up flex-centered">
      <div class="elt flex-centered tnu--container">
        <div class="tnu--left flex-centered">
          <div>
            <i class="far fa-envelope"></i>
            <span>info@bridgeafrica.com</span>
          </div>
          <div>
            <i class="far fa-map-marker"></i>
            <span>International Handicraft Center, Rond-point Intendance</span>
          </div>
        </div>
        <div class="tnu--right flex-centered">
          <div class="tnu--social flex-centered">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
          <router-link to="/login" class="tnu--link"> Sign In</router-link>
        </div>
      </div>
    </div>
    <div class="elt tn--content flex-centered">
      <div class="tnc--logo">
        <img src="@/assets/_public/imgs/logo.png" alt="BRIDGE AFRICA" />
      </div>
      <ul class="tnc--menu flex-centered">
        <li v-for="link in menuItems" :key="link.id">
          <router-link :to="link.uri">
            {{ link.label }}
          </router-link>
        </li>
      </ul>
      <div class="tnc--btn">
        <i class="far fa-search"></i>
        <i class="far fa-question-circle"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: "Home", uri: "#" },
        { label: "About Us", uri: "#" },
        { label: "Team", uri: "#" },
        { label: "Contact Us", uri: "#" },
      ],
    };
  },
};
</script>

<style lang="scss">
$pColor: #e75c18;
$pColorTa: #e75c1899;
.top-nav {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 130px;
  background-color: #ffffff;
  z-index: 2;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-bottom: solid 2px $pColor;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .tn--up {
    width: 100%;
    background-color: $pColor;
    height: 40px;
    color: #fff;

    .tnu--container {
      justify-content: space-between;
      font-size: 0.8rem;
      font-weight: 400;

      .tnu--left {
        div {
          margin-right: 1.2rem;
          i {
            margin-right: 5px;
          }
        }
      }

      .tnu--right {
        .tnu--social {
          margin-right: 1.2rem;

          a {
            color: #fff !important;

            &:hover {
              filter: grayscale(0.4) !important;
            }
          }
          i {
            font-size: 0.9rem;
            margin-right: 10px;
          }
        }

        .tnu--link {
          display: inline-block;
          background-color: #fff;
          padding: 0.4rem 1.2rem;
          border-radius: 0.25rem 0.1rem;
          color: $pColor;
        }
      }
    }
  }

  .tn--content {
    background-color: #fff;
    height: 90px;
    justify-content: space-between;

    .tnc--logo {
      img {
        height: 45px;
      }
    }

    .tnc--menu {
      height: 90px;
      list-style-type: none;
      margin: 0 !important;
      li {
        margin: 0 20px;
        font-size: 1.1rem;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .tnc--btn {
      i {
        display: inline-block;
        box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 14px;
        margin-left: 10px;
        padding: 0.8rem;
        cursor: pointer;
        position: relative;
        z-index: 10;
        font-size: 0.84rem;
        color: $pColor;
        border: solid 0.1px $pColorTa;

        &:hover {
          background-color: $pColor;
          color: #fff;
        }
      }
    }
  }
}
</style>
