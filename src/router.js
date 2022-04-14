import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory("/friends-app/"),
  routes: [
    {
      path: "/",
      component: () => import("./pages/Home.vue"),
    },
    {
      path: "/vk-oauth2",
      component: () => import("./pages/Oauth.vue"),
      props: ({ hash }) => ({ hash }),
    },
  ],
});
