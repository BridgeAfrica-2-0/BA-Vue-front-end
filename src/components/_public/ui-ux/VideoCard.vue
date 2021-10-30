<template>
  <div class="video-card">
    <div class="vc--container flex-centered">
      <div class="dsc--txt">
        <span class="vc--tag">Identity</span>
        <h3>{{ title }}</h3>
        <span>{{ subtitle }}</span>
        <router-link to="/signup" class="pbc--btn">Register</router-link>
      </div>
      <div class="vid--container">
        <video class="elt--vid" playsinline autoplay muted loop>
          <source
            :src="require(`./../../../assets/_public/video/${video}`)"
            :type="videoType"
          />
        </video>
      </div>
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
    subtitle: {
      type: String,
      default: undefined,
    },
    video: {
      type: String,
      default: undefined,
    },
    videoType: {
      type: String,
      default: "video/mp4",
    },
  },
};
</script>

<style lang="scss">
$pColor: #e75c18;
$pColorTa: #e75c1899;


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
.video-card {
  overflow: hidden;
  padding: 0;

  .vc--container {
    
    white-space: initial !important;
    .dsc--txt {
      width: 40%;
      min-width: 400px;
      display: flex;
      flex-direction: column;

      .vc--tag {
        margin: 1rem 0;
        border-radius: 20px;
        background-color: $pColorTa;
        font-size: .7rem;
        display: inline-block;
        width: 100px;
        padding: .6rem 1.2rem;
        text-align: center;
        color: #fff;
      }
      h3 {
        font-size: 2.5rem;
        margin: 2rem 0;
      }
    }

    .vid--container {
      height: 450px;

      .elt--vid {
        height: 450px;
      }
    }
  }
}
</style>
