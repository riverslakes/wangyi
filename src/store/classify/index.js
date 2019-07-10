import {classifyData} from 'api/classify'
const state = {}

const mutations ={}

const actions = {
    async getData(){
        let data = await classifyData();
        console.log(111);
        console.log(data)
    }
}
export default {
    state,
    mutations,
    actions,
    namespaced:true
}