<template>
  <div class="image-card">
    <div
      class="img-container"
      :style="{
        background:
          'url(' +
          require(`./../../../assets/_public/imgs/${img}`) +
          ') no-repeat center',
        backgroundSize: 'cover',
      }"
    ></div>
    <p>{{ title }}</p>
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
  },
};
</script>

<style lang="scss">
$pColor: #e75c18;
$pColorTa: #e75c1899;

.image-card {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: 0.3rem;
  overflow: hidden;
  padding: 0;
  .img-container {
    height: 200px;
    overflow: hidden;
  }
  p {
    text-transform: uppercase;
    margin: 0;
    font-size: 0.8rem;
    padding: 1rem 0.5rem;
    font-weight: 500;
  }
}
</style>
