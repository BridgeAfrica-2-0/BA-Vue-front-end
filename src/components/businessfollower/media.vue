<template>
  <div>

    


    <b-card class="mt-4" header-tag="header" footer-tag="footer">
      <h6 class="mb-3 d-inline-block title">
        <fas-icon
          class=" mr-2 pt-1 icons "
          :icon="['fas', 'file-image']"
          size="lg"
        />
        <b> Media </b>
      </h6>

      <span class="float-right">
        <b-link
          ><b-icon icon="eye-fill" variant="primary"> </b-icon> View All
        </b-link></span
      >



        <CoolLightBox 
      :items="imgaray" 
      :index="index"
      @close="index = null">
    </CoolLightBox>



        <b-row>   


          <b-col cols="6" md="4"    class="image p-1   imgheightt"
        v-for="(image, imageIndex) in imgaray"
        :key="imageIndex"
        @click="index = imageIndex"  >

    <img
              class="mb-2  img-fluid imgheight"
               :src="image"
            
            />
        
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

  computed: {
    pictures() {
      return this.$store.getters["profile/getImages"] ;  
    },

    imgaray(){
      let arr=[];
      this.pictures.forEach((value, index) => {
        arr.push(value.image_url);
       
      });
      return arr;
    }

  },

  mounted(){

    

  }


};
</script>

<style scoped>

.imgheight{

    height: 150px !important;
    object-fit: cover;
    width: 100%;
}



</style>
