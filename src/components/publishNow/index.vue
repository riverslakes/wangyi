<template>
      <div class="list_wn">
            <div class="gd_list">
                <strong>主编推荐</strong><span>更多</span>
            </div>
            <ul>
                <v-touch tag="li" @tap="handleList()" class="recommend" v-for="(item,index) in PublishNow" :key="index">
                <img :src="item.iconUrl" alt="">
                <h4>{{item.title}}</h4>
                <p>{{item.author}}</p>
                </v-touch>
            </ul>
        </div>
</template>

<script>
import {getPublishNow} from "api/publish";
export default {
    name:"publishNow",
    async created(){
        let data = await getPublishNow();
        this.PublishNow = data.data.books;
        this.PublishNow.length = 6;
    },
    data(){
        return {
            PublishNow:[]
        }
    },
    methods:{
    handleList(){
      this.$router.push("/list")
    }
  }
}
</script>

<style>

</style>
