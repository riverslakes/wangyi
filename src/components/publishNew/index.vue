<template>
      <div class="list_wn">
            <div class="gd_list">
                <strong>新书上线</strong><span>更多</span>
            </div>
            <ul>
                <v-touch tag="li" @tap="handleList(index)" class="recommend" v-for="(item,index) in publishNew" :key="index">
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
    name:"publishNew",
    async created(){
        let data = await getPublishNow();
        this.publishNew = data.data.books;
        this.publishNew.length = 6;
    },
    data(){
        return {
            publishNew:[],
            obj:{}
        }
    },
    methods:{
    handleList(index){
        window.scrollTo(0,0)
     
       this.name = this.publishNew[index].title
         this.$router.push({
         path:"/list",
         query:{key:this.name}
         }
        ) 
    }
  }
}
</script>

<style>

</style>
