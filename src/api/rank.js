import http from "utils/http.js"
export const getRankBoy = () => http("get", "/abc/rank/original/list/data.json?gender=male&sortType=day&type=sell")
export const getRankGirl = () => http("get", "/abc/rank/original/list/data.json?gender=female&sortType=day&type=sell")
export const getRankTushu = () => http("get", "/abc/rank/publish/list/data.json?sortType=day&type=sell")
export const search = (val) => http("get", "/abc/search/book/data.json?", { key:val})
  