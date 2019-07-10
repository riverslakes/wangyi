import Vue from 'vue'
import Router from "vue-router";

Vue.use(Router)
import body from "./boy";
import girl from "./girl";
import publish from "./publish";
import ranking from "./ranking";
import free from "./free";
import classify from "./classify";
import list from "./list";

export default new Router({
  routes: [
    body,
    girl,
    publish,
    ranking,
    free,
    classify,
    list,
    { path: '/', redirect: to => {
         return "./boy"
      }}
  ]
})
