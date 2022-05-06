import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";

Vue.use(VueRouter);

const routes = [{ path: "/", component: MainView }];

export const router = new VueRouter({
  mode: "history",
  routes,
});
