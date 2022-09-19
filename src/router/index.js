import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/home.vue";
import Login from "../views/login.vue";
import LoginValidation from "../views/LoginValidation.vue";
import home1 from "@/views/home1.vue";
import signup from "../views/signup.vue";
import success from "../views/success.vue";
import failure from "../views/failure.vue";
import Password from "../views/recoverPassword.vue";
import RecoverPass2 from "../views/recoverPassword2.vue";
import RecoverPass3 from "../views/recoverPassword3.vue";

import verifyAccount from "../views/verifyAccount.vue";

import createService from "@/views/createService";
import newHome from "@/views/newHome";
import BridgeHome from "@/views/BridgeHome";
import Quote from "@/views/quote";
import businessOwnerSettingGeneral from "@/views/businessOwnerSettingGeneral";

import market from "@/views/market";
import settings from "@/views/settings";
import service from "@/views/service";
import Modifier from "@/views/modifier";
import store from "@/store/index.js";
import Follower from "../views/follower.vue";
import Visitor from "../views/visitor.vue";




import forgotPassword from "@/views/forgotPassword";
import navMessage from "@/views/navMessaging";

import templateView from "@/views/templateView";
import webSiteCreate from "@/views/webSiteCreate";
import webSiteCreateTwo from "@/views/webSiteCreateTwo";
import paidPlan from "@/views/paidPlan";
import confirmPayment from "@/views/confirmPayment";



import myorders from "@/views/myOders"
import orders from "@/views/orders"
import notFound from "@/components/404"

import welcome from "@/views/welcome";

import ordersdetail from "@/views/odersDetail";
import OrderDetails from "@/views/OrderDetails";
import businessordersdetail from "@/views/businessordersdetail"
import businessOwnerOrders from "@/views/businessOwnerOrders"
import payment from "@/views/payment";

import memberNetworkFollower from "@/views/memberNetworkFollower";
import memberNetwork from "@/views/memberNetwork";
import networkEditors from "@/views/networkEditors";
import businessFollower from "@/views/businessFollower";
import profileFollower from "@/views/profileFollower";
//import businessOwner from "@/views/businessOwner";
//import businessEditor from "@/views/businessEditor";
import businessVisitor from "@/views/businessVisitor";
//import networks from "@/views/networks";
//import search from "@/views/search";


const search = () => import('@/views/search');
const networks = () => import('@/views/networks');
const businessOwner = () => import('@/views/businessOwner');
 const businessEditor = () => import('@/views/businessEditor');
// const dashboard = () => import('@/views/dashboard');
// const dashboard = () => import('@/views/dashboard');


// import about from "@/views/about";
// import contact from "@/views/contact";
//import dashboard from "@/views/dashboard";

//import profile_owner from "@/views/profileOwner";

const profile_owner = () => import('@/views/profileOwner');

const dashboard = () => import('@/views/dashboard');
const newdashboard = () => import('@/views/NewDashBoard');

const about = () => import('@/views/about');
const contact = () => import('@/views/contact');

import cart from "@/views/card";

Vue.use(VueRouter);

