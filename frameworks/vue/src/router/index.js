import { createRouter, createWebHistory } from "vue-router";
import Scenario1 from "../components/scenario-1/Scenario1.vue";
import Scenario2 from "../components/scenario-2/Scenario2.vue";
import Scenario3 from "../components/scenario-3/Scenario3.vue";
import Scenario4 from "../components/scenario-4/Scenario4.vue";
import Scenario5 from "../components/scenario-5/Scenario5.vue";
import Main from "../components/Main.vue";

const routes = [
  { path: "/scenario-1", component: Scenario1 },
  { path: "/scenario-2", component: Scenario2 },
  { path: "/scenario-3", component: Scenario3 },
  { path: "/scenario-4", component: Scenario4 },
  { path: "/scenario-5", component: Scenario5 },
  { path: "/", component: Main }, // Default redirect
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
