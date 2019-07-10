<template>
    <div class="list_wn">
      <div class="gd_list">
        <strong>重磅推荐</strong><span>更多</span>
      </div>
      <ul>
        <v-touch tag="li" @tap="handleList()" class="recommend" v-for="(item,index) in BoyTuiJian" :key="index">
           <div class="recommend_img"><img :src="item.iconUrl"></div>
          <h4>{{item.title}}</h4>
          <p>{{item.author}}</p>
        </v-touch>
      </ul>
    </div>
</template>

<script>
import {getBoyBoom} from "api/boy"
export default {
    name:"BoyTuiJian",
    async created(){
        let data = await getBoyBoom();
        
        this.BoyTuiJian = data.data.books;
        this.BoyTuiJian.length = 6;
        this.BoyTuiJian.splice(0,3);
    },
    data(){
        return {
            BoyTuiJian:[]
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
