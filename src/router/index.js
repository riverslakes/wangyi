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
import table from "./table";
import tableGirl from './tableGirl';
import tableTu from './tableTu';
import textContent from './textContent';
import search from './search';
export default new Router({
  routes: [
    body,
    girl,
    publish,
    ranking,
    free,
    classify,
    list,
    table,
    tableGirl,
    tableTu,
    textContent,
    search,
    { path: '/', redirect: to => {
         return "./boy"
      }}
  ]
})
