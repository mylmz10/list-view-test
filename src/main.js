import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { ListView, VTemplate } from "nativescript-vue-web";

Vue.component("ListView", ListView);
Vue.component("VTemplate", VTemplate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
