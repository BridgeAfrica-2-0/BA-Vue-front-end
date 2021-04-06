<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
/* eslint-disable */
export default {};
</script>


<style lang="less">


@import "./assets/css/main.css";
@import "./assets/css/style.css";
@import "./assets/css/bootstrap.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-left: 5px;
}
.primary {
  color: #e75c18;
}
.primary-bg {
  background-color: #e75c18;
}
.green {
  color: #32a400;
}
.green-bg {
  background-color: #32a400;
}
.yellow {
  color: #ffd200;
}
.yellow-bg {
  background-color: #ffd200;
}
.nav-link {
  color: #000;
}
li .nav-link:hover{
  background-color: #e75c18;
  color: #fff;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: #e75c18;
}

.alert-primary {
  background-color: #e9a07c;
}
.red {
  color: #ff0000;
}
.red-bg {
  background-color: #ff0000;
}

.purple {
  color: #6263;
}
.purple-bg {
  background-color: #6263;
}
.card-header{
  border: none;
  background-color: red;
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
.toggle {
  color: #fff;
  background-color: #000;
  border-color: #005cbf;
}

@media only screen and (max-width: 768px) {
  .nav-link {
    font-size: 9px;
  }
}
</style>
