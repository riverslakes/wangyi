import http from "utils/http.js"
export const classifyData = (id,page)=>http("get","/category/original/data.json",{id:id,page:page})
export const classifyGirlData = (id)=>http("get","/category/original/data.json?gender=female",{id:id})
export const classifyTuData = (id)=>http("get","/category/publish/data.json",{id:id})

