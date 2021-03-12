import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
import Login from "../views/login.vue";
import SignIn from "../views/signIn.vue";
import RecoverPass1 from "../views/recoverPassword1.vue";
import RecoverPass2 from "../views/recoverPassword2.vue";
import RecoverPass3 from "../views/recoverPassword3.vue";
import createService from "@/views/createService";
import service from "@/views/service";
import Modifier from "@/views/modifier";
import store from "@/store/index.js";
import Follower from "../views/follower.vue";
import profile_owner from "@/views/profileOwner";
import businessFollower from "@/views/businessFollower";
import businessOwner from "@/views/businessOwner";
import search from "@/views/search";
import forgotPassword from "@/views/forgotPassword";
import navMessage from "@/views/navMessaging";
import memberNetworkFollower from "@/views/memberNetworkFollower"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile_owner",
    name: "profile_owner",
    component: profile_owner,
  },
  {
    path: "/business_owner",
    name: "BusinessOwner",
    component: businessOwner,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/recoverPass1",
    name: "RecoverPass1",
    component: RecoverPass1,
  },
  {
    path: "/recoverPass2",
    name: "RecoverPass2",
    component: RecoverPass2,
  },
  {
    path: "/recoverPass3",
    name: "RecoverPass3",
    component: RecoverPass3,
  },
  {
    path: "/businessfollower",
    name: "BusinessFollower",
    component: businessFollower,
  },
  {
    path: "/services/create",
    name: "Create",
    component: createService,
    beforeEnter: (to, from, next) => {
      if (store.state.login) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/services/:id",
    name: "Service",
    component: service,
  },
  {
    path: "/services/modify/:id",
    name: "Modify",
    component: Modifier,
    beforeEnter: (to, from, next) => {
      console.log("dedans");
      if (store.state.login && store.state.isToi) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },

  {
    path: "/profilefollower",
    name: "Follower",
    component: Follower,
  },
  {
    path: "/search",
    name: "Search",
    component: search,
  },
  {
    path: "/forgotpass",
    name: "ForgotPassword",
    component: forgotPassword,
  },
  {
    path: "/messaging",
    name: "Nav Meassage",
    component: navMessage,
  },
  {
    path: "/memberNetworkFollower",
    name: "Membar Network Follower",
    component: memberNetworkFollower,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
