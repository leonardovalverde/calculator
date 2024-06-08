import { createRouter, createWebHistory } from "vue-router";
import InvestmentSimulator from "@/pages/InvestmentSimulator.vue";
import HomePage from "@/pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/investment-simulator",
    name: "InvestmentSimulator",
    component: InvestmentSimulator,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
