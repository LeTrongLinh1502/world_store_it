import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import AllUser from "@/components/AllUser.vue";
import AllUser_fetch from "@/components/AllUser_fetch.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: "empty" },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
      meta: { layout: "empty" },
    },
    {
      path:'/user/get-all',
      name:'all_user',
      component: AllUser
    },
    {
      path:'/user/get-all-fetch',
      name:'all_user_fetch',
      component: AllUser_fetch
    },
    {
      path:'/lifecycle',
      name:'lifecycle',
      component: () => import('../views/LifecycleView.vue')
    },
    {
      path:'/upsert_product',
      name:'UpsertProduct',
      component: () => import('../components/product/UpsertProduct.vue')
    }
  ],
})


export default router
