import { createWebHistory, createRouter } from "vue-router";
import Main from './components/Home.vue'
import MyPage from './components/MyPage.vue'

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/orderPage",
    component: MyPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 