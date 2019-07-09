<template>
    <div class="list_wn">
      <div class="gd_list">
        <strong>重磅推荐</strong><span>更多</span>
      </div>
      <ul>
        <li class="recommend" v-for="(item,index) in GirlTuiJian" :key="index">
          <div class="recommend_img"><img :src="item.iconUrl"></div>
          <h4>{{item.title}}</h4>
          <p>{{item.author}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
import {getGirlTuiJian} from "api/girl"
export default {
    name:"girlTuiJian",
    async created(){
        let data = await getGirlTuiJian();
        this.GirlTuiJian = data.data.books;
        this.GirlTuiJian.length = 3;
    },
    data(){
        return {
            GirlTuiJian:[]
        }
    }
}
</script>

<style>

</style>
