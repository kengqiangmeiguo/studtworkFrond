import { createWebHistory, createRouter } from "vue-router";
import { start, done } from "@/core/utils/nprogress";

import type { RouteRecordRaw, RouterOptions, Router } from "vue-router";

import Home from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";

const NotFound = () => import("@/pages/NotFound.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
    meta: {
      pageTitle: "Home",
    },
  },
  {
    path: "/signup",
    component: LoginPage,
    meta: {
      pageTitle: "Sign Up",
    },
  },
  {
    // path: "/:pathMatch(.*)*",
    path: "/404",
    component: NotFound,
    meta: {
      pageTitle: "NotFound",
    },
  },
];

const option: RouterOptions = {
  routes,
  history: createWebHistory(),
};

const router: Router = createRouter(option);

router.beforeEach((to) => {
  start();
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;
});

router.afterEach(() => {
  done();
});

export default router;
