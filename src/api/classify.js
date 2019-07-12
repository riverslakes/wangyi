import http from "utils/http.js"
export const classifyData = (id,page)=>http("get","/abc/category/original/data.json",{id:id,page:page})
export const classifyGirlData = (id)=>http("get","/abc/category/original/data.json?gender=female",{id:id})
export const classifyTuData = (id)=>http("get","/abc/category/publish/data.json",{id:id})

