<template>
  <div id="app">
    <Navbar/>
    <Stepper/>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

import Stepper from './components/Stepper.vue'

export default {
  name: 'App',
  components: {
    Navbar,
       Stepper
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}
</style>
