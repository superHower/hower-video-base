import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: "/home",
    name: "Home",
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/:pathxx(.*)*", //通配所有路由
    name: "Base",
    meta: {
      title: '根路由',
    },
    component: () => import('@/views/HomeView.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
