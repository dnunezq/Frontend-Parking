import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "signup",
    component: () => import("../components/Signup.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../components/ForgotPassword.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
