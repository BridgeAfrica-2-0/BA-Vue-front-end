<template>
  <div>

    


    <b-card class="mt-4" header-tag="header" footer-tag="footer">
      <h6 class="mb-3 d-inline-block title">
        <fas-icon
          class=" mr-2 pt-1 icons "
          :icon="['fas', 'file-image']"
          size="lg"
        />
        <b>{{ $t('profileowner.Media') }}</b>
      </h6>

      <span class="float-right cursor" @click="goToMedia">
        <b-icon icon="eye-fill" variant="primary" > </b-icon> {{ $t('profileowner.View_All') }}
        </span>
        <CoolLightBox 
          :items="imgaray" 
          :index="index"
          @close="index = null">
        </CoolLightBox>


        <b-row>   
          <b-col cols="6" md="4" class="image p-1 imgheightt"
            v-for="(image, imageIndex) in imgaray"
            :key="imageIndex"
            @click="index = imageIndex"  >
            <img class="mb-2  img-fluid imgheight" :src="image" />
          </b-col>     
        </b-row>
    </b-card>
  </div>
</template>

<script>
export default {

  data: function () {
    return {
      index: null
    };
  },

  props:{
    activated:{
      type: Boolean,
      default: () => false
    }
  },

  methods:{
    goToMedia(){
      this.$emit('on:media', true)
    }
  },

  computed: {
    pictures() {
      return this.$store.getters["profile/getImages"] ;  
    },

    imgaray(){
      let arr=[];
      this.pictures.forEach((value, index) => {
        arr.push(value.image_url);
       
      });
      console.log("Pictures" , arr);
      return arr;
    }
  },

};
</script>

<style scoped>

.imgheight{

    height: 150px !important;
    object-fit: cover;
    width: 100%;
}

.cursor{
  cursor: pointer
}

</style>
