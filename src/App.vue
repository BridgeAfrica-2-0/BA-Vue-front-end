<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
/* eslint-disable */
export default {
  
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-left: 5px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media only screen and (max-width: 768px) {
  .nav-link{
        font-size: 9px;
  }
  
}
</style>

