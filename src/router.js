import Vue from "vue";
import Router from "vue-router";
import vtemplate from "./views/vtemplate.vue";
import input_page from "./views/input_page.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/input_page",
      name: "input_page",
      component: input_page
    },
    {
      path: "/vtemplate",
      name: "vtemplate",
      component: vtemplate
    }
  ]
});
