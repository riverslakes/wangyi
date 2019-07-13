import http from "utils/http.js"
export const getRankBoy = () => http("get", "/rank/original/list/data.json?gender=male&sortType=day&type=sell")
export const getRankGirl = () => http("get", "/rank/original/list/data.json?gender=female&sortType=day&type=sell")
export const getRankTushu = () => http("get", "/rank/publish/list/data.json?sortType=day&type=sell")
export const search = (val) => http("get", "/search/book/data.json?", { key:val})
  