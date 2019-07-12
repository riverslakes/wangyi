export default {
    path:"/list",
    component:()=>import("views/list"),
    name:"list",
    meta: {
        keepAlive: false // 不需要缓存
      }
}