<template>
      <div class="list_wn">
            <div class="gd_list">
                <strong>经典排行榜</strong><span>更多</span>
            </div>
            <ul>
                <li class="recommend" v-for="(item,index) in PublishRank" :key="index">
                <img :src="item.iconUrl" alt="">
                <h4>{{item.title}}</h4>
                <p>{{item.author}}</p>
                </li>
            </ul>
        </div>
</template>

<script>
import {getPublishNow} from "api/publish";
export default {
    name:"publishRank",
    async created(){
        let data = await getPublishNow();
        this.PublishRank = data.data.books;
        this.PublishRank.splice(0,6);
        this.PublishRank.length = 3;
    },
    data(){
        return {
            PublishRank:[]
        }
    }
}
</script>

<style>

</style>
