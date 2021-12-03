.<template>
  <div id="app" class="" ref="formContainer">

    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
     <router-view />
    </transition>
  
  </div>
</template>
<script>
import { Redis } from "@/mixins";
export default {
  mixins: [Redis],

  data() {
    return {
      prevHeight: 0,
    };
  },

  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
  },
};
</script>


<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@import "./assets/css/main.css";
@import "./assets/css/style.css";
@import "./assets/css/bootstrap.css";

@import "./assets/icon/iconfont.css";

@import "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";

#app {
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-left: 5px;
}
#flashmessage{
  z-index: 9999 !important;
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
li .nav-link:hover {
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
.card-header {
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

.violet {
  color: #630460;
}

@media only screen and (max-width: 768px) {
  .nav-link {
    font-size: 9px;
  }
}
</style>