<template>
    <div class="list_wn">
      <div class="gd_list">
        <strong>畅销榜</strong><span>更多</span>
      </div>
      <ul>
        <v-touch tag="li" @tap="handleList(index)" class="recommend" v-for="(item,index) in BoyBoom" :key="index">
          <div class="recommend_img"><img :src="item.iconUrl"></div>
          <h4>{{item.title}}</h4>
          <p>{{item.author}}</p>
        </v-touch>
      </ul>
    </div>
</template>

<script>
import {getData} from "api/boy"
export default {
    name:"BoyBoom",
    async created(){
        let data = await getData();
        // console.log(data);
        // console.log(this.page);

        this.BoyBoom = data.data.books;
        this.BoyBoom.length = 3;
    },
    data(){
        return {
            BoyBoom:[],
            page:'',
            
        }
    },
    methods:{
    handleList(index){
      window.scrollTo(0,0)
      
      this.name = this.BoyBoom[index].title
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
