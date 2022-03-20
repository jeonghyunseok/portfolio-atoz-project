import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../views/Index.vue";
import Jeong from "../views/Jeong.vue";
import Hwang from "../views/Hwang.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    components: { default: Index },
  },
  {
    path: "/jeong",
    name: "jeong",
    components: { default: Jeong },
  },
  {
    path: "/hwang",
    name: "hwang",
    components: { default: Hwang },
  },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes: routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
