import http from "utils/http.js"
export const classifyData = (id)=>http("get","/abc/category/original/data.json",{id:id})