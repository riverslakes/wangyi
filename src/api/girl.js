import http from "utils/http.js"
export const getGirlBody = ()=>http("get","/abc/index/cms.json?sourceUuids=b7826880735e4205990bdb09ee4cd2db_4%2Cts_1553a28fa0f74b94ae12e6609a646249_4%2C853ae2c652564465906f81df3d3e1284_4%2Cts_61eb740064ba42a6ad17669e936d6570_4%2C66fb8bf79d8e411bac0d66d14d99fd1d_4%2Cts_1eddcd0a23914890b71b4a2a696e5c7c_4",{limit:3})
export const getGirlTuiJian = ()=>http("get","/abc/rank/original/list/data.json?gender=female&sortType=day&type=sell",{limit:3})
export const getGirlChoiceness = ()=>http("get","/abc/index/cms.json?sourceUuids=ts_cd3a42e426c6405eb84dd3da54b70259_4%2Cbd_a5cbd099b19749deb4bd524cc3908d2c_4%2Cts_79a38e00cd16422f9546769ffab46e45_4%2Cts_0e2dc9929c89491292d6d3622475cd52_4%2Cts_ffe454f3fa71446183c45980a5db17bf_4%2Cts_35730aa1333248e7a9439bf01319a38a_4%2C5fb6290efba943c4b7aa9c844ab9eb35_4%2Cts_fde755854ea144189cb2486b8d88c269_4%2Cbd_12774322a145401ebcbde32ee65a5683_4",{limit:3})

