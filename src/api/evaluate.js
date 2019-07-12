import http from "utils/http.js"
export const getData = ()=>http("get","/abc/sns/comment/get.json",{id:1})