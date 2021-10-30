<template>
  <div class="icone-card">
    <div class="img-container flex-centered">
      <img
        :src="require(`./../../../assets/_public/imgs/${img}`)"
        alt="Icon from Card"
      />
    </div>
    <h3 class="ic--title">{{ title }}</h3>
    <p class="ic--content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: undefined,
    },
    content: {
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

.icone-card {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: 0.3rem;
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
  .img-container {
    height: 80px;
    overflow: hidden;

    img {
      height: 80%;
    }
  }

  .ic--title {
    font-size: 1.4rem;
    line-height: 1.2rem;
    font-weight: 600;
    font-family: "Josefin";
    margin: 1.5rem 0;
  }
  .ic--content {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Josefin-slab";
    line-height: 1.3rem;
  }
}
</style>
