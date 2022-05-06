import Vue from "vue";
import App from "./App.vue";
import store from "./stores/index";
import { router } from "./router/index";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
