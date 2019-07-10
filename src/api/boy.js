import http from "utils/http.js"
export const getBoyNow = ()=>http("get","/abc/index/cms.json?sourceUuids=bd_4a38c7625fbb454f8d3a147f664f23ca_4%2Cts_97b648a375354f33b751ebe307228551_4%2Cbd_a43293a6615147eba981b3dbcef839bd_4%2Cbd_133dcbd1edfe4f70a0e6369e716cb549_4%2Cbd_41cccdb3f7324293b127e1c6d458ebc8_4%2Cbd_b62251ada06f4b1587d9164420ff7cd8_4",{limit:3})
export const getBoyLoveLook= ()=>http("get","/abc/index/cms.json?sourceUuids=48fd31e48ebc4a3783b312a3c948baf9_4%2Cbd_eb9815bc73854ec1b72bcda65c9f9f28_4%2Cbd_6c3b059b2be54b6d88a11cf8de7351d1_4%2Cbd_133dcbd1edfe4f70a0e6369e716cb549_4%2Cbd_41cccdb3f7324293b127e1c6d458ebc8_4%2Cbd_b62251ada06f4b1587d9164420ff7cd8_4",{limit:3})
export const getBoyBoom = ()=>http("get","/abc/rank/original/list/data.json?gender=male&sortType=day&type=sell")
export const getData = ()=>http("get","/abc/category/original/data.json",{id:1})


// http://m.yuedu.163.com/category/original/data.json
// /rank/original/list/data.json?gender=male&sortType=day&type=sell
///category/original/data.json?id=7&gender=male&sort=2&pay=0&state=0&page=1&nextPageLink=都市
//http://m.yuedu.163.com/category/original/data.json?id=1&gender=male&sort=2&pay=0&state=0&page=1&nextPageLink=玄幻
//http://m.yuedu.163.com/category/original/data.json?id=5&gender=male&sort=2&pay=0&state=0&page=1&nextPageLink=悬疑