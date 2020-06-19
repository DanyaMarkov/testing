import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Mainp from "./components/mainp.vue";
import Worker from "./components/worker.vue";
import Motherboard from "./components/motherboard.vue";
import Car from "./components/car.vue";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    { path: "/mainp", component: Mainp },
    { path: "/worker", component: Worker },
    { path: "/motherboard", component: Motherboard },
    { path: "/car", component: Car },
  ],
});

new Vue({
  render: (h) => h(App),
  // router: router
  router: router,
}).$mount("#app");
