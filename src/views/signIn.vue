<template>
  <div >  

      <div id="map"   style="width:100%;height: 500px; text-align: center; padding-right: 50px; padding-left: 50px;" ></div>  

      <button @click="dddata">  dddata</button>

  </div>
</template>
<script>

import {gmapApi} from 'vue2-google-maps'

export default {
  mounted () {

    
    

  this.$loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAGZU6cqra18t1fhN1AbzRsEc_pgt7n2C8&sensor=false&libraries=geometry,drawing,places&ext=.js")
    .then(() => {
      console.log('screen loaded')
    })
    .catch(() => {
      console.log('screen not loaded')
    });

  }
,


  methods: {
          

         

dddata() {

    let map;

    console.log(this.google);

 
}



  },


  computed: {
    google: gmapApi
  }


}

</script>