<template>
    <div class="list_wn">
      <div class="gd_list">
        <strong>畅销榜</strong><span>更多</span>
      </div>
      <ul>
        <v-touch tag="li" @tap="handleList(index)" class="recommend" v-for="(item,index) in GirlBoom" :key="index">
          <div class="recommend_img"><img :src="item.iconUrl"></div>
          <h4>{{item.title}}</h4>
          <p>{{item.author}}</p>
        </v-touch>
      </ul>
    </div>
</template>

<script>
import {getGirlTuiJian} from "api/girl"
export default {
    name:"girlBoom",
    async created(){
        let data = await getGirlTuiJian();
        this.GirlBoom = data.data.books;
        this.GirlBoom.length = 3;
    },
    data(){
        return {
            GirlBoom:[],
            
        }
    },
    methods:{
    handleList(index){
      window.scrollTo(0,0)
      
       this.name = this.GirlBoom[index].title
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
