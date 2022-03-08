.<template>
  <div id="app" class="" ref="formContainer">

    <div ref="loaderr" :class="{fadde:showfadde, sep:showblock } ">    <semipolar-spinner
  :animation-duration="2000"
  :size="65"
  :color="'#ff1d5e'"
/>    

</div>
    <div id="flashmessage">
      <FlashMessage />
        <vue-confirm-dialog></vue-confirm-dialog>
    </div>

    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view />
    </transition>
    <notifications group="app" position="bottom right" classes="my-custom-class"/>
  </div>
</template>
<script>
import { Redis } from "@/mixins";
 import { SemipolarSpinner} from 'epic-spinners';

import { mapGetters, mapActions } from "vuex";

export default {
  mixins: [Redis],
  
  data() {
    return {
      prevHeight: 0,
   
      showblock:true,
         showfadde:false,
    };
  },
  components:{SemipolarSpinner},

  computed: mapGetters({
    auth: "auth/profilConnected",
  }),

  watch: {
    "$store.state.auth.profilConnected": function (newProfile) {
      const uuid = "network" === newProfile.user_type ? newProfile.id : null;

      this.getNetworkAndBusiness(
        "network" === newProfile.user_type ? newProfile.id : null
      );
    },
  },

  
 created(){
   

   window.addEventListener("load", this.onWindowLoad);
   

  },

  methods: {

    onWindowLoad() {
      this.showfadde=true;
      // $(".se-pre-con").fadeOut("slow");;
    },


    ...mapActions({
      setNetworks: "social/FIND_USER_NETWORK",
      setBusiness: "social/FIND_USER_BUSNESS",
    }),

    getNetworkAndBusiness: async function (uuid) {
      let request = await this.$repository.share.getNetworkAndBusiness(uuid);
      if (request.success) {
        this.setBusiness(request.data.business);
        this.setNetworks(request.data.network);
      }
    },

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

.fadde{
  transition-duration: 3.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
  opacity: 0;
  z-index: 0 !important;
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

#flashmessage {
  position: absolute;
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

.no-js #loader { display: none;  }
.js #loader { display: block; position: absolute; left: 100px; top: 0; }
.sep{
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 9999;
  background: #fff;
	// background: url(https://i.gifer.com/origin/d3/d3f472b06590a25cb4372ff289d81711_w200.gif) center no-repeat #fff;
}

.semipolar-spinner{   
  height: 65px;
  width: 65px;
  position: absolute;
  margin-top: 15%;
  margin-left: 50%;
}

</style>

