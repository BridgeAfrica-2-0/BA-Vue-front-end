
export default [
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/AuthSignupView.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/AuthLoginView.vue")
  },
  {
    path: "/auth/facebook/callback",
    name: "Loginfacebook",
    component: () => import("@/views/AuthLoginView.vue")
  },

  {
    path: "/auth/google/callback",
    name: "Logingoogle",
    component: () => import("@/views/AuthLoginView.vue")
  },

  {
    path: "/verify",
    name: "verifyAccount",
    component: () => import("@/views/AuthVerifyAccountView.vue"),
    meta: {
      //  auth: true,
    }
  },

]