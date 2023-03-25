import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import guard from './guards/guard-teste';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      beforeEnter: guard
    },
    {
      path: '/tela-teste',
      name: 'teste',
      component: () => import('../views/TelaTesteView.vue'),
      beforeEnter: guard
    }
  ]
})

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from) => {});

export default router
