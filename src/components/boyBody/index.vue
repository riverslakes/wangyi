<template>
     <div class="list_boy">
        <ul>
            <li class="list_play" v-for="(item,index) in boyRecommend" :key="index">
                <div class="play_img">
                  <img :src="item.coverImage">
                  <div class="play_xm">限免</div>
                </div>
                  <div class="play_txt">
                  <h3>{{item.title}}</h3>
                  <p>{{item.author}}</p>
                  <p class="txt_jj">{{item.description}}</p>
                  <p><span class="txt_mf">已完结</span>
                  <span class="txt_mf">{{item.category}}</span>
                  <span class="txt_mf">{{item.showTotalCount}}</span></p>
                </div>
            </li>
          </ul>
        </div>
</template>

<script>
import {getBoyNow} from "api/boy";
export default {
  name:"boybody",
  async created(){
  let data = await getBoyNow();
  this.boyRecommend = data.data;
  this.boyRecommend.length = 3;
  },
  data(){
    return {
      boyRecommend:[]
    }
  }
}
</script>

<style>

</style>
