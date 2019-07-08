<template>
    <div class="list_wn">
      <div class="gd_list">
        <strong>畅销榜</strong><span>更多</span>
      </div>
      <ul>
        <li class="recommend" v-for="(item,index) in BoyBoom" :key="index">
          <img :src="item.iconUrl">
          <h4>{{item.title}}</h4>
          <p>{{item.author}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
import {getBoyBoom} from "api/boy"
export default {
    name:"BoyBoom",
    async created(){
        let data = await getBoyBoom();
        
        this.BoyBoom = data.data.books;
        this.BoyBoom.length = 3;
    },
    data(){
        return {
            BoyBoom:[]
        }
    }
}
</script>

<style>

</style>
