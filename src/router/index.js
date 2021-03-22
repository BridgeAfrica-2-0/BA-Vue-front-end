import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import Signup from "../views/signup.vue";
import RecoverPass1 from "../views/recoverPassword1.vue";
import RecoverPass2 from "../views/recoverPassword2.vue";
import RecoverPass3 from "../views/recoverPassword3.vue";
import createService from "@/views/createService";
import service from "@/views/service";
import Modifier from "@/views/Modifier";
import store from "@/store/index.js";
import Follower from "../views/follower.vue";
import Visitor from "@/views/visitor";
import businessVisitor from "@/views/businessVisitor.vue";
import dashboard from "@/views/dashboard.vue";
import dashboardInfo from "@/views/dashboardInfo.vue";
import dashboardWelcome from "@/views/dashboardWelcome.vue";
import memberNetworkVisitor from "@/views/memberNetworkVisitor.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/visitor",
    name: "visitor",
    component: Visitor
  },
  {
    path: "/businessvisitor",
    name: "businessVisitor",
    component: businessVisitor
  },
  {
    path: "/membernetworkvisitor",
    name: "member Network Visitor",
    component: memberNetworkVisitor
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard
  },
  {
    path: "/dashboardinfo",
    name: "dashboard_Info",
    component: dashboardInfo
  },
  {
    path: "/dashboardwelcome",
    name: "dashboard_welcome",
    component: dashboardWelcome
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/recoverPass1",
    name: "RecoverPass1",
    component: RecoverPass1
  },
  {
    path: "/recoverPass2",
    name: "RecoverPass2",
    component: RecoverPass2
  },
  {
    path: "/recoverPass3",
    name: "RecoverPass3",
    component: RecoverPass3
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
    }
  },
  {
    path: "/services/:id",
    name: "Service",
    component: service
    // beforeEnter: (to, from, next) => {
    //   console.log("dedans");
    //   if (store.state.login) {
    //     next();
    //   } else {
    //     next({ name: "Login" });
    //   }
    // }
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
    path: "/follower",
    name: "Follower",
    component: Follower,
  },
 
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
