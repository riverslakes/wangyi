import {classifyData} from 'api/classify'
const state = {}

const mutations ={}

const actions = {
    async getData(){
        let data = await classifyData();
    }
}
export default {
    state,
    mutations,
    actions,
    namespaced:true
}