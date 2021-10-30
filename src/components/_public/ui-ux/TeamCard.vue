<template>
  <div class="t-image-card">
    <div
      class="img-container team"
      :style="{
        background:
          'url(' +
          require(`./../../../assets/_public/imgs/${img}`) +
          ') no-repeat center',
        backgroundSize: 'cover',
      }"
    ></div>
    <h3>{{ fullName }}</h3>
    <p>{{ title }}</p>
    <div class="social--container">
      <a :href="social.facebook"> <i class="fab fa-facebook"></i> </a>
      <a :href="social.linkedin"> <i class="fab fa-linkedin"></i> </a>
      <a :href="social.twitter"> <i class="fab fa-twitter"></i> </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: undefined,
    },
    img: {
      type: String,
      default: undefined,
    },
    fullName: {
      type: String,
      default: undefined,
    },
    social: {
      type: Object,
      default: undefined,
    },
  },
};
</script>

<style lang="scss">
$pColor: #e75c18;
$pColorTa: #e75c1899;

.t-image-card {
  border: solid 1.1rem #f2f6f7;
  overflow: hidden;
  padding: 0;
  text-align: center;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.15) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.2) 0px 30px 60px -30px;
  }
  .img-container {
    overflow: hidden;
    height: 400px;

    img {
      height: 100%;
    }
  }
  h3 {
    margin-left: 1rem;
    margin-top: 2.3rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
  p {
    display: inline-block;
    font-family: "Josefin-slab";
    margin-left: 1rem;
    font-size: 0.8rem;
    padding: 0.5rem;
    border-radius: 2rem;
    color: #fff;
    background-color: $pColorTa;
  }
  .social--container {
    margin-left: 1rem;

    a {
      display: inline-block;
      padding: 0 .5rem;
      margin-right: .3rem;
      margin-bottom: 1rem;
      color: #788e94;
    }
  }
}
</style>
