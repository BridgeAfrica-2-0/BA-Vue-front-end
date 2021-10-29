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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$pColor: #e75c18;
.top-nav {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 130px;
  background-color: #ffffff;
  z-index: 2;
  // box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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
            font-size: .9rem;
            margin-right: 10px;
          }
        }

        .tnu--link {
          display: inline-block;
          background-color: #fff;
          padding: 0.4rem 1.2rem;
          border-radius: 0.25rem;
          color: $pColor;
        }
      }
    }
  }

  .tn--content {
    background-color: #fff;
  }
}
</style>
