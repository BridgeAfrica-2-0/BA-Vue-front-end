<template>
  <div id="app">
    <Navbar/>
   <Info/>
   <Order/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Info from './components/Info.vue'
import Order from './components/Order.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Info,
    Order
    
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
