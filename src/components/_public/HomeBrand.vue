<template>
  <div class="p-brand-container">
    <TopNav />
    <div class="pb--content"></div>
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
    width: 100%;
    height: 100%;
    background-color: rgba(#111, 0.6);
    z-index: 1;
  }
}
</style>
