import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/home.vue";
import Login from "../views/login.vue";

import signup from "../views/signup.vue";

import RecoverPass1 from "../views/recoverPassword1.vue";
import RecoverPass2 from "../views/recoverPassword2.vue";
import RecoverPass3 from "../views/recoverPassword3.vue";

import verifyAccount from "../views/verifyAccount.vue";

import createService from "@/views/createService";

import businessOwnerSettingGeneral from "@/views/businessOwnerSettingGeneral";

import market from "@/views/market";
import settings from "@/views/settings";
import service from "@/views/service";
import Modifier from "@/views/modifier";
import store from "@/store/index.js";
import Follower from "../views/follower.vue";
import Visitor from "../views/visitor.vue";
import profile_owner from "@/views/profileOwner";
import businessFollower from "@/views/businessFollower";
import profileFollower from "@/views/profileFollower";
import businessOwner from "@/views/businessOwner";
import businessEditor from "@/views/businessEditor";
import businessVisitor from "@/views/businessVisitor";
import search from "@/views/search";
import forgotPassword from "@/views/forgotPassword";
import navMessage from "@/views/navMessaging";
import Blec from "@/views/blec";
import memberNetworkFollower from "@/views/memberNetworkFollower";
import memberNetwork from "@/views/memberNetwork";

import networkEditors from "@/views/networkEditors";

import templateView from "@/views/templateView";
import webSiteCreate from "@/views/webSiteCreate";
import webSiteCreateTwo from "@/views/webSiteCreateTwo";
import paidPlan from "@/views/paidPlan";
import confirmPayment from "@/views/confirmPayment";
import networks from "@/views/networks";
import dashboard from "@/views/dashboard";

import myorders from "@/views/myOders"
import notFound from "@/components/404"



import welcome from "@/views/welcome";

import ordersdetail from "@/views/odersDetail";
import businessordersdetail from "@/views/businessordersdetail"
import businessOwnerOrders from "@/views/businessOwnerOrders"
import payment from "@/views/payment";
import about from "@/views/about";
import cart from "@/views/card";


Vue.use(VueRouter);

const routes = [
  {
    path: "/notFound",
    name: "notFound",
    component: notFound,
  },

  {
    path: "/myorders/detail",
    name: "ordersdetail",
    component: ordersdetail,
    // meta: {
    //   auth: true,
    // },
  },

{
    path: '/about-us',
    name: 'about',
    component: about,
    // meta: {
    //   auth: true,
    // },
},

{
  path: "/market",
  name: "market",
  component: market,
},
{
  path: "/checkout",
  name: "payment",
  component: payment
},
  
  {
    path: "/businessOwnerOrders",
    name: "businessOwnerOrders",
    component: businessOwnerOrders,
  
  },

  {
    path: "/business_owner/ordersdetail",
    name: "ordersdetail",
    component: businessordersdetail,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/myorders",
    name: "orders",
    component: myorders,
    // meta: {
    //   auth: true,
    // },
  },
  

  
  {
    path: "/",
    name: "home",
    component: dashboard,
    meta: {
      auth: true,
    },
  },

  {
    path: "/market",
    name: "market",
    component: market,
  },
  {
    path: "/checkout",
    name: "payment",
    component: payment
  },



  {
    path: "/welcome",
    name: "welcome",
    component: welcome,
    meta: {
      auth: true,
    },
  },

  {
    path: "/settings",
    name: "settings",
    component: settings,
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
  },

  {
    path: "/profile_owner",
    name: "profile_owner",
    component: profile_owner,
  },
  {
    path: "/profilefollower/:id?",
    name: "ProfileFollower",
    component: profileFollower,
  },
  {
    path: "/template_viewer",
    name: "templateViewer",
    component: templateView,
  },
  {
    path: "/business_owner/:id?",
    name: "BusinessOwner",
    component: businessOwner,
  },


  {
    path: "/business_editor/:id?",
    name: "BusinessEditor",
    component: businessEditor,
  },

  {
    path: "/business_owner_setting_general",
    name: "businessOwnerSettingGeneral",
    component: businessOwnerSettingGeneral,
  },

  {
    path: "/business_owner/create_website_step_one",
    name: "createWebSite",
    component: webSiteCreate,
  },
  {
    path: "/business_owner/create_website_step_two",
    name: "createWebSiteTwo",
    component: webSiteCreateTwo,
  },
  {
    path: "/business_owner/create_website_plan",
    name: "payPlan",
    component: paidPlan,
  },
  {
    path: "/business_owner/create_website_confirm_payment",
    name: "confirmPayment",
    component: confirmPayment,
  },
  {
    path: "/business_owner/network/:id?",
    name: "networks",
    component: networks,
  },
  {
    path: "/network/:id?",
    name: "networks",
    component: networks,
  },
  {
    path: "/network_editors/:id?",
    name: "NetworkEditors",
    component: networkEditors,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/signup",
    name: "signup",
    component: signup,
  },

  {
    path: "/recoverPass1",
    name: "RecoverPass1",
    component: RecoverPass1,
  },

  {
    path: "/verify",
    name: "verifyAccount",
    component: verifyAccount,
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
    path: "/businessfollower/:id?",
    name: "BusinessFollower",
    component: businessFollower,
  },
  {
    path: "/businessvisitor",
    name: "BusinessVisitor",
    component: businessVisitor,
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
    path: "/profile/:id?",
    name: "Follower",
    component: Follower,
  },
  {
    path: "/profilevisitor",
    name: "visitor",
    component: Visitor,
  },
  {
    path: "/search/:id",
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
  path: "/profile/:id?",
  name: "Follower",
  component: Follower,
  meta: {
    auth: true,
  },
},
{
  path: "/profilevisitor",
  name: "visitor",
  component: Visitor,
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
  path: "/memberNetwork/:id?",
  name: "memberNetwork",
  component: memberNetwork,
},

{
  path: "/memberNetworkFollower/:id?",
  name: "Membar Network Follower",
  component: memberNetworkFollower,
},


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.auth) && !loggedIn) {
    next("/login");

    return;
  }

  if (to.matched.some((record) => record.meta.auth)) {
    const dat = localStorage.getItem("user");
    const userdata = JSON.parse(dat);

    if (userdata.user.verified_at == null) {
      //  next("/verify");
    }
  }

  next();
});

export default router;