import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/HomePage";
import Cart from "./pages/CartPage.vue";
import Item from "./pages/InnerPage.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/item",
    name: "Item",
    component: Item,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
