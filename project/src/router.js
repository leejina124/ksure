import { createWebHistory, createRouter } from "vue-router";

import MainPage from './view/MainPage.vue';

const routes = [
  {
    path: '/MainPage',
    component: MainPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;