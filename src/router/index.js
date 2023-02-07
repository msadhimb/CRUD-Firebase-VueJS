import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InputView from "../views/InputView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list",
      name: "list",
      component: InputView,
    },
  ],
});

export default router;
