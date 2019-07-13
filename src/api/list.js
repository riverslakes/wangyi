import http from "utils/http.js"
export const listData = (key)=>http("get","/search/book/data.json",{key:key,pageSize:50})