import http from "utils/http.js"
export const getPublishNow = ()=>http("get","/rank/publish/list/data.json?sortType=day&type=sell",{limit:3})