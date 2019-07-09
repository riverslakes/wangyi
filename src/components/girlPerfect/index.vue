<template>
    <div class="list_fl">
        <div class="gd_list">
         <strong>完本强推</strong><span>更多</span>
        </div>
        <ul>
            <li class="list_play" v-for="(item,index) in GirlPerfect" :key="index">
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
import {getGirlChoiceness} from "api/girl";
export default {
  name:"girlPerfect",
  async created(){
    let data = await getGirlChoiceness();
    this.GirlPerfect = data.data;
    // this.GirlPerfect.splice(0,3);
    this.GirlPerfect.length = 3;
  },
  data(){
    return {
      GirlPerfect:[]
    }
  }
}
</script>

<style>

</style>