const routes = [
  {
    path: "/notFound",
    name: "notFoundd",
    component: notFound,
  },
 

  {
    path: "/myorders/detail/:id",
    name: "pordersdetail",
    component: OrderDetails,
     meta: {
      auth: true,
     },
  },

  {
    path: "/orders/detail/:id",
    name: "OrderDetail",
    component: OrderDetails,
     meta: {
       auth: true,
     },
  },


  {
    path: "oldhome",
    name: "home1",
    component: home1,

  },
  {
    path: "/cart",
    name: "cart",
    component: cart, 
    meta: {
      auth: true,
    },

  },
  {
    path: '/about',
    name: 'about',
    component: about,
   
  },

  {
    path: "/quote",
    name: "quote",
    component: Quote,

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
    component: payment,
    meta: {
      auth: true,
    },
  },

  {
    path: "/businessOwnerOrders",
    name: "businessOwnerOrders",
    component: businessOwnerOrders,
    meta: {
      auth: true,
    },

  },

  {
    path: "/business_owner/ordersdetail",
    name: "ordersdetail",
    component: businessordersdetail,
    meta: {
      auth: true,
    },
  },
  {
    path: "/myorders",
    name: "orders",
    component: orders,
    meta: {
      auth: true,
    },
  },
  {
    path: "/orders",
    name: "norders",
    component: orders,
    meta: {
      auth: true,
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: newdashboard,
    //component: dashboard,
    meta: {
      auth: true,
    },
  },

  {
    path: "/newdashboard",
    name: "newdashboard",
    component: newdashboard,
    meta: {
      auth: true,
    },
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
    meta: {
     // auth: true,
    },
  },
  {
    path: "/profilefollower/:id?",
    name: "ProfileFollower",
    component: profileFollower,
    meta: {
      auth: true,
    },
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
    meta: {
      auth: true,
    },
  },

  {
    path: "/business_editor/:id?",
    name: "BusinessEditor",
    component: businessEditor,
    meta: {
      auth: true,
    },
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
    meta: {
      auth: true,
    },
  },
  {
    path: "/network_member/:id?",
    name: "memberNetwork",
    component: memberNetwork,
    meta: {
      auth: true,
    },
  },
  {
    path: "/network_follower/:id?",
    name: "Membar Network Follower",
    component: memberNetworkFollower,
    meta: {
     // auth: true,
    },

  },

 

  {
    path: "/login",
    name: "Login",
    component: Login,
  },


  {
    path: "/auth/facebook/callback",
    name: "Loginfacebook",
    component: Login,
  },
   
  {
    path: "/auth/google/callback",
    name: "Logingoogle",
    component: Login,
  },

  {
    path: "/login/validation",
    name: "Loginvalidation",
    component: LoginValidation,
  },

  {
    path: "/signup",
    name: "signup",
    component: signup,
  },

  {
    path: "/password",
    name: "Password",
    component: Password,
  },

  {
    path: "/verify",
    name: "verifyAccount",
    component: verifyAccount,
    meta: {
    //  auth: true,
    },
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
    path: "/business/:id?",
    name: "BusinessFollower",
    component: businessFollower,
    meta: {
      auth: true,
    },
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
    path: "/",
    name: "Bridge-home",
    component: BridgeHome,

  },

  {
    path: "/blecc",
    name: "Blecc",
    component: BridgeHome,

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
    //  auth: true,
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
    path: "/memberNetworkFollower/:id?",
    name: "Membar Network Follower",
    component: memberNetworkFollower,
  },

  {
    path: "*",
    name: "notFound",
    component: notFound,
  },
  {
    path: "/business/:id/guest",
    name: "BusinessFollowerGuest",
    component: businessFollower,
    props: { isGuestUser: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.auth) && !loggedIn) {
    
    if (to.name == 'BusinessFollower') {
      next("/business/"+to.params.id+"/guest");
      return;
    }
    
    next("/login");
    return;
  }

  if (to.matched.some((record) => record.meta.auth)) {
    const dat = localStorage.getItem("user");
    const userdata = JSON.parse(dat);

    if (userdata.user.verified_at == null) {
       next("/verify");
    }
  }
  
  document.title = (to.name) ? `BrigeAfrica - ${to.name}` : `BrigeAfrica - ${to.name.toLocaleLowerCase()}`

  const metaContent = (to.meta.content) ? to.meta.content : `The Best Communication Platform for Business 
We operate a 3 in 1 software a service platform, that helps people create websites, access directories, and network. The best part is that the site works online and offline through SMS`
  
  document.querySelector('meta[name="description"]').setAttribute('content', metaContent)
  
  next();
});


router.afterEach((to, from) => {
 
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;