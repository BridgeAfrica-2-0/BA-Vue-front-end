import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/home.vue";
import Login from "../views/login.vue";
import home1 from "@/views/home1.vue";
import signup from "../views/signup.vue";
import success from "../views/success.vue";
import failure from "../views/failure.vue";
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
import orders from "@/views/orders"
import notFound from "@/components/404"

import welcome from "@/views/welcome";

import ordersdetail from "@/views/odersDetail";
import OrderDetails from "@/views/OrderDetails";
import businessordersdetail from "@/views/businessordersdetail"
import businessOwnerOrders from "@/views/businessOwnerOrders"
import payment from "@/views/payment";
import about from "@/views/about";
import contact from "@/views/contact";
import cart from "@/views/card";

Vue.use(VueRouter);

const routes = [
  {
    path: "/notFound",
    name: "notFound",
    component: notFound,
  },
  {
    path: "/cart",
    name: "cart",
    component: cart,
  },


  {
    path: "/myorders/detail/:id",
    name: "ordersdetail",
    component: OrderDetails,
    // meta: {
    //   auth: true,
    // },
  },

  {
    path: "/orders/detail/:id",
    name: "OrderDetail",
    component: OrderDetails,
    // meta: {
    //   auth: true,
    // },
  },


  {
    path: "/",
    name: "home1",
    component: home1,

  },
  {
    path: "/cart",
    name: "cart",
    component: cart,

  },
  {
    path: '/about',
    name: 'about',
    component: about,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact,
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
    path: "/success",
    name: "success",
    component: success,
  },


  {
    path: "/failure",
    name: "failure",
    component: failure,
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
    component: orders,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/orders",
    name: "norders",
    component: orders,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/dashboard",
    name: "dashboard",
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
    path: "/network_member/:id?",
    name: "memberNetwork",
    component: memberNetwork,
  },
  {
    path: "/network_follower/:id?",
    name: "Membar Network Follower",
    component: memberNetworkFollower,

  },

  {
    path: "/network_member/:id?",
    name: "memberNetwork",
    component: memberNetwork,
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
    path: "/business/:id?",
    name: "BusinessFollower",
    component: businessFollower,
  },


  {
    path: "/businessvisitor",
    name: "BusinessVisitor",
    component: businessVisitor,
  },

  {
    path: "/profilevisitor",
    name: "visitor",
    component: Visitor,
  },
  {
    path: "/search",
    name: "GlobalSearch",
    component: search,

  },

  {
    path: "/services/:id",
    name: "Service",
    component: service,
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
    path: "/memberNetworkFollower/:id?",
    name: "Membar Network Follower",
    component: memberNetworkFollower,
  },

  {
    path: "*",
    name: "notFound",
    component: notFound,
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
  
  document.title = (to.name) ? `BrigeAfrica - ${to.name}` : `BrigeAfrica - ${to.name.toLocaleLowerCase()}`

  
  document.querySelector('meta[name="description"]')
  .setAttribute('content', `The Best Communication Platform for Business 
We operate a 3 in 1 software a service platform, that helps people create websites, access directories, and network. The best part is that the site works online and offline through SMS`)
  
  next();
});

export default router;