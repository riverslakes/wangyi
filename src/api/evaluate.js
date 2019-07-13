import http from "utils/http.js"
export const getData = ()=>http("get","/sns/comment/get.json",{id:1})