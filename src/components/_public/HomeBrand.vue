<template>
  <div class="p-brand-container">
    <TopNav />
    <div class="pb--content flex-centered">
      <div class="elt pbc--content">
        <div class="pbcc-c">
          <p>
            <i class="fas fa-home"></i>
            <span class="deco">Bridge Africa Ventures</span>
          </p>
          <h3>Empower your Business with us</h3>
          <p class="pbc--quote">
            Empowering Businesses And Consumers With Digital Presence To Buy And
            Sell Online
          </p>
          <router-link to="/signup" class="pbc--btn">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/_public/ui-ux/topNav.vue";

export default {
  components: { TopNav },
  data() {
    return {
      brandImgName: "brand.jpg",
    };
  },
};
</script>

<style lang="scss">
$brandImageName: "brand2.jpg";
$pColor: #e75c18;

.p-brand-container {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/_public/imgs/#{$brandImageName}");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .pb--content {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: calc(100% - 130px);
    background-color: rgba(#111, 0.6);
    z-index: 1;

    .pbc--content {
      color: #fff;

      .pbcc-c {
        width: 40%;
        min-width: 400px;
        float: right;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
          i {
            margin-right: 5px;
            color: $pColor;
          }

          &.pbc--quote {
            font-family: "Josefin-slab" !important;
            font-size: 1.1rem;
            border-left: solid .1px rgba($color: #ffffff, $alpha: .4);
            padding-left: 1.5rem;
            margin-top: 1rem;
            margin-left: 7px;
          }
        }
        h3 {
          font-size: 4rem;
          line-height: 3.5rem;
          margin: 1.2rem 0;
          font-weight: 600;
        }

        .pbc--btn {
          margin: 1rem 0;
          background-color: $pColor;
          color: #fff;
          padding: 1rem;
          text-align: center;
          width: 110px;

          &:hover {
            filter: grayscale(.4);
          }
        }
      }
    }
  }
}
</style>
